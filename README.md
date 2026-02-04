<div align="center">
  <img src="public/logo.svg" alt="Nils Pineda Logo" width="120" />
  <h1>Nils Pineda | Portfolio 2026</h1>
  <p>
    <strong>Diseñador Gráfico & Desarrollador Web</strong> <br>
    Un portafolio moderno, rápido y escalable construido con el rendimiento en mente.
  </p>
  
  <p>
    <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-5.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro"></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
    <a href="https://vercel.com"><img src="https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"></a>
  </p>
</div>

---

## � Sobre el Proyecto

Este es el repositorio oficial del sitio web personal de **Nils Pineda** para el año 2026. Diseñado para exhibir experiencia en **diseño gráfico, desarrollo web y creación de contenido**. El sitio combina una estética moderna ("Glassmorphism", gradientes oscuros) con la velocidad inigualable de una arquitectura de sitio estático.

### ✨ Características Principales

- **⚡ Rendimiento Extremo:** Generación de sitio estático (SSG) con Astro.
- **🎨 Diseño Moderno:** Estilizado con Tailwind CSS, utilizando efectos de vidrio, gradientes radiales y animaciones fluidas.
- **📱 Totalmente Responsivo:** Adaptado perfectamente para móviles, tablets y escritorio.
- **📝 Blog & Portafolio:** Gestionado a través de **Astro Content Collections** para un manejo de contenido tipo CMS pero basado en archivos.
- **🛠️ Secciones Dinámicas:**
  - **Servicios:** Grid interactivo de oferta de servicios.
  - **Tecnologías:** Showcase de herramientas de Diseño (Adobe Suite, Figma) y Desarrollo (Astro, React, WordPress).
  - **Sobre Mí:** Línea de tiempo de experiencia laboral y biografía.

---

## 🛠️ Stack Tecnológico

El proyecto utiliza tecnologías de vanguardia para asegurar mantenibilidad y performance:

- **Core:** [Astro](https://astro.build) (Framework Web)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com) + [FontSource](https://fontsource.org) (DM Sans)
- **Iconos:** SVG optimizados y personalizados.
- **Contenido:** Markdown (`.md`) con Content Collections.
- **Despliegue:** Optimizado para Vercel / Netlify.

---

## 📂 Estructura del Proyecto

```bash
src/
├── components/      # Componentes UI reutilizables (Navbar, Services, Technologies...)
├── content/         # "Base de datos" en Markdown
│   ├── blog/        # Artículos del blog
│   └── portafolio/  # Proyectos del portafolio
├── layouts/         # Plantillas de páginas (Layout-nav, Layout principal)
├── pages/           # Rutas del sitio
│   ├── index.astro  # Página de Inicio (Home)
│   ├── sobremi.astro
│   ├── servicios.astro
│   ├── blog/        # Sistema de paginación del blog
│   └── portafolio/  # Páginas dinámicas de proyectos
└── styles/          # Estilos globales y configuraciones de Tailwind
```

---

## ⚙️ Instalación y Desarrollo

Si deseas clonar y ejecutar este proyecto localmente:

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/nilspineda2026.git
    cd nilspineda2026
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    Visita `http://localhost:4321` en tu navegador.

4.  **Construir para producción:**
    ```bash
    npm run build
    ```

---

## 🎨 Guía de Estilo Rápida

- **Colores Brand:**
  - Primary: `#2ab092` (Verde/Teal vibrante)
  - Background: `#131a22` (Dark Blue/Grey)
  - Accents: Gradientes radiales para profundidad.
- **Tipografía:** `DM Sans` (Variable weight).

---

<div align="center">
  Hecho con ❤️ y ☕ por <strong>Nils Pineda</strong>
</div>
