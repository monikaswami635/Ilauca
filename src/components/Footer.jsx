import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Logo */}
          <a href="/">
            <h1 className="text-4xl font-light tracking-wide">ilauca</h1>
          </a>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-300">
            <div>
              <p className="text-sm">Phone number</p>
              <p className="text-lg font-medium text-white">+34 961 669 201</p>
            </div>

            <div>
              <p className="text-sm">Email</p>
              <p className="text-lg font-medium text-white">
                info@beneito-faure.com
              </p>
            </div>

            <div>
              <p className="text-sm">Dirección</p>
              <p className="text-lg font-medium text-white max-w-md">
                C/ Ciudad de Sevilla, 24 Pol. Ind. Fuente del Jarro, 26988
                Paterna, Valencia (Spain)
              </p>
            </div>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col items-start lg:items-end justify-center gap-4">
          <a href="/faqpage">
            <button className="bg-[#E7C78A] text-black px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition">
              FAQ’S →
            </button>
          </a>

          <a href="/about">
            <button className="bg-[#E7C78A] text-black px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition">
              Go to About Us →
            </button>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
        <p>Beneito Faure · Lighting Solutions. All rights reserved.</p>

        <div className="flex flex-wrap gap-4">
          <a href="/termscondition" className="hover:text-white">
            Terms and conditions
          </a>
          <a href="/privacypolicy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/legalconditions" className="hover:text-white">
            Legal conditions
          </a>
          <a href="/" className="hover:text-white">
            Shipping Policy
          </a>
          <a href="/" className="hover:text-white">
            Return Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
