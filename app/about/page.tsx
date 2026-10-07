'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, ShieldCheck, Leaf, Heart, Compass, ArrowRight } from 'lucide-react';
import { TEAM_MEMBERS, BRAND } from '@/lib/data';
import HeroSlideshow from '@/components/HeroSlideshow';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const aboutSlides = [
    { src: '/images/srilanka1.jpeg', alt: 'Tea Country Misty Peaks',    location: 'Highland Tea Country' },
    { src: '/images/kandy.jpeg',     alt: 'Kandy Sacred City',          location: 'Kandy Lake & Temple' },
    { src: '/images/srilanka2.jpeg', alt: 'Wild Elephants',             location: 'Wildlife Sanctuaries' },
    { src: '/images/tea3.jpeg',      alt: 'Ceylon Tea Estate',          location: 'Pedro Tea Gardens' },
  ];

  const values = [
    { icon: ShieldCheck, label: 'Authenticity',          desc: 'Genuine local travel advice and honest communication with every traveler.' },
    { icon: Leaf,        label: 'Respect for Nature',    desc: 'Supporting eco-conscious stays and responsible wildlife safari experiences.' },
    { icon: Heart,       label: 'Sri Lankan Warmth',     desc: 'Friendly local hospitality from your first message through to your safe return.' },
    { icon: Compass,     label: 'Personalised Planning', desc: 'Tailoring routes specifically around what you enjoy most about travel.' },
  ];

  return (
    <div style={{ background: '#F9F6F0' }}>

      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <HeroSlideshow slides={aboutSlides} interval={5500} heightClass="h-72 sm:h-[400px]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white space-y-4">
          <span
            className="text-gold-300 text-[0.68rem] font-bold uppercase tracking-[0.2em]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            About Araliya Ceylon
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Rooted in Sri Lanka.<br />
            <span style={{ color: '#F3D279' }}>Built on Local Knowledge.</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
            We are a team of Sri Lankan travel coordinators dedicated to showing you the island with care, honesty, and local insight.
          </p>
        </div>
      </HeroSlideshow>

      {/* ── Our Story — Editorial Split ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
          style={{ borderRadius: '20px', boxShadow: '0 16px 60px rgba(0,0,0,0.10)' }}
        >
          {/* Photo collage side */}
          <div className="relative hidden lg:block" style={{ minHeight: '480px' }}>
            <Image
              src="/images/nine arch 2.jpeg"
              alt="Nine Arch Bridge Ella Sri Lanka"
              fill
              sizes="50vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(8,44,28,0.15)' }} />

            {/* Floating secondary image */}
            <div
              className="absolute bottom-8 right-8 w-48 h-36 overflow-hidden"
              style={{ borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.25)', border: '3px solid rgba(255,255,255,0.9)' }}
            >
              <Image src="/images/mirissa cocount hill.jpeg" alt="Coconut Tree Hill Mirissa" fill className="object-cover" />
            </div>
          </div>

          {/* Mobile hero (only on small screens) */}
          <div className="relative lg:hidden" style={{ height: '280px' }}>
            <Image src="/images/nine arch 2.jpeg" alt="Nine Arch Bridge" fill className="object-cover" />
          </div>

          {/* Text panel */}
          <div
            className="p-8 sm:p-12 flex flex-col justify-center space-y-5"
            style={{ background: '#fff' }}
          >
            <div>
              <span className="section-label">Our Journey</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-1" style={{ color: '#1A2B1F' }}>
                Showing Travellers the Real Sri Lanka
              </h2>
              <div className="divider" />
            </div>

            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Araliya Ceylon was built with one simple objective: to offer genuine Sri Lankan travel experiences that don&apos;t feel rushed or standardized. We believe the best journeys happen when you have time to enjoy early morning tea in the highlands, walk quiet village roads, and watch the ocean at dusk.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
              We work with private Sri Lankan driver-guides, boutique guesthouses, and local conservation initiatives across the island. Every itinerary we design is tailored around your preferred pace, accommodation choice, and travel dates.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4" style={{ borderTop: '1px solid #E8DFD0' }}>
              {[
                { value: 'Local',  label: '100% Sri Lankan Guides' },
                { value: 'Custom', label: 'Personalised Trips' },
                { value: '24/7',   label: 'On-Trip Assistance' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-3 text-center"
                  style={{ background: '#F0F7F2', borderRadius: '12px', border: '1px solid #C2DFCE' }}
                >
                  <span className="font-display font-bold text-lg text-brand-700 block">{value}</span>
                  <span className="text-[11px] text-gray-500 mt-0.5 block" style={{ fontFamily: 'Outfit, sans-serif' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision — Asymmetric ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className="p-8 space-y-4 relative overflow-hidden"
            style={{ background: '#1B4332', borderRadius: '18px' }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(212,168,83,0.20)', border: '1px solid rgba(212,168,83,0.35)' }}
            >
              <Target className="w-5 h-5 text-gold-300" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white">Our Purpose</h3>
            <div className="divider" />
            <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
              To help travellers experience Sri Lanka calmly and authentically — providing honest travel guidance, dependable private drivers, and carefully selected boutique stays.
            </p>
          </div>

          <div
            className="p-8 space-y-4"
            style={{ background: '#fff', borderRadius: '18px', border: '1px solid #E8DFD0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: '#F0F7F2', border: '1px solid #C2DFCE' }}
            >
              <Eye className="w-5 h-5 text-brand-700" />
            </div>
            <h3 className="font-display font-bold text-2xl" style={{ color: '#1A2B1F' }}>Our Approach</h3>
            <div className="divider" />
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
              To remain a trustworthy Sri Lankan tour company focused on quality service and personalized care rather than rushed mass tourism.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values — Dark section ─────────────────────────────── */}
      <section className="py-20" style={{ background: '#082C1C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-gold-300 text-[0.7rem] font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Commitments
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">What Guides Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="p-6 text-center space-y-4"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.09)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: 'rgba(212,168,83,0.15)', border: '1px solid rgba(212,168,83,0.30)' }}
                >
                  <Icon className="w-5 h-5 text-gold-300" />
                </div>
                <h4 className="font-display font-bold text-lg text-white">{label}</h4>
                <p className="text-xs text-white/55 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Members ───────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="section-label">Local Team</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#1A2B1F' }}>Meet Araliya Ceylon</h2>
          <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Our local travel coordinators and guide specialists based in Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="group overflow-hidden card-hover"
              style={{ borderRadius: '16px', background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
            >
              <div className="relative overflow-hidden" style={{ height: '260px' }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 img-overlay-gentle" />
              </div>
              <div className="p-5" style={{ borderTop: '3px solid #D4A853' }}>
                <h4 className="font-display font-bold text-base" style={{ color: '#1A2B1F' }}>{member.name}</h4>
                <p className="text-xs text-brand-600 font-semibold mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20" style={{ background: '#1B4332' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Have Questions About Traveling Sri Lanka?
              </h3>
              <p className="text-white/65 text-sm mt-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Talk to our local travel team directly via phone or message.
              </p>
            </div>
            <div className="flex gap-3 shrink-0 flex-wrap">
              <Link href="/contact" className="btn-yellow text-sm">
                Contact Araliya Ceylon <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/planner" className="btn-outline-white text-sm">
                Plan My Trip
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
