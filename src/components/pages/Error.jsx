import React from "react";

const PremiumErrorPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#050B14] overflow-hidden font-sans selection:bg-[#d4af37] selection:text-black">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#d4af37]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none mix-blend-overlay"></div>
            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-2xl">
                <p className="text-[#d4af37] tracking-[0.4em] uppercase text-xs mb-10 font-medium">
                Project Nirvoya
                </p>
                <h1 className="text-[8rem] md:text-[14rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-[#FFF2CD] via-[#D4AF37] to-[#8A6D20] drop-shadow-2xl select-none mb-6">
                404
                </h1>
                <h2 className="text-2xl md:text-4xl font-light text-slate-200 tracking-wide mb-6">
                Our curated treasures await.
                </h2>
                <p className="text-slate-400 text-sm md:text-base mb-14 font-light leading-relaxed px-4">
                The specific path you are looking for is currently unavailable, but
                our exquisite collections remain. Let's guide you back to what
                matters.
                </p>
                <a href="/" className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent border border-[#d4af37]/40 text-[#f3e5ab] uppercase tracking-[0.2em] text-xs font-bold overflow-hidden transition-all duration-700 hover:border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0)] hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                    <div className="absolute inset-0 bg-linear-to-r from-[#d4af37] to-[#c5a028] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 flex items-center gap-3 group-hover:text-[#050B14] transition-colors duration-500">
                        Return to Homepage
                        <svg
                        className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default PremiumErrorPage;
