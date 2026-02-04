"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppDetailProps {
  appId: string;
  onBack: () => void;
}

export const appDetails: Record<
  string,
  {
    name: string;
    subtitle: string;
    longDescription: string;
    howToUse?: string;
    steps?: string[];
    category: string;
    capabilities?: string;
    icon: React.ReactNode;
    screenshots: { gradient: string; content?: React.ReactNode }[];
  }
> = {
  "ace-knowledge-graph": {
    name: "Ace Knowledge Graph",
    subtitle: "Turn Docs & Topics to Graphs",
    longDescription:
      "Visualize files and topics with interactive Knowledge Graphs. Transform your documents into structured networks where you can simply click nodes to explain concepts and clarify relationships instantly—making complex information easy to digest.",
    howToUse:
      "- Interactive Exploration: Go beyond a static image. Interact with the graph to understand the underlying logic.",
    steps: [
      "Explain Concepts: Click on any node to get a clear definition and background",
    ],
    category: "Bildung",
    icon: (
      <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-3 h-3 rounded-full bg-white" />
          <div className="w-3 h-3 rounded-full bg-white" />
          <div className="w-3 h-3 rounded-full bg-white" />
          <div className="w-3 h-3 rounded-full bg-white" />
        </div>
      </div>
    ),
    screenshots: [
      {
        gradient: "from-[#9dd5df] to-[#b8e3e8]",
        content: (
          <div className="absolute inset-3 flex flex-col">
            <div className="bg-white/90 rounded-lg px-2 py-1.5 text-[10px] text-gray-700 self-start mb-2 shadow-sm">
              <span className="font-semibold text-gray-900">
                @Ace Knowledge Graph
              </span>{" "}
              Help me understand React ecosystem.
            </div>
            <div className="flex-1 bg-white rounded-xl p-3 shadow-sm flex flex-col">
              <div className="flex-1 relative">
                {/* Knowledge graph visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Central node */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px] font-medium">
                      React
                    </div>
                    {/* Surrounding nodes */}
                    <div className="absolute left-1/4 top-1/4 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center text-white text-[6px]">
                      Hooks
                    </div>
                    <div className="absolute right-1/4 top-1/4 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-[6px]">
                      JSX
                    </div>
                    <div className="absolute left-1/4 bottom-1/4 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white text-[6px]">
                      State
                    </div>
                    <div className="absolute right-1/4 bottom-1/4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-white text-[6px]">
                      Props
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                <div className="flex items-center gap-1 text-[8px] text-gray-500">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View History
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 text-sm">-</button>
                  <button className="text-gray-400 text-sm">+</button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        gradient: "from-[#a8dce6] via-[#d4e8b8] to-[#e8e4a8]",
        content: (
          <div className="absolute inset-3 flex flex-col">
            <div className="bg-white/90 rounded-lg px-2 py-1.5 text-[10px] text-gray-700 self-start mb-2 shadow-sm">
              <span className="font-semibold text-gray-900">
                @Ace Knowledge Graph
              </span>{" "}
              Help me understand React ecosystem.
            </div>
            <div className="flex-1 bg-white rounded-xl p-3 shadow-sm flex flex-col">
              <div className="flex-1 relative">
                {/* Knowledge graph with React detail */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px] font-medium">
                      React
                    </div>
                    <div className="absolute left-[20%] top-[20%] w-5 h-5 bg-teal-400 rounded-full" />
                    <div className="absolute right-[20%] top-[25%] w-5 h-5 bg-purple-400 rounded-full" />
                    <div className="absolute left-[30%] bottom-[30%] w-5 h-5 bg-orange-400 rounded-full" />
                    {/* Lines connecting nodes */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      style={{ zIndex: -1 }}
                    >
                      <line
                        x1="50%"
                        y1="33%"
                        x2="20%"
                        y2="20%"
                        stroke="#ddd"
                        strokeWidth="1"
                      />
                      <line
                        x1="50%"
                        y1="33%"
                        x2="80%"
                        y2="25%"
                        stroke="#ddd"
                        strokeWidth="1"
                      />
                      <line
                        x1="50%"
                        y1="33%"
                        x2="30%"
                        y2="70%"
                        stroke="#ddd"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                <div className="flex items-center gap-1 text-[8px] text-gray-500">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View History
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 text-sm">-</button>
                  <button className="text-gray-400 text-sm">+</button>
                </div>
              </div>
              <div className="mt-2 bg-gray-50 rounded p-2">
                <p className="text-[9px] font-medium text-gray-800">React</p>
                <p className="text-[7px] text-gray-500 mt-0.5">
                  React is a JavaScript library for building user interfaces
                  using a component-based architecture and a virtual DOM.
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        gradient: "from-[#9dd5df] to-[#b8e3e8]",
        content: (
          <div className="absolute inset-3 flex flex-col">
            <div className="bg-white/90 rounded-lg px-2 py-1.5 text-[10px] text-gray-700 self-start mb-2 shadow-sm">
              <span className="font-semibold text-gray-900">
                @Ace Knowledge Graph
              </span>{" "}
              Help me understand React ecosystem.
            </div>
            <div className="flex-1 bg-white rounded-xl p-3 shadow-sm flex flex-col">
              <div className="flex-1 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px] font-medium">
                      React
                    </div>
                    <div className="absolute left-[15%] top-[15%] w-5 h-5 bg-teal-400 rounded-full" />
                    <div className="absolute right-[15%] top-[20%] w-5 h-5 bg-purple-400 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                <div className="flex items-center gap-1 text-[8px] text-gray-500">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View History
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 text-sm">-</button>
                  <button className="text-gray-400 text-sm">+</button>
                </div>
              </div>
              <div className="mt-2 bg-gray-50 rounded p-2">
                <p className="text-[9px] font-medium text-gray-800">
                  React and Redux
                </p>
                <p className="text-[7px] text-gray-500 mt-0.5">
                  React commonly integrates with Redux through bindings like
                  react-redux, allowing React components to subscribe to global
                  state and dispatch actions efficiently.
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  tarot: {
    name: "Tarot",
    subtitle: "Tarot-Lesen & Wahrsagung",
    longDescription:
      "Starte deine Tarot-Lesung direkt in ChatGPT. Bitte KI Tarot, digitale Tarotkarten zu mischen, einen Drei-Karten-Spread zu legen und klare, private Wahrsage-Einblicke zu liefern - ohne Werbung oder Wartezeiten.",
    howToUse: "So verwendest du Tarot in ChatGPT",
    steps: ["Verbinden: Verbinde die Tarot-App mit ChatGPT...."],
    category: "Unterhaltung",
    capabilities: "Interaktiv",
    icon: (
      <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8l-6.4 4.4 2.4-7.2-6-4.8h7.6L12 2z"
            fill="#4A90A4"
          />
          <path
            d="M12 5l1.5 4.5H18l-3.7 3 1.5 4.5-3.8-2.7-3.8 2.7 1.5-4.5-3.7-3h4.5L12 5z"
            fill="#FFD700"
          />
        </svg>
      </div>
    ),
    screenshots: [
      {
        gradient: "from-[#9dd5df] to-[#b8e3e8]",
        content: (
          <div className="absolute inset-3 flex flex-col">
            <div className="bg-white/90 rounded-lg px-2 py-1.5 text-[10px] text-gray-700 self-start mb-2 shadow-sm">
              <span className="font-semibold text-gray-900">@Tarot</span> I want
              clarity on my life now and what&apos;s ahead.
            </div>
            <div className="flex-1 bg-gray-900 rounded-xl p-3 flex flex-col items-center justify-center">
              <div className="flex gap-2 mb-3">
                <div className="w-8 h-12 bg-amber-600 rounded border border-amber-500 flex items-center justify-center">
                  <span className="text-amber-300 text-lg">1</span>
                </div>
                <div className="w-8 h-12 bg-amber-600 rounded border border-amber-500 flex items-center justify-center">
                  <span className="text-amber-300 text-lg">2</span>
                </div>
                <div className="w-8 h-12 bg-amber-600 rounded border border-amber-500 flex items-center justify-center">
                  <span className="text-amber-300 text-lg">3</span>
                </div>
              </div>
              <p className="text-white/70 text-[8px] text-center mb-2">
                Focus on your life path and draw three cards for clarity
              </p>
              <button className="px-3 py-1 bg-teal-600 text-white text-[8px] rounded-full">
                Start drawing cards
              </button>
            </div>
          </div>
        ),
      },
      {
        gradient: "from-[#a8dce6] via-[#d4e8b8] to-[#e8e4a8]",
        content: (
          <div className="absolute inset-3 flex flex-col">
            <div className="bg-white/90 rounded-lg px-2 py-1.5 text-[10px] text-gray-700 self-start mb-2 shadow-sm">
              <span className="font-semibold text-gray-900">@Tarot</span> I want
              clarity on my life now and what&apos;s ahead.
            </div>
            <div className="flex-1 bg-gray-900 rounded-xl p-3 flex flex-col items-center justify-center">
              <div className="flex gap-1 mb-2">
                <div className="w-10 h-14 bg-gradient-to-b from-amber-200 to-amber-400 rounded flex flex-col items-center justify-center p-1">
                  <div className="w-6 h-8 bg-amber-100 rounded-sm" />
                </div>
                <div className="w-10 h-14 bg-gradient-to-b from-amber-200 to-amber-400 rounded flex flex-col items-center justify-center p-1">
                  <div className="w-6 h-8 bg-amber-100 rounded-sm" />
                </div>
                <div className="w-10 h-14 bg-gradient-to-b from-amber-200 to-amber-400 rounded flex flex-col items-center justify-center p-1">
                  <div className="w-6 h-8 bg-amber-100 rounded-sm" />
                </div>
              </div>
              <p className="text-white/70 text-[8px] text-center mb-1">
                Please imagine your question in your mind.
              </p>
              <p className="text-white/50 text-[7px] text-center mb-2">
                Currently interpreting your question...
              </p>
              <button className="px-3 py-1 bg-teal-600 text-white text-[8px] rounded-full">
                Read your cards
              </button>
            </div>
          </div>
        ),
      },
      {
        gradient: "from-[#9dd5df] to-[#b8e3e8]",
        content: (
          <div className="absolute inset-3 flex flex-col">
            <div className="bg-white/90 rounded-lg px-2 py-1.5 text-[10px] text-gray-700 self-start mb-2 shadow-sm">
              <span className="font-semibold text-gray-900">@Tarot</span> I want
              clarity on my life now and what&apos;s ahead.
            </div>
            <div className="flex-1 bg-gray-900 rounded-xl p-2 flex flex-col">
              <div className="flex gap-1 mb-2 justify-center">
                <div className="w-8 h-11 bg-gradient-to-b from-amber-200 to-amber-400 rounded flex items-center justify-center">
                  <span className="text-[6px] text-amber-800">Past</span>
                </div>
                <div className="w-8 h-11 bg-gradient-to-b from-amber-200 to-amber-400 rounded flex items-center justify-center">
                  <span className="text-[6px] text-amber-800">Present</span>
                </div>
                <div className="w-8 h-11 bg-gradient-to-b from-amber-200 to-amber-400 rounded flex items-center justify-center">
                  <span className="text-[6px] text-amber-800">Future</span>
                </div>
              </div>
              <div className="bg-gray-800 rounded p-2 flex-1">
                <p className="text-white text-[8px] font-medium mb-1">
                  Your Life Path Reading
                </p>
                <p className="text-amber-400 text-[7px] mb-1">
                  Where You&apos;ve Been—Page of Swords (upright)
                </p>
                <p className="text-white/60 text-[6px] leading-tight">
                  You&apos;ve come out of a phase defined by curiosity,
                  questioning, and mental alertness. You were learning fast,
                  gathering information, testing ideas, and watching carefully
                  before acting. This suggests a period of
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  "adobe-photoshop": {
    name: "Adobe Photoshop",
    subtitle: "Edit, stylize, refine images",
    longDescription:
      "Bearbeite und verbessere deine Bilder direkt in ChatGPT mit Adobe Photoshop. Wende Filter an, passe Farben an, entferne Hintergründe und mehr mit einfachen Textbefehlen.",
    category: "Produktivität",
    capabilities: "Bildbearbeitung",
    icon: (
      <div className="w-16 h-16 rounded-2xl bg-[#001e36] flex items-center justify-center">
        <span className="text-[#31a8ff] font-bold text-2xl">Ps</span>
      </div>
    ),
    screenshots: [
      { gradient: "from-[#9dd5df] to-[#b8e3e8]" },
      { gradient: "from-[#a8dce6] via-[#d4e8b8] to-[#e8e4a8]" },
      { gradient: "from-[#9dd5df] to-[#b8e3e8]" },
      { gradient: "from-[#9dd5df] to-[#b8e3e8]" },
    ],
  },
};

// Default fallback for any app
const defaultAppDetail = {
  name: "App",
  subtitle: "App-Beschreibung",
  longDescription:
    "Diese App integriert sich mit ChatGPT, um erweiterte Funktionen bereitzustellen.",
  category: "Produktivität",
  icon: (
    <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center">
      <span className="text-gray-600 font-bold text-2xl">?</span>
    </div>
  ),
  screenshots: [
    { gradient: "from-[#9dd5df] to-[#b8e3e8]" },
    { gradient: "from-[#a8dce6] via-[#d4e8b8] to-[#e8e4a8]" },
    { gradient: "from-[#9dd5df] to-[#b8e3e8]" },
    { gradient: "from-[#9dd5df] to-[#b8e3e8]" },
  ],
};

export function AppDetail({ appId, onBack }: AppDetailProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const app = appDetails[appId] || defaultAppDetail;

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [appId]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      Math.min(
        prev + 1,
        app.screenshots.length > 3
          ? app.screenshots.length - 3
          : app.screenshots.length - 1,
      ),
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-10">
      <div className="flex items-center flex-shrink k-0 w-fit -mt-20 mb-8">
        <div className=" w-[64px] h-[64px] rounded-full bg-white shadow-sm p-2 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <div className="scale-[0.65]">{app.icon}</div>
        </div>
      </div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-2xl font-medium" style={{ color: "#0D0D0D" }}>
            {app.name}
          </h1>
          {isLoading ? (
            <button
              disabled
              className="px-5 py-2.5 bg-gray-200 text-gray-500 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Wird geladen
            </button>
          ) : (
            <button
              className="bg-black text-white rounded-full text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity px-4"
              style={{ height: "36px" }}
            >
              Verbinden
            </button>
          )}
        </div>
        <p className="text-sm mt-2" style={{ color: "#5D5D5D" }}>
          {app.subtitle}
        </p>
      </div>
      {/* Screenshot Carousel */}
      <div
        className="relative mb-8 overflow-visible group"
        style={{
          paddingLeft:
            app.screenshots.length > 3 && currentSlide > 0 ? "30px" : "0",
          paddingRight:
            app.screenshots.length > 3 && currentSlide === 0 ? "30px" : "0",
        }}
      >
        <div
          ref={carouselRef}
          className="flex gap-2"
          style={{
            transform: `translateX(${currentSlide > 0 ? -60 : 0}px)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {app.screenshots.map((screenshot, index) => {
            const totalCards = app.screenshots.length;
            if (totalCards <= 3) {
              // Show all cards if 3 or less
              return (
                <div
                  key={index}
                  className={cn(
                    "flex-shrink-0 w-[264px] h-[335px] rounded-2xl bg-gradient-to-b relative overflow-hidden transition-all duration-300",
                    screenshot.gradient,
                  )}
                >
                  {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19"
                          stroke="#5c5c5c"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  ) : (
                    screenshot.content
                  )}
                </div>
              );
            }

            // For more than 3 cards
            const isRightPartial = currentSlide === 0 && index === 3;
            const isLeftPartial =
              currentSlide > 0 && index === currentSlide - 1;
            const isVisible =
              currentSlide === 0
                ? index >= 0 && index < 3
                : index >= currentSlide && index < currentSlide + 3;

            const shouldShow = isVisible || isRightPartial || isLeftPartial;
            if (!shouldShow) return null;

            return (
              <div
                key={index}
                className={cn(
                  "flex-shrink-0 h-[335px] rounded-2xl bg-gradient-to-b relative overflow-hidden transition-all duration-300",
                  screenshot.gradient,
                  isRightPartial
                    ? "w-[30px]"
                    : isLeftPartial
                      ? "w-[30px]"
                      : "w-[264px]",
                )}
              >
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19"
                        stroke="#5c5c5c"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                ) : (
                  screenshot.content
                )}
                {/* Fade overlay for partially visible cards */}
                {(isRightPartial || isLeftPartial) && (
                  <div
                    className={cn(
                      "absolute inset-0 pointer-events-none",
                      isRightPartial
                        ? "bg-gradient-to-r from-transparent via-transparent to-white/80"
                        : "bg-gradient-to-l from-transparent via-transparent to-white/80",
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-opacity duration-300 ease-in-out border border-gray-200 z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}
        {app.screenshots.length > 3 &&
          currentSlide < app.screenshots.length - 3 && (
            <button
              onClick={nextSlide}
              className="cursor-pointer absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-opacity duration-300 ease-in-out border border-gray-100 z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
              style={{ right: "-13px" }}
            >
              <ChevronRight className="w-6 h-6 text-gray-500" />
            </button>
          )}
      </div>

      {/* Description */}
      <div className="mb-8">
        <p className="text-sm leading-relaxed" style={{ color: "#5D5D5D" }}>
          {app.longDescription}
        </p>

        {app.howToUse && (
          <div className="mt-6">
            <p className="text-sm" style={{ color: "#5D5D5D" }}>
              {app.howToUse}
            </p>
            {app.steps?.map((step, index) => (
              <p
                key={index}
                className="text-sm mt-2"
                style={{ color: "#5D5D5D" }}
              >
                - {step}
              </p>
            ))}
          </div>
        )}

        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm hover:underline cursor-pointer"
          >
            Mehr
          </button>
        </div>
      </div>

      {/* Information Section */}
      <div className="py-2 mb-4">
        <h2
          className="text-xl font-normal border-b border-border mb-4 py-2"
          style={{ color: "#0D0D0D" }}
        >
          Info
        </h2>
        <div className="grid grid-cols-2 gap-y-4">
          <div>
            <p className="text-sm text-[#8F8F8F]">Kategorie</p>
            <p className="text-sm mt-[8px] text-[#8F8F8F]">{app.category}</p>
          </div>
          {app.capabilities && (
            <div>
              <p className="text-sm text-[#0D0D0D]">Fähigkeiten</p>
              <p className="text-sm mt-[8px] text-[#0D0D0D]">
                {app.capabilities}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
