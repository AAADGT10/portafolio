import avatarImg from "../assets/img-perfil.jpg"

export default function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="container hero__inner">

                <div className="hero__content"> 
                    {/* Columna izquierda texto*/}
                    <p className="badge">- SOBRE MÍ -</p>

                    <h1 className="hero__title">Desarrollador Full-Stack</h1>

                    <p className="hero__subtitle">Me enfoco en construir soluciones utilizando tecnologías como React, Node.js, Express y MySQL, además de contar con trayectoria en el desarrollo de sitios en WordPress. Apasionado por la arquitectura en la nube, actualmente amplío mis conocimientos en despliegue e infraestructura en AWS.</p>

                    <div className="hero__cta">
                        <a className="btn btn--primary" href="#proyectos">Ver proyectos</a>
                    </div>
                </div>
                <div className="hero__card">
                    <div className="avatar"> <img src={avatarImg} alt="Foto de Andrés Arrieta" /></div> 
                    <div className="hero__cardTitle">Andrés Arrieta</div>
                    <p className="muted">Desarrollador Web</p>
                </div>
            </div>
        </section>
    )

}