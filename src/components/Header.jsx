import { useEffect, useState } from "react"
import LogoHeader from "../assets/logo-header.png"
import { FaHome, FaTools, FaFolderOpen, FaLaptopCode, FaAddressBook, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#inicio")

  useEffect(() => {
    function handleKeydown(e) {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
// Este es un comentario de mi nuevo portafolio y este es otro nuevo
// buenoes6te si es nuevo
//Ahora agrego uno nuevo

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeydown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => document.removeEventListener("keydown", handleKeydown)
  }, [isMenuOpen])

  function handleLinkClick(href) {
    setActiveLink(href)
    setIsMenuOpen(false)
  }

  const links = [
    ["Inicio", "#inicio", <FaHome />],
    ["Habilidades", "#habilidades", <FaTools />],
    ["Proyectos", "#proyectos", <FaFolderOpen />],
    ["Demo", "#demo", <FaLaptopCode />],
    ["Contactos", "#contacto", <FaAddressBook />],
  ]

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#inicio">
          <img src={LogoHeader} alt="Logo Andrés" className="brand__logo" />
        </a>

        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#demo">Demo</a>
          <a href="#contacto">Contactos</a>
        </nav>

        <button className="menuBtn" onClick={() => setIsMenuOpen(true)} aria-label="Abrir menú">
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobileMenuOverlay isOpen" role="dialog" aria-modal="true" aria-label="Menú móvil">
          <div className="mobileMenuBackdrop" onClick={() => setIsMenuOpen(false)}></div>

          <div className="mobileMenuCard mobileMenuCardFull isOpen">
            <button className="menuCloseBtn" onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú">
              ✕
            </button>  

            <div className="mobileMenuHead">
              <h2 className="mobileMenuName">Andrés Arrieta</h2>
              <p className="mobileMenuRole">Desarrollador Web</p>
            </div>

            <div className="mobileMenuList">
              {links.map(([label, href, icon]) => (
                <a key={href} href={href} className={activeLink === href ? "mobileLink active" : "mobileLink"} onClick={() => handleLinkClick(href)}>
                  <span className="mobileLink__icon">{icon}</span>
                  <span className="mobileLink__text">{label}</span>
                  <span className="mobileLink__chev">›</span>
                </a>
              ))}
            </div>

            <div className="mobileMenuSocials" aria-label="Redes">
              <a href="https://www.linkedin.com/in/andr%C3%A9s-arrieta-6099811b9/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="mailto:andres.arrieta.d10@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><MdEmail /></a>
              <a href="https://github.com/AAADGT10" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://wa.me/573105405093" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
