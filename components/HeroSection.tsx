"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity, scale }}
      className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isHeroInView ? 1 : 0,
            y: isHeroInView ? 0 : 50,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Win Exclusive <span className="text-primary">NFTs</span> Through Our
            Raffle
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the next generation of digital collectibles on CyberOne.
            Participate in our secure blockchain-powered raffles.
          </p>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            CyberRaffle platform will be starting after the CyberOne NFTs are
            minted.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/raffles"
              className="bg-primary text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all group flex items-center justify-center">
              Browse Raffles
              <motion.span
                className="inline-block ml-2"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <ArrowRight size={20} />
              </motion.span>
            </Link>
            <Link
              href="/guide"
              className="border-2 border-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">
              Learn More
            </Link>
          </div>
        </motion.div>

        <div className="mt-16 relative h-[300px] md:h-[400px]">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-64 h-64 border-4 border-primary rounded-lg overflow-hidden">
              <Image
                src="/1.png"
                alt="Featured NFT"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute left-[30%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <div className="relative w-48 h-48 border-4 border-primary/70 rounded-lg overflow-hidden">
              <Image
                src="/2.jpg"
                alt="Featured NFT"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute left-[70%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <div className="relative w-48 h-48 border-4 border-primary/70 rounded-lg overflow-hidden">
              <Image
                src="/5.png"
                alt="Featured NFT"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
