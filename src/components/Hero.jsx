import RocketIcon from "@/assets/icons/Rocket";

const Hero = () => (
  <section id="inicio" className="pt-32 pb-24 text-center px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
    <span className="px-4 py-2 mb-4 bg-[#1e293b] text-cyan-300 rounded-full text-sm font-medium inline-flex items-center gap-2">Desarrollo web profesional</span>
    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-br from-cyan-500 to-[#724ECF] text-transparent bg-clip-text">
      Lleva tu negocio al siguiente <br /> nivel digital{" "}
      <span className="inline-block align-middle mt-4">
        <RocketIcon width="75px" height="75px" />
      </span>
    </h2>
    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">Diseños modernos, rápidos y optimizados para negocios y marcas personales.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <a href="#contacto" className="bg-gradient-to-br from-cyan-500 to-[#724ECF] px-6 py-3 rounded-lg font-semibold text-white shadow-lg">
        Solicita tu web ahora →
      </a>
      <a href="#proyectos" className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg font-semibold text-white">
        Ver proyectos
      </a>
    </div>
  </section>
);

export default Hero;
