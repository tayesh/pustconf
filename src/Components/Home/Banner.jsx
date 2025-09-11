import React from 'react';
import { FaCalendarDays } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const Banner = () => {
  return (
    <div className='w-full lg:h-[90vh] h-[50vh] md:h-[90vh] mx-auto mb-4 md:mb-10 shadow-[10px_10px_30px] shadow-black/70 overflow-hidden relative'>
      <img 
        className='w-full absolute top-0 md:-top-[200px] z-10 object-cover h-full md:h-auto opacity-55' 
        src="https://i.ibb.co/GQ6jpMhP/481004822-1316492976319346-8236386712720013553-n.jpg" 
        alt="Conference background"
      />
      
      <div className='w-full h-full flex flex-col lg:justify-end justify-center items-center gap-4 md:gap-10 bg-black/55 relative z-20'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold tracking-wider'>
          INTERNATIONAL CONFERENCE ON
        </h2>
        
        <h2 className='text-xl sm:text-2xl py-5 md:text-3xl lg:text-4xl xl:text-5xl w-full bg-white/50 md:py-2 text-center text-[#923330] font-bold tracking-wider'>
          Emerging Research Frontiers in Engineering, Science and Technology 2026 
        </h2>
        
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#751916] rounded-tl-full rounded-br-full bg-white/50 px-4 md:px-10 py-1 md:py-2 font-bold tracking-wider'>
          ICERFEST-2026
        </h2>
        
        <p className='text-white text-center mb-4 md:mb-10 text-sm sm:text-base md:text-xl lg:text-2xl font-bold'>
         <span className='flex gap-2 items-center justify-center'><FaCalendarDays /> April 04-05, 2026 </span><br className='hidden sm:block' />
         
          <span className='flex gap-2 items-center'><IoLocationOutline />Pabna University of Science and Technology (PUST)</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;