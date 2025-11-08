export const htmlSheet = [
  {
    id: 1,
    title: "🏰 Scroll I: HTML Foundations",
    color: "from-orange-500 to-yellow-400",
    topics: [
      {
        id: 1,
        name: "Quest 1: The Scroll of Structure",
        xp: 50,
        completed: false,
        description: `
Learn about the basic HTML document structure — the <html>, <head>, and <body> elements. 
Discover how the DOM begins with structure.
`,
        code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Spell</title>
  </head>
  <body>
    <h1>Welcome to Hogwarts School of Webcraft!</h1>
  </body>
</html>`
      },
      {
        id: 2,
        name: "Quest 2: The Hall of Headings & Paragraphs",
        xp: 60,
        completed: false,
        description: `
Master headings (h1–h6) and paragraphs (<p>) to organize your magical content.`,
        code: `<h1>Welcome, Wizards!</h1>
<h2>Professor McGonagall's Class</h2>
<p>This is your first lesson in structured markup magic.</p>`
      },
      {
        id: 3,
        name: "Quest 3: The Portrait Gallery (Images & Links)",
        xp: 70,
        completed: false,
        description: `
Learn to embed images (<img>) and links (<a>) — connecting the magical web.`,
        code: `<img src="hogwarts.jpg" alt="Hogwarts Castle">
<a href="https://hogwarts.edu">Visit Hogwarts</a>`
      }
    ]
  },
  {
    id: 2,
    title: "📜 Scroll II: HTML Elements & Forms",
    color: "from-yellow-400 to-amber-500",
    topics: [
      {
        id: 1,
        name: "Quest 1: The House of Lists",
        xp: 80,
        completed: false,
        description: `
Learn ordered (<ol>) and unordered (<ul>) lists — perfect for potions ingredients.`,
        code: `<ul>
  <li>Eye of Newt</li>
  <li>Toe of Frog</li>
</ul>`
      },
      {
        id: 2,
        name: "Quest 2: The Chamber of Forms",
        xp: 100,
        completed: false,
        description: `
Master forms (<form>, <input>, <button>) to collect magical data.`,
        code: `<form>
  <label for="name">Your Wizard Name:</label>
  <input id="name" type="text" placeholder="Harry Potter">
  <button>Submit</button>
</form>`
      }
    ]
  }
];
