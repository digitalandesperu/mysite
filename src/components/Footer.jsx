const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800 bg-[#0b1220] text-slate-300">
      {/* línea superior con gradiente */}
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-400/70 to-cyan-500/0" />

      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3">
            {/* logo simple */}
            <svg width="28" height="28" viewBox="0 0 24 24" className="text-cyan-400">
              <path fill="currentColor" d="M3 17l6-9l4 6l3-4l5 7H3z" />
            </svg>
            <h4 className="text-xl font-semibold text-white">Digital Andes Perú</h4>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Desarrollo web moderno, SEO y soluciones con IA para hacer crecer tu negocio.
          </p>

          <div className="mt-5 flex items-center gap-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-cyan-400 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9c1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.45 2.9h-2.35v7A10 10 0 0 0 22 12"/></svg>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-cyan-400 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7m5 3a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2.2a2.8 2.8 0 1 0 0 5.6a2.8 2.8 0 0 0 0-5.6M18 6.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"/></svg>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-cyan-400 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2.9 2.9 0 0 1 3 2.9V21h-3.7v-7.1c0-1.7-.6-2.8-2.2-2.8c-1.2 0-1.9.8-2.2 1.6c-.1.3-.1.7-.1 1.1V21H10V8.5h3.6v1.7c.5-.9 1.7-2 3.7-2c2.6 0 4.7 1.7 4.7 5.4V21H19V3zM5.5 3A2.1 2.1 0 1 1 3.4 5.1A2.1 2.1 0 0 1 5.5 3M3.7 8.5h3.7V21H3.7z"/></svg>
            </a>
          </div>
        </div>

        {/* Enlaces */}
        <nav className="text-sm">
          <h5 className="font-semibold text-white mb-3">Navegación</h5>
          <ul className="space-y-2">
            <li><a href="#servicios" className="hover:text-cyan-400">Servicios</a></li>
            <li><a href="#proyectos" className="hover:text-cyan-400">Proyectos</a></li>
            <li><a href="#clientes" className="hover:text-cyan-400">Testimonios</a></li>
            <li><a href="#faq" className="hover:text-cyan-400">Preguntas frecuentes</a></li>
            <li><a href="#contacto" className="hover:text-cyan-400">Contacto</a></li>
          </ul>
        </nav>

        {/* Servicios destacados */}
        <div className="text-sm">
          <h5 className="font-semibold text-white mb-3">Servicios</h5>
          <ul className="space-y-2">
            <li>• Landing Pages</li>
            <li>• Sitios corporativos</li>
            <li>• E-commerce</li>
            <li>• SEO & Analytics</li>
            <li>• Branding & Logo</li>
          </ul>
        </div>

        {/* Contacto */}
        <address className="not-italic text-sm">
          <h5 className="font-semibold text-white mb-3">Contáctanos</h5>
          <p className="text-slate-400">Lima, Perú · Atención Lun–Sáb 9:00–19:00</p>
          <p className="mt-2">
            <a href="mailto:hola@digitalandes.pe" className="hover:text-cyan-400">hola@digitalandes.pe</a>
          </p>
          <p className="mt-1">
            <a href="tel:+51999999999" className="hover:text-cyan-400">+51 999 999 999</a>
          </p>
          <div className="mt-4">
            <a
              href="https://wa.me/51999999999?text=Hola%20Digital%20Andes,%20quiero%20una%20cotización"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 px-3 py-2 hover:bg-cyan-500/20 text-cyan-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1 13.4c-.2-.1-1-.5-1.1-.6c-.2-.1-.4-.1-.6.1s-.7.6-.8.7s-.3.2-.6.1s-1.1-.4-2.1-1.3c-.8-.8-1.3-1.8-1.4-2.1s0-.4.1-.6s.3-.3.4-.5c.1-.1.1-.2.2-.4s0-.3 0-.4s-.6-1.5-.8-2.1c-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 3.9 3.5c.5.2.9.4 1.3.5c.6.2 1.1.2 1.5.1c.5-.1 1.5-.6 1.7-1.2c.2-.6.2-1.1.1-1.2c-.1-.1-.2-.1-.4-.2zM12 2a10 10 0 0 0-8.7 15l-1.2 4.4l4.5-1.2A10 10 0 1 0 12 2z"/></svg>
              WhatsApp
            </a>
          </div>
        </address>
      </div>

      {/* CTA + barra legal */}
      <div className="border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            ¿Listo para despegar? <span className="text-white">Creamos tu web en tiempo récord.</span>
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-white hover:bg-cyan-400"
          >
            Solicitar cotización
            <span aria-hidden>→</span>
          </a>
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-8 text-xs text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {year} Digital Andes Perú. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="/terminos" className="hover:text-cyan-400">Términos</a>
            <a href="/privacidad" className="hover:text-cyan-400">Privacidad</a>
            <a href="/cookies" className="hover:text-cyan-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
