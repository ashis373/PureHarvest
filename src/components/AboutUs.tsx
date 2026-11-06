import React from 'react';
import { CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF6EE] border-t border-[#287A45]/15 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="/src/assets/images/about_farm_heritage_1793959950738.jpg"
                alt="Organic Indian farm fields at golden sunrise with farmers harvesting vegetables and blooming mustard flowers"
                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#FFF9EF]/90 mb-1">
                  Rooted in Soil & Tradition
                </div>
                <div className="text-sm sm:text-base font-bold text-white drop-shadow-sm">
                  Partnering with 35+ traditional farming families across Rajasthan, Maharashtra, and North India.
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-[#287A45]/20 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#287A45] text-white flex items-center justify-center font-bold text-sm">
                  A2
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A201C]">
                    Vedic Bilona Churned
                  </div>
                  <div className="text-[11px] text-[#576359]">
                    Pure Curd-to-Makhana-to-Ghee
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#287A45]">
              <Sparkles className="w-4 h-4 text-[#287A45]" />
              <span>ABOUT VEDICRASOI</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A201C] tracking-tight">
              Reclaiming the Pure Soul of the Indian Kitchen
            </h2>

            <p className="text-base sm:text-lg text-[#576359] leading-relaxed">
              In an age of ultra-processed cooking oils, chemically dyed spices, and cold-storage
              vegetables polished with synthetic wax, VedicRasoi was started with one stubborn mission:
              to bring back the honest tastes our grandparents grew up on.
            </p>

            <p className="text-sm sm:text-base text-[#576359] leading-relaxed">
              We do not try to be a giant supermarket with thousands of random items. We chose to
              master the <strong>three non-negotiables</strong> of everyday home cooking: pure bilona ghee and
              cold-pressed oils, unadulterated stone-milled spices, and dawn-harvested fresh vegetables.
            </p>

            {/* Core Values checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#287A45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1A201C]">Slow Traditional Methods</h4>
                  <p className="text-xs text-[#576359]">
                    No solvent extraction, zero chemical bleaching, and no heat degradation above 40°C.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#287A45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1A201C]">Fair Farmer Prosperity</h4>
                  <p className="text-xs text-[#576359]">
                    We pay our partner farmers 20% above wholesale market rates for uncompromised purity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#287A45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1A201C]">Direct Daily Kitchen Delivery</h4>
                  <p className="text-xs text-[#576359]">
                    Vegetables are harvested at sunrise and delivered straight to your door for the lunch whistle.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#287A45]/15">
              <div>
                <div className="text-2xl font-bold font-mono text-[#287A45]">35+</div>
                <div className="text-xs text-[#576359] mt-0.5">Partner Farms</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#287A45]">100%</div>
                <div className="text-xs text-[#576359] mt-0.5">Purity Tested</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#287A45]">12K+</div>
                <div className="text-xs text-[#576359] mt-0.5">Happy Kitchens</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
