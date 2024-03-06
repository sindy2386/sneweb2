import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // This function toggles the sidebar state between open and closed
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="absolute inset-0 flex antialiased">
      {/* Fullscreen Modal */}
      <div
        className={`fixed inset-0 z-40 flex justify-center items-start bg-black transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } bg-black bg-opacity-80`}
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
              {/* <img className="h-20 w-20" src={MyLogoone} alt="Logo"/> */}
            </a>
          </div>
          <nav className="flex flex-col font-customTwo items-center p-24">
            <Link to="/" className="py-4 text-8xl  hover:text-rose-800 text-white" onClick={() => setIsSidebarOpen(false)}>Home</Link>
            <Link to="/about" className="py-4 text-8xl hover:text-rose-800 text-white" onClick={() => setIsSidebarOpen(false)}>About</Link>
            <Link to="/library" className="py-4 text-8xl hover:text-rose-800 text-white" onClick={() => setIsSidebarOpen(false)}>Library</Link>
            <Link to="/bts" className="py-4 text-8xl hover:text-rose-800 text-white" onClick={() => setIsSidebarOpen(false)}>Behind-The-Scenes!</Link>
            <Link to="/contact" className="py-4 text-8xl hover:text-rose-800 text-white" onClick={() => setIsSidebarOpen(false)}>Contact</Link>
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