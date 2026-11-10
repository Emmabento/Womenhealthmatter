import React from 'react';
import { Gift, CheckCircle } from 'lucide-react';
import { BONUSES } from '../data/ebookData';

export const Bonuses: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FCF8F8] border-b border-rose-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
            <Gift className="w-4 h-4 text-rose-600" />
            <span>Limited-Time Offer</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900 tracking-tight mb-3">
            Free Bonuses Included With Your Order Today
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            When you purchase <span className="font-semibold text-stone-900">Stop The Period Struggle</span> today, you receive these 3 practical tools completely free.
          </p>
        </div>

        {/* 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BONUSES.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-rose-100 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-rose-800 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded">
                    FREE TODAY
                  </span>
                  <span className="text-xs font-medium text-stone-400 line-through">
                    {bonus.value}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-stone-900 mb-2">
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {bonus.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-rose-50 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant PDF bonus in your download link</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
