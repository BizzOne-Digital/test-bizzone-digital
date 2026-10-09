# Test One Digital – Landing Page

A single-page marketing site for Test One Digital, built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and Lucide icons.

## Local setup

```bash
npm install
cp .env.example .env.local   # optional: only needed for live email delivery
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build and serve |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run typecheck` | TypeScript check |

## Project structure

- `lib/content.ts`: all site copy, contact details, services and pricing plans (edit content here).
- `lib/contact.ts`: shared form validation, used by both the browser and the server.
- `app/actions/contact.ts`: Server Action that validates input, checks the honeypot and sends the email via Resend.
- `app/components/`: Header, Hero, OfferBanner, Services, About, PricingAndContact, ContactForm, Footer, plus the reusable Button, SectionHeading, ServiceCard, PricingCard and FormField components.
- `app/globals.css`: colour tokens (`brand`, `mint`, `lavender`, `ink`, `muted`, `line`) and layout utilities.

## Contact form configuration

The form submits to a Server Action that delivers email through [Resend](https://resend.com).

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (server-only; never prefix with `NEXT_PUBLIC_`) |
| `CONTACT_FROM_EMAIL` | Sender on a Resend-verified domain, e.g. `Test One Digital <website@yourdomain.com>` |
| `CONTACT_TO_EMAIL` | Inbox that receives inquiries |

If any of these variables are missing, the site still runs normally. On submission, the form tells the visitor that the form is not configured yet and offers the email link as an alternative. It never reports a successful send when no email was delivered.

To use a different provider, replace the `sendEmail` function in `app/actions/contact.ts`.

## Image sources

Both photos are AI-generated website assets created with the built-in image generation tool and stored locally in `public/images/`.

- `hero-team.jpg`: marketing team reviewing campaign strategy and purple-and-mint analytics.
- `about-team.jpg`: friendly agency team collaborating on a creative campaign.

The services analytics illustration and the brand mark are original inline SVGs.

Before launch, replace these with the client's own photos where possible.
