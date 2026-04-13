import React from 'react';

const sections = [
  {
    id: '01',
    title: '¿Quién somos?',
    text: 'Somos BENETO & FAURE LIGHTING, S.L. y tratamos tus datos personales como Responsables del tratamiento de los datos que nos aportes.',
  },
  {
    id: '02',
    title: '¿Para qué tratamos tus datos?',
    text: 'Trataremos tus datos entre otras finalidades, para gestionar tus peticiones, la compra de productos o servicios, atender tus consultas, así como para, en caso de que lo desees, enviarte nuestras comunicaciones personalizadas.',
  },
  {
    id: '03',
    title: '¿Por qué lo usamos?',
    text: 'Estamos legitimados para tratar tus datos en atención a la ejecución de un contrato o precontrato o por nuestro interés legítimo en determinados tratamientos. También usamos tus datos por otras razones, por ejemplo, para atender tus consultas o para enviarte newsletters que nos has solicitado recibir.',
  },
  {
    id: '04',
    title: '¿Con quién compartimos tus datos?',
    text: 'Compartiremos tus datos con prestadores de servicios que nos ayudan o dan soporte, ya sean empresas o colaboradores externos con quien hemos llegado a acuerdos.',
  },
  {
    id: '05',
    title: '¿Cómo puedes ejercer tus derechos?',
    text: 'Tienes derecho a acceder, rectificar o suprimir tus datos personales. En algunos casos, también tienes otros derechos, por ejemplo, a oponerte a que usemos tus datos o a portarlos, como te explicaremos en detalle en nuestra política de privacidad. Si necesitas más información sobre protección de datos deberás leer nuestra Política de Privacidad completa a continuación para entender en detalle el uso que haremos de tus datos personales y los derechos de los que dispones en relación con su tratamiento.',
  },
];

const PrivacySection = () => {
  return (
    <div className=" text-black min-h-screen px-6 md:px-16 py-10 ">
      <div className="max-w-187.5 space-y-12">
        {sections.map((item) => (
          <div key={item.id} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-normal text-black">
              <span className="text-primary-clr mr-2">{item.id}/</span>
              {item.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-primary-clr">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacySection;
