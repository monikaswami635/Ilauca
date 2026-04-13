import React, { useEffect, useRef } from 'react';
import aboutImg from '../assets/images/ilauca.webp';
import gsap from 'gsap';

const Aboutsection = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Image animation
    tl.from(imageRef.current, {
      scale: 1.5,
      opacity: 120,
      duration: 1.5,
      ease: 'power3.out',
    });

    // Title animation
    tl.from(
      titleRef.current,
      {
        y: 60,
        opacity: 120,
        duration: 1,
        ease: 'power3.out',
      },
      '-=1'
    );

    // Subtitle animation
    tl.from(
      subtitleRef.current,
      {
        y: 40,
        opacity: 120,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      },
      '-=0.8'
    );
  }, []);

  return (
    <section className="bg-white text-black py-8 md:py-6 px-4 md:px-6">
      {/* Heading */}
      <div className="mb-12 md:mb-16 max-w-3xl">
        <h2
          ref={titleRef}
          className="text-3xl md:text-6xl font-normal text-gray-900">
          About Us
        </h2>

        <p
          ref={subtitleRef}
          className="text-base md:text-4xl mt-6 text-gray-500 leading-relaxed">
          Lorem ipsum dolor set
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-75 md:h-150 lg:h-195.75 overflow-hidden shadow-lg">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent z-10"></div>

        {/* Image */}
        <img
          ref={imageRef}
          src={aboutImg}
          alt="about"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Aboutsection;
