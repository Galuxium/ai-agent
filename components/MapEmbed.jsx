"use client";
import { motion } from 'framer-motion';

const MapEmbed = () => {
  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '20px 0'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        title="Map Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509197!2d144.9537353153159!3d-37.81627997975114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11b6f7%3A0x5045675218ce6e0!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1616151234567!5m2!1sen!2sus"
        style={{
          width: '100%',
          height: '100%',
          border: '0',
          borderRadius: '8px'
        }}
        allowFullScreen
        loading="lazy"
        aria-label="Google Map of Melbourne CBD, Victoria, Australia"
      />
      <noscript>
        <img 
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1400&auto=format&fit=crop" 
          alt="Map placeholder" 
          style={{ width: '100%', height: '100%', borderRadius: '8px' }} 
        />
      </noscript>
    </motion.div>
  );
};

export default MapEmbed;