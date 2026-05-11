import React from 'react';
import { useScrollActive } from '../hooks/useScrollActive';

const values = [
  {
    title: "Precision",
    desc: "Every shipment is a promise. We manage every detail with surgical accuracy.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Velocity",
    desc: "Time is currency. Our network is engineered for speed without compromise.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Integrity",
    desc: "Transparancy is our baseline. We build trust through unwavering honesty.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-12.214A9.013 9.013 0 0012 3c1.242 0 2.417.251 3.483.704m-7.665 14.888A9.013 9.013 0 0012 21c1.242 0 2.417-.251 3.483-.704m9.995-10.448A9.67 9.67 0 0112 11.622c-5.176 1.332-9 6.03-9 11.622m0-11.622a12.02 12.02 0 001.618-6.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 018.382 3.04A12.02 12.02 0 0021 9c0 1.042-.133-2.052-.382-3.016" />
      </svg>
    )
  },
  {
    title: "Innovation",
    desc: "We don't just follow trends; we define the future of digital logistics.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

const AboutPage = () => {
  const { activeIdx, setRef } = useScrollActive({ rootMargin: '-30% 0px -30% 0px' });

  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000" 
            alt="About Hero" 
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 pt-20">
          <div className="max-w-4xl">
            <h2 className="text-secondary font-bold tracking-[0.5em] mb-8 uppercase text-xs animate-fade-in">Our Legacy</h2>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-10 leading-[0.9] tracking-tighter animate-fade-in delay-1">
              Architects of <br />
              <span className="font-light italic text-white/40">Global Flow.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed animate-fade-in delay-2">
              We are not just a logistics provider; we are the architects of your global supply chain success.
            </p>
            <div className="w-24 h-1 gold-gradient"></div>
          </div>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="pt-40 pb-16 relative overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal reveal-left">
               <h2 className="text-secondary font-bold tracking-[0.4em] mb-8 uppercase text-xs animate-pulse">Our Heritage</h2>
               <h1 className="text-4xl md:text-7xl font-heading font-black text-primary mb-12 leading-[0.9] tracking-tighter">
                 FROM LOCAL EXPERTISE <br />
                 <span className="text-muted font-light italic">to Global Leadership.</span>
               </h1>
               <p className="text-muted text-lg mb-10 leading-relaxed font-light">
                 Founded in 2011 in the strategic port city of Chennai, PHOENNIX GLOBAL LOGISTICSS began with a single vision: to simplify the intricate world of international trade for businesses of all sizes.
               </p>
               <div className="flex gap-12">
                  <div className="text-center border-r border-gray-100 pr-12">
                    <span className="text-5xl font-heading font-black text-primary block tracking-tighter">15+</span>
                    <span className="text-[10px] tracking-widest text-muted font-bold uppercase">Years Excellence</span>
                  </div>
                  <div className="text-center">
                    <span className="text-5xl font-heading font-black text-primary block tracking-tighter">150+</span>
                    <span className="text-[10px] tracking-widest text-muted font-bold uppercase">Global Partners</span>
                  </div>
               </div>
            </div>
            <div className="relative group reveal reveal-right">
               <div className="aspect-[4/5] bg-surface overflow-hidden rounded-sm relative z-10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Our Hub" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]"
                  />
               </div>
               <div className="absolute -bottom-12 -left-12 bg-primary p-12 text-white shadow-[30px_30px_60px_rgba(0,0,0,0.3)] hidden md:block max-w-xs z-20 border-l-4 border-secondary">
                  <p className="italic font-light text-sm leading-relaxed mb-6">
                    "Precision is not an option; it is our foundation. We move more than cargo; we move your business forward."
                  </p>
                  <p className="font-bold tracking-widest uppercase text-[10px]">— L. Yuvaraj, Founder</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission & Vision */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4AF37_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
             <div className="group">
                <h3 className="text-secondary font-bold tracking-[0.4em] mb-8 uppercase text-xs">Mission Control</h3>
                <h2 className="text-3xl md:text-6xl font-heading font-light text-white mb-10 leading-[0.9] tracking-tighter">
                   UNPARALLELED <br />
                   <span className="font-black italic text-secondary">Solutions.</span>
                </h2>
                <div className="w-16 h-1 bg-white/10 group-hover:w-32 transition-all duration-700"></div>
                <p className="mt-10 text-white/40 font-light leading-relaxed max-w-xl text-lg">
                   Ensuring our clients' cargo moves with surgical precision and absolute reliability across every global border.
                </p>
             </div>
             <div className="group">
                <h3 className="text-secondary font-bold tracking-[0.4em] mb-8 uppercase text-xs">Future Vision</h3>
                <h2 className="text-3xl md:text-6xl font-heading font-light text-white mb-10 leading-[0.9] tracking-tighter">
                   TRUSTED <br />
                   <span className="font-black italic text-white/40">Global Partner.</span>
                </h2>
                <div className="w-16 h-1 bg-white/10 group-hover:w-32 transition-all duration-700"></div>
                <p className="mt-10 text-white/40 font-light leading-relaxed max-w-xl text-lg">
                   Recognized globally for our commitment to simplifying the complexities of international trade and supply chains.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pb-24 pt-8 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01]">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-32">
             <h2 className="text-secondary font-bold tracking-[0.6em] mb-6 uppercase text-[10px] animate-pulse">DNA</h2>
             <h1 className="text-5xl md:text-8xl font-heading font-black text-primary mb-8 tracking-tighter">CORE VALUES.</h1>
             <div className="w-24 h-1.5 bg-secondary/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {values.map((v, i) => {
               const isActive = activeIdx === i;
               return (
                 <div 
                   key={i} 
                   data-scroll-index={i}
                   ref={setRef(i)}
                   className={`p-12 rounded-sm border transition-all duration-700 group overflow-hidden relative ${
                     isActive 
                       ? 'bg-primary border-secondary shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] scale-[1.05] z-20' 
                       : 'bg-white border-gray-50 hover:border-secondary hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]'
                   }`}
                 >
                    <div className={`w-14 h-14 flex items-center justify-center mb-10 transition-all duration-500 rounded-sm ${
                      isActive ? 'bg-secondary text-primary' : 'bg-primary text-secondary group-hover:bg-secondary group-hover:text-primary'
                    }`}>
                      {v.icon}
                    </div>
                    <h3 className={`text-xl font-heading font-bold mb-6 uppercase tracking-widest transition-colors ${
                      isActive ? 'text-white' : 'text-primary'
                    }`}>
                      {v.title}
                    </h3>
                    <p className={`text-sm font-light leading-relaxed transition-colors ${
                      isActive ? 'text-white/60' : 'text-muted'
                    }`}>
                      {v.desc}
                    </p>
                 </div>
               );
             })}
          </div>
        </div>
      </section>

      {/* Operational Hubs Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-8 relative z-10">
           <div className="flex flex-col lg:flex-row gap-32 items-center">
              <div className="lg:w-1/2 group relative">
                 <img 
                   src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                   alt="Infrastructure" 
                   className="rounded-sm shadow-2xl relative z-10 transition-transform duration-1000 group-hover:scale-[1.02]"
                 />
              </div>
              <div className="lg:w-1/2">
                 <h2 className="text-secondary font-bold tracking-[0.4em] mb-8 uppercase text-xs">Infrastructure</h2>
                 <h1 className="text-5xl md:text-7xl font-heading font-black text-primary mb-12 leading-[0.9] tracking-tighter">BUILT <br /> FOR SCALE.</h1>
                 <p className="text-muted text-lg mb-16 leading-relaxed font-light max-w-xl">
                   Our infrastructure is designed for modern enterprise demands. From secure warehousing nodes to proprietary real-time monitoring systems, we provide the technical foundation for your growth.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-10 bg-surface border border-gray-100 hover:border-secondary/30 transition-colors group">
                       <h4 className="text-primary font-bold mb-4 flex items-center gap-4 text-sm">24/7 Support</h4>
                       <p className="text-muted text-xs font-light leading-relaxed">Continuous monitoring across all timezones with immediate failover protocols.</p>
                    </div>
                    <div className="p-10 bg-surface border border-gray-100 hover:border-secondary/30 transition-colors group">
                       <h4 className="text-primary font-bold mb-4 flex items-center gap-4 text-sm">Cloud Integration</h4>
                       <p className="text-muted text-xs font-light leading-relaxed">Digital supply chain visibility on all devices with real-time telemetry syncing.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
