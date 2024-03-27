import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { spLogo } from '../images/ImgAssets'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // This function toggles the sidebar state between open and closed
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="absolute inset-0 flex antialiased">
      {/* Fullscreen Modal */}
      <div
        className={`fixed inset-0 z-40 flex justify-center items-start bg-black transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none '
        } bg-black bg-opacity-95`}
      >
        <div className="relative flex flex-col flex-1 max-w-screen mx-auto z-50">
          {/* Close button inside the modal */}
          <button onClick={toggleSidebar} className="p-2 rounded-lg focus:outline-none text-white focus:ring absolute top-5 right-5">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center justify-center flex-shrink-0 p-4 mt-4">
            <a href="#" className="text-white">
              <img className="w-24 h-24" src={spLogo} alt="Logo"/>
            </a>
          </div>
          <nav className="flex flex-col text-8xl font-customThree items-center pt-10">
            <Link to="/" className="py-4 hover:text-rose-800 text-white no-underline" onClick={() => setIsSidebarOpen(false)}>Home</Link>
            <Link to="/about" className="py-4 hover:text-rose-800 text-white no-underline" onClick={() => setIsSidebarOpen(false)}>About</Link>
            <Link to="/library" className="py-4 hover:text-rose-800 text-white no-underline" onClick={() => setIsSidebarOpen(false)}>Library</Link>
            <Link to="/bts" className="py-4 hover:text-rose-800 text-white no-underline" onClick={() => setIsSidebarOpen(false)}>Behind-The-Scenes!</Link>
            <Link to="/contact" className="py-4 hover:text-rose-800 text-white no-underline" onClick={() => setIsSidebarOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center flex-1 relative z-10">
        {/* Toggle button */}
        <button onClick={toggleSidebar} className={`fixed p-2 bg-transparent rounded-lg top-5 left-5 z-50 ${isSidebarOpen ? 'hidden' : ''}`}>
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;