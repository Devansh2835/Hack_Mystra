import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

// Connect to DB (server side only)
if (typeof window === "undefined") {
  import("@/lib/db").then(({ connectDB }) => connectDB());
}

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Mystra",
  description: "Learn the magical art of Web Development 🎃",
  generator: "v0.app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geist.variable} ${geistMono.variable} bg-[#0b0018] text-purple-100 antialiased min-h-screen`}
        >
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}