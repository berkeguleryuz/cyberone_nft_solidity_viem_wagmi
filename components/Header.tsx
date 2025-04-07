"use client";

import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

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
            <div className="bg-primary h-[40px] w-[160px] flex items-center justify-center rounded-lg">
              <h1 className="text-black text-xl font-bold">CyberOne</h1>
            </div>
          </Link>

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

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden text-white">
              <button aria-label="Open menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 border-l border-primary/20 p-0">
              <SheetHeader className="p-6 border-b border-primary/10">
                <SheetTitle className="flex justify-center">
                  <div className="bg-primary h-[40px] w-[160px] flex items-center justify-center rounded-lg">
                    <h1 className="text-black text-xl font-bold">CyberOne</h1>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <nav className="flex flex-col gap-1 p-6">
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className="text-sm font-medium py-3 px-4 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
                        Home
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/raffles"
                        className="text-sm font-medium py-3 px-4 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
                        Raffles
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/guide"
                        className="text-sm font-medium py-3 px-4 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
                        Guide
                      </Link>
                    </SheetClose>
                  </nav>
                </div>
                <div className="p-6 border-t border-primary/10">
                  <ConnectButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
