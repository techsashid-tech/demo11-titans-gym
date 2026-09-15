import { Star, ShieldCheck, ExternalLink } from 'lucide-react';
import { REVIEWS, TITANS_REVIEWS_URL } from '../data/gymData';
import { audioService } from '../utils/audio';

interface ReviewsProps {
  isLightMode?: boolean;
}

export default function Reviews({ isLightMode = false }: ReviewsProps) {
  return (
    <section
      id="reviews"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isLightMode ? 'bg-[#f4f4f7] text-stone-900' : 'bg-[#070709] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-8 bg-red-600"></span>
            <span className="text-red-500 font-heading tracking-[0.2em] text-xs uppercase font-bold">
              VERIFIED COMMUNITY
            </span>
            <span className="h-px w-8 bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase mb-4">
            MEMBER TESTIMONIALS
          </h2>
          <p
            className={`text-sm sm:text-base ${
              isLightMode ? 'text-stone-600' : 'text-stone-300'
            }`}
          >
            Real feedback from dedicated athletes, lifters, and fitness newcomers training daily at Titans Gym.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isLightMode
                  ? 'bg-white border-stone-200 hover:border-red-400'
                  : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-500">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Member</span>
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed mb-6 italic ${
                    isLightMode ? 'text-stone-700' : 'text-stone-200'
                  }`}
                >
                  "{rev.comment}"
                </p>
              </div>

              <div
                className={`flex items-center gap-3 pt-4 border-t ${
                  isLightMode ? 'border-stone-200' : 'border-stone-800/80'
                }`}
              >
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-red-500/50"
                />
                <div>
                  <h4 className="font-heading font-black text-sm">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-stone-400">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Review Section of Google Maps Link Button */}
        <div className="text-center">
          <a
            id="btn-reviews-google-maps"
            href={TITANS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioService.playClick('power')}
            className={`group inline-flex items-center justify-center gap-3.5 px-8 sm:px-12 py-4 sm:py-4.5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer select-none shadow-xl ${
              isLightMode
                ? 'bg-white hover:bg-stone-50 border-stone-300 hover:border-red-500 shadow-stone-300/50'
                : 'bg-[#141417] hover:bg-[#1a1a1f] border-stone-800 hover:border-red-600/70 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            }`}
          >
            <span
              className={`font-heading font-black text-sm sm:text-base md:text-lg uppercase tracking-[0.06em] sm:tracking-[0.1em] transition-colors ${
                isLightMode ? 'text-stone-900 group-hover:text-black' : 'text-white group-hover:text-stone-50'
              }`}
            >
              READ ALL REVIEWS ON GOOGLE MAPS
            </span>
            <ExternalLink className="w-5 h-5 text-red-500 stroke-[2.5] flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
          </a>
        </div>
      </div>
    </section>
  );
}
