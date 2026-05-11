import React from 'react';
import { motion } from 'framer-motion';

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Animated 3D Grid */}
        <motion.div 
          animate={{ 
            rotateX: [0, 45, 0],
            rotateY: [0, 90, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-[150%] h-[150%] border-[0.5px] border-secondary/20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(212, 175, 55, 0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformStyle: 'preserve-3d'
          }}
        />
        
        {/* Floating 3D Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              rotateZ: [0, 360],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut"
            }}
            className="absolute w-24 h-24 border border-secondary/10 flex items-center justify-center text-[8px] text-secondary font-black tracking-widest uppercase"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              transform: 'perspective(500px) rotateX(45deg) rotateY(45deg)'
            }}
          >
            DATA_CHUNK_{i}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDBackground;
