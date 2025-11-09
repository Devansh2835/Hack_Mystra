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