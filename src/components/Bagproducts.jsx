import React, { useRef } from 'react';
import lamp1 from '../assets/images/lamp1.webp';
import lamp2 from '../assets/images/lamp2.webp';
import lamp3 from '../assets/images/lamp3.webp';
import { Baglefticon, Bagrighticon } from '../common/Icon';

const products = [
  {
    id: 1,
    name: 'Bag',
    desc: 'Diseño compacto y muy estiloso. Luz suave y ambiental para tu salón.',
    price: '29,99€',
    image: lamp1,
  },
  {
    id: 2,
    name: 'Bimba',
    desc: 'Pura elegancia. Luz suave con 3 tonalidades ideal para exterior.',
    price: '29,99€',
    image: lamp2,
  },
  {
    id: 3,
    name: 'Converse',
    desc: 'Minimalista y muy funcional. De luz fría a cálida con un giro.',
    price: '29,99€',
    image: lamp3,
  },
];

const Bagproducts = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white text-black py-16 px-6 md:px-16">
      {/* Header */}
      <div className="flex flex-col mb-10">
        <div>
          <p className="text-primary-clr text-5xl">You may also like ...</p>
          <h2 className="text-4xl font-normal text-[#838383] mt-2">
            Related products
          </h2>
        </div>

        {/* Arrows */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-yellow-300 text-black flex items-center justify-center hover:scale-105 transition">
            <Bagrighticon />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-yellow-300 text-black flex items-center justify-center hover:scale-105 transition">
            <Baglefticon />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scroll-smooth no-scrollbar">
        {products.map((item) => (
          <div key={item.id} className="min-w-75 md:min-w-87.5 bg-white">
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-75 lg:h-114.5 lg:w-114.5 object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-primary-clr">
                {item.name}
              </h3>
              <p className="text-[#838383] text-base mt-2 max-w-87">
                {item.desc}
              </p>
              <p className="text-primary-clr mt-2 text-[18px]">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bagproducts;
