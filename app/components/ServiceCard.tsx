import type { Service } from "@/lib/content";

export default function ServiceCard({ title, description, price, icon: Icon }: Service) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-brand/5 md:p-7">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint">
        <Icon className="h-5 w-5 text-ink" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{description}</p>
      <p className="mt-6 border-t border-line pt-5 text-2xl font-extrabold tracking-tight text-brand">{price}</p>
    </article>
  );
}
