import React, { useEffect, useRef } from 'react';
import heroimage from '../assets/images/ilauca.webp';
import { gsap } from 'gsap';

const Herosection = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Image animation
    tl.from(imageRef.current, {
      scale: 2.0,
      opacity: 120,
      duration: 1.5,
      ease: 'power3.out',
    });

    // Title animation (ilauca)
    tl.from(
      titleRef.current,
      {
        y: 80,
        opacity: 120,
        duration: 1,
        ease: 'power3.out',
      },
      '-=1'
    );

    // Subtitle animation (Lighting Solutions)
    tl.from(
      subtitleRef.current,
      {
        y: 80,
        opacity: 120,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      },
      '-=0.8'
    );
  }, []);

  return (
    <section>
      <div className="relative overflow-hidden">
        {/* Image */}
        <img
          ref={imageRef}
          src={heroimage}
          alt="herosectionimage"
          className="w-348 md:h-196 h-140 object-cover mx-auto"
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 md:top-1/2 left-8 right-16 md:left-23 translate-y-0/1 md:translate-y-1/2 text-white ">
          <h1
            ref={titleRef}
            className="text-[50px] sm:text-6xl md:text-[68px] font-normal">
            ilauca
          </h1>

          <h2
            ref={subtitleRef}
            className="text-[40px] sm:text-6xl md:text-[64px] font-light leading-12">
            Lighting Solutions
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
