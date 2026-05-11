import React from 'react';

const TrackingPage = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="container mx-auto px-8 py-20 text-center">
        <h2 className="text-secondary font-bold tracking-[0.4em] mb-6 uppercase text-xs">Real-Time Visibility</h2>
        <h1 className="text-4xl md:text-7xl font-heading font-bold text-primary mb-8">Cargo Tracking</h1>
        <p className="text-muted text-xl max-w-2xl mx-auto font-light mb-16">
          Enter your shipment reference number to get real-time updates on your cargo's status and location.
        </p>
        
        <div className="max-w-3xl mx-auto bg-surface p-12 lg:p-20 rounded-sm border border-gray-100 shadow-elegant">
           <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="text" 
                placeholder="Enter Tracking Number (e.g., PGL-12345678)" 
                className="flex-grow bg-white border border-gray-200 py-5 px-8 focus:border-secondary outline-none transition-colors font-bold tracking-widest text-primary uppercase text-sm"
              />
              <button className="brand-gradient text-primary px-12 py-5 rounded-sm font-bold text-sm tracking-[0.3em] uppercase transition-all hover:brightness-110 shadow-xl">
                Track Now
              </button>
           </div>
           <p className="text-[10px] text-muted font-bold tracking-widest uppercase mt-8 text-left italic">
             * Supports Bill of Lading (BoL), Air Waybill (AWB), and Container Numbers.
           </p>
        </div>
      </div>
      
      <section className="py-32 bg-primary">
         <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               <div className="text-center">
                  <div className="text-secondary text-5xl font-black mb-6">01</div>
                  <h4 className="text-white font-heading font-bold mb-4 uppercase tracking-widest">Global GPS</h4>
                  <p className="text-white/40 font-light text-sm">Precise satellite tracking for ocean and land freight units.</p>
               </div>
               <div className="text-center">
                  <div className="text-secondary text-5xl font-black mb-6">02</div>
                  <h4 className="text-white font-heading font-bold mb-4 uppercase tracking-widest">Live API</h4>
                  <p className="text-white/40 font-light text-sm">Direct integration with carrier systems for instant air freight updates.</p>
               </div>
               <div className="text-center">
                  <div className="text-secondary text-5xl font-black mb-6">03</div>
                  <h4 className="text-white font-heading font-bold mb-4 uppercase tracking-widest">Milestone Alerts</h4>
                  <p className="text-white/40 font-light text-sm">Automated notifications for every major transition point.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default TrackingPage;
