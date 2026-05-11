import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] bg-white flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND DEPTH: Minimalist Moving Planes */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            x: ['-5%', '5%'],
            y: ['-5%', '5%']
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-10%] bg-[#000B1E]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-primary/90" />
      </div>

      {/* THE PORTAL: Expanding Geometric Core */}
      <motion.div
        initial={{ width: 0, height: 2, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
        className="absolute z-10 flex items-center justify-center"
      >
        <motion.div
          initial={{ height: 2 }}
          animate={{ height: "40vh" }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.87, 0, 0.13, 1] }}
          className="w-px bg-secondary/50 relative"
        >
          {/* Glowing Center Point */}
          <motion.div 
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full blur-md"
          />
        </motion.div>
      </motion.div>

      {/* CONTENT: Luxury Brand Reveal */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="flex items-center gap-6"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-secondary flex items-center justify-center font-heading font-black text-2xl md:text-3xl text-secondary">
              P
            </div>
            <div className="h-px w-12 bg-secondary/30 hidden md:block" />
            <h1 className="text-4xl md:text-7xl font-heading font-light text-white tracking-[0.3em] uppercase">
              PHOEN<span className="font-black text-secondary">NIX</span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col items-center"
        >
          <p className="text-[10px] md:text-xs tracking-[0.8em] text-white/40 uppercase font-bold mb-8">
            Global Logistics Excellence
          </p>

          {/* Minimalist Progress System */}
          <div className="w-48 md:w-64 relative">
             <div className="flex justify-between items-end mb-2">
                <span className="text-[8px] tracking-widest text-secondary font-black uppercase">Loading Experience</span>
                <span className="text-white font-heading text-lg font-light tabular-nums">{progress}%</span>
             </div>
             <div className="h-0.5 w-full bg-white/5 relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-secondary shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                  style={{ width: `${progress}%` }}
                />
             </div>
          </div>
        </motion.div>
      </div>

      {/* TRANSITION SHUTTER (Reveals on Exit) */}
      <AnimatePresence>
        {progress === 100 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 4, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
            className="absolute z-50 w-screen h-screen bg-white rounded-full pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* DECORATIVE CORNER ACCENTS */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute inset-12 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />
        
        {/* Dynamic Coordinates */}
        <div className="absolute top-0 right-0 text-[8px] text-white/20 font-mono flex flex-col items-end">
          <span>LAT: 13.0827° N</span>
          <span>LON: 80.2707° E</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlashScreen;
