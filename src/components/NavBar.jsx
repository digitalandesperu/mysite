import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ["Inicio", "Servicios", "Por qué elegirnos", "Proyectos", "Clientes", "Contacto"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">Digital Andes Perú</h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300">
          {menuItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/\\s+/g, "-")}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden flex flex-col gap-1 p-2" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
        <ul className="px-6 py-4 space-y-4 bg-[#0f172a]/95 backdrop-blur-lg">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\\s+/g, "-")}`}
                className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
