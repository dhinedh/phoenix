import React from 'react';
import { motion } from 'framer-motion';
import ThreeDTilt from './ThreeDTilt';

const sectors = [
  { name: "Automotive", icon: "🚗" },
  { name: "Pharmaceuticals", icon: "💊" },
  { name: "Technology", icon: "💻" },
  { name: "Retail", icon: "🛍️" },
  { name: "Energy", icon: "⚡" },
  { name: "Manufacturing", icon: "🏭" }
];

const SpecializedSolutions = () => {
  return (
    <section className="py-40 bg-[#FBFBFC] overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold tracking-[0.6em] mb-6 uppercase text-[10px]"
          >
            Industry Verticals
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-black text-primary leading-tight tracking-tighter"
          >
            SECTOR <span className="font-light italic text-muted">Expertise.</span>
          </motion.h1>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 md:gap-16">
          {/* Row 1: Automotive */}
          <div className="w-full flex justify-center">
            <ThreeDTilt className="w-full max-w-sm">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-10 md:p-14 text-center border border-gray-100 shadow-sm hover:shadow-2xl transition-all group rounded-sm"
              >
                <span className="text-5xl md:text-8xl font-heading font-black text-primary group-hover:text-secondary transition-colors tracking-tighter">Automotive</span>
              </motion.div>
            </ThreeDTilt>
          </div>

          {/* Row 2: Pharmaceuticals */}
          <div className="w-full flex justify-center">
            <ThreeDTilt className="w-full max-w-lg">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 md:p-14 text-center border border-gray-100 shadow-sm hover:shadow-2xl transition-all group rounded-sm"
              >
                <span className="text-5xl md:text-8xl font-heading font-black text-primary group-hover:text-secondary transition-colors tracking-tighter">Pharmaceuticals</span>
              </motion.div>
            </ThreeDTilt>
          </div>

          {/* Row 3: Technology & Retail */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <ThreeDTilt>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-10 md:p-14 text-center border border-gray-100 shadow-sm hover:shadow-2xl transition-all group rounded-sm"
              >
                <span className="text-5xl md:text-8xl font-heading font-black text-primary group-hover:text-secondary transition-colors tracking-tighter">Technology</span>
              </motion.div>
            </ThreeDTilt>
            <ThreeDTilt>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-10 md:p-14 text-center border border-gray-100 shadow-sm hover:shadow-2xl transition-all group rounded-sm"
              >
                <span className="text-5xl md:text-8xl font-heading font-black text-primary group-hover:text-secondary transition-colors tracking-tighter">Retail</span>
              </motion.div>
            </ThreeDTilt>
          </div>

          {/* Row 4: Energy & Manufacturing */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <ThreeDTilt>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 md:p-14 text-center border border-gray-100 shadow-sm hover:shadow-2xl transition-all group rounded-sm"
              >
                <span className="text-5xl md:text-8xl font-heading font-black text-primary group-hover:text-secondary transition-colors tracking-tighter">Energy</span>
              </motion.div>
            </ThreeDTilt>
            <ThreeDTilt>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 md:p-14 text-center border border-gray-100 shadow-sm hover:shadow-2xl transition-all group rounded-sm"
              >
                <span className="text-5xl md:text-8xl font-heading font-black text-primary group-hover:text-secondary transition-colors tracking-tighter">Manufacturing</span>
              </motion.div>
            </ThreeDTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedSolutions;
