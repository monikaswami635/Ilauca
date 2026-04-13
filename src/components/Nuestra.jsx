import React from 'react';

import buildingImg from '../assets/images/ilauca.webp'; // replace with your image

const Nuestra = () => {
  return (
    <section className="bg-white text-black py-10 px-3 lg:px-14">
      <div className="w-full flex flex-col gap-5 md:flex-row justify-between items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-6 max-w-105">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Nuestra filosofía
          </h2>

          <h3 className="text-lg text-gray-400">Lorem Ipsum dolor set</h3>

          <p className=" leading-relaxed text-primary-clr">
            Una idea sencilla: la luz debe adaptarse a las personas. Por eso
            diseñamos lámparas de mesa versátiles que simplifican tu vida: sin
            instalaciones, listas para usar donde y cuando las necesites. Cada
            pieza está pensada para integrarse con naturalidad en tu espacio,
            sea cual sea tu estilo.
          </p>

          <p className=" leading-relaxed text-primary-clr">
            Ilauca ofrece una forma más auténtica, accesible y emocional de
            vivir la luz, uniendo diseño contemporáneo con funcionalidad real
            para que cada lámpara se convierta en un objeto cotidiano lleno de
            sentido. Queremos que iluminar tu hogar sea sencillo, bonito y,
            sobre todo, personal.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="group overflow-hidden w-full lg:w-231.5 h-75 md:h-125 lg:h-173.5">
          <img
            src={buildingImg}
            alt="Modern Building"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default Nuestra;
