import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { CurrencyOption } from '../data/ebookData';

interface StickyMobileCtaProps {
  onOrderClick: () => void;
  currency: CurrencyOption;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOrderClick, currency }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-rose-200/80 px-4 py-2.5 sm:hidden shadow-lg animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-11-01_at_5.35.49_PM_4116dfad.jpeg"
            alt="Book cover"
            className="w-8 h-10 object-contain rounded shrink-0"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="truncate">
            <p className="text-xs font-bold text-stone-900 truncate">
              Stop The Period Struggle
            </p>
            <div className="flex items-baseline gap-1.5 text-xs">
              <span className="font-extrabold text-rose-800">
                {currency.symbol}{currency.salePrice.toLocaleString()}
              </span>
              <span className="text-[10px] text-stone-400 line-through">
                {currency.symbol}{currency.regularPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onOrderClick}
          className="px-4 py-2 bg-rose-700 active:bg-rose-800 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 flex items-center gap-1 cursor-pointer"
        >
          <span>Order Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
