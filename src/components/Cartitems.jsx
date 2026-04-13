import React, { useState } from 'react';
import { Deleteicon, Discounticon } from '../common/Icon';

const initialProducts = [
  {
    id: 1,
    name: 'Tram',
    variant: 'Gold',
    price: 42,
    qty: 1,
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=400',
  },
  {
    id: 2,
    name: 'Tram',
    variant: 'Gold',
    price: 42,
    qty: 1,
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=400',
  },
];

const Cart = () => {
  const [products, setProducts] = useState(initialProducts);

  const increaseQty = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="text-black min-h-screen px-6 md:px-16 py-10">
      {/* HEADER */}

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* LEFT SIDE */}

        <div className="md:col-span-2 space-y-8 max-w-198.25">
          <div className="hidden md:grid grid-cols-3 text-gray-400 border-b border-gray-700 pb-4 mb-8">
            <span className="text-[#060606] text-base">Product</span>
            <span className="text-[#060606] text-base">Details</span>
            <span className="text-right text-[#060606] text-base">Total</span>
          </div>
          {products.map((item) => (
            <div key={item.id} className="border-b border-gray-700 pb-6">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* PRODUCT IMAGE */}
                <img
                  src={item.image}
                  alt="product"
                  className="w-40 h-40 object-cover rounded"
                />

                {/* DETAILS */}
                <div>
                  <h2 className="text-2xl font-semibold text-primary-clr">
                    {item.name}
                  </h2>
                  <p className="text-[#838383]">{item.variant}</p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex justify-center items-center border border-gray-500 rounded-full h-10 w-30 gap-4">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-2 hover:text-gray-500 text-base">
                      <Deleteicon />
                      Eliminar
                    </button>
                  </div>
                </div>

                {/* PRICE */}
                <div className="text-right text-xl font-medium">
                  €{item.price * item.qty}.00
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* COUPON */}
          <div className="border border-gray-600 p-4 flex justify-between items-center">
            <select name="" id="" className=" text-lg text-[#0D0D0D]">
              <option value="" className="">
                Aplica un cupón de descuento
              </option>
              <option value="">Aplica un cupón de descuento</option>
            </select>
          </div>

          {/* SUMMARY */}
          <div className="border border-gray-600 p-6 space-y-4">
            <h3 className="text-[#060606] text-[16px] font-semibold">
              Total del pedido
            </h3>

            <div className="flex justify-between text-[#060606] text-base">
              <span>Subtotal</span>
              <span>€{subtotal}.00</span>
            </div>

            <div className="border-t border-gray-700 pt-4 flex justify-between text-lg text-[#060606] font-semibold">
              <span>Total</span>
              <span>€{subtotal}.00</span>
            </div>

            <a href="/paymentsection">
              <button className="w-full bg-[#e0b97a] text-black py-3 rounded-full mt-4 font-medium hover:opacity-90 transition">
                Comprar
              </button>
            </a>
          </div>

          {/* DISCOUNT */}
          <div className="bg-[#FDF7ED] text-black p-5">
            <h4 className="font-semibold flex items-center gap-2 text-[#060606] text-[18px]">
              <Discounticon />
              Discount
            </h4>
            <p className="text-base text-[#060606] mt-2">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
