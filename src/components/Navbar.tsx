import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { audioService } from '../utils/audio';

interface NavbarProps {
  onOpenTrial: () => void;
  ambientActive: boolean;
  onToggleAmbient: () => void;
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({
  onOpenTrial,
  ambientActive,
  onToggleAmbient,
  isLightMode,
  onToggleTheme,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('gallery');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = [
        'home',
        'about',
        'facilities',
        'programs',
        'membership',
        'bmi',
        'gallery',
        'reviews',
        'faq',
        'contact',
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'FACILITIES', href: '#facilities' },
    { name: 'PROGRAMS', href: '#programs' },
    { name: 'MEMBERSHIP', href: '#membership' },
    { name: 'BMI TOOL', href: '#bmi' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleAudioToggle = () => {
    const state = audioService.toggleAmbient();
    setIsAudioPlaying(state);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isLightMode
            ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-md py-2.5'
            : 'bg-[#0a0a0c]/95 backdrop-blur-md border-b border-stone-800 shadow-xl py-2.5'
          : isLightMode
          ? 'bg-gradient-to-b from-white/90 to-transparent py-4'
          : 'bg-gradient-to-b from-[#08080a] to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a
          href="#home"
          onClick={() => audioService.playClick('metal')}
          className="flex items-center gap-3 group select-none"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-red-600/70 p-0.5 bg-black flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(220,38,38,0.7)] transition-all">
            <img
              src="/titans-logo.svg"
              alt="Titans Gym"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col text-left">
            <span
              className={`font-heading font-black text-lg sm:text-xl tracking-wider leading-tight flex items-center gap-1.5 ${
                isLightMode ? 'text-stone-900' : 'text-white'
              }`}
            >
              TITANS <span className="text-red-600">GYM</span>
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-red-500 font-bold uppercase">
              FIGHT FOR FITNESS
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase().replace(' tool', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => audioService.playClick('click')}
                className={`relative px-2.5 py-1.5 text-xs font-bold tracking-wider transition-colors duration-200 ${
                  isActive
                    ? isLightMode
                      ? 'text-stone-950 font-extrabold'
                      : 'text-white font-extrabold'
                    : isLightMode
                    ? 'text-stone-600 hover:text-red-600'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-red-600 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle */}
          <button
            id="btn-theme-toggle"
            type="button"
            aria-label="Toggle Light or Dark mode"
            onClick={() => {
              audioService.playClick('click');
              onToggleTheme();
            }}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              isLightMode
                ? 'border-amber-400 bg-amber-50 text-amber-600 shadow-sm'
                : 'border-stone-800 bg-stone-900/80 text-stone-300 hover:text-white hover:border-stone-700'
            }`}
            title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {isLightMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-sky-300" />}
          </button>

          {/* Audio Ambient Toggle */}
          <button
            id="btn-audio-toggle"
            type="button"
            aria-label="Toggle gym audio atmosphere"
            onClick={handleAudioToggle}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              isAudioPlaying
                ? 'border-red-500 bg-red-950/40 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                : isLightMode
                ? 'border-stone-300 bg-stone-100 text-stone-600 hover:text-black'
                : 'border-stone-800 bg-stone-900/80 text-stone-400 hover:text-white hover:border-stone-700'
            }`}
            title="Toggle Sound"
          >
            {isAudioPlaying ? (
              <Volume2 className="w-4 h-4 animate-pulse text-red-500" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Ambient Glow Sparkle Toggle */}
          <button
            id="btn-ambient-toggle"
            type="button"
            aria-label="Toggle visual arena lighting"
            onClick={() => {
              audioService.playClick('click');
              onToggleAmbient();
            }}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              ambientActive
                ? 'border-amber-500 bg-amber-950/40 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                : isLightMode
                ? 'border-stone-300 bg-stone-100 text-stone-600 hover:text-black'
                : 'border-stone-800 bg-stone-900/80 text-stone-400 hover:text-white hover:border-stone-700'
            }`}
            title="Toggle Ambient Flash Effect"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Join Titans CTA Button */}
          <button
            id="btn-nav-join"
            type="button"
            onClick={() => {
              audioService.playClick('power');
              onOpenTrial();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>JOIN TITANS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            id="btn-mobile-theme"
            type="button"
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border ${
              isLightMode ? 'bg-stone-100 border-stone-300' : 'bg-stone-900 border-stone-800'
            }`}
          >
            {isLightMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-sky-300" />}
          </button>
          <button
            id="btn-mobile-join"
            type="button"
            onClick={onOpenTrial}
            className="sm:hidden px-3 py-1.5 rounded bg-red-600 text-white font-heading text-[11px] font-bold uppercase"
          >
            JOIN
          </button>
          <button
            id="btn-mobile-menu-toggle"
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border ${
              isLightMode
                ? 'bg-stone-100 border-stone-300 text-stone-800'
                : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden border-b px-6 py-5 shadow-2xl space-y-3 ${
            isLightMode ? 'bg-white border-stone-200' : 'bg-[#0c0c0e] border-stone-800'
          }`}
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  audioService.playClick('click');
                }}
                className={`px-3 py-2 rounded-lg text-xs font-bold tracking-wider ${
                  isLightMode
                    ? 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                    : 'bg-stone-900/60 text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleAudioToggle}
                className="px-3 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-300 text-xs flex items-center gap-1.5"
              >
                {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5 text-red-500" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>Sound</span>
              </button>
              <button
                type="button"
                onClick={onToggleAmbient}
                className="px-3 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-300 text-xs flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Ambient</span>
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="px-4 py-2 rounded bg-red-600 text-white font-heading font-bold text-xs uppercase"
            >
              FREE 1-DAY PASS
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
