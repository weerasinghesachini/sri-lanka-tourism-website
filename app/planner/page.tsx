'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { 
  Plus, Trash2, Calendar, Users, DollarSign, Compass, MapPin, 
  Sparkles, CheckCircle2, ArrowRight, Printer, Share2
} from 'lucide-react';
import { DESTINATIONS, Destination } from '@/lib/data';

import HeroSlideshow from '@/components/HeroSlideshow';

function TripPlannerContent() {
  const searchParams = useSearchParams();
  const initialDest = searchParams?.get('dest');

  const [selectedDestIds, setSelectedDestIds] = useState<string[]>(['ella', 'sigiriya']);
  const [numTravelers, setNumTravelers] = useState<number>(2);
  const [numDays, setNumDays] = useState<number>(5);
  const [travelTier, setTravelTier] = useState<'standard' | 'deluxe' | 'luxury'>('deluxe');
  const [addedToast, setAddedToast] = useState(false);

  const plannerSlides = [
    { src: '/images/ninearch1.jpeg', alt: 'Ella Blue Train & Nine Arch Bridge', location: 'Ella Mountain Railway' },
    { src: '/images/sigiriya1.jpeg', alt: 'Sigiriya Ancient Lion Rock Fortress', location: 'Sigiriya Cultural Fortress' },
    { src: '/images/yalasafari1.jpeg', alt: 'Yala National Park Wildlife Jeep', location: 'Yala Safari Park' },
    { src: '/images/kandy1.jpeg', alt: 'Kandy Temple of Tooth Lake', location: 'Kandy Sacred Hill Capital' },
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

  // Budget Calculator Math
  const tierMultiplier = travelTier === 'standard' ? 1.0 : travelTier === 'deluxe' ? 1.4 : 2.1;
  const baseRatePerDay = selectedDestObjects.reduce((acc, curr) => acc + curr.pricePerPerson, 0) / (selectedDestObjects.length || 1);
  const totalEstimatedCost = Math.round((baseRatePerDay * numDays * numTravelers * tierMultiplier) + (numTravelers * 80));

  const handleBookNow = () => {
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 4000);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner with Animated Slideshow */}
      <HeroSlideshow slides={plannerSlides} interval={5000} heightClass="h-80 sm:h-[400px]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white space-y-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 backdrop-blur-md shadow-lg">
            Interactive Trip Builder
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Plan Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Perfect Trip</span>
          </h1>
          <p className="text-emerald-50 text-sm sm:text-lg font-medium max-w-2xl mx-auto drop-shadow-md">
            Create your dream itinerary, select destinations, and estimate your budget in real time.
          </p>
        </div>
      </HeroSlideshow>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: 1. Add Destinations & 2. Budget Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* STEP 1: ADD DESTINATIONS */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-sm space-y-5">
            <div className="flex justify-between items-center border-b border-sand-100 pb-4">
              <div>
                <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block">Step 1</span>
                <h2 className="font-display text-2xl font-bold text-gray-900">Select Destinations</h2>
              </div>
              <span className="text-xs text-gray-500 font-semibold bg-sand-100 px-3 py-1 rounded-full">
                {selectedDestIds.length} Selected
              </span>
            </div>

            {/* Destination Selection Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DESTINATIONS.map((dest) => {
                const isSelected = selectedDestIds.includes(dest.id);
                return (
                  <button
                    key={dest.id}
                    onClick={() => toggleDestination(dest.id)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-28 relative overflow-hidden ${
                      isSelected
                        ? 'border-brand-700 bg-brand-50/90 text-brand-950 shadow-md ring-2 ring-brand-700/20'
                        : 'border-sand-200 bg-sand-50/60 text-gray-700 hover:bg-white hover:border-sand-300'
                    }`}
                  >
                    <div className="relative h-14 w-full rounded-xl overflow-hidden mb-1">
                      <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                      {isSelected && (
                        <div className="absolute inset-0 bg-brand-900/40 flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
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

          {/* STEP 2: ESTIMATE YOUR BUDGET */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-sm space-y-6">
            <div className="border-b border-sand-100 pb-4">
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block">Step 2</span>
              <h2 className="font-display text-2xl font-bold text-gray-900">Estimate Your Budget</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Number of Travelers */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-brand-700" /> Number of Travelers
                </label>
                <div className="flex items-center space-x-3 bg-sand-50 border border-sand-200 p-2 rounded-2xl justify-between">
                  <button
                    onClick={() => setNumTravelers(Math.max(1, numTravelers - 1))}
                    className="w-9 h-9 rounded-xl bg-white border border-sand-300 text-gray-700 font-bold hover:bg-sand-100 text-base"
                  >
                    -
                  </button>
                  <span className="font-display font-extrabold text-lg text-gray-900">{numTravelers}</span>
                  <button
                    onClick={() => setNumTravelers(numTravelers + 1)}
                    className="w-9 h-9 rounded-xl bg-white border border-sand-300 text-gray-700 font-bold hover:bg-sand-100 text-base"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Number of Days */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-700" /> Total Trip Days
                </label>
                <div className="flex items-center space-x-3 bg-sand-50 border border-sand-200 p-2 rounded-2xl justify-between">
                  <button
                    onClick={() => setNumDays(Math.max(1, numDays - 1))}
                    className="w-9 h-9 rounded-xl bg-white border border-sand-300 text-gray-700 font-bold hover:bg-sand-100 text-base"
                  >
                    -
                  </button>
                  <span className="font-display font-extrabold text-lg text-gray-900">{numDays} Days</span>
                  <button
                    onClick={() => setNumDays(numDays + 1)}
                    className="w-9 h-9 rounded-xl bg-white border border-sand-300 text-gray-700 font-bold hover:bg-sand-100 text-base"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Hotel Tier Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-gray-700 block">Accommodation & Transport Tier</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', title: 'Standard', desc: '3★ Hotels' },
                  { id: 'deluxe', title: 'Deluxe', desc: '4★ Boutique' },
                  { id: 'luxury', title: 'Luxury', desc: '5★ Resorts' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setTravelTier(tier.id as any)}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      travelTier === tier.id
                        ? 'border-brand-700 bg-brand-700 text-white font-bold shadow-md'
                        : 'border-sand-200 bg-sand-50 text-gray-700 hover:bg-sand-100'
                    }`}
                  >
                    <span className="block text-xs sm:text-sm">{tier.title}</span>
                    <span className="text-[10px] opacity-80 block mt-0.5">{tier.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Total Cost Banner */}
            <div className="p-5 rounded-2xl bg-brand-900 text-white flex items-center justify-between shadow-lg">
              <div>
                <span className="text-xs text-emerald-300 block uppercase font-bold tracking-wider">Total Estimated Cost</span>
                <span className="text-xs text-gray-300">Includes private driver, stays & entry fees</span>
              </div>
              <div className="text-right">
                <span className="font-display text-3xl font-extrabold text-amber-300">${totalEstimatedCost}</span>
                <span className="text-[11px] text-gray-400 block font-normal">USD</span>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Trip Summary & Generated Itinerary (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-lg space-y-6 sticky top-24">
            <div className="flex justify-between items-center border-b border-sand-100 pb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900">Your Itinerary Breakdown</h3>
                <p className="text-xs text-gray-500">{numDays} Days / {numTravelers} Traveler(s)</p>
              </div>
              <button
                onClick={() => window.print()}
                className="p-2 rounded-xl bg-sand-100 hover:bg-sand-200 text-gray-600 transition"
                title="Print Itinerary"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>

            {/* Destinations Selected List */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Destinations</span>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedDestObjects.map((dest) => (
                  <div key={dest.id} className="flex items-center justify-between p-2.5 rounded-xl bg-sand-50 border border-sand-200">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
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
                        className="text-gray-400 hover:text-rose-500 transition p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Generated Day-by-Day Timeline Preview */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Generated Timeline</span>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="p-3 rounded-xl bg-sand-100 border-l-4 border-brand-700">
                  <span className="font-bold text-brand-900 block">Day 1 - 2: Arrival & Exploration</span>
                  <p className="text-[11px] text-gray-600 mt-0.5">Private airport transfer & check-in at {selectedDestObjects[0]?.name || 'Colombo'}.</p>
                </div>
                {selectedDestObjects.length > 1 && (
                  <div className="p-3 rounded-xl bg-sand-100 border-l-4 border-emerald-500">
                    <span className="font-bold text-brand-900 block">Day 3 - {numDays - 1}: Central Highlands & Safaris</span>
                    <p className="text-[11px] text-gray-600 mt-0.5">Scenic transfers to {selectedDestObjects[1]?.name} & guided tour experience.</p>
                  </div>
                )}
                <div className="p-3 rounded-xl bg-sand-100 border-l-4 border-amber-500">
                  <span className="font-bold text-brand-900 block">Day {numDays}: Coastal Relaxation & Farewell</span>
                  <p className="text-[11px] text-gray-600 mt-0.5">Souvenir shopping, beach sunset, and departure transfer.</p>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="pt-4 border-t border-sand-100 space-y-3">
              {addedToast && (
                <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-400 text-emerald-800 text-xs font-bold text-center animate-in fade-in">
                  ✓ Itinerary Reserved! Our travel specialist will contact you shortly.
                </div>
              )}
              <button
                onClick={handleBookNow}
                className="w-full py-3.5 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-xl hover:shadow-brand-700/40 transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Reserve This Itinerary</span>
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
