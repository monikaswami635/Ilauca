import React, { useState } from 'react';
import lamp2 from '../assets/images/lamp2.webp';
import bagimage2 from '../assets/images/Bagimage2.webp';
import bagimage3 from '../assets/images/Bagimage3.webp';
import bag1 from '../assets/images/Bag1.webp';
import bag2 from '../assets/images/Bag2.webp';
import bag3 from '../assets/images/Bag3.webp';
import { Addtocarticon, Downloadicon, Playicon } from '../common/Icon';

const Bagsection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <div className="bg-[#FAFAFA] min-h-screen grid grid-cols-1 lg:grid-cols-2 py-2">
      {/* LEFT SIDE (Images) */}
      <div className="flex flex-col gap-2">
        <div className="group relative overflow-hidden h-100 lg:h-175 w-full lg:w-178.75">
          <img
            src={lamp2}
            alt="lamp"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
        </div>

        <div className="relative group overflow-hidden h-50 lg:h-100 w-full lg:w-178.75">
          {/* Image */}
          <img
            src={bagimage2}
            alt="bagimage2"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Play Button */}
          <button
            onClick={() => setVideoOpen(true)}
            className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-[#F3C885] p-3 rounded-full flex items-center justify-center hover:scale-110 transition">
              <Playicon />
            </div>
          </button>

          {videoOpen && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    
    {/* Close Button */}
    <button
      onClick={() => setVideoOpen(false)}
      className="absolute top-5 right-5 text-white text-2xl"
    >
      ✕
    </button>

    {/* Video */}
    <video
      src="/default.asp"   // apni video path yaha do
      controls
      autoPlay
      className="w-[90%] md:w-[60%] rounded-lg"
    />
  </div>
)}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
        </div>

        <div className="group overflow-hidden w-full lg:w-178.75">
          <img
            src={bagimage3}
            alt="bagimage3"
            className="w-full h-100 lg:h-178.75 lg:w-178.75 object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/0 transition duration-500"></div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-6 p-2 w-180.75">
          <img src={bag1} className="bg-[#FFFFFF] h-58.75 w-58.75" />
          <img src={bag2} className="bg-[#FFFFFF] h-58.75 w-58.75" />
          <img src={bag3} className="bg-[#FFFFFF] h-58.75 w-58.75" />
        </div>
      </div>

      {/* RIGHT SIDE (Content) */}
      <div className="p-6 lg:p-10 lg:mt-10">
        <h2 className="text-4xl font-normal text-primary-clr">Bag</h2>
        <h1 className="text-[30px] font-light text-[#838383]">Lorem Ipsum</h1>
        <p className="text-[#060606] text-medium mt-2 text-[28px]">365,00 €</p>

        {/* Description */}
        <p className="text-primary-clr mt-10 leading-relaxed max-w-133.75 text-base">
          Bag es la lámpara de mesa portátil con asa integrada que convierte
          cualquier rincón en un espacio acogedor al instante. Llévala del salón
          al dormitorio, de la estantería a la mesita. Su tamaño compacto y su
          calidez envolvente la hacen perfecta para esas noches de lectura antes
          de dormir, cenas íntimas o simplemente para añadir un toque de
          iluminación suave donde más lo necesites.
          <br />
          <br />
          Disponible en blanco, negro, oro cepillado y champán, Bag se integra
          con naturalidad en cualquier estilo de interior. Encendida, ilumina
          con delicadeza. Apagada, es un objeto elegante en sí mismo. Su batería
          recargable con carga USB-C te da horas de autonomía sin cables, y
          puedes ajustar la intensidad según el momento: más tenue para
          relajarte, más alta cuando necesitas luz práctica.
          <br />
          <br />
          Pequeña, elegante y lista para moverte con ella. Bag es esa lámpara
          que siempre quieres tener cerca.
        </p>

        <article className="flex  flex-col gap-2 py-12">
          <small className="flex items-center gap-2 text-base">
            Download Technical datasheet <Downloadicon />{' '}
          </small>{' '}
          <small className="flex items-center gap-2 text-base">
            Download Instructions <Downloadicon />
          </small>
        </article>
        {/* Color Variants */}
        <div className="mt-6">
          <p className="text-[#060606] font-semibold text-2xl mb-2">
            Color variations
          </p>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-200 border"></div>
            <div className="w-6 h-6 rounded-full bg-gray-500 border"></div>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-20 space-y-2">
          {[
            ['Power', '2W'],
            ['Installation', 'Portable'],
            ['Color Temperature', '3000K'],
            ['Lumens', '50 lm'],
            ['CRI', '>90'],
            ['Intensidad regulable', 'Sí'],
            ['Ángulo de apertura', '180º'],
            ['Clase de aislamiento', 'III'],
            ['Índice de protección', 'IP20 (Uso interior)'],
            ['Resistencia a impactos', 'IK06'],
            ['Materiales', 'Aluminio'],
            ['Acabados', 'Blanco, Negro, Oro cepillado, Champán'],
          ].map((item, index) => (
            <div
              key={index}
              className="w-full flex items-start gap-14 bg-white px-4 py-2 rounded-full">
              <span className="w-69.5 text-[#838383] text-[18px]">
                {item[0]}
              </span>
              <span className="w-69.5 text-primary-clr text-[18px]">
                {item[1]}
              </span>
            </div>
          ))}
        </div>

        {/* Quantity + Button */}
        <div className="mt-12 flex items-center justify-between">
          <div>
            <small>Select quantity</small>
            <div className="flex items-center justify-center border rounded-full h-10 w-30 mt-2">
              <button>-</button>
              <span className="px-4">1</span>
              <button>+</button>
            </div>
          </div>

          <a href="/cart">
            <button className="flex justify-center items-center gap-1 bg-[#F3C885] text-black h-12 w-39.5 rounded-full font-medium hover:scale-105 transition mt-8">
              Add to cart
              <Addtocarticon />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bagsection;
