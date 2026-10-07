"use client";

import { useState } from "react";

const needs = [
  "More leads from ads (Meta / Google / TikTok)",
  "SEO & ranking on Google",
  "Content, social media & reels",
  "A new website or app",
  "AI automation & CRM follow-up",
  "All-in-one growth plan",
];

export default function AuditForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to CRM / GoHighLevel webhook
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-card" id="audit">
        <h3>Thank you!</h3>
        <p className="muted">Your request has been received. Our team will reply within 24–48 hours.</p>
      </div>
    );
  }

  return (
    <form className="form-card" id="audit" onSubmit={handleSubmit}>
      <h3>Get your free growth audit</h3>
      <p className="muted">We review your ads, website and follow-up — and show you the fastest wins. No obligation.</p>
      <label>Full name<input name="name" placeholder="Your name" required /></label>
      <label>Business name<input name="business" placeholder="Your business" required /></label>
      <div className="row-2">
        <label>Phone<input name="phone" type="tel" placeholder="(000) 000-0000" required /></label>
        <label>Email<input name="email" type="email" placeholder="you@business.com" required /></label>
      </div>
      <label>
        What do you need most?
        <select name="need" defaultValue={needs[0]}>
          {needs.map((n) => <option key={n}>{n}</option>)}
        </select>
      </label>
      <button type="submit" className="btn btn-primary full">Book My Free Audit</button>
      <p className="tiny">We reply within 24–48 hours. No spam, ever.</p>
    </form>
  );
}
