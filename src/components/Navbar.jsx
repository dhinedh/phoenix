import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    { name: "Air Freight", path: "/services" },
    { name: "Sea Freight", path: "/services" },
    { name: "Customs Clearance", path: "/services" },
    { name: "Warehousing", path: "/services" },
    { name: "Import & Export", path: "/services" },
    { name: "Cargo Transportation", path: "/services" },
    { name: "Supply Chain Solutions", path: "/services" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 lg:px-16 py-3 md:py-6 ${
      isScrolled || isMobileMenuOpen 
        ? 'bg-[#000B1E] shadow-2xl border-b border-white/5' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Company Logo */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 group relative z-[110]">
          <div className="w-8 h-8 md:w-10 md:h-10 gold-gradient flex items-center justify-center text-primary font-extrabold text-lg md:text-xl group-hover:scale-110 transition-transform">P</div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg md:text-xl tracking-[0.2em] text-white leading-none">PHOENNIX</span>
            <span className="text-[8px] md:text-[10px] tracking-[0.4em] text-secondary font-bold uppercase">Global Logisticss</span>
          </div>
        </Link>
        
        {/* Center / Right Side: Nav Links */}
        <div className="hidden lg:flex gap-8 items-center text-[10px] tracking-[0.3em] font-bold text-white/70">
          <Link to="/" className={`hover:text-secondary transition-colors ${pathname === '/' ? 'text-secondary' : ''}`}>HOME</Link>
          <Link to="/about" className={`hover:text-secondary transition-colors ${pathname === '/about' ? 'text-secondary' : ''}`}>ABOUT</Link>
          
          {/* Services Dropdown */}
          <div className="relative group/dropdown py-4">
            <Link to="/services" className={`hover:text-secondary transition-colors flex items-center gap-2 ${pathname === '/services' ? 'text-secondary' : ''}`}>
              SERVICES
              <svg className="w-3 h-3 group-hover/dropdown:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-sm py-4 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0 border-t-2 border-secondary">
               {serviceItems.map((item, i) => (
                 <Link 
                   key={i} 
                   to={item.path} 
                   className="block px-8 py-3 text-primary text-[10px] tracking-widest font-bold hover:bg-surface hover:text-secondary transition-colors uppercase"
                 >
                   {item.name}
                 </Link>
               ))}
            </div>
          </div>

          <Link to="/network" className={`hover:text-secondary transition-colors ${pathname === '/network' ? 'text-secondary' : ''}`}>NETWORK</Link>
          <Link to="/gallery" className={`hover:text-secondary transition-colors ${pathname === '/gallery' ? 'text-secondary' : ''}`}>GALLERY</Link>
          <Link to="/blog" className={`hover:text-secondary transition-colors ${pathname === '/blog' ? 'text-secondary' : ''}`}>BLOG</Link>
          <Link to="/contact" className={`hover:text-secondary transition-colors ${pathname === '/contact' ? 'text-secondary' : ''}`}>CONTACT</Link>
        </div>

        {/* Right Corner: CTA Buttons */}
        <div className="hidden lg:flex items-center gap-6">
           <Link to="/contact" className="gold-gradient text-primary px-8 py-3 rounded-sm font-bold text-[10px] tracking-[0.3em] uppercase transition-all hover:brightness-110 shadow-lg">
              Get Quote
           </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-[110] w-12 h-12 flex items-center justify-center text-white"
        >
          <div className="flex flex-col gap-1.5 w-6 h-6 items-end group">
            <div className={`h-0.5 bg-secondary transition-all duration-500 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></div>
            <div className={`h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></div>
            <div className={`h-0.5 bg-secondary transition-all duration-500 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`}></div>
          </div>
        </button>
      </div>

      {/* Premium Full-Screen Mobile Menu */}
      <div className={`fixed inset-0 z-[90] lg:hidden transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
         {/* Solid Backdrop for Legibility */}
         <div className="absolute inset-0 bg-[#000B1E]"></div>
         
         {/* Geometric Background Visuals */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-secondary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
         </div>

         <div className="relative h-full flex flex-col justify-between p-12 pt-32">
            <div className="flex flex-col gap-6">
               {[
                 { name: "HOME", path: "/" },
                 { name: "ABOUT", path: "/about" },
                 { name: "SERVICES", path: "/services" },
                 { name: "NETWORK", path: "/network" },
                 { name: "GALLERY", path: "/gallery" },
                 { name: "BLOG", path: "/blog" },
                 { name: "CONTACT", path: "/contact" }
               ].map((item, i) => (
                 <Link 
                   key={i} 
                   to={item.path} 
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="group flex items-center gap-6 overflow-hidden"
                   style={{ transitionDelay: `${i * 100}ms` }}
                 >
                    <span className="text-[10px] text-secondary font-black opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                    <span className={`text-3xl font-heading font-black tracking-tighter transition-all duration-500 ${
                      pathname === item.path ? 'text-secondary scale-110' : 'text-white hover:text-secondary group-hover:pl-4'
                    }`}>
                      {item.name}
                    </span>
                 </Link>
               ))}
            </div>

            <div className="flex flex-col gap-10 border-t border-white/5 pt-12">
               <div className="flex flex-col gap-4">
                  <span className="text-[10px] tracking-[0.4em] text-secondary font-bold uppercase">Direct Support</span>
                  <p className="text-white font-heading font-bold text-xl tracking-widest">+91 98407 29059</p>
               </div>
               
               <Link 
                 to="/contact" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="gold-gradient text-primary px-8 py-5 rounded-sm font-bold text-[10px] tracking-[0.4em] uppercase text-center shadow-2xl"
               >
                  Initialize Briefing
               </Link>
            </div>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
