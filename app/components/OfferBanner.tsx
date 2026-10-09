import { Gift } from "lucide-react";

export default function OfferBanner() {
  return (
    <aside aria-label="Special offer" className="bg-mint">
      <p className="container-page flex items-center justify-center gap-3 py-3 text-center text-sm font-semibold text-ink md:text-base">
        <Gift className="h-5 w-5 shrink-0" aria-hidden="true" />
        First month 20% off for new clients
      </p>
    </aside>
  );
}
