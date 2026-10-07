'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, ArrowRight, Star, CheckCircle2,
  Clock, ChevronRight, Sparkles, Leaf,
  Mountain, Waves, Landmark, Compass,
  Camera, ChevronLeft, Quote,
} from 'lucide-react';
import { DESTINATIONS, CATEGORIES, POPULAR_PACKAGES, TESTIMONIALS, Destination } from '@/lib/data';
import DestinationModal from '@/components/DestinationModal';
import HeroSlideshow from '@/components/HeroSlideshow';
import { useLanguage } from '@/context/LanguageContext';

/* ── Experience categories for filter strip ───────────────────── */
const experienceNav = [
  { icon: Leaf,      label: 'Nature',    cat: 'nature'   },
  { icon: Mountain,  label: 'Mountains', cat: 'mountain' },
  { icon: Waves,     label: 'Beaches',   cat: 'beach'    },
  { icon: Landmark,  label: 'Heritage',  cat: 'heritage' },
  { icon: Compass,   label: 'Wildlife',  cat: 'wildlife' },
  { icon: Camera,    label: 'Culture',   cat: 'cultural' },
];

/* ── Interactive Sri Lanka map data ──────────────────────────── */
const mapLocations = [
  { id: 'colombo',      name: 'Colombo',       x: 22, y: 55, desc: 'Vibrant capital city on the western coast with bustling markets and colonial architecture.', image: '/images/colombo1.jpeg' },
  { id: 'kandy',        name: 'Kandy',          x: 40, y: 46, desc: 'Sri Lanka\'s cultural capital — home to the sacred Temple of the Tooth Relic and botanical gardens.', image: '/images/kandy1.jpeg' },
  { id: 'ella',         name: 'Ella',           x: 52, y: 60, desc: 'Misty mountain town with iconic Nine Arch Bridge, tea estates, and scenic highland rail journeys.', image: '/images/nine arch 2.jpeg' },
  { id: 'nuwara-eliya', name: 'Nuwara Eliya',   x: 44, y: 55, desc: 'Sri Lanka\'s highest town — cool climate, manicured gardens, and sweeping tea plantation views.', image: '/images/nuwaraeliya.jpeg' },
  { id: 'sigiriya',     name: 'Sigiriya',       x: 46, y: 32, desc: 'Dramatic 5th-century rock fortress rising 200m above the ancient plains, with frescoes and water gardens.', image: '/images/sigiriya1.jpeg' },
  { id: 'galle',        name: 'Galle',          x: 28, y: 79, desc: 'Living 17th-century seaside Dutch fortress with cobblestone lanes, ramparts, and lighthouse views.', image: '/images/galle3.jpeg' },
  { id: 'mirissa',      name: 'Mirissa',        x: 38, y: 84, desc: 'Golden crescent bay perfect for blue whale watching, morning swims, and sunset coastal walks.', image: '/images/mirissa4.jpeg' },
  { id: 'yala',         name: 'Yala',           x: 56, y: 80, desc: 'Wild coastal national park — home to Sri Lanka\'s famous leopards, elephants, and sloth bears.', image: '/images/yalasfari1.jpeg' },
];

/* ── Journey narrative data ───────────────────────────────────── */
const journeyStops = [
  {
    title: 'From the Mountains…',
    subtitle: 'Ella & Tea Country',
    desc: 'Begin in the misty highlands where ancient tea estates roll across endless green hills. Board the iconic blue train through cloud-level forests.',
    image: '/images/ella_hd.png',
    accent: '#3F7D4A',
  },
  {
    title: 'Through History…',
    subtitle: 'Sigiriya & Kandy',
    desc: 'Climb a 5th-century rock kingdom. Attend evening prayers at the Temple of the Sacred Tooth. Feel the pulse of an ancient civilization.',
    image: '/images/sigiriya_hd.png',
    accent: '#D4A853',
  },
  {
    title: 'Into the Wild…',
    subtitle: 'Yala National Park',
    desc: 'Open jeep into Sri Lanka\'s wilderness. Spot leopards resting on granite boulders. Watch wild elephants drink at coastal lagoons at dusk.',
    image: '/images/yala_hd.png',
    accent: '#8B6E4E',
  },
  {
    title: 'To the Ocean…',
    subtitle: 'Mirissa & Galle Fort',
    desc: 'End at the Indian Ocean. Whale watch at sunrise off the continental shelf. Walk the golden ramparts of Galle Fort as the sun sets.',
    image: '/images/mirissa_hd.png',
    accent: '#176B87',
  },
];

