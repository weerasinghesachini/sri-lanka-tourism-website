'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  HelpCircle, ChevronDown, ChevronUp, MessageSquare 
} from 'lucide-react';

import HeroSlideshow from '@/components/HeroSlideshow';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const contactSlides = [
    { src: '/images/srilanka2.jpeg', alt: 'Island Warmth Palms', location: 'Sri Lanka Coastal Vistas' },
    { src: '/images/colombo1.jpeg', alt: 'Colombo Tourism HQ', location: 'Colombo City Capital' },
    { src: '/images/view1.jpeg', alt: 'Golden Sunset Ocean', location: 'Southern Sunset Bays' },
    { src: '/images/view7.jpeg', alt: 'Emerald Green Tea Valleys', location: 'Central Highlands' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', dates: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const faqs = [
    {
      q: 'How far in advance should I book my Sri Lanka trip?',
      a: 'We recommend booking 1 to 3 months in advance, especially during high season (December to April), to secure top boutique hotels and scenic train tickets.'
    },
    {
      q: 'Can I customize any of your tour packages?',
      a: 'Absolutely! Every single package on LankaVista can be 100% customized according to your preferred pace, budget, destinations, and accommodation tier.'
    },
    {
      q: 'Are airport transfers and chauffeur drivers included?',
      a: 'Yes! All our private itineraries include air-conditioned vehicles, dedicated English-speaking driver-guides, fuel, tolls, and insurance.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept major credit cards (Visa, MasterCard, Amex), international bank wire transfers, and online secure payment links.'
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner with Animated Slideshow */}
      <HeroSlideshow slides={contactSlides} interval={5000} heightClass="h-80 sm:h-[400px]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white space-y-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 backdrop-blur-md shadow-lg">
            24/7 Dedicated Support
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Let's Plan Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Unforgettable Journey</span>
          </h1>
          <p className="text-emerald-50 text-sm sm:text-lg font-medium max-w-2xl mx-auto drop-shadow-md">
            Have a question or ready to start planning? Our local travel experts are here for you 24/7.
          </p>
        </div>
      </HeroSlideshow>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-sand-200 shadow-sm flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-brand-100 text-brand-800 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Call Us</span>
              <span className="font-display font-bold text-sm text-gray-900 block mt-0.5">+94 11 234 5678</span>
              <span className="text-[11px] text-gray-500">Mon-Sun 8am - 8pm</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-sand-200 shadow-sm flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Email Us</span>
              <span className="font-display font-bold text-sm text-gray-900 block mt-0.5">hello@lankavista.com</span>
              <span className="text-[11px] text-gray-500">Quick response within 2 hours</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-sand-200 shadow-sm flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-amber-100 text-amber-800 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Visit Office</span>
              <span className="font-display font-bold text-sm text-gray-900 block mt-0.5">45 Galle Road, Colombo</span>
              <span className="text-[11px] text-gray-500">Colombo 03, Sri Lanka</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-sand-200 shadow-sm flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-teal-100 text-teal-800 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Opening Hours</span>
              <span className="font-display font-bold text-sm text-gray-900 block mt-0.5">08:00 AM - 08:00 PM</span>
              <span className="text-[11px] text-gray-500">24/7 Hotline during tour</span>
            </div>
          </div>
        </div>

        {/* Contact Form & Map Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-sand-200 shadow-sm space-y-6">
            <div className="border-b border-sand-100 pb-4">
              <h2 className="font-display text-2xl font-bold text-gray-900">Send Us a Message</h2>
              <p className="text-xs text-gray-500 mt-1">Fill out the form below and our travel expert will contact you shortly.</p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 space-y-2 text-center animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-display font-bold text-lg">Message Sent Successfully!</h3>
                <p className="text-xs text-gray-600">Thank you for reaching out to LankaVista. Our team will get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-brand-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-brand-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-brand-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Preferred Travel Dates</label>
                    <input
                      type="text"
                      placeholder="e.g. Dec 2026 (10 Days)"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className="w-full px-4 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-brand-700"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Your Message / Travel Ideas</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us where you want to go, number of travelers, budget, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-brand-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs shadow-lg hover:shadow-brand-700/30 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SendMessage</span>
                </button>
              </form>
            )}
          </div>

          {/* Map Preview & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Map Visual Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-sm p-4 space-y-3">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/colombo.jpeg"
                  alt="Map Location Galle Road Colombo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-950/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-2xl shadow-xl flex items-center space-x-2 animate-bounce">
                    <MapPin className="w-5 h-5 text-brand-700" />
                    <span className="font-display font-bold text-xs text-gray-900">LankaVista HQ, Colombo</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center font-medium">
                Conveniently located in Colombo 03 close to major hotels and diplomatic missions.
              </p>
            </div>

            {/* Quick FAQ Accordion */}
            <div className="bg-white p-6 rounded-3xl border border-sand-200 shadow-sm space-y-4">
              <h3 className="font-display text-lg font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600" /> Frequently Asked Questions
              </h3>
              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-sand-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-3 text-left font-bold text-xs text-gray-800 bg-sand-50 hover:bg-sand-100 flex justify-between items-center transition"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? <ChevronUp className="w-4 h-4 text-brand-700 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                    </button>
                    {openFaq === idx && (
                      <div className="p-3 text-xs text-gray-600 bg-white border-t border-sand-200 leading-relaxed">
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
