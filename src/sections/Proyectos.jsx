import imgDemo from "../assets/img-crud.jpg"

export default function Projects() {
    return(
        <section className="section" id="proyectos">
            <div className="container">
                <h2 className="section__title">Proyectos</h2>
                <p className="section__subtitle muted">Algunos de mis trabajos</p>

                <div className="project">
                    {/*"Laptop" por ahora un placeholder con css*/}
                    <div className="project__mock"><img src={imgDemo} alt="img demo" /></div>

                     {/* Texto del proyecto */}
                     <div className="project__info">
                        <h3 className="project__title">CRUD de notas</h3>
                        <p className="muted">App para crear, editar y eliminar notas.</p>

                        <a href="#demo" className="btn btn--primary">Ver Demo</a>
                     </div>
                </div>
            </div>
        </section>
    )
}