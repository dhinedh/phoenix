import React, { useState, useEffect, useRef } from 'react';

const sectors = [
  {
    title: "Project Cargo",
    id: "01",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
    desc: "Management of over-dimensional and heavy-lift shipments for industrial infrastructure, energy projects, and large-scale manufacturing.",
    features: ["Heavy Lift Ops", "Route Surveys", "On-site Supervision"]
  },
  {
    title: "Cold Chain",
    id: "02",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1200",
    desc: "Precision temperature-controlled logistics for pharmaceuticals, biotech, and perishable food products across global networks.",
    features: ["GDP Compliance", "Real-time Temp Tracking", "Cryogenic Solutions"]
  },
  {
    title: "Hazardous Materials",
    id: "03",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    desc: "DGR certified handling and transport of dangerous goods following strict IMO/IATA regulations with specialized equipment.",
    features: ["Certified Handling", "Custom Packing", "Incident Management"]
  },
  {
    title: "Automotive & Retail",
    id: "04",
    image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=1200",
    desc: "Just-in-time supply chain solutions for the automotive industry and high-velocity retail distribution networks.",
    features: ["JIT Delivery", "Inventory Hubs", "Reverse Logistics"]
  }
];

import { motion } from 'framer-motion';

const SectorExpertiseDetailed = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Scroll-triggered activation for mobile devices
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Trigger when item is in the center 60% of viewport
      threshold: 0.6
    };

    const handleIntersect = (entries) => {
      if (window.innerWidth < 1024) { // Only run on mobile/tablet
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setActiveIdx(index);
          }
        });
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="max-w-3xl"
          >
            <h2 className="text-secondary font-bold tracking-[0.4em] mb-6 uppercase text-xs">Industry Focus</h2>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-primary leading-none tracking-tighter">
              SECTOR <br />
              <span className="font-light italic text-muted">Specialization.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-muted text-xl max-w-sm font-light leading-relaxed border-l-2 border-secondary/30 pl-10 pt-4"
          >
            We provide specialized engineering for industries where precision isn't optional—it's the core requirement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* List Side */}
          <div className="lg:col-span-5 space-y-4">
            {sectors.map((s, i) => (
              <motion.div 
                key={i}
                data-index={i}
                ref={el => sectionRefs.current[i] = el}
                onMouseEnter={() => window.innerWidth >= 1024 && setActiveIdx(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group cursor-pointer p-8 rounded-sm transition-all duration-200 border-l-4 ${
                  activeIdx === i 
                    ? 'bg-primary border-secondary shadow-2xl md:translate-x-4 scale-[1.02] md:scale-100' 
                    : 'bg-surface border-transparent hover:border-secondary/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-[10px] tracking-[0.3em] font-bold mb-2 block ${
                      activeIdx === i ? 'text-accent' : 'text-muted'
                    }`}>
                      {s.id} — INDUSTRY
                    </span>
                    <h3 className={`text-2xl font-heading font-bold transition-colors ${
                      activeIdx === i ? 'text-white' : 'text-primary'
                    }`}>
                      {s.title}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                    activeIdx === i ? 'bg-accent text-white rotate-0 shadow-[0_0_15px_rgba(237,28,36,0.4)]' : 'bg-primary/5 text-primary -rotate-45'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Mobile-only descriptive snippet when active */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${activeIdx === i ? 'max-h-40 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <p className="text-white/60 text-sm leading-relaxed mb-4">
                     {s.desc}
                   </p>
                   <div className="flex flex-wrap gap-2">
                      {s.features.slice(0, 2).map((f, fi) => (
                        <span key={fi} className={`text-[8px] tracking-widest font-bold border px-3 py-1 uppercase ${fi % 2 === 0 ? 'text-secondary border-secondary/30 bg-secondary/5' : 'text-accent border-accent/30 bg-accent/5'}`}>
                          {f}
                        </span>
                      ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Preview Side */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[600px] overflow-hidden rounded-sm group shadow-2xl">
            {sectors.map((s, i) => (
              <div 
                key={i}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  activeIdx === i ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-8 pointer-events-none'
                }`}
              >
                {/* Background Image */}
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Content Overlay (Desktop only, as mobile info is now inside the list cards) */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end hidden lg:flex">
                  <div className="glass p-10 border-l-4 border-secondary translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-lg font-light leading-relaxed mb-8">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {s.features.map((f, fi) => (
                        <span key={fi} className="text-[10px] tracking-widest font-bold text-accent border border-accent/30 px-4 py-2 uppercase bg-accent/5">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 p-8">
               <div className="w-16 h-16 border-r-2 border-t-2 border-secondary/20 group-hover:border-secondary/50 transition-colors"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
               <div className="w-16 h-16 border-l-2 border-b-2 border-secondary/20 group-hover:border-secondary/50 transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorExpertiseDetailed;
