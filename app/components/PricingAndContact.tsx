"use client";

import { useRef, useState } from "react";
import { Instagram, Mail, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import PricingCard from "./PricingCard";
import ContactForm from "./ContactForm";
import { plans, site } from "@/lib/content";

/** Pricing and contact share state so choosing a plan can prefill the contact message. */
export default function PricingAndContact() {
  const [message, setMessage] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function selectPlan(planName: string) {
    const line = `I’m interested in the ${planName} plan.`;
    setMessage((current) => {
      const withoutOldPlan = current.replace(/^I’m interested in the \w+ plan\.\n*/, "");
      return withoutOldPlan.trim() ? `${line}\n\n${withoutOldPlan}` : line;
    });
    setAnnouncement(`${planName} plan selected. Your message has been updated.`);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    messageRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <section id="pricing" aria-labelledby="pricing-title" className="section-y bg-gradient-to-b from-[#fbf9ff] to-white">
        <div className="container-page">
          <SectionHeading
            id="pricing-title"
            align="center"
            eyebrow="Pricing"
            title="Simple plans. Room to grow."
            description="Flexible marketing support for every stage of your business."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <li key={plan.name}>
                <PricingCard plan={plan} onSelect={selectPlan} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="px-3 pb-16 sm:px-4 md:pb-20">
        <div className="mx-auto max-w-[1240px] rounded-3xl bg-lavender">
          <div className="container-page grid gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title" className="heading-lg mt-3">
                Let&rsquo;s grow your business.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                Have a question or ready to get started? We&rsquo;d love to hear from you.
              </p>
              <ul className="mt-8 space-y-2 text-ink">
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center gap-4 break-all hover:text-brand">
                    <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="inline-flex min-h-11 items-center gap-4 hover:text-brand">
                    <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram: ${site.instagramHandle} (opens in a new tab)`}
                    className="inline-flex min-h-11 items-center gap-4 hover:text-brand"
                  >
                    <Instagram className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Instagram: {site.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>

            <ContactForm message={message} onMessageChange={setMessage} messageRef={messageRef} />
          </div>
        </div>
        <p role="status" aria-live="polite" className="sr-only">
          {announcement}
        </p>
      </section>
    </>
  );
}
