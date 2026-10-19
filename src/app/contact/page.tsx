import type { Metadata } from "next";
import { Link2, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hanane Lachoub about doctoral research, research collaborations, and relevant projects.",
};

export default function ContactPage() {
  const { email, phone, linkedin, github } = siteConfig.contact;

  return (
    <>
      <PageHeader
        title="Contact"
        description="I welcome conversations about doctoral research, research collaborations, and opportunities involving multimodal AI, Edge AI, context-aware computing, and efficient intelligent systems."
      />
      <Container className="grid gap-12 py-10 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <section aria-labelledby="contact-details-title">
          <h2 id="contact-details-title" className="text-2xl">Get in touch</h2>
          <p className="mt-3 max-w-md leading-relaxed text-muted">
            You can contact me directly using the details below.
          </p>
          <ul className="mt-7 space-y-5">
            <li>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-3 text-navy-900 hover:text-accent">
                <Mail size={19} aria-hidden="true" />
                <span className="underline decoration-line underline-offset-4">{email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 text-navy-900 hover:text-accent">
                <Phone size={19} aria-hidden="true" />
                <span className="underline decoration-line underline-offset-4">{phone}</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <Link2 size={19} aria-hidden="true" />
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-accent underline">LinkedIn profile</a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <Link2 size={19} aria-hidden="true" />
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-accent underline">GitHub profile</a>
            </li>
          </ul>
        </section>
        <section aria-labelledby="contact-form-title">
          <h2 id="contact-form-title" className="text-2xl">Send a message</h2>
          <p className="mt-2 text-sm text-muted">Messages are sent to my email through the contact form. If delivery is unavailable, the form will explain how to reach me directly.</p>
          <ContactForm email={email} />
        </section>
      </Container>
    </>
  );
}

