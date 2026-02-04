"use client";

import React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedApp {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  prompt: string;
  preview: React.ReactNode;
}

const featuredApps: FeaturedApp[] = [
  {
    id: "github",
    name: "GitHub",
    title: "Mit GitHub arbeiten",
    subtitle: "Deinen Code analysieren und verstehen",
    prompt: "@GitHub what can I do with this repo?",
    icon: (
      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#000">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </div>
    ),
    preview: (
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[280px]">
        {/* Chat bubble */}
        <div className="bg-white rounded-xl px-3 py-2 text-xs text-gray-700 mb-3 shadow-sm inline-block">
          <span className="font-semibold text-gray-900">@GitHub</span> what can I do with this repo?
        </div>
        {/* Preview card with repo info */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden p-4">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The repository exposes a set of core functionalities centered around a lightweight, rule-based sentiment analysis engine built with <span className="font-semibold">Python 3.12</span> and <span className="font-semibold">FastAPI</span>. Its design provides both API and CLI interfaces for flexible use.
          </p>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-500">🔧</span>
            <span className="text-sm font-semibold text-gray-800">Core Features</span>
          </div>
          <ul className="text-xs text-gray-600 space-y-1">
            <li className="flex items-start gap-1">
              <span className="text-gray-400">•</span>
              <span><span className="font-medium">Tokenization:</span> Unicode and emoji-aware, splitting text into analyzable units.</span>
            </li>
          </ul>
          <div className="flex items-center gap-1 mt-3 text-xs text-gray-500">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>README</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "clay",
    name: "Clay",
    title: "Mit Clay potenzielle Kunden finden",
    subtitle: "Kontakte finden und die Ansprache personalisieren",
    prompt: "@Clay find GTM Leaders at Conclusive AI",
    icon: (
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 via-yellow-400 to-green-400 flex items-center justify-center shadow-lg">
        <div className="w-8 h-8 rounded-full bg-white/80" />
      </div>
    ),
    preview: (
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[280px]">
        {/* Chat bubble */}
        <div className="bg-white rounded-xl px-3 py-2 text-xs text-gray-700 mb-3 shadow-sm inline-block">
          <span className="font-semibold text-gray-900">@Clay</span> find GTM Leaders at Conclusive AI
        </div>
        {/* Preview card with contacts */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center">
                <span className="text-purple-600 text-xs">*</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Conclusive AI</span>
            </div>
            <button className="px-2 py-1 bg-green-500 text-white text-xs rounded-md flex items-center gap-1">
              Open
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-xs font-medium">DC</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-800">Daniel Cheung</p>
                <p className="text-[10px] text-gray-500">Head of GTM Engineering</p>
                <p className="text-[10px] text-gray-400">Conclusive AI</p>
                <p className="text-[10px] text-gray-400">San Francisco, California</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-xs font-medium">MP</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-800">Maya Patel</p>
                <p className="text-[10px] text-gray-500">Head of Sales</p>
                <p className="text-[10px] text-gray-400">Conclusive AI</p>
                <p className="text-[10px] text-gray-400">San Francisco, California</p>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 pt-1">Ava Johnson</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "airtable",
    name: "Airtable",
    title: "Mit Airtable arbeiten",
    subtitle: "Strukturierte Daten in ChatGPT einbringen",
    prompt: "@Airtable show me a kanban of the product roadmap",
    icon: (
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-lg">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 4L3 8.5v7L11.5 20l8.5-4.5v-7L11.5 4z" fill="#333"/>
          <path d="M3 8.5l8.5 4.5v7L3 15.5v-7z" fill="#666"/>
          <path d="M20 8.5l-8.5 4.5v7l8.5-4.5v-7z" fill="#999"/>
        </svg>
      </div>
    ),
    preview: (
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[280px]">
        {/* Chat bubble */}
        <div className="bg-white rounded-xl px-3 py-2 text-xs text-gray-700 mb-3 shadow-sm inline-block">
          <span className="font-semibold text-gray-900">@Airtable</span> show me a kanban of the product roadmap
        </div>
        {/* Kanban preview */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-3 border-b border-gray-100 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-800">Product Roadmap</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
          <div className="p-3 flex gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-2">
                <span className="px-2 py-0.5 bg-green-500 text-white text-[10px] rounded">Now</span>
                <span className="text-[10px] text-gray-400">9</span>
              </div>
              <div className="bg-gray-50 rounded p-2 text-[10px]">
                <p className="font-medium text-gray-700">Mercury Cloud Migration</p>
                <p className="text-gray-400 mt-0.5">Health</p>
                <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[8px] rounded mt-1 inline-block">On track</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-2">
                <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] rounded">Next</span>
                <span className="text-[10px] text-gray-400">9</span>
              </div>
              <div className="bg-gray-50 rounded p-2 text-[10px]">
                <p className="font-medium text-gray-700">Data Res...</p>
                <p className="text-gray-400 mt-0.5">Health</p>
                <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[8px] rounded mt-1 inline-block">On track</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredApps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeApp = featuredApps[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % featuredApps.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + featuredApps.length) % featuredApps.length);
  };

  const canGoLeft = activeIndex > 0;
  const canGoRight = activeIndex < featuredApps.length - 1;

  return (
    <div className="relative -mt-1">
      <div className="relative h-[320px] rounded-4xl overflow-hidden bg-gradient-to-r from-cyan-400 via-cyan-300 to-yellow-200">
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col max-w-[45%]">
          {activeApp.icon}
          <h2 className="text-xl font-semibold text-white mt-4 drop-shadow-sm">
            {activeApp.title}
          </h2>
          <p className="text-sm text-white/90 mt-1 drop-shadow-sm">
            {activeApp.subtitle}
          </p>
          <button className="mt-4 px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg w-fit transition-colors">
            Anzeigen
          </button>
          
          {/* Dots */}
          <div className="flex gap-1.5 mt-auto">
            {featuredApps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === activeIndex ? "bg-white" : "bg-white/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Preview Card */}
        {activeApp.preview}
        
        {/* Left arrow - only show if can go left */}
        {canGoLeft && (
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors z-20 shadow-sm"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}
        
        {/* Right arrow - only show if can go right */}
        {canGoRight && (
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors z-20 shadow-sm"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}
