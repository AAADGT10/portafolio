# Portafolio | Andres Arrieta

Portafolio personal donde presento quién soy, las tecnologías con las que trabajo y los proyectos que he desarrollado.

🔗 **Demo en vivo:** https://portafolio-o8dnaaa.vercel.app/ https://d2zpwc0w70oab2.cloudfront.net/

<!-- Cuando tengas una captura del sitio, guárdala en src/assets y descomenta la línea de abajo -->
<!-- ![Vista previa del portafolio](src/assets/preview.png) -->

## Secciones

- **Inicio:** presentación y llamada a la acción.
- **Habilidades:** tecnologías organizadas por categoría (Frontend, Backend, Base de datos, Herramientas e IA), con filtros interactivos.
- **Proyectos:** tarjetas con capturas y descripción de cada trabajo.
- **Contacto:** botón flotante de WhatsApp y pie de página con enlaces.

## Tecnologías

- [React](https://react.dev/) con [Vite](https://vite.dev/)
- [React Icons](https://react-icons.github.io/react-icons/) para los logos
- CSS propio con tokens de diseño (variables CSS)
- ESLint para mantener el código consistente
- Despliegue en [Vercel](https://vercel.com/)

## Estructura del proyecto

```
src/
├── assets/          # Imágenes y capturas de proyectos
├── components/      # Header, Footer, botón de WhatsApp
├── sections/        # Hero, Habilidades, Proyectos, NotesDemo
├── styles/          # tokens.css, layout.css, components.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Cómo ejecutarlo en local

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
# 1. Clonar el repositorio
git clone https://github.com/AAADGT10/portafolio.git
cd portafolio

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Se abrirá en `http://localhost:5173`.

### Otros comandos

| Comando           | Qué hace                                  |
| ----------------- | ----------------------------------------- |
| `npm run build`   | Genera la versión de producción en `dist` |
| `npm run preview` | Sirve localmente la versión de producción |
| `npm run lint`    | Revisa el código con ESLint               |

## Personalización

- **Habilidades:** edita el arreglo `skills` en `src/sections/Skills.jsx`. Cada habilidad lleva nombre, icono, color y categoría.
- **Proyectos:** edita `src/sections/Proyectos.jsx` y agrega las capturas en `src/assets`.
- **Colores y tipografía:** cambia las variables en `src/styles/tokens.css`.

## Despliegue

El proyecto está conectado a Vercel: cada `push` a la rama principal genera un nuevo despliegue automáticamente.

## Contacto

- Portafolio: https://portafolio-o8dnaaa.vercel.app/
- GitHub: https://github.com/AAADGT10/
- LinkedIn: https://www.linkedin.com/in/andr%C3%A9s-arrieta-6099811b9/?isSelfProfile=true
- Correo: andres.arrieta.d10@gmail.com

---

Hecho por Andres Arrieta.
