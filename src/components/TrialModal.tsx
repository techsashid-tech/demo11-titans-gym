import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Flame, Calendar, Clock, User, Phone } from 'lucide-react';
import { audioService } from '../utils/audio';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export default function TrialModal({ isOpen, onClose, selectedPlan }: TrialModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    slot: 'Evening (5:00 PM - 8:00 PM)',
    plan: selectedPlan || '1-Day Free Trial Pass'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    audioService.playClick('power');
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative max-w-md w-full bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient red highlight */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

            <button
              type="button"
              aria-label="Close"
              onClick={handleClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-black text-2xl text-white uppercase mb-2">
                  PASS CONFIRMED!
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Welcome aboard, <strong className="text-white">{formData.name}</strong>! Your Titans Gym pass has been reserved for <span className="text-red-400 font-bold">{formData.date}</span> during <span className="text-white">{formData.slot}</span>.
                </p>

                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs text-stone-400 mb-6 text-left">
                  <div className="font-bold text-white mb-1">Entry Instructions:</div>
                  <div>• Bring clean workout shoes and a personal towel.</div>
                  <div>• Show this confirmation or your mobile number at the reception desk.</div>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                  <span className="text-red-400 font-heading text-xs font-black tracking-widest uppercase">
                    TITANS GYM PASS
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl text-white uppercase mb-1">
                  CLAIM YOUR PASS
                </h3>
                <p className="text-xs text-stone-400 mb-6">
                  Experience our machines, atmosphere, and guidance for zero charge.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase text-stone-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-red-500" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase text-stone-300 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-red-500" />
                      <span>Mobile Number</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-heading font-bold uppercase text-stone-300 mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-red-500" />
                        <span>Date</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-heading font-bold uppercase text-stone-300 mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-red-500" />
                        <span>Batch Slot</span>
                      </label>
                      <select
                        value={formData.slot}
                        onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                        className="w-full px-2.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-red-500"
                      >
                        <option>Morning (6:00 - 9:00 AM)</option>
                        <option>Mid-Day (10:00 AM - 1:00 PM)</option>
                        <option>Evening (5:00 - 8:00 PM)</option>
                        <option>Night (8:00 - 10:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all cursor-pointer"
                    >
                      CONFIRM MY PASS
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
