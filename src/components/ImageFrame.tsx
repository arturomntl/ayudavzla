import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/VzlaBitChavez.png',
  '/images/VzlaBitDioslocuide.png',
  '/images/VzlaBitFuego.png',
  '/images/VzlaBitREYNA.png',
  '/images/VzlaBitSenora.png',
  '/images/VzlaBitUnidos.png',
  // Add more image paths as needed
];

const ImageFrame: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed z-[-20] inset-0 lg:static lg:flex items-center justify-end lg:flex-1 lg:basis-2/5 lg:aspect-video pr-8 lg:pr-0 lg:pt-0 flex">
      <div className="w-3/5 h-3/5 lg:w-[56.25vh] lg:h-[100vh] md:w-[56.25vh] md:h-[100vh] sm:w-[56.25vh] sm:h-[100vh] max-h-screen relative">
        <Image
          src={images[currentImageIndex]}
          alt="Slideshow image"
          layout="fill"
          objectFit="cover"
          className='contrast-50 brightness-50'
        />
      </div>
    </div>
  );
};

export default ImageFrame;
