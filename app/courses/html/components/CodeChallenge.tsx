"use client";

export default function CodeChallenge({ title, prompt, example }: any) {
  return (
    <div className="mt-6 bg-[#1b0024]/70 p-5 rounded-xl border border-fuchsia-800/30 shadow-lg">
      <h3 className="text-lg font-semibold text-fuchsia-300 mb-2">🧩 {title}</h3>
      <p className="text-purple-200 mb-4">{prompt}</p>
      <pre className="bg-[#12001b] text-amber-200 rounded-lg p-3 text-sm">
        <code>{example}</code>
      </pre>
    </div>
  );
}
