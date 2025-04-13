"use client";

import React, { useState } from "react";
import { BackgroundElements } from "./BackgroundElements";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { CallToActionSection } from "./CallToActionSection";
import { CreateRaffleSection } from "./CreateRaffleSection";
import { WaitlistDialog } from "./WaitlistDialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import WaitlistCard from "./WaitlistCard";
import { useAccount } from "wagmi";

const LandingPage = () => {
  const [manualOpen, setManualOpen] = useState(false);
  const account = useAccount();
  const address = account?.address;

  return (
    <div className="min-h-screen bg-black text-white relative z-[20] pointer-events-auto">
      <BackgroundElements />
      <div className="relative z-[5] pointer-events-auto">
        <HeroSection />
        <CreateRaffleSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CallToActionSection />

        <div className="fixed bottom-5 right-5 z-50 bg-primary hover:bg-primary/90 rounded-sm cursor-pointer font-semibold tracking-[0.18px] leading-6">
          <Button
            variant="outline"
            className=" text-black hover:text-black border-none cursor-pointer"
            onClick={() => setManualOpen(true)}>
            Join Waitlist
          </Button>
        </div>
      </div>

      <WaitlistDialog />

      <Dialog open={manualOpen} onOpenChange={setManualOpen}>
        <DialogContent className="sm:max-w-md border-primary bg-black text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold mx-auto">
              Join Waitlist
            </DialogTitle>
          </DialogHeader>
          <div>
            <WaitlistCard
              walletAddress={address}
              onSuccess={() => {
                setManualOpen(false);
                localStorage.setItem("waitlistRegistered", "true");
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPage;
