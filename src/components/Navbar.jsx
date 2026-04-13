import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logowrapper.webp';
import { Equalicon, Navicon } from '../common/Icon';
import { Link } from 'react-router-dom';
import CartDrawer from './Cartdrawer'; // ✅ import

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ mobile menu

  // 🔥 Scroll lock
  useEffect(() => {
    if (isCartOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen, isMenuOpen]);

  return (
    <>
      <nav>
        <section className="top-0 left-0 h-20 flex items-center justify-between md:px-12 px-5">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <Link to="/about" className="hidden md:block">
              About Us
            </Link>

            <Link to="/faqpage" className="hidden md:block">
              FAQ's
            </Link>

            {/* Cart Button */}
            <button onClick={() => setIsCartOpen(true)}>
              <Navicon />
            </button>

            {/* Mobile Menu Icon */}
            <span
              className="md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Equalicon />
            </span>
          </div>
        </section>

        {/* ✅ Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden h-screen flex flex-col items-center justify-center bg-white text-3xl space-y-6">
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/faqpage" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* ✅ Cart Drawer OUTSIDE */}
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
};

export default Navbar;
