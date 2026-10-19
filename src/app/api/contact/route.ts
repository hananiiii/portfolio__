import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";
const subjects = new Set(["PhD / Research Opportunity", "Research Collaboration", "Project Inquiry", "Other"]);
const limits = new Map<string, { count: number; resetAt: number }>();
const fail = (error: string, status: number) => NextResponse.json({ error }, { status });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || new URL(origin).origin !== new URL(request.url).origin) return fail("Request could not be verified. Refresh and try again.", 403);
  if (Number(request.headers.get("content-length") ?? 0) > 10_000) return fail("Message is too large.", 413);
  let body: unknown;
  try { body = await request.json(); } catch { return fail("Invalid form submission.", 400); }
  if (!body || typeof body !== "object") return fail("Invalid form submission.", 400);
  const data = body as Record<string, unknown>;
  if (typeof data.company === "string" && data.company.trim()) return fail("Invalid form submission.", 400);

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const subject = typeof data.subject === "string" ? data.subject.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  if (!name || name.length > 120) return fail("Enter a name of 1–120 characters.", 400);
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail("Enter a valid email address.", 400);
  if (!subjects.has(subject)) return fail("Choose a listed subject.", 400);
  if (!message || message.length > 5000) return fail("Enter a message of 1–5,000 characters.", 400);

  const ip = request.headers.get("x-real-ip")?.trim() || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (ip) {
    const now = Date.now(), existing = limits.get(ip);
    if (!existing || existing.resetAt <= now) limits.set(ip, { count: 1, resetAt: now + 900_000 });
    else if (++existing.count > 5) return fail("Too many submissions. Please try again later.", 429);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) return fail("Message delivery is not configured yet. Please email me directly.", 503);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [siteConfig.contact.email], reply_to: email, subject: `Portfolio contact: ${subject}`, text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}` }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) return fail("Email service could not accept your message. Please try later or email me directly.", 502);
    return NextResponse.json({ message: "Thank you for getting in touch." });
  } catch {
    return fail("Email service is temporarily unavailable. Please try later or email me directly.", 502);
  }
}



