import React from 'react';
import { ShieldCheck, Download, ArrowRight, CheckCircle2, Sparkles, Eye } from 'lucide-react';
import { CurrencyOption } from '../data/ebookData';
import { getAssetUrl } from '../utils/assetUrl';

interface HeroProps {
  onOrderClick: () => void;
  onPreviewClick: () => void;
  currency: CurrencyOption;
  onCurrencyChange: (code: string) => void;
  availableCurrencies: Record<string, CurrencyOption>;
}

export const Hero: React.FC<HeroProps> = ({
  onOrderClick,
  onPreviewClick,
  currency,
  onCurrencyChange,
  availableCurrencies,
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-[#FCF7F7] via-[#FFF9F9] to-[#FCF9F9]">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Solid Hook, Plain Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-rose-800 mb-3">
              <span className="w-2 h-2 rounded-full bg-rose-600 inline-block" />
              <span>Official Women's Health & Cycle Guide</span>
              <span aria-hidden="true">·</span>
              <span>Instant Digital Ebook</span>
            </div>

            {/* Hook Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-950 tracking-tight leading-[1.15] mb-5">
              Do You Suffer From{' '}
              <span className="text-rose-700 underline decoration-rose-300 underline-offset-4 decoration-2">
                Painful Menstruation
              </span>{' '}
              Every Single Month?
            </h1>

            {/* Straight to the point subheadline */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 max-w-xl">
              You do not have to endure unbearable cramps, stay curled in bed, or swallow strong painkillers every 4 hours. 
              Discover simple, natural, and proven methods to ease pain, fix irregular flow, and end period odor for good.
            </p>

            {/* 3 Core Solutions (Straight from the ad creative and PDF chapters) */}
            <div className="w-full bg-white/80 border border-rose-100 rounded-2xl p-4 sm:p-5 mb-7 shadow-xs">
              <p className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-3">
                15 Practical Chapters Covering:
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-stone-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900 font-semibold">1. Painful Menstruation:</strong>{' '}
                    Safe heat therapy, stretching, slow breathing, and research-backed ginger tea to relieve cramps without harmful side effects.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900 font-semibold">2. Irregular & Heavy Flow:</strong>{' '}
                    How to accurately count your cycle, everyday Nigerian iron-rich foods, and identifying red flags that need medical attention.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-900 font-semibold">3. Herbal Safety & Myth Busting:</strong>{' '}
                    Honest scientific evidence on moringa, zobo, avoiding dangerous "agbo", and debunking 10 harmful period myths.
                  </span>
                </li>
              </ul>
            </div>

            {/* Pricing Anchor & Currency Selector */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading text-rose-800">
                  {currency.symbol}{currency.salePrice.toLocaleString()}
                </span>
                <span className="text-base sm:text-lg text-stone-400 line-through">
                  {currency.symbol}{currency.regularPrice.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">
                  SAVE 60% TODAY
                </span>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1 text-xs text-stone-500 ml-auto">
                <span className="hidden sm:inline">Currency:</span>
                <select
                  value={currency.code}
                  onChange={(e) => onCurrencyChange(e.target.value)}
                  className="bg-white border border-stone-200 text-stone-700 rounded-md px-2 py-1 text-xs font-medium focus:outline-rose-600 cursor-pointer"
                  aria-label="Select currency"
                >
                  {Object.values(availableCurrencies).map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* CTA */}
            <div className="w-full sm:w-auto mb-4">
              <button
                onClick={onOrderClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-rose-700 hover:bg-rose-800 text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
              >
                <span>Get Instant Access Now · {currency.symbol}{currency.salePrice.toLocaleString()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-500 pt-2 border-t border-rose-100/60 w-full">
              <span className="inline-flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5 text-rose-600" />
                Instant PDF Download to Phone/PC
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                30-Day Money-Back Guarantee
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Over 4,200 Copies Read</span>
            </div>
          </div>

          {/* Right Column: 3D Book Mockup with Interactive Details */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group w-full max-w-[360px] sm:max-w-[400px]">
              {/* Backing decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-400/20 to-amber-300/20 rounded-3xl blur-xl transition-all group-hover:blur-2xl" />

              {/* Main Book Mockup Container */}
              <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-rose-100/60 overflow-hidden">
                <img
                  src={getAssetUrl('assets/aistudio/WhatsApp_Image_2026-11-01_at_5.35.49_PM_4116dfad.jpeg')}
                  alt="Stop The Period Struggle Book Mockup"
                  className="w-full h-auto rounded-xl object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Book Details */}
                <div className="mt-3 flex items-center justify-between px-1">
                  <div>
                    <p className="font-heading font-bold text-stone-900 text-sm">
                      Stop The Period Struggle
                    </p>
                    <p className="text-xs text-stone-500">
                      Official 140-Page PDF Ebook
                    </p>
                  </div>
                  <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md">
                    {currency.symbol}{currency.salePrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Social Proof Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white border border-stone-200/80 rounded-xl py-2 px-3.5 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    {'★'.repeat(5)}
                    <span className="text-stone-700 font-bold ml-1 text-xs">4.9 / 5</span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-medium">
                    Verified by 1,850+ Women
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
