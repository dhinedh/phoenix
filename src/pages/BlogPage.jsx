import React from 'react';
import { useScrollActive } from '../hooks/useScrollActive';

const blogPosts = [
  {
    title: "The Future of Global Supply Chains in 2026",
    date: "May 10, 2026",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    excerpt: "Exploring the impact of AI and autonomous vehicles on international freight forwarding and warehouse management.",
    author: "James Wilson"
  },
  {
    title: "Navigating Customs: A Guide for Importers",
    date: "April 25, 2026",
    category: "Customs",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    excerpt: "How to simplify complex regulatory requirements and avoid common delays at international borders.",
    author: "Sarah Chen"
  },
  {
    title: "Sustainability in Shipping: Our Commitment",
    date: "April 12, 2026",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738",
    excerpt: "Reducing the carbon footprint of global trade through optimized routing and greener transport solutions.",
    author: "Robert Glass"
  },
  {
    title: "Strategic Hub Expansion in Southeast Asia",
    date: "March 28, 2026",
    category: "Network",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    excerpt: "Why we chose Singapore and Vietnam as our primary strategic nodes for 2026.",
    author: "Elena Petrova"
  }
];

const BlogPage = () => {
  const featured = blogPosts[0];
  const { activeIdx, setRef } = useScrollActive({ rootMargin: '-30% 0px -30% 0px' });

  return (
    <div className="bg-white min-h-screen">
      {/* Dark Portal Header */}
      <section className="relative h-[60vh] bg-primary flex items-center pt-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" fill="none" />
          </svg>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-secondary font-bold tracking-[0.6em] mb-10 uppercase text-[10px]">Insights Portal</h2>
            <h1 className="text-5xl md:text-9xl font-heading font-black text-white mb-12 tracking-tighter leading-none">
              KNOWLEDGE <br />
              <span className="font-light italic text-white/40">Architects.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Spotlight */}
      <section className="-mt-32 relative z-20 pb-32">
        <div className="container mx-auto px-8">
          <div className="bg-white shadow-2xl flex flex-col lg:flex-row overflow-hidden rounded-sm group">
            <div className="lg:w-2/3 h-[500px] overflow-hidden">
              <img 
                src={`${featured.image}?auto=format&fit=crop&q=80&w=1600`} 
                alt={featured.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-1/3 p-12 lg:p-20 flex flex-col justify-center bg-surface relative">
               <span className="text-secondary font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">{featured.category}</span>
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 leading-tight">{featured.title}</h2>
               <p className="text-muted font-light leading-relaxed mb-10">{featured.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Content Grid */}
      <section className="pb-40">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Articles */}
            <div className="lg:w-2/3 space-y-24">
               {blogPosts.slice(1).map((post, i) => {
                 const isActive = activeIdx === i;
                 return (
                   <div 
                     key={i} 
                     data-scroll-index={i}
                     ref={setRef(i)}
                     className={`flex flex-col md:flex-row gap-12 group transition-all duration-700 ${
                       isActive ? 'bg-surface p-8 rounded-sm shadow-xl scale-[1.02] md:scale-100 z-10' : ''
                     }`}
                   >
                      <div className="md:w-1/2 aspect-square overflow-hidden rounded-sm relative">
                         <img 
                           src={`${post.image}?auto=format&fit=crop&q=80&w=800`} 
                           alt={post.title} 
                           className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                         />
                         <div className={`absolute inset-0 bg-primary/20 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                      </div>
                      <div className="md:w-1/2 flex flex-col justify-center">
                         <div className="flex items-center gap-4 mb-4">
                            <span className="text-secondary font-bold tracking-[0.3em] text-[10px] uppercase">{post.category}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="text-muted text-[10px] uppercase tracking-widest">{post.date}</span>
                         </div>
                         <h3 className={`text-3xl font-heading font-bold mb-6 transition-colors leading-tight ${
                           isActive ? 'text-secondary' : 'text-primary group-hover:text-secondary'
                         }`}>
                           {post.title}
                         </h3>
                         <p className="text-muted font-light leading-relaxed mb-8 line-clamp-3">
                           {post.excerpt}
                         </p>
                         <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">
                                  {post.author[0]}
                               </div>
                               <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{post.author}</span>
                            </div>
                            <div className={`flex items-center gap-4 text-[10px] tracking-widest font-bold text-primary border-b-2 pb-2 transition-all ${
                              isActive ? 'border-secondary' : 'border-secondary/20 group-hover:border-secondary'
                            }`}>
                               READ ARTICLE
                            </div>
                         </div>
                      </div>
                   </div>
                 );
               })}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
               <div className="sticky top-32 space-y-16">
                  {/* Search */}
                  <div>
                    <h4 className="text-xs tracking-[0.4em] font-bold text-primary uppercase mb-8 pb-4 border-b border-gray-100">Search Intelligence</h4>
                    <div className="relative">
                       <input 
                         type="text" 
                         placeholder="Keywords..." 
                         className="w-full bg-surface border border-gray-100 py-4 px-6 outline-none focus:border-secondary transition-all rounded-sm text-sm"
                       />
                       <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                       </svg>
                    </div>
                  </div>

                  {/* Trending Topics */}
                  <div>
                    <h4 className="text-xs tracking-[0.4em] font-bold text-primary uppercase mb-8 pb-4 border-b border-gray-100">Trending Topics</h4>
                    <div className="flex flex-wrap gap-3">
                       {["Trade", "Customs", "Automation", "Security", "Future", "ESG"].map((tag, i) => (
                         <span key={i} className="px-4 py-2 bg-surface text-[10px] font-bold tracking-widest text-muted hover:bg-primary hover:text-white transition-all cursor-pointer uppercase rounded-sm border border-gray-50">
                            #{tag}
                         </span>
                       ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="p-8 bg-primary text-white rounded-sm relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                     <h4 className="text-lg font-heading font-bold mb-4 relative z-10">Briefing Sync</h4>
                     <p className="text-white/40 text-xs font-light leading-relaxed mb-8 relative z-10">Get the latest logistical intelligence delivered directly to your node.</p>
                     <div className="space-y-4 relative z-10">
                        <input 
                          type="email" 
                          placeholder="Node Email" 
                          className="w-full bg-white/5 border border-white/10 py-3 px-4 outline-none focus:border-secondary transition-all rounded-sm text-xs"
                        />
                        <button className="w-full brand-gradient py-3 text-primary font-black text-[10px] tracking-[0.3em] uppercase rounded-sm">
                           SUBSCRIBE
                        </button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
