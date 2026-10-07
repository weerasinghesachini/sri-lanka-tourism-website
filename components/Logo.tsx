'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light' | 'gold';
}

export default function Logo({ className = '', size = 'md', variant = 'dark' }: LogoProps) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  const textColors = {
    dark: 'text-brand-700',
    light: 'text-white',
    gold: 'text-yellowBrand-400',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Creative Emblem: Elegant Araliya Flower intertwined with Sri Lanka Pearl Seal */}
      <div className={`${iconSizes[size]} shrink-0 relative flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Background Crest Seal */}
          <circle cx="50" cy="50" r="46" fill="#1B4332" stroke="#D4A853" strokeWidth="2.5" />
          
          {/* Subtle Outer Pearl Ring */}
          <circle cx="50" cy="50" r="41" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
          
          {/* Island Teardrop Silhouette Backdrop */}
          <path
            d="M50 18 C 40 28, 32 40, 34 56 C 36 72, 48 80, 50 80 C 52 80, 64 72, 66 56 C 68 40, 60 28, 50 18 Z"
            fill="#2D6A4F"
            opacity="0.6"
          />

          {/* Creative Araliya (Frangipani) 5 Petal Flower Motif */}
          <g transform="translate(50, 50)">
            {/* Petal 1 */}
            <path
              d="M0 0 C -12 -30, 4 -38, 14 -30 C 22 -22, 12 -8, 0 0"
              fill="#FFFFFF"
              stroke="#D4A853"
              strokeWidth="0.8"
            />
            {/* Petal 2 */}
            <g transform="rotate(72)">
              <path
                d="M0 0 C -12 -30, 4 -38, 14 -30 C 22 -22, 12 -8, 0 0"
                fill="#FFFFFF"
                stroke="#D4A853"
                strokeWidth="0.8"
              />
            </g>
            {/* Petal 3 */}
            <g transform="rotate(144)">
              <path
                d="M0 0 C -12 -30, 4 -38, 14 -30 C 22 -22, 12 -8, 0 0"
                fill="#FFFFFF"
                stroke="#D4A853"
                strokeWidth="0.8"
              />
            </g>
            {/* Petal 4 */}
            <g transform="rotate(216)">
              <path
                d="M0 0 C -12 -30, 4 -38, 14 -30 C 22 -22, 12 -8, 0 0"
                fill="#FFFFFF"
                stroke="#D4A853"
                strokeWidth="0.8"
              />
            </g>
            {/* Petal 5 */}
            <g transform="rotate(288)">
              <path
                d="M0 0 C -12 -30, 4 -38, 14 -30 C 22 -22, 12 -8, 0 0"
                fill="#FFFFFF"
                stroke="#D4A853"
                strokeWidth="0.8"
              />
            </g>

            {/* Golden Starburst Core */}
            <circle cx="0" cy="0" r="7.5" fill="#D4A853" />
            <circle cx="0" cy="0" r="4.5" fill="#E5A93C" />
            <circle cx="0" cy="0" r="2.2" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      <div>
        <span className={`font-display font-extrabold tracking-tight leading-none block ${textSizes[size]} ${textColors[variant]}`}>
          ARALIYA CEYLON
        </span>
        <span className={`block font-semibold tracking-[0.2em] uppercase leading-none mt-1 ${taglineSizes[size]} ${variant === 'light' ? 'text-yellowBrand-300' : 'text-brand-600'}`}>
          Sri Lanka Tourism
        </span>
      </div>
    </div>
  );
}
