import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, l as Fragment, f as createAstro, n as renderScript, o as renderHead, p as renderSlot } from '../chunks/astro/server_zM61O7Eb.mjs';
import 'kleur/colors';
/* empty css                                 */
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState, useEffect, useRef, useMemo } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { CheckCircle2, FileText, Download, ExternalLink, Info } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$BackgroundParticles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="background" data-astro-cid-m2lfuit3> ${Array.from({ length: 12 }).map((_, i) => {
    const left = `${i * 8}vw`;
    const lineDuration = 10 + i % 5;
    const numDots = Math.random() > 0.5 ? 2 : 1;
    const dots = Array.from({ length: numDots }).map((_2, j) => {
      const isWhite = Math.random() > 0.5;
      const color = isWhite ? "#ffffff" : "#3b82f6";
      const size = Math.random() * 2 + 3;
      const duration = 3 + Math.random() * 5;
      const delay = Math.random() * 5;
      return renderTemplate`<div class="dot"${addAttribute(`left: ${left};
                  width: ${size}px;
                  height: ${size}px;
                  background-color: ${color};
                  animation-duration: ${duration}s;
                  animation-delay: ${delay}s;`, "style")} data-astro-cid-m2lfuit3></div>`;
    });
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-m2lfuit3": true }, { "default": ($$result2) => renderTemplate` <div class="line"${addAttribute(`left: ${left}; animation-duration: ${lineDuration}s;`, "style")} data-astro-cid-m2lfuit3></div> ${dots}` })}`;
  })} </div>`;
}, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/BackgroundParticles.astro", void 0);

const sections = [
  { id: "home", label: "Inicio", icon: /* @__PURE__ */ jsx(FaHome, {}) },
  { id: "about", label: "Sobre Mí", icon: /* @__PURE__ */ jsx(FaUser, {}) },
  { id: "projects", label: "Proyectos", icon: /* @__PURE__ */ jsx(FaProjectDiagram, {}) },
  { id: "cv", label: "Currículum", icon: /* @__PURE__ */ jsx(FaFileAlt, {}) },
  { id: "contact", label: "Contáctame", icon: /* @__PURE__ */ jsx(FaEnvelope, {}) }
];
function NavbarComponent() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1
      }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "glass-panel rounded-full px-6 py-3 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex items-center gap-3 text-white font-outfit font-bold text-xl tracking-tight group", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/logo-cl.svg",
          alt: "Camilo Lavado Logo",
          className: "h-10 w-10 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Camilo Lavado" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex space-x-2 items-center text-sm font-medium font-outfit", children: sections.map(({ id, label, icon }) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: `#${id}`,
        className: `relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${activeSection === id ? "text-teal-400 bg-white/10 shadow-[inner_0_0_10px_rgba(255,255,255,0.05)]" : "text-gray-300 hover:text-white hover:bg-white/5"}`,
        children: [
          /* @__PURE__ */ jsx("span", { className: activeSection === id ? "drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" : "", children: icon }),
          /* @__PURE__ */ jsx("span", { children: label })
        ]
      },
      id
    )) }),
    /* @__PURE__ */ jsxs("details", { className: "relative md:hidden group", children: [
      /* @__PURE__ */ jsx("summary", { className: "cursor-pointer text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition list-none", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16m-7 6h7" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 mt-4 w-48 glass-panel rounded-2xl flex flex-col p-2 text-sm font-medium font-outfit z-50 origin-top-right transform group-open:animate-in group-open:fade-in group-open:scale-100 scale-95 opacity-0 transition-all duration-200", children: sections.map(({ id, label, icon }) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: `#${id}`,
          className: `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeSection === id ? "bg-white/10 text-teal-400" : "text-gray-300 hover:text-white hover:bg-white/5"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: activeSection === id ? "drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" : "", children: icon }),
            label
          ]
        },
        id
      )) })
    ] })
  ] }) });
}

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NavbarComponent", NavbarComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/NavbarComponent.jsx", "client:component-export": "default" })}`;
}, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$2;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro = createAstro();
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/logo.svg"><!-- 🔍 SEO y Social Meta --><meta name="description" content="Portafolio de Camilo Lavado, desarrollador full stack con experiencia en NestJS, Java, SQL y sistemas de alto rendimiento."><meta property="og:title" content="Camilo Lavado | Desarrollador Full Stack"><meta property="og:description" content="Portafolio profesional con proyectos en NestJS, Java, Angular y más. Santiago, Chile."><meta property="og:image" content="https://camilo-lavado.dev/og-cover.webp"><meta property="og:url" content="https://camilo-lavado.dev"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Camilo Lavado | Desarrollador Full Stack"><meta name="twitter:description" content="Portafolio profesional con proyectos en NestJS, Java, Angular y más. Santiago, Chile."><meta name="twitter:image" content="https://camilo-lavado.dev/og-cover.webp"><meta name="twitter:site" content="@camilo_lavado"><meta name="twitter:creator" content="@camilo_lavado"><meta name="theme-color" content="#1a202c"><!-- 🔠 Fuentes --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;700;800&display=swap" rel="stylesheet"><title>Camilo Lavado | Full Stack Developer</title>${renderHead()}</head> <body class="relative bg-gray-950 text-white font-sans overflow-x-hidden"> <!-- 📊 Vercel Integrations --> ${renderComponent($$result, "Analytics", $$Index$1, {})} ${renderComponent($$result, "SpeedInsights", $$Index$2, {})} <!-- 🎨 UI --> ${renderComponent($$result, "BackgroundParticles", $$BackgroundParticles, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="relative z-10"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/layouts/Layout.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" class="min-h-screen flex flex-col justify-center items-center text-center px-4 relative"> <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15)_0,rgba(0,0,0,0)_50%)]"></div> <div class="z-10 flex flex-col items-center"> <h1 class="text-5xl md:text-7xl font-extrabold mb-4 font-outfit tracking-tight animate-fade-in-up"> <span class="text-white">Camilo</span> <span class="text-gradient drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">Lavado</span> </h1> <p class="text-xl md:text-3xl mb-8 text-gray-300 font-medium tracking-wide animate-fade-in-up" style="animation-delay: 200ms;">
Full Stack Developer
</p> <a href="#about" class="group relative inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-white transition-all duration-300 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] animate-fade-in-up" style="animation-delay: 400ms;"> <span>Conóceme más</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </a> </div> </section>`;
}, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-4 md:px-0 max-w-4xl mx-auto text-center" id="about"> <div class="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group">  <div class="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl group-hover:bg-teal-400/30 transition-colors duration-500"></div> <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors duration-500"></div> <div class="relative z-10"> <h2 class="text-3xl md:text-5xl font-outfit font-bold text-white mb-8 tracking-tight inline-block relative">
Sobre Mí
<div class="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div> </h2> <p class="text-gray-300 mb-6 leading-relaxed md:text-lg text-left">
Soy desarrollador full stack con experiencia en <strong class="text-teal-400">bases de datos relacionales</strong> (SQL Server, MySQL), <strong class="text-teal-400">backend moderno</strong> con <strong class="text-teal-400">NestJS, Node.js, Java (Spring)</strong> y sistemas legados en <strong class="text-teal-400">.NET y C#</strong>. Me especializo en <strong>optimización de consultas</strong>, <strong>automatización de procesos</strong> y <strong>desarrollo de APIs RESTful</strong> robustas y eficientes.
</p> <p class="text-gray-300 mb-6 leading-relaxed md:text-lg text-left">
He participado en proyectos empresariales aplicando <strong>metodologías ágiles (Scrum)</strong>, control de versiones con <strong>Git/GitHub</strong> y gestión de tareas en <strong>Azure DevOps, Jira e ITM Platform</strong>. También tengo experiencia en <strong>frontend</strong> con <strong class="text-blue-400">Angular, React y Primefaces</strong>, e integración de servicios externos como <strong class="text-green-400">WhatsApp Business</strong> e <strong class="text-pink-400">Instagram Basic API</strong>.
</p> <p class="text-gray-300 mb-10 leading-relaxed md:text-lg text-left">
Siempre estoy en constante formación en <strong>nuevas tecnologías</strong> y <strong>mejores prácticas de desarrollo</strong>, buscando aportar soluciones que mejoren el rendimiento, la escalabilidad y la mantenibilidad de los sistemas.
</p> <h3 class="text-2xl font-outfit font-semibold text-white mb-6">Stack Principal</h3> <div class="flex flex-wrap justify-center gap-3"> ${[
    "NestJS",
    "Java",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "SQL Server",
    "Spring",
    "Angular",
    "React",
    "Tailwind CSS"
  ].map((tech) => renderTemplate`<span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm font-medium hover:bg-white/10 hover:border-teal-400/50 hover:text-teal-300 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-default"> ${tech} </span>`)} </div> </div> </div> </section>`;
}, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/About.astro", void 0);

const projects = [
	{
		title: "Rugby League Manager - API",
		description: "*EN PROGRESO* Backend en NestJS para la gestión completa de ligas de rugby en Chile y LATAM. Incluye autenticación, control de roles y documentación Swagger.",
		tags: [
			"NestJS",
			"PostgreSQL",
			"TypeORM"
		],
		image: "/projects/RLM-Backend.webp",
		url: "https://rugby-league-manager-backend.onrender.com/api/docs"
	},
	{
		title: "Almacenes Digitales",
		description: "Sistema web para el control de inventario y ventas, con login seguro, administración de usuarios y reportes personalizados. Trabajé en la implementación de nuevos modulos como el de fiados y ventas.",
		tags: [
			"Java",
			"MySQL",
			"Spring Boot",
			"JWT",
			"PrimeFaces"
		],
		image: "/projects/Adigitales.webp",
		url: "https://www.almacenesdigitales.cl"
	},
	{
		title: "Juanshigram — El Verdadero Lápiz",
		description: "Landing page y portafolio para artista urbano y ghostwriter. Integra diseño moderno, sección de servicios profesionales y accesos directos a plataformas musicales.",
		tags: [
			"Astro",
			"Tailwind CSS",
			"Frontend"
		],
		image: "/projects/Juanshigram.webp",
		url: "https://juanshigram.vercel.app/"
	},
	{
		title: "Cabal Codex",
		description: "Herramienta digital y enciclopedia para Blood Bowl 2025. Permite gestionar equipos, consultar reglas, construir rosters y organizar torneos.",
		tags: [
			"React",
			"Tailwind CSS",
			"Web App"
		],
		image: "/projects/Cabal-Codex.webp",
		url: "https://cabal-codex.vercel.app/"
	}
];

function ReactProjectCarousel() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current && swiperRef.current.params?.navigation) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation?.init();
      swiperRef.current.navigation?.update();
    }
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 max-w-6xl mx-auto", id: "projects", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-outfit font-bold text-white mb-4 tracking-tight inline-block relative", children: [
        "Proyectos ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Destacados" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 max-w-2xl mx-auto text-lg", children: "Una selección de mis trabajos más recientes, explorando desde interfaces modernas hasta arquitecturas sólidas de backend." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4 mb-8 sm:flex hidden px-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          ref: prevRef,
          className: "flex items-center justify-center w-10 h-10 rounded-full glass-panel text-white hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group",
          "aria-label": "Anterior",
          title: "Proyecto anterior",
          children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 group-hover:-translate-x-1 transition-transform", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          ref: nextRef,
          className: "flex items-center justify-center w-10 h-10 rounded-full glass-panel text-white hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group",
          "aria-label": "Siguiente",
          title: "Proyecto siguiente",
          children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 group-hover:translate-x-1 transition-transform", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-gray-400 mb-4 sm:hidden animate-pulse", children: "⇢ Desliza para ver más proyectos" }),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
        loop: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: { clickable: true },
        autoplay: { delay: 3500 },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        },
        navigation: true,
        onSwiper: (swiper) => {
          swiperRef.current = swiper;
        },
        className: "custom-swiper",
        children: projects.map((project) => /* @__PURE__ */ jsx(SwiperSlide, { className: "mt-6", children: /* @__PURE__ */ jsx(
          motion.a,
          {
            href: project.url || "#",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "block h-full",
            whileHover: { scale: 1.03 },
            whileTap: { scale: 0.97 },
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, ease: "easeOut" },
            children: /* @__PURE__ */ jsxs("div", { className: "glass-panel p-4 rounded-2xl border border-white/10 hover:border-teal-500/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-300 h-full min-h-[380px] group relative overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
              /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col justify-between relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl mb-4 h-48", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.title,
                    className: "object-cover w-full h-full group-hover:scale-110 transition-transform duration-700",
                    loading: "lazy"
                  }
                ) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-outfit font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors", children: project.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-4 flex-grow leading-relaxed", children: project.description }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-auto", children: project.tags.map((tag) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full font-medium",
                    children: tag
                  },
                  tag
                )) })
              ] })
            ] })
          }
        ) }, project.title))
      }
    )
  ] });
}

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ReactProjectCarousel", ReactProjectCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/ReactProjectCarousel.jsx", "client:component-export": "default" })}`;
}, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/Projects.astro", void 0);

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres")
});
function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: zodResolver(contactSchema) });
  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        reset();
        setIsSubmitted(true);
        toast.success("Mensaje enviado correctamente 🎉");
      } else {
        const errorData = await response.json();
        toast.error(`Error al enviar: ${errorData.error}`);
      }
    } catch (error) {
      toast.error("Ocurrió un error al enviar el mensaje.");
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "py-24 px-4 max-w-4xl mx-auto text-white", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-outfit font-extrabold text-center mb-12 tracking-tight relative", children: [
      "Contáctame ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Hoy" })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: isSubmitted ? /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.4 },
        className: "glass-panel text-center p-12 rounded-3xl border border-teal-500/30",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20 ring-1 ring-teal-400/50 shadow-[0_0_20px_rgba(45,212,191,0.3)]", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-teal-300", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-outfit font-bold mb-4 text-white", children: "¡Gracias por tu mensaje!" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-lg", children: "Te responderé lo antes posible." })
        ]
      },
      "thanks"
    ) : /* @__PURE__ */ jsxs(
      motion.form,
      {
        onSubmit: handleSubmit(onSubmit),
        className: "glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-8 relative overflow-hidden",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.4 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block mb-2 text-sm font-medium text-gray-300", children: "Nombre" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "name",
                type: "text",
                ...register("name"),
                placeholder: "Tu nombre",
                className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all duration-300"
              }
            ),
            errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm mt-2", children: errors.name.message })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block mb-2 text-sm font-medium text-gray-300", children: "Correo electrónico" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "email",
                type: "email",
                ...register("email"),
                placeholder: "tu@correo.com",
                className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all duration-300"
              }
            ),
            errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm mt-2", children: errors.email.message })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block mb-2 text-sm font-medium text-gray-300", children: "Mensaje" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                rows: "5",
                ...register("message"),
                placeholder: "¿En qué te puedo ayudar?",
                className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all duration-300 resize-none"
              }
            ),
            errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm mt-2", children: errors.message.message })
          ] }),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              type: "submit",
              disabled: isSubmitting,
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              className: "relative z-10 w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-400 hover:to-teal-300 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]",
              children: isSubmitting ? "Enviando Mensaje..." : "Enviar Mensaje"
            }
          )
        ]
      },
      "form"
    ) })
  ] });
}

const CV_PATH = "/cv/CamiloLavadoCV.pdf";
async function head(url) {
  try {
    const res = await fetch(url, { method: "HEAD", cache: "no-store" });
    const bytes = Number(res.headers.get("content-length") || 0);
    const lm = res.headers.get("last-modified") || void 0;
    const size = bytes > 0 ? bytes / (1024 * 1024) >= 1 ? `${(bytes / (1024 * 1024)).toFixed(2)} MB` : `${(bytes / 1024).toFixed(0)} KB` : void 0;
    return { size, lastModified: lm, ok: res.ok };
  } catch {
    return { ok: false };
  }
}
function ResumeSection() {
  const [meta, setMeta] = useState({ ok: true });
  const [prefetched, setPrefetched] = useState(false);
  const [ack, setAck] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      head(CV_PATH).then(setMeta);
    }
  }, []);
  useEffect(() => {
    if (!ack) return;
    const t = setTimeout(() => setAck(null), 4e3);
    return () => clearTimeout(t);
  }, [ack]);
  const prefetch = () => {
    if (prefetched || typeof window === "undefined") return;
    fetch(CV_PATH, { method: "GET", headers: { Range: "bytes=0-0" } }).catch(() => {
    });
    setPrefetched(true);
  };
  const openNewTab = () => {
    if (typeof window !== "undefined") {
      window.open(CV_PATH, "_blank", "noopener,noreferrer");
      setAck("opened");
    }
  };
  const onDownloadClick = () => {
    setAck("downloaded");
  };
  const ackCopy = useMemo(
    () => ack === "opened" ? { title: "Abriendo mi CV", text: "Se está mostrando en una nueva pestaña." } : { title: "Descarga iniciada", text: "Tu navegador comenzará a descargar el PDF." },
    [ack]
  );
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "cv",
      className: "relative py-24 px-6 max-w-4xl mx-auto text-white flex flex-col items-center justify-center font-outfit",
      children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-teal-500/10 to-transparent blur-3xl opacity-50" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-tight relative", children: [
          "Currículum ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Vitae" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-white/10 glass-panel flex flex-col items-center justify-center transition-all duration-500 hover:border-teal-400/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] w-full max-w-2xl", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              "aria-hidden": true,
              className: "pointer-events-none absolute inset-0 opacity-[0.03]",
              style: {
                backgroundImage: "linear-gradient(to right, rgba(45,212,191,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(45,212,191,1) 1px, transparent 1px)",
                backgroundSize: "32px 32px"
              }
            }
          ),
          /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: ack ? /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, rotateX: -15, y: 20 },
              animate: { opacity: 1, rotateX: 0, y: 0 },
              exit: { opacity: 0, rotateX: 15, y: -20 },
              transition: { duration: 0.45 },
              className: "relative p-10 text-center flex flex-col items-center justify-center",
              children: [
                /* @__PURE__ */ jsx("div", { className: "mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/15 ring-1 ring-teal-400/40 shadow-[0_0_20px_rgba(45,212,191,0.2)]", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8 text-teal-300", "aria-hidden": true }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-teal-200 mb-2", children: ackCopy.title }),
                /* @__PURE__ */ jsxs("p", { className: "text-teal-100/80 mb-6", children: [
                  ackCopy.text,
                  " Gracias por tu interés!"
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setAck(null),
                    className: "inline-flex px-6 py-2 rounded-full border border-teal-500/30 text-sm text-teal-300 hover:bg-teal-500/10 hover:text-teal-200 transition-colors",
                    children: "Volver"
                  }
                )
              ]
            },
            "ack"
          ) : /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.98 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.98 },
              transition: { duration: 0.35 },
              className: "relative p-8 flex flex-col items-center justify-center",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-3 mb-6 justify-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-500/30", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-blue-300", "aria-hidden": true }) }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Descarga el PDF o ábrelo en una pestaña nueva." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-6", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: CV_PATH,
                      download: true,
                      onMouseEnter: prefetch,
                      onClick: onDownloadClick,
                      className: "flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-medium hover:bg-teal-500/20 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto",
                      children: [
                        /* @__PURE__ */ jsx(Download, { className: "h-5 w-5", "aria-hidden": true }),
                        "Descargar CV"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: openNewTab,
                      onMouseEnter: prefetch,
                      className: "flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:text-white hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto",
                      children: [
                        /* @__PURE__ */ jsx(ExternalLink, { className: "h-5 w-5", "aria-hidden": true }),
                        "Abrir pestaña"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "relative mt-4 flex items-center justify-center gap-3 text-sm", children: meta.ok ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-300/90", "aria-hidden": true }),
                  /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
                    meta.size ? /* @__PURE__ */ jsxs("span", { className: "mr-3", children: [
                      "Tamaño: ",
                      meta.size
                    ] }) : null,
                    meta.lastModified ? /* @__PURE__ */ jsxs("span", { children: [
                      "Actualizado: ",
                      new Date(meta.lastModified).toLocaleDateString()
                    ] }) : null
                  ] })
                ] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
                  /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-amber-300/90", "aria-hidden": true }),
                  /* @__PURE__ */ jsxs("span", { className: "text-amber-200/90", children: [
                    "No se pudo verificar el archivo. Revisa la ruta: ",
                    /* @__PURE__ */ jsx("code", { className: "text-white/90", children: CV_PATH })
                  ] })
                ] }) })
              ]
            },
            "normal"
          ) })
        ] })
      ]
    }
  );
}

const $$Resume = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ResumeSection", ResumeSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/ResumeSection", "client:component-export": "default" })}`;
}, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/Resume.astro", void 0);

