import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { CategoryId } from '../types';

interface FooterProps {
  onSelectCategory: (category: CategoryId) => void;
  onWhatsAppClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onWhatsAppClick }) => {
  return (
    <footer className="bg-[#1A201C] text-[#FFF9EF] pt-16 pb-12 border-t border-[#287A45]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#287A45] text-white flex items-center justify-center font-bold">
                <svg
                  className="w-5 h-5"
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
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                VedicRasoi
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Honoring traditional Indian food wisdom through three essential culinary pillars:
              unadulterated bilona ghee and cold-pressed oils, stone-milled spices, and dawn-harvested fresh vegetables.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#287A45] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#287A45]" />
              <span className="text-neutral-300">FSSAI Certified • 100% Pure Vegetarian</span>
            </div>
          </div>

          {/* Col 2: The Three Categories (Required) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#287A45]">
              The Three Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('ghee-oil')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  01. Pure Ghee & Cooking Oil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('spices')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  02. Authentic Indian Spices
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('vegetables')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  03. Fresh Dawn Vegetables
                </button>
              </li>
              <li className="pt-2">
                <a
                  href="#products"
                  className="text-xs font-semibold text-[#287A45] hover:text-[#FFF9EF] flex items-center gap-1"
                >
                  Browse Complete Catalog →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#287A45]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <a href="#hero" className="hover:text-white hover:underline transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white hover:underline transition-colors">
                  Core Categories
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white hover:underline transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors">
                  About Our Farms
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white hover:underline transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline transition-colors">
                  Contact & Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & WhatsApp */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#287A45]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#287A45]" />
                <span>WhatsApp: +91 98765 43210</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#287A45]" />
                <span>Phone: +91 98765 43210</span>
              </a>
              <div className="flex items-center gap-2 text-neutral-400">
                <Mail className="w-4 h-4 text-[#287A45]" />
                <span>orders@vedicrasoi.in</span>
              </div>
              <div className="flex items-start gap-2 text-neutral-400 pt-1">
                <MapPin className="w-4 h-4 text-[#287A45] shrink-0 mt-0.5" />
                <span>Sector 44, Food Express Hub, Bengaluru - 560103</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onWhatsAppClick}
                className="w-full py-2.5 px-3 bg-[#287A45] hover:bg-[#1A532E] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Instant WhatsApp Order</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} VedicRasoi Foods Private Limited. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-400">
            <span>Pure Cow Ghee</span>
            <span>·</span>
            <span>Cold-Pressed Oils</span>
            <span>·</span>
            <span>Stone-Ground Spices</span>
            <span>·</span>
            <span>Dawn Vegetables</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
