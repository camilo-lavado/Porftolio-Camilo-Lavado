import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { motion } from 'framer-motion';
import projects from '../data/projects.json';

export default function ReactProjectCarousel() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params?.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation?.init();
      swiperRef.current.navigation?.update();
    }
  }, []);

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4 tracking-tight inline-block relative">
          Proyectos <span className="text-gradient">Destacados</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Una selección de mis trabajos más recientes, explorando desde interfaces modernas hasta arquitecturas sólidas de backend.
        </p>
      </div>

      {/* Flechas visibles solo en sm+ */}
      <div className="flex justify-end gap-4 mb-8 sm:flex hidden px-4">
        <button
          ref={prevRef}
          className="flex items-center justify-center w-10 h-10 rounded-full glass-panel text-white hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Anterior"
          title="Proyecto anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="flex items-center justify-center w-10 h-10 rounded-full glass-panel text-white hover:text-teal-400 hover:border-teal-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Siguiente"
          title="Proyecto siguiente"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Swipe hint para móviles */}
      <p className="text-center text-sm text-gray-400 mb-4 sm:hidden animate-pulse">
        ⇢ Desliza para ver más proyectos
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="custom-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title} className="mt-6">
            <motion.a
              href={project.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-teal-500/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-300 h-full min-h-[380px] group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="overflow-hidden rounded-xl mb-4 h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-outfit font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
