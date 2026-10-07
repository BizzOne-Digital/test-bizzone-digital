"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What does “all-in-one” actually include?",
    a: "Ads, content, video, website, SEO and CRM automation — run by one team with one point of contact and one monthly report.",
  },
  {
    q: "Do I need a big budget to get started?",
    a: "No. You can start with a single service, like a $79 website or $99/month reels, and add more as the leads come in.",
  },
  {
    q: "How fast can my website go live?",
    a: "Most starter websites go live within 24–48 hours once we have your content and details.",
  },
  {
    q: "Am I locked into a long contract?",
    a: "No long lock-ins. We earn your business every month with clear results and reporting.",
  },
  {
    q: "How will I know if it's working?",
    a: "You get a simple monthly report showing spend, leads, cost per lead and booked jobs — in plain language.",
  },
  {
    q: "Which areas do you serve?",
    a: "We're based in Mississauga and work with businesses across Canada and the US.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
          <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{f.q}</span>
            <span className="faq-icon">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <p>{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
