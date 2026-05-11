import React from 'react';

const Trust = () => {
  const industries = ["Automotive", "Pharmaceuticals", "Technology", "Retail", "Energy", "Manufacturing"];

  return (
    <section className="pt-24 pb-8 bg-surface border-y border-gray-100">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-[10px] tracking-[0.5em] font-bold text-muted uppercase mb-4">Trusted by Industry Leaders</h2>
          <div className="w-12 h-0.5 bg-secondary/30 mb-12"></div>
          
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700 reveal reveal-up">
            {industries.map((item, index) => (
              <span key={index} className="text-2xl font-heading font-bold text-primary tracking-tighter hover:text-secondary cursor-default transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
