import SuitcaseIcon from "@/assets/icons/Suitcase";
import SettingsIcon from "@/assets/icons/Settings";
import ShoppingCart from "@/assets/icons/ShoppingCart";
import LandingPage from "@/assets/icons/LandingPage";

const Services = () => (
  <section id="servicios" className="bg-[#0f172a] py-20 px-6 max-w-6xl mx-auto text-center">
    <h3 className="text-6xl font-bold mb-4">Nuestros Servicios</h3>
    <p className="text-xl text-slate-400 mb-12">Soluciones completas para llevar tu negocio al siguiente nivel digital</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          icon: <SuitcaseIcon width="40px" height="40px" />, title: "Páginas Corporativas", desc: "Transforma la presencia digital de tu empresa con una página web moderna, veloz y elegante. Refleja la esencia de tu marca, genera confianza y destaca frente a tu competencia desde el primer clic."
        },
        { icon: <ShoppingCart width="40px" height="40px" />, title: "Tiendas Online", desc: "Lanza tu tienda online lista para vender desde el día uno. Con pasarelas de pago seguras, diseño intuitivo y un panel que tú mismo puedes administrar." },
        {
          icon: <LandingPage width="40px" height="40px" />, title: "Landing Pages", desc: "Convierte visitantes en clientes con una landing page diseñada para captar atención y generar acción. Ideal para campañas publicitarias, lanzamientos o promociones que buscan resultados inmediatos." },
        {
          icon: <SettingsIcon width="40px" height="40px" />, title: "Inteligencia Artificial para tu negocio", desc: "Lleva tu negocio al siguiente nivel con soluciones de Inteligencia Artificial a medida: chatbots inteligentes, automatización de procesos, análisis predictivo y más. Ahorra tiempo, reduce costos y haz que tu empresa trabaje por ti." },
      ].map((s, i) => (
        <div key={i} className="p-6 bg-[#1e293b] rounded-xl border border-[#334155] transition-all duration-300 hover:shadow-xl hover:shadow-white/7 hover:scale-100 group">
          <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-112">{s.icon}</div>
          <h4 className="font-semibold text-xl mb-2">{s.title}</h4>
          <p className="text-slate-400 text-justify ">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
