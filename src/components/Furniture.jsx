import React from 'react';
import { Link } from 'react-router-dom';
import lamp1 from '../assets/images/lamp1.webp';
import lamp2 from '../assets/images/lamp2.webp';
import lamp3 from '../assets/images/lamp3.webp';
import lamp4 from '../assets/images/lamp4.webp';
import lamp5 from '../assets/images/lamp5.webp';
import lamp6 from '../assets/images/lamp6.webp';
import { Circleicon } from '../common/Icon';

const products = [
  { id: 1, title: 'Upcoming Product', img: lamp1 },
  {
    id: 2,
    title: 'Bag',
    desc: 'Diseño compacto y muy estiloso. Luz suave y ambiental para tu salón.',
    price: '29,99€',
    img: lamp2,
    icons: [Circleicon, Circleicon],
  },
  {
    id: 3,
    title: 'Bimba',
    desc: 'Pura elegancia. Luz suave con 3 tonalidades ideal para exterior.',
    price: '28,90€',
    img: lamp3,
    icons: [Circleicon, Circleicon],
  },
  {
    id: 4,
    title: 'Converse',
    desc: 'Minimalista y muy funcional. De luz fría a cálida con un giro.',
    price: '28,90€',
    img: lamp4,
    icons: [Circleicon, Circleicon],
  },
  {
    id: 5,
    title: 'Stem',
    desc: 'Brazo flexible y precisión funcional. Carga inalámbrica para móvil.',
    price: '28,90€',
    img: lamp5,
    icons: [Circleicon, Circleicon],
  },
  {
    id: 6,
    title: 'Asti',
    desc: 'Luz cálida y diseño atemporal. Adaptable a cualquier rincón. ',
    price: '28,90€',
    img: lamp6,
    icons: [Circleicon, Circleicon],
  },
];

const Furniture = () => {
  return (
    <section className="text-white px-3 md:px-16 py-16">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-light text-black">
          Discover <span>ilauca</span>
        </h2>
        <h3 className="text-[#838383] mt-2 text-[36px] font-light">
          Lorem ipsum dolor set
        </h3>
        <button className="mt-4 text-base text-black">
          See all Products →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-2">
        {products.map((item) =>
          item.id === 2 ? (
            <Link to="/bag" key={item.id} className="group">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="md:h-114.5 md:w-114.5 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>
              </div>
              <div>
                {item.icons}
              </div>
              <div className=''>
                <p className="text-[#838383] text-base mt-1 pr-5">{item.desc}</p>
              </div>
              <div className="mt-2">
                <span className="text-black text-lg">{item.price}</span>
              </div>
            </Link>
          ) : (
            <div key={item.id} className="group">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="md:h-114.5 md:w-114.5 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between pr-2">
                  <h3 className="text-xl font-semibold text-black">
                    {item.title}
                  </h3>

                  <div className="flex gap-1">
                    {Array.isArray(item.icons) &&
                      item.icons.map((Icon, index) => (
                        <Icon key={index} className="w-4 h-4" />
                      ))}
                  </div>
                </div>

                <p className="text-[#838383] text-base mt-1">{item.desc}</p>

                <div className="mt-2">
                  <span className="text-black text-lg">{item.price}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Furniture;
