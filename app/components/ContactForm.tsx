"use client";

import { useState, useTransition, type FormEvent, type RefObject } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./Button";
import { InputField, TextareaField } from "./FormField";
import { submitContact } from "@/app/actions/contact";
import { validateContact, type ContactErrors, type ContactResult } from "@/lib/contact";
import { site } from "@/lib/content";

type Props = {
  message: string;
  onMessageChange: (value: string) => void;
  messageRef: RefObject<HTMLTextAreaElement | null>;
};

export default function ContactForm({ message, onMessageChange, messageRef }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [result, setResult] = useState<ContactResult | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    const clientErrors = validateContact({ name, email, message });
    setErrors(clientErrors);
    setResult(null);
    const firstInvalid = (["name", "email", "message"] as const).find((k) => clientErrors[k]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        const res = await submitContact(formData);
        setResult(res);
        if (res.status === "invalid") setErrors(res.errors);
        if (res.status === "success") {
          setName("");
          setEmail("");
          onMessageChange("");
        }
      } catch {
        setResult({ status: "error" });
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-title"
      className="relative space-y-5 rounded-2xl bg-white p-6 shadow-sm shadow-ink/5 md:p-8"
    >
      <InputField
        id="contact-name"
        name="name"
        label="Name"
        placeholder="Your name"
        autoComplete="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />
      <InputField
        id="contact-email"
        name="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <TextareaField
        id="contact-message"
        name="message"
        label="Message"
        placeholder="Tell us about your business and how we can help…"
        rows={4}
        required
        ref={messageRef}
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        error={errors.message}
      />

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" className="w-full" disabled={pending} aria-disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <div role="status" aria-live="polite">
        {result && <ResultMessage result={result} />}
      </div>
    </form>
  );
}

function ResultMessage({ result }: { result: ContactResult }) {
  const mail = (
    <a href={`mailto:${site.email}`} className="font-semibold underline">
      {site.email}
    </a>
  );
  switch (result.status) {
    case "success":
      return (
        <p className="rounded-lg bg-mint px-4 py-3 text-sm text-ink">
          Thanks! Your message has been sent. We&rsquo;ll be in touch soon.
        </p>
      );
    case "not_configured":
      return (
        <p className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
          The contact form is not configured yet, so your message was not sent. Please email us directly at {mail}.
        </p>
      );
    case "error":
      return (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          Something went wrong and your message was not sent. Please try again, or email us at {mail}.
        </p>
      );
    case "invalid":
      return <p className="text-sm text-red-700">Please fix the highlighted fields and try again.</p>;
  }
}
