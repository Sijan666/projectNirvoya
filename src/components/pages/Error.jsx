import React from 'react';

const PremiumErrorPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#050505] overflow-hidden selection:bg-white selection:text-black font-sans">
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[3000ms]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[3000ms] delay-700"></div>

      {/* Noise Texture (Subtle overlay for premium feel) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        
        {/* Massive 404 Typography */}
        <h1 className="text-[10rem] md:text-[16rem] lg:text-[20rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent select-none drop-shadow-2xl">
          404
        </h1>
        
        {/* Elegant Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent my-6 md:my-10"></div>

        {/* Sophisticated Heading */}
        <h2 className="text-3xl md:text-5xl font-light text-white/90 tracking-wide mb-6">
          Page Not Found
        </h2>
        
        {/* Minimalist Description */}
        <p className="max-w-lg text-sm md:text-base text-white/40 font-light leading-relaxed mb-12">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
        </p>

        {/* High-end Interactive Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          
          {/* Primary Button with smooth fill effect */}
          <a 
            href="/" 
            className="group relative px-10 py-4 bg-white text-black font-medium text-xs md:text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              Return Home
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            {/* Button Hover Background */}
            <div className="absolute inset-0 bg-neutral-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          </a>

          {/* Secondary Button with elegant underline animation */}
          <button 
            onClick={() => window.history.back()}
            className="group px-6 py-4 text-white/60 font-medium text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:text-white"
          >
            <span className="relative pb-2">
              Go Back
              {/* Underline Hover Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumErrorPage;