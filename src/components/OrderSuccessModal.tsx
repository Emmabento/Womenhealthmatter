import React from 'react';
import { CheckCircle2, Download, BookOpen, X, FileText, Check, ShieldCheck } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    name: string;
    email: string;
    phone: string;
    hasAddon: boolean;
    totalAmount: string;
    reference?: string;
  } | null;
  onOpenReader?: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  onClose,
  orderDetails,
}) => {
  if (!isOpen || !orderDetails) return null;

  const pdfUrl = getAssetUrl('assets/aistudio/Stop-the-Period-Struggle_16dadbf9.pdf');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-rose-100 overflow-hidden text-center relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 w-8 h-8 rounded-lg hover:bg-stone-100 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full mb-2 inline-block">
            Order Confirmed & Access Granted
          </span>

          <h3 className="font-heading font-extrabold text-2xl text-stone-900 mb-2">
            Thank You, {orderDetails.name}!
          </h3>

          <p className="text-sm text-stone-600 mb-6">
            Your official 140-page copy of <strong className="text-stone-900">Stop The Period Struggle</strong> is ready for instant download. A confirmation receipt has also been dispatched to{' '}
            <span className="text-rose-800 font-semibold">{orderDetails.email}</span>.
          </p>

          {orderDetails.reference && (
            <div className="mb-4 inline-flex items-center gap-1.5 text-xs text-stone-500 bg-stone-100 px-3 py-1 rounded-full font-mono">
              <span>Paystack Ref:</span>
              <strong className="text-stone-800">{orderDetails.reference}</strong>
            </div>
          )}

          {/* Download Action Box */}
          <div className="bg-[#FFF8F8] border border-rose-200 rounded-2xl p-5 mb-6 text-left shadow-2xs">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-8 h-8 text-rose-700 shrink-0" />
              <div>
                <p className="font-heading font-bold text-sm text-stone-900">
                  Stop The Period Struggle (Complete 140-Page PDF)
                </p>
                <p className="text-xs text-stone-500">
                  Includes All 15 Chapters, 7-Day Nigerian Meal Plan & 3-Month Tracker
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <a
                href={pdfUrl}
                download="Stop-The-Period-Struggle.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-rose-700 hover:bg-rose-800 text-white font-bold text-sm rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Official PDF Ebook</span>
              </a>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-3 px-4 bg-white hover:bg-rose-50 text-stone-800 font-semibold text-xs sm:text-sm rounded-xl border border-stone-200 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-rose-700" />
                <span>Open in Browser</span>
              </a>
            </div>
          </div>

          {/* Value inclusions check */}
          <div className="text-xs text-stone-600 text-left space-y-1.5 mb-5 bg-stone-50 p-3.5 rounded-xl border border-stone-100">
            <div className="flex items-center gap-2 text-stone-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Everything unlocked in your download:</span>
            </div>
            <p className="pl-6 text-stone-600">• Chapter 1 to 15 (Full unabridged ebook)</p>
            <p className="pl-6 text-stone-600">• 7-Day Nigerian Meal Plan with Moi Moi & Ugu recipes</p>
            <p className="pl-6 text-stone-600">• Printable 3-Month Daily Cycle & Pain Tracker</p>
            <p className="pl-6 text-stone-600">• 10-Question Clinic Visit Checklist</p>
          </div>

          {/* Quick instructions */}
          <div className="text-xs text-stone-500 text-left space-y-1.5 border-t border-rose-100/70 pt-4">
            <p className="font-semibold text-stone-700">How to view your ebook on your phone:</p>
            <p>• <strong>iPhone / iPad:</strong> Tap download and save directly into Apple Books or Files.</p>
            <p>• <strong>Android:</strong> File downloads directly to your device Files or Google Drive.</p>
            <p>• <strong>PC / Laptop:</strong> Double-click the downloaded PDF to open in any browser or PDF reader.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
