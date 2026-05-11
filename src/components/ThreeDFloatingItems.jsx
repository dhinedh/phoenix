import React from 'react';
import { motion } from 'framer-motion';

const ThreeDFloatingItems = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 3D Wireframe Cube 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotateX: [0, 180, 360],
          rotateY: [0, 90, 180],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] left-[10%] w-32 h-32 border border-secondary/20"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      />

      {/* 3D Wireframe Cube 2 */}
      <motion.div
        animate={{
          y: [0, 60, 0],
          rotateX: [360, 180, 0],
          rotateY: [180, 90, 0],
          opacity: [0.05, 0.2, 0.05]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[20%] right-[15%] w-48 h-48 border border-secondary/10"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      />

      {/* Animated Path (Logistics Route) */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M -100 500 Q 400 100 900 600 T 1600 200"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ThreeDFloatingItems;
