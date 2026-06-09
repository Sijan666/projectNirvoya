import React from 'react';

const PremiumErrorPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 font-sans selection:bg-[#0088cc] selection:text-white">
      <div className="text-center max-w-lg mx-auto animate-[fadeIn_0.5s_ease-out]">
        
        {/* Huge but subtle 404 (Watermark style) */}
        <h1 className="text-[8rem] md:text-[10rem] font-black text-slate-50 leading-none tracking-tighter mb-2 select-none">
          404
        </h1>
        
        {/* Main Content overlapping the 404 slightly */}
        <div className="-mt-12 md:-mt-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Page not found.
          </h2>
          
          <p className="text-slate-500 text-base mb-10 leading-relaxed font-medium px-4">
            The page you are looking for doesn't exist or has been moved. Let's get you back home.
          </p>

          {/* The Single Premium Button */}
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-10 py-4 bg-[#0088cc] text-white text-sm font-bold tracking-wide rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,136,204,0.5)] active:scale-[0.97]"
          >
            Back to Homepage
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default PremiumErrorPage;