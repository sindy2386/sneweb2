import Navbar from '../Navbar/Navbar';
import React from 'react';
import TypedText from '../objects/TypedText';
import { landingOne, landingImgOne } from '../images/ImgAssets';
import Stars from '../objects/Stars';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center fixed w-full h-full">
      <img src={landingOne} alt="Background" className="absolute w-full h-full object-cover -z-10" />
      <div className="relative w-full h-full overflow-hidden ">
        <div className="absolute top-0 left-0 p-12 z-10 w-full h-full flex flex-col justify-between">
          <Navbar />
          <Stars />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70vh, 0 100%)' }}>
            {/* Flex container for image and text */}
            <div className="flex items-center justify-center space-x-8">
              {/* Image of me singing */}
              <img src={landingImgOne} alt="Snehal Singing" className="w-1/4 h-auto rounded-full shadow-lg fade-in" />

              {/* Text content */}
              <div>
                <h1 className="enterAnimation font-customThree text-9xl text-white ">Snehal</h1>
                <h2 className="enterAnimationFromRight font-customThree text-5xl text-white">Pandey</h2>
                <p className="font-customFour mt-4 text-3xl text-rose-400">
                  <TypedText strings={['Creative Technologist', 'Audio Engineer', 'Music Producer']} />
                </p>
                <button 
                  className="font-customFour px-8 py-4 mt-2 cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded hover:bg-red-700 transition duration-300 animate-gradient-x"
                  onClick={() => navigate('/about')} // Navigate to the About page
                >Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
