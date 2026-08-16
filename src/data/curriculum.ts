/**
 * The full course roadmap for two 9-year-old students.
 * 18 sessions total. 90 minutes each. 2 sessions per week = 9 weeks.
 *
 * Sessions 1-4  : algorithm foundations (already built)
 * Sessions 5-18 : Scratch, 14 sessions
 *
 * Sessions 8-10 are deliberately dense: events and all three loop types land
 * together in 8, sound plus the first full project in 9, and 10 is pure
 * building — a playable maze that teaches conditions by needing them.
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
    range: "Sessions 5-7",
    weeks: "Weeks 3-4",
    summary:
      "The editor, moving a sprite around the grid, and animating it until it looks alive.",
    color: "#F59E0B",
  },
  {
    name: "Real Programming",
    range: "Sessions 8-12",
    weeks: "Weeks 4-6",
    summary:
      "Events, loops, sound, conditions, variables and randomness — plus three real projects, including their first playable game.",
    color: "#10B981",
  },
  {
    name: "Building Big",
    range: "Sessions 13-16",
    weeks: "Weeks 7-8",
    summary:
      "Many sprites talking to each other, clones, lists and their own custom blocks.",
    color: "#3B82F6",
  },
  {
    name: "Mastery",
    range: "Sessions 17-18",
    weeks: "Week 9",
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
    status: "done",
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
    status: "done",
  },
  // ---------- Real Programming ----------
  {
    id: 8,
    week: 4,
    title: "Events + Loops",
    goal: "Make code start by itself, and repeat itself three different ways.",
    newBlocks: [
      "when green flag clicked",
      "when space key pressed",
      "when this sprite clicked",
      "repeat 10",
      "forever",
      "repeat until",
      "wait 1 seconds",
    ],
    explain: [
      "An EVENT is 'when X happens, do Y'. It is an IF that waits.",
      "Yellow hat blocks sit on top. Without one, nothing starts by itself.",
      "One sprite can hold several scripts, each with its own hat.",
      "repeat 10 counts. forever never ends. repeat until watches for a question to become true.",
      "A loop inside a loop is nested — the inside one finishes first, every single time.",
    ],
    activity:
      "Draw a square with repeat 4, then nest it inside repeat 8 to get a flower.",
    task:
      "MINI GAME — Traffic Light: a sprite that changes colour forever on the flag, and stops when you press a key.",
    homework: "Use a nested loop to make any repeating pattern you like.",
    carriesConcept: "Events · Repeat Until · Nested loops",
    status: "done",
  },
  {
    id: 9,
    week: 5,
    title: "Sound & Music + Project 1: Dance Party",
    goal: "Add sound to a project, then finish a complete one.",
    newBlocks: [
      "play sound Meow until done",
      "start sound Meow",
      "change volume by",
      "play note 60 for 0.5 beats",
      "set tempo to",
      "when backdrop switches to",
    ],
    explain: [
      "'until done' waits for the sound to finish. 'start sound' does not wait.",
      "That one difference decides whether your dancers move in time or freeze.",
      "The Music extension turns a sprite into an instrument.",
      "A project is finished when somebody else can press the flag and enjoy it.",
    ],
    activity: "Build a 4-key piano: 4 sprites, each plays a note when clicked.",
    task:
      "PROJECT 1 — Dance Party: 3 sprites dancing on the flag, music playing in a loop, and one sprite that reacts when clicked.",
    homework: "Add a 4th dancer with a move — and a sound — nobody else has.",
    carriesConcept: "Sound timing",
    isProject: true,
    status: "done",
  },
  {
    id: 10,
    week: 5,
    title: "Practical: Maze Game",
    goal: "Build a real game somebody can play, and meet conditions by needing them.",
    newBlocks: [
      "if <> then",
      "touching color ?",
      "key right arrow pressed ?",
      "wait until <>",
      "go to x: 0 y: 0",
    ],
    explain: [
      "The blue Sensing blocks are the sprite's eyes — 'touching color' is a yes/no question.",
      "A condition block is a pointed hexagon. It only fits in a hexagon hole.",
      "Session 3's IF is now a real block: if touching the wall, then go back.",
      "Plan on paper first — a diamond in your flowchart is always a question.",
    ],
    activity:
      "Paint the maze walls in one solid colour together, then code arrow-key movement.",
    task:
      "PROJECT 2 — Maze Game: your own maze, arrow keys, walls that send you back, and a win message at the goal.",
    homework: "Add a second, harder maze level that loads after you win the first.",
    carriesConcept: "Conditions in code · Flowcharts",
    isProject: true,
    status: "done",
  },
  {
    id: 11,
    week: 6,
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
    id: 12,
    week: 6,
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
    id: 13,
    week: 7,
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
    id: 14,
    week: 7,
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
    id: 15,
    week: 8,
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
    id: 16,
    week: 8,
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
    id: 17,
    week: 9,
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
    id: 18,
    week: 9,
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
  totalSessions: 18,
  scratchSessions: 14,
  minutesEach: 90,
  perWeek: 2,
  weeks: 9,
  projects: 6,
};
