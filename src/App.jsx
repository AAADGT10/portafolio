import "./styles/tokens.css"
import "./App.css"
import "./styles/layout.css"
import "./styles/components.css"

import Header from "./components/Header"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Projects from "./sections/Proyectos"
import NotesDemo from "./sections/NotesDemo"
import Footer from "./components/Footer"
import WhatsappButton from "./components/WhastAppButon"

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <NotesDemo />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  )
}
