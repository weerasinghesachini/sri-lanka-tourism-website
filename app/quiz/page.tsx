'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, ArrowRight, RotateCcw, 
  Sun, Mountain, Compass, Landmark, Utensils, Heart, User, Users, Smile, Zap, MapPin
} from 'lucide-react';
import { QUIZ_QUESTIONS, DESTINATIONS } from '@/lib/data';
import HeroSlideshow from '@/components/HeroSlideshow';

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const quizSlides = [
    { src: '/images/srilanka1.jpeg', alt: 'Highland Misty Mountains', location: 'Ella & Nuwara Eliya Highlands' },
    { src: '/images/mirissa8.jpeg', alt: 'Tropical Beach Paradise', location: 'Mirissa Golden Coast' },
    { src: '/images/yala3.jpeg', alt: 'Leopard Wildlife Safari', location: 'Yala National Park' },
    { src: '/images/unesco heritage.jpeg', alt: 'Ancient UNESCO Kingdoms', location: 'Cultural Triangle Heritage' },
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
    switch (iconName) {
      case 'Sun': return <Sun className="w-5 h-5 text-amber-300" />;
      case 'Mountain': return <Mountain className="w-5 h-5 text-emerald-300" />;
      case 'Compass': return <Compass className="w-5 h-5 text-yellow-300" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-amber-300" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-yellow-300" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-300" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-300" />;
      case 'User': return <User className="w-5 h-5 text-amber-300" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-300" />;
      case 'Smile': return <Smile className="w-5 h-5 text-yellow-300" />;
      default: return <Compass className="w-5 h-5 text-amber-300" />;
    }
  };

  // Determine Travel Persona based on answers
  const primaryPref = answers[1] || 'beach';
  
  const personaMap: Record<string, { title: string; subtitle: string; recIds: string[] }> = {
    beach: {
      title: 'The Island Sun Chaser 🌴',
      subtitle: 'You thrive near pristine beaches, blue whale expeditions, and golden coastal sunsets.',
      recIds: ['mirissa', 'galle', 'arugam-bay']
    },
    mountain: {
      title: 'The Highlands Explorer 🏔️',
      subtitle: 'Mist-shrouded peaks, tea plantation trekking, and scenic mountain trains are calling your name.',
      recIds: ['ella', 'nuwara-eliya', 'kandy']
    },
    wildlife: {
      title: 'The Wild Safari Adventurer 🐆',
      subtitle: 'You live for thrilling wildlife encounters, leopard spotings, and open 4x4 jeep safaris.',
      recIds: ['yala', 'mirissa', 'sigiriya']
    },
    cultural: {
      title: 'The Cultural Heritage Connoisseur 🏛️',
      subtitle: 'Ancient rock fortresses, UNESCO temples, and sacred history inspire your spirit.',
      recIds: ['sigiriya', 'kandy', 'galle']
    },
    food: {
      title: 'The Culinary & Culture Traveler 🍲',
      subtitle: 'Spicy street food tours, tea factory tastings, and vibrant market walks are your passion.',
      recIds: ['kandy', 'galle', 'ella']
    }
  };

  const persona = personaMap[primaryPref] || personaMap['beach'];
  const recommendedDests = DESTINATIONS.filter(d => persona.recIds.includes(d.id));

  const progressPercent = Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100);

  return (
    <HeroSlideshow slides={quizSlides} interval={5500} heightClass="min-h-[88vh] py-12">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        
        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-gradient-to-br from-emerald-950/90 via-slate-950/90 to-amber-950/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 text-white shadow-2xl border-2 border-emerald-400/40 ring-2 ring-amber-400/30 space-y-8 relative overflow-hidden shadow-emerald-900/30"
            >
              {/* Green & Gold Ambient Animated Light Blobs */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none" />

              {/* HEADER TITLE */}
              <div className="text-center space-y-2 relative z-10">
                <div className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/25 via-yellow-500/25 to-amber-500/25 border border-amber-300/50 text-amber-200 text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-amber-950/50">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>Interactive Travel Match</span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                  What Kind of Traveller <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-yellow-300">Are You?</span>
                </h1>
                <p className="text-xs sm:text-sm text-emerald-100/90 font-medium max-w-md mx-auto">
                  Answer 3 quick questions to unlock your custom Sri Lanka travel persona.
                </p>
              </div>

              {/* GREEN & GOLD FUSION PROGRESS BAR */}
              <div className="space-y-2 relative z-10">
                <div className="flex justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                    Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="text-amber-300 font-extrabold">{progressPercent}%</span>
                </div>
                <div className="w-full h-3.5 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-emerald-500/40 shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-amber-400 rounded-full shadow-md shadow-amber-400/50"
                    initial={{ width: `${((currentStep) / QUIZ_QUESTIONS.length) * 100}%` }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* QUESTION & GREEN + GOLD MIX OPTION CARDS */}
              <div className="space-y-5 relative z-10">
                <h2 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                  {QUIZ_QUESTIONS[currentStep].question}
                </h2>

                <div className="space-y-3">
                  {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => {
                    const isSelected = answers[QUIZ_QUESTIONS[currentStep].id] === opt.value;
                    return (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        onClick={() => handleSelectOption(QUIZ_QUESTIONS[currentStep].id, opt.value)}
                        className={`w-full p-4 sm:p-4.5 rounded-2xl border text-left font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-amber-300 bg-gradient-to-r from-emerald-900/95 via-amber-950/90 to-emerald-950/95 text-white shadow-xl shadow-amber-400/30 ring-2 ring-amber-300/80 font-semibold'
                            : 'border-emerald-800/60 bg-emerald-950/40 text-emerald-100 hover:bg-emerald-900/60 hover:border-amber-400/60'
                        }`}
                      >
                        <div className="flex items-center space-x-3.5">
                          <div className={`p-2.5 rounded-xl transition-colors ${
                            isSelected ? 'bg-gradient-to-br from-emerald-500/40 to-amber-500/40 border border-amber-300/80' : 'bg-black/40 border border-emerald-700/50'
                          }`}>
                            {getOptionIcon(opt.icon)}
                          </div>
                          <span className="leading-snug">{opt.text}</span>
                        </div>
                        {isSelected ? (
                          <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 shadow-sm" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-emerald-600/50 shrink-0" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* NAVIGATION BUTTON */}
              <div className="pt-4 border-t border-emerald-800/60 flex justify-between items-center relative z-10">
                {currentStep > 0 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-4 py-2 text-xs font-bold text-amber-300 hover:text-white transition"
                  >
                    ← Back
                  </button>
                ) : <div />}

                <button
                  disabled={!answers[QUIZ_QUESTIONS[currentStep].id]}
                  onClick={handleNext}
                  className={`px-8 py-3.5 rounded-2xl font-extrabold text-sm transition-all flex items-center space-x-2 ${
                    answers[QUIZ_QUESTIONS[currentStep].id]
                      ? 'bg-gradient-to-r from-emerald-500 via-yellow-400 to-amber-400 hover:from-emerald-600 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-400/30 cursor-pointer hover:scale-[1.02]'
                      : 'bg-emerald-950/60 text-emerald-500/50 cursor-not-allowed border border-emerald-800/50'
                  }`}
                >
                  <span>{currentStep === QUIZ_QUESTIONS.length - 1 ? 'See My Match' : 'Next Question'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ) : (
            /* RESULT DISPLAY */
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-gradient-to-br from-emerald-950/90 via-slate-950/95 to-amber-950/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 text-white shadow-2xl border-2 border-emerald-400/40 ring-2 ring-amber-400/30 space-y-8 relative overflow-hidden"
            >
              {/* Dual Ambient Glows */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/25 rounded-full blur-3xl pointer-events-none" />

              {/* Glowing Winner Gold/Green Trophy Header */}
              <div className="text-center space-y-3 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 via-yellow-400 to-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-xl shadow-amber-400/40 border border-amber-200">
                  <Sparkles className="w-8 h-8 text-slate-950 animate-bounce" />
                </div>
                <span className="text-xs font-extrabold text-amber-300 uppercase tracking-widest block">Your Travel Match</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">{persona.title}</h2>
                <p className="text-sm text-emerald-100/90 max-w-md mx-auto leading-relaxed">{persona.subtitle}</p>
              </div>

              {/* RECOMMENDED DESTINATIONS CARDS */}
              <div className="space-y-4 relative z-10">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-amber-300">
                  Recommended Sri Lankan Destinations:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {recommendedDests.map((dest) => (
                    <motion.div
                      key={dest.id}
                      whileHover={{ y: -4 }}
                      className="bg-emerald-950/60 rounded-2xl overflow-hidden border border-amber-400/40 p-3 flex flex-col justify-between shadow-lg"
                    >
                      <div className="relative h-28 w-full rounded-xl overflow-hidden mb-2">
                        <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                        <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-amber-300">
                          ${dest.pricePerPerson}/day
                        </div>
                      </div>
                      <h4 className="font-display font-bold text-sm text-white">{dest.name}</h4>
                      <p className="text-[11px] text-emerald-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-emerald-400" /> {dest.province}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-4 border-t border-emerald-800/60 flex flex-col sm:flex-row gap-3 relative z-10">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-1/2 py-3.5 px-4 rounded-2xl border border-amber-400/50 bg-emerald-950/50 hover:bg-emerald-900/60 text-amber-200 font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  <RotateCcw className="w-4 h-4" /> Retake Quiz
                </button>
                <Link
                  href="/planner"
                  className="w-full sm:w-1/2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-yellow-400 to-amber-400 hover:from-emerald-600 hover:to-amber-500 text-slate-950 font-extrabold text-xs text-center flex items-center justify-center gap-2 shadow-xl shadow-amber-400/30 transition hover:scale-[1.02]"
                >
                  <span>Customize In Trip Planner</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </HeroSlideshow>
  );
}
