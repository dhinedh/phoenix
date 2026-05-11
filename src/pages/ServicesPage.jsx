import DetailedCapabilities from '../components/DetailedCapabilities';
import SectorExpertiseDetailed from '../components/SectorExpertiseDetailed';
import TechInnovation from '../components/TechInnovation';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Immersive Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-primary">
        {/* Background Elements */}
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary to-primary"></div>
        </motion.div>

        <div className="container mx-auto px-8 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, staggerChildren: 0.2 }}
            className="max-w-4xl"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-secondary font-bold tracking-[0.5em] mb-8 uppercase text-xs"
            >
              Global Capabilities
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-heading font-bold text-white mb-10 leading-tight tracking-tight"
            >
              Precision <br />
              <span className="font-light italic text-reveal">Logistics at Scale.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
            >
              From complex global supply chains to time-critical last-mile deliveries, we engineer movement with uncompromising precision.
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 right-0 w-1/3 h-1/2 pointer-events-none"
        >
          <div className="w-full h-full border-l border-t border-secondary/30"></div>
        </motion.div>
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
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2B59C3_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            {[
              { label: "Global Locations", value: "150+" },
              { label: "Carrier Partners", value: "200+" },
              { label: "Annual Shipments", value: "1.2M" },
              { label: "Transit Routes", value: "5000+" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left border-l border-white/10 pl-8 group"
              >
                <div className="text-4xl md:text-5xl font-heading font-black text-secondary mb-2 group-hover:scale-110 transition-transform origin-left tracking-tighter">{stat.value}</div>
                <div className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-bold group-hover:text-white/60 transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
