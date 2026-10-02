'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X, ChevronRight, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/locations' },
    { name: 'Travel Quiz', href: '/quiz' },
    { name: 'Trip Planner', href: '/planner' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Banner (Desktop & Tablet) */}
      <div className="bg-brand-950 text-white text-xs py-2 px-4 border-b border-emerald-900/50 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-emerald-200">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-brand-500" /> +94 11 234 5678</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-500" /> Colombo, Sri Lanka</span>
            <span className="text-amber-400 font-medium flex items-center gap-1">★ 4.9 Rating (500+ Verified Reviews)</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/quiz" className="flex items-center gap-1 text-emerald-300 hover:text-white transition">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Take Travel Quiz
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-900/95 backdrop-blur-md text-white shadow-lg border-b border-brand-800'
            : 'bg-brand-900/90 text-white border-b border-brand-800/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Lanka<span className="text-emerald-400">Vista</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-semibold -mt-1">
                  Discover Sri Lanka
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-emerald-300 bg-brand-800/60 font-semibold border-b-2 border-emerald-400'
                        : 'text-gray-200 hover:text-white hover:bg-brand-800/40'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="/planner"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 text-white font-semibold text-sm shadow-md hover:shadow-emerald-900/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-1.5"
              >
                <span>Plan Your Trip</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <Link
                href="/planner"
                className="sm:hidden px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-semibold"
              >
                Plan Trip
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-brand-800 text-gray-200 hover:text-white hover:bg-brand-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-950 border-t border-brand-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-brand-800 text-emerald-300 font-semibold border-l-4 border-emerald-400'
                      : 'text-gray-300 hover:bg-brand-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-brand-800/80">
              <Link
                href="/planner"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base shadow-md"
              >
                Plan Your Trip Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
