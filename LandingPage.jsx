import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Navbar, Hero, Services, WhyUs, Projects, Testimonials, Contact, Footer, WhatsAppButton } from "./components";

const LandingPage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="bg-[#0f172a] text-white font-[Poppins] relative overflow-hidden">
      {/* Fondo de partículas animadas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0f172a" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#38bdf8" },
            links: {
              color: "#38bdf8",
              distance: 120,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Secciones principales */}
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
