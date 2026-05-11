import { motion } from 'framer-motion';

const Trust = () => {
  const industries = ["Automotive", "Pharmaceuticals", "Technology", "Retail", "Energy", "Manufacturing"];

  return (
    <section className="pt-24 pb-8 bg-surface border-y border-gray-100">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.5em] font-bold text-muted uppercase mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            className="h-0.5 bg-secondary/30 mb-12"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            className="flex flex-wrap justify-center gap-x-16 gap-y-12 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700"
          >
            {industries.map((item, index) => (
              <motion.span 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl font-heading font-bold text-primary tracking-tighter hover:text-secondary cursor-default transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
