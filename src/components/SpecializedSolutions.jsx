import React from 'react';
import { useScrollActive } from '../hooks/useScrollActive';

const solutions = [
  {
    title: "Project Cargo",
    desc: "Management of over-dimensional and heavy-lift shipments for industrial infrastructure.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Cold Chain",
    desc: "Temperature-controlled logistics for pharmaceuticals and perishable food products.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Hazardous Materials",
    desc: "DGR certified handling and transport of dangerous goods following strict IMO/IATA regulations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  }
];

import { motion } from 'framer-motion';

const SpecializedSolutions = () => {
  const { activeIdx, setRef } = useScrollActive();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="max-w-3xl"
          >
            <h2 className="text-secondary font-bold tracking-[0.4em] mb-6 uppercase text-xs animate-pulse">Sector Expertise</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-primary leading-tight tracking-tighter">
              SPECIALIZED <br />
              <span className="font-light italic text-muted">Industrial Solutions.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-muted text-lg max-w-sm font-light leading-relaxed border-l border-secondary/30 pl-8"
          >
            Beyond standard freight, we offer high-stakes logistics engineering for complex requirements.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {solutions.map((s, index) => {
            const isActive = activeIdx === index;
            
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                data-scroll-index={index}
                ref={setRef(index)}
                className={`group p-10 transition-all duration-200 rounded-sm border border-gray-50 overflow-hidden relative shadow-sm ${
                  isActive ? 'bg-primary scale-[1.02] shadow-2xl z-20' : 'bg-surface hover:bg-primary'
                }`}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 flex items-center justify-center transition-all duration-200 mb-10 shadow-sm ${
                    isActive ? 'bg-secondary text-primary' : 'bg-white text-primary group-hover:bg-secondary group-hover:text-primary'
                  }`}>
                    {s.icon}
                  </div>
                  <h3 className={`text-2xl font-heading font-bold transition-colors mb-6 ${
                    isActive ? 'text-white' : 'text-primary group-hover:text-white'
                  }`}>
                    {s.title}
                  </h3>
                  <p className={`font-light leading-relaxed transition-colors ${
                    isActive ? 'text-white/60' : 'text-muted group-hover:text-white/60'
                  }`}>
                    {s.desc}
                  </p>
                </div>
                <div className={`absolute -bottom-10 -right-10 text-9xl font-black transition-colors select-none ${
                  isActive ? 'text-white/5' : 'text-primary/5 group-hover:text-white/5'
                }`}>
                  {index + 1}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecializedSolutions;
