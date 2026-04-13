import React from 'react';
import lamp3 from '../assets/images/lamp3.webp';

const Bimba = () => {
  return (
    <section className="w-full md:min-h-screen py-5 md:py-0  flex items-center justify-center px-3">
      <div className="  flex flex-col lg:flex-row overflow-hidden">
        {/* Left Content */}
        <div className="bg-[#E6C79C] w-full lg:w-119.5 md:h-165.5 flex flex-col justify-start px-8 py-12 lg:px-16 hidden md:block">
          <h1 className="text-3xl md:text-[44px] font-light text-[#64491F] leading-tight">
            Introducing Bimba
          </h1>

          <p className="mt-4 text-xl md:text-3xl text-[#A87B34]">
            Your new home for innovation.
          </p>

          <button className="mt-8 inline-flex justify-center items-center gap-2 bg-[#EBC08B] text-[#5B4636] h-12 w-41.75 rounded-full hover:bg-[#d9a96f] transition">
            See product
            <span className="text-xl">›</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-220.75 h-auto md:h-75 md:h-125 lg:h-165.5">
          <img src={lamp3} alt="Hero" className="w-full h-full object-cover" />
        </div>

        <div className="bg-[#E6C79C] w-full lg:w-119.5 md:h-165.5 flex flex-col justify-start px-8 py-12 lg:px-16 block md:hidden">
          <h1 className="text-3xl md:text-[44px] font-light text-[#64491F] leading-tight">
            Introducing Bimba
          </h1>

          <p className="mt-4 text-xl md:text-3xl text-[#A87B34]">
            Your new home for innovation.
          </p>

          <button className="mt-8 inline-flex justify-center items-center gap-2 bg-[#EBC08B] text-[#5B4636] h-12 w-41.75 rounded-full hover:bg-[#d9a96f] transition">
            See product
            <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bimba;
