export type ContactInput = { name: string; email: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export type ContactResult =
  | { status: "success" }
  | { status: "invalid"; errors: ContactErrors }
  | { status: "not_configured" }
  | { status: "error" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the browser form and the server action so both enforce the same rules. */
export function validateContact({ name, email, message }: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  else if (name.trim().length > 100) errors.name = "Name must be 100 characters or fewer.";
  if (!email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email.trim()) || email.length > 254) errors.email = "Please enter a valid email address.";
  if (!message.trim()) errors.message = "Please enter a message.";
  else if (message.trim().length > 5000) errors.message = "Message must be 5,000 characters or fewer.";
  return errors;
}
