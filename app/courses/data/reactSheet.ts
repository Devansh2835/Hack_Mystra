// app/courses/data/reactSheet.ts

export const reactSheet = [
  {
    id: 1,
    title: "⚛️ The Foundations (React Basics)",
    category: "Basics",
    color: "from-blue-500 to-cyan-500",
    topics: [
      { id: 1, title: "The First Component (Creating Components)", xp: 100, done: false },
      { id: 2, title: "The Transfiguration Syntax (JSX)", xp: 110, done: false },
      { id: 3, title: "The potions of Data (Props)", xp: 90, done: false },
      { id: 4, title: "The Remebrall (Rendering Lists)", xp: 80, done: false },
    ],
  },
  {
    id: 2,
    title: "⚙️ The State of Mind (React State) ",
    category: "Intermediate",
    color: "from-cyan-400 to-blue-600",
    topics: [
      { id: 1, title: "Trial 1: The Pensieve (useState Hook)", xp: 120, done: false },
      { id: 2, title: "Trial 2: The Marauder's Toggle (Boolean State)", xp: 130, done: false },
      { id: 3, title: "Trial 3: The Potion Brewer (Complex State Objects)", xp: 140, done: false },
      { id: 4, title: "Trial 4: The Goblet of Fire (Array State)", xp: 150, done: false },
    ],
  },
  { id: 3,
    title: "⚙️ The Two-Way Mirror (Forms & Events) ",
    category: "Intermediate",
    color: "from-cyan-400 to-blue-600",
    topics: [
      { id: 1, title: "Trial 1: The Howler (Event Handling)", xp: 120, done: false },
      { id: 2, title: "Trial 2: The Prophecy Orb (Controlled Inputs)", xp: 130, done: false },
      { id: 3, title: "Trial 3: The Sorting Ceremony (Form Submission)", xp: 140, done: false },
    ],
  },
    { id: 4,
    title: "⚙️ The Life Cycle (useEffect Hook) ",
    category: "Intermediate",
    color: "from-cyan-400 to-blue-600",
    topics: [
      { id: 1, title: "Trial 1: The Room of Requirement (useEffect Basics)", xp: 120, done: false },
      { id: 2, title: "Trial 2: The Marauder's Map (useEffect Dependencies)", xp: 130, done: false },
      { id: 3, title: "Trial 3: The Prophecy Orb (Fetching Data)", xp: 140, done: false },
    ],
  },

  {
    id: 5,
    title: "🧠 The Forbidden Forest (Advanced Patterns)",
    category: "Advanced",
    color: "from-indigo-500 to-violet-600",
    topics: [
      { id: 1, title: "Trial 1: The Elder Wand (Custom Hooks)", xp: 110, done: false },
      { id: 2, title: "Trial 2: The Room of Requirement (React Context)", xp: 130, done: false },
      { id: 3, title: "Trial 3: The Horcrux (useReducer)", xp: 140, done: false },
    ],
  },
  {
    id: 6,
    title: "💻 The Final Challenge (Capstone Project)",
    category: "Advanced",
    color: "from-fuchsia-500 to-pink-600",
    topics: [
      { id: 1, title: "The Ultimate Trial: House Cup Championship Tracker", xp: 150, done: false },
    ],
  },
]
