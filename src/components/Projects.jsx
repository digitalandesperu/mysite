const Projects = () => (
  <section id="proyectos" className="py-20 px-6 max-w-6xl mx-auto text-center">
    <h3 className="text-6xl font-bold mb-4">Proyectos Destacados</h3>
    <p className="text-slate-400 text-xl mb-12">Algunos de nuestros trabajos más recientes</p>
    <div className="grid md:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-48 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl opacity-80 hover:opacity-100 transition-all">
          <div>HOLA</div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
