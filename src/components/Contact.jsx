import axios from "axios";

const Contact = () => {

 return (
  <section id="contacto" className="py-20 px-6 max-w-3xl mx-auto text-center" >
    <h3 className="text-4xl font-bold mb-4">Contacta con nosotros</h3>
    <p className="text-slate-400 mb-8">Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas</p>
    <form className="space-y-4 bg-[#1e293b] p-8 rounded-xl border border-[#334155]">
      <input type="text" placeholder="Tu nombre" className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white" />
      <input type="email" placeholder="Tu email" className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white" />
      <textarea placeholder="Cuéntanos sobre tu proyecto..." rows="5" className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white"></textarea>
      <button type="button" className="w-full bg-cyan-500 hover:bg-cyan-400 py-3 rounded-lg font-semibold text-white">
        Enviar mensaje ✈️
      </button>
    </form>
  </section>
);

};

  export default Contact;
