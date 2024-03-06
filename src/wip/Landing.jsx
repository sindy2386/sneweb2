// 2-16-24 spinning mesh attempt

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Navbar from '../Navbar/Navbar';
import { landingOne } from '../images/ImgAssets';
import SpinningMesh from '../objects/SpinningMesh';

const Scene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <SpinningMesh position={[0, 0, 0]} args={[1, 1, 1]} color="orange" />
      {/* OrbitControls automatically uses the default camera */}
      <OrbitControls />
    </Canvas>
  );
};

const Landing = () => {
  return (
    <div className="flex items-center justify-center fixed w-full h-full">
      <img src={landingOne} alt="Background" className="absolute w-full h-full object-cover -z-10" />
      <div className="absolute top-0 left-0 p-12 z-10 w-full h-full flex flex-col justify-between">
        <Navbar />
        <Scene />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70vh, 0 100%)' }}>
          <div>
            <h1 className="text-9xl text-white">Snehal</h1>
            <h2 className="text-5xl text-white">Pandey</h2>
            <p className="text-lg text-rose-400 mt-4">Creative Technologist</p>
            <button className="px-8 py-4 mt-4 bg-red-500 text-white font-bold rounded hover:bg-red-700 transition duration-300">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
