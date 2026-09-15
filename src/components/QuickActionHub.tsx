import { Phone, MessageCircle, Navigation, HeartHandshake } from 'lucide-react';
import { TITANS_PHONE, TITANS_PHONE_RAW, TITANS_WHATSAPP_URL, TITANS_DIRECTIONS_URL } from '../data/gymData';
import { audioService } from '../utils/audio';

interface QuickActionHubProps {
  onOpenConsultation: () => void;
  isLightMode?: boolean;
}

export default function QuickActionHub({ onOpenConsultation, isLightMode = false }: QuickActionHubProps) {
  return (
    <section className={`py-6 px-4 sm:px-6 lg:px-8 relative z-20 ${isLightMode ? 'bg-[#efeff2]' : 'bg-[#070709]'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: CALL NOW (Maroon/Red matching Screenshot 13) */}
          <a
            id="hub-call-now"
            href={`tel:${TITANS_PHONE_RAW}`}
            onClick={() => audioService.playClick('power')}
            className="group relative overflow-hidden rounded-2xl p-5 bg-[#8b2332] hover:bg-[#9e2738] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-black text-sm uppercase tracking-wider text-white/90">
                  CALL NOW
                </div>
                <div className="text-base font-bold text-white tracking-wide mt-0.5">
                  {TITANS_PHONE}
                </div>
              </div>
            </div>
          </a>

          {/* Card 2: WHATSAPP US (Green matching Screenshot 13) */}
          <a
            id="hub-whatsapp"
            href={TITANS_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioService.playClick('click')}
            className="group relative overflow-hidden rounded-2xl p-5 bg-[#338a4d] hover:bg-[#3a9c57] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-black text-sm uppercase tracking-wider text-white/90">
                  WHATSAPP US
                </div>
                <div className="text-base font-bold text-white tracking-wide mt-0.5">
                  Instant Reply
                </div>
              </div>
            </div>
          </a>

          {/* Card 3: GET DIRECTIONS (Royal Blue matching Screenshot 13) */}
          <a
            id="hub-directions"
            href={TITANS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioService.playClick('metal')}
            className="group relative overflow-hidden rounded-2xl p-5 bg-[#4142b3] hover:bg-[#4b4dc9] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-black text-sm uppercase tracking-wider text-white/90">
                  GET DIRECTIONS
                </div>
                <div className="text-base font-bold text-white tracking-wide mt-0.5">
                  Google Maps Pin
                </div>
              </div>
            </div>
          </a>

          {/* Card 4: CONSULTATION (Terracotta / Amber matching Screenshot 13) */}
          <button
            id="hub-consultation"
            type="button"
            onClick={() => {
              audioService.playClick('power');
              onOpenConsultation();
            }}
            className="group relative overflow-hidden rounded-2xl p-5 bg-[#b85422] hover:bg-[#cb5e27] text-white text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer w-full"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-black text-sm uppercase tracking-wider text-white/90">
                  CONSULTATION
                </div>
                <div className="text-base font-bold text-white tracking-wide mt-0.5">
                  Free Fitness Guidance
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