function FooterComponent() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative py-16 mt-24 px-6 text-gray-300 bg-[#050510] shadow-[0_-10px_40px_rgba(45,212,191,0.05)] border-t border-teal-500/10 overflow-hidden font-outfit", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 pointer-events-none opacity-20 animate-pulse bg-[radial-gradient(rgba(45,212,191,0.15)_1px,transparent_1px)] bg-[length:30px_30px]" }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "relative z-10 max-w-5xl mx-auto text-center",
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-6 text-sm text-gray-400 font-medium tracking-wide", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Camilo Lavado. Todos los derechos reservados."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-8 text-2xl text-gray-400", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://github.com/camilo-lavado",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-3 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 hover:border-teal-400/50 hover:text-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:-translate-y-1 transition-all duration-300",
                children: /* @__PURE__ */ jsx(FaGithub, {})
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.linkedin.com/in/camilo-lavado/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-3 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300",
                children: /* @__PURE__ */ jsx(FaLinkedin, {})
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:camilolavado.it@gmail.com?subject=Consulta%20desde%20tu%20portafolio&body=Hola%20Camilo%2C%20me%20interesa%20conversar%20contigo%20sobre...",
                className: "p-3 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 hover:border-teal-400/50 hover:text-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:-translate-y-1 transition-all duration-300",
                children: /* @__PURE__ */ jsx(FaEnvelope, {})
              }
            )
          ] })
        ]
      }
    )
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Resume", $$Resume, {})} ${renderComponent($$result2, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/ContactForm", "client:component-export": "default" })} ${renderComponent($$result2, "FooterComponent", FooterComponent, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/components/FooterComponent", "client:component-export": "default" })} ` })}`;
}, "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/pages/index.astro", void 0);

const $$file = "C:/Archivos/02_Proyectos_Dev/astro/Camilo Lavado/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
