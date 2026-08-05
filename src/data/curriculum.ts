/**
 * The full course roadmap for two 9-year-old students.
 * 20 sessions total. 90 minutes each. 2 sessions per week = 10 weeks.
 *
 * Sessions 1-4  : algorithm foundations (already built)
 * Sessions 5-20 : Scratch, 16 sessions
 *
 * The algorithm concepts that were missing from sessions 1-4 (variables,
 * events, AND/OR/NOT, repeat-until, flowcharts, x/y coordinates) are taught
 * inside the Scratch sessions at the exact moment they become useful.
 * Each one is tagged with `carriesConcept`.
 */

export type CurriculumSession = {
  id: number;
  week: number;
  title: string;
  goal: string;
  /** Scratch blocks introduced, written exactly as they read in the editor. */
  newBlocks: string[];
  /** The teaching part — what you explain on the board / slides. */
  explain: string[];
  /** Guided doing — you build it together, step by step. */
  activity: string;
  /** They build alone in class. This is the real test of the session. */
  task: string;
  /** Sent home. Always small enough to finish in 20 minutes. */
  homework: string;
  /** An algorithm concept from the foundations that lands in this session. */
  carriesConcept?: string;
  /** Set when the whole session is a build, not new theory. */
  isProject?: boolean;
  status: "done" | "planned";
};

export const stages = [
  {
    name: "Foundations",
    range: "Sessions 1-4",
    weeks: "Weeks 1-2",
    summary:
      "Thinking like a programmer with no computer. Sequence, precision, debugging, IF and LOOP.",
    color: "#8B5CF6",
  },
  {
    name: "First Steps in Scratch",
    range: "Sessions 5-8",
    weeks: "Weeks 3-4",
    summary:
      "The editor, moving a sprite, animating it, and making it start on its own. Ends in their first finished project.",
    color: "#F59E0B",
  },
  {
    name: "Real Programming",
    range: "Sessions 9-14",
    weeks: "Weeks 5-7",
    summary:
      "Loops, sound, conditionals, variables and randomness. This is where the foundations become code.",
    color: "#10B981",
  },
  {
    name: "Building Big",
    range: "Sessions 15-18",
    weeks: "Weeks 8-9",
    summary:
      "Many sprites talking to each other, clones, lists and their own custom blocks.",
    color: "#3B82F6",
  },
  {
    name: "Mastery",
    range: "Sessions 19-20",
    weeks: "Week 10",
    summary:
      "Gravity and jumping, then a game of their own design, presented to an audience.",
    color: "#EC4899",
  },
];

