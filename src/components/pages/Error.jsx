import React from 'react';

const PremiumErrorPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl w-full text-center">
        
        {/* Minimalist Watermark Style 404 */}
        <h1 className="text-[10rem] md:text-[15rem] font-extrabold text-slate-50 tracking-tighter leading-none select-none">
          404
        </h1>
        
        {/* Overlapping Content Box for Depth */}
        <div className="-mt-20 md:-mt-32 relative z-10 flex flex-col items-center">
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Oops! Page not found.
          </h2>
          
          <p className="text-base md:text-lg text-slate-500 max-w-lg mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back to shopping.
          </p>

          {/* Premium Search Bar Integration (High UX) */}
          <div className="w-full max-w-md relative mb-12">
            <input 
              type="text" 
              placeholder="Search for products, categories..." 
              className="w-full pl-6 pr-14 py-4 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0088cc] focus:border-transparent transition-shadow shadow-sm hover:shadow-md"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-[#0088cc] text-white rounded-full hover:bg-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full justify-center">
            <a 
              href="/" 
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0088cc] text-white text-sm font-semibold rounded-full shadow-md shadow-blue-500/20 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              Back to Homepage
            </a>
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 text-sm font-semibold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
            >
              Previous Page
            </button>
          </div>

          {/* Seamless Category Links (Matches your header) */}
          <div className="w-full border-t border-slate-100 pt-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Explore Our Collections
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {['Women\'s Fashion', 'Men\'s Fashion', 'Kid\'s Fashion', 'Home & Lifestyle'].map((category) => (
                <a 
                  key={category} 
                  href={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                  className="text-sm font-medium text-slate-600 hover:text-[#0088cc] transition-colors relative group"
                >
                  {category}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0088cc] transition-all duration-300 group-hover:w-full"></span>
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