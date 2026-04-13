import { useState, useEffect } from 'react';
import { Scrolltotopicon } from '../common/Icon';

const Scrolltotop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-primary- text-primary-clr p-3 rounded-full z-10">
        <Scrolltotopicon />
      </button>
    )
  );
};

export default Scrolltotop;
