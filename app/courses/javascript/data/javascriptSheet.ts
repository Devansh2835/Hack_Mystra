export const javascriptSheet = [
  {
    id: 1,
    title: "Scroll I – The First-Year's Kit (JS Basics)",
    color: "#f59e0b",
    topics: [
      {
        id: 1,
        slug: "memory-vial",
        title: "Quest 1 – The Memory Vial (Variables)",
        xp: 50,
        content: `
### 🧪 The Memory Vial

"Just like Professor Dumbledore stores his memories in a Pensieve, we need 'vials' to store our pieces of SpellScript," says Professor Flitwick. "We call these **Variables**."

**We have three types of vials:**

1. **let**: The standard, modern Memory Vial. You can change what's inside it.
\`\`\`javascript
let studentName = "Harry Potter";
studentName = "Hermione Granger"; // This is allowed!
\`\`\`

2. **const**: A Sealed Vial. The value is "constant" and cannot be changed.
\`\`\`javascript
const schoolName = "Hogwarts";
\`\`\`

3. **var**: An "Old, Leaky Vial." This is ancient magic with unexpected side effects. Modern wizards avoid it.

### Your Quest:
Professor Snape needs you to organize his potions cabinet labels.

1. Declare a \`let\` variable called \`potionStock\` and assign it the number 10
2. Snape uses one potion. Re-assign \`potionStock\` to be 9
3. Declare a \`const\` variable called \`potionMaster\` and assign it "Severus Snape"
4. Use \`console.log()\` to show both variables
        `,
        starterCode: `// This is a spell-comment. The Script ignores it!
console.log("Organizing potions...");

// Your code goes here:


// Log them to the monitor:
console.log(potionStock);
console.log(potionMaster);`,
        solution: `let potionStock = 10;
potionStock = 9;
const potionMaster = "Severus Snape";
console.log(potionStock);
console.log(potionMaster);`,
      },
      {
        id: 2,
        slug: "potion-ingredients",
        title: "Quest 2 – Potion Ingredients (Data Types)",
        xp: 45,
        content: `
### 🧬 Potion Ingredients (Data Types)

"Every piece of data has a type. Using the wrong one can turn your potion into a... well, a toad," Flitwick chirps.

**Common Data Types:**
1. **String**: Text, always in quotes (\`"Wingardium Leviosa"\`)
2. **Number**: Any number (\`10\`, \`3.14159\`, \`-50\`)
3. **Boolean**: A "Truth Charm" - only \`true\` or \`false\`
4. **Undefined**: An empty vial you forgot to fill
5. **Null**: A vial you intentionally emptied

**Check types with the \`typeof\` spell:**
\`\`\`javascript
console.log(typeof 15); // "number"
console.log(typeof "Caution"); // "string"
\`\`\`

### Your Quest:
You're brewing a Swelling Solution. Verify each ingredient's type.

1. Create \`spleenType\` with the type of value \`15\`
2. Create \`labelType\` with the type of value \`"Caution"\`
3. Create \`statusType\` with the type of value \`false\`
4. Log all three type variables
        `,
        starterCode: `let spleenValue = 15;
let labelValue = "Caution";
let statusValue = false;

// Your code goes here:

// Show the results:
console.log("Spleen type is: " + spleenType);
console.log("Label type is: " + labelType);
console.log("Status type is: " + statusType);`,
        solution: `let spleenType = typeof 15;
let labelType = typeof "Caution";
let statusType = typeof false;
console.log(spleenType);
console.log(labelType);
console.log(statusType);`,
      },
      {
        id: 3,
        slug: "gringotts-vault",
        title: "Quest 3 – The Gringotts Vault (Template Literals)",
        xp: 55,
        content: `
### 🏦 The Gringotts Vault (Strings & Template Literals)

"Often, we need to combine strings. The old way was with the + charm," says Flitwick.

**Old Magic:**
\`\`\`javascript
let firstName = "Ron";
let lastName = "Weasley";
let fullName = firstName + " " + lastName; // "Ron Weasley"
\`\`\`

**Modern Magic - Template Literals:**
Use back-ticks (\`) and \`\${...}\` to insert variables:
\`\`\`javascript
let fullName = \`\${firstName} \${lastName}\`; // "Ron Weasley"
let message = \`Hello, \${studentName}! You have \${potionStock} potions left.\`;
\`\`\`

### Your Quest:
A Gringotts goblin needs help formatting a vault statement.

1. Create \`wizardName\` with your name
2. Create \`galleons\` set to 50
3. Create \`sickles\` set to 25
4. Create \`vaultStatement\` using template literals: "Vault Statement for [Name]: You have 50 Galleons and 25 Sickles."
5. Log the statement
        `,
        starterCode: `// Your code:




console.log(vaultStatement);`,
        solution: `const wizardName = "Harry Potter";
let galleons = 50;
let sickles = 25;
let vaultStatement = \`Vault Statement for \${wizardName}: You have \${galleons} Galleons and \${sickles} Sickles.\`;
console.log(vaultStatement);`,
      },
      {
        id: 4,
        slug: "restricted-section",
        title: "Quest 4 – The Restricted Section (Comparison & Logic)",
        xp: 60,
        content: `
### 🚫 The Restricted Section (Comparison & Logic)

"To enter the Restricted Section, you must meet certain conditions," Flitwick whispers. "SpellScript uses **Operators** to ask questions."

**Comparison Operators:**
- \`>\` Greater than: \`10 > 5\` is \`true\`
- \`<\` Less than: \`10 < 5\` is \`false\`
- \`>=\` Greater than or equal to
- \`<=\` Less than or equal to

**The Most Important Charm: === vs ==**
- \`==\` (Loose): Unreliable! \`7 == "7"\` is \`true\` (bad!)
- \`===\` (Strict): Precise! \`7 === "7"\` is \`false\` (good!)
- \`!==\` Strictly not equal

**Logical Operators:**
- \`&&\` (AND): Both must be true
- \`||\` (OR): At least one must be true  
- \`!\` (NOT): Flips the value

### Your Quest:
Answer the magical barrier's riddles to enter the Restricted Section.

1. \`riddleOne\`: Is 100 strictly equal to "100"?
2. \`riddleTwo\`: Is 50 greater than or equal to 49?
3. \`riddleThree\`: Is 10 not strictly equal to 10?
4. \`canEnter\`: Barrier opens if riddleTwo is true AND riddleThree is false
        `,
        starterCode: `// Your code:

console.log("Riddle One: " + riddleOne);
console.log("Riddle Two: " + riddleTwo);
console.log("Riddle Three: " + riddleThree);
console.log("Can I enter? " + canEnter);`,
        solution: `let riddleOne = 100 === "100";
let riddleTwo = 50 >= 49;
let riddleThree = 10 !== 10;
let canEnter = riddleTwo && !riddleThree;
console.log(canEnter);`,
      },
    ],
  },

  {
    id: 2,
    title: "Scroll II – Charms & Incantations (Functions & Logic)",
    color: "#8b5cf6",
    topics: [
      {
        id: 5,
        slug: "standard-book-spells",
        title: "Quest 1 – The Standard Book of Spells (Functions)",
        xp: 65,
        content: `
### 📚 The Standard Book of Spells (Functions)

"You can't be expected to re-write a complex spell every time! We write them down in our Spellbook as **Functions**."

A Function is a named, reusable block of code. You "declare" the spell once, then "call" it whenever you want.

**Basic Function:**
\`\`\`javascript
// 1. Declare the spell
function castLumos() {
  console.log("A bright light appears at your wand tip!");
}

// 2. Call the spell
castLumos(); // "A bright light appears..."
\`\`\`

**Functions with Parameters:**
\`\`\`javascript
function greetWizard(name) {
  console.log(\`Well met, \${name}!\`);
}

greetWizard("Luna"); // "Well met, Luna!"
\`\`\`

**The Return Charm:**
\`\`\`javascript
function addPoints(pointsScored) {
  let housePoints = 150;
  let newTotal = housePoints + pointsScored;
  return newTotal; // This sends the value OUT
}

let gryffindorPoints = addPoints(10); // 160
\`\`\`

### Your Quest:
1. Declare \`castAlohomora\` that logs "The lock clicks open!"
2. Call your \`castAlohomora\` function
3. Create \`calculateGalleons(sickles)\` that returns sickles divided by 17
4. Call it with 340 and log the result
        `,
        starterCode: `// Your first function:
function castAlohomora() {
  console.log("The lock clicks open!");
}

castAlohomora();

// Your second function:
function calculateGalleons(sickles) {
  let totalGalleons = sickles / 17;
  return totalGalleons;
}

let myGalleons = calculateGalleons(340);
console.log(\`I have \${myGalleons} galleons.\`); // Should be 20`,
        solution: `function castAlohomora() {
  console.log("The lock clicks open!");
}
castAlohomora();
function calculateGalleons(sickles) {
  return sickles / 17;
}
let myGalleons = calculateGalleons(340);
console.log(myGalleons);`,
      },
    ],
  },
];