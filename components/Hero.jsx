"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1400&auto=format&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    color: '#fff',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
  };

  const leftColumnStyle = {
    zIndex: 1,
    padding: '20px',
    maxWidth: '600px',
  };

  const rightColumnStyle = {
    zIndex: 1,
    padding: '20px',
    maxWidth: '400px',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
  };

  const ctaButtonStyle = {
    backgroundColor: '#ff4081',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={leftColumnStyle}>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          Discover Your AI Agent
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          Empower your projects with intelligent solutions.
        </motion.p>
        <motion.button style={ctaButtonStyle} onClick={scrollToFeatures} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
          Explore Features
        </motion.button>
      </div>
      <div style={rightColumnStyle}>
        <img src="https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=400&auto=format&fit=crop" alt="AI Agent Mockup" style={imageStyle} />
      </div>
    </div>
  );
};

export default Hero;