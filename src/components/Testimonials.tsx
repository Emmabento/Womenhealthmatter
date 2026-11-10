import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/ebookData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-rose-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Real Stories · Real Relief</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900 tracking-tight mb-3">
            What Women Are Saying
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            These women struggled with intense cramps, irregular flow, and period anxiety. Here is how their cycles changed.
          </p>
        </div>

        {/* Testimonials 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FCF9F9] rounded-2xl p-6 border border-rose-100 flex flex-col justify-between hover:shadow-xs transition-shadow"
            >
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Highlight */}
                <p className="font-heading font-bold text-base text-stone-900 mb-3">
                  "{t.highlight}"
                </p>

                {/* Body Text */}
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {t.text}
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-rose-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-stone-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {t.role} · {t.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
