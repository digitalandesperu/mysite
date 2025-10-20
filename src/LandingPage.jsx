import React, { Suspense, lazy } from "react";
import { Navbar, Hero, WhatsAppButton } from "@/components";
import { useDeferredComponent } from "@/hooks/usePerformance";

// Lazy load componentes no críticos para mejorar LCP
const Services = lazy(() => import("@/components/Services"));
const WhyUs = lazy(() => import("@/components/WhyUs"));
const Projects = lazy(() => import("@/components/Projects"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Fallback component simple
const SectionFallback = () => (
  <div className="h-32 flex items-center justify-center">
    <div className="animate-pulse bg-slate-800 rounded-lg h-8 w-32"></div>
  </div>
);

const LandingPage = () => {
  // Diferir componentes no críticos 500ms para mejorar LCP
  const shouldLoadNonCritical = useDeferredComponent(500);

  return (
    <div className="bg-[#0f172a] text-white relative overflow-hidden">
      {/* Componentes críticos para LCP */}
      <Navbar />
      <Hero />
      <WhatsAppButton />

      {/* Componentes diferidos para mejor LCP */}
      {shouldLoadNonCritical && (
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <WhyUs />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

export default LandingPage;
