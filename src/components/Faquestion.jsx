import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-zinc-400 transition-colors">
        <span className="sm:text-lg font-normal text-primary-clr tracking-wide">
          {question}
        </span>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 pb-6' : 'max-h-0'
        }`}>
        <p className="text-zinc-500 sm:text-[16px] leading-relaxed">
          {answer ||
            'Los pedidos se realizan directamente a través de la tienda online Ilauca Lighting, seleccionando producto, acabado y unidades y completando el proceso de checkout.'}
        </p>
      </div>
    </div>
  );
};

const HelpCenter = () => {
  const sections = [
    {
      title: 'Pedidos y procesos de compra',
      questions: [
        {
          q: '¿Cómo puedo realizar un pedido en Ilauca Lighting?',
          a: 'Los pedidos se realizan directamente a través de la tienda online Ilauca Lighting, seleccionando producto, acabado y unidades y completando el proceso de checkout.',
        },
        { q: '¿Cuál es el método de pago en Ilauca Lighting?', a: '' },
        { q: '¿Puedo modificar o cancelar un pedido ya realizado?', a: '' },
      ],
    },
    {
      title: 'Envío y entregas',
      questions: [
        { q: '¿Cuáles son los plazos de entrega?', a: '' },
        { q: '¿Cuál es el coste del envío?', a: '' },
        { q: '¿A qué países y zonas realizamos envíos?', a: '' },
      ],
    },
    {
      title: 'Devoluciones y cambios ',
      questions: [
        { q: '¿Puedo devolver un producto si no estoy satisfecho?', a: '' },
        { q: '¿Cómo tengo que solicitar una devolución?', a: '' },
        {
          q: '¿En qué condiciones debe estar el producto para aceptar la devolución?',
          a: '',
        },
        { q: '¿Cómo se realiza el reembolso?', a: '' },
      ],
    },

    {
      title: 'Garantías',
      questions: [
        { q: '¿Cuál es la garantía de vuestros productos?', a: '' },
        { q: '¿Qué situaciones anulan la garantía? ', a: '' },
      ],
    },

    {
      title: 'Producto',
      questions: [
        {
          q: '¿Qué temperatura de color tienen los productos de Ilauca Lighting?',
          a: '',
        },
        { q: '¿Qué lámparas son aptas para usar en el exterior?', a: '' },
        { q: '¿Cómo se cargan las lámparas portátiles?', a: '' },
        { q: '¿Qué autonomía tiene la batería? ', a: '' },
      ],
    },

    {
      title: 'Sobre nosotros',
      questions: [
        { q: '¿Quienes somos?', a: '' },
        { q: '¿Qué autonomía tiene la batería?', a: '' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-zinc-700">
      {/* Navigation Bar */}
      <nav className="border-b border-zinc-800 bg-white text-black py-4 sticky top-0 z-10">
        <ul className="flex flex-wrap justify-center gap-6 text-[10px] md:text-lg  font-medium px-4">
          <li className="border-b border-black cursor-pointer">
            Pedidos y procesos de compra
          </li>
          <li className="text-primary-clr cursor-pointer hover:text-black transition-colors">
            Envíos y entregas
          </li>
          <li className="text-primary-clr cursor-pointer hover:text-black transition-colors">
            Devoluciones y cambios
          </li>
          <li className="text-primary-clr cursor-pointer hover:text-black transition-colors">
            Garantía
          </li>
          <li className="text-primary-clr cursor-pointer hover:text-black transition-colors">
            Producto
          </li>
          <li className="text-primary-clr cursor-pointer hover:text-black transition-colors">
            Sobre nosotros
          </li>
        </ul>
      </nav>

      {/* Content Container */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {sections.map((section, idx) => (
          <section key={idx} className="mb-16">
            <h2 className="text-primary-clr sm:text-xl font-semibold mb-4">
              {section.title}
            </h2>
            <div className="flex flex-col ">
              {section.questions.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default HelpCenter;
