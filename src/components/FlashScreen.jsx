import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlashScreen = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 800); // Give time for the final state to be seen
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Faster counting for smooth feel

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 1, ease: [0.87, 0, 0.13, 1] } 
      }}
      className="fixed inset-0 z-[1000] bg-[#000B1E] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-secondary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center gap-6 mb-12"
        >
          <motion.div 
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-16 h-16 md:w-20 md:h-20 gold-gradient flex items-center justify-center text-primary font-extrabold text-3xl md:text-4xl shadow-[0_0_50px_rgba(212,175,55,0.3)]"
          >
            P
          </motion.div>
          <div className="flex flex-col">
            <motion.div className="flex overflow-hidden">
              {"PHOENNIX".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2 + index * 0.05,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  className="font-heading font-bold text-3xl md:text-5xl tracking-[0.1em] text-white leading-none inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-[10px] md:text-xs tracking-[0.5em] text-secondary font-bold uppercase mt-2"
            >
              Global Logisticss
            </motion.span>
          </div>
        </motion.div>

        {/* Progress Section */}
        <div className="w-64 md:w-80 relative">
          <div className="flex justify-between items-end mb-2">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-[10px] tracking-[0.2em] text-white/50 uppercase font-bold"
            >
              Initializing Systems
            </motion.span>
            <span className="text-secondary font-heading font-bold text-xl tabular-nums">
              {counter}%
            </span>
          </div>
          
          {/* Progress Bar Track */}
          <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
            {/* Progress Bar Fill */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-secondary"
              style={{ width: `${counter}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
            {/* Glow Effect */}
            <motion.div 
              className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ 
                left: ['-20%', '120%'] 
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 text-[10px] tracking-[0.4em] text-white font-medium uppercase"
      >
        Securing Global Supply Chains
      </motion.div>
    </motion.div>
  );
};

export default FlashScreen;
