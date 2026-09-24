import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaNodeJs, FaGitAlt, FaGithub, FaAws } from "react-icons/fa";
import { SiWoocommerce, SiExpress, SiMysql, SiClaude, SiGooglegemini, SiPhp } from "react-icons/si";

const CATEGORIES = ["Todas", "Frontend", "Backend", "Base de datos", "Herramientas", "IA"];

const skills = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", category: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", category: "Frontend" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", category: "Frontend" },
  { name: "React", icon: <FaReact />, color: "#61DAFB", category: "Frontend" },
  { name: "WordPress", icon: <FaWordpress />, color: "#21759B", category: "Frontend" },
  { name: "WooCommerce", icon: <SiWoocommerce />, color: "#96588A", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs />, color: "#5FA04E", category: "Backend" },
  // Express y GitHub son oscuros: usan el color de texto del tema para verse en fondo oscuro o claro
  { name: "Express.js", icon: <SiExpress />, color: "var(--text, #9ca3af)", category: "Backend" },
  { name: "PHP", icon: <SiPhp />, color: "#21759B", category: "Backend" },

  // Base de datos
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1", category: "Base de datos" },

  // Herramientas
  { name: "Git", icon: <FaGitAlt />, color: "#F05032", category: "Herramientas" },
  { name: "GitHub", icon: <FaGithub />, color: "var(--text, #9ca3af)", category: "Herramientas" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900", category: "Herramientas" },

  // IA
  { name: "Claude Code", icon: <SiClaude />, color: "#D97757", category: "IA" },
  { name: "Gemini", icon: <SiGooglegemini />, color: "#8E75B2", category: "IA" },
];

export default function Skills() {
  const [active, setActive] = useState("Todas");

  const visible = active === "Todas" ? skills : skills.filter((s) => s.category === active);

  return (
    <section className="section" id="habilidades">
      <div className="container">
        <h2 className="section__title">Habilidades</h2>
        <p className="section__subtitle muted">Algunas tecnologías con las que trabajo</p>

        {/* Filtros */}
        <div className="skills__filters" role="group" aria-label="Filtrar habilidades por categoría">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills__filter ${active === cat ? "is-active" : ""}`}
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de tarjetas */}
        <div className="skills__grid">
          {visible.map((skill) => (
            <div key={skill.name} className="skill__card" style={{ "--skill-color": skill.color }}>
              <div className="skill__icon" aria-hidden="true">{skill.icon}</div>
              <p className="skill__name">{skill.name}</p>
              <span className="skill__category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
