import React, { useState, useEffect } from 'react';
import { FaCalendarDays } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import Countdown from './Countdown';

const Banner = () => {
  const backgroundImages = [
    "https://i.ibb.co/QjrBPRrm/Whats-App-Image-2025-07-23-at-22-47-39-b67be0a5.jpg",
    "https://i.ibb.co/SXkF3qZB/Whats-App-Image-2025-07-23-at-22-47-41-5a6221d4.jpg",
    "https://i.ibb.co/Hf4VL5qQ/Whats-App-Image-2025-07-23-at-22-47-53-05368089.jpg",
    "https://i.ibb.co/s9yJqgcP/Whats-App-Image-2025-07-23-at-22-48-08-7b98116f.jpg",
    "https://i.ibb.co/whMWyYwG/Whats-App-Image-2025-07-23-at-22-48-13-e5a67c18.jpg",
    "https://i.ibb.co/WW1pPpmb/Whats-App-Image-2025-07-23-at-22-48-14-bb48751a.jpg",
    "https://i.ibb.co/CK3yF1RW/Whats-App-Image-2025-07-23-at-22-48-17-0c3eefa3.jpg",
    "https://i.ibb.co/QvWp4Q3H/Whats-App-Image-2025-07-23-at-22-48-19-31bfe487.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className='w-full min-h-[55vh] lg:min-h-[110vh] mx-auto mb-40 lg:mb-40 shadow-[10px_10px_30px] shadow-black/70 overflow-visible relative'>
      {/* Background overlay */}
      <div className='w-full lg:h-[110vh] h-[55vh] bg-blue-400/40 absolute z-0'></div>

      {/* Background images with fade effect */}
      <div className="absolute z-0 w-full lg:h-[110vh] h-[55vh]">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-55' : 'opacity-0'
            } ${fade && index === currentImageIndex ? 'opacity-0' : ''}`}
            src={image}
            alt={`Conference background ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>

      {/* Content */}
      <div className='w-full min-h-[55vh] lg:min-h-[110vh] px-4 sm:px-8 md:px-16 lg:px-20  pt-8 md:pt-16 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-10 bg-black/55 relative z-20'>
        {/* "International Conference On" - Playfair Display */}
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold tracking-wider' style={{ fontFamily: "'Playfair Display', serif" }}>
          International Conference On
        </h2>

        <div className='border-t-4 border-white/30 pt-2 rounded-xl px-2 sm:px-6 w-full  mx-auto relative'>
          {/* Main Title - Lato */}
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-5xl w-full bg-white/50 py-2 md:py-3 px-2 text-center text-[#923330] font-bold tracking-wider sansation-bold leading-tight md:leading-normal'>
            Emerging Research Frontiers in Engineering, Science and Technology 2026
          </h2>
        </div>

        {/* Conference Acronym - Playfair Display */}
        <div className="relative inline-block mt-2 md:mt-4">
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-[#751916] rounded-tl-full rounded-br-full bg-white/50 px-6 sm:px-10 md:px-16 lg:px-20 py-1 md:py-2 font-bold tracking-wider relative z-10' style={{ fontFamily: "'Playfair Display', serif" }}>
            ICERFEST 2026
          </h2>

          {/* Animated border element */}
          <div 
            className="absolute inset-0 rounded-tl-full rounded-br-full border-[3px] md:border-[4px] border-transparent
              animate-[pulseBorder_3s_linear_infinite] z-0"
            style={{
              background: 'linear-gradient(90deg, transparent, red, transparent)',
              backgroundSize: '200% 100%',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor'
            }}
          />
        </div>

        {/* Date/Location - Lato */}
        <div className='text-white text-center mt-4 md:mt-8 mb-4 md:mb-10'>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold flex flex-col  items-center justify-center' style={{ fontFamily: "'Lato', sans-serif" }}>
            <span className='flex items-center gap-2'>
              <FaCalendarDays className='text-sm md:text-base' /> 
              April 04-05, 2026
            </span>
            <br />
            <span className='flex items-center gap-2'>
              <IoLocationOutline className='text-sm md:text-base' />
              Pabna University of Science and Technology (PUST)
            </span>
          </p>
        </div>
      </div>

      {/* Countdown positioned differently on mobile vs desktop */}
      <div className='absolute flex justify-center w-full lg:-bottom-48 -bottom-44 z-50 px-5'>
        <Countdown />
      </div>
    </div>
  );
};

export default Banner;