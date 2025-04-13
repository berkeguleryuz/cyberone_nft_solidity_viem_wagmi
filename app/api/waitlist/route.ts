import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, wallet } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 },
      );
    }

    const existingEntry = await prisma.waitlist.findUnique({
      where: { email },
    });

    if (existingEntry) {
      if (!existingEntry.walletAddress && wallet) {
        const updatedEntry = await prisma.waitlist.update({
          where: { email },
          data: { walletAddress: wallet },
        });
        return NextResponse.json(updatedEntry);
      }
      
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 400 },
      );
    }

    const waitlistEntry = await prisma.waitlist.create({
      data: { 
        email,
        walletAddress: wallet || null
      },
    });

    return NextResponse.json(waitlistEntry);
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
