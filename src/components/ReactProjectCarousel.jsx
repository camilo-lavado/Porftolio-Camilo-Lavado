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
    <section className="py-20 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Proyectos Destacados
      </h2>

      {/* Flechas azules visibles solo en sm+ */}
      <div className="flex justify-center gap-6 mb-6 sm:flex hidden">
        <button
          ref={prevRef}
          className="text-blue-500 border border-blue-500 hover:bg-blue-600 hover:text-white text-lg px-4 py-2 rounded-full transition"
          aria-label="Anterior"
          title="Proyecto anterior"
        >
          ←
        </button>
        <button
          ref={nextRef}
          className="text-blue-500 border border-blue-500 hover:bg-blue-600 hover:text-white text-lg px-4 py-2 rounded-full transition"
          aria-label="Siguiente"
          title="Proyecto siguiente"
        >
          →
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
              <div className="bg-white/5 hover:bg-blue-900/10 p-3 rounded-xl border border-[1px] border-white/10 hover:border-blue-500 transition duration-300 h-full min-h-[300px]">
                <div className="h-full flex flex-col justify-between">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded mb-3 object-cover w-full h-36"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-900 text-blue-300 text-xs rounded"
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
