import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { EUFunds } from "@/components/sections/EUFunds";
import { Financial } from "@/components/sections/Financial";
import { Tax } from "@/components/sections/Tax";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Process />
        <EUFunds />
        <Financial />
        <Tax />
        <CaseStudies />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
