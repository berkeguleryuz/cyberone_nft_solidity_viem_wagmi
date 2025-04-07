"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="relative z-10 max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8">
          <div className="text-[120px] font-extrabold leading-none">
            <span className="text-white">4</span>
            <span style={{ color: "var(--accent-teal)" }}>0</span>
            <span className="text-white">4</span>
          </div>
          <div
            className="relative -mt-10 text-2xl font-bold sm:text-3xl"
            style={{ color: "var(--accent-teal)" }}>
            Page Not Found
            <div
              className="absolute -right-2 -top-10 h-20 w-20 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: "var(--accent-teal)" }}></div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          <br />
          Let&apos;s get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition-all hover:bg-opacity-90">
            <Home size={20} />
            Go Home
          </Link>
          <Link
            href="/raffles"
            className="group flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all hover:bg-opacity-90"
            style={{ backgroundColor: "var(--accent-teal)", color: "black" }}>
            Explore Raffles
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="fixed bottom-0 left-0 right-0 top-0">
          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle, var(--accent-teal), transparent 70%)",
            }}></div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
    </div>
  );
} 