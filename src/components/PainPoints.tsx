import React from 'react';
import { AlertCircle, ArrowDown } from 'lucide-react';
import { PAIN_POINTS } from '../data/ebookData';

export const PainPoints: React.FC = () => {
  return (
    <section id="problems" className="py-14 sm:py-20 bg-white border-y border-rose-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
          <AlertCircle className="w-4 h-4 text-rose-600" />
          <span>Real Talk About Your Monthly Cycle</span>
        </div>
        
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900 tracking-tight mb-4">
          Does This Sound Like You Every 28 Days?
        </h2>
        
        <p className="text-base text-stone-600 max-w-2xl mx-auto mb-10 sm:mb-12">
          If you check even one of these boxes, you are not alone — but you do not have to accept this as normal anymore.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-10">
          {PAIN_POINTS.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-[#FCF8F8] border border-rose-100/70 hover:border-rose-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-800 font-bold text-xs flex items-center justify-center shrink-0">
                  0{index + 1}
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-stone-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The Reassurance Box */}
        <div className="max-w-3xl mx-auto bg-stone-900 text-white p-6 sm:p-8 rounded-2xl text-center shadow-md">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-rose-300 mb-2">
            Severe Pain & Irregularity Are NOT Normal.
          </h3>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
            Pain is your body's alarm system alerting you to high inflammatory prostaglandins and hormonal distress. 
            When you give your body the exact nutrients, pressure relief, and hygiene care it needs, your period becomes quiet, smooth, and predictable.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-200">
            <span>Here is exactly how this book solves it for you</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
