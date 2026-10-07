'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export interface SlideItem {
  src: string;
  alt: string;
  location?: string;
}

interface HeroSlideshowProps {
  slides: SlideItem[];
  interval?: number;
  heightClass?: string;
  children?: React.ReactNode;
}

export default function HeroSlideshow({
  slides,
  interval = 5500,
  heightClass = 'min-h-[92vh]',
  children,
}: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex]   = useState(0);
  const [prevIndex,    setPrevIndex]      = useState(-1);
  const [isAnimating, setIsAnimating]     = useState(false);
  const [touchStart,  setTouchStart]      = useState<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;
      setPrevIndex(currentIndex);
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => { setPrevIndex(-1); setIsAnimating(false); }, 900);
    },
    [isAnimating, currentIndex]
  );

  const handleNext = useCallback(() => {
    goTo((currentIndex + 1) % slides.length);
  }, [currentIndex, slides.length, goTo]);

  const handlePrev = useCallback(() => {
    goTo((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, slides.length, goTo]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [handleNext, interval, slides.length]);

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <section
      className={`relative ${heightClass} flex items-center overflow-hidden bg-brand-950 select-none`}
      aria-label="Hero image slideshow"
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { diff > 0 ? handleNext() : handlePrev(); }
        setTouchStart(null);
      }}
    >
      {/* ── Background Images ──────────────────────────────────────── */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0"
            style={{
              opacity:    idx === currentIndex ? 1 : idx === prevIndex ? 0 : 0,
              transition: 'opacity 0.9s ease-in-out',
              zIndex:     idx === currentIndex ? 2 : idx === prevIndex ? 1 : 0,
            }}
            aria-hidden={idx !== currentIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              quality={95}
              className="object-cover object-center"
              style={{
                transform: idx === currentIndex ? 'scale(1)' : 'scale(1.04)',
                transition: 'transform 7s ease-out',
              }}
            />
          </div>
        ))}

        {/* Multi-layer overlay — directional dark on left, fade bottom */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(
              105deg,
              rgba(8,44,28,0.86) 0%,
              rgba(8,44,28,0.55) 55%,
              rgba(8,44,28,0.12) 100%
            )`,
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to top, rgba(8,44,28,0.60) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* ── Content ────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full">
        {children}
      </div>

      {/* ── Location Badge ─────────────────────────────────────────── */}
      {currentSlide.location && (
        <div
          className="absolute top-5 right-5 z-30 hidden sm:flex items-center gap-2 px-3.5 py-1.5 text-white text-xs font-medium"
          style={{
            background: 'rgba(0,0,0,0.42)',
            backdropFilter: 'blur(12px)',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
          aria-live="polite"
        >
          <MapPin className="w-3 h-3 text-gold-300" />
          <span style={{ fontFamily: 'Outfit, sans-serif' }}>{currentSlide.location}</span>
        </div>
      )}

      {/* ── Arrow Controls ─────────────────────────────────────────── */}
      {slides.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            style={{
              background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(8px)',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            style={{
              background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(8px)',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="transition-all duration-400"
                style={{
                  height: '3px',
                  width: idx === currentIndex ? '32px' : '10px',
                  background: idx === currentIndex
                    ? 'rgba(212,168,83,0.95)'
                    : 'rgba(255,255,255,0.38)',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* ── Progress bar ───────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 z-30 h-[2px] bg-gold-400/70"
        style={{
          animation: `heroProgress ${interval}ms linear infinite`,
        }}
      />
      <style jsx>{`
        @keyframes heroProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
