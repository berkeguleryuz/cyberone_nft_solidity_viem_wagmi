"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gift, Ticket, ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { particleData } from "@/lib/particleData";
import Image from "next/image";

export const CreateRaffleSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-24"
      style={{
        background: "linear-gradient(to bottom, #000000, #001a1a, #000000)",
      }}>
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -inset-[10%] z-0">
          {particleData.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                background: `var(--accent-teal)`,
                boxShadow: `0 0 ${particle.shadow}px ${
                  particle.shadow / 2
                }px var(--accent-teal)`,
                animation: `pulse-glow ${particle.animDuration}s ease-in-out infinite ${particle.animDelay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isSectionInView ? 1 : 0,
            y: isSectionInView ? 0 : 30,
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Create Your{" "}
            <span style={{ color: "var(--accent-teal)" }}>Own Raffle</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Launch your own transparent NFT raffle and distribute your digital
            assets or rewards the way you want them to be valued.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: isSectionInView ? 1 : 0,
              x: isSectionInView ? 0 : -30,
            }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: "rgba(0, 206, 209, 0.2)" }}>
                  <Gift
                    className="w-6 h-6"
                    style={{ color: "var(--accent-teal)" }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Distribute Your NFTs Your Way
                  </h3>
                  <p className="text-gray-300">
                    Have NFTs or digital rewards to distribute? Create a
                    transparent raffle and let your community participate. Set
                    your own price and terms.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: "rgba(0, 206, 209, 0.2)" }}>
                  <Ticket
                    className="w-6 h-6"
                    style={{ color: "var(--accent-teal)" }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Fair and Transparent
                  </h3>
                  <p className="text-gray-300">
                    Our blockchain-powered system ensures complete transparency
                    in winner selection. Build trust with your community through
                    verifiable results.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: "rgba(0, 206, 209, 0.2)" }}>
                  <TrendingUp
                    className="w-6 h-6"
                    style={{ color: "var(--accent-teal)" }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Flexible Pricing
                  </h3>
                  <p className="text-gray-300">
                    Set lower prices for wider participation or higher prices
                    for exclusivity. The raffle format gives you control while
                    maintaining fairness.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/create-raffle"
                className="inline-flex items-center gap-2 text-black px-8 py-4 rounded-md font-bold text-lg transition-all group hover:opacity-90"
                style={{ backgroundColor: "var(--accent-teal)" }}>
                Start Creating
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{
              opacity: isSectionInView ? 1 : 0,
              x: isSectionInView ? 0 : 30,
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative">
            <div
              className="relative overflow-hidden rounded-2xl aspect-square max-w-md mx-auto bg-black/40 backdrop-blur-sm"
              style={{
                borderWidth: "4px",
                borderColor: "rgba(0, 206, 209, 0.3)",
                boxShadow: "0 0 30px rgba(0, 206, 209, 0.3)",
              }}>
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="mb-6 flex justify-between items-center">
                  <div className="text-2xl font-bold text-white">
                    Your NFT Raffle
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: "rgba(0, 206, 209, 0.2)",
                      color: "var(--accent-teal)",
                    }}>
                    Active
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div
                      className="h-40 rounded-lg flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(0, 206, 209, 0.2), rgba(0, 206, 209, 0.05))",
                      }}>
                      <Image
                        src="/3.jpg"
                        alt="NFT"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price per ticket</span>
                        <span className="text-white font-medium">0.05 ETH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total tickets</span>
                        <span className="text-white font-medium">100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">End date</span>
                        <span className="text-white font-medium">7 days</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 cursor-pointer">
                    <div
                      className="w-full py-3 rounded-md font-bold text-center text-black"
                      style={{ backgroundColor: "var(--accent-teal)" }}>
                      Buy Ticket
                    </div>
                    <div className="mt-3 text-center text-sm text-gray-400">
                      1/1 tickets sold
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full blur-3xl opacity-20"
              style={{
                background:
                  "linear-gradient(to bottom right, var(--accent-teal), var(--primary))",
              }}></div>
            <div
              className="absolute -top-5 -left-5 w-28 h-28 rounded-full blur-3xl opacity-20"
              style={{
                background:
                  "linear-gradient(to bottom right, var(--primary), var(--accent-teal))",
              }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
