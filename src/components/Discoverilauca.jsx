import React from 'react';
import aboutImg from '../assets/images/ilauca.webp'; // your image path

const discoverilauca = () => {
  return (
    <section className="bg-white text-black py-10 px-3 md:px-6">
      <div className="flex flex-col md:flex-row gap-7 sm:gap-1 items-start justify-center">
        {/* LEFT CONTENT */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-normal mb-6">
            Discover ilauca
          </h2>

          <p className=" leading-relaxed text-sm md:text-base text-primary-clr">
            En Ilauca creamos lámparas de mesa portátiles de diseño que
            transforman cualquier rincón en un espacio más cálido y personal.
            Apostamos por una luz sin cables, regulable y con una estética
            atemporal y elegante que encaja en cualquier estilo de hogar.
            Queremos acompañarte en tus pequeños momentos del día: cenas,
            lecturas, trabajo o simplemente ese momento de calma que necesitas.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="group w-full md:w-231.5 h-75 md:h-173.5 overflow-hidden ">
          <img
            src={aboutImg}
            alt="building"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default discoverilauca;
