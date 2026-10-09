import Image from "next/image";
import { ArrowRight, BarChart3 } from "lucide-react";
import { ButtonLink } from "./Button";
import heroImg from "@/public/images/hero-team.jpg";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="overflow-hidden">
      <div className="container-page grid items-center gap-12 pb-16 pt-8 md:pb-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-12">
        <div>
          <p className="inline-flex rounded-full bg-mint px-3.5 py-1.5 text-xs font-semibold text-ink">
            Smarter marketing. Real growth.
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-[clamp(2.25rem,1.5rem+3.2vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink"
          >
            Grow Your Business With Smarter <span className="text-brand">Digital Marketing</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Digital marketing for small businesses ready to grow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href="#contact" className="px-6">
              Get a Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <a href="#services" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand">
              Explore Services
              <ArrowRight
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div aria-hidden="true" className="absolute -left-4 top-1/4 h-1/2 w-1/3 rounded-3xl bg-lavender-deep/70 sm:-left-6" />
          <div aria-hidden="true" className="absolute -right-3 -top-3 h-2/3 w-1/2 rounded-3xl bg-lavender sm:-right-5 sm:-top-5" />
          <Image
            src={heroImg}
            alt="A small marketing team collaborating around a table while a colleague maps ideas on sticky notes"
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 600px, (min-width: 640px) 576px, 100vw"
            className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-ink/10"
          />
          <div className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-xl border border-white bg-mint px-4 py-3 shadow-lg shadow-ink/10 sm:-right-3">
            <BarChart3 className="h-5 w-5 text-ink" aria-hidden="true" />
            <span className="text-sm font-semibold text-ink">Built for growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
