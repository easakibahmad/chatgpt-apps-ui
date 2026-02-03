"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { FeaturedCarousel } from "@/components/featured-carousel";
import { AppsGrid } from "@/components/apps-grid";
import { AppDetail } from "@/components/app-detail";
import { cn } from "@/lib/utils";
import { Search, Settings } from "lucide-react";

const categories = [
  { id: "featured", label: "Vorgestellt" },
  { id: "productivity", label: "Produktivität" },
  { id: "lifestyle", label: "Lifestyle" },
];

export default function AppsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("featured");
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} />
      
      {/* Top right header */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <span className="text-sm font-medium text-foreground">GPTs</span>
        <button className="p-2 hover:bg-accent rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
      
      <main
        className={cn(
          "min-h-screen transition-all duration-300 ease-in-out",
          sidebarOpen ? "ml-[260px]" : "ml-0"
        )}
      >
        <div className="max-w-4xl mx-auto px-6 py-8">
          {selectedApp ? (
            <AppDetail 
              appId={selectedApp} 
              onBack={() => setSelectedApp(null)} 
            />
          ) : (
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-semibold text-foreground">Apps</h1>
                    <span className="px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground border border-border rounded">
                      BETA
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mit deinen Lieblings-Apps in ChatGPT chatten
                  </p>
                </div>
                
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Apps suchen"
                    className="w-56 h-9 pl-9 pr-4 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Featured Carousel */}
              <FeaturedCarousel />

              {/* Category Tabs */}
              <div className="flex items-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "px-4 py-1.5 text-sm font-medium rounded-full transition-colors",
                      activeCategory === category.id
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Apps Grid */}
              <AppsGrid 
                category={activeCategory} 
                onAppClick={(appId) => setSelectedApp(appId)}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
