'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Search, MapPin, Star, Filter, ArrowRight } from 'lucide-react';
import { DESTINATIONS, Destination } from '@/lib/data';
import DestinationModal from '@/components/DestinationModal';
import HeroSlideshow from '@/components/HeroSlideshow';
import { useLanguage } from '@/context/LanguageContext';

function LocationsContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const locationsSlides = [
    { src: '/images/sigiriya1.jpeg', alt: 'Sigiriya Rock Fortress', location: 'Sigiriya Ancient Citadel' },
    { src: '/images/galle3.jpeg', alt: 'Galle Fort Ramparts', location: 'Galle Dutch Fort' },
    { src: '/images/mirissa4.jpeg', alt: 'Mirissa Beach', location: 'Mirissa Southern Coast' },
    { src: '/images/nine arch 2.jpeg', alt: 'Ella Nine Arch Bridge', location: 'Ella Nine Arch Bridge' },
  ];

  const categories = ['All', 'Beach', 'Mountain', 'Wildlife', 'Heritage', 'Cultural', 'Nature'];

  useEffect(() => {
    if (initialCategory && initialCategory !== 'All') {
      const matched = categories.find(c => c.toLowerCase() === initialCategory.toLowerCase());
      if (matched) setActiveCategory(matched);
    }
  }, [initialCategory]);

  const filteredDestinations = DESTINATIONS.filter((d) => {
    const matchesCategory = activeCategory === 'All' || d.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-16">
      {/* Hero Banner — HD images */}
      <HeroSlideshow slides={locationsSlides} interval={5500} heightClass="h-72 sm:h-[380px]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white space-y-3">
          <span className="section-label text-yellowBrand-300">Araliya Ceylon Destinations</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Explore Places in Sri Lanka
          </h1>
          <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto">
            From central rock fortresses and misty tea hills to calm southern ocean bays.
          </p>
        </div>
      </HeroSlideshow>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 space-y-8">

        {/* Search & Filter */}
        <div
          className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6"
          style={{ borderBottom: '1px solid #E8DFD0' }}
        >
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations, provinces…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none transition-colors"
              style={{
                background: '#fff',
                border: '1.5px solid #E8DFD0',
                borderRadius: '999px',
                fontFamily: 'Outfit, sans-serif',
              }}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 flex-wrap">
            <span className="text-xs font-bold text-gray-400 uppercase flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-xs font-semibold px-4 py-1.5 rounded-full shrink-0 transition-all"
                style={{
                  background: activeCategory.toLowerCase() === cat.toLowerCase() ? '#1B4332' : '#F9F6F0',
                  color:      activeCategory.toLowerCase() === cat.toLowerCase() ? '#fff'    : '#4B5563',
                  border:     activeCategory.toLowerCase() === cat.toLowerCase() ? 'none'   : '1.5px solid #E8DFD0',
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400 font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} in Sri Lanka
          </span>
          {(activeCategory !== 'All' || searchQuery !== '') && (
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="text-xs font-semibold text-brand-700 hover:underline"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Destinations grid — rounded cards */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => setSelectedDestination(dest)}
                className="group cursor-pointer card-hover overflow-hidden"
                style={{ borderRadius: '14px', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
              >
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 img-overlay-bottom" />
                  <div className="absolute top-3 left-3">
                    <span className="location-badge">{dest.category}</span>
                  </div>
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 text-[11px] text-amber-300 font-bold"
                    style={{ background: 'rgba(0,0,0,0.55)', borderRadius: '999px' }}
                  >
                    <Star className="w-3 h-3 fill-amber-300" /> {dest.rating}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-display font-bold text-base leading-tight">{dest.name}</h3>
                    <p className="text-[11px] text-white/70 flex items-center gap-1 mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      <MapPin className="w-3 h-3 text-gold-300" /> {dest.province}
                    </p>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>{dest.description}</p>
                  <div className="flex items-center justify-between pt-1" style={{ borderTop: '1px solid #F0F0F0' }}>
                    <span className="text-xs font-bold text-brand-700" style={{ fontFamily: 'Outfit, sans-serif' }}>{dest.averageBudget}</span>
                    <span className="text-[10px] text-gray-400" style={{ fontFamily: 'Outfit, sans-serif' }}>Best: {dest.bestTime}</span>
                  </div>
                  <button className="text-xs font-semibold text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="py-16 text-center space-y-4"
            style={{ background: '#F0F7F2', borderRadius: '16px', border: '2px dashed #C2DFCE' }}
          >
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>No destinations found matching your criteria.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="btn-primary text-xs py-2 px-5"
            >
              Show All Destinations
            </button>
          </div>
        )}
      </section>

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
