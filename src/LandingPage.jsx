import React from "react";
import { Navbar, Hero, Services, WhyUs, Projects, Testimonials, Contact, Footer, WhatsAppButton } from "@/components";

const LandingPage = () => {
  return (
    <div className="bg-[#0f172a] text-white relative overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default LandingPage;
