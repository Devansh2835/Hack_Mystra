export const cssSheet = [
  {
    id: 1,
    title: "Chapter I: The Basic Incantations (CSS Foundations)",
    color: "from-blue-600 to-cyan-600",
    topics: [
      {
        id: 1,
        title: "Challenge 1 – Linking Your Stylesheet",
        xp: 50,
        slug: "linking-stylesheet",
        done: false,
        content: `
### ✨ The Ancient Scroll

Before you can style your HTML, link your magical spellbook:

\`\`\`html
<link rel="stylesheet" href="style.css">
\`\`\`

**Your Challenge**
1. Create \`style.css\`
2. Link it in your HTML head
3. Add:
\`\`\`css
body {
  background-color: lavender;
}
\`\`\`
🌈 Your parchment glows lavender when successful!
        `
      },
      {
        id: 2,
        title: "Challenge 2 – Selectors and Declarations",
        xp: 70,
        slug: "selectors-declarations",
        done: false,
        content: `
### 🧙 CSS Spell Structure

\`\`\`css
selector {
  property: value;
}
\`\`\`

Examples:
\`\`\`css
h1 { color: gold; }
p { font-size: 18px; }
\`\`\`

**Your Challenge**
1. Style all \`<h1>\` gold
2. Style \`<p>\` white, font-size 18px
3. Body background: midnightblue
        `
      },
    ],
  },
  {
    id: 2,
    title: "Chapter II: Classes, IDs, and Specificity",
    color: "from-purple-600 to-pink-500",
    topics: [
      {
        id: 3,
        title: "Challenge 1 – Identifying Elements",
        xp: 80,
        slug: "classes-ids",
        done: false,
        content: `
### 🧩 Classes & IDs

\`\`\`css
.gryffindor { color: crimson; }
.slytherin { color: green; }
#school-title { color: gold; font-size: 2em; }
\`\`\`

**Your Challenge**
- Give each house paragraph a class
- Style houses with their colors
- Give the Hogwarts title an ID #school-title
        `
      },
    ],
  },
];
