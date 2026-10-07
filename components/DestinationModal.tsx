'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, Calendar, Clock, DollarSign, Compass, MapPin, CheckCircle2 } from 'lucide-react';
import { Destination } from '@/lib/data';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
}

export default function DestinationModal({ destination, onClose }: DestinationModalProps) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  useEffect(() => { setSelectedImgIndex(0); }, [destination]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (destination) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, destination]);

  if (!destination) return null;

  const images = destination.gallery?.length > 0 ? destination.gallery : [destination.image];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(8,44,28,0.72)', backdropFilter: 'blur(8px)' }}
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden max-h-[92vh] flex flex-col"
        style={{
          background: '#F9F6F0',
          borderRadius: '20px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
          border: '1px solid rgba(255,255,255,0.3)',
        }}
        role="dialog"
        aria-modal="true"
        aria-label={`${destination.name} details`}
      >
        {/* ── Hero Image ─────────────────────────────────────────── */}
        <div className="relative h-64 sm:h-80 w-full shrink-0">
          <Image
            src={images[selectedImgIndex] || destination.image}
            alt={destination.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 img-overlay-bottom" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{ background: 'rgba(0,0,0,0.50)', border: '1px solid rgba(255,255,255,0.25)' }}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className="text-white text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: 'rgba(27,67,50,0.85)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              {destination.category}
            </span>
          </div>

          {/* Name & rating overlay */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">{destination.name}</h2>
            <div className="flex items-center gap-3 mt-1.5 text-sm">
              <span className="flex items-center gap-1 text-gold-300 font-semibold">
                <Star className="w-3.5 h-3.5 fill-current" /> {destination.rating}
              </span>
              <span className="text-white/60 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {destination.province}
              </span>
              <span className="text-white/45 text-xs">({destination.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* ── Scrollable Body ─────────────────────────────────────── */}
        <div className="overflow-y-auto flex-1">
          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="flex gap-2 p-4 pb-0 overflow-x-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className="relative shrink-0 overflow-hidden transition-all duration-200"
                  style={{
                    width: '64px',
                    height: '48px',
                    borderRadius: '8px',
                    border: selectedImgIndex === idx
                      ? '2px solid #1B4332'
                      : '2px solid transparent',
                    opacity: selectedImgIndex === idx ? 1 : 0.55,
                  }}
                >
                  <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="p-5 sm:p-6 space-y-5">
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{destination.description}</p>

            {/* Key facts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { icon: Calendar,    label: 'Best Time', value: destination.bestTime },
                { icon: Clock,       label: 'Duration',  value: destination.duration },
                { icon: Compass,     label: 'Style',     value: destination.travelStyle },
                { icon: DollarSign,  label: 'Budget',    value: destination.averageBudget },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="p-3 rounded-xl"
                  style={{ background: '#F0F7F2', border: '1px solid #C2DFCE' }}
                >
                  <span className="text-[10px] text-gray-400 flex items-center gap-1 mb-1">
                    <Icon className="w-3 h-3 text-brand-600" /> {label}
                  </span>
                  <span className="text-xs font-semibold text-gray-800">{value}</span>
                </div>
              ))}
            </div>

            {/* Things to do */}
            <div>
              <h3 className="font-display font-bold text-base text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" /> Top Things to Do
              </h3>
              <ul className="space-y-2">
                {destination.topThingsToDo.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-gray-600 p-2.5 rounded-xl"
                    style={{ background: 'rgba(27,67,50,0.04)', border: '1px solid rgba(27,67,50,0.08)' }}
                  >
                    <span className="w-5 h-5 rounded-full bg-brand-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA footer */}
            <div
              className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ borderTop: '1px solid #E8DFD0' }}
            >
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Starting from</span>
                <span className="font-display text-2xl font-bold text-brand-700">
                  ${destination.pricePerPerson}
                  <span className="text-xs font-normal text-gray-400 ml-1">/ person</span>
                </span>
              </div>
              <Link
                href={`/planner?dest=${destination.id}`}
                onClick={onClose}
                className="btn-yellow w-full sm:w-auto text-sm"
              >
                Plan This Trip
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
