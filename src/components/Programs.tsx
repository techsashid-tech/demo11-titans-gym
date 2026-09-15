import { useState } from 'react';
import { Check, ArrowRight, Flame } from 'lucide-react';
import { PROGRAM_PROTOCOLS, ProgramProtocol } from '../data/gymData';
import { audioService } from '../utils/audio';

interface ProgramsProps {
  onOpenTrial: () => void;
  isLightMode?: boolean;
}

export default function Programs({ onOpenTrial, isLightMode = false }: ProgramsProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'ALL PROTOCOLS' },
    { id: 'strength', label: 'STRENGTH & MUSCLE' },
    { id: 'cardio', label: 'CARDIO & HIIT' },
    { id: 'weight-loss', label: 'WEIGHT LOSS' },
    { id: 'coaching', label: '1-ON-1 COACHING' }
  ];

  const filteredPrograms = activeTab === 'all'
    ? PROGRAM_PROTOCOLS
    : PROGRAM_PROTOCOLS.filter((p) => p.category === activeTab);

  return (
    <section
      id="programs"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isLightMode ? 'bg-[#efeff2] text-stone-900' : 'bg-[#08080b] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Screenshot 4 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-8 bg-red-600"></span>
            <span className="text-red-500 font-heading tracking-[0.2em] text-xs uppercase font-bold">
              DISCIPLINE CREATES RESULTS
            </span>
            <span className="h-px w-8 bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase mb-4">
            TRAINING PROGRAMS
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isLightMode ? 'text-stone-600' : 'text-stone-300'
            }`}
          >
            Scientifically programmed protocols. Whether you aim to bench 150 kg or trim 15 kg of fat, our structured regimens will take you to your personal summit.
          </p>
        </div>

        {/* Filter Tabs matching Screenshot 4 */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  audioService.playClick('click');
                  setActiveTab(tab.id);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] scale-105'
                    : isLightMode
                    ? 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
                    : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Program Cards matching Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className={`group rounded-2xl overflow-hidden border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${
                isLightMode
                  ? 'bg-white border-stone-200 hover:border-red-500'
                  : 'bg-stone-900/70 border-stone-800 hover:border-red-600/70'
              }`}
            >
              {/* Image & Badge Banner */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-heading font-black tracking-wider uppercase px-2.5 py-1 rounded-md bg-red-600 text-white shadow-md">
                    {prog.badgeLevel}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-heading font-bold text-amber-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {prog.durationTag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-lg uppercase mb-2 group-hover:text-red-500 transition-colors">
                    {prog.title}
                  </h3>
                  <p
                    className={`text-xs mb-4 leading-relaxed line-clamp-3 ${
                      isLightMode ? 'text-stone-600' : 'text-stone-300'
                    }`}
                  >
                    {prog.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {prog.points.map((pt, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 text-xs ${
                          isLightMode ? 'text-stone-700' : 'text-stone-300'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button matching Screenshot 4 */}
                <div
                  className={`pt-4 border-t ${
                    isLightMode ? 'border-stone-200' : 'border-stone-800'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      audioService.playClick('power');
                      onOpenTrial();
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all hover:scale-102 active:scale-98 cursor-pointer"
                  >
                    <span>JOIN THIS PROTOCOL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
