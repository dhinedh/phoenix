import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Immersive Contact Hero */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex items-center overflow-hidden bg-primary">
        {/* Futuristic Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4AF37_1px,transparent_1px)] bg-[length:40px_40px] md:bg-[length:60px_60px] opacity-[0.07]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 pt-24 md:pt-32">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6 md:mb-10">
               <span className="px-4 md:px-6 py-2 border border-secondary/30 text-secondary text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] font-bold uppercase rounded-full bg-secondary/5 animate-fade-in">
                  Communication Portal
               </span>
            </div>

            <h1 className="text-4xl md:text-[10vw] font-heading font-black leading-tight md:leading-none tracking-tighter mb-6 md:mb-10 animate-fade-in delay-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">GLOBAL</span> <br className="hidden md:block" />
              <span className="text-white relative inline-block">
                GATEWAY
                <div className="absolute -bottom-1 md:-bottom-3 left-0 w-full h-0.5 md:h-1 bg-secondary shadow-[0_0_20px_rgba(212,175,55,0.8)]"></div>
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-24 max-w-4xl mx-auto animate-fade-in delay-2">
               {[
                 { label: "Connectivity", val: "Unlimited", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                 { label: "Integration", val: "Seamless", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
                 { label: "Intelligence", val: "Data-Driven", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" }
               ].map((item, i) => (
                 <div key={i} className="flex md:flex-col items-center gap-6 md:gap-0 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-secondary md:mb-6 group-hover:bg-secondary group-hover:text-primary transition-all duration-500 rounded-sm shrink-0">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                       </svg>
                    </div>
                    <div className="text-left md:text-center">
                       <span className="text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] font-bold text-white/40 uppercase mb-1 md:mb-2 block">{item.label}</span>
                       <span className="text-lg md:text-xl font-heading font-bold text-white tracking-widest">{item.val}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Decorative background text */}
        <div className="absolute -bottom-4 md:-bottom-8 left-1/2 -translate-x-1/2 text-[22vw] md:text-[18vw] font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none tracking-tighter">
           ENQUIRY
        </div>
      </section>

      {/* Contact & Map Split Section - Enhanced Background */}
      <section className="relative z-20 pb-16 md:pb-32 bg-[#f8f9fa]">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] -mt-12 md:-mt-20 overflow-hidden rounded-sm">
            
            {/* Left: Contact Form - With Glassmorphic Touches */}
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="mb-8 md:mb-12 text-center md:text-left relative z-10">
                <h2 className="text-secondary font-bold tracking-[0.4em] mb-4 uppercase text-[9px]">Direct Channel</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-black text-primary mb-4 tracking-tighter">Strategic <span className="text-muted font-light italic">Inquiry.</span></h3>
                <div className="h-1 w-16 bg-secondary mx-auto md:mx-0"></div>
              </div>

              <form className="space-y-8 md:space-y-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="group">
                    <label className="text-[10px] tracking-[0.3em] font-bold text-muted group-focus-within:text-secondary uppercase block mb-2 md:mb-4 transition-colors">Client Identity</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 focus:border-secondary outline-none transition-all text-primary font-medium text-sm" 
                      placeholder="Full Name" 
                    />
                  </div>
                  <div className="group">
                    <label className="text-[10px] tracking-[0.3em] font-bold text-muted group-focus-within:text-secondary uppercase block mb-2 md:mb-4 transition-colors">Contact Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 focus:border-secondary outline-none transition-all text-primary font-medium text-sm" 
                      placeholder="email@example.com" 
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="text-[10px] tracking-[0.3em] font-bold text-muted group-focus-within:text-secondary uppercase block mb-2 md:mb-4 transition-colors">Requirement Type</label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 focus:border-secondary outline-none transition-all text-primary font-medium appearance-none cursor-pointer text-sm">
                    <option>International Freight</option>
                    <option>Customs Solutions</option>
                    <option>Project Logistics</option>
                    <option>Warehousing</option>
                  </select>
                </div>

                <div className="group">
                  <label className="text-[10px] tracking-[0.3em] font-bold text-muted group-focus-within:text-secondary uppercase block mb-2 md:mb-4 transition-colors">Detailed Message</label>
                  <textarea 
                    rows="3" 
                    className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 focus:border-secondary outline-none transition-all text-primary font-medium resize-none text-sm" 
                    placeholder="Describe your logistical challenge..."
                  ></textarea>
                </div>

                <button className="gold-gradient text-primary px-12 md:px-16 py-5 md:py-6 rounded-sm font-bold text-[10px] tracking-[0.4em] uppercase transition-all hover:brightness-110 shadow-xl w-full">
                  Initialize Engagement
                </button>
              </form>
            </div>

            {/* Right: Map & Direct Info */}
            <div className="flex flex-col">
              <div className="flex-1 min-h-[300px] md:min-h-[400px] grayscale contrast-[1.2] invert-[0.9] hover:invert-0 hover:grayscale-0 transition-all duration-1000">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.062402127814!2d80.2882243!3d13.1042784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f429676645b%3A0x6d90d79cc534d06c!2sThambu%20Chetty%20St%2C%20Parrys%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715348800000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PHOENNIX GLOBAL Headquarters"
                ></iframe>
              </div>

              <div className="bg-primary p-10 md:p-16">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                    <div>
                      <h4 className="text-secondary font-bold tracking-[0.3em] mb-4 md:mb-6 uppercase text-[9px] md:text-[10px]">Headquarters</h4>
                      <p className="text-white/60 font-light leading-relaxed text-sm">
                        #195 (Old #96), Thambu Chetty Street,<br />
                        3rd Floor, Room No. 37,<br />
                        Chennai – 600001, India.
                      </p>
                    </div>
                    <div className="space-y-6 md:space-y-8">
                       <div>
                          <h4 className="text-secondary font-bold tracking-[0.3em] mb-1 md:mb-2 uppercase text-[9px] md:text-[10px]">Direct Connect</h4>
                          <p className="text-white font-bold tracking-tight text-sm">+91 98407 29059</p>
                       </div>
                       <div>
                          <h4 className="text-secondary font-bold tracking-[0.3em] mb-1 md:mb-2 uppercase text-[9px] md:text-[10px]">Electronic Mail</h4>
                          <p className="text-white font-bold tracking-tight text-sm">pglchennai@gmail.com</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions - Mobile Optimized */}
      <section className="py-20 md:py-40 bg-primary relative overflow-hidden">
         <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 md:gap-24">
               <div className="lg:w-2/5">
                  <div className="lg:sticky lg:top-40">
                     <h2 className="text-secondary font-bold tracking-[0.6em] mb-6 md:mb-8 uppercase text-[9px] animate-pulse">Intelligence</h2>
                     <h1 className="text-3xl md:text-7xl font-heading font-black text-white mb-6 md:mb-8 leading-tight md:leading-[0.9] tracking-tighter">
                       FREQUENT <br className="hidden md:block" />
                       <span className="text-transparent bg-clip-text bg-gradient-to-b from-secondary to-secondary/40">KNOWLEDGE.</span>
                     </h1>
                     <p className="text-white/40 font-light leading-relaxed mb-10 md:mb-16 text-base md:text-lg max-w-md">
                       Access our central intelligence repository for immediate clarification on global logistical frameworks.
                     </p>
                     
                     <div className="group p-[1px] bg-gradient-to-br from-secondary/30 to-transparent rounded-sm inline-block w-full">
                        <div className="bg-[#000B1E] p-8 md:p-10 border border-white/5 relative overflow-hidden">
                           <p className="text-white/60 font-bold text-[10px] tracking-widest uppercase mb-4">Direct Intelligence</p>
                           <button className="flex items-center gap-6 text-secondary text-[11px] tracking-[0.5em] font-bold uppercase group-hover:gap-10 transition-all">
                              <span>Start Briefing</span>
                              <div className="w-12 h-[1px] bg-secondary"></div>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="lg:w-3/5">
                  <div className="space-y-4">
                  {[
                    { q: "Tracking Framework", desc: "How do I monitor global asset movement?", a: "Utilize our proprietary PGL-Global interface. Every consignment generates a unique telemetry ID providing real-time data via satellite uplink." },
                    { q: "Strategic Verticals", desc: "What industrial sectors are prioritized?", a: "Our core framework specializes in Automotive assembly, Cold-chain pharmaceuticals, Retail distribution, and Heavy Lift project cargo." },
                    { q: "Regulatory Compliance", desc: "Handling customs protocols?", a: "We maintain in-house licensed Customs House Agents (CHA) across all major international ports managing end-to-end documentation." },
                    { q: "Operational Velocity", desc: "Standard transit metrics?", a: "Air Express maintains 24-48h global delivery, while Ocean Freight utilizes prioritized TEU slots for consistent 14-21 day cycles." },
                    { q: "Infrastructure Capacity", desc: "Physical asset availability?", a: "Our network controls over 500k sq ft of high-security warehousing with climate-controlled zones." }
                  ].map((faq, i) => (
                    <details key={i} className="group bg-white/[0.03] border border-white/5 transition-all duration-500 rounded-sm overflow-hidden">
                       <summary className="flex items-center justify-between p-8 md:p-10 cursor-pointer list-none hover:bg-white/[0.05] transition-colors">
                          <div className="flex flex-col gap-2">
                             <span className="text-secondary font-bold text-[9px] tracking-[0.3em] uppercase opacity-60">{faq.q}</span>
                             <span className="text-lg md:text-xl font-heading font-bold text-white tracking-tight leading-tight">{faq.desc}</span>
                          </div>
                          <div className="w-10 h-10 border border-secondary/20 rounded-full flex items-center justify-center text-secondary group-open:bg-secondary group-open:text-primary transition-all duration-500 shrink-0">
                             <svg className="w-4 h-4 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
                             </svg>
                          </div>
                       </summary>
                       <div className="px-10 pb-10 animate-in fade-in slide-in-from-top-4 duration-500">
                          <p className="text-white/50 font-light leading-relaxed text-base md:text-lg border-l border-secondary/30 pl-8">
                            {faq.a}
                          </p>
                       </div>
                    </details>
                  ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Leadership & Presence - Exact Match Redesign */}
      <section className="py-32 bg-[#F2F2F2] relative overflow-hidden">
         <div className="container mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
               
               {/* Left: Strategic Vision */}
               <div className="flex flex-col">
                  <span className="text-secondary font-bold tracking-[0.4em] mb-6 uppercase text-[9px]">Strategic Vision</span>
                  <h2 className="text-6xl font-heading font-black text-primary mb-4 tracking-tighter italic leading-none">L. Yuvaraj</h2>
                  <div className="w-16 h-1 gold-gradient mb-6"></div>
                  <p className="text-[#666] font-bold tracking-[0.2em] uppercase text-[9px]">Founder & Managing Director</p>
               </div>
               
               {/* Center: The Quote & Accreditations */}
               <div className="flex flex-col lg:px-12 lg:border-x border-gray-200 lg:col-span-1">
                  <div className="relative mb-10">
                     <span className="text-4xl font-serif text-secondary/10 font-black absolute -top-6 -left-2">"</span>
                     <p className="text-primary text-base md:text-[18px] font-heading font-light leading-snug italic relative z-10">
                        "We engineering the fluid dynamics of global commerce, ensuring that every milestone is a testament to precision."
                     </p>
                  </div>
                  <div className="flex gap-12">
                     {["IATA", "FIATA", "WCA"].map((c, i) => (
                       <div key={i}>
                          <span className="text-[8px] tracking-widest text-[#999] font-bold uppercase mb-1 block">Accreditation</span>
                          <span className="text-primary font-black text-xl tracking-tighter">{c}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Right: 24/7 Active Telemetry */}
               <div className="flex justify-center lg:justify-end items-center gap-6">
                  <div className="text-right">
                     <div className="text-7xl font-heading font-black text-primary tracking-tighter flex items-center justify-end">
                        24<span className="text-secondary mx-1">/</span>7
                     </div>
                     <div className="text-[9px] tracking-[0.4em] text-[#666] font-bold uppercase mt-2">Active Telemetry</div>
                  </div>
                  <div className="w-1 h-16 bg-secondary"></div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
};

export default ContactPage;
