import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollActive } from '../hooks/useScrollActive';

const About = () => {
  const navigate = useNavigate();
  const { activeIdx, setRef } = useScrollActive({ rootMargin: '-40% 0px -40% 0px' });

  return (
    <section id="about" className="pt-10 pb-28 bg-white overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Visual Content */}
          <div className="lg:w-1/2 relative reveal reveal-left">
            <div className="relative z-10 border-[10px] border-surface p-10 lg:p-16 bg-primary shadow-2xl rounded-sm">
              <div className="absolute -top-6 -right-6 w-20 h-20 gold-gradient -z-10"></div>
              <h3 className="text-secondary font-bold tracking-[0.4em] mb-6 uppercase text-[10px]">Since 2011</h3>
              <h2 className="text-2xl md:text-4xl font-heading font-light text-white mb-8 leading-tight">
                Crafting <span className="font-bold italic">Global</span> Connections.
              </h2>
              <div className="w-16 h-0.5 bg-white/20 mb-8"></div>
              <p className="text-white/40 text-xs tracking-widest uppercase font-bold">Chennai, India • International Network</p>
            </div>
            {/* Decorative Grid */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-primary/5 -z-10"></div>
          </div>

          {/* Textual Content */}
          <div className="lg:w-1/2 reveal reveal-right">
            <div className="max-w-xl">
              <h2 className="text-secondary font-bold tracking-[0.4em] mb-6 uppercase text-[10px]">Our Identity</h2>
              <h1 className="text-3xl md:text-5xl font-heading font-black text-primary mb-10 leading-tight">
                A Legacy of <span className="font-light italic text-muted">Trust</span> and Precision.
              </h1>
              <p className="text-muted text-base mb-10 leading-relaxed font-light">
                PHOENNIX GLOBAL LOGISTICSS is more than a logistics provider; we are architects of global commerce. 
                Our identity is rooted in the seamless movement of cargo, driven by a commitment to speed, safety, and unwavering reliability.
              </p>
              
              <div className="space-y-8 mb-14">
                {[
                  { id: "01", title: "Global Connectivity", desc: "Bridging the gap between continents with our extensive freight network." },
                  { id: "02", title: "Integrated Solutions", desc: "From customs to warehousing, we manage every aspect of your supply chain." }
                ].map((item, index) => {
                  const isActive = activeIdx === index;
                  
                  return (
                    <div 
                      key={index} 
                      data-scroll-index={index}
                      ref={setRef(index)}
                      className={`flex items-start gap-6 group transition-all duration-500 ${
                        isActive ? 'md:translate-x-4' : ''
                      }`}
                    >
                      <div className={`w-12 h-12 flex items-center justify-center border font-heading font-bold text-xl transition-all duration-500 ${
                        isActive ? 'bg-primary border-secondary text-secondary scale-110 shadow-lg' : 'border-gray-100 group-hover:border-secondary text-secondary'
                      }`}>
                        {item.id}
                      </div>
                      <div>
                        <h4 className={`text-xl font-heading font-bold mb-2 transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`}>{item.title}</h4>
                        <p className={`text-sm font-light transition-colors ${isActive ? 'text-primary' : 'text-muted'}`}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={() => navigate('/about')}
                className="gold-gradient text-primary px-10 py-5 rounded-sm font-bold text-sm tracking-[0.3em] uppercase transition-all hover:brightness-110 shadow-xl"
              >
                Learn Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Global Connectivity Highlight */}
        <div className="mt-12 p-8 lg:p-16 bg-surface flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-12 rounded-sm border border-gray-100 reveal reveal-up">
          <div className="flex items-center gap-6 md:gap-8">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-secondary/20 flex items-center justify-center text-secondary">
               <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2.5 2.5 0 002.5-2.5V4a2 2 0 00-2-2h-1.036M11 14.493V15" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-heading font-bold text-primary mb-1">Global Connectivity</h4>
              <p className="text-muted text-[10px] md:text-sm font-light uppercase tracking-widest">Bridging Markets Across Continents</p>
            </div>
          </div>
          <div className="flex gap-8 lg:gap-16">
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-heading font-black text-primary block mb-1">150+</span>
              <span className="text-[10px] tracking-widest text-muted font-bold uppercase">Carriers</span>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-heading font-black text-primary block mb-1">24/7</span>
              <span className="text-[10px] tracking-widest text-muted font-bold uppercase">Support</span>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-heading font-black text-primary block mb-1">99%</span>
              <span className="text-[10px] tracking-widest text-muted font-bold uppercase">On Time</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/network')}
            className="text-[10px] md:text-[11px] tracking-[0.3em] font-bold text-primary border-b-2 border-secondary pb-1 hover:text-secondary transition-all"
          >
            EXPAND NETWORK
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
