'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Phone, Globe, ChevronDown } from 'lucide-react';
import { useLanguage, SUPPORTED_LANGUAGES, LanguageCode } from '@/context/LanguageContext';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname  = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const langRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t('nav.home'),         href: '/' },
    { name: t('nav.destinations'), href: '/locations' },
    { name: t('nav.experiences'),  href: '/services' },
    { name: 'Trip Quiz',           href: '/quiz' },
    { name: t('nav.about'),        href: '/about' },
    { name: t('nav.contact'),      href: '/contact' },
  ];

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];
  const isHome = pathname === '/';

  return (
    <>
      {/* ── Top Info Bar ─────────────────────────────────────────── */}
      <div className="bg-brand-900 text-white text-xs py-2 hidden md:block border-b border-brand-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3 h-3 text-gold-400" />
              +94 77 123 4567
            </span>
            <span className="text-white/55">hello@araliyaceylon.com</span>
            <span className="text-gold-300 font-semibold">
              ★ 4.9 · Sri Lanka Local Travel Specialist
            </span>
          </div>

          {/* Language selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 text-white/80 hover:text-white px-2.5 py-1 rounded-full bg-brand-800 border border-brand-700 transition-colors text-xs"
              aria-label="Select language"
            >
              <Globe className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-semibold">{currentLangObj.flag} {currentLangObj.nativeName}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-xl shadow-2xl border border-cream-300 py-1.5 z-50 animate-fade-in">
                <div className="px-3 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 mb-1">
                  Select Language
                </div>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code as LanguageCode); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                      language === lang.code
                        ? 'bg-brand-50 text-brand-700 font-bold'
                        : 'hover:bg-cream-100 text-gray-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                    </span>
                    <span className="text-[10px] text-gray-400">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Navbar ─────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 transition-all duration-400 ${
          isScrolled || !isHome
            ? 'bg-white/97 backdrop-blur-md border-b border-cream-300 shadow-nav'
            : 'bg-white/95 backdrop-blur-sm border-b border-cream-200/80'
        }`}
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="group shrink-0" aria-label="Araliya Ceylon — Home">
              <Logo size="md" variant="dark" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 rounded-full text-[0.82rem] font-600 font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-brand-700 bg-brand-50'
                        : 'text-gray-600 hover:text-brand-700 hover:bg-cream-200/80'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/planner"
                className="btn-yellow text-xs px-5 py-2.5"
              >
                {t('nav.planner')}
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full text-gray-700 hover:text-brand-700 hover:bg-cream-200 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen
                ? <X className="w-5 h-5" />
                : <Menu className="w-5 h-5" />
              }
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer ────────────────────────────────────── */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] z-50 bg-white/98 backdrop-blur-lg px-5 pt-6 pb-10 overflow-y-auto"
               style={{ borderTop: '1px solid #E8DFD0' }}>

            {/* Language strip */}
            <div className="mb-6 pb-4 border-b border-cream-300 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-brand-600" /> Language:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SUPPORTED_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code as LanguageCode)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                      language === l.code
                        ? 'bg-brand-700 text-white'
                        : 'bg-cream-200 text-gray-700 border border-cream-300 hover:border-brand-400'
                    }`}
                  >
                    {l.flag} {l.nativeName}
                  </button>
                ))}
              </div>
            </div>

            {/* Links */}
            <nav className="space-y-1 mb-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-brand-700 text-white'
                        : 'text-gray-700 hover:bg-cream-200 hover:text-brand-700'
                    }`}
                  >
                    {link.name}
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-gold-300' : 'text-gray-400'}`} />
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="space-y-3">
              <Link
                href="/planner"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-yellow w-full text-center text-sm py-3.5 justify-center"
              >
                {t('nav.planner')}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-outline w-full text-center text-sm py-3.5 justify-center"
              >
                {t('nav.contact')}
              </Link>
            </div>

            {/* Contact */}
            <div className="mt-6 pt-5 border-t border-cream-200 space-y-1.5 text-xs text-gray-500">
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-brand-600" /> +94 77 123 4567</p>
              <p className="flex items-center gap-2">✉️ hello@araliyaceylon.com</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
