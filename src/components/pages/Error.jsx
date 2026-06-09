import React from 'react';

const PremiumErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50/50 to-white px-6 py-24 sm:py-32 lg:px-8 relative overflow-hidden">
      
      {/* Background decorative blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="text-center max-w-2xl mx-auto z-10">
        {/* Animated Error Number */}
        <p className="text-base font-bold text-blue-600 tracking-widest uppercase mb-2">Error 404</p>
        <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
          Oops! Looks like you're lost.
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-slate-600">
          We can't seem to find the page you're looking for. It might have been removed, renamed, or doesn't exist anymore. Let's get you back to shopping!
        </p>
        
        {/* Call to Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <button
            onClick={() => window.history.back()}
            className="rounded-full bg-blue-500 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Go Back
          </button>
          <a 
            href="/" 
            className="rounded-full px-8 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 shadow-sm flex items-center gap-2"
          >
            Continue Shopping <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        
        {/* E-commerce Quick Links */}
        <div className="mt-16 border-t border-slate-200 pt-10">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
            Or check out our popular categories
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Women\'s Fashion', 'Men\'s Fashion', 'Kid\'s Fashion', 'Home & Lifestyle'].map((category) => (
              <a 
                key={category} 
                href={`/category/${category.toLowerCase().replace(/ /g, '-')}`} 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PremiumErrorPage;