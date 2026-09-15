import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/gymData';
import { audioService } from '../utils/audio';

interface FaqSectionProps {
  isLightMode?: boolean;
}

export default function FaqSection({ isLightMode = false }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    audioService.playClick('click');
  };

  return (
    <section
      id="faq"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isLightMode ? 'bg-[#f7f7f9] text-stone-900' : 'bg-[#09090b] text-white'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Screenshot 8 */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-8 bg-red-600"></span>
            <span className="text-red-500 font-heading tracking-[0.2em] text-xs uppercase font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="h-px w-8 bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase mb-4">
            ANSWERS & CLARIFICATIONS
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isLightMode ? 'text-stone-600' : 'text-stone-300'
            }`}
          >
            Everything you need to know about starting your fitness journey at Titans Gym Unisex Arena.
          </p>
        </div>

        {/* 7 Accordion Items matching Screenshot 8 */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  isLightMode
                    ? isOpen
                      ? 'bg-white border-red-500 shadow-md'
                      : 'bg-white border-stone-200 shadow-sm hover:border-stone-400'
                    : isOpen
                    ? 'bg-stone-900/90 border-red-600/70 shadow-lg shadow-red-950/20'
                    : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-heading font-black text-sm sm:text-base flex items-center gap-3">
                    <span className="text-xs font-mono text-red-500 font-bold">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen
                        ? 'bg-red-600 text-white rotate-180'
                        : isLightMode
                        ? 'bg-stone-100 text-stone-600'
                        : 'bg-stone-800 text-stone-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className={`px-5 sm:px-6 pb-6 text-xs sm:text-sm leading-relaxed border-t pt-4 ${
                      isLightMode
                        ? 'border-stone-100 text-stone-600'
                        : 'border-stone-800/80 text-stone-300'
                    }`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
