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
  {
    id: 3,
    title: "Scroll III – The Room of Arrays (Collections)",
    color: "#ec4899",
    topics: [
      {
        id: 7,
        slug: "magical-collection",
        title: "Quest 1 – The Magical Collection (Arrays)",
        xp: 75,
        content: `
### 📦 The Magical Collection (Arrays)

"In the Room of Requirement, items are stored in magical Arrays," explains Professor McGonagall. "They can hold anything, and we can add or remove items at will!"

**Creating Arrays:**
\`\`\`javascript
let spellbook = ["Lumos", "Wingardium Leviosa", "Alohomora"];
let points = [10, 20, 30, 40];
let mixed = ["Harry", 11, true, null]; // Can mix types!
\`\`\`

**Array Operations:**
\`\`\`javascript
// Adding items
spellbook.push("Expecto Patronum"); // Adds to end
spellbook.unshift("Nox"); // Adds to start

// Removing items
let lastSpell = spellbook.pop(); // Removes from end
let firstSpell = spellbook.shift(); // Removes from start

// Finding items
let index = spellbook.indexOf("Lumos"); // Where is it?
let hasSpell = spellbook.includes("Nox"); // Do we have it?

// Slicing
let favorites = spellbook.slice(1, 3); // Get portion
\`\`\`

### Your Quest:
Create a magical inventory system:

1. Create array \`inventory\` with: "wand", "cauldron", "parchment"
2. Add "quill" to the end
3. Add "spellbook" to the start
4. Remove the last item
5. Check if inventory includes "wand"
        `,
        starterCode: `// Your magical inventory:
let inventory = [];

// Your code here:




// Check final inventory:
console.log(inventory);
console.log("Has wand:", hasWand);`,
        solution: `let inventory = ["wand", "cauldron", "parchment"];
inventory.push("quill");
inventory.unshift("spellbook");
inventory.pop();
let hasWand = inventory.includes("wand");

console.log(inventory);
console.log("Has wand:", hasWand);`,
      },
      {
        id: 8,
        slug: "array-transformations",
        title: "Quest 2 – Array Transformations",
        xp: 80,
        content: `
### 🔄 Array Transformations

"But what makes Arrays truly magical," continues McGonagall, "is their ability to transform!"

**Array Methods:**
\`\`\`javascript
// map: Transform each item
let spells = ["lumos", "nox", "accio"];
let uppercase = spells.map(spell => spell.toUpperCase());

// filter: Keep only what matches
let longSpells = spells.filter(spell => spell.length > 3);

// find: Get the first match
let spell = spells.find(s => s.startsWith("l"));

// forEach: Do something with each item
spells.forEach(spell => console.log(\`Cast: \${spell}!\`));
\`\`\`

### Your Quest:
You have a list of potions to process:

1. Create array \`potions\` with: ["health", "strength", "luck", "invisibility"]
2. Use \`map\` to add "potion" to each name
3. Use \`filter\` to keep only potions with more than 6 letters
4. Use \`find\` to get the first potion starting with "s"
        `,
        starterCode: `let potions = ["health", "strength", "luck", "invisibility"];

// Your transformations:
let namedPotions = 
let longPotions = 
let strengthPotion = 

// Check results:
console.log("Named:", namedPotions);
console.log("Long:", longPotions);
console.log("Found:", strengthPotion);`,
        solution: `let potions = ["health", "strength", "luck", "invisibility"];

let namedPotions = potions.map(p => p + " potion");
let longPotions = potions.filter(p => p.length > 6);
let strengthPotion = potions.find(p => p.startsWith("s"));

console.log("Named:", namedPotions);
console.log("Long:", longPotions);
console.log("Found:", strengthPotion);`,
      }
    ]
  },
  {
    id: 4,
    title: "Scroll IV – The Chamber of Objects",
    color: "#06b6d4",
    topics: [
      {
        id: 9,
        slug: "magical-objects",
        title: "Quest 1 – Magical Objects",
        xp: 85,
        content: `
### 🎭 Magical Objects

"Objects are like magical containers that can hold multiple properties," says Professor Flitwick. "Think of them as detailed descriptions of things!"

**Creating Objects:**
\`\`\`javascript
let wizard = {
  name: "Harry Potter",
  house: "Gryffindor",
  age: 11,
  isQuidditchPlayer: true,
  spells: ["Expecto Patronum", "Expelliarmus"]
};

// Accessing properties
console.log(wizard.name); // Dot notation
console.log(wizard["house"]); // Bracket notation

// Modifying properties
wizard.age = 12;
wizard.wand = "Holly and Phoenix feather"; // Add new
\`\`\`

### Your Quest:
Create a magical item catalog:

1. Create an object \`magicalItem\` with:
   - name: "Time-Turner"
   - type: "Artifact"
   - power: 10
   - isRare: true
2. Add a new property "owner" with value "Hermione"
3. Modify the power to be 15
        `,
        starterCode: `// Your magical item:




// Log the item:
console.log(magicalItem);`,
        solution: `let magicalItem = {
  name: "Time-Turner",
  type: "Artifact",
  power: 10,
  isRare: true
};

magicalItem.owner = "Hermione";
magicalItem.power = 15;

console.log(magicalItem);`,
      },
      {
        id: 10,
        slug: "object-methods",
        title: "Quest 2 – Object Methods",
        xp: 90,
        content: `
### ⚡ Object Methods

"Objects can also contain spells - we call these Methods!" Professor Flitwick squeaks excitedly.

**Methods in Objects:**
\`\`\`javascript
let spellbook = {
  title: "Standard Book of Spells",
  spells: ["Lumos", "Nox"],
  cast: function(spellName) {
    return \`Casting \${spellName}!\`;
  },
  // Shorter method syntax:
  addSpell(newSpell) {
    this.spells.push(newSpell);
  }
};

spellbook.cast("Lumos"); // "Casting Lumos!"
spellbook.addSpell("Wingardium Leviosa");
\`\`\`

### Your Quest:
Create a magical backpack:

1. Create object \`backpack\` with:
   - items: empty array
   - addItem: method to add item
   - removeItem: method to remove item
   - listItems: method to return all items
2. Add some items and test the methods
        `,
        starterCode: `// Your magical backpack:
let backpack = {
  items: [],
  // Add your methods here
};

// Test your backpack:
backpack.addItem("wand");
backpack.addItem("potion");
console.log(backpack.listItems());
backpack.removeItem("potion");
console.log(backpack.listItems());`,
        solution: `let backpack = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  },
  listItems() {
    return this.items;
  }
};

backpack.addItem("wand");
backpack.addItem("potion");
console.log(backpack.listItems());
backpack.removeItem("potion");
console.log(backpack.listItems());`,
      }
    ]
  },
  {
    id: 5,
    title: "Scroll V – The Forbidden Forest (Control Flow)",
    color: "#84cc16",
    topics: [
      {
        id: 11,
        slug: "conditional-paths",
        title: "Quest 1 – Conditional Paths",
        xp: 95,
        content: `
### 🌲 Conditional Paths (if/else)

"In the Forbidden Forest, different paths lead to different destinies," warns Hagrid. "You must choose wisely!"

**If/Else Statements:**
\`\`\`javascript
if (condition) {
  // Do this if true
} else if (anotherCondition) {
  // Do this if the first was false but this is true
} else {
  // Do this if all conditions were false
}

// Example:
let creature = "Hippogriff";
if (creature === "Hippogriff") {
  console.log("Bow first!");
} else if (creature === "Unicorn") {
  console.log("Be gentle...");
} else {
  console.log("Stay back!");
}
\`\`\`

### Your Quest:
Create a creature encounter system:

1. Create function \`encounterCreature(name, isFriendly)\`
2. If friendly AND name is "Buckbeak", return "Bow and approach"
3. If friendly, return "Approach carefully"
4. Otherwise return "Retreat slowly"
        `,
        starterCode: `// Your encounter system:
function encounterCreature(name, isFriendly) {
  // Your code here
}

// Test encounters:
console.log(encounterCreature("Buckbeak", true));
console.log(encounterCreature("Unicorn", true));
console.log(encounterCreature("Acromantula", false));`,
        solution: `function encounterCreature(name, isFriendly) {
  if (isFriendly && name === "Buckbeak") {
    return "Bow and approach";
  } else if (isFriendly) {
    return "Approach carefully";
  } else {
    return "Retreat slowly";
  }
}

console.log(encounterCreature("Buckbeak", true));
console.log(encounterCreature("Unicorn", true));
console.log(encounterCreature("Acromantula", false));`,
      },
      {
        id: 12,
        slug: "magical-loops",
        title: "Quest 2 – Magical Loops",
        xp: 100,
        content: `
### 🔄 Magical Loops

"Sometimes we need to repeat an action multiple times," says Professor McGonagall. "For this, we use loops!"

**Types of Loops:**
\`\`\`javascript
// for loop
for (let i = 0; i < 3; i++) {
  console.log(\`Attempt \${i + 1}\`);
}

// for...of loop (for arrays)
let spells = ["Lumos", "Nox"];
for (let spell of spells) {
  console.log(\`Cast: \${spell}\`);
}

// while loop
let power = 5;
while (power > 0) {
  console.log(\`Power: \${power}\`);
  power--;
}
\`\`\`

### Your Quest:
Create a spell practice system:

1. Create array \`spellbook\` with 3 spells
2. Use \`for\` loop to practice each spell 2 times
3. Use \`for...of\` to cast each spell once
4. Use \`while\` to practice until energy (start at 3) runs out
        `,
        starterCode: `let spellbook = ["Lumos", "Wingardium Leviosa", "Alohomora"];
let energy = 3;

// Your practice sessions:
console.log("For loop practice:");
// Your code here

console.log("For...of practice:");
// Your code here

console.log("While loop practice:");
// Your code here`,
        solution: `let spellbook = ["Lumos", "Wingardium Leviosa", "Alohomora"];
let energy = 3;

console.log("For loop practice:");
for (let i = 0; i < 2; i++) {
  for (let spell of spellbook) {
    console.log(\`Practice \${i + 1}: \${spell}!\`);
  }
}

console.log("For...of practice:");
for (let spell of spellbook) {
  console.log(\`Casting: \${spell}!\`);
}

console.log("While loop practice:");
while (energy > 0) {
  console.log(\`Energy: \${energy}, casting spell...\`);
  energy--;
}`,
      }
    ]
  }
];