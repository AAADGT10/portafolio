import imgDemo from "../assets/img-crud.jpg";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Plataforma de Evaluación de Subsidios",
      description: "Sistema web full-stack para gestión y evaluación de subsidios sociales. Desarrollado con Node.js, Express, React y base de datos MySQL.",
      image: imgDemo, // Puedes cambiar esta imagen por una de tu proyecto
      link: "https://github.com/AAADGT10/plataforma-subsidios", // Cambia por tu link real de GitHub o Demo
      buttonText: "Ver Proyecto"
    },
    {
      id: 2,
      title: "Sitio Web WordPress 1",
      description: "Desarrollo y diseño personalizado en WordPress, optimizado para rendimiento, diseño responsivo y SEO.",
      image: imgDemo, // Reemplaza por la captura de pantalla del sitio
      link: "https://tu-sitio-wordpress-1.com", // Cambia por el enlace real
      buttonText: "Visitar Sitio"
    },
    {
      id: 3,
      title: "Sitio Web WordPress 2",
      description: "Implementación de sitio web corporativo en WordPress con gestión de contenidos e integración de herramientas.",
      image: imgDemo, // Reemplaza por la captura de pantalla del sitio
      link: "https://tu-sitio-wordpress-2.com", // Cambia por el enlace real
      buttonText: "Visitar Sitio"
    }
  ];

  return (
    <section className="section" id="proyectos">
      <div className="container">
        <h2 className="section__title">Proyectos</h2>
        <p className="section__subtitle muted">Algunos de mis trabajos</p>

        <div className="projects__list" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {projectsData.map((project) => (
            <div className="project" key={project.id}>
              {/* Imagen del proyecto */}
              <div className="project__mock">
                <img src={project.image} alt={project.title} />
              </div>

              {/* Texto e información */}
              <div className="project__info">
                <h3 className="project__title">{project.title}</h3>
                <p className="muted">{project.description}</p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--primary"
                >
                  {project.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}