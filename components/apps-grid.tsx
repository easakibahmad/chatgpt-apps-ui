"use client";

import React from "react";
import { AppCard } from "./app-card";

interface App {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const allApps: App[] = [
  // Featured/Vorgestellt apps
  {
    id: "ace-knowledge-graph",
    name: "Ace Knowledge Graph",
    description: "Turn Docs & Topics to Graphs",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
    ),
    category: "featured",
  },
  {
    id: "ace-quiz-maker",
    name: "Ace Quiz Maker",
    description: "Turn PDFs & Notes to Quizzes",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    ),
    category: "featured",
  },
  {
    id: "adobe-acrobat",
    name: "Adobe Acrobat",
    description: "Edit and organize PDFs easily",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
        <span className="text-white font-bold text-sm">Ai</span>
      </div>
    ),
    category: "featured",
  },
  {
    id: "adobe-express",
    name: "Adobe Express",
    description: "Design posts, flyers, and more",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
        <span className="text-white font-bold text-sm">Ae</span>
      </div>
    ),
    category: "featured",
  },
  {
    id: "adobe-photoshop",
    name: "Adobe Photoshop",
    description: "Edit, stylize, refine images",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#001e36] flex items-center justify-center">
        <span className="text-[#31a8ff] font-bold text-sm">Ps</span>
      </div>
    ),
    category: "featured",
  },
  {
    id: "agentforce-sales",
    name: "Agentforce Sales",
    description: "Sales insights to close deals",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      </div>
    ),
    category: "featured",
  },
  {
    id: "aha",
    name: "Aha!",
    description: "Connect to sync Aha! product roadmaps an...",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
        <span className="text-gray-800 font-bold text-xl">!</span>
      </div>
    ),
    category: "featured",
  },
  {
    id: "airtable",
    name: "Airtable",
    description: "Add structured data to ChatGPT",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 4L3 8.5v7L11.5 20l8.5-4.5v-7L11.5 4z" fill="#333"/>
          <path d="M3 8.5l8.5 4.5v7L3 15.5v-7z" fill="#666"/>
          <path d="M20 8.5l-8.5 4.5v7l8.5-4.5v-7z" fill="#999"/>
        </svg>
      </div>
    ),
    category: "featured",
  },
  {
    id: "all-accor",
    name: "ALL Accor",
    description: "Search and book Accor hotels",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
        <span className="text-gray-800 font-bold text-xs">All</span>
      </div>
    ),
    category: "featured",
  },
  {
    id: "alltrails",
    name: "AllTrails",
    description: "Discover your next hike",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
        </svg>
      </div>
    ),
    category: "featured",
  },
  {
    id: "alpaca",
    name: "Alpaca",
    description: "Market data: stocks & crypto",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
        <div className="w-5 h-5 bg-yellow-600 rounded-full" />
      </div>
    ),
    category: "featured",
  },
  {
    id: "apple-music",
    name: "Apple Music",
    description: "Build playlists and find music",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-pink-500 to-red-500 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      </div>
    ),
    category: "featured",
  },
  {
    id: "aramisauto",
    name: "aramisauto",
    description: "Find your next car",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
        <span className="text-white font-bold text-sm">a</span>
      </div>
    ),
    category: "featured",
  },
  {
    id: "asana",
    name: "Asana",
    description: "Turn chats into actions",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center">
        <div className="flex gap-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </div>
    ),
    category: "featured",
  },
  {
    id: "atlassian-rovo",
    name: "Atlassian Rovo",
    description: "Manage Jira and Confluence fast",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
        <span className="text-white font-bold text-lg">A</span>
      </div>
    ),
    category: "featured",
  },
  {
    id: "autoscout24",
    name: "AutoScout24",
    description: "Automobile buying and leasing",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
        <span className="text-white font-bold text-[10px]">Auto</span>
      </div>
    ),
    category: "featured",
  },
  // Produktivität/Productivity apps
  {
    id: "adobe-acrobat-prod",
    name: "Adobe Acrobat",
    description: "Edit and organize PDFs easily",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
        <span className="text-white font-bold text-sm">Ai</span>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "adobe-express-prod",
    name: "Adobe Express",
    description: "Design posts, flyers, and more",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
        <span className="text-white font-bold text-sm">Ae</span>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "adobe-photoshop-prod",
    name: "Adobe Photoshop",
    description: "Edit, stylize, refine images",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#001e36] flex items-center justify-center">
        <span className="text-[#31a8ff] font-bold text-sm">Ps</span>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "agentforce-sales-prod",
    name: "Agentforce Sales",
    description: "Sales insights to close deals",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "aha-prod",
    name: "Aha!",
    description: "Connect to sync Aha! product roadmaps an...",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
        <span className="text-gray-800 font-bold text-xl">!</span>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "airtable-prod",
    name: "Airtable",
    description: "Add structured data to ChatGPT",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 4L3 8.5v7L11.5 20l8.5-4.5v-7L11.5 4z" fill="#333"/>
          <path d="M3 8.5l8.5 4.5v7L3 15.5v-7z" fill="#666"/>
          <path d="M20 8.5l-8.5 4.5v7l8.5-4.5v-7z" fill="#999"/>
        </svg>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "asana-prod",
    name: "Asana",
    description: "Turn chats into actions",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center">
        <div className="flex gap-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "atlassian-rovo-prod",
    name: "Atlassian Rovo",
    description: "Manage Jira and Confluence fast",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
        <span className="text-white font-bold text-lg">A</span>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "azure-boards",
    name: "Azure Boards",
    description: "Connect to sync Azure DevOps work items ...",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <rect x="4" y="4" width="7" height="7" rx="1"/>
          <rect x="13" y="4" width="7" height="7" rx="1"/>
          <rect x="4" y="13" width="7" height="7" rx="1"/>
          <rect x="13" y="13" width="7" height="7" rx="1"/>
        </svg>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "basecamp",
    name: "Basecamp",
    description: "Connect to sync Basecamp projects and to...",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "biorender",
    name: "BioRender",
    description: "Science visuals on demand",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center">
        <span className="text-cyan-400 font-bold text-[10px]">bio</span>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "box",
    name: "Box",
    description: "Deine Dokumente durchsuchen und referen...",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
        <span className="text-white font-bold text-xs">box</span>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "canva",
    name: "Canva",
    description: "Search, create, edit designs",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 flex items-center justify-center">
        <span className="text-white font-bold text-lg">C</span>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "clay",
    name: "Clay",
    description: "Find and engage prospects",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 via-yellow-400 to-green-400 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-white/80" />
      </div>
    ),
    category: "productivity",
  },
  {
    id: "clickup",
    name: "ClickUp",
    description: "Connect to sync ClickUp tasks and docs for...",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 3L4 9l8 6 8-6-8-6z"/>
          <path d="M4 15l8 6 8-6" fill="none" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "cloudinary",
    name: "Cloudinary",
    description: "Manage, modify, and host your images & vi...",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 6a6 6 0 0 0-6 6c0 1.5.5 2.8 1.4 3.9l-.7.7A7.9 7.9 0 0 1 4 12a8 8 0 0 1 16 0 7.9 7.9 0 0 1-2.7 4.6l-.7-.7A6 6 0 0 0 18 12a6 6 0 0 0-6-6z"/>
        </svg>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "conductor",
    name: "Conductor",
    description: "Track brand sentiment in AI",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/>
        </svg>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "coupler",
    name: "Coupler.io",
    description: "Analyze data from 400+ apps",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center">
        <span className="text-white font-bold text-sm">C</span>
      </div>
    ),
    category: "productivity",
  },
  {
    id: "coursera",
    name: "Coursera",
    description: "Skill-building course videos",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
        <span className="text-white font-bold text-sm">C</span>
      </div>
    ),
    category: "productivity",
  },
  // Lifestyle apps
  {
    id: "alltrails-life",
    name: "AllTrails",
    description: "Discover your next hike",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
        </svg>
      </div>
    ),
    category: "lifestyle",
  },
  {
    id: "apple-music-life",
    name: "Apple Music",
    description: "Build playlists and find music",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-pink-500 to-red-500 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      </div>
    ),
    category: "lifestyle",
  },
  {
    id: "booking-life",
    name: "Booking.com",
    description: "Find hotels, homes and more",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#003580] flex items-center justify-center">
        <span className="text-white font-bold text-lg">B.</span>
      </div>
    ),
    category: "lifestyle",
  },
  {
    id: "opentable",
    name: "OpenTable",
    description: "Find restaurant reservations",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border-2 border-white" />
      </div>
    ),
    category: "lifestyle",
  },
  {
    id: "thefork",
    name: "TheFork",
    description: "Find & book restaurants",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M11 3v6H8L12 21l4-12h-3V3h-2z"/>
        </svg>
      </div>
    ),
    category: "lifestyle",
  },
  {
    id: "tripadvisor",
    name: "Tripadvisor",
    description: "Book top-rated hotels",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <circle cx="8" cy="12" r="3"/>
          <circle cx="16" cy="12" r="3"/>
          <path d="M12 6c-3 0-5.5 1-7 3h14c-1.5-2-4-3-7-3z"/>
        </svg>
      </div>
    ),
    category: "lifestyle",
  },
  // Entertainment - Tarot
  {
    id: "tarot",
    name: "Tarot",
    description: "Tarot Reading & Divination",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8l-6.4 4.4 2.4-7.2-6-4.8h7.6L12 2z" fill="#FFD700"/>
        </svg>
      </div>
    ),
    category: "entertainment",
  },
];

interface AppsGridProps {
  category: string;
  onAppClick?: (appId: string) => void;
}

export function AppsGrid({ category, onAppClick }: AppsGridProps) {
  const filteredApps = category === "featured" 
    ? allApps.filter(app => app.category === "featured")
    : allApps.filter(app => app.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {filteredApps.map((app) => (
        <AppCard
          key={app.id}
          id={app.id}
          name={app.name}
          description={app.description}
          icon={app.icon}
          onClick={() => onAppClick?.(app.id)}
        />
      ))}
    </div>
  );
}
