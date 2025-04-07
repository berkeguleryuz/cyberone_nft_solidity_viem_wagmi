"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus, Sparkles } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useAccount } from "wagmi";
import { toast } from "react-hot-toast";

const nftRaffleSchema = z.object({
  contractAddress: z
    .string()
    .min(42, { message: "Contract address must be valid" }),
  tokenId: z.string().min(1, { message: "Token ID is required" }),
  price: z
    .string()
    .min(1, { message: "Price is required" })
    .refine((val) => !isNaN(Number(val)), {
      message: "Price must be a number",
    }),
  totalTickets: z
    .string()
    .min(1, { message: "Total tickets is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Total tickets must be a positive number",
    }),
  duration: z
    .string()
    .min(1, { message: "Duration is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Duration must be a positive number",
    }),
});

const tokenRaffleSchema = z.object({
  tokenType: z.enum(["ERC20", "Native"]),
  contractAddress: z.string().optional(),
  amount: z
    .string()
    .min(1, { message: "Amount is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Amount must be a positive number",
    }),
  price: z
    .string()
    .min(1, { message: "Price is required" })
    .refine((val) => !isNaN(Number(val)), {
      message: "Price must be a number",
    }),
  totalTickets: z
    .string()
    .min(1, { message: "Total tickets is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Total tickets must be a positive number",
    }),
  duration: z
    .string()
    .min(1, { message: "Duration is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Duration must be a positive number",
    }),
});

export default function CreateRaffleModal() {
  const [open, setOpen] = useState(false);
  const { isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState("nft");

  const nftForm = useForm<z.infer<typeof nftRaffleSchema>>({
    resolver: zodResolver(nftRaffleSchema),
    defaultValues: {
      contractAddress: "",
      tokenId: "",
      price: "",
      totalTickets: "",
      duration: "7",
    },
  });

  const tokenForm = useForm<z.infer<typeof tokenRaffleSchema>>({
    resolver: zodResolver(tokenRaffleSchema),
    defaultValues: {
      tokenType: "ERC20",
      contractAddress: "",
      amount: "",
      price: "",
      totalTickets: "",
      duration: "7",
    },
  });

  const onSubmitNFT = (values: z.infer<typeof nftRaffleSchema>) => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    console.log("Creating NFT raffle with values:", values);

    toast.success("NFT Raffle created successfully!");
    setOpen(false);
    nftForm.reset();
  };

  const onSubmitToken = (values: z.infer<typeof tokenRaffleSchema>) => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    console.log("Creating Token raffle with values:", values);

    toast.success("Token Raffle created successfully!");
    setOpen(false);
    tokenForm.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        <Button
          className="bg-gradient-to-r from-[var(--accent-teal)] to-[var(--primary)] hover:opacity-90 text-black"
          size="lg">
          <Plus className="mr-2 h-5 w-5" />
          Create Raffle
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-zinc-900 border-zinc-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="h-5 w-5 text-[var(--accent-teal)]" />
            Create New Raffle
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Choose the type of raffle you want to create.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-2">
          <TabsList className="grid w-full grid-cols-2 bg-zinc-800">
            <TabsTrigger
              value="nft"
              className="data-[state=active]:bg-[var(--accent-teal)] data-[state=active]:text-black">
              NFT Raffle
            </TabsTrigger>
            <TabsTrigger
              value="token"
              className="data-[state=active]:bg-[var(--accent-teal)] data-[state=active]:text-black">
              Token Raffle
            </TabsTrigger>
          </TabsList>

          {/* NFT Raffle Form */}
          <TabsContent value="nft" className="mt-4">
            <Form {...nftForm}>
              <form
                onSubmit={nftForm.handleSubmit(onSubmitNFT)}
                className="space-y-4">
                <FormField
                  control={nftForm.control}
                  name="contractAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NFT Contract Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="0x..."
                          className="bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={nftForm.control}
                  name="tokenId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Token ID</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1234"
                          className="bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={nftForm.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ticket Price (ETH)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0.05"
                            step="0.01"
                            className="bg-zinc-800 border-zinc-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={nftForm.control}
                    name="totalTickets"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Tickets</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="100"
                            className="bg-zinc-800 border-zinc-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={nftForm.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration (days)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="7"
                          className="bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-gray-500 text-xs">
                        How many days the raffle will be active.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[var(--accent-teal)] text-black hover:opacity-90"
                  disabled={!isConnected}>
                  Create NFT Raffle
                </Button>
              </form>
            </Form>
          </TabsContent>

          {/* Token Raffle Form */}
          <TabsContent value="token" className="mt-4">
            <Form {...tokenForm}>
              <form
                onSubmit={tokenForm.handleSubmit(onSubmitToken)}
                className="space-y-4">
                <FormField
                  control={tokenForm.control}
                  name="tokenType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Token Type</FormLabel>
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant={
                            field.value === "Native" ? "default" : "outline"
                          }
                          className={`flex-1 ${
                            field.value === "Native"
                              ? "bg-[var(--accent-teal)] text-black"
                              : "bg-zinc-800 text-white"
                          }`}
                          onClick={() => field.onChange("Native")}>
                          Native (ETH)
                        </Button>
                        <Button
                          type="button"
                          variant={
                            field.value === "ERC20" ? "default" : "outline"
                          }
                          className={`flex-1 ${
                            field.value === "ERC20"
                              ? "bg-[var(--accent-teal)] text-black"
                              : "bg-zinc-800 text-white"
                          }`}
                          onClick={() => field.onChange("ERC20")}>
                          ERC20 Token
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {tokenForm.watch("tokenType") === "ERC20" && (
                  <FormField
                    control={tokenForm.control}
                    name="contractAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Token Contract Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="0x..."
                            className="bg-zinc-800 border-zinc-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={tokenForm.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Token Amount{" "}
                        {tokenForm.watch("tokenType") === "Native"
                          ? "(ETH)"
                          : ""}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="100"
                          className="bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={tokenForm.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ticket Price (ETH)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0.05"
                            step="0.01"
                            className="bg-zinc-800 border-zinc-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={tokenForm.control}
                    name="totalTickets"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Tickets</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="100"
                            className="bg-zinc-800 border-zinc-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={tokenForm.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration (days)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="7"
                          className="bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-gray-500 text-xs">
                        How many days the raffle will be active.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[var(--accent-teal)] text-black hover:opacity-90"
                  disabled={!isConnected}>
                  Create Token Raffle
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
