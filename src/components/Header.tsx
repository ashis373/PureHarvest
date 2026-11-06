import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, PhoneCall, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenWhatsApp: () => void;
  isEditMode: boolean;
  onToggleEditMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenWhatsApp,
  isEditMode,
  onToggleEditMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9EF]/95 backdrop-blur-md border-b border-[#287A45]/15 transition-all">
      {/* Top micro-announcement banner */}
      <div className="bg-[#287A45] text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span>🌿 100% Pure Vedic Ghee, Authentic Spices & Fresh Dawn Harvest</span>
          <span className="hidden md:inline" aria-hidden="true">·</span>
          <span className="hidden md:inline">⚡ Same-Day Express Kitchen Delivery</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <a
            href="tel:+919876543210"
            className="underline underline-offset-2 hover:text-[#FFF9EF] flex items-center gap-1 font-semibold"
          >
            <PhoneCall className="w-3 h-3" /> Call or WhatsApp: +91 98765 43210
          </a>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <a href="#hero" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 rounded-xl bg-[#287A45] text-white flex items-center justify-center shadow-md shadow-[#287A45]/20 group-hover:bg-[#1A532E] transition-colors">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-2xl font-bold tracking-tight text-[#1A201C]">
                VedicRasoi
              </span>
              <span className="text-[10px] bg-[#287A45]/10 text-[#287A45] font-semibold px-1.5 py-0.5 rounded">
                PURE
              </span>
            </div>
            <span className="text-[11px] font-medium text-[#576359] tracking-wider uppercase">
              Ghee • Spices • Vegetables
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#1A201C]/80">
          <a
            href="#hero"
            className="hover:text-[#287A45] transition-colors hover:underline underline-offset-8 whitespace-nowrap"
          >
            Home
          </a>
          <a
            href="#categories"
            className="hover:text-[#287A45] transition-colors hover:underline underline-offset-8 whitespace-nowrap"
          >
            Our 3 Categories
          </a>
          <a
            href="#products"
            className="hover:text-[#287A45] transition-colors hover:underline underline-offset-8 whitespace-nowrap"
          >
            All Products
          </a>
          <a
            href="#why-us"
            className="hover:text-[#287A45] transition-colors hover:underline underline-offset-8 whitespace-nowrap"
          >
            Why Choose Us
          </a>
          <a
            href="#about"
            className="hover:text-[#287A45] transition-colors hover:underline underline-offset-8 whitespace-nowrap"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="hover:text-[#287A45] transition-colors hover:underline underline-offset-8 whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Price Editor Toggle Button */}
          <button
            onClick={onToggleEditMode}
            type="button"
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              isEditMode
                ? 'bg-[#D97706] text-white border-[#D97706] shadow-sm animate-pulse'
                : 'bg-white/80 text-[#576359] border-[#287A45]/20 hover:text-[#287A45] hover:border-[#287A45]/40'
            }`}
            title="Toggle Price Editor to customize catalog prices"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEditMode ? 'Editing Prices ON' : 'Edit Prices'}</span>
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            type="button"
            className="relative p-2.5 rounded-xl bg-white border border-[#287A45]/20 hover:border-[#287A45] text-[#1A201C] hover:text-[#287A45] transition-colors shadow-xs"
            aria-label="View Shopping Basket"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#287A45] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp Order Button */}
          <button
            onClick={onOpenWhatsApp}
            type="button"
            className="flex items-center gap-2 bg-[#287A45] hover:bg-[#1A532E] text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-[#287A45]/20 hover:shadow-lg transition-all active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">WhatsApp</span> Order Now
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-[#1A201C] hover:text-[#287A45]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9EF] border-b border-[#287A45]/15 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#1A201C]">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#287A45] py-1 border-b border-[#287A45]/10"
            >
              Home
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#287A45] py-1 border-b border-[#287A45]/10"
            >
              Our 3 Product Categories
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#287A45] py-1 border-b border-[#287A45]/10"
            >
              All Products & Showcase
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#287A45] py-1 border-b border-[#287A45]/10"
            >
              Why Choose Us
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#287A45] py-1 border-b border-[#287A45]/10"
            >
              About Our Farms
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#287A45] py-1"
            >
              Contact & Order
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onToggleEditMode();
                setMobileMenuOpen(false);
              }}
              type="button"
              className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-white border border-[#287A45]/20 text-[#576359] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              {isEditMode ? 'Editing Prices: Active (Click to Exit)' : 'Customize Product Prices'}
            </button>
            <button
              onClick={() => {
                onOpenWhatsApp();
                setMobileMenuOpen(false);
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#287A45] text-white py-3 rounded-xl font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Direct WhatsApp Order (+91 98765 43210)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
