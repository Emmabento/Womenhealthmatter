import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { BookContents } from './components/BookContents';
import { Bonuses } from './components/Bonuses';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { OrderForm } from './components/OrderForm';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { StickyMobileCta } from './components/StickyMobileCta';
import { CURRENCIES } from './data/ebookData';

export default function App() {
  const [currencyCode, setCurrencyCode] = useState<string>('NGN');
  const [completedOrder, setCompletedOrder] = useState<{
    name: string;
    email: string;
    phone: string;
    hasAddon: boolean;
    totalAmount: string;
    reference?: string;
  } | null>(null);

  const currentCurrency = CURRENCIES[currencyCode] || CURRENCIES.NGN;

  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCurrencyChange = (code: string) => {
    if (CURRENCIES[code]) {
      setCurrencyCode(code);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F9] text-stone-900 font-sans selection:bg-rose-200 selection:text-rose-950">
      {/* 3-Zone Top Navigation Bar */}
      <TopBar
        onOrderClick={scrollToOrder}
        priceLabel={`${currentCurrency.symbol}${currentCurrency.salePrice.toLocaleString()}`}
      />

      <main className="flex-1">
        {/* Section 1: Hero with Solid Hook & 140-Page Ebook Offer */}
        <Hero
          onOrderClick={scrollToOrder}
          currency={currentCurrency}
          onCurrencyChange={handleCurrencyChange}
          availableCurrencies={CURRENCIES}
        />

        {/* Section 2: Pain Points (Empathy Bridge & Plain-English Symptoms) */}
        <PainPoints />

        {/* Section 3: What You Learn & Complete 15 Chapter Breakdown */}
        <BookContents onOrderClick={scrollToOrder} />

        {/* Section 4: Free Limited-Time Bonuses */}
        <Bonuses />

        {/* Section 5: Real Reader Testimonials & Success Stories */}
        <Testimonials />

        {/* Section 6: 30-Day Money-Back Guarantee */}
        <Guarantee
          onOrderClick={scrollToOrder}
          priceLabel={`${currentCurrency.symbol}${currentCurrency.salePrice.toLocaleString()}`}
        />

        {/* Section 7: Instant Order & Paystack Checkout Form */}
        <OrderForm
          currency={currentCurrency}
          onCurrencyChange={handleCurrencyChange}
          availableCurrencies={CURRENCIES}
          onOrderComplete={(orderData) => setCompletedOrder(orderData)}
        />

        {/* Section 8: Plain-English FAQ Accordion */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Discrete Mobile Sticky CTA */}
      <StickyMobileCta
        onOrderClick={scrollToOrder}
        currency={currentCurrency}
      />

      {/* Order Confirmation & Instant PDF Access Modal */}
      <OrderSuccessModal
        isOpen={!!completedOrder}
        onClose={() => setCompletedOrder(null)}
        orderDetails={completedOrder}
      />
    </div>
  );
}
