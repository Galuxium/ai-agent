x
"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonialsData = [
  "The AI agent transformed our workflow!",
  "Incredible support and performance.",
  "A game changer for our team."
];

const Page = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <div>
      <section style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1400&auto=format&fit=crop)', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'white', 
        position: 'relative' 
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.5)' 
        }} />
        <motion.h1 
          style={{ fontSize: '3rem', textAlign: 'center', zIndex: 1 }} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Sell Your AI Agents
        </motion.h1>
        <motion.p 
          style={{ fontSize: '1.5rem', textAlign: 'center', zIndex: 1 }} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empower your business with cutting-edge AI technology.
        </motion.p>
        <div style={{ zIndex: 1 }}>
          <motion.button 
            style={{ margin: '10px', padding: '15px 30px', fontSize: '1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }} 
            whileHover={{ scale: 1.05 }} 
            onClick={() => alert('Primary CTA')}
          >
            Get Started
          </motion.button>
          <motion.button 
            style={{ margin: '10px', padding: '15px 30px', fontSize: '1rem', backgroundColor: 'transparent', color: 'white', border: '2px solid white', borderRadius: '5px' }} 
            whileHover={{ scale: 1.05 }} 
            onClick={() => alert('Secondary CTA')}
          >
            Learn More
          </motion.button>
        </div>
      </section>

      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Features</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {['🚀 Fast', '🔒 Secure', '📈 Scalable'].map((feature, index) => (
            <div key={index} style={{ width: '30%', margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
              <h3>{feature}</h3>
              <p>Description of {feature.toLowerCase()} feature.</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Gallery</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'].map((img, index) => (
            <div key={index} style={{ width: '30%', margin: '10px' }}>
              <img src={img} alt={`Gallery image ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Testimonials</h2>
        <motion.div 
          style={{ 
            margin: '20px auto', 
            padding: '20px', 
            border: '1px solid #ccc', 
            borderRadius: '10px', 
            width: '50%', 
            transition: 'transform 0.3s' 
          }} 
          onClick={nextTestimonial}
        >
          <p>{testimonialsData[currentTestimonial]}</p>
        </motion.div>
      </section>

      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Pricing</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
            <div key={index} style={{ width: '30%', margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: index === 1 ? '#f0f0f0' : 'white' }}>
              <h3>{plan}</h3>
              <p>${(index + 1) * 10}/month</p>
              <button style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
        <h2>Subscribe to our Newsletter</h2>
        <input type="email" placeholder="Your email" aria-label="Email address" style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <button style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>Subscribe</button>
        <div>
          <a href="#" style={{ margin: '10px' }}>Privacy Policy</a>
          <a href="#" style={{ margin: '10px' }}>Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Page;