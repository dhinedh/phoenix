import React, { useState } from 'react';
import { useScrollActive } from '../hooks/useScrollActive';

const categories = ["All", "Fleet", "Warehouse", "Operations", "Team"];

const galleryItems = [
  {
    title: "Air Excellence",
    category: "Fleet",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1",
    size: "large"
  },
  {
    title: "Strategic Storage",
    category: "Warehouse",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614",
    size: "small"
  },
  {
    title: "Global Transit",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738",
    size: "medium"
  },
  {
    title: "Precision Handling",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    size: "small"
  },
  {
    title: "Customs Hub",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    size: "large"
  },
  {
    title: "Last-Mile Fleet",
    category: "Fleet",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
    size: "medium"
  },
  {
    title: "Logistics Hub",
    category: "Warehouse",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    size: "small"
  },
  {
    title: "Trade Logistics",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    size: "medium"
  },
  {
    title: "Supply Chain AI",
    category: "Team",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    size: "large"
  }
];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const { activeIdx, setRef } = useScrollActive({ rootMargin: '-20% 0px -20% 0px' });

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000" 
            alt="Gallery Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary to-white"></div>
        </div>
        <div className="relative z-10 text-center px-8">
          <h2 className="text-secondary font-bold tracking-[0.5em] mb-6 uppercase text-xs">Visual Showcase</h2>
          <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter">
            OPERATIONS <span className="font-light italic text-white/40">Gallery.</span>
          </h1>
          <div className="w-24 h-1 gold-gradient mx-auto"></div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 border-b border-gray-100 sticky top-20 bg-white/80 backdrop-blur-md z-40">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setFilter(cat)}
                className={`text-[11px] tracking-[0.4em] font-bold transition-all uppercase pb-2 border-b-2 ${
                  filter === cat ? 'text-secondary border-secondary' : 'text-muted border-transparent hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pt-12 pb-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
             {filteredItems.map((item, i) => {
               const isActive = activeIdx === i;
               return (
                 <div 
                   key={i} 
                   data-scroll-index={i}
                   ref={setRef(i)}
                   className={`relative overflow-hidden group cursor-pointer shadow-2xl rounded-sm transition-all duration-700 ${
                     item.size === 'large' ? 'md:row-span-2' : ''
                   } ${isActive ? 'scale-[1.02] z-20' : ''}`}
                 >
                    <img 
                      src={`${item.image}?auto=format&fit=crop&q=80&w=1200`} 
                      alt={item.title} 
                      className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                    />
                    <div className={`absolute inset-0 bg-primary/80 transition-all duration-500 flex flex-col justify-end p-12 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0'
                    }`}>
                      <span className="text-secondary font-bold tracking-[0.3em] text-[10px] uppercase mb-4">{item.category}</span>
                      <h3 className="text-white font-heading font-bold text-2xl mb-6">{item.title}</h3>
                      <div className={`h-0.5 bg-secondary transition-all duration-700 ${isActive ? 'w-full' : 'w-12 group-hover:w-full'}`}></div>
                    </div>
                 </div>
               );
             })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
