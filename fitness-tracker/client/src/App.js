import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <nav style={{ textAlign: 'center', padding: '15px', fontSize: '18px' }}>
        <Link to="/" style={{ margin: '0 20px' }}>Home</Link>
        <Link to="/tracker" style={{ margin: '0 20px' }}>Fitness Tracker</Link>
        <Link to="/about" style={{ margin: '0 20px' }}>About Us</Link>
        <Link to="/contact" style={{ margin: '0 20px' }}>Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;