"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CallToActionSection = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-black to-black/80 p-12 md:p-16 rounded-2xl border border-primary relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-[100px] -ml-48 -mb-48"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Win Exclusive{" "}
              <span className="text-primary">NFTs</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Join CyberOne today and participate in our NFT raffles. Connect
              your wallet, buy tickets, and get a chance to win rare digital
              collectibles.
            </p>
            <Link
              href="/raffles"
              className="bg-primary text-black px-8 py-4 rounded-md font-bold text-lg hover:scale-105 transition-all inline-flex items-center"
            >
              Start Now
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 