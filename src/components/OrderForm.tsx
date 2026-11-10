import React, { useState } from 'react';
import { ShieldCheck, Lock, Check, Download, ArrowRight, CreditCard, ExternalLink, HelpCircle } from 'lucide-react';
import { CurrencyOption } from '../data/ebookData';
import { initiatePaystackPayment } from '../utils/paystack';
import { getAssetUrl } from '../utils/assetUrl';

interface OrderFormProps {
  currency: CurrencyOption;
  onCurrencyChange: (code: string) => void;
  availableCurrencies: Record<string, CurrencyOption>;
  onOrderComplete: (orderData: {
    name: string;
    email: string;
    phone: string;
    hasAddon: boolean;
    totalAmount: string;
    reference?: string;
  }) => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  currency,
  onCurrencyChange,
  availableCurrencies,
  onOrderComplete,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [includeAddon, setIncludeAddon] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [showConfigHelp, setShowConfigHelp] = useState(false);

  const total = includeAddon
    ? Number((currency.salePrice + currency.addonPrice).toFixed(2))
    : currency.salePrice;

  const paystackKey =
    import.meta.env.VITE_PAYSTACK_PUBLIC_KEY ||
    'pk_live_bc4b8fb437f4a2fd65c8d526542010bf2db24aea';
  const isKeyConfigured = paystackKey && !paystackKey.includes('xxxx') && paystackKey.startsWith('pk_');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!email.trim() || !email.includes('@')) {
      newErrors.email = 'Please enter a valid email address for delivery';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    initiatePaystackPayment({
      email,
      amount: total,
      customerName: name,
      phone,
      currencyCode: currency.code,
      onSuccess: (reference) => {
        setIsSubmitting(false);
        onOrderComplete({
          name,
          email,
          phone,
          hasAddon: includeAddon,
          totalAmount: `${currency.symbol}${total.toLocaleString()}`,
          reference,
        });
      },
      onCancel: () => {
        setIsSubmitting(false);
      },
      onError: (err) => {
        setIsSubmitting(false);
        alert(err || 'Payment was cancelled or could not be completed.');
      },
    });
  };

  return (
    <section id="order" className="py-16 sm:py-24 bg-gradient-to-b from-[#FCF8F8] to-[#F9F3F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
            <Lock className="w-3.5 h-3.5 text-rose-700" />
            <span>Paystack Secure Checkout</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900 tracking-tight mb-3">
            Get Instant Access For Just {currency.symbol}{currency.salePrice.toLocaleString()}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Instant digital download (140-page PDF). Pay safely via Paystack using Card, Bank Transfer, USSD, or OPay.
          </p>
        </div>

        {/* The Checkout Card */}
        <div className="bg-white rounded-3xl border border-rose-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Order Summary & What's Included */}
            <div className="lg:col-span-5 bg-[#FCF8F8] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-rose-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Order Summary
                  </span>
                  <select
                    value={currency.code}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    className="bg-white border border-stone-200 text-stone-700 rounded-md px-2 py-1 text-xs font-medium focus:outline-rose-600 cursor-pointer"
                    aria-label="Currency selector"
                  >
                    {Object.values(availableCurrencies).map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Ebook Item */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-rose-100 mb-5">
                  <img
                    src={getAssetUrl('assets/aistudio/WhatsApp_Image_2026-11-01_at_5.35.49_PM_4116dfad.jpeg')}
                    alt="Ebook Thumbnail"
                    className="w-14 h-18 object-contain rounded-md drop-shadow-xs shrink-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-stone-900">
                      Stop The Period Struggle
                    </h4>
                    <p className="text-xs text-stone-500">
                      Official 140-Page PDF Ebook
                    </p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-bold text-rose-800 text-sm">
                        {currency.symbol}{currency.salePrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-stone-400 line-through">
                        {currency.symbol}{currency.regularPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Included List */}
                <p className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2.5">
                  Everything You Get Instantly:
                </p>
                <ul className="space-y-2 text-xs text-stone-600 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Complete 140-Page PDF Ebook (All 15 Chapters)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>7-Day Nigerian Meal Plan with Moi Moi & Ugu Recipes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Printable 3-Month Period, Flow & Pain Tracker</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Clinic Visit Checklist with 10 Doctor Questions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant Digital PDF Access on Any Phone or PC</span>
                  </li>
                </ul>
              </div>

              {/* Guarantee Box */}
              <div className="p-3.5 bg-rose-50/70 border border-rose-100 rounded-xl flex items-start gap-2.5 text-xs text-stone-700">
                <ShieldCheck className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-rose-900 block">30-Day Money-Back Guarantee</span>
                  <span>Try the simple methods. If you don't get relief, you get 100% of your money back.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Checkout Form with Paystack */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Adebayo"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 focus:outline-rose-600 focus:border-rose-600 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-600 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address * (For Instant Delivery)
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 focus:outline-rose-600 focus:border-rose-600 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                  )}
                  <p className="text-[11px] text-stone-500 mt-1">
                    Your official 140-page PDF download link is sent here immediately.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 801 234 5678"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-200 focus:outline-rose-600 focus:border-rose-600 transition-colors"
                  />
                </div>

                {/* Optional Order Bump */}
                <div
                  onClick={() => setIncludeAddon(!includeAddon)}
                  className={`p-3.5 rounded-xl border transition-colors cursor-pointer flex items-start gap-3 ${
                    includeAddon
                      ? 'bg-rose-50/80 border-rose-300'
                      : 'bg-stone-50 border-stone-200 hover:border-rose-200'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={includeAddon}
                    onChange={(e) => setIncludeAddon(e.target.checked)}
                    className="mt-1 w-4 h-4 text-rose-600 rounded border-stone-300 focus:ring-rose-500 cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900 block">
                      Add VIP Audio Walkthrough & Private Recipe Guide (+{currency.symbol}{currency.addonPrice.toLocaleString()})
                    </span>
                    <span className="text-stone-600">
                      Listen on the go while doing chores or resting in bed, with guided acupressure step-by-step instructions.
                    </span>
                  </div>
                </div>

                {/* Total Price Display */}
                <div className="pt-2 flex items-center justify-between text-stone-800 border-t border-stone-100">
                  <span className="text-sm font-medium">Total Amount:</span>
                  <span className="text-2xl font-extrabold font-heading text-rose-800">
                    {currency.symbol}{total.toLocaleString()}
                  </span>
                </div>

                {/* Paystack Payment Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#00C3F7] hover:bg-[#00ACDC] active:bg-[#0096C0] active:scale-98 disabled:opacity-60 text-slate-950 font-extrabold text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      Connecting to Paystack...
                    </span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-slate-950" />
                      <span>Pay with Paystack · {currency.symbol}{total.toLocaleString()}</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>
              </form>

              {/* Payment badges & Paystack Logo info */}
              <div className="mt-5 pt-3 border-t border-stone-100 text-center">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Secured by Paystack Payment Gateway</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-stone-500">
                  <span>Debit Card (Mastercard / Visa / Verve)</span>
                  <span>·</span>
                  <span>Bank Transfer</span>
                  <span>·</span>
                  <span>USSD</span>
                  <span>·</span>
                  <span>OPay / Kuda</span>
                </div>

                {/* Paystack Public Key Helper */}
                <div className="mt-4 pt-3 border-t border-dashed border-stone-200">
                  <button
                    type="button"
                    onClick={() => setShowConfigHelp(!showConfigHelp)}
                    className="inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>How to connect your live Paystack key</span>
                  </button>

                  {showConfigHelp && (
                    <div className="mt-2 text-left bg-stone-50 p-3 rounded-lg border border-stone-200 text-xs text-stone-700 space-y-1.5">
                      <p className="font-semibold text-stone-900">
                        To receive payments into your Nigerian bank account:
                      </p>
                      <p>
                        1. Log in to your <a href="https://dashboard.paystack.com/#/settings/developer" target="_blank" rel="noreferrer" className="text-rose-700 underline font-medium">Paystack Dashboard</a>.
                      </p>
                      <p>
                        2. Go to <strong>Settings → API Keys & Webhooks</strong>.
                      </p>
                      <p>
                        3. Copy your <strong>Public Key</strong> (starts with <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">pk_live_...</code> or <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">pk_test_...</code>).
                      </p>
                      <p>
                        4. Set it in your project's <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">.env</code> file:
                        <br />
                        <code className="text-stone-900 font-mono text-[11px] bg-white border border-stone-300 p-1 rounded block mt-1">
                          VITE_PAYSTACK_PUBLIC_KEY="pk_live_your_key_here"
                        </code>
                      </p>
                      <p className="text-[11px] text-stone-500 pt-1">
                        Currently: {isKeyConfigured ? '✅ Live key connected!' : '⚡ Test mode active (orders simulate success & download the PDF for instant previewing).'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
