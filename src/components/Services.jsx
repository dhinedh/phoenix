import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollActive } from '../hooks/useScrollActive';

const services = [
  {
    title: "Air Freight",
    id: "01",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800",
    description: "Time-critical delivery through our global network of premier air carriers."
  },
  {
    title: "Sea Freight",
    id: "02",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800",
    description: "Reliable and cost-effective ocean transport for international commerce at scale."
  },
  {
    title: "Customs Clearance",
    id: "03",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    description: "Expert navigation of global regulatory environments for seamless border transit."
  },
  {
    title: "Cargo Handling",
    id: "04",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "Professional management and protection of your cargo throughout the journey."
  },
  {
    title: "Warehousing",
    id: "05",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&q=80&w=800",
    description: "Secure storage and advanced inventory management in strategic global hubs."
  },
  {
    title: "Transportation",
    id: "06",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
    description: "Integrated road and rail solutions for reliable first and last-mile delivery."
  },
  {
    title: "Import & Export",
    id: "07",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800",
    description: "Strategic consulting and logistics management for global trade operations."
  },
  {
    title: "Door-to-Door",
    id: "08",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800",
    description: "End-to-end supply chain integration, from point of origin to final destination."
  },
  {
    title: "Supply Chain",
    id: "09",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    description: "Optimization of your entire value chain through advanced logistics engineering."
  }
];

import { motion } from 'framer-motion';

const Services = () => {
  const { activeIdx, setRef } = useScrollActive({ rootMargin: '-20% 0px -20% 0px' });
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
    }
  };

  return (
    <section id="services" className="py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <div className="max-w-3xl">
            <h2 className="text-secondary font-bold tracking-[0.4em] mb-6 uppercase text-xs">Capabilities</h2>
            <h1 className="text-4xl md:text-7xl font-heading font-black text-primary leading-none tracking-tighter">
              Sophisticated <br />
              <span className="font-light italic text-muted">Logistics Solutions.</span>
            </h1>
          </div>
          <p className="text-muted text-lg max-w-sm font-light leading-relaxed mb-2 border-l border-secondary/30 pl-8">
            Providing precision-engineered movement for the world's most demanding supply chains.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const isActive = activeIdx === index;
            
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                data-scroll-index={index}
                ref={setRef(index)}
                onClick={() => navigate(`/services/${service.id}`)}
                className={`group relative h-[600px] overflow-hidden rounded-sm bg-primary cursor-pointer border border-white/5 transition-all duration-200 ${
                  isActive ? 'md:scale-100 scale-[1.03] ring-2 ring-secondary/20 z-20' : ''
                }`}
              >
                {/* Background Image with Depth Overlay */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                    isActive ? 'scale-105 opacity-30' : 'opacity-50 group-hover:scale-105 group-hover:opacity-30'
                  }`}
                />
                
                {/* Complex Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
                
                {/* Card Content */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end z-10">
                  <div className="overflow-hidden mb-4">
                    <span className={`text-[10px] tracking-[0.4em] font-bold text-secondary block transition-transform duration-300 ${
                      isActive ? 'translate-y-0' : 'transform -translate-y-full group-hover:translate-y-0'
                    }`}>
                      {service.id} — GLOBAL LOGISTICS
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                    {service.title}
                  </h3>
                  
                  <div className={`h-px bg-secondary/50 mb-8 transition-all duration-300 origin-left ${
                    isActive ? 'w-full' : 'w-12 group-hover:w-full'
                  }`}></div>
                  
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isActive ? 'max-h-32 opacity-100' : 'max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100'
                  }`}>
                    <p className="text-white/60 font-light text-base leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6 group/btn">
                    <div className={`flex items-center gap-4 text-[10px] tracking-[0.3em] font-bold text-white transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
                    }`}>
                      EXPLORE SERVICE
                      <div className="relative w-8 h-px bg-white/20 group-hover:bg-secondary transition-colors overflow-hidden">
                        <div className={`absolute inset-0 bg-secondary transition-transform duration-300 ${
                          isActive ? 'translate-x-0' : 'transform -translate-x-full group-hover/btn:translate-x-0'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 p-8 transition-opacity ${
                  isActive ? 'opacity-100' : 'opacity-20 group-hover:opacity-100'
                }`}>
                  <div className="w-8 h-8 border-r border-t border-secondary/50"></div>
                </div>
                
                {/* Interaction Ring */}
                <div className={`absolute inset-0 border transition-all duration-300 pointer-events-none ${
                  isActive ? 'border-secondary/20 scale-100' : 'border-secondary/0 scale-105 group-hover:border-secondary/20 group-hover:scale-100'
                }`}></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
