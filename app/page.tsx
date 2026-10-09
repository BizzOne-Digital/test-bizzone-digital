import Header from "./components/Header";
import Hero from "./components/Hero";
import OfferBanner from "./components/OfferBanner";
import Services from "./components/Services";
import About from "./components/About";
import PricingAndContact from "./components/PricingAndContact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-brand focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <OfferBanner />
        <Services />
        <About />
        <PricingAndContact />
      </main>
      <Footer />
    </>
  );
}
