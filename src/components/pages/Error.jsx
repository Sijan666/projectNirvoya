import React from 'react';

const PremiumErrorPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      
      {/* Top Header Placeholder (to match your theme's branding) */}
      <div className="h-20 border-b border-slate-100 flex items-center px-8 lg:px-16">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-[#0088cc]">project nirvoya</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Section: Minimalist Error Message */}
        <div className="lg:col-span-7 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0 relative">
          <p className="text-[#0088cc] font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
            Error 404
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.1]">
            Page Not <br /> Found.
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-md leading-relaxed mb-10">
            The link you followed may be broken, or the page may have been removed. Let's get you back on track to exploring our premium collections.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href="/" 
              className="px-8 py-4 bg-[#0088cc] text-white text-sm font-semibold rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-[#0088cc]/20 transition-all active:scale-95 flex items-center gap-2"
            >
              Return Home
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section: Structured Navigation / Lookbook Grid */}
        <div className="lg:col-span-5 bg-slate-50/50 border-l border-slate-100 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0">
          
          <div className="max-w-sm w-full">
            <h3 className="text-xl font-bold mb-6 text-slate-800">Looking for something?</h3>
            
            {/* Minimal Search Input */}
            <div className="relative mb-12">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-white border border-slate-200 rounded-xl py-4 px-5 pr-12 text-sm focus:outline-none focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc] transition-all shadow-sm"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0088cc] transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Structured Category Links */}
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Featured Categories
            </h4>
            <div className="flex flex-col gap-1">
              {[
                { name: "Women's Winter Collection", count: "124" },
                { name: "Men's Fashion", count: "86" },
                { name: "Health & Beauty", count: "52" },
                { name: "Groceries Collection", count: "210" }
              ].map((category, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="group flex items-center justify-between py-3 border-b border-slate-200/60 hover:border-[#0088cc]/30 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-600 group-hover:text-[#0088cc] transition-colors">
                    {category.name}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-[#0088cc]/70 transition-colors font-mono">
                    ({category.count})
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PremiumErrorPage;