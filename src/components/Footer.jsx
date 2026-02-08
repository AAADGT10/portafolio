import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container footer__inner">
        <h2 className="footer__title">Contacto</h2>

        <div className="footer__links">
          <a
            className="footer__link"
            href="mailto:andres.arrieta.d10@gmail.com"
          >
            <span className="footer__icon" style={{ color: "#c95e16" }}>
              <HiOutlineMail />
            </span>
            <span>andres.arrieta.d10@gmail.com</span>
          </a>
          <a
            className="footer__link"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer__icon" style={{ color: "#0A66C2" }}>
              <FaLinkedin />
            </span>
            <span>LinkedIn</span>
          </a>
          <a
            className="footer__link"
            href="https://github.com/AAADGT10"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer__icon" style={{ color: "#111111" }}>
              <FaGithub />
            </span>
            <span>GitHub</span>
          </a>
          <a
            className="footer__link"
            href="https://wa.me/573105405093"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer__icon" style={{ color: "#25D366" }}>
              <FaWhatsapp />
            </span>
            <span>WhatsApp</span>
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Andrés Arrieta · Todos los derechos
          reservados
        </p>
      </div>
    </footer>
  );
}
