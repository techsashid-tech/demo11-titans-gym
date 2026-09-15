import { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { TITANS_PHONE_RAW, TITANS_WHATSAPP_URL } from '../data/gymData';
import { audioService } from '../utils/audio';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    audioService.playClick('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Vertical Social Hub matching Screenshot 12 (Right side) */}
      <div className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-2 select-none">
        {/* Instagram */}
        <a
          id="float-instagram"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredSocial('instagram')}
          onMouseLeave={() => setHoveredSocial(null)}
          className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
          }}
        >
          <Instagram className="w-4 h-4" />
          <span className="font-heading font-black text-[11px] uppercase tracking-wider hidden sm:inline">
            INSTAGRAM
          </span>
        </a>

        {/* Facebook */}
        <div className="relative">
          {hoveredSocial === 'facebook' && (
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-stone-900 border border-stone-700 text-stone-200 text-[11px] whitespace-nowrap shadow-lg z-50">
              Follow us on Facebook
            </div>
          )}
          <a
            id="float-facebook"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredSocial('facebook')}
            onMouseLeave={() => setHoveredSocial(null)}
            className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#5b8bf7] hover:bg-[#4d7ef5] text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Facebook className="w-4 h-4" />
            <span className="font-heading font-black text-[11px] uppercase tracking-wider hidden sm:inline">
              FACEBOOK
            </span>
          </a>
        </div>

        {/* X (Twitter) */}
        <a
          id="float-twitter"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#1b212f] hover:bg-[#252e42] border border-stone-700/60 text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Custom X Logo Icon */}
          <span className="font-bold text-sm leading-none">𝕏</span>
          <span className="font-heading font-black text-[11px] uppercase tracking-wider hidden sm:inline">
            X (TWITTER)
          </span>
        </a>

        {/* YouTube */}
        <a
          id="float-youtube"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#c4302b] hover:bg-[#d6342e] text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Youtube className="w-4 h-4" />
          <span className="font-heading font-black text-[11px] uppercase tracking-wider hidden sm:inline">
            YOUTUBE
          </span>
        </a>
      </div>

      {/* Floating Bottom-Right Corner Quick Actions matching Screenshot 12 */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5 select-none">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            id="btn-scroll-top"
            type="button"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-stone-900/90 border border-stone-700 hover:border-red-500 text-stone-300 hover:text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-90 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Chat Pill matching Screenshot 12 */}
        <a
          id="btn-floating-whatsapp-pill"
          href={TITANS_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => audioService.playClick('click')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#52c16a] hover:bg-[#48b05e] text-white font-bold text-xs shadow-[0_4px_16px_rgba(82,193,106,0.4)] transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Chat</span>
        </a>

        {/* Call Store Pill matching Screenshot 12 */}
        <a
          id="btn-floating-call-pill"
          href={`tel:${TITANS_PHONE_RAW}`}
          onClick={() => audioService.playClick('power')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#b2394c] hover:bg-[#c24256] text-white font-bold text-xs shadow-[0_4px_16px_rgba(178,57,76,0.4)] transition-all hover:scale-105 active:scale-95"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Store</span>
        </a>
      </div>
    </>
  );
}
