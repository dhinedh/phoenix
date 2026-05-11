import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Network from '../components/Network';
import Trust from '../components/Trust';
import Testimonials from '../components/Testimonials';
import SpecializedSolutions from '../components/SpecializedSolutions';
import TechInnovation from '../components/TechInnovation';
import ctaBg from '../assets/cta-bg.png';

import { motion } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <Trust />
      <About />
      <TechInnovation />
      <SpecializedSolutions />
      <Network />
      <Services />
      <Process />
      <Testimonials />
      
      {/* Call to Action Section - Enhanced */}
      <section className="py-40 relative overflow-hidden bg-primary">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={ctaBg} 
            alt="Global Network" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent"></div>
          
          {/* Digital Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.15]">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2B59C3_1px,transparent_1px)] bg-[length:40px_40px]"></div>
          </div>
        </motion.div>

        <div className="container mx-auto px-8 relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="max-w-4xl"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-secondary font-bold tracking-[0.6em] mb-10 uppercase text-[10px]"
            >
              Global Engagement
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-heading font-black text-white mb-12 leading-[0.9] tracking-tighter"
            >
              READY TO REDEFINE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-secondary to-secondary/40">SUPPLY CHAIN?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/40 text-xl md:text-2xl mb-16 max-w-2xl font-light leading-relaxed"
            >
              Partner with Phoennix Global Logisticss for precision-engineered freight solutions that move your business forward.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <button 
                onClick={() => navigate('/contact')}
                className="brand-gradient text-primary px-12 py-5 rounded-sm font-bold text-xs tracking-[0.4em] uppercase transition-all hover:brightness-110 shadow-[0_20px_50px_rgba(43,89,195,0.3)] group flex items-center gap-4"
              >
                <span>Start Conversation</span>
                <div className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all"></div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
