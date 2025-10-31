"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ 
      position: 'sticky', 
      top: 0, 
      backdropFilter: 'blur(10px)', 
      background: 'rgba(255, 255, 255, 0.8)', 
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
      padding: '10px 20px', 
      zIndex: 1000 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="40" height="40" aria-label="Brand Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <h1 style={{ marginLeft: '10px', fontSize: '24px' }}>AI Agent</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#features" style={{ margin: '0 15px', textDecoration: 'none', color: '#333' }}>Features</a>
          <a href="#pricing" style={{ margin: '0 15px', textDecoration: 'none', color: '#333' }}>Pricing</a>
          <a href="#contact" style={{ margin: '0 15px', textDecoration: 'none', color: '#333' }}>Contact</a>
          <button 
            onClick={toggleMenu} 
            style={{ marginLeft: '20px', background: 'transparent', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }} 
          exit={{ opacity: 0, height: 0 }} 
          style={{ overflow: 'hidden', background: 'rgba(255, 255, 255, 0.9)', marginTop: '10px', borderRadius: '5px' }}
        >
          <a href="#features" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#333' }}>Features</a>
          <a href="#pricing" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#333' }}>Pricing</a>
          <a href="#contact" style={{ display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#333' }}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;