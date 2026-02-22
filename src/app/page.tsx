import { Hero } from "@/components/hero";

import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { HowItWorks } from "@/components/how-it-works";
import { PartnershipProcess } from "@/components/partnership-process";
import { AudienceFit } from "@/components/audience-fit";
import { Results } from "@/components/results"; // "KPI Metrics"
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { PartnershipCTA } from "@/components/partnership-cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />

      <Problem />
      <Solution />
      <HowItWorks />
      <AudienceFit />
      <Results />
      <TestimonialsCarousel />
      <PartnershipProcess />
      <PartnershipCTA />
      <FAQ />
      <Footer />
    </>
  );
}
