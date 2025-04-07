"use client";

import React from "react";
import { BackgroundElements } from "./BackgroundElements";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { CallToActionSection } from "./CallToActionSection";
import { CreateRaffleSection } from "./CreateRaffleSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative z-[20] pointer-events-auto">
      <BackgroundElements />
      <div className="relative z-[5] pointer-events-auto">
        <HeroSection />
        <CreateRaffleSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CallToActionSection />
      </div>
    </div>
  );
};

export default LandingPage;
