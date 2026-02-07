import LogoHeader from "../assets/logo-header.png"

export default function Header() {
    return (
    <header className="header">
        <div className="container header__inner">
            <a className="brand" href="#inicio"><img src={LogoHeader} alt="Logo Andrés" className="brand__logo" /></a>

            <nav className="nav">
                <a href="#inicio">Inicio</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#demo">Demo</a>
                <a href="#contactos">Contactos</a>
            </nav>
        </div>

    </header>
)
}