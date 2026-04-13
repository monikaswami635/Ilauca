import React from 'react';
import { X, Trash2 } from 'lucide-react'; // ✅ FIXED

const CartDrawer = ({ isOpen, setIsOpen }) => {
  const cartItems = [
    {
      id: 1,
      name: 'Tram',
      color: 'Gold',
      price: 42,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5',
    },
    {
      id: 2,
      name: 'Tram',
      color: 'Gold',
      price: 42,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5',
    },
  ];

  return (
    <section className="fixed z-20">
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 transition ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[598px] sm:w-105 bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b">
          <div>
            <h2 className="text-3xl font-semibold">Cart</h2>
            <p className="text-gray-400 text-lg mt-1">
              {cartItems.length} products
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="bg-yellow-400 p-3 rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="overflow-y-auto h-[65%] px-6 py-4 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="border-b pb-6">
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt="product"
                  className="w-32 h-32 object-cover rounded-md"
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-400">{item.color}</p>
                    </div>

                    <p className="text-lg font-medium">{item.price},00 €</p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center mt-4 border rounded-full w-fit px-4 py-1 gap-4">
                    <button className="text-xl">−</button>
                    <span>{item.quantity}</span>
                    <button className="text-xl">+</button>
                  </div>

                  {/* Remove */}
                  <button className="flex items-center gap-2 text-gray-500 mt-3 text-sm">
                    Eliminar <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full border-t p-6 bg-white">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-medium">Subtotal</h3>
            <p className="text-2xl font-semibold">675 €</p>
          </div>

          <p className="text-gray-400 text-sm mb-4">
            Impuestos i descuentos calculados en la compra.
          </p>

          <div className="flex gap-4">
            <a href="/cart">
              <button className="md:w-[263px] h-[48px] w-[168px] border rounded-full text-lg">
                Go to cart
              </button>
            </a>

            <a href="/paymentsection">
              <button className="md:w-[263px] h-[48px] w-[168px] bg-yellow-400 rounded-full text-lg font-medium">
                Buy
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartDrawer;
