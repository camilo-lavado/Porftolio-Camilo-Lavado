import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
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
  const swiperRef = useRef();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Proyectos Destacados
      </h2>

      {/* Flechas */}
      <div className="flex justify-center gap-6 mb-6">
        <button
          ref={prevRef}
          className="text-white hover:text-blue-500 text-2xl border px-4 py-1 rounded"
        >
          ←
        </button>
        <button
          ref={nextRef}
          className="text-white hover:text-blue-500 text-2xl border px-4 py-1 rounded"
        >
          →
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
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
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="custom-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
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
              <div className="bg-white/5 hover:bg-blue-900/10 p-4 rounded-xl border border-[1px] border-white/10 hover:border-blue-500 transition duration-300 h-full min-h-[340px]">
                <div className="h-full flex flex-col justify-between">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded mb-4 object-cover w-full h-40"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">
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
