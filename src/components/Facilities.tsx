import { Dumbbell, Flame, Zap, ShieldCheck, Activity, ArrowRight, Sparkles } from 'lucide-react';
import { FACILITIES } from '../data/gymData';
import { audioService } from '../utils/audio';

interface FacilitiesProps {
  onOpenTour?: () => void;
  isLightMode?: boolean;
}

export default function Facilities({ onOpenTour, isLightMode = false }: FacilitiesProps) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-red-500" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-red-400" />;
      default:
        return <Dumbbell className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section
      id="facilities"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isLightMode ? 'bg-[#f7f7f9] text-stone-900' : 'bg-[#070709] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Screenshot 3 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-8 bg-red-600"></span>
            <span className="text-red-500 font-heading tracking-[0.2em] text-xs uppercase font-bold">
              WORLD-CLASS ARENA
            </span>
            <span className="h-px w-8 bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase mb-4">
            TITANS FACILITIES
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isLightMode ? 'text-stone-600' : 'text-stone-300'
            }`}
          >
            Engineered with zero cutting of corners. Every square foot of Titans Gym is designed for peak biomechanical output, safety, and focused athletic progression.
          </p>
        </div>

        {/* 8 Facility Cards with 3D Reddish Light Flash Effect matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              onMouseEnter={() => audioService.playClick('click')}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isLightMode
                  ? 'bg-white border-stone-200 hover:border-red-500 shadow-md hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]'
                  : 'bg-stone-900/60 border-stone-800 hover:border-red-600/80 shadow-xl hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]'
              }`}
            >
              {/* 3D Reddish Light Flash Effect overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-red-600/20 to-transparent pointer-events-none z-20" />

              {/* Image Preview Header */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter contrast-110"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isLightMode
                      ? 'bg-gradient-to-t from-white via-transparent to-black/20'
                      : 'bg-gradient-to-t from-[#111115] via-[#111115]/40 to-transparent'
                  }`}
                />
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-stone-700/80 shadow-md">
                  {getIcon(facility.icon)}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-heading font-black tracking-widest uppercase text-red-500 bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {facility.subtitle}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/70 border border-amber-500/40 px-2 py-0.5 rounded-full">
                    {facility.specs[0]}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-heading uppercase mb-2 group-hover:text-red-500 transition-colors">
                    {facility.title}
                  </h3>
                  <p
                    className={`text-sm mb-5 leading-relaxed ${
                      isLightMode ? 'text-stone-600' : 'text-stone-300'
                    }`}
                  >
                    {facility.description}
                  </p>
                </div>

                {/* Specs List & Tour CTA matching Screenshot 3 */}
                <div
                  className={`pt-4 border-t flex flex-col gap-3 ${
                    isLightMode ? 'border-stone-200' : 'border-stone-800/80'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {facility.specs.slice(0, 4).map((spec, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-1.5 text-xs font-medium ${
                          isLightMode ? 'text-stone-700' : 'text-stone-300'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs font-heading font-bold uppercase tracking-wider text-stone-400 group-hover:text-red-500 transition-colors">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-red-500" />
                      <span>Unisex Standard</span>
                    </span>
                    <span className="flex items-center gap-1 text-red-500 font-bold group-hover:translate-x-1 transition-transform">
                      Tour Floor <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
