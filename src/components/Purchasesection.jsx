import React from 'react';

const Purchasesection = () => {
  return (
    <div className="min-h-screen  text-black flex flex-col justify-center items-start px-6 md:px-20">
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-[44px] font-normal text-primary-clr leading-tight">
          Thank you for your purchase.
        </h1>

        <h2 className="text-3xl md:text-[44px] font-normal text-primary-clr mt-2">
          We have successfully received your reservation.
        </h2>

        <p className="text-lg md:text-[36px] text-[#838383] mt-2">
          Check your email for the purchase confirmation.
        </p>
      </div>

      {/* Card */}
      <div className="border-3 border-[#BEBFBD] w-full max-w-xl p-6 md:p-8 ">
        {/* Table Header */}
        <div className="flex justify-between text-gray-400 text-sm border-b border-gray-700 pb-3 ">
          <span className="text-[#060606] text-[16px]">Producto</span>
          <span className="text-[#060606] text-[16px] ml-5">Uds.</span>
          <span className="text-[#060606] text-[16px]">Precio</span>
        </div>

        {/* Items */}
        <div className="py-4 space-y-4">
          <div className="flex justify-between text-gray-300">
            <span className="text-[#060606] text-[16px] font-medium underline">
              Product Name
            </span>
            <span className='text-[#060606] text-[16px] font-medium"'>1</span>
            <span className='text-[#060606] text-[16px] font-medium"'>
              0,00 €
            </span>
          </div>

          <div className="flex justify-between text-gray-300">
            <span className="text-[#060606] text-[16px] font-medium underline">
              Product Name
            </span>
            <span className='text-[#060606] text-[16px] font-medium"'>1</span>
            <span className='text-[#060606] text-[16px] font-medium"'>
              0,00 €
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Coupon */}
        <div className="flex justify-between text-gray-400">
          <span className="text-[#060606] text-[18px] font-medium py-3">
            Coupon 123Benito
          </span>
          <span className="text-[#060606] text-[18px] font-medium py-3">
            15%
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Total */}
        <div className="flex justify-between text-white font-semibold text-lg">
          <span className="text-[#060606] text-[18px] font-medium py-2">
            Total
          </span>
          <span className="text-[#060606] text-[18px] font-medium py-2">
            0,00 €
          </span>
        </div>
      </div>
    </div>
  );
};

export default Purchasesection;
