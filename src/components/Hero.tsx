import React from 'react';
import { ArrowDown, MessageCircle, ShieldCheck, Sparkles, Sprout, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onWhatsAppClick: () => void;
  onSelectCategory: (category: 'ghee-oil' | 'spices' | 'vegetables') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onWhatsAppClick,
  onSelectCategory,
}) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Subtle organic background aura */}
      <div
        className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#287A45]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline and Trust */}
          <div className="lg:col-span-7 space-y-6">
            {/* Organic kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#287A45]/10 text-[#287A45] text-xs font-semibold tracking-wide">
              <Sprout className="w-4 h-4 text-[#287A45]" />
              <span>THE THREE KITCHEN PILLARS • 100% UNADULTERATED</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A201C] tracking-tight leading-[1.12] text-balance">
              Everything Your Kitchen Needs,{' '}
              <span className="text-[#287A45] underline decoration-[#D97706]/40 decoration-wavy decoration-2">
                All in One Place.
              </span>
            </h1>

            {/* Required Subtitle */}
            <p className="text-lg sm:text-xl text-[#576359] leading-relaxed max-w-2xl font-normal">
              Discover quality ghee, cooking oil, authentic spices and fresh vegetables for your
              everyday kitchen.
            </p>

            {/* The 3 Core Pillars Pill-less Clean Indicator */}
            <div className="pt-2 pb-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1A201C]/60 mb-2.5">
                Our Guaranteed Trio of Daily Purity:
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-xl">
                <button
                  type="button"
                  onClick={() => onSelectCategory('ghee-oil')}
                  className="p-3 text-left bg-white/90 rounded-xl border border-[#287A45]/15 hover:border-[#287A45] transition-all hover:-translate-y-0.5 group shadow-2xs"
                >
                  <span className="text-xs font-bold text-[#287A45] block group-hover:underline">
                    01. Pure Ghee & Oils
                  </span>
                  <span className="text-[11px] text-[#576359] block mt-0.5 leading-tight">
                    Vedic Bilona & Cold-Pressed
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('spices')}
                  className="p-3 text-left bg-white/90 rounded-xl border border-[#287A45]/15 hover:border-[#287A45] transition-all hover:-translate-y-0.5 group shadow-2xs"
                >
                  <span className="text-xs font-bold text-[#287A45] block group-hover:underline">
                    02. Authentic Spices
                  </span>
                  <span className="text-[11px] text-[#576359] block mt-0.5 leading-tight">
                    Stone-Ground & Unadulterated
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategory('vegetables')}
                  className="p-3 text-left bg-white/90 rounded-xl border border-[#287A45]/15 hover:border-[#287A45] transition-all hover:-translate-y-0.5 group shadow-2xs"
                >
                  <span className="text-xs font-bold text-[#287A45] block group-hover:underline">
                    03. Fresh Vegetables
                  </span>
                  <span className="text-[11px] text-[#576359] block mt-0.5 leading-tight">
                    Harvested at Dawn Daily
                  </span>
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="px-7 py-3.5 bg-[#287A45] hover:bg-[#1A532E] text-white font-semibold rounded-xl text-base shadow-lg shadow-[#287A45]/20 hover:shadow-xl transition-all flex items-center gap-2 active:scale-[0.98]"
              >
                <span>Explore Products</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onWhatsAppClick}
                className="px-7 py-3.5 bg-white hover:bg-[#FFF9EF] text-[#287A45] border-2 border-[#287A45] font-semibold rounded-xl text-base transition-all flex items-center gap-2 shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-[#287A45] text-[#287A45]" />
                <span>Shop via WhatsApp</span>
              </button>
            </div>

            {/* Trust badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#576359] border-t border-[#287A45]/15">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#287A45]" />
                <span className="font-medium">100% Chemical & Wax Free</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                <span className="font-medium">Stone-Pressed Tradition</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#287A45]" />
                <span className="font-medium">Direct From 35+ Partner Farms</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image with All Three Categories */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/src/assets/images/hero_kitchen_trio_1793959948757.jpg"
                alt="Traditional Indian kitchen table featuring pure cow ghee jars, cold-pressed oils, authentic whole and ground spices, and fresh farm vegetables"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Floating overlay tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#287A45]/15">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#287A45]">
                      The Complete Indian Rasoi
                    </div>
                    <div className="text-sm font-semibold text-[#1A201C]">
                      Pure Ghee • Authentic Spices • Fresh Veggies
                    </div>
                  </div>
                  <button
                    onClick={onWhatsAppClick}
                    type="button"
                    className="px-3.5 py-1.5 bg-[#287A45] text-white text-xs font-semibold rounded-lg hover:bg-[#1A532E] transition-colors shrink-0"
                  >
                    Quick Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
