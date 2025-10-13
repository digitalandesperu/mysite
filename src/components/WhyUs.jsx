import Thunder from "@/assets/icons/Thunder";
import Pallete from "@/assets/icons/Pallete";
import Headphones from "@/assets/icons/Headphones";
import Users from "@/assets/icons/User";

const WhyUs = () => (
  <section id="por-que-elegirnos" className="py-20 px-6 bg-[#0f172a] text-center">
    <h3 className="text-6xl font-bold mb-4">¿Por qué elegirnos?</h3>
    <p className="text-slate-400 text-xl mb-12">Trabajamos con las mejores prácticas y tecnologías del mercado</p>
    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {[
        { icon: <Thunder border="rounded-full" />, title: "Velocidad", desc: "Sitios optimizados para carga rápida." },
        { icon: <Pallete border="rounded-full" />, title: "Diseño Moderno", desc: "Interfaces atractivas y actuales." },
        { icon: <Headphones border="rounded-full" />, title: "Experiencia UX/UI", desc: "Diseño centrado en el usuario." },
        { icon: <Users border="rounded-full" />, title: "Soporte 24/7", desc: "Asistencia continua y confiable." },
      ].map((f, i) => (
        <div key={i} className="p-6 transition-all duration-300 hover:scale-100 group">
          <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-112">{f.icon}</div>
          <h4 className="font-semibold text-xl mb-2">{f.title}</h4>
          <p className="text-slate-400">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyUs;
