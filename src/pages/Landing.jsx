import Navbar from '../Navbar/Navbar';
import React from 'react';
import TypedText from '../objects/TypedText';
import { landingOne, landingImgOne } from '../images/ImgAssets';

const Landing = () => {
  return (
    <div className="flex items-center justify-center fixed w-full h-full">
      <img src={landingOne} alt="Background" className="absolute w-full h-full object-cover -z-10" />
      <div className="relative w-full h-full overflow-hidden ">
        <div className="absolute top-0 left-0 p-12 z-10 w-full h-full flex flex-col justify-between">
          <Navbar />
          <div className="stars-container">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="star" style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`, 
                animationDuration: `${Math.random() * 3 + 2}s` 
              }}></div>
            ))}
          </div>
          <div className="absolute font-customTwo top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70vh, 0 100%)' }}>
            {/* Flex container for image and text */}
            <div className="flex items-center justify-center space-x-8">
              {/* Image of me singing */}
              <img src={landingImgOne} alt="Snehal Singing" className="w-1/4 h-auto rounded-full shadow-lg fade-in" />

              {/* Text content */}
              <div>
                <h1 className="enterAnimation text-9xl text-white">Snehal</h1>
                <h2 className="enterAnimationFromRight text-5xl text-white">Pandey</h2>
                <p className="text-lg text-rose-400 mt-4">
                  <TypedText strings={['Creative Technologist', 'Audio Engineer', 'Music Producer']} />
                </p>
                <button className="px-8 py-4 mt-4 cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded hover:bg-red-700 transition duration-300 animate-gradient-x">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
