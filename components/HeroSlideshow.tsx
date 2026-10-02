'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, MapPin, Sparkles } from 'lucide-react';

export interface SlideItem {
  src: string;
  alt: string;
  title?: string;
  location?: string;
}

interface HeroSlideshowProps {
  slides: SlideItem[];
  interval?: number; // duration in ms
  heightClass?: string;
  children?: React.ReactNode;
  overlayGradient?: string;
}

export default function HeroSlideshow({
  slides,
  interval = 5000,
  heightClass = "min-h-[85vh] lg:min-h-[90vh]",
  children,
  overlayGradient = "from-emerald-950/80 via-black/40 to-emerald-950/60"
}: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, handleNext, slides.length]);

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden bg-brand-950 select-none`}>
      {/* BACKGROUND SLIDESHOW WITH FRAMER MOTION ANIMATION */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              transition: { 
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: interval / 1000, ease: "linear" }
              } 
            }}
            exit={{ opacity: 0, transition: { duration: 1.0, ease: "easeInOut" } }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt || "Sri Lanka Hero"}
              fill
              priority={currentIndex === 0}
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* MODERN CREATIVE GREEN OVERLAY GRADIENTS */}
        <div className={`absolute inset-0 bg-gradient-to-t ${overlayGradient} z-10`} />
        <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply z-10" />
        
        {/* Subtle Decorative Ambient Glows */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none z-10 animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none z-10 animate-pulse-glow" />
      </div>

      {/* FOREGROUND CONTENT OVERLAY */}
      <div className="relative z-20 w-full">
        {children}
      </div>

      {/* SLIDE LOCATION BADGE (TOP RIGHT / BOTTOM RIGHT ACCORDING TO SCREEN) */}
      {currentSlide.location && (
        <div className="absolute top-24 right-4 sm:right-8 z-30 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-emerald-400/30 text-white text-xs font-semibold shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
          <span className="text-emerald-100">{currentSlide.location}</span>
        </div>
      )}

      {/* SLIDESHOW NAVIGATION CONTROLS & PROGRESS INDICATORS */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 inset-x-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto">
          
          {/* Active Location indicator badge on mobile */}
          {currentSlide.location && (
            <div className="sm:hidden flex items-center space-x-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-emerald-400/30 text-white text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-200">{currentSlide.location}</span>
            </div>
          )}

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-emerald-500/30 shadow-xl">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`group relative h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    isActive ? 'w-8 bg-gradient-to-r from-emerald-400 to-teal-300 shadow-lg shadow-emerald-500/50' : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                >
                  <span className="sr-only">Slide {idx + 1}: {slide.alt}</span>
                </button>
              );
            })}
          </div>

          {/* Arrow Buttons & Play/Pause */}
          <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-xl p-1.5 rounded-full border border-emerald-500/30 shadow-xl">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-emerald-600/60 transition duration-200 focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="p-2 rounded-full text-emerald-300 hover:text-white hover:bg-emerald-600/60 transition duration-200 focus:outline-none"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-emerald-600/60 transition duration-200 focus:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TOP DECORATIVE CREATIVE GREEN ACCENT LINE */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 z-30" />
    </section>
  );
}
