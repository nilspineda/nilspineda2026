# 🚀 Website 2026 – Nils Pineda

Sitio web personal desarrollado con **Astro** y **Tailwind CSS**, con sistema de **blog y portafolio dinámicos**, paginación estática y contenido basado en **Content Collections**.

---

## 🧱 Stack tecnológico

- ⚡ **Astro**
- 🎨 **Tailwind CSS**
- 🗂️ **Astro Content Collections**
- 📝 Markdown (`.md`)
- ☁️ Deploy en **Vercel**
- 🧠 SSG (Static Site Generation)

---

## 📁 Estructura del proyecto

```txt
src/
├── content/
│   ├── blog/
│   │   └── *.md
│   ├── portafolio/
│   │   └── *.md
│   └── config.ts
│
├── layouts/
│   └── Layout-nav.astro
│
├── pages/
│   ├── blog/
│   │   ├── index.astro
│   │   ├── [slug].astro
│   │   └── page/
│   │       └── [page].astro
│   │
│   ├── portafolio/
│   │   └── [slug].astro
│   │
│   ├── index.astro
│   └── 404.astro
│
└── styles/
✍️ Blog
📌 Listado
Ruta: /blog

Máximo 9 posts por página

Paginación:

/blog/page/2

/blog/page/3

📄 Detalle
Ruta: /blog/[slug]

Renderiza contenido Markdown con <Content />

🏷️ Frontmatter ejemplo
md
Copiar código
---
title: "James Saenz"
slug: "jamez-saenz"
image: "/jamesSaenz.png"
description: "Descripción del post"
date: 2025-10-03
draft: false
tags: ["web", "Diseño"]
---
⚠️ Los posts con draft: true no se muestran en producción.

🗂️ Portafolio
Ruta: /portafolio/[slug]

Generado con getStaticPaths

Contenido desde src/content/portafolio

Ejemplo:

md
Copiar código
---
title: "Proyecto X"
slug: "proyecto-x"
image: "/proyecto.png"
tags: ["web", "branding"]
---
⚙️ Instalación y uso
1️⃣ Instalar dependencias
bash
Copiar código
npm install
2️⃣ Desarrollo local
bash
Copiar código
npm run dev
3️⃣ Build producción
bash
Copiar código
npm run build
4️⃣ Preview
bash
Copiar código
npm run preview
