'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, CheckCircle2, ArrowRight, RotateCcw, 
  Sun, Mountain, Compass, Landmark, Utensils, Heart, User, Users, Smile, Zap, MapPin, ArrowLeft
} from 'lucide-react';
import { QUIZ_QUESTIONS, DESTINATIONS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function QuizPage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const heroImages = [
    '/images/sigiriya1.jpeg',
    '/images/mirissa4.jpeg',
    '/images/yalasfari1.jpeg',
  ];

  const handleSelectOption = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const getOptionIcon = (iconName: string) => {
    const cls = "w-5 h-5";
    switch (iconName) {
      case 'Sun': return <Sun className={cls} />;
      case 'Mountain': return <Mountain className={cls} />;
      case 'Compass': return <Compass className={cls} />;
      case 'Landmark': return <Landmark className={cls} />;
      case 'Utensils': return <Utensils className={cls} />;
      case 'Zap': return <Zap className={cls} />;
      case 'Heart': return <Heart className={cls} />;
      case 'User': return <User className={cls} />;
      case 'Users': return <Users className={cls} />;
      case 'Smile': return <Smile className={cls} />;
      default: return <Compass className={cls} />;
    }
  };

  const primaryPref = answers[1] || 'beach';
  
  const personaMap: Record<string, { title: string; subtitle: string; recIds: string[]; heroImg: string }> = {
    beach: {
      title: 'Ocean & Coastline Explorer',
      subtitle: 'You enjoy calm beach bays, quiet morning swims, and sunset walks along Sri Lanka\'s southern coast.',
      recIds: ['mirissa', 'galle', 'trincomalee'],
      heroImg: '/images/mirissa4.jpeg'
    },
    mountain: {
      title: 'Highland Trails & Tea Country Traveller',
      subtitle: 'Mist-shrouded peaks, tea estate walks, and scenic highland train journeys match your style.',
      recIds: ['ella', 'nuwara-eliya', 'kandy'],
      heroImg: '/images/nine arch 2.jpeg'
    },
    wildlife: {
      title: 'Wildlife & Safari Enthusiast',
      subtitle: 'You appreciate wild elephant encounters, bird watching around lagoons, and open jeep safaris.',
      recIds: ['yala', 'mirissa', 'sigiriya'],
      heroImg: '/images/yalasfari1.jpeg'
    },
    cultural: {
      title: 'Heritage & Ancient Kingdoms Traveller',
      subtitle: 'Ancient rock fortresses, quiet temples, and Sri Lankan history inspire your journey.',
      recIds: ['sigiriya', 'kandy', 'anuradhapura'],
      heroImg: '/images/sigiriya1.jpeg'
    },
    food: {
      title: 'Culinary & Village Trail Explorer',
      subtitle: 'Home-cooked rice and curry meals, spice garden walks, and local market visits are your focus.',
      recIds: ['kandy', 'galle', 'jaffna'],
      heroImg: '/images/kandy1.jpeg'
    }
  };

  const persona = personaMap[primaryPref] || personaMap['beach'];
  const recommendedDests = DESTINATIONS.filter(d => persona.recIds.includes(d.id));
  const progressPercent = Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100);

  return (
    <div className="min-h-screen bg-cream-100 pb-20">

      {/* ── PAGE HEADER — full-bleed photo banner ── */}
      <div className="relative h-56 sm:h-72 w-full overflow-hidden">
        <Image
          src="/images/srilanka5.jpeg"
          alt="Sri Lanka landscape"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-900/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 space-y-3">
          <span className="text-yellowBrand-300 text-xs font-bold uppercase tracking-widest">
            Travel Match Quiz
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Find Your Sri Lanka Trip Style
          </h1>
          <p className="text-white/80 text-sm max-w-md">
            Answer 3 quick questions to get personalised destination suggestions from Araliya Ceylon.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">

        {!isCompleted ? (
          <div className="space-y-8">

            {/* Progress bar — minimal */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                <span className="text-brand-700 font-bold uppercase tracking-wider text-[11px]">
                  Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-brand-700 font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-1 bg-cream-300 overflow-hidden">
                <div
                  className="h-full bg-brand-700 transition-all duration-400"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question — clean, open layout */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-6">
                {QUIZ_QUESTIONS[currentStep].question}
              </h2>

              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => {
                  const isSelected = answers[QUIZ_QUESTIONS[currentStep].id] === opt.value;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(QUIZ_QUESTIONS[currentStep].id, opt.value)}
                      className={`w-full text-left py-4 px-5 flex items-center justify-between cursor-pointer border-b transition-all duration-200 ${
                        isSelected
                          ? 'border-brand-700 bg-brand-700 text-white'
                          : 'border-cream-300 bg-white text-gray-700 hover:bg-cream-50 hover:border-brand-400'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`shrink-0 ${isSelected ? 'text-white/80' : 'text-brand-700'}`}>
                          {getOptionIcon(opt.icon)}
                        </span>
                        <span className="text-sm font-medium leading-snug">{opt.text}</span>
                      </div>
                      {isSelected ? (
                        <CheckCircle2 className="w-5 h-5 text-yellowBrand-300 shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-cream-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation — clean text buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-cream-300">
              {currentStep > 0 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-700 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </button>
              ) : <div />}

              <button
                disabled={!answers[QUIZ_QUESTIONS[currentStep].id]}
                onClick={handleNext}
                className={`btn-primary text-sm py-2.5 px-6 ${
                  !answers[QUIZ_QUESTIONS[currentStep].id] ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                {currentStep === QUIZ_QUESTIONS.length - 1 ? 'See Recommendations' : 'Next Question'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* ── RESULTS ── */
          <div className="space-y-10">

            {/* Result hero image */}
            <div className="relative h-52 sm:h-64 w-full overflow-hidden">
              <Image
                src={persona.heroImg}
                alt={persona.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/55" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 space-y-2">
                <span className="flex items-center gap-2 text-yellowBrand-300 text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" /> Your Araliya Ceylon Travel Match
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">{persona.title}</h2>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600 text-sm leading-relaxed">{persona.subtitle}</p>
            </div>

            {/* Recommended Destinations — photo-first, no box cards */}
            <div>
              <h3 className="font-display text-lg font-bold text-gray-900 border-b border-cream-300 pb-3 mb-5">
                Suggested Destinations For You
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recommendedDests.map((dest) => (
                  <div key={dest.id} className="group">
                    <div className="relative h-40 w-full overflow-hidden mb-3">
                      <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 img-overlay-bottom" />
                      <div className="absolute bottom-3 left-3 text-white">
                        <p className="font-display font-bold text-sm">{dest.name}</p>
                        <p className="text-[10px] text-white/70 flex items-center gap-0.5 mt-0.5">
                          <MapPin className="w-3 h-3" />{dest.province}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{dest.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-cream-300">
              <button
                onClick={handleReset}
                className="btn-outline text-sm flex-1 justify-center"
              >
                <RotateCcw className="w-4 h-4" /> Retake Quiz
              </button>
              <Link
                href="/planner"
                className="btn-primary text-sm flex-1 justify-center"
              >
                <span>Customize in Trip Planner</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
