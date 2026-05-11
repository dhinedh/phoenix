import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    // Technical Ambient Audio Setup
    const audio = new Audio('https://cdn.pixabay.com/audio/2026/04/13/audio_1569faf36b.mp3');
    audio.volume = 0.3;
    audio.loop = true;

    const playAudio = () => {
      audio.play().catch(err => {
        console.log("Autoplay prevented. Audio will play on first interaction.", err);
      });
    };

    playAudio();

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          
          // Fade out audio on completion
          const fadeOut = setInterval(() => {
            if (audio.volume > 0.05) {
              audio.volume -= 0.05;
            } else {
              audio.pause();
              clearInterval(fadeOut);
            }
          }, 100);

          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(timer);
      audio.pause();
    };
  }, [onComplete, hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => !hasStarted && setHasStarted(true)}
      className={`fixed inset-0 z-[2000] bg-white flex items-center justify-center overflow-hidden ${!hasStarted ? 'cursor-pointer' : ''}`}
    >
      {/* Interaction Hint */}
      {!hasStarted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 z-50 text-[10px] tracking-[0.6em] text-white/40 uppercase font-black"
        >
          Click Anywhere to Begin
        </motion.div>
      )}

      {/* BACKGROUND DEPTH: Minimalist Moving Planes */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            x: ['-5%', '5%'],
            y: ['-5%', '5%']
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-10%] bg-primary"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-primary/90" />
      </div>

      {/* THE PORTAL: Expanding Geometric Core */}
      <motion.div
        initial={{ width: 0, height: 2, opacity: 0 }}
        animate={hasStarted ? { width: "100%", opacity: 1 } : { width: 40, opacity: 0.2 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
        className="absolute z-10 flex items-center justify-center"
      >
        <motion.div
          initial={{ height: 2 }}
          animate={hasStarted ? { height: "40vh" } : { height: 2 }}
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
        <AnimatePresence>
          {hasStarted && (
            <div className="flex flex-col items-center">
              <div className="overflow-hidden mb-4">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
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
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col items-center"
              >
                <p className="text-[10px] md:text-xs tracking-[0.8em] text-white/40 uppercase font-bold">
                  Global Logistics Excellence
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* FOOTER PROGRESS SYSTEM: Architectural Bottom Placement */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-20 left-12 right-12 md:left-24 md:right-24 z-30"
      >
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-end mb-4">
            <div className="flex flex-col gap-1">
              <span className={`text-[8px] tracking-[0.4em] font-black uppercase transition-colors duration-500 ${progress === 100 ? 'text-white' : 'text-secondary'}`}>
                {progress === 100 ? 'Initialization Complete' : 'Loading Experience'}
              </span>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={progress === 100 ? { 
                      scale: [1, 1.5, 1],
                      backgroundColor: ["#2B59C3", "#FFFFFF", "#2B59C3"]
                    } : { 
                      opacity: [0.2, 1, 0.2] 
                    }}
                    transition={{ duration: progress === 100 ? 0.5 : 1.5, repeat: progress === 100 ? 0 : Infinity, delay: i * 0.1 }}
                    className="w-1.5 h-1.5 rounded-full bg-secondary"
                  />
                ))}
              </div>
            </div>
            <motion.span 
              animate={progress === 100 ? { scale: [1, 1.2, 1], color: ["#fff", "#2B59C3", "#fff"] } : {}}
              className="text-white font-heading text-3xl font-light tabular-nums"
            >
              {progress}<span className="text-xs ml-1 text-secondary">%</span>
            </motion.span>
          </div>
          
          <div className="h-1 w-full bg-white/5 relative overflow-hidden">
            <motion.div 
              className={`absolute top-0 left-0 h-full shadow-[0_0_25px_rgba(43,89,195,0.6)] transition-colors duration-500 ${progress === 100 ? 'bg-white' : 'bg-secondary'}`}
              style={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 40, damping: 20 }}
            />
            {progress < 100 && (
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            )}
          </div>
          
          <div className="mt-4 flex justify-between overflow-hidden h-4">
            <AnimatePresence mode="wait">
              <motion.span 
                key={progress === 100 ? 'ready' : 'staging'}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-[7px] text-white/40 tracking-widest uppercase font-bold"
              >
                {progress === 100 ? 'Connection Established' : 'Systems Staging...'}
              </motion.span>
            </AnimatePresence>
            <span className="text-[7px] text-white/20 tracking-widest uppercase font-bold">PHOENNIX_GLOBAL_STABLE</span>
          </div>
        </div>
      </motion.div>

      {/* TRANSITION SHUTTER (Reveals on Exit) */}
      <AnimatePresence>
        {progress === 100 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 6, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.87, 0, 0.13, 1] }}
            className="absolute z-50 w-screen h-screen bg-white rounded-full pointer-events-none shadow-[0_0_100px_rgba(255,255,255,1)]"
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
