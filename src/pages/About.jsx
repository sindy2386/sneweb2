import React from 'react';
import Navbar from '../Navbar/Navbar';
import { flowerGalaxy } from '../video/VideoAssets';
import { landingOne } from '../images/ImgAssets';
import Stars from '../objects/Stars';
import { LayoutGridDemo } from '../objects/LayoutGrid';

const About = () => {
  return (
    <div id="AboutBigDiv" className="flex flex-col h-screen relative">
      
      {/* Flower Galaxy Video */}
      <video
        className="flex-grow object-cover w-full h-full z-0"
        autoPlay
        loop
        muted
      >
        <source src={flowerGalaxy} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Intro Overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-10 text-center px-6">
      <Navbar />
        <div className="bg-black bg-opacity-70 font-customFour p-12 rounded-3xl text-red-400">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 neon-glow">
            Hello! I’m Snehal Pandey
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl mb-8 neon-glow">
            I'm thrilled to have you here on my website :)
          </p>
          <p className="text-lg md:text-xl lg:text-3xl neon-glow">
            I’d love to share a bit about myself and my journey so far.
          </p>
        </div>
      </div>

      {/* Layout Grid Section */}
      <div className="relative bg-black bg-opacity-100">
        <Stars />
        <Stars />
        <img
          src={landingOne}
          alt="Landing One"
          className="object-cover w-full h-full"
          // style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} // Triangle (pointing up)
          // style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} // Trapezoid
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} // Rhombus
        />
        <div className="absolute inset-0 z-20 text-4xl " >
          <LayoutGridDemo  />
        </div>
      </div>

      {/* Pg 2 */}
      <div className="relative bg-black">
        <Stars />
        <img
          src={landingOne}
          alt="Landing One"
          className="object-cover w-full h-full"
          style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} // Trapezoid
        />
      </div>
      
    </div>
  );
};

export default About;