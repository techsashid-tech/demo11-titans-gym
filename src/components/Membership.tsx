import { useState } from 'react';
import { Check, Star, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { DETAILED_MEMBERSHIPS, DetailedMembership } from '../data/gymData';
import { audioService } from '../utils/audio';

interface MembershipProps {
  onSelectPlan: (planName: string) => void;
  isLightMode?: boolean;
}

type DurationType = 'monthly' | 'quarterly' | 'annual';

export default function Membership({ onSelectPlan, isLightMode = false }: MembershipProps) {
  const [duration, setDuration] = useState<DurationType>('quarterly');

  const getDurationLabel = () => {
    switch (duration) {
      case 'monthly':
        return 'month';
      case 'quarterly':
        return '3 months';
      case 'annual':
        return 'year';
    }
  };

  return (
    <section
      id="membership"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isLightMode ? 'bg-[#f7f7f9] text-stone-900' : 'bg-[#060608] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Screenshot 5 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-8 bg-red-600"></span>
            <span className="text-red-500 font-heading tracking-[0.2em] text-xs uppercase font-bold">
              MEMBERSHIP TIERS
            </span>
            <span className="h-px w-8 bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase mb-4">
            CHOOSE YOUR LEVEL
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isLightMode ? 'text-stone-600' : 'text-stone-300'
            }`}
          >
            Transparent pricing with zero hidden charges. Complete unisex access, competition equipment, and certified coaches.
          </p>
        </div>

        {/* Duration Switcher matching Screenshot 5 */}
        <div className="flex items-center justify-center mb-14">
          <div
            className={`p-1.5 rounded-full flex items-center gap-1.5 border shadow-inner ${
              isLightMode
                ? 'bg-stone-200 border-stone-300'
                : 'bg-stone-900/90 border-stone-800'
            }`}
          >
            <button
              type="button"
              onClick={() => {
                audioService.playClick('click');
                setDuration('monthly');
              }}
              className={`px-5 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                duration === 'monthly'
                  ? 'bg-red-600 text-white shadow-md'
                  : isLightMode
                  ? 'text-stone-700 hover:text-black'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              MONTHLY
            </button>

            <button
              type="button"
              onClick={() => {
                audioService.playClick('click');
                setDuration('quarterly');
              }}
              className={`px-5 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                duration === 'quarterly'
                  ? 'bg-red-600 text-white shadow-md'
                  : isLightMode
                  ? 'text-stone-700 hover:text-black'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <span>3 MONTHS</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400 text-black font-black">
                POPULAR
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                audioService.playClick('click');
                setDuration('annual');
              }}
              className={`px-5 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                duration === 'annual'
                  ? 'bg-red-600 text-white shadow-md'
                  : isLightMode
                  ? 'text-stone-700 hover:text-black'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <span>ANNUAL</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500 text-white font-black">
                SAVE 35%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Tier Cards matching Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {DETAILED_MEMBERSHIPS.map((plan) => {
            const price = plan.prices[duration];
            const originalPrice = plan.originalPrices?.[duration];

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? isLightMode
                      ? 'bg-white border-2 border-red-500 shadow-[0_15px_40px_rgba(220,38,38,0.2)] md:-translate-y-2'
                      : 'bg-[#0f0f13] border-2 border-red-500 shadow-[0_0_40px_rgba(220,38,38,0.3)] md:-translate-y-2'
                    : isLightMode
                    ? 'bg-white border border-stone-200 shadow-sm hover:border-stone-400'
                    : 'bg-stone-900/50 border border-stone-800 hover:border-stone-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white font-heading font-black text-[11px] uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="font-heading font-black text-2xl uppercase">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-medium mt-1">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block matching Screenshot 5 */}
                  <div
                    className={`flex items-baseline gap-2 mb-6 pb-6 border-b ${
                      isLightMode ? 'border-stone-200' : 'border-stone-800'
                    }`}
                  >
                    <span className="text-stone-400 text-lg font-bold">₹</span>
                    <span className="font-heading font-black text-4xl sm:text-5xl">
                      {price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-stone-400 text-xs font-semibold">
                      / {getDurationLabel()}
                    </span>
                    {originalPrice && (
                      <span className="text-xs text-stone-500 line-through ml-auto">
                        ₹{originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  {/* Features List matching Screenshot 5 */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span
                          className={`text-xs sm:text-sm font-medium ${
                            isLightMode ? 'text-stone-700' : 'text-stone-300'
                          }`}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Buttons matching Screenshot 5 */}
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      audioService.playClick('power');
                      onSelectPlan(plan.name);
                    }}
                    className={`w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-600/40 hover:scale-[1.02]'
                        : isLightMode
                        ? 'bg-stone-900 hover:bg-stone-800 text-white'
                        : 'bg-stone-800 hover:bg-stone-700 text-white'
                    }`}
                  >
                    <span>CHOOSE PLAN</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      audioService.playClick('click');
                      onSelectPlan(plan.name);
                    }}
                    className={`w-full py-2 rounded-lg text-[11px] font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      isLightMode
                        ? 'text-stone-600 hover:text-stone-900'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    ENQUIRE DETAILS
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
