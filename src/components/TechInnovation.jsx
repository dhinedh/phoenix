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

const TechInnovation = () => {
  const { activeIdx, setRef } = useScrollActive({ rootMargin: '-40% 0px -40% 0px' });

  return (
    <section className="py-40 bg-primary relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.05" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
             <div className="space-y-12">
                {features.map((f, i) => {
                  const isActive = activeIdx === i;
                  
                  return (
                    <div 
                      key={i} 
                      data-scroll-index={i}
                      ref={setRef(i)}
                      className={`flex gap-8 group transition-all duration-700 reveal reveal-left ${
                        isActive ? 'md:translate-x-4' : ''
                      }`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      <div className={`flex-shrink-0 w-14 h-14 border flex items-center justify-center font-heading font-bold text-xl transition-all duration-500 ${
                        isActive ? 'bg-secondary border-secondary text-primary scale-110 shadow-lg rotate-[360deg]' : 'border-secondary/30 text-secondary group-hover:bg-secondary group-hover:text-primary'
                      }`}>
                        0{i+1}
                      </div>
                      <div>
                        <h3 className={`text-xl font-heading font-bold mb-3 uppercase tracking-widest transition-colors ${isActive ? 'text-secondary' : 'text-white'}`}>{f.title}</h3>
                        <p className={`font-light leading-relaxed max-w-sm transition-colors text-sm ${isActive ? 'text-white' : 'text-white/40'}`}>{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
             </div>
          </div>

          <div className="order-1 lg:order-2 reveal reveal-right">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechInnovation;
