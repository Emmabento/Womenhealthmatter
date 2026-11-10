import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface GuaranteeProps {
  onOrderClick: () => void;
  priceLabel: string;
}

export const Guarantee: React.FC<GuaranteeProps> = ({ onOrderClick, priceLabel }) => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-rose-100/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFF8F8] border-2 border-rose-200/80 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left">
            {/* Badge Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-rose-700 text-white flex flex-col items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 mb-0.5" />
              <span className="font-heading font-extrabold text-[11px] uppercase tracking-wider">
                100% Risk-Free
              </span>
            </div>

            {/* Guarantee Copy */}
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1 block">
                Ironclad 30-Day Money-Back Guarantee
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 mb-2">
                Try It For A Full 30 Days. If Your Cramps Don't Ease, You Pay Nothing.
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                We are 100% confident in the natural relief techniques inside <strong className="text-stone-900">Stop The Period Struggle</strong>. 
                Read the book, apply the simple 5-day cycle habits, and test the cramp relief protocol. If you don't experience a noticeable difference in your pain, flow, and comfort, just send an email to our support team within 30 days for a prompt, no-questions-asked refund.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-stone-700">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  No complicated questions
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Fast email refund
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  You keep the bonuses
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
