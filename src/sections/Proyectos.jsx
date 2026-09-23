import imgDemo from "../assets/img-crud.jpg";
import imgDemoxt from "../assets/screenshot-demoxt.jpg";
import imgAcademic from "../assets/screenshot-academic.jpg";
import imgCrowther from "../assets/screenshot-crowther.jpg";
import imgMaquinantio from "../assets/screenshot-maquinantio.jpg";
import imgCompliance from "../assets/screenshot-compliance.jpg";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "PLATAFORMA DE EVALUACIÓN DE SUBSIDIOS",
      description: "Sistema web full-stack para gestión y evaluación de subsidios sociales. Desarrollado con Node.js, Express, React y base de datos MySQL.",
      image: imgDemo, // Puedes cambiar esta imagen por una de tu proyecto
      link: "https://github.com/AAADGT10/plataforma-subsidios", // Cambia por tu link real de GitHub o Demo
      buttonText: "Ver Proyecto"
    },
    {
      id: 2,
      title: "DEMOLITION SPECIALTIES",
      description: "Desarrollo y diseño personalizado en WordPress desde cero basándome en un diseño en figma",
      image: imgDemoxt, // Reemplaza por la captura de pantalla del sitio
      link: "https://demotx.com", // Cambia por el enlace real
      buttonText: "Visitar Sitio"
    },
    {
      id: 3,
      title: "THE CROWTHER GROUP",
      description: "Implementación de sitio web corporativo en WordPress con gestión de contenidos e integración de herramientas.",
      image: imgCrowther, // Reemplaza por la captura de pantalla del sitio
      link: "https://thecrowthergroup.com", // Cambia por el enlace real
      buttonText: "Visitar Sitio"
    },
    {
      id: 3,
      title: "OPEN ROAD COMPLIANCE",
      description: "Implementación de sitio web corporativo en WordPress con gestión de contenidos e integración de herramientas.",
      image: imgCompliance, // Reemplaza por la captura de pantalla del sitio
      link: "https://openroadcompliance.com/", // Cambia por el enlace real
      buttonText: "Visitar Sitio"
    },
    {
      id: 3,
      title: "MAQUINANTIO",
      description: "Implementación de sitio web corporativo en WordPress con gestión de contenidos e integración de herramientas.",
      image: imgMaquinantio, // Reemplaza por la captura de pantalla del sitio
      link: "https://maquinantio.com.co/", // Cambia por el enlace real
      buttonText: "Visitar Sitio"
    },
    {
      id: 3,
      title: "ACADEMIC PRODUCTIONS",
      description: "Implementación de sitio web corporativo en WordPress con gestión de contenidos e integración de herramientas.",
      image: imgAcademic, // Reemplaza por la captura de pantalla del sitio
      link: "https://academicproductions.com/", // Cambia por el enlace real
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