import React from 'react';
import { CATEGORIES_DATA } from '../data/products';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CategoryId } from '../types';

interface ThreeCategoriesProps {
  onExploreCategory: (categoryId: CategoryId) => void;
  onQuickOrderCategory: (categoryId: CategoryId, categoryTitle: string) => void;
}

export const ThreeCategories: React.FC<ThreeCategoriesProps> = ({
  onExploreCategory,
  onQuickOrderCategory,
}) => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-[#FFF9EF] border-t border-b border-[#287A45]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#287A45] mb-2">
            <span>OUR CORE FOCUS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A201C] tracking-tight">
            The Three Pillars of an Authentic Kitchen
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#576359] leading-relaxed">
            We focus exclusively on three essential categories done with uncompromising traditional purity.
            Zero shortcuts, zero adulteration.
          </p>
        </div>

        {/* Three Equally Sized Product Cards in One Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CATEGORIES_DATA.map((cat, idx) => (
            <div
              key={cat.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#287A45]/15 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Large Realistic Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Clean ordinal index & tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#287A45] shadow-xs">
                  Category 0{idx + 1}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white/90 text-xs font-medium tracking-wide">
                    {cat.tagline}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#1A201C] group-hover:text-[#287A45] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#576359] leading-relaxed">
                    {cat.subtitle}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-5 space-y-2.5 pt-4 border-t border-slate-100">
                    {cat.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#1A201C]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#287A45] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore and Order Buttons */}
                <div className="mt-8 pt-5 border-t border-[#287A45]/10 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => onExploreCategory(cat.id)}
                    className="w-full py-3 px-3.5 rounded-xl bg-[#287A45]/10 hover:bg-[#287A45]/20 text-[#287A45] text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onQuickOrderCategory(cat.id, cat.title)}
                    className="w-full py-3 px-3.5 rounded-xl bg-[#287A45] hover:bg-[#1A532E] text-white text-xs font-bold shadow-md shadow-[#287A45]/20 transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
