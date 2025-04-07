"use client";

import React from "react";
import { motion } from "framer-motion";
import RaffleCard from "@/components/RaffleCard";

const MOCK_RAFFLES = [
  {
    id: 1,
    type: "NFT",
    title: "Crypto Punk #4693",
    image: "/c4693.avif",
    entryFee: "0.05",
    currency: "ETH",
    totalTickets: 100,
    soldTickets: 45,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    creator: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  },
  {
    id: 2,
    type: "TOKEN",
    title: "10 ETH Jackpot",
    image: "/eth.webp",
    entryFee: "10",
    currency: "ETH",
    totalTickets: 500,
    soldTickets: 123,
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    creator: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  },
  {
    id: 3,
    type: "NFT",
    title: "Azuki #5834",
    image: "/azuki5834.avif",
    entryFee: "0.1",
    currency: "ETH",
    totalTickets: 200,
    soldTickets: 198,
    endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    creator: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  },
  {
    id: 4,
    type: "NFT",
    title: "BAYC #3751",
    image: "/bayc3751.avif",
    entryFee: "25",
    currency: "ETH",
    totalTickets: 1000,
    soldTickets: 345,
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    creator: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  },
  {
    id: 5,
    type: "NFT",
    title: "Doodle #5836",
    image: "/doodle5836.avif",
    entryFee: "0.08",
    currency: "ETH",
    totalTickets: 150,
    soldTickets: 67,
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    creator: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  },
  {
    id: 6,
    type: "NFT",
    title: "Invisible Friends #2642",
    image: "/invisible2642.png",
    entryFee: "100",
    currency: "ETH",
    totalTickets: 2000,
    soldTickets: 1533,
    endTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    creator: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  },
];

export default function RafflesList() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_RAFFLES.map((raffle, index) => (
          <motion.div
            key={raffle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}>
            <RaffleCard raffle={raffle} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
