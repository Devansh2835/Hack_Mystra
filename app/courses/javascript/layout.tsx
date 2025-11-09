<<<<<<< HEAD
// app/javascript/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";
import StarryBackground from "@/components/star-background";

export default function JavascriptLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <StarryBackground />
      {/* Navbar */}
      <nav className="border-b border-white/10 py-4 px-8 flex justify-between items-center backdrop-blur-md bg-purple-950/30 sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-purple-400 transition">
          Mystra School
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-purple-300">Home</Link>
          <Link href="/javascript" className="hover:text-purple-300 font-semibold text-purple-400">JavaScript</Link>
          <Link href="/courses" className="hover:text-purple-300">Courses</Link>
          <Link href="/login" className="hover:text-purple-300">Login</Link>
        </div>
      </nav>
      <main className="flex-1 w-full px-6 py-8 max-w-7xl mx-auto relative z-10">
        {children}
      </main>
      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-white/70 backdrop-blur-md bg-purple-950/30">
        © {new Date().getFullYear()} Mystra Hogwarts Coder. All rights reserved.
      </footer>
    </div>
  );
}
=======
export default function JavaScriptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0016] via-[#1a0b2e] to-[#0a0016]">
      {children}
    </div>
  );
}
>>>>>>> origin/master
