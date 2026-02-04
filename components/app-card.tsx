"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface AppCardProps {
  id?: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export function AppCard({ name, description, icon, onClick }: AppCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 p-[12px] hover:bg-[#0000000F] transition-colors text-left w-full group rounded-2xl cursor-pointer"
    >
      <div className="flex-shrink-0 w-[36px] h-[36px] flex items-center justify-center">{icon}</div>
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-sm font-normal text-[#0D0D0D] truncate">{name}</span>
        <span className="text-sm font-normal text-[#8F8F8F] truncate">{description}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-[#8F8F8F] group-hover:text-[#0D0D0D] transition-colors flex-shrink-0" />
    </button>
  );
}
