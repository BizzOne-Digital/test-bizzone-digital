type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ id, eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-md"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="heading-lg mt-3">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>}
    </div>
  );
}
