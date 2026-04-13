import React from 'react';

const Checkout = () => {
  return (
    <div className=" text-black min-h-screen px-6 md:px-16 py-10">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-10 max-w-143.75">
          {/* PERSONAL INFO */}
          <div>
            <h2 className="text-xl text-primary-clr font-medium">
              Datos personales
            </h2>
            <p className="text-[16px] text-[#838383] mb-6">
              Lorem ipsum dolor set
            </p>

            <div className="space-y-5">
              <label htmlFor=""> Nombre</label>
              <input
                placeholder="Nombre"
                className="inputStyle text-[#000000] mt-2"
              />
              <label htmlFor="">Apellidos</label>
              <input
                placeholder="Apellidos"
                className="inputStyle text-[#000000] mt-2"
              />
              <label htmlFor="">Teléfono</label>
              <input
                placeholder="000 000 000"
                className="inputStyle text-[#000000] mt-2"
              />
              <label htmlFor="">Correo electrónico</label>
              <input
                placeholder="ejemplo@ejemplo.com"
                className="inputStyle text-[#000000] mt-2 "
              />
            </div>
          </div>

          {/* BILLING */}
          <div>
            <h2 className="text-xl text-primary-clr font-medium">
              Dirección de facturación
            </h2>
            <p className="text-[16px] text-[#838383] mb-6">
              Lorem ipsum dolor set
            </p>

            <div className="space-y-5">
              <label htmlFor="">Región</label>
              <input
                placeholder="Selecciona país/región"
                className="inputStyle text-[#000000] mt-2"
              />
              <label htmlFor="">Empresa</label>
              <input
                placeholder="Nombre empresa (opcional)"
                className="inputStyle text-[#000000] mt-2"
              />
              <label htmlFor="">Dirección</label>
              <input
                placeholder="Nombre de la calle y número"
                className="inputStyle text-[#000000] mt-2"
              />

              <div className="flex flex-col md:flex-row gap-4 w-full">
                {/* Código Postal */}
                <div className="w-full">
                  <label className="text-sm text-[#000000]">
                    Código postal
                  </label>
                  <input placeholder="CP" className="inputStyle w-full  mt-2" />
                </div>

                {/* Ciudad */}
                <div className="w-full">
                  <label className="text-sm text-[#000000]">Ciudad</label>
                  <input
                    placeholder="Ciudad"
                    className="inputStyle w-full  mt-2"
                  />
                </div>
              </div>

              <label htmlFor="">Província</label>
              <input
                placeholder="Provincia"
                className="inputStyle text-[#000000] mt-2"
              />

              <label className="flex items-center gap-2 text-[16px] text-gray-500">
                <input type="checkbox" className="accent-yellow-500" />
                La dirección de entrega es diferente a la dirección de
                facturación
              </label>
            </div>
          </div>

          {/* PAYMENT */}
          <div>
            <h2 className="text-xl text-primary-clr font-medium">
              Opciones de pago
            </h2>
            <p className="text-[16px] text-[#838383] mb-6">
              Lorem ipsum dolor set
            </p>

            <div className="border-2 border-[#BEBFBD] p-6 space-y-5">
              {/* HEADER */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-primary-clr">
                  Targeta de crèdit/dèbit
                </span>

                <div className="flex gap-2">
                  <div className="w-10 h-6 bg-white rounded-sm"></div>
                  <div className="w-10 h-6 bg-white rounded-sm"></div>
                  <div className="w-10 h-6 bg-white rounded-sm"></div>
                  <div className="w-10 h-6 bg-white rounded-sm"></div>
                </div>
              </div>

              <label htmlFor="">Titular de la tarjeta</label>
              <input
                placeholder="Nombre y apellidos"
                className="inputStyle text-[#000000] mt-2"
              />
              <label htmlFor="">Número de la tarjeta</label>
              <input
                placeholder="1234 5678 9012 3456"
                className="inputStyle text-[#000000] mt-2"
              />

              <div className="flex flex-col md:flex-row gap-4 w-full">
                {/* Código Postal */}
                <div className="w-full">
                  <label className="text-sm text-[#000000]">
                    Fecha de caducidad
                  </label>
                  <input
                    placeholder="MM / AA"
                    className="inputStyle w-full  mt-2"
                  />
                </div>

                {/* Ciudad */}
                <div className="w-full">
                  <label className="text-sm text-[#000000]">
                    Código de seguridad
                  </label>
                  <input
                    placeholder="CVC"
                    className="inputStyle w-full  mt-2"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 text-[16px] text-[#232323]">
                <input type="checkbox" className="accent-yellow-500" />
                Praesent auctor purus luctus enim egestas, ac scelerisque ante
                pulvinar.
              </label>
            </div>
          </div>

          {/* BUTTON */}
          <a href="/purchase">
            <button className="bg-[#e6b56c] text-[18px] text-primary-clr h-12 w-56 rounded-full text-sm hover:opacity-90 transition">
              Comprar
            </button>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* COUPON */}
          <div className="border border-gray-700 p-5 rounded-md">
            <p className="text-lg font-medium text-[#0D0D0D] mb-4">
              Aplica un cupón de descuento
            </p>

            <div className="flex gap-3">
              <input className="inputStyle flex-1" />
              <button className="bg-[#e6b56c] text-black px-5 rounded-full text-sm">
                Aplicar
              </button>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="border border-gray-700 p-6 rounded-md text-sm text-gray-400 space-y-4">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-[#060606] text-[16px]">Producto</span>
              <span className="text-[#060606] text-[16px] ml-7">Uds.</span>
              <span className="text-[#060606] text-[16px]">Precio</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#060606] text-[16px] font-medium underline">
                Product Name
              </span>
              <span className="text-[#060606] text-[16px] font-medium">1</span>
              <span className="text-[#060606] text-[16px] font-medium">
                0.00 €
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#060606] text-[16px] font-medium underline">
                Product Name
              </span>
              <span className="text-[#060606] text-[16px] font-medium">1</span>
              <span className="text-[#060606] text-[16px] font-medium">
                0.00 €
              </span>
            </div>

            <div className="flex justify-between border-t border-gray-700 pt-2">
              <span className="text-[#060606] text-[18px] font-medium py-3">
                Cupon 123Descuento
              </span>
              <span className="py-3 text-[#060606] text-[18px] font-medium">
                15%
              </span>
            </div>

            <div className="flex justify-between border-t border-gray-700 pt-2">
              <span className="text-[#060606] text-[18px] font-medium py-3">
                Subtotal
              </span>
              <span className="text-[#060606] text-[18px] font-medium py-3">
                0.00 €
              </span>
            </div>

            <div className="flex justify-between border-t border-gray-700 pt-2">
              <span className="text-[#060606] text-[18px] font-medium py-3">
                Mètode de pagament
              </span>
              <span className="text-[#060606] text-[18px] font-medium py-3">
                Crédito / <br /> Débito
              </span>
            </div>

            <div className="flex justify-between text-black font-medium border-t border-gray-700 pt-3">
              <span className="text-[#060606] text-[18px] font-medium py-3">
                Total
              </span>
              <span className="text-[#060606] text-[18px] font-medium py-3">
                0.00 €
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
