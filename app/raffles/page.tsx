"use client";

import React from "react";
import { motion } from "framer-motion";
import RafflesList from "@/components/RafflesList";
import CreateRaffleModal from "@/components/CreateRaffleModal";

export default function RafflesPage() {
  return (
    <main className="min-h-screen bg-black pb-24 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 cursor-pointer">
            Active <span style={{ color: "var(--accent-teal)" }}>Raffles</span>
          </h1>
          <h2 className="text-2xl font-bold mb-4 text-red-500">DEMO!</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Browse through current raffles or create your own raffle for NFTs or
            tokens
          </p>
          <CreateRaffleModal />
        </motion.div>

        <RafflesList />
      </div>
    </main>
  );
}
