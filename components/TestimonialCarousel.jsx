"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "Using this AI agent has transformed my workflow. Highly recommend!",
    author: "Alice Johnson",
    image: "https://images.unsplash.com/photo-1506794778160-4c1f3a7c6d4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFsaWNlJTIwanVzdHxlbnwwfHx8fDE2OTQ5ODQ0NTA&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: 2,
    text: "The AI agent is intuitive and incredibly helpful. A game changer!",
    author: "Bob Smith",
    image: "https://images.unsplash.com/photo-1529655683822-4e7e8c8e6c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxib2IlMjBzbWl0aHxlbnwwfHx8fDE2OTQ5ODQ0NTA&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: 3,
    text: "Fantastic support and features. This AI agent is a must-have!",
    author: "Charlie Brown",
    image: "https://images.unsplash.com/photo-1517841905240-4729888e3b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNoYXJsaWV8ZW58MHx8fHwxNjk0OTg0NDUw&ixlib=rb-4.0.3&q=80&w=400",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      nextTestimonial();
    } else if (event.key === 'ArrowLeft') {
      prevTestimonial();
    }
  };

  return (
    <div
      role="region"
      aria-label="Testimonials"
      tabIndex="0"
      onKeyDown={handleKeyDown}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <motion.div
        key={testimonials[index].id}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <img
          src={testimonials[index].image}
          alt={`Photo of ${testimonials[index].author}`}
          style={{
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            marginBottom: '10px',
          }}
        />
        <p style={{ fontStyle: 'italic', margin: '0 0 10px' }}>
          "{testimonials[index].text}"
        </p>
        <p style={{ fontWeight: 'bold' }}>{testimonials[index].author}</p>
      </motion.div>
      <div>
        <button
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          style={{
            marginRight: '10px',
            padding: '10px 15px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Prev
        </button>
        <button
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          style={{
            padding: '10px 15px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;