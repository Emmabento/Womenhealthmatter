import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 sm:py-16 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-stone-800">
          {/* Brand & Purpose */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={getAssetUrl('assets/logo.jpg')}
                alt="Women Health Matters Logo"
                className="w-10 h-10 rounded-full object-cover bg-white p-0.5 border border-stone-700 shrink-0"
              />
              <span className="font-heading font-bold text-lg text-white">
                Women Health Matters
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm mb-4">
              Dedicated to empowering women worldwide with natural, science-backed, and practical cycle wellness education.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Mail className="w-4 h-4 text-rose-400" />
              <span>support@womenhealthmatters.org</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#problems" className="hover:text-white transition-colors">The Problem</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">What You Learn</a>
              </li>
              <li>
                <a href="#preview" className="hover:text-white transition-colors">Peek Inside</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#order" className="hover:text-white transition-colors">Order Ebook</a>
              </li>
            </ul>
          </div>

          {/* Trust & Guarantee */}
          <div className="md:col-span-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-3">
              Reader Guarantee
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-3">
              All digital purchases are protected by our 30-day money-back guarantee. If you do not experience meaningful relief, contact our support team anytime.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Risk-Free Guarantee</span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-[11px] sm:text-xs text-stone-500 space-y-3">
          <p className="leading-relaxed">
            <strong>Medical Disclaimer:</strong> The information provided in <em>Stop The Period Struggle</em> is strictly for educational and wellness purposes. It is not intended to substitute for professional medical advice, diagnosis, or treatment from a qualified gynecologist or healthcare professional. Always consult your doctor regarding any medical condition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-stone-850">
            <p>© {new Date().getFullYear()} Women Health Matters. All rights reserved.</p>
            <p className="text-stone-400">Instant PDF Download Delivered Worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
