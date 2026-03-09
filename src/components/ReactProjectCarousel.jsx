import { useState, useCallback, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  A11y,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Github } from 'lucide-react';
import projects from '../data/projects.json';

export default function ReactProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const activeProject = projects[activeIndex] || projects[0];

  // Attach custom navigation after swiper init
  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  const handleProgress = useCallback((swiper, prog) => {
    setProgress(prog);
  }, []);

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto" id="projects">
      {/* ── Header ── */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full border border-teal-500/30 text-teal-400 bg-teal-500/10">
          Portafolio
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-5 tracking-tight">
          Proyectos{' '}
          <span className="text-gradient">Destacados</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Una selección de mis trabajos más recientes, explorando desde
          interfaces modernas hasta arquitecturas sólidas de backend.
        </p>
      </motion.div>

      {/* ── Carousel Container ── */}
      <div className="relative">
        {/* Navigation Arrows — desktop */}
        <button
          ref={prevRef}
          className="carousel-nav-btn carousel-nav-prev"
          aria-label="Proyecto anterior"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          ref={nextRef}
          className="carousel-nav-btn carousel-nav-next"
          aria-label="Proyecto siguiente"
        >
          <ChevronRight size={22} />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
          grabCursor
          keyboard={{ enabled: true }}
          slidesPerView={1}
          spaceBetween={24}
          speed={700}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 2.5, spaceBetween: 28 },
            1280: { slidesPerView: 3, spaceBetween: 32 },
          }}
          navigation
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          onProgress={handleProgress}
          className="project-carousel"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={project.title} className="carousel-slide">
              <ProjectCard project={project} isActive={activeIndex === i} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── Mobile swipe hint ── */}
        <p className="text-center text-sm text-gray-500 mt-6 sm:hidden flex items-center justify-center gap-2">
          <span className="inline-block w-6 h-[1px] bg-gray-600" />
          Desliza para explorar
          <span className="inline-block w-6 h-[1px] bg-gray-600" />
        </p>

        {/* ── Progress bar ── */}
        <div className="mt-10 max-w-md mx-auto">
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>
          <div className="flex justify-between items-center mt-3 text-xs text-gray-500 font-mono">
            <span>{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
            <span className="text-gray-400 font-outfit">{activeProject.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   Project Card — Sub-component
   ───────────────────────────────────── */
function ProjectCard({ project, isActive, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardContent = (
    <motion.div
      className={`project-card ${isActive ? 'project-card--active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Image container */}
      <div className="project-card__image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
          draggable="false"
        />
        {/* Overlay */}
        <div className="project-card__overlay">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
              >
                {project.url && (
                  <span className="project-card__action-btn">
                    <ExternalLink size={18} />
                    <span>Ver proyecto</span>
                  </span>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__action-btn project-card__action-btn--ghost"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Status badge */}
        {project.description?.includes('*EN PROGRESO*') && (
          <span className="absolute top-3 left-3 z-20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-amber-500/90 text-black rounded-full flex items-center gap-1.5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            En progreso
          </span>
        )}
      </div>

      {/* Content */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">
          {project.description?.replace('*EN PROGRESO* ', '')}
        </p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full no-underline"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
