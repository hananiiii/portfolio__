export type ContactField = "name" | "email" | "subject" | "message";
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

export function validateContactValues(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Choose a subject.";
  if (!values.message.trim()) errors.message = "Enter a message.";
  return errors;
}

export function createMailtoHref(email: string, values: ContactValues): string {
  const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`;
  return `mailto:${email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
}
