"use client";

import React from "react";
import { motion } from "framer-motion";

export const HowItWorksSection = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Getting started with CyberOne is easy. Follow these simple steps to
            participate in our NFT raffles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary text-black text-2xl font-bold flex items-center justify-center mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Connect Your Wallet</h3>
            <p className="text-gray-300">
              Link your crypto wallet to our platform with just a few clicks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary text-black text-2xl font-bold flex items-center justify-center mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Purchase Tickets</h3>
            <p className="text-gray-300">
              Browse available NFT raffles and purchase tickets to participate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary text-black text-2xl font-bold flex items-center justify-center mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Win & Claim</h3>
            <p className="text-gray-300">
              If you win, the NFT will be automatically transferred to your
              wallet.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 