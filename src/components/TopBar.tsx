import React from 'react';
import { BookOpen } from 'lucide-react';

interface TopBarProps {
  onOrderClick: () => void;
  priceLabel: string;
}

export const TopBar: React.FC<TopBarProps> = ({ onOrderClick, priceLabel }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FCF9F9]/95 backdrop-blur-md border-b border-rose-100/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Wordmark with Official Logo */}
        <a href="#" className="flex items-center gap-2.5 group whitespace-nowrap shrink-0">
          <img
            src="/assets/logo.jpg"
            alt="Women Health Matters Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-xs border border-rose-200/80 group-hover:scale-105 transition-transform"
          />
          <span className="font-heading font-bold text-lg sm:text-xl text-stone-900 tracking-tight">
            Women Health Matters
          </span>
        </a>

        {/* Zone 2: Clean single-line links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#problems" className="hover:text-rose-700 transition-colors whitespace-nowrap">
            The Problem
          </a>
          <a href="#solutions" className="hover:text-rose-700 transition-colors whitespace-nowrap">
            What You Learn
          </a>
          <a href="#preview" className="hover:text-rose-700 transition-colors whitespace-nowrap">
            Peek Inside
          </a>
          <a href="#reviews" className="hover:text-rose-700 transition-colors whitespace-nowrap">
            Reader Reviews
          </a>
          <a href="#faq" className="hover:text-rose-700 transition-colors whitespace-nowrap">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOrderClick}
            className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-rose-700 hover:bg-rose-800 rounded-lg shadow-sm hover:shadow transition-all duration-150 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            Get Ebook · {priceLabel}
          </button>
        </div>
      </div>
    </header>
  );
};
