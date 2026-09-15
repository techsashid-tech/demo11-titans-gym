import { motion } from 'motion/react';
import { Flame, Compass, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { audioService } from '../utils/audio';
import { TITANS_DIRECTIONS_URL } from '../data/gymData';

interface HeroProps {
  onOpenTrial: () => void;
  isLightMode?: boolean;
}

export default function Hero({ onOpenTrial, isLightMode = false }: HeroProps) {
  const scrollToSection = (id: string) => {
    audioService.playClick('click');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden transition-colors duration-300 ${
        isLightMode ? 'bg-[#f5f5f7] text-stone-900' : 'bg-[#060608] text-white'
      }`}
    >
      {/* Background Dimmed Gym Atmosphere */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt="Titans Gym Arena Floor"
          className={`w-full h-full object-cover object-center filter contrast-125 transition-opacity duration-300 ${
            isLightMode ? 'opacity-15 grayscale' : 'opacity-25 grayscale'
          }`}
        />
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isLightMode
              ? 'bg-gradient-to-t from-[#f5f5f7] via-[#f5f5f7]/80 to-[#f5f5f7]/95'
              : 'bg-gradient-to-t from-[#060608] via-[#060608]/75 to-[#060608]/90'
          }`}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-red-600/15 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* 3D Floating & Hover Popout Logo Box matching Screenshot 2 */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [0, -8, 0], opacity: 1 }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.6 }
          }}
          whileHover={{
            scale: 1.08,
            rotateZ: 1.5,
            transition: { duration: 0.25 }
          }}
          className="relative group cursor-pointer mb-6"
          onClick={() => audioService.playClick('metal')}
        >
          {/* Ambient red halo glow */}
          <div className="absolute -inset-3 bg-red-600/30 rounded-3xl blur-xl group-hover:bg-red-600/50 transition-all duration-300 pointer-events-none" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-black border-2 border-red-600/90 p-2 shadow-[0_0_35px_rgba(220,38,38,0.5)] flex items-center justify-center transition-transform">
            <img
              src="/titans-logo.svg"
              alt="Titans Gym Unisex Arena"
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]"
            />
          </div>
        </motion.div>

        {/* Top Eyebrow Tag Pill: UNISEX FITNESS ARENA matching Screenshot 2 */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-1.5 rounded-full border mb-4 backdrop-blur-md shadow-sm transition-all ${
            isLightMode
              ? 'bg-red-50 border-red-200 text-red-700'
              : 'bg-red-950/40 border-red-700/60 text-red-400 shadow-[0_0_15px_rgba(220,38,38,0.25)]'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-bounce" />
          <span className="font-heading text-xs font-black tracking-[0.22em] uppercase">
            UNISEX FITNESS ARENA
          </span>
        </div>

        {/* Main Title: TITANS GYM matching Screenshot 2 */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight uppercase leading-none mb-3 flex items-center justify-center gap-3 sm:gap-4 drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          <span className={isLightMode ? 'text-stone-900' : 'text-white'}>TITANS</span>
          <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.55)]">GYM</span>
        </h1>

        {/* Tagline: "Fight for Fitness" in stylized quote serif matching Screenshot 2 */}
        <p
          className="text-2xl sm:text-3xl lg:text-4xl text-red-500 font-semibold italic mb-5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          "Fight for Fitness"
        </p>

        {/* Sub-tag pill: NO EXCUSES. ONLY RESULTS. matching Screenshot 2 */}
        <div
          className={`inline-block px-5 py-1.5 rounded-lg border text-[11px] sm:text-xs font-heading font-black tracking-[0.3em] uppercase mb-10 ${
            isLightMode
              ? 'bg-stone-200 border-stone-300 text-stone-800'
              : 'bg-black/90 border-stone-800 text-stone-200 shadow-md'
          }`}
        >
          NO EXCUSES. ONLY RESULTS.
        </div>

        {/* All Four Buttons matching Screenshot 2 */}
        <div className="flex flex-col items-center gap-3.5 w-full max-w-xl mb-16">
          {/* Row 1: JOIN TITANS, FREE TRIAL, PROGRAMS */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            {/* 1. JOIN TITANS Button */}
            <button
              id="btn-hero-join"
              type="button"
              onClick={() => {
                audioService.playClick('power');
                onOpenTrial();
              }}
              className="px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>JOIN TITANS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* 2. FREE TRIAL Button */}
            <button
              id="btn-hero-trial"
              type="button"
              onClick={() => {
                audioService.playClick('power');
                onOpenTrial();
              }}
              className={`px-5 sm:px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider border transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                isLightMode
                  ? 'bg-white border-red-400 text-stone-900 hover:border-red-600 shadow-sm'
                  : 'bg-black/80 border-red-600/70 text-white hover:border-red-500 shadow-lg'
              }`}
            >
              <Flame className="w-4 h-4 text-red-500" />
              <span>FREE TRIAL</span>
            </button>

            {/* 3. PROGRAMS Button */}
            <button
              id="btn-hero-programs"
              type="button"
              onClick={() => scrollToSection('programs')}
              className={`px-5 sm:px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider border transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                isLightMode
                  ? 'bg-white border-stone-300 text-stone-800 hover:border-stone-500'
                  : 'bg-stone-900/90 border-stone-800 text-stone-200 hover:text-white hover:border-stone-700'
              }`}
            >
              <Compass className="w-4 h-4 text-stone-400" />
              <span>PROGRAMS</span>
            </button>
          </div>

          {/* Row 2: DIRECTIONS Button (Centered) */}
          <a
            id="btn-hero-directions"
            href={TITANS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioService.playClick('metal')}
            className={`px-6 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider border transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-sm ${
              isLightMode
                ? 'bg-stone-100 hover:bg-white border-stone-300 text-stone-800 hover:border-red-500'
                : 'bg-stone-900/80 hover:bg-stone-800 border-stone-800 text-stone-300 hover:text-white hover:border-red-500/70'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>DIRECTIONS</span>
          </a>
        </div>

        {/* Stats Grid matching Screenshot 2 */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl pt-8 border-t transition-colors ${
            isLightMode ? 'border-stone-300' : 'border-stone-800/80'
          }`}
        >
          <div
            className={`p-4 rounded-xl border text-center backdrop-blur-sm transition-all ${
              isLightMode
                ? 'bg-white/90 border-stone-200 shadow-sm'
                : 'bg-stone-900/40 border-stone-800/60'
            }`}
          >
            <div className="font-heading font-black text-2xl sm:text-3xl text-red-500">
              500+
            </div>
            <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider mt-1">
              ACTIVE TITANS
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border text-center backdrop-blur-sm transition-all ${
              isLightMode
                ? 'bg-white/90 border-stone-200 shadow-sm'
                : 'bg-stone-900/40 border-stone-800/60'
            }`}
          >
            <div className={`font-heading font-black text-2xl sm:text-3xl ${isLightMode ? 'text-stone-900' : 'text-white'}`}>
              100%
            </div>
            <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider mt-1">
              UNISEX FITNESS ARENA
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border text-center backdrop-blur-sm transition-all ${
              isLightMode
                ? 'bg-white/90 border-stone-200 shadow-sm'
                : 'bg-stone-900/40 border-stone-800/60'
            }`}
          >
            <div className="font-heading font-black text-2xl sm:text-3xl text-red-500">
              10+
            </div>
            <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider mt-1">
              TRAINING PROTOCOLS
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border text-center backdrop-blur-sm transition-all ${
              isLightMode
                ? 'bg-white/90 border-stone-200 shadow-sm'
                : 'bg-stone-900/40 border-stone-800/60'
            }`}
          >
            <div className={`font-heading font-black text-2xl sm:text-3xl ${isLightMode ? 'text-stone-900' : 'text-white'}`}>
              5:30 AM
            </div>
            <p className="text-[11px] text-stone-400 font-bold uppercase tracking-wider mt-1">
              EARLY OPEN DAILY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
