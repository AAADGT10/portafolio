import avatarImg from "../assets/img-perfil.jpg"

export default function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="container hero__inner">

                <div className="hero__content"> 
                    {/* Columna izquierda texto*/}
                    <p className="badge">Frontend · React · WordPress</p>

                    <h1 className="hero__title">Desarrollador Frontend enfocado en interfaces modernas y responsivas</h1>

                    <p className="hero__subtitle">Desarrollador WordPress con más de 4 años de experiencia en la creación, personalización y optimización de sitios webs.</p>

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