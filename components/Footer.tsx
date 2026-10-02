'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-brand-950 text-gray-300 pt-16 pb-8 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-900/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 flex items-center justify-center shadow-md">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                Lanka<span className="text-emerald-400">Vista</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Discover the soul of Sri Lanka. From golden beaches and mist-shrouded tea mountains to ancient kingdoms and wild safaris, we craft memories that last a lifetime.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-brand-900 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-brand-900 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-brand-900 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-brand-900 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide border-l-2 border-emerald-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-emerald-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition">Our Services</Link></li>
              <li><Link href="/locations" className="hover:text-emerald-400 transition">Destinations</Link></li>
              <li><Link href="/quiz" className="hover:text-emerald-400 transition">Travel Quiz</Link></li>
              <li><Link href="/planner" className="hover:text-emerald-400 transition">Trip Planner</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide border-l-2 border-emerald-500 pl-2">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/locations" className="hover:text-emerald-400 transition">Sigiriya Rock Fortress</Link></li>
              <li><Link href="/locations" className="hover:text-emerald-400 transition">Ella Nine Arch Bridge</Link></li>
              <li><Link href="/locations" className="hover:text-emerald-400 transition">Mirissa Whale Watching</Link></li>
              <li><Link href="/locations" className="hover:text-emerald-400 transition">Kandy Temple of Tooth</Link></li>
              <li><Link href="/locations" className="hover:text-emerald-400 transition">Galle Dutch Fort</Link></li>
              <li><Link href="/locations" className="hover:text-emerald-400 transition">Yala Leopard Safari</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide border-l-2 border-emerald-500 pl-2">
              Stay Inspired
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Subscribe for exclusive Sri Lanka travel deals, secret itineraries & tips.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-900/50 border border-emerald-500 text-emerald-300 rounded-xl text-xs font-medium">
                ✓ Thank you for subscribing! Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-brand-900 border border-brand-800 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
            <div className="mt-4 pt-3 border-t border-brand-900 space-y-1.5 text-xs text-gray-400">
              <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> +94 11 234 5678</p>
              <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-emerald-400" /> hello@lankavista.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} LankaVista Travel & Tours Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Sri Lanka Tourism
          </p>
        </div>
      </div>
    </footer>
  );
}
