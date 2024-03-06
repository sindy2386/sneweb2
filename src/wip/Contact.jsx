// 2-20-24 Music Waveform SVG on left & My Image on Right

import React from 'react';
import Navbar from '../Navbar/Navbar';
import { landingOne, contactMe, svgWallpaper, musicWaveform } from '../images/ImgAssets';

const Contact = () => {
  return (
    <div id='ContactBigDiv'>
      <Navbar />
      
      {/* Red Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${landingOne})` }} />
      
      {/* Red SVG Wallpaper */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={svgWallpaper} alt="SVG Wallpaper" className="absolute inset-0 w-full h-full object-cover opacity-50"  />
      </div>
      
      {/* Contact Form */}
      <div className="flex items-center justify-center w-full h-full">
        {/* Music Waveform SVG */}
        <div id='Music Waveform SVG div' 
        className="hidden lg:block absolute top-1/4 left-0 bottom-0 w-1/3 max-w-lg max-h-72" 
        style={{ 
          backgroundImage: `url(${musicWaveform})`, 
          backgroundSize: 'cover' 
        }}
        ></div>
        <div className="px-6 py-24 sm:py-24 lg:px-8 relative z-10 font-customTwo">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-6xl tracking-tight text-white sm:text-7xl">Contact</h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Let's create something awesome together!
            </p>
          </div>
          <form action="#" method="POST" className="mx-auto mt-12 max-w-xl sm:mt-10">
            <div className="grid grid-cols-1 gap-y-8">
              <div>
                <label htmlFor="first-name" className="block text-lg font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-4 sm:text-lg"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-lg font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-4 sm:text-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-4 sm:text-lg"
                />
              </div>
              <div>
                <label htmlFor="phone-number" className="block text-lg font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-4 sm:text-lg"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-4 sm:text-lg"
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
        
        {/* Contact Me Image */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/3 flex justify-end">
          <div className="max-w-md max-h-72">
            <img src={contactMe} alt="Contact Me" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;