'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, ShieldCheck, Leaf, Heart, Compass, ArrowRight } from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/data';

import HeroSlideshow from '@/components/HeroSlideshow';

export default function AboutPage() {
  const aboutSlides = [
    { src: '/images/srilanka1.jpeg', alt: 'Tea Country Misty Peaks', location: 'Highland Tea Country' },
    { src: '/images/srilanka5.jpeg', alt: 'Heritage Ancient Rock', location: 'Cultural Heritage Triangle' },
    { src: '/images/srilanka2.jpeg', alt: 'Wild Elephants Conservation', location: 'Wildlife Sanctuaries' },
    { src: '/images/tea3.jpeg', alt: 'Lush Ceylon Tea Estate', location: 'Pedro Tea Gardens' },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner with Animated Slideshow */}
      <HeroSlideshow slides={aboutSlides} interval={5000} heightClass="h-80 sm:h-[420px]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 backdrop-blur-md shadow-lg">
            About LankaVista
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Travel With Purpose. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Explore With Heart.</span>
          </h1>
          <p className="text-emerald-50 text-sm sm:text-lg font-medium max-w-2xl mx-auto drop-shadow-md">
            From local secrets to unforgettable adventures, we are Sri Lanka's leading travel specialists dedicated to showing you authentic island life.
          </p>
        </div>
      </HeroSlideshow>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-sand-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradient Ring */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Our Heritage & Passion</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Crafting Unforgettable <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Sri Lankan Journeys</span>
            </h2>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              LankaVista Travel is a passionate team of native Sri Lankan travel specialists dedicated to creating authentic, meaningful travel experiences. We believe travel is not just about visiting places, but about connecting deeply with local culture, people, and pristine nature.
            </p>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From misty tea highlands to ancient UNESCO kingdoms and wild leopard safaris, our mission is to show you the real Sri Lanka with warmth and care.
            </p>

            {/* Quick Stats Chips */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-sand-200">
              <div className="p-3 rounded-2xl bg-sand-50 border border-sand-200 text-center">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-emerald-700 block">10+</span>
                <span className="text-[11px] text-gray-500 font-medium">Years Experience</span>
              </div>
              <div className="p-3 rounded-2xl bg-sand-50 border border-sand-200 text-center">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-emerald-700 block">100%</span>
                <span className="text-[11px] text-gray-500 font-medium">Tailored Trips</span>
              </div>
              <div className="p-3 rounded-2xl bg-sand-50 border border-sand-200 text-center">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-emerald-700 block">50+</span>
                <span className="text-[11px] text-gray-500 font-medium">Destinations</span>
              </div>
            </div>
          </div>

          {/* Right Modern 4-Photo Collaged Image Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[380px] sm:h-[450px]">
              
              {/* Photo 1: Top-Right Tilted (Ella Nine Arch Train) */}
              <div className="absolute top-0 right-0 w-[55%] h-[52%] rounded-3xl overflow-hidden shadow-lg transform rotate-6 border-4 border-white transition-all duration-500 hover:rotate-2 hover:scale-105 hover:z-20 group">
                <Image
                  src="/images/nine arch 2.jpeg"
                  alt="Ella Nine Arch Railway"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="font-display font-bold text-xs block">Ella Nine Arch</span>
                </div>
              </div>

              {/* Photo 2: Top-Left Primary (Sigiriya Fortress) */}
              <div className="absolute top-2 left-0 w-[58%] h-[54%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:scale-105 hover:z-20 group">
                <Image
                  src="/images/srilanka5.jpeg"
                  alt="Ancient Sigiriya Rock Fortress"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="font-display font-bold text-xs sm:text-sm block">Sigiriya Fortress</span>
                  <span className="text-[10px] text-emerald-300">UNESCO Heritage</span>
                </div>
              </div>

              {/* Photo 3: Bottom-Left Tilted (Yala Wildlife Safari) */}
              <div className="absolute bottom-2 left-2 w-[52%] h-[48%] rounded-3xl overflow-hidden shadow-xl transform -rotate-6 border-4 border-white transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-20 group">
                <Image
                  src="/images/srilanka2.jpeg"
                  alt="Wild Elephant Safari Yala"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="font-display font-bold text-xs block">Wild Safaris</span>
                </div>
              </div>

              {/* Photo 4: Bottom-Right (Mirissa Coconut Hill) */}
              <div className="absolute bottom-0 right-2 w-[54%] h-[50%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:scale-105 hover:z-20 group">
                <Image
                  src="/images/mirissa cocount hill.jpeg"
                  alt="Mirissa Coconut Tree Hill Beach"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="font-display font-bold text-xs sm:text-sm block">Coconut Tree Hill</span>
                  <span className="text-[10px] text-emerald-300">Mirissa Golden Coast</span>
                </div>
              </div>

              {/* Floating Center Glassmorphism Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-950/90 backdrop-blur-2xl border border-emerald-400/50 px-4 py-2.5 rounded-2xl text-white shadow-2xl flex items-center space-x-2.5 z-30 ring-2 ring-emerald-400/30">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-amber-300 flex items-center justify-center font-bold text-base shadow-md">
                  ★
                </div>
                <div>
                  <span className="font-display font-extrabold text-xs sm:text-sm text-white block leading-none">4.9 / 5.0 Rating</span>
                  <span className="text-[10px] text-emerald-300 font-medium">500+ Verified Reviews</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-sand-100 p-8 rounded-3xl border border-sand-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-700 text-white flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To create meaningful travel experiences while connecting travelers with the rich beauty, culture, and warm hospitality of Sri Lanka.
            </p>
          </div>

          <div className="bg-sand-100 p-8 rounded-3xl border border-sand-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become the most trusted gateway for discovering authentic Sri Lankan experiences while promoting eco-friendly, responsible tourism.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-sand-100/60 py-16 border-y border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-700 font-bold text-xs uppercase tracking-widest block mb-1">Pillars of Excellence</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-sand-200 text-center space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-gray-900">Authenticity</h4>
              <p className="text-xs text-gray-500">Genuine local experiences and honest advice.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand-200 text-center space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-gray-900">Sustainability</h4>
              <p className="text-xs text-gray-500">Protecting wild habitats & empowering local towns.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand-200 text-center space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-gray-900">Hospitality</h4>
              <p className="text-xs text-gray-500">Warm island welcome from start to finish.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand-200 text-center space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mx-auto">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-gray-900">Adventure</h4>
              <p className="text-xs text-gray-500">Unlocking thrilling hidden gems across the island.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-700 font-bold text-xs uppercase tracking-widest block mb-1">Local Experts</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Meet Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-sm text-center hover-lift">
              <div className="relative h-64 w-full">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h4 className="font-display font-bold text-lg text-gray-900">{member.name}</h4>
                <p className="text-xs text-brand-700 font-semibold mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainable Travel Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 text-white rounded-3xl p-8 sm:p-12 border border-brand-800 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/srilanka2.jpeg"
              alt="Elephants Sustainable Travel"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Sustainable Travel
            </span>
            <h3 className="font-display text-3xl font-bold text-white">
              Travel Better. Leave a Positive Footprint.
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">✓ Supporting local village communities and artisan families</li>
              <li className="flex items-center gap-2">✓ Eco-friendly travel options & carbon-conscious itineraries</li>
              <li className="flex items-center gap-2">✓ Responsible wildlife safari practices</li>
              <li className="flex items-center gap-2">✓ Elephant & marine conservation support</li>
            </ul>
            <div className="pt-4">
              <Link
                href="/planner"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md"
              >
                <span>Plan Sustainable Trip</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
