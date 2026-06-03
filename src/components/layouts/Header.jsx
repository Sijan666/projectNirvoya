import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/logo.webp";
// Icons
import { FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaRegUser, FaShoppingBasket } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative bg-white border-b border-gray-200 shadow-sm z-50 font-Poppins">
      {/* nav */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-2xl text-gray-700 hover:text-[#0198E9] transition-colors"
            onClick={() => setMobileMenuOpen(true)}>
            <FiMenu />
          </button>
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={Logo} alt="Logo" className="h-8 md:h-10 cursor-pointer object-contain" />
          </Link>
          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-3xl bg-gray-50 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#0198E9] focus-within:ring-1 focus-within:ring-[#0198E9] transition-all duration-300">
            <input
              type="text"
              placeholder="I'm looking for..."
              className="w-full bg-transparent px-5 py-3 outline-none text-sm text-gray-700"
            />
            <button className="bg-[#0198E9] text-white px-8 flex items-center justify-center hover:bg-blue-600 transition-colors text-xl">
              <FiSearch />
            </button>
          </div>
          {/* Icons */}
          <div className="flex items-center gap-5 sm:gap-6 lg:gap-8 shrink-0">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-[#0198E9] transition-colors group">
              <FaRegUser className="text-xl group-hover:scale-110 duration-300" />
              <span className="hidden lg:block text-sm font-medium">Login</span>
            </Link>
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-[#0198E9] transition-colors group">
              <AiOutlineHeart className="text-[26px] group-hover:scale-110 duration-300" />
              <span className="hidden lg:block text-sm font-medium">Wishlist</span>
            </Link>
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-[#0198E9] transition-colors group relative">
              <div className="relative">
                <FaShoppingBasket className="text-[24px] group-hover:scale-110 duration-300" />
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  1
                </span>
              </div>
              <span className="hidden lg:block text-sm font-medium">My Cart</span>
            </Link>
          </div>
        </div>
      </div>
      {/* small device search bar */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex w-full bg-gray-50 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#0198E9] transition-all">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent px-4 py-2.5 outline-none text-sm text-gray-700"
          />
          <button className="bg-[#0198E9] text-white px-5 flex items-center justify-center hover:bg-blue-600 transition-colors">
            <FiSearch className="text-lg" />
          </button>
        </div>
      </div>
      {/* desktop nav */}
      <nav className="hidden lg:block border-t border-gray-100 relative">
        <div className="max-w-[1440px] mx-auto px-8">
          <ul className="flex items-center justify-between text-sm font-medium text-gray-700 uppercase tracking-wide py-3.5">
            <li 
              className={`cursor-pointer flex items-center gap-1.5 transition-colors duration-300 ${showMegaMenu ? "text-[#0198E9]" : "hover:text-[#0198E9]"}`}
              onClick={() => setShowMegaMenu(!showMegaMenu)}
            >
              Women's Fashion
              <FiChevronDown className={`text-lg transition-transform duration-300 ${showMegaMenu ? "rotate-180" : "rotate-0"}`} />
            </li>
            <li className="cursor-pointer hover:text-[#0198E9] transition-colors">Men's Fashion</li>
            <li className="cursor-pointer hover:text-[#0198E9] transition-colors">Kid's Fashion</li>
            <li className="cursor-pointer hover:text-[#0198E9] transition-colors">Home & Lifestyle</li>
            <li className="cursor-pointer hover:text-[#0198E9] transition-colors">Arts & Crafts</li>
            <li className="cursor-pointer hover:text-[#0198E9] transition-colors">Computer & Electronics</li>
            <li className="cursor-pointer hover:text-[#0198E9] transition-colors">Food & Grocery</li>
          </ul>
        </div>
        {/* desktop menu */}
        {showMegaMenu && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 animate-fade-in-down">
            <div className="max-w-[1440px] mx-auto px-8 py-10">
              <div className="grid grid-cols-5 gap-8">
                {/* Column 1 */}
                <div>
                  <h4 className="text-[#1A1A1A] text-base font-semibold pb-4 border-b border-gray-100 mb-4">Saree</h4>
                  <ul className="flex flex-col gap-y-3 text-gray-500 text-sm">
                    {["Cotton", "Silk", "Katan", "Muslin", "Jamdani", "Georgette", "Nakshi Kantha", "Linen", "Khadi", "Monipuri"].map(item => (
                      <li key={item}><Link to="#" className="hover:text-[#0198E9] hover:translate-x-1 inline-block transition-transform">{item}</Link></li>
                    ))}
                  </ul>
                </div>
                {/* Column 2 */}
                <div>
                  <h4 className="text-[#1A1A1A] text-base font-semibold pb-4 border-b border-gray-100 mb-4">Clothes</h4>
                  <ul className="flex flex-col gap-y-3 text-gray-500 text-sm">
                    {["T-shirt", "Shorts", "Shirt", "Tracksuit", "Jeans", "Waistcoat", "Sweater", "Coats", "Suit"].map(item => (
                      <li key={item}><Link to="#" className="hover:text-[#0198E9] hover:translate-x-1 inline-block transition-transform">{item}</Link></li>
                    ))}
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <h4 className="text-[#1A1A1A] text-base font-semibold pb-4 border-b border-gray-100 mb-4">Cosmetic</h4>
                  <ul className="flex flex-col gap-y-3 text-gray-500 text-sm">
                    {["Perfume", "Eye make-up", "Skin care", "Hair care", "Make-up", "Oral Care", "Body Care", "Lipstick"].map(item => (
                      <li key={item}><Link to="#" className="hover:text-[#0198E9] hover:translate-x-1 inline-block transition-transform">{item}</Link></li>
                    ))}
                  </ul>
                </div>
                {/* Column 4 */}
                <div>
                  <h4 className="text-[#1A1A1A] text-base font-semibold pb-4 border-b border-gray-100 mb-4">Sports & Outdoor</h4>
                  <ul className="flex flex-col gap-y-3 text-gray-500 text-sm">
                    {["Sports Bra", "Leggings", "Running Shoes", "Sports Bag", "Snow Boot", "Outdoor Equipment"].map(item => (
                      <li key={item}><Link to="#" className="hover:text-[#0198E9] hover:translate-x-1 inline-block transition-transform">{item}</Link></li>
                    ))}
                  </ul>
                </div>
                {/* Column 5 */}
                <div>
                  <h4 className="text-[#1A1A1A] text-base font-semibold pb-4 border-b border-gray-100 mb-4">Personal Care</h4>
                  <ul className="flex flex-col gap-y-3 text-gray-500 text-sm mb-6">
                    {["Sexual Health", "After Shave", "Razor blade"].map(item => (
                      <li key={item}><Link to="#" className="hover:text-[#0198E9] hover:translate-x-1 inline-block transition-transform">{item}</Link></li>
                    ))}
                  </ul>
                  <h4 className="text-[#1A1A1A] text-base font-semibold pb-4 border-b border-gray-100 mb-4">Shoes</h4>
                  <ul className="flex flex-col gap-y-3 text-gray-500 text-sm">
                    {["Heeled shoes", "Sneakers", "Casual Shoes", "Sandals"].map(item => (
                      <li key={item}><Link to="#" className="hover:text-[#0198E9] hover:translate-x-1 inline-block transition-transform">{item}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* small device side bar */}
      <div 
        className={`fixed inset-0 bg-black/50 z-60 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileMenuOpen(false)}/>
      {/* Sidebar Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <img src={Logo} alt="Logo" className="h-8 object-contain" />
          <button onClick={() => setMobileMenuOpen(false)} className="text-2xl text-gray-500 hover:text-red-500">
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col p-5 gap-y-4 text-gray-700 font-medium">
          <li className="border-b border-gray-50 pb-3">
            <div className="flex items-center justify-between" onClick={() => setShowMegaMenu(!showMegaMenu)}>
              Women's Fashion
              <FiChevronDown className={`transition-transform ${showMegaMenu ? "rotate-180" : ""}`} />
            </div>
            {/* Mobile Menu */}
            {showMegaMenu && (
              <div className="pl-4 mt-3 flex flex-col gap-2 text-sm text-gray-500 font-normal">
                <Link to="#">Saree</Link>
                <Link to="#">Clothes</Link>
                <Link to="#">Cosmetic</Link>
                <Link to="#">Sports & Outdoor</Link>
                <Link to="#">Shoes</Link>
              </div>
            )}
          </li>
          <li className="border-b border-gray-50 pb-3"><Link to="#">Men's Fashion</Link></li>
          <li className="border-b border-gray-50 pb-3"><Link to="#">Kid's Fashion</Link></li>
          <li className="border-b border-gray-50 pb-3"><Link to="#">Home & Lifestyle</Link></li>
          <li className="border-b border-gray-50 pb-3"><Link to="#">Arts & Crafts</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;