"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { FeaturedCarousel } from "@/components/featured-carousel";
import { AppsGrid } from "@/components/apps-grid";
import { AppDetail, appDetails } from "@/components/app-detail";
import { cn } from "@/lib/utils";
import { ChevronRight, Search, Settings } from "lucide-react";

const categories = [
  { id: "featured", label: "Vorgestellt" },
  { id: "productivity", label: "Produktivität" },
  { id: "lifestyle", label: "Lifestyle" },
];

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
export default function AppsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("featured");
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  const app = appDetails[selectedApp ? selectedApp : ""] || defaultAppDetail;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} />

      <main
        className={cn(
          "min-h-screen transition-all duration-300 ease-in-out",
          sidebarOpen ? "ml-[260px]" : "ml-0",
        )}
      >
        {/* Top nav */}
        {!selectedApp && (
          <div className="flex items-center justify-end gap-4 p-2 h-[52px]">
            <div className="py-1.5 px-2 rounded-2xl hover:bg-[#eaeaea] transition-colors cursor-pointer">
              <span className="text-sm font-medium text-foreground">GPTs</span>
            </div>
            <button className="py-2 px-2  hover:bg-[#eaeaea] rounded-2xl transition-colors cursor-pointer">
              <Settings className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        )}

        {/* Breadcrumb Navigation */}
        {selectedApp && (
          <div className="w-full sm:h-30 md:bg-black/[0.024] md:dark:bg-white/[0.018] w-full ml-4 p-2">
            <nav className="flex items-center gap-2 text-base mb-4 pl-[8px] pt-[10px]">
              <button
                onClick={() => setSelectedApp(null)}
                className="font-normal text-[#0D0D0D] cursor-pointer"
              >
                Apps
              </button>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500">{app.name}</span>
            </nav>

            <div className="flex items-center">
              <div className="w-[64px] h-[64px] rounded-full bg-white shadow-sm p-2 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <div className="scale-[0.65]">{app.icon}</div>
              </div>
            </div>
          </div>
        )}
        <div className="mx-auto my-6 w-full max-w-4xl sm:my-12">
          {selectedApp ? (
            <AppDetail
              appId={selectedApp}
              onBack={() => setSelectedApp(null)}
            />
          ) : (
            <div className="flex flex-col gap-6 h-[74px] pt-0 px-[40px] pb-[16px]">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 ml-1.5">
                  <div className="flex items-center gap-2 text-[#0D0D0D]">
                    <h1 className="text-2xl">Apps</h1>
                    <span className="w-[33.67px] h-[18px] px-1.25 py-0.5 text-[9px] text-[#8f8f8f] font-medium border border-border rounded-lg">
                      BETA
                    </span>
                  </div>
                  <p className="text-md text-[#8F8F8F]">
                    Mit deinen Lieblings-Apps in ChatGPT chatten
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Apps suchen"
                    className="w-[256px] h-[38px] pl-9 pr-4 rounded-full bg-background border border-border text-sm text-[#0d0d0d] placeholder:text-[#0d0d0d] placeholder:opacity-50 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Featured Carousel */}
              <FeaturedCarousel />

              {/* Category Tabs */}
              <div className="flex items-center gap-1.5 mx-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "px-4 h-[40px] text-sm font-normal rounded-full transition-colors cursor-pointer flex items-center",
                      activeCategory === category.id
                        ? "bg-[#f3f3f3] text-[#0D0D0D]"
                        : "text-[#0D0D0D] hover:bg-[#f3f3f3]",
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
