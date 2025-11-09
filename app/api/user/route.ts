// app/api/user/route.ts
import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@/models/User";

export async function POST() {
  try {
    await connectDB();
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: "No user found" }, { status: 404 });
    }

    const primaryEmail = user.primaryEmailAddress?.emailAddress;
    if (!primaryEmail) {
      return NextResponse.json({ error: "No email address found" }, { status: 400 });
    }

    const existingUser = await User.findOne({ clerkId: user.id });

    if (!existingUser) {
      await User.create({
        clerkId: user.id,
        email: primaryEmail,
        name: user.fullName || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        imageUrl: user.imageUrl || "",
        username: user.username || "",
        createdAt: new Date(),
      });
    } else {
      await User.findOneAndUpdate(
        { clerkId: user.id },
        {
          email: primaryEmail,
          name: user.fullName || "",
          updatedAt: new Date(),
        }
      );
    }

    return NextResponse.json({ success: true, email: primaryEmail });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: (err as Error).message },
      { status: 500 }
    );
  }
}
