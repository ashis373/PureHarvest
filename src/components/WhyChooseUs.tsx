import React from 'react';
import { Award, Leaf, ShoppingBasket, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Quality Products',
      subtitle: 'Pure & Lab-Tested',
      description:
        'Traditional Vedic bilona cow ghee, cold wood-pressed unrefined oils, and stone-ground spices with zero adulteration or preservatives.',
      stat: '100% Pure'
    },
    {
      icon: Leaf,
      title: 'Fresh Selection',
      subtitle: 'Dawn Harvested Daily',
      description:
        'Crisp vegetables hand-picked every morning from local co-operative farms. Delivered fresh with natural moisture, free of chemical waxes.',
      stat: 'Farm-to-Door'
    },
    {
      icon: ShoppingBasket,
      title: 'Everyday Essentials',
      subtitle: 'All in One Delivery',
      description:
        'Everything your daily dal, tadka, sabzi, and roti require in one place. No need to visit multiple local vendors or deal with inconsistent quality.',
      stat: 'Complete Kitchen'
    },
    {
      icon: HeartHandshake,
      title: 'Customer Satisfaction',
      subtitle: 'No-Questions Guarantee',
      description:
        'Trusted by over 12,000 household kitchens across the country. Enjoy instant doorstep replacement if you are not 100% thrilled.',
      stat: '12,000+ Homes'
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#FFF9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#287A45] mb-2">
            <span>OUR UNCOMPROMISING STANDARDS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A201C] tracking-tight">
            Why Everyday Kitchens Trust VedicRasoi
          </h2>
          <p className="mt-3 text-base text-[#576359] leading-relaxed">
            We honor the timeless integrity of Indian culinary traditions through ethical sourcing,
            traditional methods, and dependable daily service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-[#287A45]/15 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#287A45]/10 text-[#287A45] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <div className="text-xs font-semibold text-[#287A45] uppercase tracking-wider mb-1">
                    {benefit.subtitle}
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#1A201C] mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-[#576359] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#1A201C]">{benefit.stat}</span>
                  <span className="text-[#287A45] font-bold">Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
