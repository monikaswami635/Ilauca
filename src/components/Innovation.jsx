import React from 'react';
import buildingimg from '../assets/images/buildingimg.webp'; // replace with your image

const Innovation = () => {
  return (
    <section className="relative w-full h-screen">
      {/* BACKGROUND IMAGE */}
      <img
        src={buildingimg}
        alt="Lamp"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-normal  mb-2">
            Introducing Bimba
          </h1>

          <p className="text-lg md:text-4xl text-gray-300 mb-8">
            Your new home for innovation.
          </p>

          {/* BUTTON */}
          <button className="flex items-center gap-3 bg-[#E6B56A] hover:bg-[#d4a455] text-black px-6 py-3 cursor-pointer rounded-full transition duration-300">
            See product
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
