'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Search, MapPin, Star, Filter, Heart, ArrowRight } from 'lucide-react';
import { DESTINATIONS, Destination } from '@/lib/data';
import DestinationModal from '@/components/DestinationModal';

import HeroSlideshow from '@/components/HeroSlideshow';

function LocationsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const locationsSlides = [
    { src: '/images/srilanka6.jpeg', alt: 'Sri Lanka Tropical Coastline', location: 'Golden Coast Beaches' },
    { src: '/images/galle3.jpeg', alt: 'Historic Galle Fort Ramparts', location: 'Galle Heritage Coast' },
    { src: '/images/mirissa10.jpeg', alt: 'Mirissa Palm Hill & Bay', location: 'Coconut Tree Hill, Mirissa' },
    { src: '/images/mistymountant1.jpeg', alt: 'Ella Highland Misty Valleys', location: 'Ella Mountain Trails' },
  ];

  useEffect(() => {
    if (initialCategory && initialCategory !== 'All') {
      const matched = categories.find(c => c.toLowerCase() === initialCategory.toLowerCase());
      if (matched) setActiveCategory(matched);
    }
  }, [initialCategory]);

  const categories = ['All', 'Beach', 'Mountain', 'Wildlife', 'Heritage', 'Cultural', 'Nature'];

  const filteredDestinations = DESTINATIONS.filter((d) => {
    const matchesCategory = activeCategory === 'All' || d.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner with Animated Slideshow */}
      <HeroSlideshow slides={locationsSlides} interval={4800} heightClass="h-80 sm:h-[400px]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white space-y-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 backdrop-blur-md shadow-lg">
            Explore Sri Lanka
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Where Will You <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Go Next?</span>
          </h1>
          <p className="text-emerald-50 text-sm sm:text-lg font-medium max-w-2xl mx-auto drop-shadow-md">
            Explore diverse landscapes, ancient fortresses, misty peaks, and turquoise beaches across Sri Lanka.
          </p>
        </div>
      </HeroSlideshow>

      {/* Filter and Search Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Search & Category Tabs Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-sand-200 shadow-sm space-y-4">
          
          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations (e.g. Sigiriya, Ella, Galle)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-sand-50 border border-sand-200 rounded-2xl text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-brand-700"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-gray-400 uppercase mr-1 shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activeCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-brand-700 text-white shadow-md'
                    : 'bg-sand-100 text-gray-700 hover:bg-sand-200 border border-sand-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs text-gray-500 font-semibold px-2">
          <span>Showing {filteredDestinations.length} destination(s)</span>
          {activeCategory !== 'All' && (
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="text-brand-700 underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Destination Card Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover-lift group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-brand-800 shadow">
                      {dest.category}
                    </div>

                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full text-xs font-bold text-amber-300 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-300" />
                      {dest.rating}
                    </div>

                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="font-display font-bold text-xl drop-shadow">{dest.name}</h3>
                      <p className="text-[11px] text-gray-200 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-400" /> {dest.province}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>
                    
                    <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-medium text-gray-500">
                      <span className="bg-sand-100 px-2 py-0.5 rounded-md">Best: {dest.bestTime}</span>
                      <span className="bg-sand-100 px-2 py-0.5 rounded-md">{dest.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-sand-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Est. Budget</span>
                    <span className="text-sm font-bold text-brand-700 font-display">{dest.averageBudget}</span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedDestination(dest)}
                    className="px-4 py-2 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs shadow-sm transition flex items-center gap-1"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-sand-200 space-y-3">
            <p className="text-gray-500 text-sm">No destinations found matching your filter criteria.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-brand-700 text-white rounded-xl text-xs font-bold"
            >
              Show All Destinations
            </button>
          </div>
        )}
      </section>

      {/* Destination Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </div>
  );
}

export default function LocationsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen p-12 text-center text-gray-500">Loading locations...</div>}>
      <LocationsContent />
    </Suspense>
  );
}
