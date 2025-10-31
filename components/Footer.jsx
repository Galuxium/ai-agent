"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#282c34', padding: '20px', color: '#ffffff', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 style={{ margin: '0 0 10px' }}>AI Agent</h2>
        <p style={{ margin: '0 0 20px' }}>Connecting you with the future of AI.</p>
        <div style={{ marginBottom: '20px' }}>
          <a href="https://twitter.com" aria-label="Twitter" style={{ margin: '0 10px' }}>
            <svg width="24" height="24" fill="currentColor"><path d="M23.643 4.937c-.835.37-1.736.615-2.675.725a4.686 4.686 0 002.042-2.573 9.283 9.283 0 01-2.956 1.126 4.646 4.646 0 00-7.92 4.23A13.186 13.186 0 011.64 3.15a4.645 4.645 0 001.44 6.194 4.605 4.605 0 01-2.1-.578v.058a4.646 4.646 0 003.72 4.553 4.69 4.69 0 01-2.1.08 4.646 4.646 0 004.334 3.22 9.308 9.308 0 01-5.75 1.977c-.373 0-.738-.022-1.1-.065a13.174 13.174 0 007.12 2.094c8.545 0 13.21-7.079 13.21-13.21 0-.2 0-.398-.014-.595A9.468 9.468 0 0024 4.59a9.217 9.217 0 01-2.357.646 4.634 4.634 0 002.03-2.556z" /></svg>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" style={{ margin: '0 10px' }}>
            <svg width="24" height="24" fill="currentColor"><path d="M19.5 0h-15C2.016 0 0 2.016 0 4.5v15C0 21.984 2.016 24 4.5 24h15c2.484 0 4.5-2.016 4.5-4.5v-15C24 2.016 21.984 0 19.5 0zM7.5 20h-3v-10.5h3V20zm-1.5-11.25c-1.031 0-1.5-.75-1.5-1.5s.469-1.5 1.5-1.5 1.5.75 1.5 1.5-.469 1.5-1.5 1.5zm15 11.25h-3v-5.25c0-1.125-.375-1.875-1.125-2.25-.75-.375-1.5-.375-2.25 0-.75.375-1.125 1.125-1.125 2.25v5.25h-3V8.5h3v1.125c.375-.75 1.125-1.125 1.875-1.125 1.125 0 2.25.375 2.25 2.25V20z" /></svg>
          </a>
        </div>
        <form style={{ display: 'inline-block' }}>
          <input type="email" placeholder="Subscribe to our newsletter" aria-label="Newsletter subscription" style={{ padding: '10px', borderRadius: '4px', border: 'none', marginRight: '10px' }} />
          <button type="submit" style={{ padding: '10px 15px', borderRadius: '4px', border: 'none', backgroundColor: '#61dafb', color: '#282c34' }}>Subscribe</button>
        </form>
        <p style={{ margin: '20px 0 0' }}>© {new Date().getFullYear()} AI Agent. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;