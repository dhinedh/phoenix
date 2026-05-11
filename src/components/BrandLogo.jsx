import React from 'react';
import logoImg from '../assets/logo.png';

const BrandLogo = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center overflow-hidden`}>
      <img 
        src={logoImg} 
        alt="Phoennix Global Logistics Logo" 
        className="w-full h-full object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = '<div class="w-full h-full bg-secondary flex items-center justify-center text-white font-bold text-xs rounded-sm">P</div>';
        }}
      />
    </div>
  );
};

export default BrandLogo;
