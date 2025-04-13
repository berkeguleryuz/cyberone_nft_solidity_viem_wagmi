import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import WaitlistCard from "./WaitlistCard";
import { useAccount } from "wagmi";

export function WaitlistDialog() {
  const account = useAccount();
  const isConnected = account?.isConnected || false;
  const address = account?.address;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasRegistered = localStorage.getItem("waitlistRegistered");

    if (!hasRegistered && !isConnected) {
      setOpen(true);
    }
  }, [isConnected]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
              setOpen(false);
              // Mark as registered only after successful submission
              localStorage.setItem("waitlistRegistered", "true");
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
