import React, { useState, useEffect } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import cuk from '../carasouel/cuk.jpg';
import ch from '../carasouel/chimachal.jpg';
import ck from '../carasouel/ckerala.jpg';
import ckash from '../carasouel/ckashmir.jpg';
import craj from '../carasouel/craj.jpg';
import cthai from '../carasouel/cthai.jpg';
import csinga from '../carasouel/csinga.jpg';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    url: cuk,
  },
  {
    url: ch,
  },
  {
    url: ck,
  },
  {
    url: ckash,
  },
  {
    url: craj,
  },
  {
    url: cthai,
  },
  {
    url: csinga,
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
      
    }, 4000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slide]);

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  return (
    <div className='relative px-8 py-16'>
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10'
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className='absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10'
      />
      <div className='max-w-[1240px] max-h-[800px] mx-auto px-4 py-48 relative flex justify-center items-center'>
        {sliderData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out delay-100 ${
              index === slide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
           
          >
   
            {index === slide && (
              <img className='w-full h-full object-cover rounded-md' src={item.url} alt={`Slide ${index}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
