import React from 'react';
import { useScrollActive } from '../hooks/useScrollActive';
import NetworkDetailed from '../components/NetworkDetailed';

const hubDetails = [
  { city: "Singapore", region: "APAC", type: "Transshipment Hub", capacity: "High" },
  { city: "Rotterdam", region: "Europe", type: "Gateway Port", capacity: "Critical" },
  { city: "Dubai", region: "Middle East", type: "Air-Sea Hub", capacity: "High" },
  { city: "Shanghai", region: "APAC", type: "Manufacturing Hub", capacity: "Extreme" },
  { city: "New York", region: "Americas", type: "Atlantic Gateway", capacity: "High" },
  { city: "Mumbai", region: "South Asia", type: "Tech-Logistics Hub", capacity: "Expanding" },
];

const NetworkPage = () => {
  const { activeIdx, setRef } = useScrollActive({ rootMargin: '-25% 0px -25% 0px' });

  return (
    <div className="bg-primary min-h-screen">
      {/* Network Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Data Visualization */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4AF37_1px,transparent_1px)] opacity-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
            alt="Global Network" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10 pt-20">
          <div className="max-w-4xl">
            <h2 className="text-secondary font-bold tracking-[0.5em] mb-8 uppercase text-xs">Strategic Infrastructure</h2>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-10 leading-none tracking-tighter">
              THE GLOBAL <br />
              <span className="font-light italic text-white/40">Topology.</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              We operate an integrated logistical architecture designed for the hyper-connected era of global commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Global Connectivity Section */}
      <NetworkDetailed />

      {/* Strategic Hubs Section */}
      <section className="pb-32 pt-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-3xl">
              <h2 className="text-secondary font-bold tracking-[0.4em] mb-6 uppercase text-xs">Infrastructure</h2>
              <h1 className="text-4xl md:text-7xl font-heading font-black text-primary leading-tight tracking-tighter">
                CRITICAL NODE <br />
                <span className="font-light italic text-muted">Management.</span>
              </h1>
            </div>
            <p className="text-muted text-lg max-w-sm font-light leading-relaxed border-l-2 border-secondary/30 pl-10">
              Our presence in key transshipment points ensures zero-latency transitions between different modes of transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hubDetails.map((hub, i) => {
              const isActive = activeIdx === i;
              return (
                <div 
                  key={i} 
                  data-scroll-index={i}
                  ref={setRef(i)}
                  className={`group relative p-10 border transition-all duration-700 overflow-hidden shadow-elegant ${
                    isActive ? 'bg-primary border-primary scale-[1.03] z-20' : 'bg-surface border-gray-100 hover:bg-primary'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <span className={`text-4xl font-heading font-bold transition-colors ${
                        isActive ? 'text-white/10' : 'text-primary/10 group-hover:text-white/10'
                      }`}>0{i+1}</span>
                      <div className={`w-10 h-10 border flex items-center justify-center transition-all ${
                        isActive ? 'bg-secondary text-primary border-secondary' : 'border-secondary/30 text-secondary group-hover:bg-secondary group-hover:text-primary'
                      }`}>
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                         </svg>
                      </div>
                    </div>
                    <h3 className={`text-3xl font-heading font-bold mb-4 transition-colors uppercase tracking-tight ${
                      isActive ? 'text-white' : 'text-primary group-hover:text-white'
                    }`}>{hub.city}</h3>
                    <div className="flex gap-4 mb-8">
                      <span className="text-[10px] tracking-widest font-bold text-secondary uppercase bg-secondary/5 px-3 py-1 border border-secondary/20">{hub.region}</span>
                      <span className={`text-[10px] tracking-widest font-bold uppercase py-1 transition-colors ${
                        isActive ? 'text-white/40' : 'text-muted group-hover:text-white/40'
                      }`}>{hub.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] tracking-widest uppercase font-bold transition-colors ${
                        isActive ? 'text-white/20' : 'text-muted/60 group-hover:text-white/20'
                      }`}>Capacity Level</span>
                      <span className={`font-bold text-xs uppercase tracking-widest transition-colors ${
                        isActive ? 'text-secondary' : 'text-primary group-hover:text-secondary'
                      }`}>{hub.capacity}</span>
                    </div>
                  </div>
                  <div className={`absolute -bottom-10 -right-10 text-9xl font-black transition-all select-none ${
                    isActive ? 'text-white/5' : 'text-primary/5 group-hover:text-white/5'
                  }`}>
                     {hub.city[0]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-32 bg-primary">
         <div className="container mx-auto px-8 text-center">
            <h2 className="text-secondary font-bold tracking-[0.5em] mb-12 uppercase text-[10px]">Global Reach</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-light text-white mb-16">Connect to our <span className="font-bold italic text-secondary">Global Pulse.</span></h1>
            <button className="gold-gradient text-primary px-16 py-6 rounded-sm font-bold text-xs tracking-[0.4em] uppercase transition-all hover:brightness-110 shadow-2xl">
              Partner with us
            </button>
         </div>
      </section>
    </div>
  );
};

export default NetworkPage;
