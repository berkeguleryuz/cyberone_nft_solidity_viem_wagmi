import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";

interface WaitlistCardProps {
  walletAddress?: string;
  onSuccess?: () => void;
}

const WaitlistCard = ({ walletAddress, onSuccess }: WaitlistCardProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          wallet: walletAddress,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An error occurred");
      }

      toast.success("Waitlist is successfully added!");
      setEmail("");

      if (onSuccess) {
        onSuccess();
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-black border-none">
      <CardHeader>
        <CardTitle>Part of Community</CardTitle>
        <CardDescription>
          Be the first to know about new features and updates.
          {walletAddress && (
            <p className="mt-2 text-sm text-green-500">
              Connected wallet: {walletAddress.slice(0, 6)}...
              {walletAddress.slice(-4)}
            </p>
          )}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="border-gray-700 active:ring-primary focus:ring-primary bg-gray-900"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-4">
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 cursor-pointer"
            disabled={loading}>
            {loading ? "Saving..." : "Join"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default WaitlistCard;
