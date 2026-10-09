import Image from "next/image";
import aboutImg from "@/public/images/about-team.jpg";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <Image
          src={aboutImg}
          alt="Two team members reviewing work together on a laptop in a shared office"
          placeholder="blur"
          sizes="(min-width: 1200px) 520px, (min-width: 768px) 50vw, 100vw"
          className="aspect-[16/10] w-full rounded-2xl object-cover"
        />
        <div>
          <p className="eyebrow">About Test One Digital</p>
          <h2 id="about-title" className="heading-lg mt-3">
            Your business. Our focus.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            We help small business owners turn their digital presence into meaningful connections and new leads.
          </p>
          <span aria-hidden="true" className="mt-7 block h-0.5 w-12 rounded bg-brand" />
        </div>
      </div>
    </section>
  );
}
