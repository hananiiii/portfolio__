"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { validateContactValues, type ContactErrors, type ContactField } from "@/lib/contact";

const inputClass = "mt-1.5 block w-full rounded-md border border-line bg-white px-3 py-2.5 text-ink shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export function ContactForm({ email }: { email: string }) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<{ kind: "idle" | "sending" | "success" | "error"; message: string }>({ kind: "idle", message: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget, data = new FormData(form);
    const values = { name: String(data.get("name") ?? "").trim(), email: String(data.get("email") ?? "").trim(), subject: String(data.get("subject") ?? "").trim(), message: String(data.get("message") ?? "").trim() };
    const nextErrors = validateContactValues(values);
    setErrors(nextErrors);
    setStatus({ kind: "idle", message: "" });
    const invalid = (Object.keys(nextErrors) as ContactField[])[0];
    if (invalid) {
      const input = form.elements.namedItem(invalid);
      if (input instanceof HTMLElement) input.focus();
      return;
    }
    setStatus({ kind: "sending", message: "Sending your message…" });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, company: String(data.get("company") ?? "") }) });
      const result = (await response.json().catch(() => null)) as { error?: string; message?: string } | null;
      if (!response.ok) {
        const fallback = response.status === 503 ? `Form delivery is not configured yet. Please email ${email} directly.` : "Your message could not be sent. Please email me directly.";
        setStatus({ kind: "error", message: result?.error ?? fallback });
        return;
      }
      form.reset();
      setStatus({ kind: "success", message: result?.message ?? "Your message was accepted for delivery." });
    } catch {
      setStatus({ kind: "error", message: `A network error prevented delivery. Please email ${email} directly.` });
    }
  }
  function clearError(field: ContactField) {
    setErrors((old) => { if (!old[field]) return old; const next = { ...old }; delete next[field]; return next; });
    if (status.kind !== "sending") setStatus({ kind: "idle", message: "" });
  }

  return (
    <form noValidate onSubmit={submit} className="mt-6 space-y-5">
      <Field label="Name" name="name" error={errors.name}><input id="name" name="name" type="text" autoComplete="name" required maxLength={120} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={inputClass} onChange={() => clearError("name")} /></Field>
      <Field label="Email" name="email" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={inputClass} onChange={() => clearError("email")} /></Field>
      <Field label="Subject" name="subject" error={errors.subject}>
        <select id="subject" name="subject" required defaultValue="" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} className={inputClass} onChange={() => clearError("subject")}>
          <option value="" disabled>Select a subject</option><option>PhD / Research Opportunity</option><option>Research Collaboration</option><option>Project Inquiry</option><option>Other</option>
        </select>
      </Field>
      <Field label="Message" name="message" error={errors.message}><textarea id="message" name="message" rows={6} required maxLength={5000} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className={inputClass} onChange={() => clearError("message")} /></Field>
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="company">Leave this field empty</label><input id="company" name="company" tabIndex={-1} autoComplete="new-password" readOnly /></div>
      {status.message ? <p role={status.kind === "error" ? "alert" : "status"} aria-live={status.kind === "error" ? "assertive" : "polite"} className={`text-sm ${status.kind === "error" ? "text-red-700" : status.kind === "success" ? "text-green-700" : "text-muted"}`}>{status.message}</p> : null}
      <button type="submit" disabled={status.kind === "sending"} className="inline-flex items-center justify-center border border-navy-900 bg-navy-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent hover:bg-accent disabled:cursor-wait disabled:opacity-60">{status.kind === "sending" ? "Sending…" : "Send message"}</button>
    </form>
  );
}
function Field({ label, name, error, children }: { label: string; name: ContactField; error?: string; children: ReactNode }) {
  return <div><label htmlFor={name} className="block text-sm font-medium text-navy-900">{label}<span aria-hidden="true"> *</span></label>{children}{error ? <p id={`${name}-error`} className="mt-1 text-sm text-red-700" role="alert">{error}</p> : null}</div>;
}



