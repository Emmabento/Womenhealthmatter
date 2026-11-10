import React, { useState } from 'react';
import { BookOpen, Check, ArrowRight, Layers, FileText } from 'lucide-react';
import { CHAPTER_CATEGORIES, CORE_SOLUTIONS } from '../data/ebookData';
import { getAssetUrl } from '../utils/assetUrl';

interface BookContentsProps {
  onOrderClick: () => void;
  onPreviewClick?: () => void;
}

export const BookContents: React.FC<BookContentsProps> = ({ onOrderClick, onPreviewClick }) => {
  const [activePart, setActivePart] = useState<number | 'all'>('all');

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-[#FCF8F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
            Inside The 140-Page Official Ebook
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900 tracking-tight mb-4">
            Complete 15-Chapter Guide & Breakdown
          </h2>
          <p className="text-base text-stone-600">
            Written in kind, simple English with honest facts, Nigerian meal plans, safe herbal profiles, and printable trackers.
          </p>
        </div>

        {/* 3 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {CORE_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-rose-100 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-2 block">
                  {sol.tag}
                </span>
                <h3 className="font-heading font-bold text-xl text-stone-900 mb-2">
                  {sol.title}
                </h3>
                <p className="font-medium text-sm text-rose-800 mb-3">
                  {sol.headline}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {sol.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-50 flex items-center gap-2 text-xs font-semibold text-rose-700">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Doctor-reviewed & culturally grounded</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chapters Section with Filter Tabs */}
        <div className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-rose-100 mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-stone-900 flex items-center gap-2.5">
                <BookOpen className="w-6 h-6 text-rose-700" />
                <span>All 15 Chapters at a Glance</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Explore each part of the 140-page guide: from biology and meals to herbal safety and clinic preparation.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
              <button
                onClick={() => setActivePart('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activePart === 'all'
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All 15
              </button>
              {CHAPTER_CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePart(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activePart === idx
                      ? 'bg-rose-700 text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Part {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Visual Companion / Promo graphic */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border border-rose-100 shadow-md max-w-xs sticky top-24">
                <img
                  src={getAssetUrl('assets/aistudio/6fb86d66-9f4e-4470-9ea7-b08517075f86_6e50eb9f.jpg')}
                  alt="Period Relief and Flow Guide"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-white border-t border-rose-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-900 mb-1">
                    <FileText className="w-4 h-4 text-rose-700" />
                    <span>Official 140-Page Ebook</span>
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Includes 3-Month Tracker & 7-Day Nigerian Meal Plan with recipes.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapters List */}
            <div className="lg:col-span-8 space-y-6">
              {CHAPTER_CATEGORIES.filter((_, idx) => activePart === 'all' || activePart === idx).map(
                (cat, catIdx) => (
                  <div key={catIdx} className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-50/70 px-3 py-1.5 rounded-lg">
                      <Layers className="w-3.5 h-3.5 text-rose-700" />
                      <span>{cat.category}</span>
                    </div>

                    <div className="space-y-3">
                      {cat.chapters.map((ch) => (
                        <div
                          key={ch.number}
                          className="p-4 rounded-xl bg-[#FFF9F9] border border-rose-100/70 hover:border-rose-300 transition-colors flex items-start gap-3.5"
                        >
                          <span className="font-heading font-extrabold text-sm text-rose-700 bg-white px-2 py-1 rounded-md border border-rose-100 shrink-0 mt-0.5">
                            Ch {ch.number}
                          </span>
                          <div>
                            <h4 className="font-heading font-bold text-base text-stone-900 mb-1">
                              {ch.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                              {ch.summary}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOrderClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-rose-700 hover:bg-rose-800 text-white font-bold text-sm rounded-xl transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  <span>Download Complete 140-Page PDF</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
