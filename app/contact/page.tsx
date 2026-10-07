'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle2,
  HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react';
import HeroSlideshow from '@/components/HeroSlideshow';
import { BRAND } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    travelers: '2',
    destination: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const contactSlides = [
    { src: '/images/srilanka2.jpeg', alt: 'Island coastline', location: 'Southern Coast' },
    { src: '/images/view7.jpeg', alt: 'Emerald green highlands', location: 'Central Highlands' },
    { src: '/images/view1.jpeg', alt: 'Ocean sunset', location: 'Southern Bays' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', dates: '', travelers: '2', destination: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const faqs = [
    {
      q: 'How far in advance should I contact Araliya Ceylon?',
      a: 'We recommend getting in touch 1 to 3 months before your preferred dates, especially if traveling during the dry season (December to April), to secure train tickets and boutique accommodations.'
    },
    {
      q: 'Can we adjust the itinerary after seeing a initial plan?',
      a: 'Yes, absolutely. Every itinerary we propose is a flexible draft. We happily adjust destinations, hotel choices, travel pace, and activities until it fits your exact preferences.'
    },
    {
      q: 'What is included with your private tour services?',
      a: 'Our private tours include a dedicated Sri Lankan driver-guide, air-conditioned vehicle, fuel, toll charges, airport pickup and drop-off, and reserved hotel accommodations.'
    },
    {
      q: 'What are the payment options?',
      a: 'We accept major credit cards, direct bank wire transfers, and secure online payment links. A deposit secures your travel dates, with the balance due before your trip begins.'
    }
  ];

  return (
    <div className="pb-20">

      {/* Hero Banner */}
      <HeroSlideshow slides={contactSlides} interval={5500} heightClass="h-72 sm:h-[380px]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white space-y-3">
          <span className="section-label text-yellowBrand-300">Contact Araliya Ceylon</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Plan Your Sri Lanka Trip <br />
            <span className="text-yellowBrand-400">With Our Local Team</span>
          </h1>
          <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto">
            Send us your travel dates and ideas. We&apos;ll prepare a thoughtful itinerary suggestion for you.
          </p>
        </div>
      </HeroSlideshow>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">

        {/* Contact Info Cards (Strictly Sri Lankan details) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Phone, label: 'Sri Lanka Mobile', value: BRAND.phone, sub: 'WhatsApp / Direct Call', bg: 'bg-brand-50', text: 'text-brand-700' },
            { icon: Mail, label: 'Email', value: BRAND.email, sub: 'Response within 24 hours', bg: 'bg-blue-50', text: 'text-ocean-600' },
            { icon: MapPin, label: 'Office Address', value: BRAND.address, sub: 'Colombo 03, Sri Lanka', bg: 'bg-amber-50', text: 'text-yellowBrand-600' },
            { icon: Clock, label: 'Working Hours', value: '8:00 AM – 8:00 PM (IST)', sub: 'Mon – Sun, Sri Lanka Time', bg: 'bg-emerald-50', text: 'text-emerald-700' },
          ].map(({ icon: Icon, label, value, sub, bg, text }) => (
            <div key={label} className="bg-white p-5 rounded-lg border border-cream-300 shadow-card flex items-start gap-4">
              <div className={`p-2.5 rounded-lg ${bg} ${text} shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">{label}</span>
                <span className="font-semibold text-sm text-gray-900 block mt-0.5">{value}</span>
                <span className="text-xs text-gray-500">{sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Form + Sri Lankan Office Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-cream-300 shadow-card">
            <div className="mb-6 pb-4 border-b border-cream-200">
              <h2 className="font-display text-2xl font-bold text-gray-900">Send an Inquiry to Araliya Ceylon</h2>
              <p className="text-xs text-gray-500 mt-1">
                Fill in your details below and a local travel specialist will get in touch.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-lg bg-brand-50 border border-brand-200 text-center space-y-2">
                <CheckCircle2 className="w-9 h-9 text-brand-700 mx-auto" />
                <h3 className="font-display font-bold text-lg text-gray-900">Message Received</h3>
                <p className="text-xs text-gray-600">
                  {t('form.success')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('form.name')} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ruwan Perera / Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-cream-100 border border-cream-300 rounded text-sm text-gray-900 focus:outline-none focus:border-brand-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('form.email')} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-cream-100 border border-cream-300 rounded text-sm text-gray-900 focus:outline-none focus:border-brand-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('form.phone')}
                    </label>
                    <input
                      type="tel"
                      placeholder="+94 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-cream-100 border border-cream-300 rounded text-sm text-gray-900 focus:outline-none focus:border-brand-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('form.date')}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. January 2027 / 10 Days"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-cream-100 border border-cream-300 rounded text-sm text-gray-900 focus:outline-none focus:border-brand-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('form.travellers')}
                    </label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-cream-100 border border-cream-300 rounded text-sm text-gray-900 focus:outline-none focus:border-brand-700 transition-colors cursor-pointer"
                    >
                      <option value="1">1 Solo Traveller</option>
                      <option value="2">2 Couples / Friends</option>
                      <option value="3-4">3 - 4 Family / Small Group</option>
                      <option value="5+">5+ Large Group</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('form.destination')}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ella, Sigiriya, Mirissa"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-cream-100 border border-cream-300 rounded text-sm text-gray-900 focus:outline-none focus:border-brand-700 transition-colors"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t('form.message')}
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little bit about what you'd like to experience in Sri Lanka..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-cream-100 border border-cream-300 rounded text-sm text-gray-900 focus:outline-none focus:border-brand-700 transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-3 text-sm font-semibold">
                  <Send className="w-4 h-4" /> {t('btn.send')}
                </button>
              </form>
            )}
          </div>

          {/* Sri Lankan Location Details + FAQ */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Sri Lanka Location Card */}
            <div className="bg-white rounded-lg border border-cream-300 shadow-card overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/images/colombo.jpeg" alt="Colombo Galle Road Sri Lanka" fill className="object-cover" />
                <div className="absolute inset-0 bg-brand-900/25" />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-bold text-brand-700 flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3.5 h-3.5" /> Araliya Ceylon Office, Colombo 03
                </div>
              </div>
              <div className="p-4 text-xs text-gray-600 leading-relaxed">
                <strong className="text-gray-900 block mb-1">Local Operations Base:</strong>
                42 Galle Road, Colombo 03, Sri Lanka.<br />
                Located in central Colombo along the coastal road, 45 minutes from BIA Colombo International Airport.
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-white p-5 rounded-lg border border-cream-300 shadow-card">
              <h3 className="font-display text-base font-bold text-gray-900 flex items-center gap-2 mb-4">
                <HelpCircle className="w-4 h-4 text-brand-700" /> Travel Questions
              </h3>
              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-cream-200 rounded overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-3 text-left text-xs font-semibold text-gray-800 bg-cream-100 hover:bg-cream-200 flex justify-between items-center gap-2 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx
                        ? <ChevronUp className="w-4 h-4 text-brand-700 shrink-0" />
                        : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                      }
                    </button>
                    {openFaq === idx && (
                      <div className="p-3 text-xs text-gray-600 bg-white border-t border-cream-200 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
