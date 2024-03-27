import React, { useRef, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import { recordPlayer } from '../../images/ImgAssets';
import myMixes from '../../data/myMixes';

const Mixes = () => {
  const audioRefs = useRef(myMixes.map(mix => new Audio(mix.song)));

  useEffect(() => {
    return () => {
      audioRefs.current.forEach(audioRef => audioRef.pause());
    };
  }, []);

  const handleMouseEnter = (index) => () => {
    const audio = audioRefs.current[index];
    audio.play().catch((error) => console.error('Playback failed:', error));
  };

  const handleMouseLeave = (index) => () => {
    audioRefs.current[index].pause();
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <video autoPlay loop muted style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}>
        <source src={recordPlayer} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full">
        <Navbar />
        <div className='container mx-auto p-10 mt-10'>
          <h1 className='text-8xl text-white font-extrabold tracking-tight shadow-xl font-customOne'>My Mixes</h1>
        </div>
        <div className="container mx-auto pt-12">
          <div className="flex flex-wrap justify-items -m-4">
            {myMixes.map((work, index) => (
                <div key={index} className="p-4 md:w-1/2 flex justify-center">
                  <div className="flex flex-col md:flex-row items-center md:items-start w-full">
                      <div 
                      className="md:flex-shrink-0 w-72 h-full bg-rose-600 bg-opacity-40 hover:bg-opacity-70 transition-opacity duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md rounded-lg overflow-hidden"
                      onMouseEnter={handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave(index)}
                      >
                        <img className="p-10 lg:h-60 md:h-36 w-full object-cover object-center" 
                            src={work.image} 
                            alt={work.title} />
                      </div>
                      <div className="md:pl-6 md:mt-0 mt-4 pt-20">
                        <h1 className="text-2xl md:text-3xl title-font font-bold text-white mb-2 font-customTwo">
                          {work.title}
                        </h1>
                        <div className="bg-black bg-opacity-50 p-2 rounded inline-block">
                          <p className="text-xl md:text-lg text-fuchsia-50 font-customTwo">
                            {work.artist}
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Mixes;
