import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const serviceData = {
  "01": {
    title: "Air Freight",
    subtitle: "Aerospace Velocity",
    heroImage: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=2000",
    desc: "Our air freight solutions are designed for high-value and time-critical cargo. We leverage a global network of premier carriers to ensure your goods move with aerospace-grade precision and speed.",
    features: [
      { title: "Express Solutions", detail: "Next-flight-out services for mission-critical components." },
      { title: "Global Consolidation", detail: "Cost-effective scheduled departures across all major hubs." },
      { title: "Charter Services", detail: "Full and part-charter solutions for oversized or urgent cargo." }
    ],
    specs: [
      { label: "Transit Time", val: "24-48 Hours" },
      { label: "Global Reach", val: "All Continents" },
      { label: "Tracking", val: "Real-time Satellite" }
    ]
  },
  "02": {
    title: "Sea Freight",
    subtitle: "Oceanic Scale",
    heroImage: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000",
    desc: "Reliable and cost-effective ocean transport for international commerce at scale. We manage everything from FCL to LCL, ensuring your large-scale shipments arrive exactly when needed.",
    features: [
      { title: "FCL / LCL", detail: "Full and part container load optimization for any volume." },
      { title: "Port-to-Port", detail: "Strategic connections between every major global gateway." },
      { title: "Intermodal Link", detail: "Seamless transition from sea to rail and road networks." }
    ],
    specs: [
      { label: "Capacity", val: "Unlimited TEU" },
      { label: "Reliability", val: "99.8% On-time" },
      { label: "Security", val: "Port-to-Door" }
    ]
  },
  "03": {
    title: "Customs Clearance",
    subtitle: "Regulatory Intelligence",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
    desc: "Expert navigation of global regulatory environments for seamless border transit. Our in-house licensed agents handle complex documentation so your cargo never stops moving.",
    features: [
      { title: "DGR Handling", detail: "Certified management of dangerous and restricted goods." },
      { title: "Duty Optimization", detail: "Strategic analysis to minimize tax and duty liabilities." },
      { title: "Digital Filing", detail: "Automated documentation for instant customs approval." }
    ],
    specs: [
      { label: "Compliance", val: "100% Guaranteed" },
      { label: "License", val: "IATA/CHA Certified" },
      { label: "Processing", val: "High-Speed Digital" }
    ]
  },
  "04": {
    title: "Cargo Handling",
    subtitle: "Precision Custody",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
    desc: "Professional management and protection of your cargo throughout the journey. We treat every package as a critical node in your value chain.",
    features: [
      { title: "Specialized Loading", detail: "Technical expertise for over-dimensional and heavy-lift gear." },
      { title: "Security Protocols", detail: "High-security custody for valuable and sensitive items." },
      { title: "Asset Protection", detail: "Advanced shock and environment monitoring during transit." }
    ],
    specs: [
      { label: "Safety Record", val: "Zero Incident" },
      { label: "Expertise", val: "Heavy-Lift Spec" },
      { label: "Insurance", val: "Full Coverage" }
    ]
  },
  "05": {
    title: "Warehousing",
    subtitle: "Strategic Inventory",
    heroImage: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&q=80&w=2000",
    desc: "Secure storage and advanced inventory management in strategic global hubs. Featuring temperature control and high-security zones for mission-critical assets.",
    features: [
      { title: "Smart Inventory", detail: "WMS-driven real-time visibility of every SKU." },
      { title: "Cold Chain", detail: "Precise temperature-controlled storage for pharma and food." },
      { title: "Value-Add Services", detail: "Kitting, labeling, and quality control at the source." }
    ],
    specs: [
      { label: "Floor Space", val: "500k+ Sq Ft" },
      { label: "Security", val: "24/7 Monitoring" },
      { label: "Accuracy", val: "99.9% Inventory" }
    ]
  },
  "06": {
    title: "Transportation",
    subtitle: "First & Last Mile",
    heroImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000",
    desc: "Integrated road and rail solutions for reliable delivery. We bridge the gap between global hubs and your final destination with unmatched consistency.",
    features: [
      { title: "Trucking Network", detail: "Dedicated fleet for regional and long-haul distribution." },
      { title: "Rail Integration", detail: "Eco-friendly bulk transport solutions for large volumes." },
      { title: "Urban Logistics", detail: "Precision-timed delivery to busy metropolitan centers." }
    ],
    specs: [
      { label: "Fleet Size", val: "2400+ Units" },
      { label: "GPS Tracking", val: "Live Telemetry" },
      { label: "Coverage", val: "Nationwide" }
    ]
  },
  "07": {
    title: "Supply Chain",
    subtitle: "Architecture & Flow",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    desc: "Optimization of your entire value chain through advanced logistics engineering. We design systems that scale with your growth and adapt to global shifts.",
    features: [
      { title: "Network Design", detail: "Mathematical modeling of your global distribution nodes." },
      { title: "Risk Mitigation", detail: "Predictive analysis to bypass global trade disruptions." },
      { title: "Sustainability", detail: "Carbon-optimized routing to meet ESG requirements." }
    ],
    specs: [
      { label: "Analysis", val: "AI-Powered" },
      { label: "Optimization", val: "Total Cost" },
      { label: "Scalability", val: "Dynamic" }
    ]
  }
};

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary text-white">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black mb-8">NODE NOT FOUND</h1>
          <button onClick={() => navigate('/services')} className="text-secondary border border-secondary/30 px-8 py-3 rounded-sm font-bold tracking-widest text-xs uppercase hover:bg-secondary hover:text-primary transition-all">
            Return to Directory
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary to-primary"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
               <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]">{service.subtitle}</span>
               <div className="h-px w-8 md:w-12 bg-secondary/30"></div>
            </div>
            <h1 className="text-5xl md:text-9xl font-heading font-black text-white mb-6 md:mb-10 leading-none tracking-tighter">
              {service.title.split(' ')[0]} <br />
              <span className="font-light italic text-white/40">{service.title.split(' ')[1] || "LOGISTICS"}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
         <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
               
               {/* Left: Deep Dive */}
               <div className="lg:col-span-7">
                  <div className="mb-16 md:mb-20">
                     <h2 className="text-secondary font-bold tracking-[0.3em] mb-6 md:mb-8 uppercase text-[9px] md:text-[10px]">Operational Framework</h2>
                     <p className="text-primary text-xl md:text-3xl font-heading font-light leading-relaxed mb-10 md:mb-12">
                        {service.desc}
                     </p>
                     <div className="w-20 md:w-24 h-1 md:h-1.5 brand-gradient"></div>
                  </div>

                  <div className="space-y-12 md:space-y-16">
                     {service.features.map((f, i) => (
                       <div key={i} className="group border-l-2 border-gray-100 pl-8 md:pl-10 hover:border-secondary transition-colors duration-500">
                          <h4 className="text-lg md:text-xl font-heading font-bold text-primary mb-3 md:mb-4 uppercase tracking-tight">{f.title}</h4>
                          <p className="text-muted font-light leading-relaxed text-base md:text-lg max-w-xl">{f.detail}</p>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Right: Telemetry & Specs */}
               <div className="lg:col-span-5">
                  <div className="bg-surface p-8 md:p-12 rounded-sm border border-gray-100 sticky top-40 shadow-elegant">
                     <h4 className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold text-primary uppercase mb-8 md:mb-10 pb-4 border-b border-gray-200">Performance Metrics</h4>
                     <div className="space-y-5 md:space-y-6">
                        {service.specs.map((s, i) => (
                          <div key={i} className="flex items-center justify-between group border-b border-gray-50 pb-5 md:pb-6 last:border-0 last:pb-0">
                             <span className="text-[8px] md:text-[9px] tracking-widest font-bold text-muted uppercase group-hover:text-secondary transition-colors">{s.label}</span>
                             <span className="text-lg md:text-xl font-heading font-bold text-primary tracking-tight">{s.val}</span>
                          </div>
                        ))}
                     </div>

                     <div className="mt-10 md:mt-12 pt-6 md:pt-8">
                        <button onClick={() => navigate('/contact')} className="w-full brand-gradient py-4 md:py-5 text-primary font-black text-[9px] md:text-[10px] tracking-[0.4em] uppercase rounded-sm shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300">
                           Request Technical Briefing
                        </button>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-16 md:py-24 border-t border-gray-50">
         <div className="container mx-auto px-8 flex justify-between items-center">
            <button onClick={() => navigate('/services')} className="flex items-center gap-4 text-[9px] md:text-[10px] tracking-widest font-bold text-muted hover:text-primary transition-all">
               <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
               ALL CAPABILITIES
            </button>
         </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
