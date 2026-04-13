import React, { useState } from 'react';

const faqData = [
  {
    question: '¿Puedo modificar o cancelar un pedido ya realizado?',
    answer:
      'Sí, puedes modificar o cancelar tu pedido antes de que sea enviado.',
  },
  {
    question: '¿Cuáles son los plazos de entrega?',
    answer: 'El tiempo de entrega suele ser entre 3 a 7 días hábiles.',
  },
  {
    question: '¿Puedo devolver un producto si no estoy satisfecho?',
    answer:
      'Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra.',
  },
  {
    question: '¿Cuál es la garantía de vuestros productos?',
    answer: 'Todos nuestros productos tienen una garantía de 1 año.',
  },
  {
    question:
      '¿Qué temperatura de color tienen los productos de Ilauca Lighting?',
    answer: 'Nuestros productos están disponibles en cálido, neutro y frío.',
  },
  {
    question: '¿Quiénes somos?',
    answer:
      'Somos una empresa especializada en iluminación moderna y eficiente.',
  },
];

const Faqsection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 md:h-200 py-5 md:py-0 px-4 flex flex-col justify-center ">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-normal text-primary-clr">
          Frequently asked
        </h2>
        <p className="text-gray-500 mt-2 text-3xl">Clear up your questions</p>

        <div className="flex justify-center">
          <button className="mt-4 text-base text-gray-600 flex items-center justify-center gap-1 hover:text-black transition">
            See all →
          </button>
        </div>

        {/* FAQ List */}
        <div className="mt-16 text-left">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-gray-700 text-sm md:text-lg font-normal">
                {item.question}

                {/* Animated Icon */}
                <span
                  className={`text-xl transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                  +
                </span>
              </button>

              {/* Smooth Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                }`}>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqsection;
