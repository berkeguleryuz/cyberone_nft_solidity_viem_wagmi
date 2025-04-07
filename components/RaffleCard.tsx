"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { Ticket } from "lucide-react";

interface RaffleProps {
  raffle: {
    id: number;
    type: string;
    title: string;
    image: string;
    entryFee: string;
    currency: string;
    totalTickets: number;
    soldTickets: number;
    endTime: Date;
    creator: string;
  };
}

export default function RaffleCard({ raffle }: RaffleProps) {
  const progress = (raffle.soldTickets / raffle.totalTickets) * 100;
  const timeLeft = formatDistanceToNow(raffle.endTime, { addSuffix: true });
  
  const typeColor = raffle.type === "NFT" 
    ? "var(--accent-teal)" 
    : "rgba(234, 179, 8, 1)";
  
  const statusBadgeColor = timeLeft.includes("ago") 
    ? "bg-red-500/20 text-red-500" 
    : "bg-green-500/70 text-green-100";
  
  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="rounded-xl border border-zinc-700 bg-zinc-900 overflow-hidden transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[var(--accent-teal)]/10">
      <div className="relative px-3 py-2 border-b border-zinc-700 bg-zinc-800">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white">{raffle.title}</h2>
          <div className="flex items-center space-x-1.5">
            <div 
              className="h-2 w-2 rounded-full" 
              style={{ backgroundColor: typeColor }}
            />
            <span 
              className="text-xs" 
              style={{ color: typeColor }}>
              {raffle.type} Raffle
            </span>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="relative items-start justify-start aspect-square w-full overflow-hidden">
        <Image
          src={raffle.image}
          alt={raffle.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />

        <div className="absolute top-3 right-3">
          <p className={`text-xs rounded-lg px-2 py-1 ${statusBadgeColor}`}>
            Ends {timeLeft}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-300">Created by</p>
            <p className="text-sm font-mono text-white">
              {truncateAddress(raffle.creator)}
            </p>
          </div>
          
          <div className="flex items-center gap-1.5">
            <p className="text-xs bg-zinc-800/80 rounded-lg px-2 py-1 text-white">
              {raffle.soldTickets}/{raffle.totalTickets}
            </p>
          </div>
        </div>
      </div>

      {/* Details section */}
      <div className="p-3 space-y-3">
        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Progress</span>
            <span className="text-white">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full" 
              style={{ 
                width: `${progress}%`,
                backgroundColor: typeColor 
              }}
            ></div>
          </div>
        </div>

        {/* Entry fee */}
        <div className="bg-zinc-800 rounded-lg p-2 flex justify-between items-center">
          <p className="text-xs text-gray-400">Entry Fee:</p>
          <p className="text-base font-mono font-bold text-white">
            {raffle.entryFee} {raffle.currency}
          </p>
        </div>

        {/* Buy button */}
        <Button
          className="w-full h-9 text-sm text-black cursor-pointer hover:opacity-90"
          style={{ backgroundColor: typeColor }}>
          <Ticket size={16} className="mr-2" />
          Buy Tickets
        </Button>
      </div>
    </div>
  );
} 