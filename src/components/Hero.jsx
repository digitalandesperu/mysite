import RocketIcon from "@/assets/icons/Rocket";

const Hero = () => (
  <section
    id="inicio"
    className="pt-32 pb-24 text-center px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b]"
    // Optimización LCP: establecer mínimo height para evitar reflow
    style={{ minHeight: '100vh' }}
  >
    <span className="px-6 py-3 mb-6 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 rounded-full text-sm font-medium inline-flex items-center gap-2 backdrop-blur-sm animate-pulse">
      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      Desarrollo web profesional
    </span>

    {/* H1 con gradiente completo - Progressive Enhancement */}
    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
      <span className="bg-gradient-to-br from-cyan-400 via-blue-500 to-[#724ECF] text-transparent bg-clip-text animate-gradient">
        Lleva tu negocio al siguiente <br /> nivel digital
      </span>
      {" "}
      {/* Ícono animado con colores vibrantes */}
      <span className="inline-block align-middle mt-4 animate-bounce" aria-hidden="true">
        <RocketIcon width="75px" height="75px" />
      </span>
    </h1>

    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
      Diseños modernos, rápidos y optimizados para negocios y marcas personales.
    </p>

    <div className="flex gap-4 justify-center flex-wrap">
      <a 
        href="#contacto" 
        className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 overflow-hidden group"
      >
        <span className="relative z-10">Solicita tu web ahora →</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
      <a 
        href="#proyectos" 
        className="relative bg-slate-900 border-2 border-slate-700 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 group overflow-hidden"
      >
        <span className="relative z-10 group-hover:text-cyan-300 transition-colors">Ver proyectos</span>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  </section>
);

export default Hero;
