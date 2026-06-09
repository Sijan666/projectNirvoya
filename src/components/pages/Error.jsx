import React from 'react';

const PremiumErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center relative overflow-hidden font-sans">
      
      {/* Subtle Premium Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Floating UI Elements (Categories) - Left */}
      <div className="absolute top-1/4 left-5 md:left-1/4 animate-[bounce_8s_infinite] bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#0088cc]"></div>
        <span className="text-sm font-medium text-slate-700">Women's Fashion</span>
      </div>

      {/* Floating UI Elements (Categories) - Right */}
      <div className="absolute bottom-1/4 right-5 md:right-1/4 animate-[bounce_10s_infinite_reverse] bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-sky-400"></div>
        <span className="text-sm font-medium text-slate-700">Home & Lifestyle</span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
        
        {/* Minimalist System Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0088cc] animate-pulse"></span>
          <span className="text-xs font-bold text-[#0088cc] tracking-widest uppercase">System Status: 404</span>
        </div>

        {/* Giant Smooth Typography */}
        <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-6 select-none">
          Lost in space.
        </h1>

        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl font-light leading-relaxed">
          The page you're looking for has drifted out of our system. But don't worry, our premium collections are just a click away.
        </p>

        {/* Premium Call to Action */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center">
          <a 
            href="/" 
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full overflow-hidden transition-transform active:scale-95 shadow-lg"
          >
            {/* Button Hover Fill Effect */}
            <div className="absolute inset-0 bg-[#0088cc] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide">
              Back to Homepage
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>

          <a 
            href="/shop" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full text-sm font-semibold tracking-wide hover:border-slate-400 hover:bg-slate-50 transition-all active:scale-95 shadow-sm hover:shadow-md"
          >
            Explore Collections
          </a>
        </div>

      </div>
    </div>
  );
};

export default PremiumErrorPage;