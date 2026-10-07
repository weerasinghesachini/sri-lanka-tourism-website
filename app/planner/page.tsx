'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { 
  Calendar, Users, CheckCircle2, ArrowRight, Printer, Trash2
} from 'lucide-react';
import { DESTINATIONS } from '@/lib/data';
import HeroSlideshow from '@/components/HeroSlideshow';
import { useLanguage } from '@/context/LanguageContext';

function TripPlannerContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const initialDest = searchParams?.get('dest');

  const [selectedDestIds, setSelectedDestIds] = useState<string[]>(['ella', 'sigiriya']);
  const [numTravelers, setNumTravelers] = useState<number>(2);
  const [numDays, setNumDays] = useState<number>(7);
  const [travelTier, setTravelTier] = useState<'standard' | 'deluxe' | 'luxury'>('deluxe');
  const [addedToast, setAddedToast] = useState(false);

  const plannerSlides = [
    { src: '/images/nine arch 2.jpeg', alt: 'Ella Blue Train & Nine Arch Bridge', location: 'Ella Mountain Railway' },
    { src: '/images/sigiriya.jpeg', alt: 'Sigiriya Ancient Lion Rock Citadel', location: 'Sigiriya Cultural Fortress' },
    { src: '/images/yala safari.jpeg', alt: 'Yala National Park Wildlife Safari', location: 'Yala Safari Park' },
    { src: '/images/kandy.jpeg', alt: 'Kandy Temple of Tooth Lake', location: 'Kandy Sacred Capital' },
  ];

  useEffect(() => {
    if (initialDest && !selectedDestIds.includes(initialDest)) {
      setSelectedDestIds(prev => [...prev, initialDest]);
    }
  }, [initialDest]);

  const toggleDestination = (id: string) => {
    if (selectedDestIds.includes(id)) {
      if (selectedDestIds.length > 1) {
        setSelectedDestIds(selectedDestIds.filter(d => d !== id));
      }
    } else {
      setSelectedDestIds([...selectedDestIds, id]);
    }
  };

  const selectedDestObjects = DESTINATIONS.filter(d => selectedDestIds.includes(d.id));

  // Cost Estimation Math
  const tierMultiplier = travelTier === 'standard' ? 1.0 : travelTier === 'deluxe' ? 1.4 : 2.0;
  const baseRatePerDay = selectedDestObjects.reduce((acc, curr) => acc + curr.pricePerPerson, 0) / (selectedDestObjects.length || 1);
  const totalEstimatedCost = Math.round((baseRatePerDay * numDays * numTravelers * tierMultiplier) + (numTravelers * 70));

  const handleBookNow = () => {
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 5000);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Banner */}
      <HeroSlideshow slides={plannerSlides} interval={5500} heightClass="h-72 sm:h-[380px]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white space-y-3">
          <span className="section-label text-yellowBrand-300">
            Araliya Ceylon Trip Builder
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Plan Your Sri Lanka Trip
          </h1>
          <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto">
            Select your preferred destinations, duration, and accommodation style to build an estimated itinerary.
          </p>
        </div>
      </HeroSlideshow>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Destinations & Budget Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* STEP 1: SELECT DESTINATIONS */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-cream-300 shadow-card space-y-5">
            <div className="flex justify-between items-center border-b border-cream-200 pb-3">
              <div>
                <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block">Step 1</span>
                <h2 className="font-display text-2xl font-bold text-gray-900">Select Sri Lankan Destinations</h2>
              </div>
              <span className="text-xs text-brand-700 font-semibold bg-brand-50 px-3 py-1 rounded border border-brand-200">
                {selectedDestIds.length} Selected
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DESTINATIONS.map((dest) => {
                const isSelected = selectedDestIds.includes(dest.id);
                return (
                  <button
                    key={dest.id}
                    onClick={() => toggleDestination(dest.id)}
                    className={`p-3 rounded-lg border text-left transition-all flex flex-col justify-between h-28 relative overflow-hidden ${
                      isSelected
                        ? 'border-brand-700 bg-brand-50 text-brand-900 ring-1 ring-brand-700'
                        : 'border-cream-300 bg-cream-50 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <div className="relative h-14 w-full rounded overflow-hidden mb-1">
                      <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                      {isSelected && (
                        <div className="absolute inset-0 bg-brand-700/40 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-display font-bold text-xs truncate">{dest.name}</span>
                      <span className="text-[10px] text-gray-500 font-semibold">${dest.pricePerPerson}/d</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: TRIP DETAILS */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-cream-300 shadow-card space-y-6">
            <div className="border-b border-cream-200 pb-3">
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block">Step 2</span>
              <h2 className="font-display text-2xl font-bold text-gray-900">Customize Travel Parameters</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Number of Travelers */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-brand-700" /> Number of Travelers
                </label>
                <div className="flex items-center space-x-3 bg-cream-100 border border-cream-300 p-2 rounded-lg justify-between">
                  <button
                    onClick={() => setNumTravelers(Math.max(1, numTravelers - 1))}
                    className="w-8 h-8 rounded bg-white border border-cream-300 text-gray-800 font-bold hover:bg-cream-200"
                  >
                    -
                  </button>
                  <span className="font-display font-bold text-base text-gray-900">{numTravelers} Person(s)</span>
                  <button
                    onClick={() => setNumTravelers(numTravelers + 1)}
                    className="w-8 h-8 rounded bg-white border border-cream-300 text-gray-800 font-bold hover:bg-cream-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Number of Days */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-700" /> Total Trip Duration
                </label>
                <div className="flex items-center space-x-3 bg-cream-100 border border-cream-300 p-2 rounded-lg justify-between">
                  <button
                    onClick={() => setNumDays(Math.max(1, numDays - 1))}
                    className="w-8 h-8 rounded bg-white border border-cream-300 text-gray-800 font-bold hover:bg-cream-200"
                  >
                    -
                  </button>
                  <span className="font-display font-bold text-base text-gray-900">{numDays} Days</span>
                  <button
                    onClick={() => setNumDays(numDays + 1)}
                    className="w-8 h-8 rounded bg-white border border-cream-300 text-gray-800 font-bold hover:bg-cream-200"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Accommodation Tier Selector */}
            <div className="space-y-2 pt-1">
              <label className="text-xs font-bold text-gray-700 block">Accommodation & Transport Level</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', title: 'Standard', desc: 'Comfortable Guesthouses & 3★' },
                  { id: 'deluxe', title: 'Deluxe', desc: '4★ Boutique & Tea Estates' },
                  { id: 'luxury', title: 'Luxury', desc: '5★ Luxury Resorts & Villas' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setTravelTier(tier.id as any)}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      travelTier === tier.id
                        ? 'border-brand-700 bg-brand-700 text-white font-bold'
                        : 'border-cream-300 bg-cream-100 text-gray-700 hover:bg-cream-200'
                    }`}
                  >
                    <span className="block text-xs font-bold">{tier.title}</span>
                    <span className="text-[10px] opacity-80 block mt-0.5">{tier.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Total Estimated Cost Box */}
            <div className="p-5 rounded-lg bg-brand-700 text-white flex items-center justify-between shadow-md">
              <div>
                <span className="text-xs text-yellowBrand-300 block font-bold uppercase tracking-wider">Estimated Total Cost</span>
                <span className="text-xs text-white/80">Private driver-guide, vehicle, fuel & boutique stays</span>
              </div>
              <div className="text-right">
                <span className="font-display text-3xl font-bold text-yellowBrand-400">${totalEstimatedCost}</span>
                <span className="text-[10px] text-white/70 block uppercase font-medium">USD</span>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Itinerary Breakdown (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-cream-300 shadow-card space-y-6 sticky top-24">
            <div className="flex justify-between items-center border-b border-cream-200 pb-3">
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900">Itinerary Overview</h3>
                <p className="text-xs text-gray-500">{numDays} Days / {numTravelers} Traveler(s)</p>
              </div>
              <button
                onClick={() => window.print()}
                className="p-2 rounded bg-cream-100 hover:bg-cream-200 text-gray-700 transition"
                title="Print Itinerary"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>

            {/* Selected Destinations List */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Destinations Included</span>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedDestObjects.map((dest) => (
                  <div key={dest.id} className="flex items-center justify-between p-2.5 rounded bg-cream-100 border border-cream-200">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-10 h-10 rounded overflow-hidden shrink-0">
                        <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-xs text-gray-900">{dest.name}</h4>
                        <span className="text-[10px] text-gray-500">{dest.province}</span>
                      </div>
                    </div>
                    {selectedDestObjects.length > 1 && (
                      <button
                        onClick={() => toggleDestination(dest.id)}
                        className="text-gray-400 hover:text-rose-600 transition p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Generated Timeline Preview */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Suggested Route Timeline</span>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="p-3 rounded bg-cream-100 border-l-4 border-brand-700">
                  <span className="font-bold text-brand-900 block">Day 1 - 2: Arrival & City Transfer</span>
                  <p className="text-[11px] text-gray-600 mt-0.5">Pickup from BIA Colombo Airport, check-in at {selectedDestObjects[0]?.name || 'Colombo'}.</p>
                </div>
                {selectedDestObjects.length > 1 && (
                  <div className="p-3 rounded bg-cream-100 border-l-4 border-ocean-600">
                    <span className="font-bold text-brand-900 block">Day 3 - {numDays - 1}: Highlands & Safaris</span>
                    <p className="text-[11px] text-gray-600 mt-0.5">Scenic mountain drive to {selectedDestObjects[1]?.name} with guided excursions.</p>
                  </div>
                )}
                <div className="p-3 rounded bg-cream-100 border-l-4 border-yellowBrand-500">
                  <span className="font-bold text-brand-900 block">Day {numDays}: Coastal Walk & Departure</span>
                  <p className="text-[11px] text-gray-600 mt-0.5">Relaxed beach morning, local tea tasting, and departure airport transfer.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-cream-200 space-y-3">
              {addedToast && (
                <div className="p-3 rounded bg-green-50 border border-green-300 text-green-800 text-xs font-semibold text-center">
                  ✓ Request Sent! An Araliya Ceylon travel specialist will contact you within 24 hours.
                </div>
              )}
              <button
                onClick={handleBookNow}
                className="btn-primary w-full py-3.5 text-sm font-bold justify-center"
              >
                <span>Inquire With Araliya Ceylon</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default function TripPlannerPage() {
  return (
    <Suspense fallback={<div className="min-h-screen p-12 text-center text-gray-500">Loading trip planner...</div>}>
      <TripPlannerContent />
    </Suspense>
  );
}