/* ── Local experiences ────────────────────────────────────────── */
const localExperiences = [
  { label: 'Tea Picking',        image: '/images/tea1.jpeg',             desc: 'Pick fresh Ceylon tea leaves with estate workers at dawn' },
  { label: 'Wildlife Safari',    image: '/images/yala1.jpeg',            desc: 'Open jeep tracking of leopards and elephants' },
  { label: 'Scenic Train',       image: '/images/idalgashinna.jpeg',     desc: 'The world\'s most beautiful train ride through hill country' },
  { label: 'Temple Visit',       image: '/images/kandy4.jpeg',           desc: 'Experience evening puja ceremonies at sacred temples' },
  { label: 'Local Food Trail',   image: '/images/food1.jpeg',            desc: 'Home-cooked village meals and spice garden visits' },
  { label: 'Coastal Sunrise',    image: '/images/mirissa cocount hill.jpeg', desc: 'Watch the Indian Ocean wake up from Coconut Tree Hill' },
];

/* ── Plan Your Journey planner data ──────────────────────────── */
const plannerDurations = ['3 Days', '5 Days', '7 Days', '10+ Days'];
const plannerStyles    = ['Relaxed', 'Adventure', 'Luxury', 'Family', 'Cultural'];
const plannerInterests = ['Beaches', 'Mountains', 'Wildlife', 'Heritage', 'Food', 'Photography'];

