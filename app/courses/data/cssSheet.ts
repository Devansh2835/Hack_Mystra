// app/courses/data/cssSheet.ts

export const cssSheet = [
  {
    id: 1,
    title: "🎨 CSS Foundations",
    category: "Basics",
    color: "from-blue-400 to-cyan-500",
    topics: [
      { id: 1, title: "Selectors & Properties", xp: 60, done: false },
      { id: 2, title: "Box Model & Display Types", xp: 70, done: false },
      { id: 3, title: "Colors, Fonts, and Units", xp: 60, done: false },
    ],
  },
  {
    id: 2,
    title: "🧩 Layout Techniques",
    category: "Intermediate",
    color: "from-cyan-400 to-teal-500",
    topics: [
      { id: 1, title: "Flexbox", xp: 100, done: false },
      { id: 2, title: "CSS Grid", xp: 100, done: false },
      { id: 3, title: "Positioning & Z-index", xp: 90, done: false },
    ],
  },
  {
    id: 3,
    title: "🌈 Advanced Styling",
    category: "Advanced",
    color: "from-indigo-500 to-violet-600",
    topics: [
      { id: 1, title: "Transitions & Animations", xp: 100, done: false },
      { id: 2, title: "Pseudo Classes & Elements", xp: 80, done: false },
      { id: 3, title: "Responsive Design", xp: 110, done: false },
      { id: 4, title: "Custom Properties (CSS Variables)", xp: 90, done: false },
    ],
  },
]
