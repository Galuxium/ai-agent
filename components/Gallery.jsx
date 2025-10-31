"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=600&auto=format&fit=crop',
    alt: 'AI Agent 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=600&auto=format&fit=crop',
    alt: 'AI Agent 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=600&auto=format&fit=crop',
    alt: 'AI Agent 3',
  },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {images.map((image, index) => (
          <div key={index} onClick={() => openModal(image.src)} style={{ cursor: 'pointer' }}>
            <img src={image.src} alt={image.alt} style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        ))}
      </div>
      {isOpen && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={currentImage}
            alt="Enlarged view"
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '8px' }}
            onClick={closeModal}
          />
        </motion.div>
      )}
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;