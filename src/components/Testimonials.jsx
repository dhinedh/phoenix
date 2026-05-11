import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Jonathan Chen",
    role: "Supply Chain Director, TechGlobal",
    text: "Phoennix Global has transformed our international distribution. Their attention to detail and proactive communication is unparalleled."
  },
  {
    name: "Sarah Miller",
    role: "COO, EuroRetail Group",
    text: "Reliability is the core of our business, and Phoennix delivers every single time. Their customs expertise saved us weeks of potential delays."
  },
  {
    name: "Ahmed Al-Farsi",
    role: "Logistics Manager, GulfEnergy",
    text: "The level of precision in their cargo handling and real-time tracking gives us total peace of mind for our high-value energy equipment."
  },
  {
    name: "Michael Berg",
    role: "Logistics Specialist, Global Dist.",
    text: "Their ability to handle complex air freight shipments with minimal notice has saved our production lines multiple times."
  },
  {
    name: "Linda Rossi",
    role: "Head of Export, FashionHub Italy",
    text: "Phoennix understands the urgency of high-fashion logistics. A reliable partner we can't do without in our global expansion."
  },
  {
    name: "David Thompson",
    role: "Procurement Head, BuildCorp",
    text: "The heavy-lift capabilities and specialized cargo handling are top-notch. Truly a premium experience in the global shipping space."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Calculate visible indices (infinite loop)
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % testimonials.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="pb-32 pt-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-24 reveal reveal-up">
          <h2 className="text-secondary font-bold tracking-[0.6em] mb-8 uppercase text-[10px] animate-pulse">Global Trust</h2>
          <h1 className="text-4xl md:text-7xl font-heading font-black text-primary mb-8 tracking-tighter">
            VOICES OF <span className="font-light italic text-muted">Excellence.</span>
          </h1>
          <div className="w-24 h-1.5 gold-gradient mx-auto"></div>
        </div>

        <div className="relative">
          {/* Main Carousel Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-in-out">
            {visibleIndices.map((idx, i) => {
              const testimonial = testimonials[idx];
              return (
                <div 
                  key={`${idx}-${i}`}
                  className={`group bg-surface p-10 md:p-12 rounded-sm border border-gray-50 transition-all duration-700 shadow-sm hover:shadow-xl hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="text-secondary mb-8">
                    <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.5693 13 5.017 13H3.017V21H5.017Z" />
                    </svg>
                  </div>
                  <p className="text-primary/70 font-light leading-relaxed mb-10 italic text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto border-t border-gray-100 pt-8">
                    <h4 className="text-lg font-heading font-bold text-primary mb-1 tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-[9px] tracking-[0.2em] text-secondary font-bold uppercase">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-4 mt-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  activeIndex === i 
                    ? 'w-12 bg-secondary shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                    : 'w-3 bg-primary/10 hover:bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
