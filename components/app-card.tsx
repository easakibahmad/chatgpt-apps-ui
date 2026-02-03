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
      className="flex items-center gap-4 px-4 py-3 hover:bg-accent/50 transition-colors text-left w-full group"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-sm font-medium text-foreground truncate">{name}</span>
        <span className="text-sm text-muted-foreground truncate">{description}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
    </button>
  );
}
