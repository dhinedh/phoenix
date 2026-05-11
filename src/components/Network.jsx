import React from 'react';
import { useScrollActive } from '../hooks/useScrollActive';

const regions = [
  { name: "Europe", cities: "London, Rotterdam, Frankfurt", stats: "45+ Hubs" },
  { name: "Asia Pacific", cities: "Singapore, Shanghai, Mumbai", stats: "60+ Hubs" },
  { name: "Americas", cities: "New York, Santos, Panama", stats: "30+ Hubs" },
  { name: "Middle East", cities: "Dubai, Jebel Ali, Doha", stats: "25+ Hubs" }
];

import { motion } from 'framer-motion';

const Network = () => {
  const { activeIdx, setRef } = useScrollActive({ rootMargin: '-30% 0px -30% 0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
    }
  };

  return (
    <section className="py-40 bg-primary relative overflow-hidden border-y border-white/5">
      {/* Background World Map Pattern (CSS) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#2B59C3_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Side: Dynamic Stats & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-secondary font-bold tracking-[0.5em] mb-8 uppercase text-xs">Global Infrastructure</h2>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-10 leading-tight">
              Bridging the <br />
              <span className="font-light italic text-white/40">Global Market.</span>
            </h1>
            <p className="text-white/60 text-xl mb-16 max-w-xl font-light leading-relaxed">
              We operate an elite logistical framework that spans major oceans and continents, ensuring your assets move with unprecedented velocity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col border-l-2 border-secondary/30 pl-8 group"
              >
                <span className="text-5xl font-heading font-bold text-white mb-2 group-hover:text-secondary transition-colors">150+</span>
                <span className="text-[10px] tracking-widest text-white/40 font-bold uppercase">Strategic Countries</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col border-l-2 border-secondary/30 pl-8 group"
              >
                <span className="text-5xl font-heading font-bold text-white mb-2 group-hover:text-secondary transition-colors">24/7</span>
                <span className="text-[10px] tracking-widest text-white/40 font-bold uppercase">Technical Monitoring</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Region Cards / Interactive Hubs */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-6"
          >
            {regions.map((region, index) => {
              const isActive = activeIdx === index;
              
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  data-scroll-index={index}
                  ref={setRef(index)}
                  className={`group glass p-8 transition-all duration-500 cursor-default ${
                    isActive ? 'bg-white/10 scale-[1.02] md:scale-100 ring-1 ring-secondary/30' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className={`font-bold tracking-widest mb-2 uppercase text-xs transition-colors ${isActive ? 'text-white' : 'text-secondary'}`}>{region.name}</h4>
                      <p className={`font-heading font-bold text-xl transition-colors ${isActive ? 'text-secondary' : 'text-white group-hover:text-secondary'}`}>{region.cities}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-white/30 font-bold tracking-widest text-[10px] uppercase block mb-1">Capacity</span>
                      <span className="text-white font-medium text-lg">{region.stats}</span>
                    </div>
                  </div>
                  <div className={`mt-6 h-[1px] bg-secondary/50 transition-all duration-1000 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Large background text for depth */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.02, x: -20 }}
        transition={{ duration: 2 }}
        className="absolute -bottom-20 -left-20 text-[20vw] font-black text-white select-none pointer-events-none"
      >
        NETWORK
      </motion.div>
    </section>
  );
};

export default Network;
