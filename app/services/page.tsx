'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass, Hotel, Plane, MapPin, Car, Sliders, Zap, Headphones,
  ArrowRight, Star, Clock
} from 'lucide-react';
import { SERVICES, POPULAR_PACKAGES } from '@/lib/data';
import HeroSlideshow from '@/components/HeroSlideshow';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();

  const servicesSlides = [
    { src: '/images/view5.jpeg', alt: 'Highland tea bungalow', location: 'Highland Heritage Stays' },
    { src: '/images/view3.jpeg', alt: 'Private guided excursion', location: 'Private Guided Journeys' },
    { src: '/images/honeymoon resort1.jpeg', alt: 'Southern coastal villa', location: 'Southern Coast Stays' },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-5 h-5 text-brand-700" />;
      case 'Hotel': return <Hotel className="w-5 h-5 text-brand-700" />;
      case 'Plane': return <Plane className="w-5 h-5 text-brand-700" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-brand-700" />;
      case 'Car': return <Car className="w-5 h-5 text-brand-700" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-brand-700" />;
      case 'Zap': return <Zap className="w-5 h-5 text-brand-700" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-brand-700" />;
      default: return <Compass className="w-5 h-5 text-brand-700" />;
    }
  };

  return (
    <div className="pb-20">

      {/* Hero Banner */}
      <HeroSlideshow slides={servicesSlides} interval={5500} heightClass="h-72 sm:h-[380px]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white space-y-3">
          <span className="section-label text-yellowBrand-300">Services & Tours</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Travel Services by <br />
            <span className="text-yellowBrand-400">Araliya Ceylon</span>
          </h1>
          <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto">
            From airport arrival to boutique stays and local driver-guides, we arrange your Sri Lanka journey with care.
          </p>
        </div>
      </HeroSlideshow>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="section-label">What We Provide</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Sri Lanka Travel Assistance
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Every service is coordinated directly by our Sri Lankan team in Colombo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-6 flex flex-col justify-between card-hover"
              style={{ borderRadius: '16px', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', border: '1px solid #F0F0F0' }}
            >
              <div>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#F0F7F2', border: '1px solid #C2DFCE' }}
                >
                  {getIcon(srv.iconName)}
                </div>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: '#1A2B1F' }}>{srv.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>{srv.description}</p>
              </div>

              <Link
                href="/planner"
                className="mt-5 pt-3 flex items-center text-xs font-semibold text-brand-700 hover:text-brand-800 transition-all hover:gap-2"
                style={{ borderTop: '1px solid #F0F7F2', fontFamily: 'Outfit, sans-serif', gap: '0.25rem' }}
              >
                Inquire Details <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 mt-8" style={{ background: '#082C1C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-gold-300 text-[0.7rem] font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Process</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">How Planning Works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Share Your Ideas', desc: 'Tell us your preferred travel dates, destinations of interest, and travel style.' },
              { step: '02', title: 'We Draft the Route', desc: 'Our Sri Lankan travel coordinator creates a detailed itinerary tailored for you.' },
              { step: '03', title: 'Review & Refine', desc: 'Adjust hotel levels, daily pace, and sights until the plan feels just right.' },
              { step: '04', title: 'Enjoy Your Journey', desc: 'Your private driver-guide greets you at Colombo Airport and assists you throughout.' },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="p-6 text-center"
                style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.09)' }}
              >
                <span
                  className="w-10 h-10 font-bold text-sm flex items-center justify-center mx-auto mb-4"
                  style={{ background: '#D4A853', color: '#0C2218', borderRadius: '50%', fontFamily: 'Playfair Display, serif' }}
                >
                  {step}
                </span>
                <h4 className="font-display font-bold text-base text-white mb-2">{title}</h4>
                <p className="text-xs text-white/55 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="section-label">Featured Travel Plans</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Popular Tour Examples
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POPULAR_PACKAGES.slice(0, 3).map((pkg) => (
            <div
              key={pkg.id}
              className="overflow-hidden card-hover flex flex-col justify-between"
              style={{ borderRadius: '16px', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', border: '1px solid #F0F0F0' }}
            >
              <div>
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 text-xs text-amber-500 font-bold"
                    style={{ background: 'rgba(255,255,255,0.96)', borderRadius: '999px' }}
                  >
                    <Star className="w-3 h-3 fill-amber-400" /> {pkg.rating}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display font-bold text-base" style={{ color: '#1A2B1F' }}>{pkg.title}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    <Clock className="w-3.5 h-3.5 text-brand-700" /> {pkg.days} Days / {pkg.nights} Nights
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {pkg.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-3 flex items-center justify-between mt-auto" style={{ borderTop: '1px solid #F0F7F2' }}>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block" style={{ fontFamily: 'Outfit, sans-serif' }}>Starting at</span>
                  <span className="font-display font-bold text-lg text-brand-700">${pkg.price}</span>
                </div>
                <Link href={`/planner?dest=${pkg.id}`} className="btn-yellow text-xs py-2 px-4">Customize</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div
          className="py-14 px-8 sm:px-12 text-center"
          style={{ background: '#1B4332', borderRadius: '20px' }}
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">Need a Custom Itinerary?</h3>
          <p className="text-white/70 text-sm max-w-lg mx-auto mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Tell us where you want to go and we&apos;ll craft a unique journey around your preferences.
          </p>
          <Link href="/planner" className="btn-yellow text-sm inline-flex">
            Start Planning With Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
