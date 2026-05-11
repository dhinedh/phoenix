import { motion } from 'framer-motion';

const Trust = () => {
  const industries = ["Automotive", "Pharmaceuticals", "Technology", "Retail", "Energy", "Manufacturing"];

  return (
    <section className="pt-24 pb-16 bg-surface border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.5em] font-bold text-muted uppercase mb-4"
          >
            Trusted by Industrial Leaders
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            className="h-0.5 bg-secondary/30"
          ></motion.div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center py-4"
        >
          {/* Double the array for seamless loop */}
          {[...industries, ...industries].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-secondary/20 group-hover:bg-secondary transition-colors"></div>
              <span className="text-xl md:text-3xl font-heading font-bold text-primary/30 tracking-tighter hover:text-secondary cursor-default transition-all duration-500 uppercase">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for depth */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-surface to-transparent z-10"></div>
      </div>
    </section>
  );
};


export default Trust;
