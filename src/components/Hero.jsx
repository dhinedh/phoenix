import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

import { motion } from 'framer-motion';
import ThreeDFloatingItems from './ThreeDFloatingItems';

const Hero = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] }
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Elegant Overlay */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroBg} 
          alt="Elegant Logistics" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary"></div>
      </motion.div>

      <ThreeDFloatingItems />

      {/* Centered Content */}
      <div className="container mx-auto px-6 relative z-10 text-center pt-12 md:pt-0">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-white/10 mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Premium Global Logistics</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-heading font-light text-white mb-6 md:mb-8 leading-[1.1]">
            The Art of <span className="font-bold text-accent">Global</span> Movement
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg text-white/60 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Experience unparalleled precision in international freight and supply chain solutions. 
            Tailored for the world's most demanding businesses.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => navigate('/contact')}
              className="accent-gradient text-white px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase transition-all hover:brightness-110 shadow-2xl"
            >
              Inquire Now
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="gold-gradient text-white px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase transition-all hover:brightness-110 shadow-2xl"
            >
              Our Capabilities
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.5em] text-white uppercase font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
