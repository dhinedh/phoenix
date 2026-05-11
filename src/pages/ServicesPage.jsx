import React from 'react';
import DetailedCapabilities from '../components/DetailedCapabilities';
import SectorExpertiseDetailed from '../components/SectorExpertiseDetailed';
import TechInnovation from '../components/TechInnovation';

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Immersive Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-primary">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 scale-110 animate-slow-zoom"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary to-primary"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10 pt-20">
          <div className="max-w-4xl">
            <h2 className="text-secondary font-bold tracking-[0.5em] mb-8 uppercase text-xs animate-fade-in">Global Capabilities</h2>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-10 leading-tight tracking-tight animate-fade-in delay-1">
              Precision <br />
              <span className="font-light italic text-reveal">Logistics at Scale.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed animate-fade-in delay-2">
              From complex global supply chains to time-critical last-mile deliveries, we engineer movement with uncompromising precision.
            </p>
          </div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-10 pointer-events-none">
          <div className="w-full h-full border-l border-t border-secondary/30"></div>
        </div>
      </section>

      {/* Core Capabilities Section (Bento Style) */}
      <div className="relative -mt-20 z-20">
        <DetailedCapabilities />
      </div>

      {/* Technology Section */}
      <TechInnovation />

      {/* Specialized Solutions Section (Sector Expertise) - Enhanced Background */}
      <div className="bg-[#fafafa] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <SectorExpertiseDetailed />
      </div>

      {/* Global Reach Stats - Atmospheric High-Tech */}
      <section className="py-32 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4AF37_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { label: "Global Locations", value: "150+" },
              { label: "Carrier Partners", value: "200+" },
              { label: "Annual Shipments", value: "1.2M" },
              { label: "Transit Routes", value: "5000+" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left border-l border-white/10 pl-8 group">
                <div className="text-4xl md:text-5xl font-heading font-black text-secondary mb-2 group-hover:scale-110 transition-transform origin-left tracking-tighter">{stat.value}</div>
                <div className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-bold group-hover:text-white/60 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
