import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/hero-v5.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  
  const bgY = useTransform(scrollY, [0, 500], [0, 100]);
  const textX = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* Background with Motion Frame */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src={heroBg} 
          alt="Logistics Motion" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </motion.div>

      {/* Vertical Brand Accent */}
      <div className="absolute left-0 top-0 w-1 md:w-2 h-full z-30 flex flex-col">
        <div className="flex-1 bg-accent shadow-[0_0_20px_rgba(237,28,36,0.5)]"></div>
        <div className="flex-1 bg-secondary shadow-[0_0_20px_rgba(30,64,175,0.5)]"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ x: textX, opacity }}
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8">
             <span className="text-[10px] font-black tracking-[0.6em] text-accent uppercase">Established 2011</span>
             <div className="h-[1px] w-12 bg-white/20"></div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-12"
          >
            GLOBAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/20 italic font-light">MOMENTUM.</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed font-light">
                Accelerating the world's most complex supply chains with 
                <span className="text-white font-medium italic pl-2">uncompromising precision.</span>
              </p>
              
              <div className="flex flex-wrap gap-8">
                <button 
                  onClick={() => navigate('/contact')}
                  className="group relative flex items-center gap-6"
                >
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-accent rounded-full group-hover:scale-125 transition-transform duration-500 opacity-20"></div>
                    <div className="relative w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(237,28,36,0.4)] group-hover:bg-white transition-colors duration-500">
                      <svg className="w-5 h-5 text-white group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs font-black tracking-[0.4em] text-white uppercase">Initialize</span>
                </button>

                <button 
                  onClick={() => navigate('/services')}
                  className="group flex flex-col gap-2"
                >
                  <span className="text-[10px] font-black tracking-[0.4em] text-white/40 group-hover:text-white transition-colors uppercase">The Ecosystem</span>
                  <div className="h-[2px] w-8 bg-accent group-hover:w-20 transition-all duration-500"></div>
                </button>
              </div>
            </motion.div>

            {/* Micro HUD Element */}
            <motion.div 
              variants={itemVariants}
              className="hidden lg:flex flex-col gap-6 p-8 glass border border-white/5 rounded-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                <span className="text-[9px] tracking-widest text-white/40 font-bold uppercase">Real-time Routing Active</span>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tighter">99.98%</span>
                  <span className="text-[8px] text-white/30 uppercase tracking-widest">Uptime</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tighter">24/7</span>
                  <span className="text-[8px] text-white/30 uppercase tracking-widest">Operation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Motion Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-full h-[1px] bg-gradient-to-r from-transparent to-accent"></div>
        <div className="absolute top-1/2 right-0 w-full h-[1px] bg-gradient-to-r from-transparent to-secondary"></div>
        <div className="absolute top-3/4 right-0 w-full h-[1px] bg-gradient-to-r from-transparent to-accent"></div>
      </div>
    </section>
  );
};

export default Hero;
