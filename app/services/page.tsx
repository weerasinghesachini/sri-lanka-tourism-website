'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Compass, Hotel, Plane, MapPin, Car, Sliders, Zap, Headphones, 
  ArrowRight, Star, Clock, CheckCircle2 
} from 'lucide-react';
import { SERVICES, POPULAR_PACKAGES } from '@/lib/data';

import HeroSlideshow from '@/components/HeroSlideshow';

export default function ServicesPage() {
  const servicesSlides = [
    { src: '/images/view5.jpeg', alt: 'Luxury Tea Estate Bungalow', location: 'Highland Luxury Stays' },
    { src: '/images/colombo.jpeg', alt: 'Chauffeur Vehicle transfers', location: 'Private Airport Transfers' },
    { src: '/images/view3.jpeg', alt: 'Guided Scenic Tours', location: 'Islandwide Excursions' },
    { src: '/images/honeymoon resort1.jpeg', alt: 'Boutique Beach Villa', location: 'Coastal Resorts' },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-6 h-6 text-brand-700" />;
      case 'Hotel': return <Hotel className="w-6 h-6 text-brand-700" />;
      case 'Plane': return <Plane className="w-6 h-6 text-brand-700" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-brand-700" />;
      case 'Car': return <Car className="w-6 h-6 text-brand-700" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-brand-700" />;
      case 'Zap': return <Zap className="w-6 h-6 text-brand-700" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-brand-700" />;
      default: return <Compass className="w-6 h-6 text-brand-700" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner with Animated Slideshow */}
      <HeroSlideshow slides={servicesSlides} interval={5000} heightClass="h-80 sm:h-[420px]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 backdrop-blur-md shadow-lg">
            Tailored Premium Solutions
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Everything You Need for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Perfect Journey</span>
          </h1>
          <p className="text-emerald-50 text-sm sm:text-lg font-medium max-w-2xl mx-auto drop-shadow-md">
            From luxury airport pickup to unforgettable private adventures, we've got your whole journey covered with 5-star service.
          </p>
        </div>
      </HeroSlideshow>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-700 font-bold text-xs uppercase tracking-widest block mb-1">Full Service Travel</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white p-6 rounded-3xl border border-sand-200 shadow-sm hover:shadow-md transition-all hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sand-100 border border-sand-300 flex items-center justify-center mb-4">
                  {getIcon(srv.iconName)}
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{srv.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{srv.description}</p>
              </div>
              <Link href="/planner" className="mt-6 pt-4 border-t border-sand-100 flex items-center text-xs font-bold text-brand-700 hover:text-brand-800">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-sand-100/70 py-16 border-y border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-700 font-bold text-xs uppercase tracking-widest block mb-1">Simple 4-Step Process</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-sand-200 text-center relative">
              <span className="w-8 h-8 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">01</span>
              <h4 className="font-display font-bold text-base text-gray-900 mb-1">Tell Us Your Dream</h4>
              <p className="text-xs text-gray-500">Share your interests, travel dates and preferences.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand-200 text-center relative">
              <span className="w-8 h-8 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">02</span>
              <h4 className="font-display font-bold text-base text-gray-900 mb-1">We Design Your Journey</h4>
              <p className="text-xs text-gray-500">We create a personalized custom itinerary.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand-200 text-center relative">
              <span className="w-8 h-8 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">03</span>
              <h4 className="font-display font-bold text-base text-gray-900 mb-1">You Approve The Plan</h4>
              <p className="text-xs text-gray-500">Review and make adjustments anytime.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand-200 text-center relative">
              <span className="w-8 h-8 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">04</span>
              <h4 className="font-display font-bold text-base text-gray-900 mb-1">Enjoy Sri Lanka!</h4>
              <p className="text-xs text-gray-500">Pack your bags and enjoy your private trip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-700 font-bold text-xs uppercase tracking-widest block mb-1">Featured Travel Packages</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Popular Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POPULAR_PACKAGES.slice(0, 3).map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-md flex flex-col justify-between hover-lift">
              <div className="relative h-48 w-full">
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-500 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  {pkg.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-700" /> {pkg.days} Days / {pkg.nights} Nights
                </p>
                <div className="pt-4 border-t border-sand-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">From</span>
                    <span className="text-2xl font-extrabold text-brand-700 font-display">${pkg.price}</span>
                  </div>
                  <Link href="/planner" className="px-5 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs">
                    View Package
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Trip Promo Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[300px] flex items-center justify-center text-center p-8">
          <Image
            src="/images/view2.jpeg"
            alt="Beach background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/25" />
          
          <div className="relative z-10 max-w-2xl space-y-4 text-white">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold drop-shadow-lg">
              Can't Find Your Perfect Trip?
            </h2>
            <p className="text-white/90 text-sm drop-shadow-md">
              Tell us what you want and we'll create a custom journey tailored specifically around you.
            </p>
            <div className="pt-2">
              <Link
                href="/planner"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl"
              >
                <span>Create My Trip</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
