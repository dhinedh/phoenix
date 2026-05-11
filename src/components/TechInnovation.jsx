import React from 'react';
import { useScrollActive } from '../hooks/useScrollActive';

const features = [
  {
    title: "Live Tracking",
    desc: "Real-time visibility of your cargo with GPS-enabled monitoring and automated milestone updates."
  },
  {
    title: "AI Optimization",
    desc: "Predictive routing algorithms that adapt to weather, traffic, and global disruptions in real-time."
  },
  {
    title: "Digital Vault",
    desc: "Cloud-based documentation management for secure, instant access to BoL, invoices, and customs data."
  }
];

import { motion } from 'framer-motion';
import ThreeDBackground from './ThreeDBackground';

const TechInnovation = () => {
  const { activeIdx, setRef } = useScrollActive({ rootMargin: '-40% 0px -40% 0px' });

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
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="py-40 bg-primary relative overflow-hidden">
      <ThreeDBackground />

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="order-2 lg:order-1"
          >
             <div className="space-y-12">
                {features.map((f, i) => {
                  const isActive = activeIdx === i;
                  
                  return (
                    <motion.div 
                      key={i} 
                      variants={itemVariants}
                      data-scroll-index={i}
                      ref={setRef(i)}
                      className={`flex gap-8 group transition-all duration-200 ${
                        isActive ? 'md:translate-x-4' : ''
                      }`}
                    >
                      <div className={`flex-shrink-0 w-14 h-14 border flex items-center justify-center font-heading font-bold text-xl transition-all duration-200 ${
                        isActive 
                          ? 'bg-secondary border-secondary text-white scale-110 shadow-[0_0_20px_rgba(30,64,175,0.3)] rotate-[360deg]' 
                          : 'border-secondary/20 text-secondary/60 group-hover:border-secondary group-hover:text-secondary'
                      }`}>
                        0{i+1}
                      </div>
                      <div>
                        <h3 className={`text-xl font-heading font-bold mb-3 uppercase tracking-widest transition-colors ${isActive ? 'text-accent' : 'text-white/80'}`}>{f.title}</h3>
                        <p className={`font-light leading-relaxed max-w-sm transition-colors text-sm ${isActive ? 'text-white' : 'text-white/40'}`}>{f.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-secondary font-bold tracking-[0.5em] mb-6 uppercase text-xs">Innovation</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              The Digital <br />
              <span className="font-light italic text-white/40">Advantage.</span>
            </h1>
            <p className="text-white/60 text-lg mb-10 font-light leading-relaxed max-w-xl">
              We leverage cutting-edge technology to transform traditional logistics into a precision-engineered digital experience.
            </p>
            <div className="w-32 h-1 bg-secondary opacity-30 mb-10"></div>
            <button className="text-[11px] tracking-[0.4em] font-bold text-white border border-white/20 px-10 py-5 rounded-sm hover:bg-white hover:text-primary transition-all">
              EXPLORE OUR TECH
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechInnovation;
