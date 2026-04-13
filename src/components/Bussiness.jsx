import React from 'react';
import businessImg from '../assets/images/bussinessimg1.webp'; // replace with your image
import businessImg2 from '../assets/images/bussinessimg2.webp';
const Bussiness = () => {
  return (
    <section className="bg-white py-10 px-3 md:px-16">
      <div className="grid grid-cols-1  gap-10 items-start">
        {/* LEFT CONTENT */}
        <div className="md:max-w-105">
          {/* Main Heading */}
          <h5 className="text-2xl md:text-3xl font-normal text-primary-clr leading-tight">
            A family-owned business spanning four generations.
          </h5>
          <small className="text-[#838383] text-sm mt-2">About Us</small>
          <p className="mt-3">
            Somos parte de una empresa familiar de iluminación con cuatro
            generaciones de experiencia. Durante más de 40 años hemos aprendido
            qué convierte una lámpara en una pieza duradera y especial: una
            elección cuidada de materiales, acabados de calidad y un diseño
            pensado para perdurar en el tiempo. <br />
            <br /> Con Ilauca, llevamos ese conocimiento directamente a tu hogar
            con una selección de lámparas de mesa portátiles pensadas para vivir
            la luz de forma más auténtica. Diseño elegante, calidad duradera y
            esa versatilidad que hace que una buena lámpara se convierta en
            imprescindible.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className='flex flex-col md:flex-row justify-center mt-10 md:mt-0 gap-6 mx-auto'>
          <div className="group">
            <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-0 gap-6 mx-auto w-full ">
              <div className="overflow-hidden w-full h-full lg:w-173 lg:h-129.75">
                <img
                  src={businessImg}
                  alt="family business"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="group">
            <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-0 gap-6 mx-auto w-full ">
              <div className="overflow-hidden w-full h-full lg:w-173 lg:h-129.75 ">
                <img
                  src={businessImg2}
                  alt="family business"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bussiness;
