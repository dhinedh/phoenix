import React from 'react';
import { useScrollActive } from '../hooks/useScrollActive';

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We analyze your specific logistics needs and supply chain requirements to provide tailored solutions."
  },
  {
    num: "02",
    title: "Strategic Planning",
    desc: "Our experts design the most efficient routes and modes of transport for your cargo's journey."
  },
  {
    num: "03",
    title: "Seamless Execution",
    desc: "We handle all documentation, customs, and physical movement with precision and real-time tracking."
  },
  {
    num: "04",
    title: "Final Delivery",
    desc: "Secure arrival at the final destination with comprehensive reporting and proof of delivery."
  }
];

const Process = () => {
  const { activeIdx, setRef } = useScrollActive({ rootMargin: '-40% 0px -40% 0px' });

  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12 reveal reveal-up">
          <h2 className="text-secondary font-bold tracking-[0.4em] mb-6 uppercase text-xs">Methodology</h2>
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-6 tracking-tighter">Our Operational Flow</h1>
          <div className="w-24 h-1.5 brand-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => {
            const isActive = activeIdx === i;
            return (
              <div 
                key={i} 
                data-scroll-index={i}
                ref={setRef(i)}
                className={`relative group reveal reveal-skew delay-${i + 1}`}
              >
                <div className="flex flex-col items-center lg:items-start relative z-10">
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-8 transition-all duration-700 ${
                    isActive ? 'bg-secondary border-secondary text-primary scale-110 shadow-[0_0_30px_rgba(212,175,55,0.3)]' : 'border-white/10 text-white group-hover:border-secondary'
                  }`}>
                    <span className="text-2xl font-heading font-black">{step.num}</span>
                  </div>
                  <h4 className={`text-xl font-heading font-bold mb-4 transition-colors ${isActive ? 'text-secondary' : 'text-white'}`}>{step.title}</h4>
                  <p className={`text-sm font-light leading-relaxed text-center lg:text-left transition-colors ${isActive ? 'text-white' : 'text-white/40'}`}>
                    {step.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-[0.5px] bg-white/10 -translate-x-4 z-0"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
