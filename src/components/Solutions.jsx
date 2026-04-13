'use client';
import React, { useRef } from 'react';
import { Fivestar, Lefticon, Righticon } from '../common/Icon';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

const testimonials = [
  {
    id: 1,
    name: 'Jordi Rodríguez',
    city: 'Barcelona',
    text: `"Nos compramos dos Bimba para la terraza y son una pasada. Las sacábamos cada tarde de verano cuando cenábamos fuera y aguantaban perfectas toda la velada. Nos encanta que puedas cambiar el tono de luz según el ambiente que quieras, y al no tener cables es super cómoda. Además, resisten bien el tema de la humedad. Llevamos ya tiempo usándolas casi a diario y cero problemas. Compra segura 100"`,
  },
  {
    id: 2,
    name: 'Ana',
    city: 'Valencia',
    text: `"Pedí la Bag en blanco y llegó en 48 horas, súper bien empaquetada. Me sorprendió lo rápido y cuidado que vino todo. La lámpara es justo lo que buscaba: compacta, muy fácil de llevar de un lado a otro, y queda ideal tanto en el salón como en el dormitorio. La uso muchísimo para leer en el sofá y luego me la llevo a la habitación. Es muy práctica y el diseño es limpio, sin estridencias. Contenta con la compra y con el servicio.”`,
  },
  {
    id: 3,
    name: 'Marta',
    city: 'Málaga',
    text: `"Compré la Stem en blanco para mi escritorio y ha sido un éxito total. Trabajo desde casa y necesitaba una luz directa y focal que no me cansara la vista. El brazo flexible es muy útil. Lo de la carga inalámbrica en la base es un plus que no esperaba, tengo el móvil siempre a mano y cargando. Ocupa poco, es elegante y cumple perfectamente."`,
  },
];

const TestimonialSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#F5F5F5] py-12 md:py-16 sm:px-16 px-5">
      <div className="text-center mx-auto">
        {/* flex justify-center items-center */}
        {/* Top Stars */}
        <div className="flex justify-center mb-4">
          <Fivestar />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-light text-primary-clr">
          We are your lighting partner
        </h2>

        <p className="text-[#838383] mt-2 text-lg md:text-2xl font-light">
          We offer lighting solutions
        </p>

        {/* Link */}
        <button className="mt-4 mx-auto flex items-center gap-2 text-gray-700 hover:text-black transition">
          Link →
        </button>

        {/* ✅ Swiper Slider */}
        <div className="mt-10">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}>
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white shadow-md text-left py-7 md:py-0  hover:shadow-lg transition md:h-128 md:w-114.5 flex flex-col justify-center items-start px-12 px-0">
                  <div>
                    <div className="mb-3">
                      <Fivestar />
                    </div>

                    <h3 className="font-semibold text-[20px] text-primary-clr mb-3">
                      {item.name}
                    </h3>

                    <p className="text-primary-clr text-xs sm:text-[16px] leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <p className="mt-6 text-primary-clr text-lg">{item.city}

                    
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ✅ Custom Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full  flex items-center justify-center hover:bg-[#d9a84f] transition">
            <Lefticon />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#d9a84f] transition">
            <Righticon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
