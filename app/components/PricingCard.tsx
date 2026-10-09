import type { Plan } from "@/lib/content";
import { Button } from "./Button";

export default function PricingCard({ plan, onSelect }: { plan: Plan; onSelect: (name: string) => void }) {
  const { name, price, description, icon: Icon, popular } = plan;
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-brand/5 md:p-7 ${
        popular ? "border-2 border-brand shadow-md shadow-brand/10" : "border border-line"
      }`}
    >
      {popular && (
        <span className="absolute right-5 top-5 rounded-full bg-mint px-3 py-1 text-xs font-semibold text-ink">
          Popular
        </span>
      )}
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint">
          <Icon className="h-5 w-5 text-ink" aria-hidden="true" />
        </span>
        <h3 className="text-lg font-bold tracking-tight text-ink">{name}</h3>
      </div>
      <p className="mt-6 text-[2rem] font-extrabold leading-none tracking-tight text-brand">{price}</p>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">{description}</p>
      <Button
        variant={popular ? "primary" : "outline"}
        className="mt-7 w-full"
        onClick={() => onSelect(name)}
        aria-label={`Get started with the ${name} plan`}
      >
        Get Started
      </Button>
    </article>
  );
}
