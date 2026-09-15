import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Phone, MessageCircle, Mail, MapPin, ShieldCheck, Check } from 'lucide-react';
import { TITANS_PHONE, TITANS_WHATSAPP_URL } from '../data/gymData';
import { audioService } from '../utils/audio';

interface ContactSectionProps {
  onOpenPrivacy: () => void;
  isLightMode?: boolean;
}

export default function ContactSection({ onOpenPrivacy, isLightMode = false }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(true);
  const [privacyError, setPrivacyError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Strength & Hypertrophy',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreedPrivacy) {
      setPrivacyError(true);
      audioService.playClick('click');
      return;
    }
    setPrivacyError(false);
    audioService.playClick('power');
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isLightMode ? 'bg-[#efeff2] text-stone-900' : 'bg-[#08080a] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Screenshot 10 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-8 bg-red-600"></span>
            <span className="text-red-500 font-heading tracking-[0.2em] text-xs uppercase font-bold">
              CONNECT WITH COACHES
            </span>
            <span className="h-px w-8 bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase mb-4">
            CONTACT TITANS GYM
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isLightMode ? 'text-stone-600' : 'text-stone-300'
            }`}
          >
            Ready to fight for your fitness? Drop us a message, call directly, or chat on WhatsApp to schedule your trial workout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: DIRECT CHANNELS matching Screenshot 10 */}
          <div
            className={`lg:col-span-5 p-8 rounded-3xl border flex flex-col justify-between shadow-2xl transition-all ${
              isLightMode
                ? 'bg-white border-stone-200 shadow-stone-300/40'
                : 'bg-stone-900/80 border-stone-800'
            }`}
          >
            <div>
              <div className="text-xs font-heading font-black tracking-widest text-red-500 uppercase mb-2">
                DIRECT CHANNELS
              </div>
              <h3 className="font-heading font-black text-2xl uppercase mb-6">
                GET IN TOUCH IMMEDIATELY
              </h3>

              <div className="space-y-6">
                {/* Call */}
                <a
                  id="contact-channel-call"
                  href={`tel:06372256060`}
                  onClick={() => audioService.playClick('power')}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-red-600/10 border border-red-500/20 hover:border-red-500/50 transition-colors group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold uppercase text-red-500">
                      Call Directly
                    </div>
                    <div className="text-base font-black font-heading mt-0.5">
                      {TITANS_PHONE}
                    </div>
                    <div className="text-xs text-stone-400">Available 5:30 AM – 10:00 PM</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  id="contact-channel-whatsapp"
                  href={TITANS_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioService.playClick('click')}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 hover:border-emerald-500/50 transition-colors group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25d366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold uppercase text-emerald-500">
                      WhatsApp Chat
                    </div>
                    <div className="text-base font-black font-heading mt-0.5">
                      Instant Response Available
                    </div>
                    <div className="text-xs text-stone-400">Chat with coach on 06372256060</div>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-600/10 border border-amber-500/20">
                  <div className="w-11 h-11 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold uppercase text-amber-500">
                      Email Inquiries
                    </div>
                    <div className="text-sm font-bold mt-0.5">contact@titansgym.com</div>
                    <div className="text-xs text-stone-400">Corporate & trainer inquiries</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-800/40 border border-stone-700/50">
                  <div className="w-11 h-11 rounded-xl bg-stone-700 text-stone-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold uppercase text-stone-400">
                      Arena Address
                    </div>
                    <div className="text-sm font-medium mt-0.5">
                      2nd floor, Sri Sri Mandap building, near HDFC Bank, Gandhi Chhak, Naya Bazaar, Kataka, Odisha 753004
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800/80 flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Official Titans Gym Unisex Arena Desk • Zero Spam Promise</span>
            </div>
          </div>

          {/* Right Column: SEND A MESSAGE form matching Screenshot 10 */}
          <div
            className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border shadow-2xl flex flex-col justify-between transition-all ${
              isLightMode
                ? 'bg-white border-stone-200 shadow-stone-300/40'
                : 'bg-stone-900/80 border-stone-800'
            }`}
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-black text-2xl uppercase mb-2">
                  INQUIRY TRANSMITTED!
                </h3>
                <p
                  className={`text-sm max-w-md mx-auto mb-6 ${
                    isLightMode ? 'text-stone-600' : 'text-stone-300'
                  }`}
                >
                  Thank you, <span className="text-red-500 font-bold">{formData.name}</span>. Our head coach will call you at <span className="font-bold">{formData.phone}</span> to schedule your orientation and review the {formData.program} protocol.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-heading font-bold uppercase tracking-wider cursor-pointer shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2">
                  <div className="text-xs font-heading font-black tracking-widest text-red-500 uppercase mb-1">
                    TRANSMIT INQUIRY
                  </div>
                  <h3 className="font-heading font-black text-2xl uppercase">
                    SEND A MESSAGE
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sashi Shekhar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:border-red-500 ${
                        isLightMode
                          ? 'bg-stone-50 border-stone-300 text-stone-900 placeholder-stone-400'
                          : 'bg-stone-950 border-stone-800 text-white placeholder-stone-600'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase mb-2">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 06372256060"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:border-red-500 ${
                        isLightMode
                          ? 'bg-stone-50 border-stone-300 text-stone-900 placeholder-stone-400'
                          : 'bg-stone-950 border-stone-800 text-white placeholder-stone-600'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:border-red-500 ${
                        isLightMode
                          ? 'bg-stone-50 border-stone-300 text-stone-900 placeholder-stone-400'
                          : 'bg-stone-950 border-stone-800 text-white placeholder-stone-600'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase mb-2">
                      Preferred Program
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:border-red-500 cursor-pointer ${
                        isLightMode
                          ? 'bg-stone-50 border-stone-300 text-stone-900'
                          : 'bg-stone-950 border-stone-800 text-white'
                      }`}
                    >
                      <option>Strength & Hypertrophy</option>
                      <option>Cardio Engine & Conditioning</option>
                      <option>Weight Management & Fat Loss</option>
                      <option>1-on-1 Transformation Mentorship</option>
                      <option>General Unisex Floor Access</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase mb-2">
                    Fitness Goals or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your goals, target workout times, or past experience..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:border-red-500 ${
                      isLightMode
                        ? 'bg-stone-50 border-stone-300 text-stone-900 placeholder-stone-400'
                        : 'bg-stone-950 border-stone-800 text-white placeholder-stone-600'
                    }`}
                  />
                </div>

                {/* 
                  ====================================================================
                  STYLISH PRIVACY POLICY CHECKBOX AS REQUESTED BY USER
                  "ONLY NEED TO ADD PRIVACY POLICY CHECK BOX OPTION IN A STYLISH WAY."
                  ====================================================================
                */}
                <div
                  className={`p-4 rounded-2xl border transition-all ${
                    privacyError
                      ? 'border-red-500 bg-red-500/10'
                      : isLightMode
                      ? 'border-stone-200 bg-stone-50'
                      : 'border-stone-800 bg-black/40'
                  }`}
                >
                  <label className="flex items-start gap-3.5 cursor-pointer select-none">
                    {/* Custom Styled Checkbox */}
                    <div
                      id="checkbox-privacy-policy"
                      onClick={(e) => {
                        e.preventDefault();
                        audioService.playClick('click');
                        setAgreedPrivacy(!agreedPrivacy);
                        setPrivacyError(false);
                      }}
                      className={`w-5 h-5 mt-0.5 rounded-lg border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                        agreedPrivacy
                          ? 'bg-red-600 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]'
                          : isLightMode
                          ? 'border-stone-400 hover:border-red-500 bg-white'
                          : 'border-stone-600 hover:border-red-500 bg-stone-900'
                      }`}
                    >
                      {agreedPrivacy && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                    </div>

                    <div className="text-xs leading-relaxed text-stone-300">
                      <span className={isLightMode ? 'text-stone-700' : 'text-stone-300'}>
                        I agree to the{' '}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          audioService.playClick('click');
                          onOpenPrivacy();
                        }}
                        className="text-red-500 hover:text-red-400 font-bold underline cursor-pointer"
                      >
                        Privacy Policy
                      </button>
                      <span className={isLightMode ? 'text-stone-700' : 'text-stone-300'}>
                        {' '}and consent to Titans Gym contacting me regarding fitness memberships, trial sessions, and training updates via Phone and WhatsApp.
                      </span>
                    </div>
                  </label>

                  {privacyError && (
                    <div className="text-red-500 text-[11px] font-bold mt-2 pl-8">
                      * Please accept the Privacy Policy to proceed with your inquiry.
                    </div>
                  )}
                </div>

                {/* Submit Button matching Screenshot 10 */}
                <button
                  id="btn-submit-contact"
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT INQUIRY ✈</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
