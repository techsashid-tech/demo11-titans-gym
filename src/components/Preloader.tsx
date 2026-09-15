import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    // Smooth progress simulation up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 160);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 bg-[#060608] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Concentric Circular 3D Red Radar Rings matching Screenshot 1 */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Outer animated concentric rings */}
            <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-red-950/40 pointer-events-none animate-ping opacity-20 duration-1000" />
            <div className="absolute w-[290px] sm:w-[350px] h-[290px] sm:h-[350px] rounded-full border border-red-900/30 border-dashed pointer-events-none" />
            <div className="absolute w-[220px] sm:w-[270px] h-[220px] sm:h-[270px] rounded-full border border-red-600/40 shadow-[0_0_50px_rgba(220,38,38,0.3)] pointer-events-none" />
            <div className="absolute w-[180px] sm:w-[210px] h-[180px] sm:h-[210px] rounded-full bg-red-600/10 blur-xl pointer-events-none" />

            {/* Central Logo Box matching Screenshot 1 */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-black border-2 border-red-600/80 p-2 shadow-[0_0_40px_rgba(220,38,38,0.6)] flex items-center justify-center mb-8"
            >
              <img
                src="/titans-logo.svg"
                alt="Titans Gym Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(220,38,38,0.5)]"
              />
            </motion.div>

            {/* Main Title matching Screenshot 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-heading font-black text-3xl sm:text-4xl tracking-[0.22em] text-white uppercase mb-2 flex items-center justify-center gap-3 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
            >
              <span>TITANS</span>
              <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">GYM</span>
            </motion.h1>

            {/* Tagline matching Screenshot 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-xs sm:text-sm font-heading font-extrabold tracking-[0.28em] text-red-400/90 uppercase mb-10 flex items-center gap-2"
            >
              <span>FIGHT FOR FITNESS</span>
              <span className="text-red-600">•</span>
              <span>UNISEX ARENA</span>
            </motion.div>

            {/* Progress Bar & Status matching Screenshot 1 */}
            <div className="w-64 sm:w-80">
              <div className="w-full h-1.5 bg-stone-900/90 rounded-full overflow-hidden border border-stone-800 shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-red-600 via-red-500 to-amber-500 rounded-full transition-all duration-200 ease-out shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status Labels below bar matching Screenshot 1 */}
              <div className="flex items-center justify-between text-[11px] font-heading font-bold uppercase tracking-wider text-stone-400 mt-3 font-mono">
                <span className="text-stone-300">FORGING ARENA</span>
                <span className="text-red-400 font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
