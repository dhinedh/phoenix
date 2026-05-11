import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+919840729059"; // From company details

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-6">
      
      {/* AI Chatbot Window */}
      {isOpen && (
        <div className="w-[380px] h-[550px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="bg-primary p-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 brand-gradient rounded-full flex items-center justify-center text-primary font-bold text-lg">AI</div>
              <div>
                <h4 className="text-white font-heading font-bold text-sm tracking-widest uppercase">PGL Assistant</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Active Now</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-grow p-6 space-y-6 overflow-y-auto bg-surface">
            <div className="flex gap-4">
              <div className="w-8 h-8 brand-gradient rounded-full flex-shrink-0 flex items-center justify-center text-[10px] text-primary font-bold">AI</div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                <p className="text-sm text-primary font-light leading-relaxed">
                  Welcome to Phoennix Global. I am your AI logistics assistant. How can I help you today?
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
               {["Track Shipment", "Get a Quote", "Global Locations"].map((option, i) => (
                 <button key={i} className="text-left px-6 py-3 bg-white border border-gray-100 rounded-full text-xs font-bold text-primary hover:border-secondary transition-all">
                    {option}
                 </button>
               ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="flex gap-4">
              <input type="text" placeholder="Type your message..." className="flex-grow text-sm font-light focus:outline-none" />
              <button className="text-secondary hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col gap-4">
        {/* AI Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 ${
            isOpen ? 'bg-secondary text-primary rotate-90' : 'bg-primary text-white'
          }`}
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </button>

        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 group"
        >
          <svg className="w-10 h-10 p-2" fill="currentColor" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.4-27.4-16.3-14.6-27.4-32.7-30.5-38.2-3.2-5.6-.4-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ChatWidget;
