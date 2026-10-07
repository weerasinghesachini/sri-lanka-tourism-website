'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { useLanguage, SUPPORTED_LANGUAGES, LanguageCode } from '@/context/LanguageContext';
import Logo from '@/components/Logo';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const destinations = [
    { label: 'Ella & Tea Country',         href: '/locations?category=Mountain' },
    { label: 'Sigiriya Ancient Fortress',   href: '/locations?category=Heritage' },
    { label: 'Galle Fort & Lighthouse',     href: '/locations?category=Heritage' },
    { label: 'Mirissa Southern Bay',        href: '/locations?category=Beach' },
    { label: 'Kandy Sacred City',           href: '/locations?category=Cultural' },
    { label: 'Yala Leopard Safari',         href: '/locations?category=Wildlife' },
  ];

  const quickLinks = [
    { label: t('nav.home'),         href: '/' },
    { label: t('nav.destinations'), href: '/locations' },
    { label: t('nav.experiences'),  href: '/services' },
    { label: t('nav.about'),        href: '/about' },
    { label: t('nav.contact'),      href: '/contact' },
    { label: t('nav.planner'),      href: '/planner' },
  ];

  return (
    <footer
      className="relative overflow-hidden pt-0 pb-8"
      style={{ background: 'linear-gradient(180deg, #0C2218 0%, #082C1C 60%, #071912 100%)' }}
    >
      {/* ── Footer Top Bar: Subtle Sri Lankan Green + Yellow + White ── */}
      <div
        className="w-full py-4 mb-16 border-b border-emerald-800/40 relative z-20 shadow-sm"
        style={{
          background: 'linear-gradient(90deg, rgba(232,245,233,0.95) 0%, rgba(255,248,225,0.96) 50%, rgba(255,255,255,0.98) 100%)',
          borderTop: '2px solid rgba(52,183,120,0.35)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse shrink-0" />
            <span className="font-bold uppercase tracking-wider text-[11px] text-brand-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Explore Sri Lanka With Local Experts
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-brand-900 font-semibold" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <Link href="/" className="hover:text-gold-600 transition-colors">
              Home
            </Link>
            <span className="text-gold-500/80 font-light">|</span>
            <Link href="/locations" className="hover:text-gold-600 transition-colors">
              Destination
            </Link>
            <span className="text-gold-500/80 font-light">|</span>
            <Link href="/services" className="hover:text-gold-600 transition-colors">
              Experience
            </Link>
            <span className="text-gold-500/80 font-light">|</span>
            <Link href="/about" className="hover:text-gold-600 transition-colors">
              About
            </Link>
            <span className="text-gold-500/80 font-light">|</span>
            <Link href="/contact" className="hover:text-gold-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle tropical pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2352B788' fill-opacity='1'%3E%3Cpath d='M40 10 C30 22,20 36,22 52 C24 68,38 76,40 76 C42 76,56 68,58 52 C60 36,50 22,40 10Z' opacity='0.6'/%3E%3Ccircle cx='40' cy='40' r='2' opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Newsletter Banner ─────────────────────────────────────── */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(45,106,79,0.30)', border: '1px solid rgba(52,183,120,0.18)' }}
        >
          <div className="text-center sm:text-left">
            <p className="text-gold-300 text-xs font-bold uppercase tracking-widest mb-1">Stay Inspired</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Sri Lankan Travel Stories, Delivered
            </h3>
            <p className="text-white/60 text-sm mt-1">
              Destination ideas, seasonal travel tips and local guides — no spam, ever.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto shrink-0">
            {subscribed ? (
              <p className="text-gold-300 font-semibold text-sm py-3 px-5 bg-brand-700/40 rounded-full">
                ✓ You&apos;re subscribed!
              </p>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                />
                <button
                  type="submit"
                  className="btn-yellow text-xs px-5 py-2.5 shrink-0"
                >
                  Subscribe <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </form>
        </div>

        {/* ── Main Grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" aria-label="Araliya Ceylon — Home">
              <Logo size="md" variant="light" />
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A Sri Lankan travel company connecting visitors with local driver-guides,
              family-run boutique guesthouses, and the island&apos;s most authentic experiences.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 pt-1">
              {[
                { val: '4.9★', label: 'Rating' },
                { val: '520+', label: 'Reviews' },
                { val: '100%', label: 'Local' },
              ].map(({ val, label }) => (
                <div key={label}>
                  <span className="font-display font-bold text-gold-300 text-base block">{val}</span>
                  <span className="text-white/45 text-[11px] block">{label}</span>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook,  href: '#', label: 'Facebook' },
                { icon: Youtube,   href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(212,168,83,0.25)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                >
                  <Icon className="w-4 h-4 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-gold-300 text-xs font-bold uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-500 group-hover:bg-gold-400 transition-colors shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-3">
            <h4 className="text-gold-300 text-xs font-bold uppercase tracking-widest mb-5">Destinations</h4>
            <ul className="space-y-3">
              {destinations.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-500 group-hover:bg-gold-400 transition-colors shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Language */}
          <div className="lg:col-span-3">
            <h4 className="text-gold-300 text-xs font-bold uppercase tracking-widest mb-5">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <a href="tel:+94771234567" className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5 group-hover:text-gold-300" />
                <span>+94 77 123 4567</span>
              </a>
              <a href="mailto:hello@araliyaceylon.com" className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5 group-hover:text-gold-300" />
                <span>hello@araliyaceylon.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>42 Galle Road, Colombo 03<br />Sri Lanka</span>
              </div>
            </div>

            {/* Language Grid */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-[11px] text-white/40 font-medium mb-2.5 uppercase tracking-widest">Language</p>
              <div className="flex flex-wrap gap-1.5">
                {SUPPORTED_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code as LanguageCode)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                      language === l.code
                        ? 'bg-gold-500 text-brand-900'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                    style={language !== l.code ? { border: '1px solid rgba(255,255,255,0.12)' } : {}}
                  >
                    {l.flag} {l.nativeName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/35">
          <p>© 2026 Araliya Ceylon. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-white/25 text-[11px]">Designed with care in Sri Lanka 🇱🇰</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
