export const htmlSheet = [
  {
    id: 1,
    title: "Chapter I – The Foundational Runes (Basic HTML Structure)",
    color: "#f59e0b",
    topics: [
      {
        id: 1,
        slug: "sacred-document",
        title: "Challenge 1 – The Sacred Document Structure",
        xp: 50,
        content: `
### 🏰 The Sacred Document Structure

"Every HTML document follows a sacred pattern," Professor Flitwick explains. "This structure tells the browser how to interpret your magical runes."

**The Basic Structure:**
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Spell</title>
</head>
<body>
    <!-- Your magical content goes here -->
</body>
</html>
\`\`\`

**Breaking Down the Incantation:**
- \`<!DOCTYPE html>\`: Declares "This is HTML5 magic!"
- \`<html>\`: The root container—everything lives inside this
- \`<head>\`: The invisible section—holds metadata, title, and links
- \`<meta charset="UTF-8">\`: Allows magical characters from all languages
- \`<title>\`: What appears in the browser tab
- \`<body>\`: The visible section—everything users see goes here

### Your Challenge:
1. Create the complete sacred structure
2. Set the title to "Hogwarts Welcome Page"
3. Inside the body, add a comment: \`<!-- Welcome to my magical page -->\`
        `,
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hogwarts Welcome Page</title>
</head>
<body>
    <!-- Welcome to my magical page -->
</body>
</html>`,
      },
      {
        id: 2,
        slug: "hierarchy-importance",
        title: "Challenge 2 – Headings - The Hierarchy of Importance",
        xp: 45,
        content: `
### 📜 The Hierarchy of Importance

"Headings are like chapter titles in a spellbook," says Professor McGonagall. "They organize your content from most important (h1) to least important (h6)."

**The Six Levels:**
\`\`\`html
<h1>Main Title - Most Important</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Minor Heading</h4>
<h5>Smaller Heading</h5>
<h6>Smallest Heading</h6>
\`\`\`

**Best Practices:**
- Use only ONE \`<h1>\` per page (the main title)
- Don't skip levels (don't jump from \`<h1>\` to \`<h4>\`)
- Headings should describe content, not just be for styling

### Your Challenge:
1. Create an \`<h1>\` with "Hogwarts Houses"
2. Create four \`<h2>\` tags for: Gryffindor, Slytherin, Ravenclaw, Hufflepuff
3. Under each house name, add an \`<h3>\` with "House Traits"
        `,
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hogwarts Houses</title>
</head>
<body>
    <!-- Add your headings here -->
    
</body>
</html>`,
        solution: `<h1>Hogwarts Houses</h1>
<h2>Gryffindor</h2>
<h3>House Traits</h3>
<h2>Slytherin</h2>
<h3>House Traits</h3>
<h2>Ravenclaw</h2>
<h3>House Traits</h3>
<h2>Hufflepuff</h2>
<h3>House Traits</h3>`,
      },
      {
        id: 3,
        slug: "paragraphs-breaks",
        title: "Challenge 3 – Paragraphs and Line Breaks",
        xp: 55,
        content: `
### 📝 Paragraphs and Line Breaks

"Text content goes in paragraph tags," Professor Flitwick chirps. "Each paragraph creates a block of text with spacing above and below."

**Examples:**
\`\`\`html
<p>This is a paragraph. It will have spacing around it.</p>
<p>This is another paragraph.</p>

<p>Line one<br>Line two<br>Line three</p>
\`\`\`

**Key Points:**
- \`<p>\` creates paragraphs with automatic spacing
- \`<br>\` creates line breaks without paragraph spacing
- \`<br>\` is self-closing (no closing tag needed)

### Your Challenge:
1. Under each house h2, add a \`<p>\` with descriptions:
   - Gryffindor: "Where dwell the brave at heart."
   - Slytherin: "Where cunning folk use any means."
   - Ravenclaw: "Where wit and learning reside."
   - Hufflepuff: "Where loyalty and hard work matter most."
2. Create a new \`<p>\` with: "Hogwarts School<br>Est. 990 AD<br>Scotland"
        `,
        starterCode: `<h1>Hogwarts Houses</h1>

<h2>Gryffindor</h2>
<!-- Add paragraph here -->

<h2>Slytherin</h2>
<!-- Add paragraph here -->

<h2>Ravenclaw</h2>
<!-- Add paragraph here -->

<h2>Hufflepuff</h2>
<!-- Add paragraph here -->

<!-- Add school info paragraph with line breaks -->`,
        solution: `<h2>Gryffindor</h2>
<p>Where dwell the brave at heart.</p>
<h2>Slytherin</h2>
<p>Where cunning folk use any means.</p>
<h2>Ravenclaw</h2>
<p>Where wit and learning reside.</p>
<h2>Hufflepuff</h2>
<p>Where loyalty and hard work matter most.</p>
<p>Hogwarts School<br>Est. 990 AD<br>Scotland</p>`,
      },
    ],
  },

  {
    id: 2,
    title: "Chapter II – The Art of Linking (Links and Navigation)",
    color: "#8b5cf6",
    topics: [
      {
        id: 4,
        slug: "anchor-portals",
        title: "Challenge 1 – The Anchor Tag - Creating Portals",
        xp: 60,
        content: `
### 🌀 Creating Magical Portals

"The anchor tag creates links—magical portals that transport users," says Professor Dumbledore with a twinkle in his eye.

**Syntax:**
\`\`\`html
<a href="https://example.com">Click here</a>
<a href="about.html">About Page</a>
<a href="#contact">Jump to Contact Section</a>
\`\`\`

**Types of Links:**
- **External**: Full URL to another website
- **Internal**: Link to another page in your site
- **Anchor**: Jump to a section on the same page

**Important Attributes:**
- \`target="_blank"\`: Opens link in a new tab
- \`title="Description"\`: Shows tooltip on hover

### Your Challenge:
1. Create an \`<h2>\` with "Useful Links"
2. Create a link to "https://harrypotter.com" (use target="_blank")
3. Create a link to an imaginary "about.html" page
4. Create a link that jumps to your Gryffindor section (add id="gryffindor" to that section)
        `,
        starterCode: `<h2>Useful Links</h2>
<!-- Add your three links here -->

<h2 id="gryffindor">Gryffindor</h2>
<p>Where dwell the brave at heart.</p>`,
        solution: `<h2>Useful Links</h2>
<a href="https://harrypotter.com" target="_blank">Harry Potter Official Site</a>
<a href="about.html">About Page</a>
<a href="#gryffindor">Jump to Gryffindor</a>`,
      },
      {
        id: 5,
        slug: "image-spell",
        title: "Challenge 2 – The Image Spell - Displaying Pictures",
        xp: 50,
        content: `
### 🖼️ The Image Spell

"The img tag displays images," Professor Flitwick explains. "It's self-closing and requires the src attribute."

**Syntax:**
\`\`\`html
<img src="path/to/image.jpg" alt="Description of image">
\`\`\`

**Important Attributes:**
- \`src\`: Path to the image file (required)
- \`alt\`: Alternative text for accessibility (required)
- \`width\` and \`height\`: Control image size
- \`title\`: Shows tooltip on hover

**Best Practices:**
- Always include alt text for accessibility
- Use descriptive alt text
- Optimize image file sizes

### Your Challenge:
1. Add an \`<img>\` tag under your Gryffindor section with:
   - src="gryffindor-crest.jpg"
   - alt="Gryffindor House Crest"
   - width="200"
2. Repeat for the other three houses with appropriate names
        `,
        starterCode: `<h2>Gryffindor</h2>
<p>Where dwell the brave at heart.</p>
<!-- Add Gryffindor image here -->

<h2>Slytherin</h2>
<p>Where cunning folk use any means.</p>
<!-- Add Slytherin image here -->

<h2>Ravenclaw</h2>
<p>Where wit and learning reside.</p>
<!-- Add Ravenclaw image here -->

<h2>Hufflepuff</h2>
<p>Where loyalty and hard work matter most.</p>
<!-- Add Hufflepuff image here -->`,
        solution: `<img src="gryffindor-crest.jpg" alt="Gryffindor House Crest" width="200">
<img src="slytherin-crest.jpg" alt="Slytherin House Crest" width="200">
<img src="ravenclaw-crest.jpg" alt="Ravenclaw House Crest" width="200">
<img src="hufflepuff-crest.jpg" alt="Hufflepuff House Crest" width="200">`,
      },
    ],
  },

  {
    id: 3,
    title: "Chapter III – Lists and Organization (Structured Content)",
    color: "#ec4899",
    topics: [
      {
        id: 6,
        slug: "unordered-lists",
        title: "Challenge 1 – The Unordered List - Bullet Points",
        xp: 45,
        content: `
### 📋 Bullet Point Magic

"Unordered lists create bullet-pointed lists," says Hermione. "Each item is wrapped in list item tags."

**Syntax:**
\`\`\`html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
\`\`\`

**Key Points:**
- \`<ul>\` creates the unordered list container
- \`<li>\` wraps each list item
- Browsers automatically add bullet points

### Your Challenge:
1. Create an \`<h2>\` with "Required School Supplies"
2. Create a \`<ul>\` with these items:
   - Wand
   - Cauldron
   - Spellbooks
   - Robes
   - Pet (optional)
        `,
        starterCode: `<h2>Required School Supplies</h2>
<!-- Create your unordered list here -->`,
        solution: `<h2>Required School Supplies</h2>
<ul>
    <li>Wand</li>
    <li>Cauldron</li>
    <li>Spellbooks</li>
    <li>Robes</li>
    <li>Pet (optional)</li>
</ul>`,
      },
      {
        id: 7,
        slug: "ordered-lists",
        title: "Challenge 2 – The Ordered List - Numbered Steps",
        xp: 50,
        content: `
### 🔢 Numbered Sequences

"Ordered lists create numbered lists," Professor McGonagall states. "Perfect for instructions or sequential information."

**Syntax:**
\`\`\`html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
\`\`\`

**Special Attributes:**
- \`type="A"\`: Use uppercase letters (A, B, C...)
- \`type="a"\`: Use lowercase letters (a, b, c...)
- \`type="I"\`: Use uppercase Roman numerals (I, II, III...)
- \`start="5"\`: Start numbering from 5

### Your Challenge:
1. Create an \`<h2>\` with "Steps to Cast Lumos"
2. Create an \`<ol>\` with these steps:
   - Hold your wand steady
   - Focus on your intent
   - Say "Lumos" clearly
   - Watch your wand light up
        `,
        starterCode: `<h2>Steps to Cast Lumos</h2>
<!-- Create your ordered list here -->`,
        solution: `<h2>Steps to Cast Lumos</h2>
<ol>
    <li>Hold your wand steady</li>
    <li>Focus on your intent</li>
    <li>Say "Lumos" clearly</li>
    <li>Watch your wand light up</li>
</ol>`,
      },
      {
        id: 8,
        slug: "nested-lists",
        title: "Challenge 3 – Nested Lists - Lists Within Lists",
        xp: 65,
        content: `
### 🌳 Hierarchical Magic

"Lists can contain other lists!" Professor Flitwick exclaims. "This creates tree-like structures."

**Syntax:**
\`\`\`html
<ul>
    <li>Main item
        <ul>
            <li>Sub-item 1</li>
            <li>Sub-item 2</li>
        </ul>
    </li>
    <li>Another main item</li>
</ul>
\`\`\`

### Your Challenge:
Create a nested list for "Hogwarts Classes by Year":
- First Year
  - Potions
  - Charms  
  - Transfiguration
- Second Year
  - Defense Against Dark Arts
  - Herbology
        `,
        starterCode: `<h2>Hogwarts Classes by Year</h2>
<!-- Create your nested list here -->`,
        solution: `<h2>Hogwarts Classes by Year</h2>
<ul>
    <li>First Year
        <ul>
            <li>Potions</li>
            <li>Charms</li>
            <li>Transfiguration</li>
        </ul>
    </li>
    <li>Second Year
        <ul>
            <li>Defense Against Dark Arts</li>
            <li>Herbology</li>
        </ul>
    </li>
</ul>`,
      },
    ],
  },

  {
    id: 4,
    title: "Chapter IV – Tables - The Sorting Grid",
    color: "#10b981",
    topics: [
      {
        id: 9,
        slug: "basic-table",
        title: "Challenge 1 – Basic Table Structure",
        xp: 70,
        content: `
### 📊 The Sorting Grid

"Tables display structured data," Professor McGonagall explains. "Like the House Points board in the Great Hall."

**Table Elements:**
- \`<table>\`: The container
- \`<tr>\`: Table row
- \`<th>\`: Table header cell (bold and centered)
- \`<td>\`: Table data cell

**Basic Syntax:**
\`\`\`html
<table>
    <tr>
        <th>Name</th>
        <th>House</th>
    </tr>
    <tr>
        <td>Harry</td>
        <td>Gryffindor</td>
    </tr>
</table>
\`\`\`

### Your Challenge:
Create a table showing house points:
- Headers: House, Points, Standing
- Gryffindor, 450, 1st
- Ravenclaw, 426, 2nd  
- Hufflepuff, 352, 3rd
- Slytherin, 472, 1st
        `,
        starterCode: `<h2>House Points</h2>
<!-- Create your table here -->`,
        solution: `<h2>House Points</h2>
<table>
    <tr>
        <th>House</th>
        <th>Points</th>
        <th>Standing</th>
    </tr>
    <tr>
        <td>Gryffindor</td>
        <td>450</td>
        <td>1st</td>
    </tr>
    <tr>
        <td>Ravenclaw</td>
        <td>426</td>
        <td>2nd</td>
    </tr>
    <tr>
        <td>Hufflepuff</td>
        <td>352</td>
        <td>3rd</td>
    </tr>
    <tr>
        <td>Slytherin</td>
        <td>472</td>
        <td>1st</td>
    </tr>
</table>`,
      },
    ],
  },

  {
    id: 5,
    title: "Chapter V – Forms - The Interactive Scrolls",
    color: "#f97316",
    topics: [
      {
        id: 10,
        slug: "basic-form",
        title: "Challenge 1 – The Basic Form Structure",
        xp: 60,
        content: `
### 📜 Interactive Scrolls

"Forms collect user input," says Professor Flitwick. "Like application scrolls for Hogwarts admission!"

**Basic Structure:**
\`\`\`html
<form action="/submit" method="POST">
    <!-- Form elements go here -->
    <button type="submit">Submit</button>
</form>
\`\`\`

**Key Attributes:**
- \`action\`: Where to send form data
- \`method\`: How to send it (GET or POST)

### Your Challenge:
1. Create a form with action="#" and method="POST"
2. Add an \`<h2>\`: "Hogwarts Application Form"
        `,
        starterCode: `<!-- Create your form here -->`,
        solution: `<form action="#" method="POST">
    <h2>Hogwarts Application Form</h2>
</form>`,
      },
      {
        id: 11,
        slug: "text-inputs",
        title: "Challenge 2 – Text Inputs - Gathering Information",
        xp: 75,
        content: `
### ✍️ Gathering Magical Information

"Input tags create form fields," Hermione explains. "Always pair them with labels for accessibility!"

**Common Input Types:**
\`\`\`html
<label for="name">Name:</label>
<input type="text" id="name" name="name">

<label for="email">Email:</label>
<input type="email" id="email" name="email">

<label for="age">Age:</label>
<input type="number" id="age" name="age">
\`\`\`

**Important Attributes:**
- \`type\`: The kind of input (text, email, password, number, date)
- \`id\`: Unique identifier (connects to label)
- \`name\`: The key when data is submitted
- \`required\`: Makes the field mandatory

### Your Challenge:
Inside your form, add:
1. Label and text input for "Full Name" (required)
2. Label and email input for "Email Address" (required)  
3. Label and number input for "Age" (min="11")
4. Label and date input for "Birth Date"
        `,
        starterCode: `<form action="#" method="POST">
    <h2>Hogwarts Application Form</h2>
    
    <!-- Add your inputs here -->
    
</form>`,
        solution: `<label for="fullname">Full Name:</label>
<input type="text" id="fullname" name="fullname" required>

<label for="email">Email Address:</label>
<input type="email" id="email" name="email" required>

<label for="age">Age:</label>
<input type="number" id="age" name="age" min="11">

<label for="birthdate">Birth Date:</label>
<input type="date" id="birthdate" name="birthdate">`,
      },
    ],
  },

  {
    id: 6,
    title: "Chapter VI – Semantic HTML - The Meaningful Structure",
    color: "#6366f1",
    topics: [
      {
        id: 12,
        slug: "semantic-layout",
        title: "Challenge 1 – Semantic Layout Tags",
        xp: 80,
        content: `
### 🏗️ Meaningful Structure

"Modern HTML5 provides semantic tags that give meaning to your structure," Professor McGonagall teaches.

**Semantic Tags:**
\`\`\`html
<header>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>

<main>
    <article>
        <h2>Article Title</h2>
        <p>Content...</p>
    </article>
    
    <aside>
        <h3>Sidebar</h3>
    </aside>
</main>

<footer>
    <p>&copy; 2025 Hogwarts</p>
</footer>
\`\`\`

**Common Semantic Tags:**
- \`<header>\`: Top section of page
- \`<nav>\`: Navigation links  
- \`<main>\`: Main content (only one per page)
- \`<article>\`: Self-contained content
- \`<section>\`: Thematic grouping
- \`<aside>\`: Sidebar content
- \`<footer>\`: Bottom section

### Your Challenge:
Restructure your page using semantic tags:
1. Wrap your title and navigation in \`<header>\`
2. Create a \`<nav>\` with links to different sections
3. Wrap your main content in \`<main>\`
4. Use \`<article>\` for each house section
5. Add a \`<footer>\` with copyright info
        `,
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hogwarts</title>
</head>
<body>
    <!-- Restructure with semantic tags -->
    <h1>Hogwarts Houses</h1>
    
    <h2>Gryffindor</h2>
    <p>Where dwell the brave at heart.</p>
    
</body>
</html>`,
        solution: `<header>
    <h1>Hogwarts Houses</h1>
    <nav>
        <a href="#gryffindor">Gryffindor</a>
        <a href="#slytherin">Slytherin</a>
    </nav>
</header>

<main>
    <article id="gryffindor">
        <h2>Gryffindor</h2>
        <p>Where dwell the brave at heart.</p>
    </article>
</main>

<footer>
    <p>&copy; 2025 Hogwarts School</p>
</footer>`,
      },
    ],
  },
];