const suggestedRoutes: Record<string, string[]> = {
  '3 Days': ['Colombo', 'Sigiriya', 'Dambulla'],
  '5 Days': ['Colombo', 'Kandy', 'Ella', 'Mirissa'],
  '7 Days': ['Colombo', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Mirissa'],
  '10+ Days': ['Colombo', 'Anuradhapura', 'Sigiriya', 'Kandy', 'Ella', 'Yala', 'Mirissa', 'Galle'],
};

/* ================================================================
   HOMEPAGE COMPONENT
   ================================================================ */
export default function HomePage() {
  const { t } = useLanguage();

  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [tripType,     setTripType]     = useState('all');
  const [activeMapPin, setActiveMapPin] = useState<string | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [planDuration, setPlanDuration] = useState('7 Days');
  const [planStyle,    setPlanStyle]    = useState('Relaxed');
  const [planInterests, setPlanInterests] = useState<string[]>([]);
  const [showItinerary, setShowItinerary] = useState(false);

  const toggleInterest = (interest: string) => {
    setPlanInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const homeHeroSlides = [
    { src: '/images/hero_sigiriya_hd.png', alt: 'Sigiriya Rock Fortress ancient citadel at sunrise', location: 'Sigiriya Ancient Citadel' },
    { src: '/images/hero_ella_hd.png',     alt: 'Nine Arch Bridge Ella hill country misty tea estates', location: 'Ella Nine Arch Bridge' },
    { src: '/images/hero_mirissa_hd.png',  alt: 'Mirissa golden tropical palm beach at sunset', location: 'Mirissa Southern Coast' },
    { src: '/images/hero_yala_hd.png',     alt: 'Yala National Park wild leopard safari', location: 'Yala Wildlife Safari' },
    { src: '/images/hero_galle_hd.png',    alt: 'Galle Dutch Fort colonial ramparts and lighthouse', location: 'Galle Dutch Fort' },
  ];

  const filteredDestinations = DESTINATIONS.filter((dest) =>
    tripType === 'all' || dest.category.toLowerCase() === tripType.toLowerCase()
  ).slice(0, 8);

  const activeMapLocation = mapLocations.find((l) => l.id === activeMapPin);

  // Auto advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════
          1. HERO SLIDESHOW — cinematic full-height
          ══════════════════════════════════════════════════════════ */}
      <HeroSlideshow slides={homeHeroSlides} interval={5500}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-44">
          <div className="max-w-2xl space-y-7">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span
                className="text-gold-300 text-[0.7rem] font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Araliya Ceylon · Sri Lankan Travel Specialists
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.1] tracking-tight">
              {t('hero.title.1')}{' '}
              <span style={{ color: '#F3D279' }}>{t('hero.title.2')}</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-white/85 text-base sm:text-lg leading-[1.75] max-w-lg"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400 }}
            >
              From misty tea-covered mountains to golden beaches, ancient kingdoms and wild national parks.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/locations" className="btn-yellow text-sm px-7 py-3.5">
                Explore Sri Lanka <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/quiz" className="btn-outline-white text-sm px-7 py-3.5">
                <Sparkles className="w-4 h-4" /> Find My Trip Style
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5 pt-1 text-white/65 text-xs">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-300" />
                <span style={{ fontFamily: 'Outfit, sans-serif' }}>Sri Lankan-owned</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-300" />
                <span style={{ fontFamily: 'Outfit, sans-serif' }}>Private driver-guides</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-300" />
                <span style={{ fontFamily: 'Outfit, sans-serif' }}>24/7 on-trip support</span>
              </span>
            </div>
          </div>
        </div>
      </HeroSlideshow>

      {/* ── Experience Filter Strip (floating below hero) ─────────── */}
      <div className="relative z-10 -mt-7 mx-4 sm:mx-8 lg:mx-auto lg:max-w-5xl">
        <div
          className="flex items-center justify-between sm:justify-center gap-3 sm:gap-4 px-5 sm:px-10 py-4 overflow-x-auto"
          style={{
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
            border: '1px solid rgba(232,223,208,0.8)',
          }}
        >
          {experienceNav.map(({ icon: Icon, label, cat }) => (
            <button
              key={cat}
              onClick={() => setTripType(cat === tripType ? 'all' : cat)}
              className={`flex flex-col items-center gap-1.5 px-3 py-1 rounded-xl transition-all duration-200 shrink-0 ${
                tripType === cat
                  ? 'text-brand-700'
                  : 'text-gray-500 hover:text-brand-600'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  tripType === cat ? 'bg-brand-700 text-white' : 'bg-cream-200 text-gray-500'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          2. FEATURED DESTINATIONS — Editorial Mosaic
          ══════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-label">{t('section.destinations.title')}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#1A2B1F' }}>
              Explore Sri Lanka
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {t('section.destinations.sub')}
            </p>
          </div>
          <Link href="/locations" className="btn-outline text-sm shrink-0">
            {t('btn.explore')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Uniform Grid for Explore Sri Lanka (All cards equal size & aspect ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.slice(0, 8).map((dest) => (
            <div
              key={dest.id}
              className="relative overflow-hidden cursor-pointer group rounded-2xl h-72 w-full shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedDestination(dest)}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 img-overlay-bottom rounded-2xl" />

              {/* Category pill */}
              <div className="absolute top-4 left-4">
                <span className="location-badge">{dest.category}</span>
              </div>
              {/* Rating */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-amber-300"
                style={{ background: 'rgba(0,0,0,0.52)', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <Star className="w-3 h-3 fill-amber-300" /> {dest.rating}
              </div>

              {/* Bottom text */}
              <div className="float-label">
                <h3 className="font-display font-bold text-xl text-white leading-tight">
                  {dest.name}
                </h3>
                <p className="text-xs text-white/65 flex items-center gap-1 mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <MapPin className="w-3 h-3 text-gold-300" /> {dest.province}
                </p>
                <span className="inline-flex items-center gap-1.5 text-gold-300 text-xs font-bold mt-2.5 group-hover:gap-2.5 transition-all">
                  Explore <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. TRAVEL STYLES — Horizontal editorial strip
          ══════════════════════════════════════════════════════════ */}
      <section className="pt-20 pb-16" style={{ background: 'linear-gradient(180deg, #F9F6F0 0%, #F0F7F2 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Travel Styles</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#1A2B1F' }}>
              Explore by Experience
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
              From quiet coastal mornings to mist-shrouded highland walks — every corner of Sri Lanka offers something different.
            </p>
          </div>

          {/* Editorial mixed-size grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {CATEGORIES.map((cat, idx) => {
              const heights = ['260px', '220px', '280px', '240px', '260px', '220px'];
              return (
                <Link
                  key={cat.id}
                  href={`/locations?category=${cat.id}`}
                  className="group relative overflow-hidden"
                  style={{ height: heights[idx], borderRadius: '14px' }}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(8,44,28,0.82) 0%, rgba(8,44,28,0.18) 55%, transparent 100%)',
                      borderRadius: '14px',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gold-300" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {cat.count}
                    </p>
                    <h3 className="font-display font-bold text-sm text-white leading-tight mt-0.5">{cat.name}</h3>
                    <span className="inline-flex items-center gap-1 text-gold-300/80 text-[10px] font-bold mt-1.5 group-hover:gap-2 transition-all" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Explore <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. ABOUT — Editorial Split Layout
          ══════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden" style={{ borderRadius: '20px', boxShadow: '0 16px 60px rgba(0,0,0,0.10)' }}>

          {/* Photo side */}
          <div className="relative lg:col-span-3" style={{ minHeight: '500px' }}>
            <Image
              src="/images/tea2.jpeg"
              alt="Sri Lanka misty highland tea plantation"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(8,44,28,0.08)' }} />

            {/* Floating quote card */}
            <div
              className="absolute bottom-7 left-7 max-w-xs p-5"
              style={{
                background: 'rgba(255,255,255,0.97)',
                borderRadius: '14px',
                borderLeft: '4px solid #D4A853',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
              }}
            >
              <p className="text-xs font-medium italic text-gray-700 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                &ldquo;Take the early morning train through the tea hills, stop for a freshly brewed cup, and let the island reveal itself at its own pace.&rdquo;
              </p>
              <span className="block text-[10px] font-bold text-brand-700 uppercase tracking-wider mt-2.5">
                — Araliya Ceylon Travel Note
              </span>
            </div>
          </div>

          {/* Brand content panel */}
          <div
            className="lg:col-span-2 flex flex-col justify-center space-y-5 p-8 sm:p-12"
            style={{ background: '#1B4332', color: '#fff' }}
          >
            <span className="text-gold-300 text-[0.68rem] font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              About Araliya Ceylon
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              Travel Sri Lanka with a Local Touch
            </h2>
            <div className="divider" />
            <p className="text-white/75 text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
              We are a Sri Lankan-owned travel company based in Colombo. We design journeys for people who want to experience the island genuinely — staying in small boutique guesthouses, meeting local craftsmen, and traveling with friendly drivers who know every back road.
            </p>
            <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
              We handle private transport, guide recommendations, train tickets, and on-trip phone support.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { label: 'Sri Lankan', val: '100% Local' },
                { label: 'Travel Pace', val: 'Tailored' },
                { label: 'Support',     val: '24/7' },
              ].map(({ label, val }) => (
                <div
                  key={label}
                  className="text-center py-3 px-1"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px' }}
                >
                  <span className="text-[10px] text-white/45 uppercase block" style={{ fontFamily: 'Outfit, sans-serif' }}>{label}</span>
                  <span className="font-display font-bold text-sm text-gold-300 block mt-0.5">{val}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-yellow text-xs self-start">
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. JOURNEY NARRATIVE — Immersive scroll story
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#0C2218' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-300 text-[0.7rem] font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Your Sri Lankan Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
              One Island, Every Landscape
            </h2>
            <p className="text-white/55 text-sm mt-2 max-w-lg mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
              A journey through Sri Lanka is a journey through every kind of beauty.
            </p>
          </div>

          {/* Staggered editorial rows */}
          <div className="space-y-6">
            {journeyStops.map((stop, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 overflow-hidden`}
                style={{ borderRadius: '20px', minHeight: '360px' }}
              >
                {/* Image side */}
                <div className="relative flex-1" style={{ minHeight: '280px' }}>
                  <Image
                    src={stop.image}
                    alt={stop.subtitle}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(8,44,28,0.20)' }} />
                  {/* Floating stop number */}
                  <div
                    className="absolute top-5 left-5 w-8 h-8 flex items-center justify-center font-bold text-sm"
                    style={{
                      background: '#D4A853',
                      color: '#0C2218',
                      borderRadius: '50%',
                      fontFamily: 'Playfair Display, serif',
                    }}
                  >
                    {idx + 1}
                  </div>
                </div>

                {/* Text side */}
                <div
                  className="flex-none lg:w-80 xl:w-96 flex flex-col justify-center p-8 sm:p-10"
                  style={{ background: 'rgba(255,255,255,0.04)', borderLeft: idx % 2 === 0 ? `3px solid ${stop.accent}` : 'none', borderRight: idx % 2 !== 0 ? `3px solid ${stop.accent}` : 'none' }}
                >
                  <span
                    className="text-[0.68rem] font-bold uppercase tracking-[0.18em] mb-3"
                    style={{ color: stop.accent, fontFamily: 'Outfit, sans-serif' }}
                  >
                    {stop.title}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white leading-tight mb-3">
                    {stop.subtitle}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {stop.desc}
                  </p>
                  <Link
                    href="/locations"
                    className="inline-flex items-center gap-2 text-xs font-bold mt-5 transition-all hover:gap-3"
                    style={{ color: stop.accent, fontFamily: 'Outfit, sans-serif' }}
                  >
                    Explore this region <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. INTERACTIVE SRI LANKA MAP
          ══════════════════════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, #F0F7F2 0%, #E8F4EC 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Interactive Map</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#1A2B1F' }}>
              Discover Sri Lanka
            </h2>
            <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Click any destination to preview photos and details
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* SVG Map */}
            <div className="relative aspect-[3/4] max-w-sm mx-auto w-full">
              {/* Sri Lanka simplified shape */}
              <svg viewBox="0 0 100 130" className="w-full h-full" aria-label="Interactive map of Sri Lanka">
                {/* Island outline */}
                <path
                  d="M 30 10 C 26 14, 20 24, 18 34 C 16 44, 14 52, 16 60 C 18 68, 16 76, 20 84 C 24 92, 30 98, 36 104 C 42 110, 50 116, 56 112 C 62 108, 68 100, 72 92 C 76 84, 80 74, 80 64 C 80 54, 78 42, 74 32 C 70 22, 64 14, 56 10 C 50 7, 36 8, 30 10 Z"
                  fill="#AEDCC1"
                  stroke="#2D6A4F"
                  strokeWidth="1.5"
                  className="drop-shadow-md"
                />
                {/* Interior texture */}
                <path
                  d="M 38 15 C 34 20, 28 30, 26 42 C 24 52, 24 62, 26 70 C 28 78, 28 88, 34 96 C 38 102, 44 108, 50 108 C 56 108, 62 102, 66 94 C 70 86, 72 76, 72 66 C 72 54, 70 42, 66 32 C 62 22, 56 15, 50 13 C 44 11, 40 13, 38 15 Z"
                  fill="#C2DFCE"
                  opacity="0.5"
                />

                {/* Map pins */}
                {mapLocations.map((loc) => (
                  <g
                    key={loc.id}
                    transform={`translate(${loc.x}, ${loc.y})`}
                    className="map-pin"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActiveMapPin(activeMapPin === loc.id ? null : loc.id)}
                    aria-label={loc.name}
                    role="button"
                  >
                    {/* Pin shadow */}
                    <circle cx="0" cy="2" r="4.5" fill="rgba(0,0,0,0.18)" />
                    {/* Pin body */}
                    <circle
                      cx="0" cy="0" r="4.5"
                      fill={activeMapPin === loc.id ? '#D4A853' : '#1B4332'}
                      stroke="#fff"
                      strokeWidth="1.2"
                      style={{ transition: 'fill 0.2s ease' }}
                    />
                    {/* Dot */}
                    <circle cx="0" cy="0" r="1.5" fill="white" />
                    {/* Label */}
                    <text
                      x="0"
                      y="-7"
                      textAnchor="middle"
                      fontSize="4.5"
                      fontWeight="700"
                      fontFamily="Outfit, sans-serif"
                      fill={activeMapPin === loc.id ? '#D4A853' : '#1B4332'}
                      style={{ pointerEvents: 'none' }}
                    >
                      {loc.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Info panel */}
            <div className="space-y-4">
              {activeMapLocation ? (
                <div
                  className="overflow-hidden"
                  style={{ borderRadius: '18px', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
                >
                  {/* Destination image */}
                  <div className="relative h-52 w-full">
                    <Image
                      src={activeMapLocation.image}
                      alt={activeMapLocation.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 img-overlay-bottom" />
                    <div className="absolute bottom-4 left-5 text-white">
                      <h3 className="font-display font-bold text-2xl">{activeMapLocation.name}</h3>
                    </div>
                  </div>
                  <div className="p-6" style={{ background: '#fff' }}>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {activeMapLocation.desc}
                    </p>
                    <Link
                      href={`/locations#${activeMapLocation.id}`}
                      className="btn-primary text-sm"
                    >
                      Explore {activeMapLocation.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div
                  className="p-8 text-center"
                  style={{ background: '#fff', borderRadius: '18px', border: '2px dashed #C2DFCE' }}
                >
                  <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-7 h-7 text-brand-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                    Click a Destination
                  </h3>
                  <p className="text-gray-500 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Select any pin on the map to preview Sri Lanka&apos;s most beautiful locations.
                  </p>

                  {/* Quick destination buttons */}
                  <div className="flex flex-wrap gap-2 justify-center mt-5">
                    {mapLocations.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => setActiveMapPin(loc.id)}
                        className="text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors"
                        style={{
                          background: '#F0F7F2',
                          color: '#1B4332',
                          border: '1px solid #C2DFCE',
                          fontFamily: 'Outfit, sans-serif',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#1B4332'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = '#F0F7F2'; e.currentTarget.style.color = '#1B4332'; }}
                      >
                        {loc.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. POPULAR PACKAGES
          ══════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-label">Tailored Itineraries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#1A2B1F' }}>
              Popular Journeys
            </h2>
            <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Curated itineraries combining highlands, heritage, and coastal retreats.
            </p>
          </div>
          <Link href="/services" className="btn-primary text-sm shrink-0">
            {t('btn.viewTours')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POPULAR_PACKAGES.map((pkg, idx) => {
            const heights = ['260px', '240px', '280px', '250px'];
            return (
              <div
                key={pkg.id}
                className="group overflow-hidden card-hover"
                style={{ borderRadius: '16px', background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
              >
                <div className="relative overflow-hidden" style={{ height: heights[idx] }}>
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  {/* Rating badge */}
                  <div
                    className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-amber-500"
                    style={{ background: 'rgba(255,255,255,0.96)', borderRadius: '999px' }}
                  >
                    <Star className="w-3 h-3 fill-amber-400" /> {pkg.rating}
                  </div>
                  {/* Duration badge */}
                  <div
                    className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white font-medium px-2.5 py-1"
                    style={{ background: 'rgba(8,44,28,0.75)', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    <Clock className="w-3 h-3" /> {pkg.days}D / {pkg.nights}N
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-display font-bold text-base text-gray-900 leading-tight">{pkg.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {pkg.summary}
                  </p>

                  {/* Destination tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.destinations.map((d, i) => (
                      <span key={i} className="exp-tag">{d}</span>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #E8DFD0' }}>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase block" style={{ fontFamily: 'Outfit, sans-serif' }}>From</span>
                      <span className="text-lg font-bold text-brand-700 font-display">${pkg.price}</span>
                    </div>
                    <Link href={`/planner?dest=${pkg.id}`} className="btn-yellow text-xs py-2 px-4">
                      Plan Trip
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. LOCAL EXPERIENCES
          ══════════════════════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, #F9F6F0 0%, #F0EBE0 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Authentic Moments</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#1A2B1F' }}>
              Experience Sri Lanka Like a Local
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
              The moments you&apos;ll remember most aren&apos;t the landmarks — they&apos;re the experiences between them.
            </p>
          </div>

          {/* Organic asymmetric grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {localExperiences.map((exp, idx) => {
              const heights = ['280px', '320px', '260px', '300px', '270px', '290px'];
              return (
                <div
                  key={exp.label}
                  className="relative overflow-hidden group cursor-default"
                  style={{ height: heights[idx], borderRadius: '14px' }}
                >
                  <Image
                    src={exp.image}
                    alt={exp.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(8,44,28,0.85) 0%, rgba(8,44,28,0.25) 55%, transparent 100%)',
                      borderRadius: '14px',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display font-bold text-base text-white leading-tight">{exp.label}</h3>
                    <p className="text-[11px] text-white/65 mt-1 leading-snug" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {exp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary text-sm">
              View All Experiences <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          9. PLAN YOUR JOURNEY — Interactive planner
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#1B4332' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-300 text-[0.7rem] font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Personalised Travel
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">Plan Your Journey</h2>
            <p className="text-white/55 text-sm mt-2 max-w-lg mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Tell us your preferences and we&apos;ll suggest the perfect Sri Lankan itinerary.
            </p>
          </div>

          <div
            className="p-8 sm:p-10 space-y-8"
            style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.10)' }}
          >
            {/* Duration */}
            <div>
              <p className="text-white/70 text-sm font-semibold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Trip Duration
              </p>
              <div className="flex flex-wrap gap-2.5">
                {plannerDurations.map((d) => (
                  <button
                    key={d}
                    onClick={() => { setPlanDuration(d); setShowItinerary(false); }}
                    className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
                    style={{
                      background: planDuration === d ? '#D4A853' : 'rgba(255,255,255,0.08)',
                      color:      planDuration === d ? '#0C2218' : 'rgba(255,255,255,0.70)',
                      border:     planDuration === d ? 'none' : '1px solid rgba(255,255,255,0.15)',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
              <p className="text-white/70 text-sm font-semibold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Travel Style
              </p>
              <div className="flex flex-wrap gap-2.5">
                {plannerStyles.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setPlanStyle(s); setShowItinerary(false); }}
                    className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
                    style={{
                      background: planStyle === s ? '#1B9E6E' : 'rgba(255,255,255,0.08)',
                      color:      planStyle === s ? '#fff'    : 'rgba(255,255,255,0.70)',
                      border:     planStyle === s ? 'none' : '1px solid rgba(255,255,255,0.15)',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="text-white/70 text-sm font-semibold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Interests (select all that apply)
              </p>
              <div className="flex flex-wrap gap-2.5">
                {plannerInterests.map((interest) => {
                  const selected = planInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      onClick={() => { toggleInterest(interest); setShowItinerary(false); }}
                      className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
                      style={{
                        background: selected ? '#07516B' : 'rgba(255,255,255,0.08)',
                        color:      selected ? '#fff'    : 'rgba(255,255,255,0.70)',
                        border:     selected ? 'none' : '1px solid rgba(255,255,255,0.15)',
                        fontFamily: 'Outfit, sans-serif',
                      }}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Generate button */}
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setShowItinerary(true)}
                className="btn-yellow text-sm px-8 py-3.5"
              >
                <Sparkles className="w-4 h-4" /> Generate My Itinerary
              </button>
            </div>

            {/* Generated itinerary */}
            {showItinerary && (
              <div
                className="p-6 mt-2"
                style={{
                  background: 'rgba(212,168,83,0.10)',
                  borderRadius: '14px',
                  border: '1px solid rgba(212,168,83,0.28)',
                }}
              >
                <p className="text-gold-300 text-xs font-bold uppercase tracking-widest mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Your Suggested Itinerary
                </p>
                <p className="text-white font-display text-lg font-bold mb-1">
                  {planDuration} · {planStyle}
                  {planInterests.length > 0 && ` · ${planInterests.slice(0, 2).join(' + ')}`}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  {(suggestedRoutes[planDuration] || suggestedRoutes['7 Days']).map((stop, i, arr) => (
                    <React.Fragment key={stop}>
                      <span
                        className="text-sm font-semibold px-3.5 py-1.5 rounded-full"
                        style={{
                          background: 'rgba(212,168,83,0.20)',
                          color: '#F3D279',
                          border: '1px solid rgba(212,168,83,0.30)',
                          fontFamily: 'Outfit, sans-serif',
                        }}
                      >
                        {stop}
                      </span>
                      {i < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-white/30" />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="mt-5 flex gap-3 flex-wrap">
                  <Link href="/planner" className="btn-yellow text-xs">
                    Build This Trip <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/contact" className="btn-outline-white text-xs">
                    Talk to a Specialist
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          10. QUIZ BANNER
          ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '320px' }}>
        <Image
          src="/images/view3.jpeg"
          alt="Sri Lanka scenic panoramic landscape"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(8,44,28,0.88) 0%, rgba(8,44,28,0.55) 60%, rgba(7,81,107,0.35) 100%)' }}
        />
        <div className="relative z-10 flex items-center justify-center min-h-[320px] text-center px-4 py-16">
          <div className="max-w-lg space-y-4">
            <span
              className="text-gold-300 text-[0.68rem] font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Not sure where to start?
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Find Your Perfect Sri Lanka Trip Style
            </h2>
            <p className="text-white/75 text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Answer 3 quick questions and get personalised destination suggestions from Araliya Ceylon.
            </p>
            <Link href="/quiz" className="btn-yellow text-sm inline-flex mt-2">
              <Sparkles className="w-4 h-4" /> Take the Free Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          11. WHY ARALIYA CEYLON
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#F9F6F0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Why Travel With Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#1A2B1F' }}>
              Why Araliya Ceylon?
            </h2>
          </div>

          {/* Editorial asymmetric layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Large left feature */}
            <div
              className="relative overflow-hidden p-8 sm:p-12 flex flex-col justify-end"
              style={{
                minHeight: '400px',
                borderRadius: '20px',
                background: '#082C1C',
              }}
            >
              <Image
                src="/images/srilankalandescpe.jpg"
                alt="Sri Lanka landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(8,44,28,0.72)', borderRadius: '20px' }} />
              <div className="relative z-10">
                <span className="text-gold-300 text-[0.68rem] font-bold uppercase tracking-[0.2em] mb-3 block" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Sri Lanka First
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                  Authentic Sri Lanka, Not a Package Tour
                </h3>
                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  We design travel experiences beyond the usual tourist trail — connecting you with local villages, family-run guesthouses, hidden viewpoints, and guides who grew up in the places you&apos;re visiting.
                </p>
              </div>
            </div>

            {/* Right 3 smaller cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: 'Local Experiences',
                  desc: 'Experience Sri Lankan culture through genuine local perspectives — not scripted tourist programs.',
                  color: '#1B4332',
                },
                {
                  title: 'Carefully Curated Journeys',
                  desc: 'Thoughtfully designed travel plans tailored to your pace, interests, and travel style.',
                  color: '#07516B',
                },
                {
                  title: 'Trusted Travel Support',
                  desc: 'Direct phone access to your Sri Lankan travel coordinator throughout your entire trip.',
                  color: '#D4A853',
                  textColor: '#0C2218',
                },
              ].map(({ title, desc, color, textColor }) => (
                <div
                  key={title}
                  className="p-6 flex gap-4"
                  style={{
                    background: color,
                    borderRadius: '16px',
                  }}
                >
                  <div>
                    <h4 className="font-display font-bold text-base leading-tight mb-1.5" style={{ color: textColor || '#fff' }}>
                      {title}
                    </h4>
                    <p className="text-sm leading-relaxed opacity-75" style={{ color: textColor || '#fff', fontFamily: 'Outfit, sans-serif' }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          12. TESTIMONIALS — Large editorial slider
          ══════════════════════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, #0C2218 0%, #082C1C 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-300 text-[0.7rem] font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {t('section.reviews.title')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
              What Travelers Say
            </h2>
          </div>

          {/* Large quote display */}
          <div
            className="p-8 sm:p-12 relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* Big quote mark */}
            <Quote
              className="absolute top-6 left-6 text-gold-500/25"
              style={{ width: '60px', height: '60px' }}
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(TESTIMONIALS[testimonialIdx]?.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>

            {/* Quote text */}
            <p
              className="testimonial-quote text-white/85 mb-8 max-w-3xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              &ldquo;{TESTIMONIALS[testimonialIdx]?.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="relative w-12 h-12 rounded-full overflow-hidden shrink-0"
                style={{ border: '2px solid rgba(212,168,83,0.5)' }}
              >
                <Image
                  src={TESTIMONIALS[testimonialIdx]?.avatar || '/images/girl1.jpeg'}
                  alt={TESTIMONIALS[testimonialIdx]?.name || 'Traveler'}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {TESTIMONIALS[testimonialIdx]?.name}
                </h4>
                <span className="text-white/45 text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {TESTIMONIALS[testimonialIdx]?.country}
                </span>
              </div>
            </div>

            {/* Nav controls */}
            <div className="absolute top-6 right-6 flex gap-2">
              <button
                onClick={() => setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIdx(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className="transition-all duration-300"
                style={{
                  width:  idx === testimonialIdx ? '28px' : '8px',
                  height: '4px',
                  borderRadius: '999px',
                  background: idx === testimonialIdx ? '#D4A853' : 'rgba(255,255,255,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          13. FINAL CTA — Cinematic full-bleed
          ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
        <Image
          src="/images/srilankalandescpe1.jpg"
          alt="Sri Lanka golden landscape panorama"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(8,44,28,0.55) 0%, rgba(8,44,28,0.88) 100%)',
          }}
        />
        <div className="relative z-10 flex items-center justify-center min-h-[420px] text-center px-4 py-20">
          <div className="max-w-2xl space-y-5">
            <span
              className="text-gold-300 text-[0.68rem] font-bold uppercase tracking-[0.24em]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Ready to Travel?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12]">
              Your Sri Lankan Story Starts Here
            </h2>
            <p
              className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg mx-auto"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Let us help you discover the island through unforgettable places, people and experiences.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link href="/planner" className="btn-yellow text-sm px-8 py-3.5">
                {t('btn.planTrip')} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline-white text-sm px-8 py-3.5">
                {t('btn.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DestinationModal destination={selectedDestination} onClose={() => setSelectedDestination(null)} />
    </div>
  );
}
