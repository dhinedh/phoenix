import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollActive } from '../hooks/useScrollActive';

const services = [
  {
    title: "Air Freight",
    id: "01",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200",
    description: "Time-critical delivery through our global network of premier air carriers. We specialize in express, consolidated, and chartered air solutions.",
    size: "large" // 2x2
  },
  {
    title: "Sea Freight",
    id: "02",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800",
    description: "Reliable and cost-effective ocean transport for international commerce at scale.",
    size: "medium" // 1x1
  },
  {
    title: "Customs Clearance",
    id: "03",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    description: "Expert navigation of global regulatory environments for seamless border transit.",
    size: "small" // 1x1
  },
  {
    title: "Cargo Handling",
    id: "04",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "Professional management and protection of your cargo throughout the journey.",
    size: "small" // 1x1
  },
  {
    title: "Warehousing",
    id: "05",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&q=80&w=1200",
    description: "Secure storage and advanced inventory management in strategic global hubs. Featuring temperature control and high-security zones.",
    size: "wide" // 2x1
  },
  {
    title: "Transportation",
    id: "06",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
    description: "Integrated road and rail solutions for reliable first and last-mile delivery.",
    size: "medium" // 1x1
  },
  {
    title: "Supply Chain",
    id: "07",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    description: "Optimization of your entire value chain through advanced logistics engineering. We design systems that scale with your growth.",
    size: "extra-wide" // 4x1
  }
];

const DetailedCapabilities = () => {
  const { activeIdx, setRef } = useScrollActive();
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-secondary font-bold tracking-[0.4em] mb-6 uppercase text-xs">Full Spectrum</h2>
            <h1 className="text-4xl md:text-7xl font-heading font-black text-primary leading-none tracking-tighter">
              OUR DETAILED <br />
              <span className="font-light italic text-muted">Capabilities.</span>
            </h1>
          </div>
          <p className="text-muted text-lg max-w-sm font-light leading-relaxed mb-2 border-l border-secondary/30 pl-8">
            A granular look at the precision-engineered solutions that drive global commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {services.map((service, index) => {
            const gridClasses = {
              'large': 'md:col-span-2 md:row-span-2',
              'medium': 'md:col-span-1 md:row-span-1',
              'small': 'md:col-span-1 md:row-span-1',
              'wide': 'md:col-span-2 md:row-span-1',
              'extra-wide': 'md:col-span-4 md:row-span-1'
            }[service.size] || 'md:col-span-1';

            const isActive = activeIdx === index;

            return (
              <div 
                key={index} 
                data-scroll-index={index}
                ref={setRef(index)}
                onClick={() => navigate(`/services/${service.id}`)}
                className={`${gridClasses} group relative overflow-hidden rounded-sm bg-primary cursor-pointer border border-primary/5 shadow-elegant transition-all duration-700 ${isActive ? 'md:scale-100 scale-[1.03] ring-2 ring-secondary/20 z-20' : ''}`}
              >
                {/* Background Image */}
                <img 
                   src={service.image} 
                   alt={service.title} 
                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${isActive ? 'scale-105 opacity-100' : 'opacity-60 group-hover:scale-105 group-hover:opacity-100'}`}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-100'}`}></div>
                <div className={`absolute inset-0 bg-primary/40 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                  <div className="overflow-hidden mb-2">
                    <span className={`text-[9px] tracking-[0.4em] font-bold text-secondary block transition-transform duration-500 ${isActive ? 'translate-y-0' : 'transform -translate-y-full group-hover:translate-y-0'}`}>
                      {service.id} — CAPABILITY
                    </span>
                  </div>
                  
                  <h3 className={`font-heading font-bold text-white mb-4 leading-tight transition-transform duration-500 ${isActive ? '-translate-y-2' : 'group-hover:-translate-y-2'} ${
                    service.size === 'large' ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <div className={`h-px bg-secondary/50 mb-6 transition-all duration-700 origin-left ${isActive ? 'w-full' : 'w-12 group-hover:w-full'}`}></div>
                  
                  <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isActive ? 'max-h-32 opacity-100' : 'max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100'}`}>
                    <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className={`flex items-center gap-4 text-[9px] tracking-[0.3em] font-bold text-white transition-opacity ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                    VIEW DETAILS
                    <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute top-0 right-0 p-6 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                   <div className="w-6 h-6 border-r border-t border-secondary/30"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedCapabilities;
