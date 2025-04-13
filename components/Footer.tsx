"use client";

import React from "react";
import Link from "next/link";
import { XIcon } from "@/assets/Icons";
import { BsDiscord } from "react-icons/bs";
export const Footer = () => {
  return (
    <footer className="relative z-10 bg-black border-t border-primary/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="mb-4 md:mb-0">
            <div className="bg-primary h-[40px] w-[120px] flex items-center justify-center rounded">
              <h1 className="text-black text-xl font-bold">CyberOne</h1>
            </div>
          </Link>

          <div className="flex gap-4">
            <Link
              href="https://x.com/cyberonenft"
              target="_blank"
              className="text-gray-300 hover:text-primary">
              <XIcon />
            </Link>

            <Link
              href="https://discord.gg/eZS8py4s"
              target="_blank"
              className="text-gray-300 items-center justify-center flex hover:text-primary">
              <BsDiscord className="w-6 h-6" />
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/raffles"
              className="text-sm text-gray-300 hover:text-primary">
              Raffles
            </Link>
            <Link
              href="/guide"
              className="text-sm text-gray-300 hover:text-primary">
              Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
