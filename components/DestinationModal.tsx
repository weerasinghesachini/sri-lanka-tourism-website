'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, Calendar, Clock, DollarSign, Compass, CheckCircle2, MapPin } from 'lucide-react';
import { Destination } from '@/lib/data';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
}

export default function DestinationModal({ destination, onClose }: DestinationModalProps) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  if (!destination) return null;

  const images = destination.gallery && destination.gallery.length > 0
    ? destination.gallery
    : [destination.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-sand-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Image */}
        <div className="relative h-64 sm:h-80 w-full shrink-0">
          <Image
            src={images[selectedImgIndex] || destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-700/90 text-emerald-200 backdrop-blur-md">
                {destination.category}
              </span>
              <span className="flex items-center text-xs font-semibold bg-black/40 px-2.5 py-1 rounded-full text-amber-300">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                {destination.province}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {destination.name}
            </h2>
            <div className="flex items-center space-x-3 mt-1.5 text-sm">
              <div className="flex items-center text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400 mr-1" />
                {destination.rating}
              </div>
              <span className="text-gray-300">({destination.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Image Thumbnails Carousel */}
          {images.length > 1 && (
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    selectedImgIndex === idx ? 'border-brand-700 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {destination.description}
          </p>

          {/* Key Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-sand-100 border border-sand-300/60 flex flex-col">
              <span className="text-xs text-gray-500 flex items-center gap-1 font-medium mb-1">
                <Calendar className="w-3.5 h-3.5 text-brand-700" /> Best Time
              </span>
              <span className="text-sm font-bold text-gray-800">{destination.bestTime}</span>
            </div>
            
            <div className="p-3.5 rounded-2xl bg-sand-100 border border-sand-300/60 flex flex-col">
              <span className="text-xs text-gray-500 flex items-center gap-1 font-medium mb-1">
                <Clock className="w-3.5 h-3.5 text-brand-700" /> Duration
              </span>
              <span className="text-sm font-bold text-gray-800">{destination.duration}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-sand-100 border border-sand-300/60 flex flex-col">
              <span className="text-xs text-gray-500 flex items-center gap-1 font-medium mb-1">
                <Compass className="w-3.5 h-3.5 text-brand-700" /> Travel Style
              </span>
              <span className="text-sm font-bold text-gray-800">{destination.travelStyle}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-sand-100 border border-sand-300/60 flex flex-col">
              <span className="text-xs text-gray-500 flex items-center gap-1 font-medium mb-1">
                <DollarSign className="w-3.5 h-3.5 text-brand-700" /> Avg Budget
              </span>
              <span className="text-sm font-bold text-brand-700">{destination.averageBudget}</span>
            </div>
          </div>

          {/* Top Things To Do */}
          <div>
            <h3 className="font-display text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Top Things To Do
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {destination.topThingsToDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-sand-50 p-2.5 rounded-xl border border-sand-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer Button */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-gray-500">Starting from</span>
              <div className="text-2xl font-extrabold text-brand-700 font-display">
                ${destination.pricePerPerson} <span className="text-xs font-normal text-gray-500">/ person</span>
              </div>
            </div>
            <Link
              href={`/planner?dest=${destination.id}`}
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-lg hover:shadow-brand-800/30 transition-all text-center"
            >
              Plan This Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
