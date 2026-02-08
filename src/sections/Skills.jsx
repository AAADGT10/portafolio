
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";

export default function Skills() {

    const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
  { name: "WooCommerce", icon: <SiWoocommerce />, color: "#96588A" },
];

    return(
        <section className="section" id="habilidades">
            <div className="container">
                {/* Titulo */}
                <h2 className="section__title">Habilidades</h2>

                {/* Sub titulo */}
                <p className="section__subtitle muted">Algunas tecnologías con las que trabajo</p>

                {/* Grid de tarjetas */}
                <div className="skills__grid">
                    {skills.map((skill) => (
                        <div key={skill.name} className="skill__card">
                            <div className="skill__icon" style={{ color: skill.color }}>{skill.icon}</div>
                            <p className="skill__name">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
