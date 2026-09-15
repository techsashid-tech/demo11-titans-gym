import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Shield } from 'lucide-react';
import { TITANS_PHONE, TITANS_ALT_PHONE, TITANS_PHOTOS_GALLERY_URL } from '../data/gymData';
import { audioService } from '../utils/audio';

interface FooterProps {
  onOpenPrivacy: () => void;
  isLightMode?: boolean;
}

export default function Footer({ onOpenPrivacy, isLightMode = false }: FooterProps) {
  const scrollTo = (id: string) => {
    audioService.playClick('click');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 py-16 select-none ${
        isLightMode
          ? 'bg-[#e9e9ed] border-stone-300 text-stone-600'
          : 'bg-[#050506] border-stone-800/80 text-stone-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Bio matching Screenshot 11 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl border-2 border-red-600 p-1 bg-black shadow-lg">
                <img
                  src="/titans-logo.svg"
                  alt="Titans Gym"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-heading font-black text-xl tracking-wider ${
                    isLightMode ? 'text-stone-900' : 'text-white'
                  }`}
                >
                  TITANS <span className="text-red-600">GYM</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-red-500 font-bold uppercase">
                  UNISEX FITNESS ARENA
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed mb-5">
              Titans Gym is a premier unisex fitness arena in Cuttack, designed for dedicated lifters, athletes, and wellness seekers with world-class facilities and zero excuses.
            </p>

            {/* Social Icons matching Screenshot 11 */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-stone-900/80 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-500 text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-stone-900/80 hover:bg-[#1877f2] text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="w-9 h-9 rounded-xl bg-stone-900/80 hover:bg-black text-white flex items-center justify-center transition-all shadow-sm hover:scale-105 font-bold text-xs"
              >
                𝕏
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-stone-900/80 hover:bg-[#ff0000] text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: ARENA DIRECTORY matching Screenshot 11 */}
          <div>
            <h4
              className={`font-heading font-black text-xs uppercase tracking-widest mb-4 ${
                isLightMode ? 'text-stone-900' : 'text-white'
              }`}
            >
              ARENA DIRECTORY
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('home')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  About Titans Gym
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('facilities')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Titans Facilities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('programs')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Training Protocols
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('membership')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Membership Tiers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('gallery')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Titans 3D Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('bmi')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  BMI Diagnostic Tool
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: OPERATING HOURS matching Screenshot 11 */}
          <div>
            <h4
              className={`font-heading font-black text-xs uppercase tracking-widest mb-4 ${
                isLightMode ? 'text-stone-900' : 'text-white'
              }`}
            >
              OPERATING HOURS
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-red-500 block">Monday – Saturday</span>
                <span className={isLightMode ? 'text-stone-800' : 'text-stone-300'}>
                  5:30 AM – 10:00 PM (Full Floor)
                </span>
              </div>
              <div>
                <span className="font-bold text-amber-500 block">Sunday Batches</span>
                <span className={isLightMode ? 'text-stone-800' : 'text-stone-300'}>
                  6:00 AM – 1:00 PM (Special Conditioning)
                </span>
              </div>
              <div className="pt-2 border-t border-stone-800/40 text-[11px] text-stone-500">
                100% Unisex Batches Active All Day with Dedicated Female & Male Dressing Suites.
              </div>
            </div>
          </div>

          {/* Column 3: DIRECT DESK matching Screenshot 11 */}
          <div>
            <h4
              className={`font-heading font-black text-xs uppercase tracking-widest mb-4 ${
                isLightMode ? 'text-stone-900' : 'text-white'
              }`}
            >
              DIRECT DESK
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">{TITANS_PHONE}</span>
                  <span className="text-[11px] text-stone-500">Alt: {TITANS_ALT_PHONE}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>2nd floor, Sri Sri Mandap building, near HDFC Bank, Gandhi Chhak, Naya Bazaar, Kataka, Odisha 753004</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>contact@titansgym.com</span>
              </div>

              <div className="pt-2">
                <a
                  href={TITANS_PHOTOS_GALLERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 font-bold underline text-xs inline-flex items-center gap-1"
                >
                  <span>Google Maps Virtual Floor Tour ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching Screenshot 11 & User Requirement */}
        <div
          className={`pt-8 border-t text-xs flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isLightMode ? 'border-stone-300 text-stone-600' : 'border-stone-900 text-stone-500'
          }`}
        >
          <div>
            <p>© 2026 TITANS GYM. All Rights Reserved. Unisex Fitness Arena.</p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Crafted & Designed by S K DAS • 07798977519
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => {
                audioService.playClick('click');
                onOpenPrivacy();
              }}
              className="hover:text-red-500 transition-colors underline font-medium cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => {
                audioService.playClick('click');
                onOpenPrivacy();
              }}
              className="hover:text-red-500 transition-colors underline font-medium cursor-pointer"
            >
              Terms of Arena Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
