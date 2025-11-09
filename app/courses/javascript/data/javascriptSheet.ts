<<<<<<< HEAD
// data/javascriptSheet.ts

export interface Quest {
  id: string;
  title: string;
  difficulty: 'First-Year' | 'Second-Year' | 'Third-Year' | 'O.W.L.' | 'N.E.W.T.';
  xpReward: number;
  story: string;
  learningObjectives: string[];
  theoryDocs: string;
  codingChallenge: {
    instructions: string;
    starterCode: string;
    solution: string;
    testCases: {
      input: string;
      expectedOutput: string;
    }[];
  };
  animationDescription: string;
  hints: string[];
  relatedSpells: string[];
}

export interface Scroll {
  id: string;
  scrollNumber: number;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  totalXP: number;
  estimatedTime: string;
  quests: Quest[];
}

export const javascriptSheet: Scroll[] = [
  {
    id: 'scroll-1',
    scrollNumber: 1,
    title: "The First-Year's Kit",
    subtitle: "JavaScript Basics",
    icon: "🎃",
    description: "Master the fundamental spells of JavaScript: variables, data types, and basic operations.",
    totalXP: 1000,
    estimatedTime: "2-3 hours",
    quests: [
      {
        id: 'quest-1-1',
        title: "Quest 1: The Memory Vial (Variables)",
        difficulty: 'First-Year',
        xpReward: 250,
        story: `A wizard's most basic tool is the Memory Vial. It stores a single piece of information. We have two main types:
        
• let: A vial whose contents can be changed. Perfect for things like your potion stock, which goes up and down.
• const: A "constant" vial. Its contents are sealed. Once set, they can never be changed. Use this for things that don't change, like your name.

We use the = charm to "assign" a value to the vial.`,
        learningObjectives: [
          "Understand the difference between let and const",
          "Learn variable declaration syntax",
          "Practice variable reassignment",
          "Master the assignment operator (=)"
        ],
        theoryDocs: `## Variables in JavaScript

Variables are containers for storing magical data values. In JavaScript, we have three ways to declare variables:

### let - Mutable Memory Vials
\`\`\`javascript
let potionStock = 10;
potionStock = 9; // Can be changed!
\`\`\`

### const - Immutable Memory Vials
\`\`\`javascript
const potionMaster = "Professor Snape";
// potionMaster = "Slughorn"; // ERROR! Cannot change!
\`\`\`

### Best Practices
- Use \`const\` by default
- Use \`let\` only when you need to reassign
- Never use \`var\` (old magic, causes confusion)`,
        codingChallenge: {
          instructions: `Your Quest:
1. Create a let vial named potionStock and assign it the number 10.
2. Your spell was too strong! On the next line, change potionStock to 9.
3. Create a const vial named potionMaster and assign it the string "Professor Snape".
4. Log both to the console to check your work.`,
          starterCode: `// TODO: Create a let variable called potionStock with value 10


// TODO: Change potionStock to 9


// TODO: Create a const variable called potionMaster with value "Professor Snape"


// TODO: Log both variables to console

`,
          solution: `let potionStock = 10;
potionStock = 9;

const potionMaster = "Professor Snape";

console.log(potionStock);
console.log(potionMaster);`,
          testCases: [
            {
              input: "potionStock",
              expectedOutput: "9"
            },
            {
              input: "potionMaster",
              expectedOutput: "Professor Snape"
            }
          ]
        },
        animationDescription: "A crystal vial labeled potionStock appears and fills with a blue liquid (value: 10). The liquid then visibly drains and changes color to a lighter blue (value: 9). A second, ornate vial labeled potionMaster appears, fills with a gold liquid, and a 'Constant' seal (a small const logo) is magically stamped onto its cork.",
        hints: [
          "Remember: let allows reassignment, const does not",
          "Use the = operator to assign values",
          "String values must be wrapped in quotes"
        ],
        relatedSpells: ["Data Types", "Template Literals", "Scope"]
      },
      {
        id: 'quest-1-2',
        title: "Quest 2: Potion Ingredients (Data Types)",
        difficulty: 'First-Year',
        xpReward: 250,
        story: `A vial can hold different types of magic. You can't just throw "15" and "Caution" into a cauldron and expect the same result!

• Number: 15 (For counting, calculations)
• String: "Caution!" (For text, names, instructions)
• Boolean: true or false (For choices, questions)

To check what type of magic you're holding, cast the typeof spell.`,
        learningObjectives: [
          "Understand JavaScript's primitive data types",
          "Learn the typeof operator",
          "Differentiate between numbers, strings, and booleans",
          "Practice type checking"
        ],
        theoryDocs: `## JavaScript Data Types

### Primitive Types

**Number**
\`\`\`javascript
let age = 15;
let price = 29.99;
\`\`\`

**String**
\`\`\`javascript
let warning = "Caution! This potion is bubbling!";
let name = 'Professor McGonagall';
\`\`\`

**Boolean**
\`\`\`javascript
let isComplete = true;
let hasFailed = false;
\`\`\`

### The typeof Operator
\`\`\`javascript
console.log(typeof 15);        // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
\`\`\``,
        codingChallenge: {
          instructions: `Your Quest:
1. Log the type of the number 15 to the console
2. Log the type of the string "Caution! This potion is bubbling!" to the console
3. Log the type of the boolean false to the console`,
          starterCode: `// TODO: Log the type of 15


// TODO: Log the type of "Caution! This potion is bubbling!"


// TODO: Log the type of false

`,
          solution: `console.log(typeof 15);
console.log(typeof "Caution! This potion is bubbling!");
console.log(typeof false);`,
          testCases: [
            {
              input: "typeof 15",
              expectedOutput: "number"
            },
            {
              input: "typeof 'Caution! This potion is bubbling!'",
              expectedOutput: "string"
            },
            {
              input: "typeof false",
              expectedOutput: "boolean"
            }
          ]
        },
        animationDescription: "A large cauldron is shown. As each typeof spell is logged, the ingredient flies into the pot. The number 15 splashes in, turning the potion blue with a 'number' text bubble. The string 'Caution' turns it green ('string'), and the false value turns it red ('boolean').",
        hints: [
          "typeof is an operator, not a function",
          "Strings can use single or double quotes",
          "Booleans are lowercase: true and false"
        ],
        relatedSpells: ["Type Coercion", "Type Conversion", "Variables"]
      },
      {
        id: 'quest-1-3',
        title: "Quest 3: The Gringotts Vault (Strings & Template Literals)",
        difficulty: 'First-Year',
        xpReward: 250,
        story: `Strings are powerful. You can combine them with the + charm. But this is clumsy, like trying to glue two Galleons together.

"You have " + galleons + " Galleons." (Clumsy!)

A modern wizard uses "Template Literals". We wrap our string in back-ticks (\` \`) and place our magical vials inside with \${...}. It's clean and powerful.

\`You have \${galleons} Galleons.\` (Elegant!)`,
        learningObjectives: [
          "Master string concatenation with +",
          "Learn template literal syntax",
          "Practice string interpolation with ${}",
          "Understand backticks vs quotes"
        ],
        theoryDocs: `## String Concatenation & Template Literals

### Old Way: String Concatenation
\`\`\`javascript
let name = "Harry";
let message = "Welcome, " + name + "!"; // Clumsy
\`\`\`

### Modern Way: Template Literals
\`\`\`javascript
let name = "Harry";
let message = \`Welcome, \${name}!\`; // Elegant
\`\`\`

### Benefits of Template Literals
- Cleaner syntax
- Multi-line strings
- Expression evaluation: \`\${2 + 2}\` → "4"
- No escaping quotes needed`,
        codingChallenge: {
          instructions: `Your Quest:
1. Create two const vials: wizardName (set to your name) and galleons (set to 50)
2. Create a third const vial called vaultStatement
3. Use Template Literals to set its value to: "Vault Statement for [your name]: You have [50] Galleons."
4. Log vaultStatement to the console`,
          starterCode: `// TODO: Create const wizardName with your name


// TODO: Create const galleons with value 50


// TODO: Create const vaultStatement using template literals


// TODO: Log vaultStatement

`,
          solution: `const wizardName = "Alex Wizard";
const galleons = 50;
const vaultStatement = \`Vault Statement for \${wizardName}: You have \${galleons} Galleons.\`;

console.log(vaultStatement);`,
          testCases: [
            {
              input: "vaultStatement with wizardName='Harry' and galleons=50",
              expectedOutput: "Vault Statement for Harry: You have 50 Galleons."
            }
          ]
        },
        animationDescription: "A Gringotts coin labeled galleons (50) appears. A clumsy + charm tries to push it onto a 'Vault Statement.' Then, a magical back-tick (`) swoops in, 'zaps' the coin, and it slots perfectly into a glowing template.",
        hints: [
          "Template literals use backticks: ` `",
          "Variables go inside ${} within the string",
          "No + operator needed with template literals"
        ],
        relatedSpells: ["String Methods", "Variables", "Data Types"]
      },
      {
        id: 'quest-1-4',
        title: "Quest 4: The Restricted Section (Comparison & Logic)",
        difficulty: 'First-Year',
        xpReward: 250,
        story: `To get into the Restricted Section, you must answer two riddles. This requires Logic.

We use "Comparison Operators" to ask questions:
• ===: "Is exactly equal to?" (Checks value AND type)
• !==: "Is not equal to?"
• >: "Is greater than?"
• <=: "Is less than or equal to?"

The answer is always a Boolean: true or false.

We can combine riddles with "Logical Operators":
• && (AND): Both sides must be true
• || (OR): Only one side needs to be true`,
        learningObjectives: [
          "Master comparison operators",
          "Understand === vs ==",
          "Learn logical operators (&&, ||)",
          "Practice boolean logic"
        ],
        theoryDocs: `## Comparison & Logical Operators

### Comparison Operators
\`\`\`javascript
100 === 100     // true (exact equality)
100 === "100"   // false (different types)
50 > 49         // true
10 <= 10        // true
5 !== 10        // true (not equal)
\`\`\`

### Logical Operators
\`\`\`javascript
true && true    // true (both must be true)
true && false   // false
true || false   // true (at least one true)
false || false  // false
\`\`\`

### Important: === vs ==
- \`===\` checks value AND type (strict)
- \`==\` only checks value (avoid this!)`,
        codingChallenge: {
          instructions: `Your Quest:
1. Create riddleOne: Check if 100 === "100"
2. Create riddleTwo: Check if 50 >= 49
3. Create canEnter: Use || to check if riddleOne OR riddleTwo is true
4. Log "Can I enter?" and canEnter`,
          starterCode: `// TODO: Create const riddleOne


// TODO: Create const riddleTwo


// TODO: Create const canEnter using ||


// TODO: Log the result

`,
          solution: `const riddleOne = 100 === "100";
const riddleTwo = 50 >= 49;
const canEnter = riddleOne || riddleTwo;

console.log("Can I enter?", canEnter);`,
          testCases: [
            {
              input: "riddleOne",
              expectedOutput: "false"
            },
            {
              input: "riddleTwo",
              expectedOutput: "true"
            },
            {
              input: "canEnter",
              expectedOutput: "true"
            }
          ]
        },
        animationDescription: "A large, chained barrier to the Restricted Section is shown. The riddleOne check (100 === '100') appears, and the chains flash red (false). The riddleTwo check (50 >= 49) appears, and one lock clicks open (true). Finally, canEnter (using ||) evaluates to true, and all the chains shatter and fall away.",
        hints: [
          "=== is strict equality (checks type too)",
          "|| means 'or' - only one needs to be true",
          "&& means 'and' - both must be true"
        ],
        relatedSpells: ["If/Else Statements", "Ternary Operator", "Switch Statements"]
      }
    ]
  },
  {
    id: 'scroll-2',
    scrollNumber: 2,
    title: "Charms & Incantations",
    subtitle: "Functions & Control Flow",
    icon: "🧙‍♀️",
    description: "Learn to write reusable spells (functions) and make magical decisions (conditional logic).",
    totalXP: 750,
    estimatedTime: "2 hours",
    quests: [
      {
        id: 'quest-2-1',
        title: "Quest 1: The Standard Book of Spells (Functions)",
        difficulty: 'Second-Year',
        xpReward: 250,
        story: `You don't want to re-write the entire levitation charm every time. You just want to say "Wingardium Leviosa!"

A Function is a reusable spell. You "declare" it once, then "call" it by name whenever you need it.

Some spells need ingredients (called "parameters"). A "CalculateGalleons" spell would need to know how many Sickles to convert.`,
        learningObjectives: [
          "Understand function declaration",
          "Learn function parameters",
          "Master function calling",
          "Practice return statements"
        ],
        theoryDocs: `## JavaScript Functions

### Function Declaration
\`\`\`javascript
=======
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
>>>>>>> origin/master
function castAlohomora() {
  console.log("The lock clicks open!");
}

<<<<<<< HEAD
// Call the function
castAlohomora();
\`\`\`

### Functions with Parameters
\`\`\`javascript
function calculateGalleons(numberOfSickles) {
  console.log(numberOfSickles / 17);
}

calculateGalleons(340); // Logs: 20
\`\`\`

### Functions with Return
\`\`\`javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 10); // sum is 15
\`\`\``,
        codingChallenge: {
          instructions: `Your Quest:
1. Declare a function castAlohomora that logs "The lock clicks open!"
2. Declare a function calculateGalleons with parameter numberOfSickles that logs numberOfSickles / 17
3. Call castAlohomora()
4. Call calculateGalleons(340)`,
          starterCode: `// TODO: Declare castAlohomora function


// TODO: Declare calculateGalleons function


// TODO: Call both functions

`,
          solution: `function castAlohomora() {
  console.log("The lock clicks open!");
}

function calculateGalleons(numberOfSickles) {
  console.log(numberOfSickles / 17);
}

castAlohomora();
calculateGalleons(340);`,
          testCases: [
            {
              input: "castAlohomora()",
              expectedOutput: "The lock clicks open!"
            },
            {
              input: "calculateGalleons(340)",
              expectedOutput: "20"
            }
          ]
        },
        animationDescription: "A 'Standard Book of Spells' opens. Your castAlohomora function is magically written onto a page. When you 'call' it, a wand taps the page, and a locked door on-screen bursts open. For calculateGalleons, 340 Sickles fly into the function and a bag of 20 Galleons flies out.",
        hints: [
          "Function syntax: function name() { }",
          "Parameters go inside the parentheses",
          "Call functions by writing their name followed by ()"
        ],
        relatedSpells: ["Arrow Functions", "Return Values", "Function Scope"]
      },
      {
        id: 'quest-2-2',
        title: "Quest 2: The Sorting Hat's Logic (If/Else If/Else)",
        difficulty: 'Second-Year',
        xpReward: 250,
        story: `The Sorting Hat doesn't just spout random houses. It uses logic. This is the if / else if / else charm.

• if: Checks the first condition. "If the student is brave..."
• else if: If the first was false, check this one. "...else if the student is wise..."
• else: If nothing matched, do this. "...else, they must be ambitious!"

The spell stops as soon as it finds a true match.`,
        learningObjectives: [
          "Master if statements",
          "Learn else if chains",
          "Understand else fallback",
          "Practice conditional logic flow"
        ],
        theoryDocs: `## Conditional Statements

### If Statement
\`\`\`javascript
if (age >= 18) {
  console.log("You may enter!");
}
\`\`\`

### If/Else
\`\`\`javascript
if (hasWand) {
  console.log("Welcome, wizard!");
} else {
  console.log("Muggles not allowed!");
}
\`\`\`

### If/Else If/Else Chain
\`\`\`javascript
if (score >= 90) {
  console.log("Outstanding!");
} else if (score >= 70) {
  console.log("Exceeds Expectations");
} else {
  console.log("Acceptable");
}
\`\`\``,
        codingChallenge: {
          instructions: `Your Quest:
1. Create a variable studentTrait = "wise"
2. Write an if/else if/else statement:
   - If studentTrait === "brave", log "GRYFFINDOR!"
   - Else if studentTrait === "wise", log "RAVENCLAW!"
   - Else if studentTrait === "loyal", log "HUFFLEPUFF!"
   - Else, log "SLYTHERIN!"`,
          starterCode: `// TODO: Create studentTrait variable


// TODO: Write the Sorting Hat logic

`,
          solution: `const studentTrait = "wise";

if (studentTrait === "brave") {
  console.log("GRYFFINDOR!");
} else if (studentTrait === "wise") {
  console.log("RAVENCLAW!");
} else if (studentTrait === "loyal") {
  console.log("HUFFLEPUFF!");
} else {
  console.log("SLYTHERIN!");
}`,
          testCases: [
            {
              input: "studentTrait = 'brave'",
              expectedOutput: "GRYFFINDOR!"
            },
            {
              input: "studentTrait = 'wise'",
              expectedOutput: "RAVENCLAW!"
            },
            {
              input: "studentTrait = 'anything else'",
              expectedOutput: "SLYTHERIN!"
            }
          ]
        },
        animationDescription: "A cartoon Sorting Hat is shown. The studentTrait variable (e.g., 'wise') floats up and is 'placed' on the hat's brim. The hat animates, thinks for a moment, and then shouts 'RAVENCLAW!' in a large text bubble as the correct else if block is highlighted.",
        hints: [
          "Use === for comparison",
          "Only one block will execute",
          "else catches everything else"
        ],
        relatedSpells: ["Switch Statements", "Ternary Operator", "Logical Operators"]
      },
      {
        id: 'quest-2-3',
        title: "Quest 3: The Quick-Quill (Arrow Functions)",
        difficulty: 'Second-Year',
        xpReward: 250,
        story: `Writing function ... is fine, but N.E.W.T.-level wizards value speed. An Arrow Function is a modern, faster way to write a spell. It's like having a Quick-Quill.

Old Spell: function calculateGalleons(numberOfSickles) { return numberOfSickles / 17; }

Quick-Quill Spell: const calculateGalleons = (numberOfSickles) => { return numberOfSickles / 17; }

(Notice the function keyword is gone, and an => is added!)`,
        learningObjectives: [
          "Master arrow function syntax",
          "Understand => operator",
          "Learn implicit returns",
          "Practice modern ES6 function style"
        ],
        theoryDocs: `## Arrow Functions (ES6)

### Basic Syntax
\`\`\`javascript
// Old way
function greet(name) {
  return "Hello, " + name;
}

// Arrow function
const greet = (name) => {
  return "Hello, " + name;
};
\`\`\`

### Implicit Return (one-liner)
\`\`\`javascript
const add = (a, b) => a + b;
\`\`\`

### No Parameters
\`\`\`javascript
const sayHello = () => console.log("Hello!");
\`\`\``,
        codingChallenge: {
          instructions: `Your Quest:
1. Re-write calculateGalleons as an arrow function
2. It should take numberOfSickles as a parameter
3. Return numberOfSickles / 17
4. Call it with calculateGalleons(51)`,
          starterCode: `// TODO: Write calculateGalleons as arrow function


// TODO: Call the function

`,
          solution: `const calculateGalleons = (numberOfSickles) => {
  return numberOfSickles / 17;
};

console.log(calculateGalleons(51));`,
          testCases: [
            {
              input: "calculateGalleons(51)",
              expectedOutput: "3"
            },
            {
              input: "calculateGalleons(170)",
              expectedOutput: "10"
            }
          ]
        },
        animationDescription: "A comparison animation plays. On the left, a 'Standard' quill slowly writes out the function keyword. On the right, a zippy 'Quick-Quill' (shaped like an => arrow) flashes across the screen, writing the entire calculateGalleons arrow function in a single, clean line.",
        hints: [
          "Arrow functions use => syntax",
          "const name = (params) => { body }",
          "Can use implicit return for one-liners"
        ],
        relatedSpells: ["Regular Functions", "this Keyword", "Callbacks"]
      }
    ]
  }
];

// Export helper functions
export const getScrollById = (scrollId: string): Scroll | undefined => {
  return javascriptSheet.find(scroll => scroll.id === scrollId);
};

export const getQuestById = (questId: string): Quest | undefined => {
  for (const scroll of javascriptSheet) {
    const quest = scroll.quests.find(q => q.id === questId);
    if (quest) return quest;
  }
  return undefined;
};

export const getTotalXP = (): number => {
  return javascriptSheet.reduce((total, scroll) => total + scroll.totalXP, 0);
};

export const getQuestCount = (): number => {
  return javascriptSheet.reduce((total, scroll) => total + scroll.quests.length, 0);
};
=======
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
>>>>>>> origin/master
