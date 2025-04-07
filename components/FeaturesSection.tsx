"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Globe, Trophy } from "lucide-react";

export const FeaturesSection = () => {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: false, amount: 0.3 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <section ref={featuresRef} className="relative z-10 py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isFeaturesInView ? 1 : 0,
            y: isFeaturesInView ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">CyberOne</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform offers the best experience for NFT raffles with
            cutting-edge technology and user-centric design.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isFeaturesInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            variants={item}
            className="bg-black/30 p-6 rounded-xl border border-primary/20 backdrop-blur-sm"
          >
            <Shield className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Secure Raffles</h3>
            <p className="text-gray-300">
              All raffles are secured through smart contracts, ensuring fairness
              and transparency.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-black/30 p-6 rounded-xl border border-primary/20 backdrop-blur-sm"
          >
            <Zap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Fast Transactions</h3>
            <p className="text-gray-300">
              Lightning-fast transaction processing with minimal fees on the
              blockchain.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-black/30 p-6 rounded-xl border border-primary/20 backdrop-blur-sm"
          >
            <Globe className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Global Network</h3>
            <p className="text-gray-300">
              Join thousands of NFT enthusiasts from around the world on our
              platform.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-black/30 p-6 rounded-xl border border-primary/20 backdrop-blur-sm"
          >
            <Trophy className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Exclusive NFTs</h3>
            <p className="text-gray-300">
              Access to exclusive and limited edition NFTs that you can&apos;t find
              anywhere else.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 