// 3-25-24 Completed Flower Galaxy and Timeline sections

import React from 'react';
import Navbar from '../Navbar/Navbar';
import { flowerGalaxy } from '../video/VideoAssets';
import { landingOne } from '../images/ImgAssets';
import Timeline from '../objects/Timeline';
import timelineData from '../data/timelineData';

const About = () => {
  return (
    <div id="AboutBigDiv" className="flex flex-col h-screen relative">
      
      {/* Flower Galaxy Video */}
      <video
        className="flex-grow object-cover w-full h-full z-0 backdrop-opacity-100"
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
        <div className="bg-black bg-opacity-80 font-customTwo p-12 rounded-3xl text-red-400">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 neon-glow">
            Hello! I’m Snehal Pandey
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 neon-glow">
            I'm thrilled to have you here on my website :)
          </p>
          <p className="text-lg md:text-xl lg:text-2xl neon-glow">
            I’d love to share a bit about myself and my journey so far.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        <img
          src={landingOne}
          alt="Landing One"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-20 mt-2 text-4xl">
          <Timeline timelineData={timelineData} />
        </div>
      </div>

      {/* Pg 2 */}
      {/* <div>
        <img
          src={landingOne}
          alt="Landing One"
          className="object-cover w-full h-full"
        />
      </div> */}
      
    </div>
  );
};

export default About;