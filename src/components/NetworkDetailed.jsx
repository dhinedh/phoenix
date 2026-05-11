import React, { useState } from 'react';

const regions = [
  { 
    name: "Europe", 
    hubs: "45+", 
    desc: "Seamless connectivity through the gateway ports of Rotterdam and Hamburg.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
    color: "rgba(212, 175, 55, 0.1)"
  },
  { 
    name: "Asia Pacific", 
    hubs: "60+", 
    desc: "Unrivaled reach across the world's most dynamic manufacturing and shipping hubs.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200",
    color: "rgba(0, 11, 30, 0.1)"
  },
  { 
    name: "Americas", 
    hubs: "30+", 
    desc: "Integrated supply chain solutions from Northern Canada to the Southern Cone.",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200",
    color: "rgba(212, 175, 55, 0.1)"
  },
  { 
    name: "Middle East", 
    hubs: "25+", 
    desc: "Strategic air-sea integration at the global crossroads of trade and energy.",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200",
    color: "rgba(0, 11, 30, 0.1)"
  }
];

const NetworkDetailed = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-8 mb-24">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl">
            <h2 className="text-secondary font-bold tracking-[0.5em] mb-6 uppercase text-xs">Infrastructure</h2>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary leading-none tracking-tighter">
              The Network <br />
              <span className="font-light italic text-muted">Aesthetic.</span>
            </h1>
          </div>
          <p className="text-muted text-xl max-w-sm font-light leading-relaxed border-l-2 border-secondary/30 pl-10">
            A fluid, interconnected ecosystem designed for the modern global economy.
          </p>
        </div>
      </div>

      {/* Interactive Blade System */}
      <div className="flex flex-col lg:flex-row h-[700px] w-full border-y border-gray-100">
        {regions.map((r, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`relative flex-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden cursor-pointer border-r border-gray-100 last:border-r-0 ${
              hoveredIdx === i ? 'lg:flex-[3]' : 'lg:flex-1'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={r.image} 
                alt={r.name} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  hoveredIdx === i ? 'scale-110 grayscale-0' : 'scale-100 grayscale opacity-40'
                }`}
              />
              {/* Color Overlay */}
              <div className="absolute inset-0 bg-primary opacity-60"></div>
              <div 
                className="absolute inset-0 transition-opacity duration-700" 
                style={{ backgroundColor: hoveredIdx === i ? 'transparent' : r.color }}
              ></div>
            </div>

            {/* Vertical Title (Visible when not hovered) */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none ${
              hoveredIdx === i ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'
            }`}>
              <h3 className="text-white text-3xl md:text-5xl font-heading font-bold tracking-tighter uppercase [writing-mode:vertical-lr] rotate-180">
                {r.name}
              </h3>
            </div>

            {/* Expanded Content (Visible when hovered) */}
            <div className={`absolute inset-0 p-12 flex flex-col justify-between transition-all duration-700 ${
              hoveredIdx === i ? 'opacity-100' : 'opacity-0'
            }`}>
              <div>
                <span className="text-secondary font-bold text-xs tracking-[0.4em] uppercase mb-4 block">0{i+1} — Global Hub</span>
                <h3 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-none">{r.name}</h3>
                <div className="w-20 h-1 bg-secondary mb-10"></div>
              </div>

              <div className="max-w-md">
                <p className="text-white/80 text-xl font-light leading-relaxed mb-12">
                  {r.desc}
                </p>
                <div className="flex gap-12">
                   <div>
                      <div className="text-secondary/60 text-[10px] tracking-widest font-bold uppercase mb-2">Connectivity</div>
                      <div className="text-4xl font-heading font-bold text-white">{r.hubs}</div>
                   </div>
                   <div className="h-12 w-px bg-white/10"></div>
                   <div className="flex items-center">
                      <button className="text-[10px] tracking-[0.3em] font-bold text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-primary transition-all uppercase">
                        Explore Mode
                      </button>
                   </div>
                </div>
              </div>
            </div>

            {/* Hover Indicator */}
            <div className={`absolute bottom-0 left-0 h-2 bg-secondary transition-all duration-700 ${
              hoveredIdx === i ? 'w-full' : 'w-0'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Global Stats Ribbon */}
      <div className="bg-primary py-20 relative z-20">
        <div className="container mx-auto px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "Transit Hubs", val: "150+" },
                { label: "Fleet Count", val: "2,400" },
                { label: "Team Experts", val: "12,000" },
                { label: "Global Reach", val: "Direct" }
              ].map((s, i) => (
                <div key={i} className="text-center border-l border-white/5 pl-8 first:border-0">
                  <div className="text-white/40 text-[9px] tracking-[0.4em] font-bold uppercase mb-4">{s.label}</div>
                  <div className="text-4xl font-heading font-bold text-secondary tracking-tighter">{s.val}</div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkDetailed;
