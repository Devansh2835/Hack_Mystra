import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

// Connect to DB (server side only)
if (typeof window === "undefined") {
  import("@/lib/db").then(({ connectDB }) => connectDB());
}

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

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
          className={`${inter.variable} bg-[#0b0018] text-purple-100 antialiased min-h-screen font-sans`}
        >
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}