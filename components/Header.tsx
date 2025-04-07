"use client";

import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 border-primary/20"
          : "bg-black/50 border-primary/10"
      }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="bg-primary h-[40px] w-[120px] flex items-center justify-center rounded">
              <h1 className="text-black text-xl font-bold">CyberOne</h1>
            </div>
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/raffles"
              className="text-sm font-medium hover:text-primary transition-colors">
              Raffles
            </Link>
            <Link
              href="/guide"
              className="text-sm font-medium hover:text-primary transition-colors">
              Guide
            </Link>
          </nav>

          <div className="hidden md:block">
            <ConnectButton />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/raffles"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}>
              Raffles
            </Link>
            <Link
              href="/raffles/guide"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}>
              Guide
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
