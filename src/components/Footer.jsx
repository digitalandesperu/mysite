const Footer = () => (
  <footer className="py-10 border-t border-[#1e293b] text-center text-slate-400 text-sm">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-left">
        <h4 className="text-lg font-semibold text-white">OmnDev</h4>
        <p className="text-slate-500">Desarrollo web profesional</p>
      </div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-cyan-400">
          Facebook
        </a>
        <a href="#" className="hover:text-cyan-400">
          Instagram
        </a>
        <a href="#" className="hover:text-cyan-400">
          LinkedIn
        </a>
      </div>
    </div>
    <p className="mt-6 text-slate-600">© 2025 OmnDev. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
