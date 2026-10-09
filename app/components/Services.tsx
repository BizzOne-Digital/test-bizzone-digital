import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import AnalyticsIllustration from "./AnalyticsIllustration";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y bg-gradient-to-b from-[#fbf9ff] to-white">
      <div className="container-page">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Our Services"
            title="Make your next move count."
            description="Practical digital marketing services to help small businesses get noticed, attract the right customers, and grow."
          />
          <div className="hidden justify-center md:flex lg:w-[45%] lg:justify-end">
            <AnalyticsIllustration />
          </div>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <li key={s.title}>
              <ServiceCard {...s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
