"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  PenSquare,
  Search,
  ImageIcon,
  Grid3X3,
  Terminal,
  FolderPlus,
  ChevronRight,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import chatgptLogo from "../public/chatgpt.png";

interface SidebarProps {
  isOpen: boolean;
}

const navItems = [
  { icon: PenSquare, label: "Neuer Chat", href: "/", active: false },
  { icon: Search, label: "Chats suchen", href: "/search", active: false },
  { icon: ImageIcon, label: "Bibliothek", href: "/images", active: false },
  { icon: Grid3X3, label: "Apps", href: "/apps", active: true },
  { icon: Terminal, label: "Codex", href: "/codex", active: false },
  { icon: FolderPlus, label: "GPTs", href: "/gpts", active: false },
];

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 z-40 w-[261px] bg-[#f9f9f9] flex flex-col transition-transform duration-300 ease-in-out shrink-0 border-r border-[#0d0d0d0d]",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 h-[52px] flex justify-between items-center">
        <div className="w-[36px] h-[36px] flex justify-center items-center">
          <Image src={chatgptLogo} alt="chatgpt_logo" width={19.98} height={19.8} />
        </div>
        <div className="w-[36px] h-[36px] flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
          stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" 
          className="icon rounded-3xl opacity-50">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-[8px] mb-[12px]">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "flex min-w-0 items-center gap-1.5 h-[36px] mx-[6px] px-[10px] py-[6px] rounded-lg text-sm",
              item.active
                ? "bg-[#0000000F]"
                : "text-sidebar-foreground hover:bg-[#0000000F]"
            )}
          >
            <item.icon size={18.3} className="flex-shrink-0 text-[#0D0D0D]" />
            <span className="text-[14px] text-[#0D0D0D]" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Projekte Section */}
      <div className="flex flex-col gap-0.5 text-[#8F8F8F] mb-3">
        <a
          href="/projekte"
          className="h-[32px] gap-0.5 flex items-center justify-start py-[6px] px-[16px] rounded-lg text-sm"
        >
          <span>Projekte</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Chats Section */}
      <div className="flex flex-col gap-0.5 text-[#8F8F8F] mb-3">
        <a
          href="/chats"
          className="h-[32px] gap-0.5 flex items-center justify-start py-[6px] px-[16px] rounded-lg text-sm"
        >
          <span>Chats</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* User Profile & Invite team */}
      <div className="mt-auto p-3">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-sidebar-accent transition-colors cursor-pointer">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-teal-500 text-white text-sm font-medium">
              SK
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium truncate">Sara Karimi</span>
            <span className="text-xs text-muted-foreground truncate">QAVION RECRUITING</span>
          </div>
        </div>
        
        {/* Invite team members button */}
        <button className="w-full mt-2 px-4 py-2 border border-border rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-sidebar-accent transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Teammitglieder einladen
        </button>
      </div>
    </aside>
  );
}
