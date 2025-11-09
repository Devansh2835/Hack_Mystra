export const reactSheet = [
  {
    id: 1,
    title: "Grimoire I – The Foundations (React Basics)",
    color: "#38bdf8",
    topics: [
      {
        id: 1,
        slug: "first-component",
        title: "Trial 1 – The First Component (Creating Components)",
        xp: 50,
        content: `
### 🧱 The First Component
React Components are reusable magical blocks of UI.

**Task:** Create a function component \`HouseWelcome\`:
\`\`\`jsx
function HouseWelcome() {
  return (
    <div>
      <h1>Welcome to Gryffindor!</h1>
      <p>Where dwell the brave at heart.</p>
    </div>
  );
}
export default HouseWelcome;
\`\`\`
Summon it 3 times and observe the power of reusability ✨
        `,
      },
      {
        id: 2,
        slug: "jsx-transfiguration",
        title: "Trial 2 – The Transfiguration Syntax (JSX)",
        xp: 45,
        content: `
### 🪄 JSX Magic
JSX is HTML in disguise as JavaScript.  
Follow the Single Parent Rule and use curly braces {} for variables.

**Task:** Create a \`SpellCard\` component:
\`\`\`jsx
const spell = "Wingardium Leviosa";
return (
  <div className="spell-card">
    <h2>{spell}</h2>
    <p>Levitation Charm</p>
    <img src="feather.png" alt="Feather" />
  </div>
);
\`\`\`
        `,
      },
      {
        id: 3,
        slug: "props-potions",
        title: "Trial 3 – The Potions of Data (Props)",
        xp: 60,
        content: `
### 🧪 Props (Passing Data)
Props are like potion ingredients passed to components.

**Task:** Create \`StudentCard({ name, house })\` and summon it:
\`\`\`jsx
<StudentCard name="Harry Potter" house="Gryffindor" />
<StudentCard name="Luna Lovegood" house="Ravenclaw" />
<StudentCard name="Cedric Diggory" house="Hufflepuff" />
\`\`\`
        `,
      },
      {
        id: 4,
        slug: "rendering-lists",
        title: "Trial 4 – The Remembrall (Rendering Lists)",
        xp: 50,
        content: `
### 🧮 Rendering Lists
Use \`.map()\` to transform arrays into components.  
Remember the \`key\` curse – unique keys prevent React warnings.

**Task:** Render a list of spells using \`.map()\`.
        `,
      },
    ],
  },

  {
    id: 2,
    title: "Grimoire II – The State of Mind (useState Hook)",
    color: "#a78bfa",
    topics: [
      {
        id: 1,
        slug: "useState-pensieve",
        title: "Trial 1 – The Pensieve (useState Hook)",
        xp: 60,
        content: `
### 🧠 The Pensieve of State
Give your component memory with \`useState\`.

**Task:** Create \`HousePoints\` with \`points\` and buttons to add/subtract points.
        `,
      },
      {
        id: 2,
        slug: "boolean-toggle",
        title: "Trial 2 – The Marauder's Toggle (Boolean State)",
        xp: 40,
        content: `
### 🗺️ Boolean Toggle
Use \`const [isRevealed, setIsRevealed] = useState(false)\` and flip with \`!isRevealed\`.

**Task:** Build \`MaraudersMap\` that reveals text on button click.
        `,
      },
      {
        id: 3,
        slug: "object-state",
        title: "Trial 3 – The Potion Brewer (Complex Objects)",
        xp: 55,
        content: `
### 🧪 Object State
Use the spread operator to update objects.

**Task:** Build \`PotionBrewer\` with \`name, color, temperature\` and update them via buttons.
        `,
      },
      {
        id: 4,
        slug: "array-state",
        title: "Trial 4 – The Goblet of Fire (Array State)",
        xp: 50,
        content: `
### 🔥 Array State
Use spread and filter for add/remove operations.

**Task:** Create \`ChampionsList\` to add/remove champion names.
        `,
      },
    ],
  },

  {
    id: 3,
    title: "Grimoire III – The Two-Way Mirror (Forms & Events)",
    color: "#fb7185",
    topics: [
      {
        id: 1,
        slug: "event-howler",
        title: "Trial 1 – The Howler (Event Handling)",
        xp: 45,
        content: `
Attach event handlers like onClick, onChange.  
**Task:** \`SpellCaster\` with 3 buttons (Lumos, Nox, Expelliarmus) that set \`lastSpell\`.
        `,
      },
      {
        id: 2,
        slug: "controlled-inputs",
        title: "Trial 2 – The Prophecy Orb (Controlled Inputs)",
        xp: 60,
        content: `
Use state to control input value and handle onChange.  
**Task:** Build \`ProphecyWriter\` with prophecyText and savedProphecy.
        `,
      },
      {
        id: 3,
        slug: "form-submission",
        title: "Trial 3 – The Sorting Ceremony (Form Submission)",
        xp: 65,
        content: `
Use \`onSubmit\` and \`e.preventDefault()\`.  
**Task:** Create \`SortingHat\` form to sort student into house based on trait.
        `,
      },
    ],
  },

  {
    id: 4,
    title: "Grimoire IV – The Life Cycle (useEffect Hook)",
    color: "#34d399",
    topics: [
      {
        id: 1,
        slug: "useeffect-basics",
        title: "Trial 1 – The Room of Requirement (Basics)",
        xp: 55,
        content: `
Run side effects with \`useEffect(() => {}, [])\`.  
**Task:** \`MagicClock\` that increments time every second.
        `,
      },
      {
        id: 2,
        slug: "useeffect-deps",
        title: "Trial 2 – The Marauder’s Map (Dependencies)",
        xp: 50,
        content: `
Watch variables in dependency array.  
**Task:** \`FootprintTracker\` adds locations to visited list when state changes.
        `,
      },
      {
        id: 3,
        slug: "useeffect-fetch",
        title: "Trial 3 – The Prophecy Orb (Fetching Data)",
        xp: 60,
        content: `
Fetch data inside \`useEffect\`.  
**Task:** \`DailyProphet\` loads mock news after 2 seconds.
        `,
      },
    ],
  },

  {
    id: 5,
    title: "Grimoire V – The Forbidden Forest (Advanced Patterns)",
    color: "#f59e0b",
    topics: [
      {
        id: 1,
        slug: "custom-hooks",
        title: "Trial 1 – The Elder Wand (Custom Hooks)",
        xp: 70,
        content: `
Encapsulate logic in your own hooks.  
**Task:** Create \`useHousePoints\` and use it in multiple components.
        `,
      },
      {
        id: 2,
        slug: "context",
        title: "Trial 2 – The Room of Requirement (Context)",
        xp: 75,
        content: `
Share state across components without prop drilling.  
**Task:** Create \`HouseContext\` and components to switch houses.
        `,
      },
      {
        id: 3,
        slug: "useReducer-horcrux",
        title: "Trial 3 – The Horcrux (useReducer)",
        xp: 80,
        content: `
Use \`useReducer\` for complex state changes.  
**Task:** \`InventoryManager\` handles gold, items, and spells via dispatch.
        `,
      },
    ],
  },

  {
    id: 6,
    title: "Grimoire VI – The Final Challenge (Capstone Project)",
    color: "#ef4444",
    topics: [
      {
        id: 1,
        slug: "house-cup-tracker",
        title: "The House Cup Championship Tracker",
        xp: 200,
        content: `
### 🏆 Final Project
Build a complete React app tracking house points with \`useState\`, \`useEffect\`, and props.

**Requirements:**
- Display all houses with points
- Add/subtract points with reason
- Persist data in localStorage
- Highlight the winner
        `,
      },
    ],
  },
];