export const curriculum: CurriculumSession[] = [
  // ---------- Foundations (already built) ----------
  {
    id: 1,
    week: 1,
    title: "What Is an Algorithm?",
    goal: "Understand that an algorithm is a list of steps in the right order.",
    newBlocks: [],
    explain: [
      "An algorithm is just a recipe: steps, in order.",
      "Computers are fast but not clever — they do exactly what you say.",
      "Order matters. Swap two steps and everything breaks.",
    ],
    activity: "Write the algorithm for making a sandwich, then follow it literally.",
    task: "Write the algorithm for brushing your teeth in 6 steps.",
    homework: "Write the algorithm for getting ready for school.",
    status: "done",
  },
  {
    id: 2,
    week: 1,
    title: "Think Like a Programmer",
    goal: "Tell a good algorithm from a bad one, and fix a broken one.",
    newBlocks: [],
    explain: [
      "A good algorithm is clear, ordered, complete and precise.",
      "A bug is a mistake in your steps, not a broken computer.",
      "Decomposition: break one big problem into small ones.",
    ],
    activity: "Debug three broken algorithms the teacher wrote on purpose.",
    task: "Break 'tidy my room' into 3 smaller problems.",
    homework: "Find the bug in the given 'make tea' algorithm.",
    status: "done",
  },
  {
    id: 3,
    week: 2,
    title: "Making Decisions — IF",
    goal: "Use a condition to choose between two paths.",
    newBlocks: [],
    explain: [
      "IF something is true, THEN do this.",
      "IF / ELSE gives two different paths.",
      "A condition is always a yes/no question.",
    ],
    activity: "Traffic light game — the class reacts to IF conditions the teacher calls out.",
    task: "Write 3 IF rules for a pet robot.",
    homework: "Write an IF/ELSE for 'what do I wear today?'",
    status: "done",
  },
  {
    id: 4,
    week: 2,
    title: "Repeating — LOOP",
    goal: "Replace repeated steps with a loop.",
    newBlocks: [],
    explain: [
      "A loop repeats steps so you don't write them 20 times.",
      "Repeat X times = a counted loop. Forever = never stops.",
      "IF asks a question once. LOOP does something again and again.",
    ],
    activity: "Clap-and-count loops, then rewrite a long algorithm using a loop.",
    task: "Turn a 12-step algorithm into 3 steps using a loop.",
    homework: "Find two loops that happen in your own day.",
    status: "done",
  },

  // ---------- First Steps in Scratch ----------
  {
    id: 5,
    week: 3,
    title: "Inside Scratch",
    goal: "Name every part of the Scratch screen and say what its job is.",
    newBlocks: [],
    explain: [
      "The 3 tabs: Code, Costumes, Sounds.",
      "Palette, Code Area, Stage, Sprite Pane — the 4 big areas.",
      "Green Flag and Stop. Sprites, Costumes and Backdrops.",
    ],
    activity:
      "Live tour on the projector using real screenshots, then they open the editor and point at each part themselves.",
    task:
      "Set up a scene: pick a backdrop, add a second sprite, rename it, resize it. No code yet.",
    homework:
      "Open Scratch at home and add 3 sprites onto a backdrop of your choice. Save it.",
    status: "done",
  },
  {
    id: 6,
    week: 3,
    title: "Making It Move",
    goal: "Move a sprite with code, and understand where it is on the stage.",
    newBlocks: [
      "move 10 steps",
      "turn 15 degrees",
      "go to x: y:",
      "glide 1 secs to x: y:",
      "point in direction 90",
      "if on edge, bounce",
    ],
    explain: [
      "The stage is a grid. x goes left/right, y goes up/down. The middle is 0, 0.",
      "Negative x is left, positive x is right.",
      "'Move' goes forward in whatever direction the sprite faces.",
      "'Glide' is smooth, 'go to' is instant.",
    ],
    activity:
      "Treasure hunt: teacher calls out coordinates, they must glide the sprite there.",
    task: "Make the sprite walk a full square and end where it started.",
    homework: "Make a sprite bounce around the stage forever without stopping.",
    carriesConcept: "X / Y coordinates",
    status: "planned",
  },
  {
    id: 7,
    week: 4,
    title: "Looks & Animation",
    goal: "Make a sprite look alive by changing costume, size, colour and speech.",
    newBlocks: [
      "say Hello! for 2 seconds",
      "think Hmm...",
      "next costume",
      "switch costume to",
      "change size by 10",
      "change color effect by 25",
      "show / hide",
    ],
    explain: [
      "A costume is one picture. Swapping costumes fast looks like movement.",
      "This is exactly how cartoons work.",
      "'say' makes a speech bubble — that is your program talking to the player.",
    ],
    activity:
      "Build a walking cat together: move + next costume, repeated. Then make it grow and shrink.",
    task: "Make your sprite introduce itself in 3 speech bubbles while changing colour.",
    homework: "Animate any sprite so it looks like it is really walking.",
    status: "planned",
  },
  {
    id: 8,
    week: 4,
    title: "Events + Project 1: Dance Party",
    goal: "Make code start by itself, and finish a complete little project.",
    newBlocks: [
      "when green flag clicked",
      "when space key pressed",
      "when this sprite clicked",
      "when backdrop switches to",
    ],
    explain: [
      "An EVENT is 'when X happens, do Y'. It is an IF that waits.",
      "Yellow hat blocks sit on top. Without one, nothing starts by itself.",
      "Different keys can start different scripts on the same sprite.",
    ],
    activity:
      "Give three sprites different dance moves, each starting on the green flag.",
    task:
      "PROJECT 1 — Dance Party: 3 sprites, a backdrop, all dancing when the flag is clicked, and one that reacts when clicked.",
    homework: "Add a 4th dancer to your party with a move nobody else has.",
    carriesConcept: "Events",
    isProject: true,
    status: "planned",
  },

  // ---------- Real Programming ----------
  {
    id: 9,
    week: 5,
    title: "Loops for Real",
    goal: "Use all three loop types, and nest one inside another.",
    newBlocks: ["repeat 10", "forever", "repeat until", "wait 1 seconds"],
    explain: [
      "repeat 10 — you know the number. forever — never ends.",
      "repeat until — keeps going until a question becomes true.",
      "A loop inside a loop is a nested loop. The inside one finishes first.",
      "'wait' is what makes a loop watchable instead of instant.",
    ],
    activity:
      "Draw a square with repeat 4, then a flower by nesting that inside repeat 8.",
    task: "Make a sprite walk to the right edge using repeat until, not repeat 10.",
    homework: "Use a nested loop to make any repeating pattern you like.",
    carriesConcept: "Repeat Until · Nested loops",
    status: "planned",
  },
  {
    id: 10,
    week: 5,
    title: "Sound & Music",
    goal: "Add sound to a project and control when it plays.",
    newBlocks: [
      "play sound Meow until done",
      "start sound Meow",
      "change volume by",
      "play note 60 for 0.5 beats",
      "set tempo to",
    ],
    explain: [
      "'until done' waits for the sound to finish. 'start sound' does not wait.",
      "That difference changes everything about timing.",
      "The Music extension turns your sprite into an instrument.",
    ],
    activity: "Build a 4-key piano: 4 sprites, each plays a note when clicked.",
    task: "Program a short song using play note inside a loop.",
    homework: "Add sound to your Dance Party so the music matches the moves.",
    status: "planned",
  },
  {
    id: 11,
    week: 6,
    title: "Conditions in Code",
    goal: "Turn the Session 3 IF into real Scratch blocks that sense the world.",
    newBlocks: [
      "if <> then",
      "if <> then else",
      "touching color ?",
      "touching mouse-pointer ?",
      "key space pressed ?",
      "wait until <>",
    ],
    explain: [
      "The blue Sensing blocks are the sprite's eyes and ears.",
      "A condition block is a pointed hexagon — it only fits in a hexagon hole.",
      "Before coding, draw the plan as a flowchart: diamond = a question.",
    ],
    activity:
      "Draw a flowchart for a maze game on paper together, then code the wall detection.",
    task: "Make a sprite say 'Ouch!' and jump back whenever it touches red.",
    homework: "Draw the flowchart for a game idea of your own.",
    carriesConcept: "Flowcharts",
    status: "planned",
  },
  {
    id: 12,
    week: 6,
    title: "Project 2: Maze Game",
    goal: "Combine events, loops and conditions into a game somebody can play.",
    newBlocks: [],
    explain: [
      "Arrow keys move the player — that is 4 events.",
      "Touching the wall colour sends you back to the start.",
      "Touching the goal wins the game.",
    ],
    activity: "Build the maze walls in the paint editor and code the player together.",
    task:
      "PROJECT 2 — Maze Game: your own maze, arrow-key movement, walls that block, and a win message.",
    homework: "Add a second level to your maze that appears after you win the first.",
    isProject: true,
    status: "planned",
  },
  {
    id: 13,
    week: 7,
    title: "Variables & Score",
    goal: "Store a number that changes, and ask the player for information.",
    newBlocks: [
      "set score to 0",
      "change score by 1",
      "ask What's your name? and wait",
      "answer",
      "join Hello answer",
    ],
    explain: [
      "A variable is a labelled box that holds one thing you can change.",
      "Always 'set to 0' at the start, then 'change by 1' as you play.",
      "'ask and wait' is INPUT. 'say' is OUTPUT. Programs need both.",
    ],
    activity:
      "Make a click-counter together, then a program that greets you by name.",
    task: "Add a working score and a lives counter to your Maze Game.",
    homework: "Build a quiz that asks 3 questions and gives a score out of 3.",
    carriesConcept: "Variables · Input / Output",
    status: "planned",
  },
  {
    id: 14,
    week: 7,
    title: "Operators & Luck",
    goal: "Do maths, combine conditions, and make things unpredictable.",
    newBlocks: [
      "pick random 1 to 10",
      "+ - * /",
      "< = >",
      "and / or / not",
      "join",
    ],
    explain: [
      "'pick random' is what makes a game different every time you play.",
      "AND — both must be true. OR — one is enough. NOT — flips the answer.",
      "You can put an operator inside another operator.",
    ],
    activity:
      "Build a dice roller, then a rule using AND: 'if touching apple AND score < 10'.",
    task:
      "PROJECT 3 — Catch the Apples: apples fall from random positions, score goes up on catch, game ends at 10.",
    homework: "Make a number-guessing game using < and > to say higher or lower.",
    carriesConcept: "AND / OR / NOT",
    isProject: true,
    status: "planned",
  },

  // ---------- Building Big ----------
  {
    id: 15,
    week: 8,
    title: "Sprites That Talk to Each Other",
    goal: "Coordinate several sprites using broadcast messages.",
    newBlocks: [
      "broadcast message1",
      "broadcast message1 and wait",
      "when I receive message1",
      "switch backdrop to",
    ],
    explain: [
      "Each sprite only knows its own code. A broadcast is how they shout to each other.",
      "'and wait' lets you control the order of a whole scene.",
      "This is how you build a story with scenes.",
    ],
    activity: "Two sprites having a conversation, taking proper turns.",
    task: "PROJECT 4 — An animated story: 3 scenes, 3 backdrops, sprites that talk in order.",
    homework: "Add a title scene and an ending scene to your story.",
    isProject: true,
    status: "planned",
  },
  {
    id: 16,
    week: 8,
    title: "Clones",
    goal: "Make many copies of one sprite without copying the code.",
    newBlocks: [
      "create clone of myself",
      "when I start as a clone",
      "delete this clone",
    ],
    explain: [
      "A clone is a live copy that runs the same code on its own.",
      "This is how you get 50 raindrops, or endless enemies.",
      "Always delete clones you don't need, or the game slows down.",
    ],
    activity: "Make it rain: one raindrop sprite cloning forever from random x.",
    task: "Build a space shooter: bullets are clones, asteroids are clones.",
    homework: "Make a firework or snow effect using clones.",
    status: "planned",
  },
  {
    id: 17,
    week: 9,
    title: "Lists",
    goal: "Store many values in one place instead of many variables.",
    newBlocks: [
      "add thing to list",
      "item 1 of list",
      "length of list",
      "delete all of list",
      "list contains thing ?",
    ],
    explain: [
      "A variable holds one thing. A list holds a whole row of things.",
      "Each slot has a number, starting at 1.",
      "Lists + 'pick random' = questions that never come in the same order.",
    ],
    activity: "Build a high-score list, then a random-question picker.",
    task: "Turn your quiz into a list-driven quiz with 6 questions in random order.",
    homework: "Make a shopping-list app: add items, show them, clear them.",
    status: "planned",
  },
  {
    id: 18,
    week: 9,
    title: "My Blocks",
    goal: "Build your own block to avoid repeating code.",
    newBlocks: ["define my block", "my block with inputs"],
    explain: [
      "When you write the same 5 blocks three times, make it one block instead.",
      "This is Session 2's decomposition, in code.",
      "Inputs make one block do many jobs — 'draw square (size)'.",
    ],
    activity: "Turn a long jump script into one 'jump' block, then add a height input.",
    task: "Rewrite one of your old projects using at least two custom blocks.",
    homework: "Make a 'draw shape' block that takes the number of sides as an input.",
    status: "planned",
  },

  // ---------- Mastery ----------
  {
    id: 19,
    week: 10,
    title: "Platformer: Gravity & Jumping",
    goal: "Build the hardest common game mechanic — real jumping.",
    newBlocks: ["change y by (velocity)", "set velocity to", "if not touching ground"],
    explain: [
      "Gravity is a variable that constantly pulls y down.",
      "A jump sets that variable to a big positive number once.",
      "Landing means: touching the ground, so stop falling.",
      "This uses everything: variables, loops, conditions, NOT.",
    ],
    activity: "Build the gravity engine together, one variable at a time.",
    task:
      "PROJECT 5 — Platformer: a player that runs and jumps, platforms, a coin to collect, a score.",
    homework: "Add a second level and a danger that resets the player.",
    isProject: true,
    status: "planned",
  },
  {
    id: 20,
    week: 10,
    title: "Capstone & Showcase",
    goal: "Design and build a game of their own, then present it.",
    newBlocks: [],
    explain: [
      "Plan first: what is the goal, what are the rules, how do you win?",
      "Draw the flowchart before touching a single block.",
      "Then build, test, debug, and polish.",
    ],
    activity:
      "Planning workshop: each student pitches their idea and draws the flowchart.",
    task:
      "CAPSTONE — Build your own game from your own plan, using at least: 2 sprites, a variable, a loop, a condition and a custom block.",
    homework:
      "Present your game to your family and write down 2 things they suggest.",
    isProject: true,
    status: "planned",
  },
];

export const courseStats = {
  totalSessions: 20,
  scratchSessions: 16,
  minutesEach: 90,
  perWeek: 2,
  weeks: 10,
  projects: 6,
};
