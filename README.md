# 🌐 Portafolio | Camilo Lavado

Bienvenido a mi portafolio personal, desarrollado con **Astro**, **React** y **Tailwind CSS**. Este sitio presenta mis proyectos, habilidades técnicas y experiencia como desarrollador.

🔗 **Versión en línea**: [https://porftolio-camilo-lavado.onrender.com](https://porftolio-camilo-lavado.onrender.com)

---

## 🚀 Tecnologías utilizadas

- ⚡️ [Astro](https://astro.build/) – Framework moderno para sitios rápidos
- 🎨 Tailwind CSS 4 – Utilidades de estilos sin configuración extra
- ⚛️ React – Componentes dinámicos como formulario de contacto y carrusel
- 🎞️ Framer Motion – Animaciones suaves y accesibles
- 📩 [Resend](https://resend.com/) – Envío de emails desde el formulario de contacto
- ⚙️ Vite – Herramienta de build rápida

---

## 📁 Estructura del proyecto

```plaintext
src/
├── components/          # Navbar, Footer, Hero, Carrusel, etc.
├── data/                # Proyectos destacados (JSON)
├── layouts/             # Layout principal con fondo animado
├── pages/
│   ├── index.astro      # Página principal
│   └── api/contact.ts   # API de contacto usando Resend
├── styles/
│   └── tailwind.css     # Estilos base y utilitarios
```

---

## 🧪 Iniciar en entorno local

1. Clona este repositorio:

```bash
git clone https://github.com/camilo-lavado/Porftolio-Camilo-Lavado.git
cd Porftolio-Camilo-Lavado
```

1. Instala dependencias:

```bash
npm install
```

1. Crea un archivo `.env` en la raíz con:

```env
RESEND_API_KEY=tu_clave_resend_aquí
```

1. Ejecuta el servidor local:

```bash
npm run dev
```

1. Accede a [http://localhost:4321](http://localhost:4321)

---

## 📦 Despliegue en producción

Este proyecto está desplegado en **Render.com**. Usa el adaptador `@astrojs/node` en modo `standalone`.

```bash
npm run build
npm run preview
```

---

## ✅ Funcionalidades

- [x] Animaciones con Framer Motion
- [x] Navbar con scroll-spy y blur
- [x] Carrusel responsivo con control táctil
- [x] Formulario con validación (Zod) y envío vía Resend
- [x] Secciones dinámicas: Hero, Sobre mí, Proyectos, Contacto y CV
- [x] Renderizado condicional y performance optimizada

---

## 🤝 Contribuciones

Este es un proyecto personal. Si tienes sugerencias o encuentras errores, puedes:

- Crear un issue
- Mandar un PR
- Contactarme en [LinkedIn](https://www.linkedin.com/in/camilo-lavado/)

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---
