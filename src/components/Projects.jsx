
import LazyImage from "./LazyImage";

const Projects = () => {
  const projects = [
    {
      title: "EnergiAndes",
      description: "EnergiAndes Solutions ofrece servicios especializados de ingeniería eléctrica, mecánica y automatización industrial. Más de 250 proyectos completados en sectores minero, energético y renovable en Perú.",
      image: "https://www.corporativo.digitalandesperu.com/img/preview.webp",
      url: "https://www.corporativo.digitalandesperu.com/",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "MiTiendita",
      description: "Mi Tiendita - Tu Tienda Online de Confianza",
      image: "https://store.digitalandesperu.com/preview.webp",
      url: "https://store.digitalandesperu.com/",
      tags: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-violet-500 to-purple-600"
    },
    {
      title: "Terraza Limeña",
      description: "Carta del restobar moderno Terraza Limeña con lo mejor de la gastronomía peruana, cócteles exclusivos y buena música. Descubre La Terraza Limeña.",
      image: "https://menu.digitalandesperu.com/img/preview.webp",
      url: "https://menu.digitalandesperu.com/",
      tags: ["React", "Tailwind CSS", "Vercel"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
          Proyectos Destacados
        </h3>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          Soluciones innovadoras que transforman ideas en realidad
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
          >
            {/* Image Overlay (aparece en hover) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <LazyImage
                src={project.image}
                alt={`Captura del proyecto ${project.title}`}
                className="w-full h-full object-cover"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 p-8 h-full flex flex-col justify-between min-h-[380px]">
              {/* Gradient Badge - desaparece en hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl rounded-full group-hover:opacity-0 transition-opacity duration-500`} />

              {/* Icon - desaparece en hover */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:opacity-0 transition-all duration-300`}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              {/* Title & Description - desaparecen en hover */}
              <div className="flex-1 group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-cyan-400 rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold flex items-center justify-center gap-2 group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50"
              >
                Ver Proyecto
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
        >
          Contactanos
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Projects;
