import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Elegant Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Elegant Logistics" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary"></div>
      </div>

      {/* Centered Content */}
      <div className="container mx-auto px-6 relative z-10 text-center pt-20 md:pt-0">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-white/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Premium Global Logistics</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-heading font-light text-white mb-8 leading-[1.1] animate-fade-in delay-1">
            The Art of <span className="font-bold text-secondary">Global</span> Movement
          </h1>
          
          <p className="text-base md:text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in delay-2">
            Experience unparalleled precision in international freight and supply chain solutions. 
            Tailored for the world's most demanding businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in delay-3">
            <button 
              onClick={() => navigate('/contact')}
              className="gold-gradient text-primary px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase transition-all hover:brightness-110 shadow-2xl"
            >
              Inquire Now
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="glass text-white border border-white/20 px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase transition-all hover:bg-white/10"
            >
              Our Capabilities
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.5em] text-white uppercase font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
