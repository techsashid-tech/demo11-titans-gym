import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Lock, Eye, Bell, CheckCircle } from 'lucide-react';
import { audioService } from '../utils/audio';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLightMode?: boolean;
}

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
  isLightMode = false,
}: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 sm:p-8 ${
            isLightMode
              ? 'bg-white text-stone-900 border-stone-300'
              : 'bg-[#0f0f13] text-white border-stone-800'
          }`}
        >
          {/* Close button */}
          <button
            type="button"
            aria-label="Close Privacy Policy"
            onClick={() => {
              audioService.playClick('click');
              onClose();
            }}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-stone-800/60 hover:bg-red-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-heading font-black tracking-widest text-red-500 uppercase">
                LEGAL & DATA COMPLIANCE
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight">
                TITANS GYM PRIVACY POLICY
              </h3>
            </div>
          </div>

          <div
            className={`text-xs sm:text-sm leading-relaxed space-y-4 pt-2 border-t ${
              isLightMode ? 'border-stone-200 text-stone-700' : 'border-stone-800 text-stone-300'
            }`}
          >
            <p>
              At <strong>Titans Gym Unisex Fitness Arena</strong>, we honor and protect the trust placed in us by our members, prospective athletes, and website visitors. This Privacy Policy details our operational data handling and security protocols.
            </p>

            {/* Section 1 */}
            <div
              className={`p-4 rounded-2xl border ${
                isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-stone-900/50 border-stone-800'
              }`}
            >
              <div className="flex items-center gap-2 font-heading font-black text-sm uppercase text-red-500 mb-1">
                <Lock className="w-4 h-4" />
                <span>1. Data We Collect</span>
              </div>
              <p className="text-xs leading-relaxed">
                When you submit inquiry forms, book trials, or register for memberships, we collect your name, phone number, email address, chosen fitness objective, and health/fitness metrics. We never sell or distribute your private contact details to external brokers.
              </p>
            </div>

            {/* Section 2 */}
            <div
              className={`p-4 rounded-2xl border ${
                isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-stone-900/50 border-stone-800'
              }`}
            >
              <div className="flex items-center gap-2 font-heading font-black text-sm uppercase text-amber-500 mb-1">
                <Bell className="w-4 h-4" />
                <span>2. WhatsApp & Phone Communications</span>
              </div>
              <p className="text-xs leading-relaxed">
                By ticking the consent checkbox in our contact or registration forms, you authorize Titans Gym trainers and desk managers to contact you on WhatsApp and phone regarding trial scheduling, membership renewals, schedule updates, and trainer availability.
              </p>
            </div>

            {/* Section 3 */}
            <div
              className={`p-4 rounded-2xl border ${
                isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-stone-900/50 border-stone-800'
              }`}
            >
              <div className="flex items-center gap-2 font-heading font-black text-sm uppercase text-emerald-500 mb-1">
                <Eye className="w-4 h-4" />
                <span>3. Unisex Floor Safety & Privacy</span>
              </div>
              <p className="text-xs leading-relaxed">
                Titans Gym operates 24/7 CCTV surveillance across gym workout areas purely for personal safety and theft prevention. CCTV cameras are strictly forbidden and never installed in private restrooms, locker rooms, or changing cabins.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 pt-2">
              <CheckCircle className="w-4 h-4" />
              <span>Titans Gym Zero Spam & Zero Data Reselling Commitment</span>
            </div>

            <div className="text-[11px] text-stone-500 pt-2">
              Last updated: September 2026 • Titans Gym Unisex Fitness Arena, Cuttack. For inquiries, contact <a href="mailto:contact@titansgym.com" className="text-red-400 underline">contact@titansgym.com</a>.
            </div>
          </div>

          {/* Close button at bottom */}
          <div className="mt-6 pt-4 border-t border-stone-800 flex justify-end">
            <button
              type="button"
              onClick={() => {
                audioService.playClick('power');
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase tracking-wider cursor-pointer shadow-lg"
            >
              I Understand & Accept
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
