import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { audioService } from '../utils/audio';

interface BmiCalculatorProps {
  onOpenTrial: () => void;
  isLightMode?: boolean;
}

export default function BmiCalculator({ onOpenTrial, isLightMode = false }: BmiCalculatorProps) {
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(75);
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBmi = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const val = weight / (heightInMeters * heightInMeters);
      setBmi(parseFloat(val.toFixed(1)));
      audioService.playClick('click');
    }
  };

  const getBmiStatus = (val: number) => {
    if (val < 18.5)
      return {
        category: 'Underweight',
        color: 'text-sky-500',
        advice: 'Focus on progressive caloric surplus, heavy compound lifts, and hypertrophy programming.',
      };
    if (val < 24.9)
      return {
        category: 'Healthy Weight',
        color: 'text-emerald-500',
        advice: 'Optimal baseline! Focus on athletic strength, lean muscle development, and conditioning.',
      };
    if (val < 29.9)
      return {
        category: 'Overweight',
        color: 'text-amber-500',
        advice: 'Recommended: High-octane conditioning, calorie control, and structured resistance training.',
      };
    return {
      category: 'Obesity Class',
      color: 'text-red-500',
      advice: 'Prioritize guided coach mentorship, cardiovascular health, joint-friendly strength routines.',
    };
  };

  const status = bmi ? getBmiStatus(bmi) : null;

  return (
    <section
      id="bmi"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isLightMode ? 'bg-[#f4f4f7] text-stone-900' : 'bg-[#08080a] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-red-600"></span>
              <span className="text-red-500 font-heading tracking-[0.2em] text-xs uppercase font-bold">
                INSTANT HEALTH ASSESSMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight uppercase mb-4">
              CALCULATE YOUR BODY MASS INDEX
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed mb-6 ${
                isLightMode ? 'text-stone-600' : 'text-stone-300'
              }`}
            >
              Knowing your baseline is the first step toward peak performance. Test your metrics and let our trainers sculpt a personalized transformation plan.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div
                className={`p-3 rounded-xl border ${
                  isLightMode
                    ? 'bg-white border-stone-200 text-stone-800'
                    : 'bg-stone-900 border-stone-800 text-stone-300'
                }`}
              >
                <div className="font-bold mb-1">Below 18.5</div>
                <div className="text-sky-500 font-semibold">Underweight</div>
              </div>
              <div
                className={`p-3 rounded-xl border ${
                  isLightMode
                    ? 'bg-white border-stone-200 text-stone-800'
                    : 'bg-stone-900 border-stone-800 text-stone-300'
                }`}
              >
                <div className="font-bold mb-1">18.5 – 24.9</div>
                <div className="text-emerald-500 font-semibold">Normal / Athletic</div>
              </div>
              <div
                className={`p-3 rounded-xl border ${
                  isLightMode
                    ? 'bg-white border-stone-200 text-stone-800'
                    : 'bg-stone-900 border-stone-800 text-stone-300'
                }`}
              >
                <div className="font-bold mb-1">25.0 – 29.9</div>
                <div className="text-amber-500 font-semibold">Overweight</div>
              </div>
              <div
                className={`p-3 rounded-xl border ${
                  isLightMode
                    ? 'bg-white border-stone-200 text-stone-800'
                    : 'bg-stone-900 border-stone-800 text-stone-300'
                }`}
              >
                <div className="font-bold mb-1">30.0 & Above</div>
                <div className="text-red-500 font-semibold">Obese</div>
              </div>
            </div>
          </div>

          {/* Right interactive slider tool */}
          <div
            className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border shadow-2xl ${
              isLightMode
                ? 'bg-white border-stone-200 shadow-stone-300/40'
                : 'bg-stone-900/80 border-stone-800'
            }`}
          >
            <div className="space-y-6 mb-8">
              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-heading font-black text-xs uppercase tracking-wider">
                    Height (cm)
                  </label>
                  <span className="font-mono font-bold text-red-500 text-base">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-mono">
                  <span>120 cm</span>
                  <span>220 cm</span>
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-heading font-black text-xs uppercase tracking-wider">
                    Weight (kg)
                  </label>
                  <span className="font-mono font-bold text-red-500 text-base">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-mono">
                  <span>35 kg</span>
                  <span>160 kg</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={calculateBmi}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              CALCULATE MY METRICS
            </button>

            {/* Results Display */}
            {bmi !== null && status && (
              <div
                className={`mt-6 p-5 rounded-2xl border animate-in fade-in duration-300 ${
                  isLightMode
                    ? 'bg-stone-50 border-stone-200'
                    : 'bg-black/60 border-stone-700/60'
                }`}
              >
                <div
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b ${
                    isLightMode ? 'border-stone-200' : 'border-stone-800'
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-heading uppercase tracking-widest text-stone-400">
                      Calculated BMI Index
                    </div>
                    <div className="font-heading font-black text-4xl mt-0.5">
                      {bmi}{' '}
                      <span className={`text-base font-bold ml-2 ${status.color}`}>
                        ({status.category})
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      audioService.playClick('power');
                      onOpenTrial();
                    }}
                    className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Get Custom Coach Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p
                  className={`text-xs mt-3 font-medium leading-relaxed ${
                    isLightMode ? 'text-stone-700' : 'text-stone-300'
                  }`}
                >
                  <span className="text-red-500 font-bold">Trainer Recommendation: </span>
                  {status.advice}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
