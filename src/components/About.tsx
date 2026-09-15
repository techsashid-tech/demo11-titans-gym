import { Shield, CheckCircle2 } from 'lucide-react';
import { TITANS_PHOTOS_GALLERY_URL } from '../data/gymData';
import { audioService } from '../utils/audio';

interface AboutProps {
  isLightMode?: boolean;
}

export default function About({ isLightMode = false }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isLightMode ? 'bg-[#f7f7f9] text-stone-900' : 'bg-[#09090b] text-white'
      }`}
    >
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3D Photo Zoom In Effect */}
          <div className="relative group cursor-pointer" onClick={() => audioService.playClick('click')}>
            {/* Outer 3D Reddish Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-red-600/40 via-red-900/20 to-amber-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-black transform transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:rotate-1">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
                alt="Titans Gym Interior 3D View"
                className="w-full h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              {/* 3D Sheen Light sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              {/* Badge on Photo */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-red-500/50 text-white text-[11px] font-heading font-black tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>CUTTACK ARENA FLOOR</span>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div
              className={`absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 p-5 rounded-2xl shadow-2xl backdrop-blur-md max-w-[260px] border transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] ${
                isLightMode
                  ? 'bg-white/95 border-red-500 text-stone-900 shadow-stone-300'
                  : 'bg-stone-900/95 border-red-600/50 text-white'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500 flex items-center justify-center text-red-500">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-black text-2xl text-red-500">#1</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider">
                    RATED GYM IN CUTTACK
                  </div>
                </div>
              </div>
              <p
                className={`text-xs ${
                  isLightMode ? 'text-stone-600' : 'text-stone-300'
                }`}
              >
                Verified on Google Maps with over 350+ five-star member reviews and 360° virtual tours.
              </p>
            </div>
          </div>

          {/* Right Column: Mission & Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-red-600"></span>
              <span className="text-red-500 font-heading tracking-[0.2em] text-xs uppercase font-bold">
                THE TITAN PEDIGREE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight uppercase mb-6 leading-tight">
              MORE THAN A GYM. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                AN ARENA FOR TRANSFORMATION.
              </span>
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed mb-6 ${
                isLightMode ? 'text-stone-700' : 'text-stone-300'
              }`}
            >
              Founded on the belief that peak physical condition demands both superior equipment and an electric training environment, Titans Gym Cuttack brings world-class bodybuilding, powerlifting, and functional fitness together under one massive roof.
            </p>

            <div className="space-y-3.5 mb-8">
              {[
                'Full suite of plate-loaded and selectorized biomechanical machines',
                'Custom competition powerlifting platforms with calibrated plates',
                'Dedicated certified coaches emphasizing injury prevention & progressive overload',
                'Hygienic steam sauna, clean recovery showers, and air-conditioned arena floors',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span
                    className={`text-sm font-medium ${
                      isLightMode ? 'text-stone-700' : 'text-stone-300'
                    }`}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={TITANS_PHOTOS_GALLERY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioService.playClick('power')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105"
              >
                View On Google Maps ↗
              </a>
              <a
                href="#facilities"
                onClick={() => audioService.playClick('click')}
                className="px-6 py-3.5 rounded-xl bg-red-600/15 hover:bg-red-600/25 border border-red-600/40 text-red-500 font-heading text-xs font-bold uppercase tracking-wider transition-all hover:scale-105"
              >
                Explore Facilities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
