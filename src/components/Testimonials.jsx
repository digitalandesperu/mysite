import { useRef } from "react";
import testimonialsData from "@/assets/data/testimonials.json";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;
    if (!container) return;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="clientes" className="py-20 px-6 bg-[#0f172a] text-center relative">
      <h3 className="text-6xl font-bold mb-10 text-white">
        Lo que dicen nuestros clientes
      </h3>

      {/* Contenedor principal */}
      <div className="px-10 relative max-w-6xl mx-auto">
        {/* {Botones de navegación} */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-500/20 hover:bg-cyan-500/40 text-white rounded-full p-3 backdrop-blur-sm transition"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-500/20 hover:bg-cyan-500/40 text-white rounded-full p-3 backdrop-blur-sm transition"
        >
          →
        </button>

        {/* Carrusel scrollable */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-4 scrollbar-hide"
        >
          {testimonialsData.map((t, i) => {
            const parts = (t.name || "").split(/\s+/).filter(Boolean);
            const initials =
              parts.length === 0
                ? ""
                : parts.length === 1
                  ? parts[0][0]
                  : `${parts[0][0]}${parts[1][0]}`;

            return (
              <div
                key={i}
                className="snap-center flex-shrink-0 w-80 md:w-96 bg-[#1e293b] rounded-xl border border-[#334155] hover:border-cyan-400 transition-all text-left p-6"
              >
                <p className="text-slate-300 italic mb-4">“{t.text}”</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center font-bold text-white">
                    {initials.toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{t.name}</h4>
                    <p className="text-slate-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
