import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BizzOne Digital | More Leads. More Customers. One Team.",
  description:
    "Ads, content, websites and CRM follow-up — handled by one agency, tracked in one place. Serving 100+ businesses across Canada & the US.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
