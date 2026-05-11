import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, width = "fit-content", delay = 0, y = 30 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: y, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.2, 0.8, 0.2, 1]
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children, delay = 0, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, staggerChildren = 0.1, delayChildren = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, y = 20 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.2, 0.8, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};
