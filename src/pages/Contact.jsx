import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import { landingOne, contactMeThree, svgWallpaper, svgMicrophone, svgSpeakers, svgPiano } from '../images/ImgAssets';
import { contactVocalSample } from '../audio/audioAssets';

const Contact = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Create a ref for the audio element

  // Effect to handle audio play logic
  useEffect(() => {
    if (!audioRef.current) return; // Guard clause in case the ref is not attached

    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
      const timer = setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      }, 30000); // Stop after 30 seconds

      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  // Function to toggle play state
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div id="ContactBigDiv" className="relative min-h-screen flex">
      <Navbar />
      
      {/* Red Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${landingOne})` }} />
      
      {/* Red SVG Wallpaper */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={svgWallpaper} alt="SVG Wallpaper" className="absolute inset-0 w-full h-full object-cover opacity-50"  />
      </div>

      {/* Left Side Services Canvas */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 flex font-customTwo items-center justify-center p-4">
        <div className="transform transition duration-500 hover:scale-105">
          <div className="bg-gradient-to-r from-red-600 to-red-700 bg-opacity-90 rounded-xl shadow-2xl p-8 text-white max-w-lg hover:bg-gradient-to-bl hover:from-red-700 hover:to-rose-500">
            <h3 className="text-2xl font-bold mb-8">Elevate Your Sound</h3>
            <div className="space-y-8">
              {/* Vocal Production with Play Audio Sample */}
              <div className="hover:text-rose-200 transition-colors duration-300 relative">
                <div className="inline-block bg-rose-600 px-3 py-1 rounded shadow-lg mb-2">
                  <h4 className="text-xl font-semibold text-white">Vocal Production</h4>
                </div>
                <p className="border-l-4 border-rose-500 pl-4 text-gray-300">Craft the perfect vocal performance for your track.</p>
                <button onClick={togglePlay} className="absolute right-1/2 top-0 transform translate-x-4 -translate-y-1">
                  <img src={svgMicrophone} alt="Play Sample" className="h-10 w-auto" />
                </button>
                <audio ref={audioRef} src={contactVocalSample} />
              </div>
              {/* Audio Engineering */}
              <div className="hover:text-rose-200 transition-colors duration-300 relative">
                <div className="flex items-center">
                  <div className="inline-block bg-rose-600 px-3 py-1 rounded shadow-lg mb-2">
                    <h4 className="text-xl font-semibold text-white">Audio Engineering</h4>
                  </div>
                </div>
                <p className="border-l-4 border-rose-500 pl-4 text-gray-300">Expert editing, mixing, and mastering to bring your music to life.</p>
                <img src={svgSpeakers} alt="Speakers" className="absolute right-1/3 top-0 transform -translate-y-1 h-10 w-auto" />
              </div>
              {/* Music Composition */}
              <div className="hover:text-rose-200 transition-colors duration-300 relative">
                <div className="flex items-center">
                  <div className="inline-block bg-rose-600 px-3 py-1 rounded shadow-lg mb-2">
                    <h4 className="text-xl font-semibold text-white">Music Composition</h4>
                  </div>
                </div>
                <p className="border-l-4 border-rose-500 pl-4 text-gray-300">Original compositions to set your project apart.</p>
                <img src={svgPiano} alt="Piano" className="absolute right-0 left-1/2 top-0 transform -translate-y-1 h-10 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-black bg-opacity-50 flex items-center justify-center">
        <img src={contactMeThree} alt="Contact Me" className="w-full h-auto max-w-lg shadow-2xl" />
      </div>

      
      {/* Contact Form Center */}
      <div className="flex items-center justify-center w-full h-full px-1/4"> 
        <div className="px-6 sm:py-6 lg:px-8 relative z-10 font-customTwo">
          <div className="mx-auto max-w-2xl text-center pt-20">
            {/* Option 3: White Text with Black Shadow for Title and White Text for Message: */}
            <h2 className="text-6xl tracking-tight text-white sm:text-7xl shadow-black pt-2">
              Contact
            </h2>
            <p className="mt-2 text-xl leading-8 text-white">
              Let's create something awesome together!
            </p>

          </div>
          <form action="#" method="POST" className="mx-auto mt-12 max-w-xl sm:mt-10">
            <div className="grid grid-cols-1 gap-y-8">
              <div>
                {/* <label htmlFor="first-name" className="block text-lg font-semibold leading-6 text-gray-900">
                  First name
                </label> */}
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder='First Name'
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-1 mt-4 sm:text-lg"
                />
              </div>
              <div>
                {/* <label htmlFor="last-name" className="block text-lg font-semibold leading-6 text-gray-900">
                  Last name
                </label> */}
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder='Last Name'
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-1 mt-4 sm:text-lg"
                />
              </div>
              <div>
                {/* <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-900">
                  Email
                </label> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder='Email'
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-1 mt-4 sm:text-lg"
                />
              </div>
              <div>
                {/* <label htmlFor="phone-number" className="block text-lg font-semibold leading-6 text-gray-900">
                  Phone number
                </label> */}
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  placeholder='Phone Number'
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-1 mt-4 sm:text-lg"
                />
              </div>
              <div>
                {/* <label htmlFor="message" className="block text-lg font-semibold leading-6 text-gray-900">
                  Message
                </label> */}
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder='Message'
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-1 mt-4 sm:text-lg"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md text-white bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-rose-600 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Twinkling Stars Background */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star" style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`, 
            animationDuration: `${Math.random() * 3 + 2}s` 
          }}></div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
