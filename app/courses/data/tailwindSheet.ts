     // app/courses/data/tailwindSheet.ts

export const tailwindSheet = [
  {
    id: 1,
    title: "🌈 Tailwind Basics",
    category: "Basics",
    color: "from-purple-500 to-pink-500",
    topics: [
      { id: 1, title: "Setting up Tailwind in a Project", xp: 80, done: false },
      { id: 2, title: "Understanding Utility Classes", xp: 90, done: false },
      { id: 3, title: "Responsive Design with Breakpoints", xp: 100, done: false },
      { id: 4, title: "Colors, Spacing, and Typography", xp: 80, done: false },
    ],
  },
  {
    id: 2,
    title: "⚡ Advanced Utilities",
    category: "Intermediate",
    color: "from-pink-500 to-fuchsia-600",
    topics: [
      { id: 1, title: "Flexbox & Grid with Tailwind", xp: 100, done: false },
      { id: 2, title: "Customizing Config (tailwind.config.js)", xp: 120, done: false },
      { id: 3, title: "Hover, Focus, and Active States", xp: 90, done: false },
    ],
  },
  {
    id: 3,
    title: "🧠 UI Components & Animations",
    category: "Advanced",
    color: "from-indigo-500 to-purple-700",
    topics: [
      { id: 1, title: "Building Reusable Components", xp: 110, done: false },
      { id: 2, title: "Transitions, Transforms, and Animations", xp: 120, done: false },
      { id: 3, title: "Dark Mode & Theming", xp: 100, done: false },
    ],
  },
]
