import { MapPin, Clock, Phone, ExternalLink, Navigation } from 'lucide-react';
import { TITANS_PHONE, TITANS_ALT_PHONE, TITANS_DIRECTIONS_URL, TITANS_PHOTOS_GALLERY_URL } from '../data/gymData';
import { audioService } from '../utils/audio';

interface LocationMapsProps {
  isLightMode?: boolean;
}

export default function LocationMaps({ isLightMode = false }: LocationMapsProps) {
  return (
    <section
      id="location"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isLightMode ? 'bg-[#f4f4f7] text-stone-900' : 'bg-[#070709] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Screenshot 9 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-8 bg-red-600"></span>
            <span className="text-red-500 font-heading tracking-[0.2em] text-xs uppercase font-bold">
              STRATEGIC LOCATION
            </span>
            <span className="h-px w-8 bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase mb-4">
            FIND TITANS GYM
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isLightMode ? 'text-stone-600' : 'text-stone-300'
            }`}
          >
            Located conveniently in the prime fitness hub. Ample dedicated vehicle parking, bike bays, and seamless transit access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card */}
          <div
            className={`lg:col-span-5 p-8 rounded-3xl flex flex-col justify-between shadow-2xl border transition-all ${
              isLightMode
                ? 'bg-white border-stone-200 shadow-stone-300/40'
                : 'bg-stone-900/70 border-stone-800'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/40 flex items-center justify-center text-red-500 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg uppercase mb-1">
                    Arena Location
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isLightMode ? 'text-stone-700' : 'text-stone-300'
                    }`}
                  >
                    2nd floor, Sri Sri Mandap building, near HDFC Bank, Gandhi Chhak, Naya Bazaar, Kataka, Odisha 753004
                  </p>
                  <span className="text-xs text-stone-500 font-mono mt-1 block">
                    GPS: 20.4535658° N, 85.9138693°
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg uppercase mb-1">
                    Operating Hours
                  </h3>
                  <p
                    className={`text-sm ${
                      isLightMode ? 'text-stone-700' : 'text-stone-300'
                    }`}
                  >
                    <strong className={isLightMode ? 'text-stone-900' : 'text-white'}>
                      Monday – Saturday:
                    </strong>{' '}
                    5:30 AM – 10:00 PM
                  </p>
                  <p
                    className={`text-sm mt-0.5 ${
                      isLightMode ? 'text-stone-700' : 'text-stone-300'
                    }`}
                  >
                    <strong className={isLightMode ? 'text-stone-900' : 'text-white'}>
                      Sunday:
                    </strong>{' '}
                    6:00 AM – 1:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg uppercase mb-1">
                    Direct Desk
                  </h3>
                  <p
                    className={`text-sm font-bold ${
                      isLightMode ? 'text-stone-900' : 'text-stone-200'
                    }`}
                  >
                    {TITANS_PHONE}
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Alt: {TITANS_ALT_PHONE}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`mt-8 pt-6 border-t flex flex-col sm:flex-row gap-3 ${
                isLightMode ? 'border-stone-200' : 'border-stone-800'
              }`}
            >
              <a
                id="btn-location-directions"
                href={TITANS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioService.playClick('power')}
                className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                id="btn-location-360"
                href={TITANS_PHOTOS_GALLERY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioService.playClick('click')}
                className={`py-3.5 px-4 rounded-xl border font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                  isLightMode
                    ? 'bg-stone-100 hover:bg-stone-200 border-stone-300 text-stone-900'
                    : 'bg-stone-800 hover:bg-stone-700 border-stone-700 text-white'
                }`}
              >
                <span>360° View</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Map view frame */}
          <div
            className={`lg:col-span-7 h-[420px] rounded-3xl overflow-hidden border shadow-2xl relative ${
              isLightMode ? 'border-stone-300' : 'border-stone-800'
            }`}
          >
            <iframe
              title="Titans Gym Google Maps Location"
              src="https://maps.google.com/maps?q=20.4535658,85.9138693&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-[105%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay badge */}
            <div className="absolute top-4 right-4 bg-stone-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-red-500/50 text-white text-xs font-bold flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span>Titans Gym Live Location</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
