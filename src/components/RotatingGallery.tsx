import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X, ExternalLink, Navigation, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, TITANS_PHOTOS_GALLERY_URL } from '../data/gymData';
import { audioService } from '../utils/audio';

interface RotatingGalleryProps {
  isLightMode?: boolean;
}

export default function RotatingGallery({ isLightMode = false }: RotatingGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalItem, setModalItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const total = GALLERY_ITEMS.length;

  // Auto rotate carousel gently if not hovering
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, total]);

  const handleNext = () => {
    audioService.playClick('click');
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    audioService.playClick('click');
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const getPositionOffset = (index: number) => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return 0;
    if (diff === 1 || diff === - (total - 1)) return 1;
    if (diff === 2 || diff === - (total - 2)) return 2;
    if (diff === total - 1 || diff === -1) return -1;
    if (diff === total - 2 || diff === -2) return -2;
    return 3;
  };

  return (
    <section
      id="gallery"
      className={`relative py-24 overflow-hidden border-t border-b transition-colors duration-300 ${
        isLightMode
          ? 'bg-[#f4f4f7] text-stone-900 border-stone-200'
          : 'bg-[#08080a] text-white border-stone-800/60'
      }`}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Screenshot 2 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-10 bg-red-600"></span>
            <span className="text-red-500 font-heading tracking-[0.25em] text-xs uppercase font-bold">
              3D PERSPECTIVE ARENA
            </span>
            <span className="h-px w-10 bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-wide uppercase text-white mb-4 drop-shadow-[0_2px_15px_rgba(255,255,255,0.15)]">
            TITANS 3D GALLERY
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Immerse yourself into the Titans Gym arena floor. Click any angle to inspect our high-caliber facilities in full-screen resolution.
          </p>
        </div>

        {/* 3D Perspective Card Carousel Stage */}
        <div className="relative h-[430px] sm:h-[490px] w-full flex items-center justify-center perspective-1000 my-4">
          {GALLERY_ITEMS.map((item, index) => {
            const offset = getPositionOffset(index);
            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Compute 3D transforms based on offset
            let translateX = '0%';
            let translateZ = '0px';
            let rotateY = '0deg';
            let scale = 1;
            let opacity = 1;
            let zIndex = 30;

            if (offset === 0) {
              translateX = '0%';
              translateZ = '150px';
              rotateY = '0deg';
              scale = 1.08;
              opacity = 1;
              zIndex = 40;
            } else if (offset === 1) {
              translateX = '85%';
              translateZ = '-40px';
              rotateY = '-22deg';
              scale = 0.88;
              opacity = 0.65;
              zIndex = 20;
            } else if (offset === -1) {
              translateX = '-85%';
              translateZ = '-40px';
              rotateY = '22deg';
              scale = 0.88;
              opacity = 0.65;
              zIndex = 20;
            } else if (offset === 2) {
              translateX = '160%';
              translateZ = '-160px';
              rotateY = '-35deg';
              scale = 0.72;
              opacity = 0.3;
              zIndex = 10;
            } else if (offset === -2) {
              translateX = '-160%';
              translateZ = '-160px';
              rotateY = '35deg';
              scale = 0.72;
              opacity = 0.3;
              zIndex = 10;
            }

            return (
              <motion.div
                key={item.id}
                id={`gallery-card-${item.id}`}
                className="absolute w-[280px] sm:w-[350px] h-[380px] sm:h-[440px] cursor-pointer rounded-2xl overflow-hidden select-none transition-shadow duration-300"
                style={{
                  zIndex,
                }}
                animate={{
                  x: translateX,
                  z: translateZ,
                  rotateY,
                  scale,
                  opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                }}
                onClick={() => {
                  if (isCenter) {
                    setModalItem(item);
                  } else {
                    setActiveIndex(index);
                  }
                  audioService.playClick('metal');
                }}
              >
                <div
                  className={`w-full h-full relative rounded-2xl overflow-hidden bg-stone-900 border ${
                    isCenter
                      ? 'border-red-500 ring-2 ring-red-500/40 shadow-[0_0_35px_rgba(239,68,68,0.45)]'
                      : 'border-stone-800 shadow-2xl'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                  {/* Card Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] sm:text-xs font-heading font-black tracking-wider uppercase px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-stone-200">
                      {item.category}
                    </span>
                  </div>

                  {/* Card Bottom Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                    <div className="text-red-500 font-heading text-[10px] font-black uppercase tracking-widest mb-1">
                      {item.category}
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white tracking-wide uppercase line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 line-clamp-1 font-normal opacity-90">
                      {item.description}
                    </p>
                  </div>

                  {/* Fullscreen Expand Icon Button (Center card) */}
                  {isCenter && (
                    <button
                      id="btn-expand-gallery"
                      type="button"
                      aria-label="View Fullscreen"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalItem(item);
                        audioService.playClick('power');
                      }}
                      className="absolute bottom-4 right-4 w-9 h-9 rounded-lg bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Arrow Controls & Indicator Dots */}
        <div className="flex items-center justify-center gap-6 mt-6 mb-12">
          <button
            id="btn-gallery-prev"
            type="button"
            aria-label="Previous Slide"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-stone-900/90 border border-stone-700 hover:border-red-500 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-90 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {GALLERY_ITEMS.map((_, i) => (
              <button
                key={i}
                id={`btn-dot-${i}`}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  setActiveIndex(i);
                  audioService.playClick('click');
                }}
                className={`transition-all duration-300 cursor-pointer ${
                  activeIndex === i
                    ? 'w-7 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]'
                    : 'w-2 h-2 bg-stone-700 hover:bg-stone-500 rounded-full'
                }`}
              />
            ))}
          </div>

          <button
            id="btn-gallery-next"
            type="button"
            aria-label="Next Slide"
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-stone-900/90 border border-stone-700 hover:border-red-500 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-90 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 
          ========================================================================
          STYLISH "OPEN FULL GOOGLE PHOTOS GALLERY" BUTTON MATCHING SCREENSHOT 1
          AS REQUESTED BY USER
          ========================================================================
        */}
        <div className="relative max-w-2xl mx-auto text-center my-8">
          <a
            id="btn-open-google-photos-gallery"
            href={TITANS_PHOTOS_GALLERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioService.playClick('power')}
            className="group relative inline-flex items-center justify-center gap-4 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-[#141417] hover:bg-[#1a1a1f] border border-stone-800 hover:border-red-600/70 shadow-[0_4px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(239,68,68,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer select-none"
          >
            <span className="font-heading font-black text-sm sm:text-base md:text-lg text-white uppercase tracking-[0.06em] sm:tracking-[0.1em] group-hover:text-stone-50 transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              OPEN FULL GOOGLE PHOTOS GALLERY
            </span>
            <ExternalLink className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 stroke-[2.5] flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
          </a>
        </div>

        {/* 
           ========================================================================
          EXACT STYLISH 3D EFFECT LIGHT-PASSING "VIEW MEDIA PHOTO GALLERY" BUTTON
          AS SHOWN IN ATTACHED SCREENSHOT 2
          ========================================================================
        */}
        <div className="relative max-w-3xl mx-auto text-center mt-12">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-950/25 backdrop-blur-md mb-4 text-orange-400 text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span>OFFICIAL GOOGLE MAPS PHOTO GALLERY & 360° FLOOR TOUR</span>
          </div>

          {/* 3D Radiant Golden Light-Passing Button */}
          <div className="relative flex justify-center">
            {/* Outer golden halo glow blur */}
            <div className="absolute inset-0 max-w-2xl mx-auto rounded-3xl bg-amber-400/35 blur-2xl transform scale-95 pointer-events-none animate-pulse" />

            <a
              id="btn-view-media-gallery"
              href={TITANS_PHOTOS_GALLERY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioService.playClick('power')}
              className="group relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl sm:rounded-3xl p-[2px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] active:translate-y-0.5 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #fef08a 0%, #f59e0b 35%, #b45309 70%, #fef08a 100%)',
                boxShadow: '0 14px 45px -5px rgba(245, 158, 11, 0.5), 0 8px 18px rgba(0, 0, 0, 0.7), inset 0 2px 2px rgba(255, 255, 255, 0.9), inset 0 -3px 4px rgba(180, 83, 9, 0.7)'
              }}
            >
              {/* Inner 3D Gradient Surface */}
              <div
                className="relative w-full rounded-[22px] px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #fef9c3 0%, #fde047 18%, #f59e0b 55%, #d97706 88%, #b45309 100%)',
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -2px 3px rgba(146, 64, 14, 0.6)'
                }}
              >
                {/* Continuous Animated "Light Passing" Sheen Ray Effect */}
                <div
                  className="absolute inset-y-0 w-36 pointer-events-none animate-light-sweep"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)',
                    zIndex: 25,
                  }}
                />

                {/* Additional interactive hover highlight sheen */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200 pointer-events-none" />

                {/* Left: Dark Pebble Squircle with Google Maps Pin Icon */}
                <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#121214] border border-stone-800 flex items-center justify-center shadow-lg shadow-black/40 group-hover:border-amber-500/50 transition-colors">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-md" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      fill="#EA4335"
                    />
                    <ellipse cx="12" cy="9" rx="3" ry="3" fill="#1A73E8" />
                    <ellipse cx="12" cy="9" rx="1.5" ry="1.5" fill="#34A853" />
                  </svg>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>

                {/* Center Content Stack */}
                <div className="flex-1 text-left min-w-0 pr-1">
                  {/* Top Badges Row */}
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 text-stone-900 text-[10px] sm:text-xs font-black tracking-wide uppercase shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      OFFICIAL 360° PHOTOS
                    </span>
                    <span className="inline-flex items-center gap-1 text-stone-900 font-extrabold text-xs sm:text-sm">
                      <Sparkles className="w-3.5 h-3.5 text-stone-900 fill-stone-900" />
                      4.9★
                    </span>
                  </div>

                  {/* Main Action Headline */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <h4 className="font-heading text-base sm:text-xl md:text-2xl font-black text-stone-950 tracking-tight uppercase leading-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] group-hover:text-black">
                      VIEW GOOGLE MAP PHOTO GALLERY
                    </h4>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-stone-900 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {/* Subtitle Line */}
                  <p className="text-xs sm:text-sm font-semibold text-stone-800 tracking-tight mt-0.5 truncate">
                    Titans Gym Cuttack • Member Uploads, 360° Floor & GPS
                  </p>
                </div>

                {/* Right: Circular Navigation Arrow Badge */}
                <div className="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-stone-900/15 group-hover:bg-stone-900/25 border border-stone-900/10 flex items-center justify-center text-stone-950 transition-all duration-300 group-hover:rotate-12 group-hover:scale-105">
                  <Navigation className="w-5 h-5 fill-stone-950 rotate-45" />
                </div>
              </div>
            </a>
          </div>

          {/* Subtext description below button */}
          <p className="mt-4 text-xs sm:text-sm text-stone-400 font-medium max-w-xl mx-auto leading-relaxed">
            Click to explore 350+ verified high-resolution photos, 360° virtual gym floor views, and real member snapshots directly on Google Maps.
          </p>
        </div>
      </div>

      {/* Fullscreen Photo Modal for Gallery Cards */}
      <AnimatePresence>
        {modalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setModalItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[450px] sm:h-[550px] w-full bg-black">
                <img
                  src={modalItem.image}
                  alt={modalItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                    {modalItem.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    {modalItem.title}
                  </h3>
                  <p className="text-stone-300 text-sm mt-1">
                    {modalItem.description}
                  </p>
                </div>

                <a
                  href={TITANS_PHOTOS_GALLERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-sm tracking-wide transition-transform hover:scale-105"
                >
                  <span>Open 360° Floor Tour</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
