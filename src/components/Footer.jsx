import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#000814] text-white pt-32 pb-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 gold-gradient flex items-center justify-center text-primary font-extrabold text-3xl shadow-2xl">P</div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-3xl tracking-[0.2em] leading-none text-white">PHOENNIX</span>
                <span className="text-xs tracking-[0.5em] text-secondary font-bold mt-1">GLOBAL LOGISTICSS</span>
              </div>
            </div>
            <p className="text-white/60 mb-12 leading-relaxed font-light text-lg max-w-md border-l-2 border-secondary/30 pl-8">
              Redefining global commerce through <span className="text-white font-medium italic">unparalleled precision</span> and strategic connectivity since 2011.
            </p>
            <div className="flex gap-6">
              {['LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                <a key={social} href="#" className="text-[10px] tracking-widest uppercase font-bold text-white/30 hover:text-secondary transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs tracking-[0.4em] font-bold text-secondary uppercase mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-light text-white/60">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">The Company</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Capabilities</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs tracking-[0.4em] font-bold text-secondary uppercase mb-8">Headquarters</h4>
              <p className="text-sm font-light text-white/60 leading-loose">
                #195 (Old #96), Thambu Chetty Street,<br />
                3rd Floor, Room No. 37,<br />
                Chennai – 600001, India.
              </p>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.4em] font-bold text-secondary uppercase mb-8">Inquiries</h4>
              <div className="space-y-4 text-sm font-light text-white/60">
                <p>+91 98407 29059</p>
                <p>lakshman@pglindia.in</p>
                <p>pglchennai@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] tracking-[0.2em] font-bold text-white/20 uppercase">
            © 2026 PHOENNIX GLOBAL LOGISTICSS • Managing Director: L. Yuvaraj
          </div>
          <div className="flex gap-12 text-[10px] tracking-[0.2em] font-bold text-white/20 uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
