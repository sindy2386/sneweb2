import React, { useRef, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import { recordPlayer } from '../../images/ImgAssets';
import myOriginals from '../../data/myOriginals';

const Originals = () => {
  // Create audio references dynamically based on the myOriginals array
  const audioRefs = useRef(myOriginals.map(original => new Audio(original.song)));

  useEffect(() => {
    // Cleanup function to pause audio when component unmounts
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
    <div className="relative overflow-hidden min-h-screen flex flex-col">
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
          <h1 className='text-8xl text-white font-customOne font-extrabold tracking-tight shadow-xl' style={{ textShadow: '4px 4px 0px #0ea5e9' }}>My Originals</h1>
        </div>
        <div className="container mx-auto pt-12">
          <div className="flex flex-col items-center -m-4">
            {myOriginals.map((work, index) => (
              <div key={index} className={`p-4 md:flex md:w-full ${index % 2 === 0 ? "justify-center" : ""}`}>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:flex-shrink-0">
                    <div className="w-72 h-full bg-rose-600 bg-opacity-40 hover:bg-opacity-70 transition-opacity duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md rounded-lg overflow-hidden"
                      onMouseEnter={handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave(index)}>
                      <img className="p-10 lg:h-60 md:h-36 w-full object-cover object-center" 
                          src={work.image} 
                          alt={work.title} />
                    </div>
                  </div>
                  <div className="md:pl-6 md:mt-0 mt-4 pt-20">
                        <h1 className="text-2xl md:text-3xl title-font font-bold text-white mb-2 font-customTwo">
                          {work.title}
                        </h1>
                        {/* <div className="bg-black bg-opacity-50 p-2 rounded inline-block">
                          <p className="text-xl md:text-lg text-fuchsia-50 italic font-customTwo">
                            {work.artist}
                          </p>
                        </div> */}
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

export default Originals;
