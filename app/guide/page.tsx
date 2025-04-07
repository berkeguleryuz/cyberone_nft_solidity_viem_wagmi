"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import {
  ArrowRight,
  Zap,
  Shield,
  Award,
  Image as ImageIcon,
  Coins,
} from "lucide-react";

export default function RaffleGuide() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--accent-teal)/15%,transparent_70%)]"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--accent-teal)]">
              Complete Raffle Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn how to participate in NFT and token raffles on our platform
              and maximize your chances of winning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <motion.div
              className="md:col-span-1 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="bg-zinc-900/70 border border-zinc-700 rounded-xl p-6 shadow-xl sticky top-24">
                <h2 className="text-2xl font-bold text-[var(--accent-teal)] mb-5">
                  Guide Contents
                </h2>
                <nav className="space-y-4 text-gray-300">
                  <a
                    href="#what-are-raffles"
                    className="block py-2 px-4 hover:bg-zinc-800/80 rounded-lg hover:text-white transition-colors">
                    What are Raffles?
                  </a>
                  <a
                    href="#how-to-participate"
                    className="block py-2 px-4 hover:bg-zinc-800/80 rounded-lg hover:text-white transition-colors">
                    How to Participate
                  </a>
                  <a
                    href="#raffle-features"
                    className="block py-2 px-4 hover:bg-zinc-800/80 rounded-lg hover:text-white transition-colors">
                    Key Features
                  </a>
                  <a
                    href="#technical-details"
                    className="block py-2 px-4 hover:bg-zinc-800/80 rounded-lg hover:text-white transition-colors">
                    Technical Details
                  </a>
                </nav>

                <div className="mt-8 pt-6 border-t border-zinc-700">
                  <h3 className="font-medium text-white mb-3">
                    Ticket Pricing
                  </h3>
                  <div className="bg-zinc-800/60 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">1 Ticket</span>
                      <span className="font-mono text-white">0.05 ETH</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">5 Tickets</span>
                      <span className="font-mono text-white">0.2 ETH</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">10 Tickets</span>
                      <span className="font-mono text-white">0.35 ETH</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Button
                    asChild
                    className="w-full bg-[var(--accent-teal)] text-black hover:bg-[var(--accent-teal)]/90 font-medium h-12">
                    <Link href="/raffles">
                      Browse Raffles
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            <div className="md:col-span-3 space-y-16">
              <motion.section
                id="what-are-raffles"
                className="bg-zinc-900/40 border-l-4 border-[var(--accent-teal)] pl-6 pr-6 py-10 rounded-r-xl shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}>
                <h2 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[var(--accent-teal)]">01.</span> What
                  are Raffles?
                </h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Raffles are transparent blockchain-based contests where
                  participants purchase tickets for a chance to win exclusive
                  digital assets. Our platform offers two types of raffles that
                  give you the opportunity to win valuable prizes with small
                  investments.
                </p>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 bg-gradient-to-br from-zinc-900/90 to-zinc-800/30 rounded-2xl p-8 border border-zinc-700 shadow-lg backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-teal)]/10 blur-3xl rounded-full -translate-y-20 translate-x-20"></div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="bg-[var(--accent-teal)]/20 w-14 h-14 flex items-center justify-center rounded-xl">
                        <ImageIcon className="w-7 h-7 text-[var(--accent-teal)]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        NFT Raffles
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg relative z-10">
                      Win exclusive NFTs with unique properties and rarity.
                      Perfect for collectors and NFT enthusiasts. NFT prizes
                      include rare artwork, collectibles, and other digital
                      assets with proven scarcity on the blockchain.
                    </p>
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-zinc-900/90 to-zinc-800/30 rounded-2xl p-8 border border-zinc-700 shadow-lg backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full -translate-y-20 translate-x-20"></div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="bg-yellow-500/20 w-14 h-14 flex items-center justify-center rounded-xl">
                        <Coins className="w-7 h-7 text-yellow-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Token Raffles
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg relative z-10">
                      Win cryptocurrency tokens like ETH or platform-specific
                      tokens. Great for those looking for liquid assets. Token
                      prizes can be immediately traded or held as a long-term
                      investment depending on your strategy.
                    </p>
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="how-to-participate"
                className="bg-zinc-900/40 border-l-4 border-[var(--accent-teal)] pl-6 pr-6 py-10 rounded-r-xl shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}>
                <h2 className="text-3xl font-bold text-white mb-8">
                  <span className="text-[var(--accent-teal)]">02.</span> How to
                  Participate
                </h2>

                <div className="relative pl-12 pb-12">
                  {/* Vertical line connector */}
                  <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-teal)] to-zinc-700"></div>

                  <div className="mb-14 relative">
                    <div className="absolute left-[-48px] top-0 w-9 h-9 rounded-full bg-[var(--accent-teal)]/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent-teal)]"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Connect Your Wallet
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Use your preferred Web3 wallet to connect to our platform.
                      Make sure you have sufficient funds for ticket purchases
                      and gas fees. We support most major wallets including
                      MetaMask, WalletConnect, and Coinbase Wallet.
                    </p>
                  </div>

                  <div className="mb-14 relative">
                    <div className="absolute left-[-48px] top-0 w-9 h-9 rounded-full bg-[var(--accent-teal)]/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent-teal)]"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Browse Active Raffles
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Explore our collection of active raffles. Each raffle
                      displays important information including the prize, ticket
                      price, total number of tickets, and time remaining. You
                      can filter by NFT or token raffles based on your
                      preferences.
                    </p>
                    <div className="bg-black/30 border border-zinc-700 rounded-xl p-4">
                      <p className="flex items-center text-sm text-gray-400">
                        <Zap
                          size={16}
                          className="text-[var(--accent-teal)] mr-2 flex-shrink-0"
                        />
                        Pro tip: Monitor raffles with fewer entries for better
                        winning odds. Less popular raffles may have better
                        chances of winning even if the prizes are valuable.
                      </p>
                    </div>
                  </div>

                  <div className="mb-14 relative">
                    <div className="absolute left-[-48px] top-0 w-9 h-9 rounded-full bg-[var(--accent-teal)]/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent-teal)]"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Purchase Tickets
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Choose how many tickets you want to purchase. Remember,
                      the more tickets you buy, the higher your chances of
                      winning. Enter the quantity and confirm your purchase.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute left-[-48px] top-0 w-9 h-9 rounded-full bg-[var(--accent-teal)]/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent-teal)]"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Wait for Results
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      When the raffle period ends, winners are automatically
                      selected through our verifiable random function. If you
                      win, the prize will be transferred directly to your
                      wallet. No additional claiming steps required!
                    </p>
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="raffle-features"
                className="bg-zinc-900/40 border-l-4 border-[var(--accent-teal)] pl-6 pr-6 py-10 rounded-r-xl shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <h2 className="text-3xl font-bold text-white mb-8">
                  <span className="text-[var(--accent-teal)]">03.</span> Key
                  Raffle Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-zinc-900 to-zinc-800/30 rounded-2xl p-8 border border-zinc-700">
                    <Shield className="w-10 h-10 text-[var(--accent-teal)] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">
                      Secure & Transparent
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Our smart contracts ensure 100% fairness with transparent,
                      verifiable selection mechanisms. All transactions are
                      recorded on the blockchain and can be audited by anyone.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-zinc-900 to-zinc-800/30 rounded-2xl p-8 border border-zinc-700">
                    <Award className="w-10 h-10 text-[var(--accent-teal)] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">
                      Exclusive Prizes
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Win rare NFTs, valuable tokens, or exclusive digital
                      assets that might otherwise be inaccessible or
                      prohibitively expensive on the open market.
                    </p>
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="technical-details"
                className="bg-zinc-900/40 border-l-4 border-[var(--accent-teal)] pl-6 pr-6 py-10 rounded-r-xl shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}>
                <h2 className="text-3xl font-bold text-white mb-8">
                  <span className="text-[var(--accent-teal)]">04.</span>{" "}
                  Technical Details
                </h2>

                <div className="space-y-8">
                  <div className="bg-black/20 backdrop-blur-sm border border-zinc-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Smart Contract Security
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      All our raffle contracts are audited by leading security
                      firms and use industry best practices. The code is
                      open-source and can be verified on the blockchain.
                    </p>
                  </div>

                  <div className="bg-black/20 backdrop-blur-sm border border-zinc-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Randomness Generation
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      We utilize Chainlink VRF (Verifiable Random Function) to
                      ensure true randomness that cannot be manipulated by
                      anyone, including our team.
                    </p>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-zinc-900 to-zinc-900/60 border border-zinc-700/50 rounded-2xl p-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Win Exclusive Digital Assets?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of participants who have already won valuable NFTs
              and tokens. The more tickets you buy, the better your chances of
              winning!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[var(--accent-teal)] text-black hover:bg-[var(--accent-teal)]/90 px-8 h-12 text-lg">
                <Link href="/raffles">Explore Raffles</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[var(--accent-teal)]/30 bg-zinc-900 text-[var(--accent-teal)] hover:text-[var(--accent-teal)]/90 hover:bg-[var(--accent-teal)]/5 h-12 text-lg">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
