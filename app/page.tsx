'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, Calendar, MapPin, Compass, Star, ArrowRight, ShieldCheck, 
  Clock, Users, Award, Heart, Sparkles, ChevronRight, Sun, Mountain, Landmark, Utensils
} from 'lucide-react';
import { DESTINATIONS, CATEGORIES, POPULAR_PACKAGES, TESTIMONIALS, Destination } from '@/lib/data';
import DestinationModal from '@/components/DestinationModal';

import HeroSlideshow from '@/components/HeroSlideshow';

export default function HomePage() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [tripType, setTripType] = useState('all');

  const homeHeroSlides = [
    { src: '/images/sigiriya rock2.jpeg', alt: 'Sigiriya Rock Fortress', location: 'Sigiriya Rock Fortress' },
    { src: '/images/nine arch 3.jpeg', alt: 'Nine Arch Bridge Train Ella', location: 'Nine Arch Bridge, Ella' },
    { src: '/images/mirissa cocount hill.jpeg', alt: 'Mirissa Coconut Tree Hill', location: 'Coconut Tree Hill, Mirissa' },
    { src: '/images/yala safari2.jpeg', alt: 'Yala Leopard Safari', location: 'Yala National Park Safari' },
    { src: '/images/galle light house.jpeg', alt: 'Galle Fort Lighthouse', location: 'Galle Dutch Fort' },
  ];

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.province.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = tripType === 'all' || dest.category.toLowerCase() === tripType.toLowerCase();
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION WITH ANIMATED SLIDESHOW */}
      <HeroSlideshow slides={homeHeroSlides} interval={4800}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/25 border border-emerald-400/50 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg shadow-emerald-950/50">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Your Journey Starts Here</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-xl">
              Discover the Wonder of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Sri Lanka</span>
            </h1>

            <p className="text-emerald-50/95 text-base sm:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Explore golden beaches, misty tea mountains, ancient kingdoms, and unforgettable wildlife safaris with LankaVista.
            </p>

            <div className="pt-4">
              <div className="bg-white/95 backdrop-blur-2xl p-3 sm:p-4 rounded-3xl shadow-2xl border border-emerald-500/30 max-w-4xl ring-1 ring-emerald-500/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-center">
                  
                  <div className="flex items-center space-x-3 px-3 py-2.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
                    <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div className="w-full">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-emerald-800">Destination</label>
                      <input
                        type="text"
                        placeholder="Where do you want to go?"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 px-3 py-2.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
                    <Calendar className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div className="w-full">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-emerald-800">Travel Date</label>
                      <input
                        type="text"
                        placeholder="Select Month / Date"
                        className="w-full bg-transparent text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 px-3 py-2.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
                    <Compass className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div className="w-full">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-emerald-800">Travel Type</label>
                      <select
                        value={tripType}
                        onChange={(e) => setTripType(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none cursor-pointer"
                      >
                        <option value="all">All Experiences</option>
                        <option value="beach">Beach</option>
                        <option value="mountain">Mountain</option>
                        <option value="heritage">Heritage</option>
                        <option value="wildlife">Wildlife</option>
                      </select>
                    </div>
                  </div>

                  <Link
                    href="/locations"
                    className="w-full sm:col-span-3 lg:col-span-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-emerald-400/20 max-w-xl">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-white">500+</span>
                <span className="text-xs text-emerald-300 font-medium">Happy Travelers</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-white">50+</span>
                <span className="text-xs text-emerald-300 font-medium">Destinations</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-white">10+</span>
                <span className="text-xs text-emerald-300 font-medium">Years Experience</span>
              </div>
            </div>

          </div>
        </div>
      </HeroSlideshow>

      {/* 2. EXPLORE SRI LANKA (DESTINATIONS GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-brand-700 font-bold text-xs uppercase tracking-widest block mb-1">Unforgettable Locations</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Explore Sri Lanka
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              From tropical beaches to ancient kingdoms, discover places worth remembering.
            </p>
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center space-x-2 text-brand-700 hover:text-brand-800 font-bold text-sm bg-sand-200 hover:bg-sand-300 px-5 py-2.5 rounded-xl transition"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.slice(0, 4).map((dest) => (
            <div
              key={dest.id}
              onClick={() => setSelectedDestination(dest)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-sand-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-800 shadow-sm">
                  {dest.category}
                </div>

                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-300 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  {dest.rating}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-display font-extrabold text-xl">{dest.name}</h3>
                  <p className="text-xs text-gray-200 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-emerald-400" /> {dest.province}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPLORE BY EXPERIENCE */}
      <section className="bg-sand-100/70 py-16 border-y border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-700 font-bold text-xs uppercase tracking-widest block mb-1">Tailored Experiences</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Explore by Experience
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Choose your travel style and let us craft your dream Sri Lankan vacation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/locations?category=${cat.id}`}
                className="group bg-white rounded-2xl p-4 border border-sand-200 shadow-sm hover:shadow-md hover:border-brand-500 text-center transition-all duration-200 hover-lift flex flex-col items-center justify-between h-48 relative overflow-hidden"
              >
                <div className="relative w-full h-24 rounded-xl overflow-hidden mb-3">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-brand-900/10 transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-xs sm:text-sm group-hover:text-brand-700 transition">
                    {cat.name}
                  </h4>
                  <span className="text-[11px] text-gray-500 mt-0.5 block">{cat.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POPULAR EXPERIENCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-brand-700 font-bold text-xs uppercase tracking-widest block mb-1">Curated Itineraries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Popular Packages
            </h2>
          </div>
          <Link href="/services" className="text-brand-700 hover:text-brand-800 font-bold text-sm flex items-center gap-1">
            <span>View All Packages</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-md flex flex-col justify-between hover-lift"
            >
              <div>
                <div className="relative h-48 w-full">
                  <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-500 flex items-center gap-1 shadow">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    {pkg.rating}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-white flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    {pkg.days} Days / {pkg.nights} Nights
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pkg.destinations.map((d, i) => (
                      <span key={i} className="text-[11px] bg-sand-100 text-gray-600 px-2 py-0.5 rounded-md border border-sand-200">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-sand-100 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block">From</span>
                  <span className="text-xl font-extrabold text-brand-700 font-display">${pkg.price}</span>
                </div>
                <Link
                  href="/planner"
                  className="px-4 py-2 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-semibold text-xs transition shadow-sm"
                >
                  View Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY TRAVEL WITH US */}
      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-1">Our Advantage</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Travel With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-brand-800/60 border border-brand-700/50 text-center hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Local Experts</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Native Sri Lankan travel specialists with insider access and authentic knowledge.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-800/60 border border-brand-700/50 text-center hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Best Experiences</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Curated boutique stays, private transfers, and hand-picked guided excursions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-800/60 border border-brand-700/50 text-center hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">24/7 Support</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Dedicated travel coordinator on standby throughout your entire Sri Lankan journey.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-800/60 border border-brand-700/50 text-center hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Flexible Travel</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                100% customisable itineraries tailored specifically to your pace and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED DESTINATION SPOTLIGHT — Modern Glassmorphism Edition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #052e16 0%, #064e3b 35%, #1a2e05 65%, #14532d 100%)',
          }}
        >
          {/* Decorative blurred orbs */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #d97706 0%, transparent 70%)' }} />
          <div className="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72 rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)' }} />
          <div className="pointer-events-none absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)' }} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[520px]">

            {/* LEFT: Text Panel */}
            <div className="flex flex-col justify-center p-8 sm:p-12 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest"
                style={{
                  background: 'linear-gradient(90deg, rgba(217,119,6,0.25), rgba(245,158,11,0.10))',
                  borderColor: 'rgba(251,191,36,0.45)',
                  color: '#fcd34d',
                }}>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Featured Destination
              </div>

              <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 30%, #86efac 60%, #fcd34d 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                Escape to Ella &amp;<br />Nine Arch Bridge
              </h2>

              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-md">
                Mountain breezes, misty tea plantations, and scenic train rides across the world-famous Nine Arch Bridge. Experience the tranquil charm of Central Sri Lanka.
              </p>

              {/* Stat chips */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: '🗓️', label: 'Best Time', value: 'Dec – Apr' },
                  { icon: '🏨', label: 'Ideal Stay', value: '2–3 Days' },
                  { icon: '⭐', label: 'Rating', value: '4.9 / 5' },
                ].map((s) => (
                  <div key={s.label}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.13)',
                      backdropFilter: 'blur(12px)',
                    }}>
                    <span className="text-lg leading-none">{s.icon}</span>
                    <div>
                      <span className="block text-emerald-400/70 text-[9px] font-bold uppercase tracking-widest">{s.label}</span>
                      <span className="text-white text-xs font-bold">{s.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights list */}
              <ul className="space-y-2 text-sm text-emerald-100/75">
                {[
                  'Iconic blue train crossing the 9-arch viaduct',
                  'Misty hill-country trekking trails',
                  "Sri Lanka's best sunrise at Little Adam's Peak",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white font-bold"
                      style={{ background: 'linear-gradient(135deg,#10b981,#d97706)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/planner?dest=ella"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b, #10b981)', boxShadow: '0 4px 24px rgba(217,119,6,0.35)' }}
                >
                  Explore Ella Package <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.20)',
                    color: '#d1fae5',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  View All Destinations
                </Link>
              </div>
            </div>

            {/* RIGHT: Layered Photo Collage */}
            <div className="relative hidden lg:flex items-center justify-center p-8">
              {/* Main large image */}
              <div className="relative w-64 h-80 rounded-3xl overflow-hidden z-20"
                style={{ transform: 'rotate(-3deg)', boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)' }}>
                <Image src="/images/nine arch 3.jpeg" alt="Nine Arch Bridge" fill className="object-cover" />
                {/* Glass overlay tag */}
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl"
                  style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <span className="text-white text-[11px] font-bold">🏛️ Nine Arch Bridge, Ella</span>
                </div>
              </div>

              {/* Secondary image top-right */}
              <div className="absolute top-6 right-4 w-44 h-52 rounded-2xl overflow-hidden z-10"
                style={{ transform: 'rotate(4deg)', boxShadow: '0 15px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)' }}>
                <Image src="/images/ella1.jpeg" alt="Ella Landscape" fill className="object-cover" />
              </div>

              {/* Third image bottom-left */}
              <div className="absolute bottom-6 left-2 w-36 h-40 rounded-2xl overflow-hidden z-10"
                style={{ transform: 'rotate(-6deg)', boxShadow: '0 12px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)' }}>
                <Image src="/images/mistymountant1.jpeg" alt="Misty Mountains" fill className="object-cover" />
              </div>

              {/* Floating gold accent card */}
              <div className="absolute bottom-8 right-6 z-30 px-4 py-3 rounded-2xl text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(217,119,6,0.85), rgba(245,158,11,0.75))',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(251,191,36,0.5)',
                  boxShadow: '0 8px 32px rgba(217,119,6,0.4)',
                }}>
                <span className="block text-2xl font-black text-white">4.9★</span>
                <span className="text-amber-100 text-[10px] font-semibold uppercase tracking-wider">Traveler Rating</span>
              </div>

              {/* Floating green accent chip top-left */}
              <div className="absolute top-8 left-4 z-30 px-3 py-2 rounded-xl flex items-center gap-2"
                style={{
                  background: 'rgba(16,185,129,0.20)',
                  border: '1px solid rgba(52,211,153,0.40)',
                  backdropFilter: 'blur(12px)',
                }}>
                <Mountain className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-200 text-[11px] font-bold">1,041m Altitude</span>
              </div>

              {/* Decorative dashed ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full opacity-10"
                  style={{ border: '1px dashed #fcd34d' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHAT OUR TRAVELERS SAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-700 font-bold text-xs uppercase tracking-widest block mb-1">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Our Travelers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-sand-200 shadow-sm flex flex-col justify-between hover-lift">
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="flex items-center space-x-3 pt-6 border-t border-sand-100 mt-6">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-sand-300">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-gray-900">{t.name}</h4>
                  <span className="text-xs text-gray-400">{t.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. MOMENTS FROM SRI LANKA (GALLERY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-700 font-bold text-xs uppercase tracking-widest block mb-1">Visual Memories</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Moments From Sri Lanka
          </h2>
          <p className="text-xs text-gray-500 mt-1">Real traveler snapshots from Sigiriya, Ella, Mirissa, Kandy & Galle.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md hover-lift group">
            <Image
              src="/images/sigiriya2.jpeg"
              alt="Sigiriya Sunset Sri Lanka"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <span className="font-display font-bold text-sm block">Sigiriya Rock Fortress</span>
              <span className="text-[10px] text-emerald-300">Central Province</span>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md hover-lift group">
            <Image
              src="/images/nine arch4.jpeg"
              alt="Ella Nine Arch Bridge Train"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <span className="font-display font-bold text-sm block">Nine Arch Bridge</span>
              <span className="text-[10px] text-emerald-300">Ella Highlands</span>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md hover-lift group">
            <Image
              src="/images/mirissa10.jpeg"
              alt="Mirissa Coconut Tree Hill"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <span className="font-display font-bold text-sm block">Coconut Tree Hill</span>
              <span className="text-[10px] text-emerald-300">Mirissa Coast</span>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden shadow-md hover-lift group">
            <Image
              src="/images/galle light house2.jpeg"
              alt="Galle Dutch Lighthouse"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <span className="font-display font-bold text-sm block">Dutch Fort Lighthouse</span>
              <span className="text-[10px] text-emerald-300">Galle Coast</span>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATION MODAL PREVIEW */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </div>
  );
}
