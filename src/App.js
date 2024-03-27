import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx'; 
import BTS from './pages/BTS.jsx';
import Landing from './pages/Landing.jsx';
import Contact from './pages/Contact.jsx';
import Library from './pages/Library.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/bts" element={<BTS />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
