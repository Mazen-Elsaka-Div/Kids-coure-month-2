import { SessionData } from "./types";

export const session10: SessionData = {
  id: 10,
  title: "Practical: Maze Game",
  subtitle: "Build a Real Game — Walls You Can't Walk Through",
  emoji: "🕹️",
  description:
    "A whole session of building. Arrow-key movement, walls that stop you, and a way to win — and the IF block arrives because the game needs it.",
  color: "#4C97FF", // Scratch Sensing / Motion blue
  slides: [
    {
      id: 1,
      title: "Do You Remember?",
      emoji: "🧠",
      type: "review",
      content: ["Show me your Dance Party — all FOUR dancers, with music!"],
      flipCards: [
        {
          frontEmoji: "⚡",
          frontText: "How many scripts can one sprite have?",
          backEmoji: "🧩",
          backText: "As many as you like — one per hat block",
        },
        {
          frontEmoji: "🎯",
          frontText: "What does 'repeat until' need in its hexagon?",
          backEmoji: "❓",
          backText: "A condition — a yes/no question",
        },
        {
          frontEmoji: "⏳",
          frontText: "Dancer must move while a sound plays. Which block?",
          backEmoji: "▶️",
          backText: "start sound — 'until done' would freeze it",
        },
        {
          frontEmoji: "📍",
          frontText: "Which block puts a sprite in an exact spot instantly?",
          backEmoji: "🎯",
          backText: "go to x: __ y: __",
        },
      ],
      mascotMessage: "Nine sessions of practice. Today you build an actual GAME. 🎮",
      teacherNotes: {
        questions: [
          "What sound did your 4th dancer get?",
          "Did anything about the music go wrong at home?",
        ],
        expectedAnswers: [
          "Anything from the library — celebrate the choice.",
          "Often: the song restarting too fast, or the sound added to the wrong sprite.",
        ],
        tips: [
          "Homework check fast today — five minutes maximum. This session is almost entirely building and you need every minute.",
          "The last flip card ('go to x y') is not decoration. They need it in step 2 of the build, so make sure both students say it.",
        ],
        transition: "Today is different. Today you don't learn a topic — you build a game, and you learn what the game needs.",
      },
      bgVariant: "purple",
    },
    {
      id: 2,
      title: "What Makes a Game a Game?",
      emoji: "🎮",
      type: "content",
      content: [
        "Your Dance Party was a project. But you couldn't PLAY it.",
        "A game needs three things: something you control, a rule that stops you, and a way to WIN.",
        "In our maze: you control the cat, the walls stop you, and the green square wins.",
        "That's it. That's a game. Let's find the blocks for those three things.",
      ],
      image: "/images/scratch/s10-maze.png",
      newWord: {
        word: "Goal",
        pronunciation: "GOHL",
        meaning: "The thing the player is trying to reach or achieve",
        example: "In our maze the goal is the green square in the corner.",
      },
      mascotMessage: "Control, rules, winning. Take one away and it's not a game any more. 🏁",
      teacherNotes: {
        questions: [
          "Think of a game you play. What do you control, and how do you win?",
          "What happens in a game with no rules at all?",
        ],
        expectedAnswers: [
          "Any game — a character, and reaching the end / getting points.",
          "It's boring! You can do anything, so nothing matters.",
        ],
        tips: [
          "Get them to answer the first question about a game they actually play. Their own example makes the three-part structure obvious.",
          "'A rule that stops you' is the key phrase — it's the reason the IF block is about to appear. Say it, then let the need for it build.",
        ],
        transition: "You already have the controls: arrow keys are just events. The NEW part is the wall.",
      },
      bgVariant: "default",
    },
    {
      id: 3,
      title: "The Sprite's Eyes: Sensing",
      emoji: "👀",
      type: "content",
      content: [
        "How does the cat know it hit a wall? It has to LOOK.",
        "The blue Sensing blocks are your sprite's eyes and ears.",
        "'touching color [black] ?' asks: am I touching that colour right now? Yes or no.",
        "Look at its shape — a pointed HEXAGON. That shape means 'I am a question'.",
      ],
      visualBlocks: [
        { type: "action", color: "blue", label: "touching color ⬛ ?" },
        { type: "action", color: "blue", label: "key right arrow pressed ?" },
        { type: "action", color: "blue", label: "touching mouse-pointer ?" },
      ],
      newWord: {
        word: "Sensing",
        pronunciation: "SEN-sing",
        meaning: "Checking what is happening around the sprite right now",
        example: "'touching color black?' is a sensing block — the sprite's eyes.",
      },
      mascotMessage: "I can see colours now. Mostly I see walls. Painful, painful walls. 🧱",
      teacherNotes: {
        questions: [
          "Which Session 8 block had a hexagon-shaped hole in it?",
          "So what kind of block fits in a hexagon hole?",
        ],
        expectedAnswers: [
          "repeat until!",
          "Only another hexagon — a question block!",
        ],
        tips: [
          "The shape rule is everything today. Round blocks hold values, hexagons hold questions, and Scratch physically refuses the wrong shape. Let them try to force a round block into a hexagon once.",
          "Show them how to set the colour: click the colour swatch inside the block, then use the EYEDROPPER and click the actual wall on the stage. Typing a colour by hand is the number one cause of 'my walls don't work'.",
        ],
        transition: "You have the question. Now you need the block that ACTS on the answer.",
      },
      bgVariant: "blue",
    },
    {
      id: 4,
      title: "The IF Block — At Last",
      emoji: "🔀",
      type: "content",
      content: [
        "Session 3, with no computer: 'IF it rains, THEN take an umbrella.'",
        "Here it is as a real block: 'if <> then'. Orange, C-shaped, from Control.",
        "The hexagon hole holds the question. The mouth holds what to do about it.",
        "IF the answer is yes → run the inside blocks. IF no → skip them completely.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "if <touching color ⬛ ?> then",
          children: [
            { type: "action", color: "blue", label: "move -10 steps" },
            { type: "action", color: "pink", label: "start sound Boing" },
          ],
        },
      ],
      mascotMessage: "Session 3 was seven sessions ago. I told you it would come back. 🔮",
      teacherNotes: {
        questions: [
          "How is this block different from 'repeat until'? They both have a hexagon.",
          "If the cat is NOT touching black, what happens to the blocks inside?",
        ],
        expectedAnswers: [
          "'if' asks ONCE and moves on. 'repeat until' keeps asking and keeps looping.",
          "They get skipped — completely ignored.",
        ],
        tips: [
          "The 'if asks once, repeat until keeps asking' distinction is the single most important sentence of the session. Write it on the board.",
          "This is the Session 3 payoff. Make it feel like an arrival: go back and remind them of the umbrella example in their own words.",
          "'move -10 steps' as a way of going backwards surprises them. Negative numbers as 'the other direction' links straight back to Session 6's coordinates.",
        ],
        transition: "One more thing before we build: the plan. On paper, like real programmers.",
      },
      bgVariant: "orange",
    },
    {
      id: 5,
      title: "Plan First: The Flowchart",
      emoji: "📊",
      type: "content",
      content: [
        "Real programmers draw the plan BEFORE touching the blocks.",
        "A box is an action. An arrow is 'what happens next'.",
        "A DIAMOND is always a question — and it has two arrows out: yes and no.",
        "Our whole maze fits in one small flowchart. Look how simple the game really is.",
      ],
      image: "/images/scratch/s10-flowchart.png",
      newWord: {
        word: "Flowchart",
        pronunciation: "FLOH-chart",
        meaning: "A drawing of a plan, using boxes for actions and diamonds for questions",
        example: "We drew a flowchart of the maze before we built it.",
      },
      mascotMessage: "Diamond = question. Two arrows out. Always. 💎",
      teacherNotes: {
        questions: [
          "Why does a diamond always have TWO arrows leaving it?",
          "Which Scratch block does a diamond turn into?",
        ],
        expectedAnswers: [
          "Because a question has two answers — yes and no!",
          "The 'if' block!",
        ],
        tips: [
          "Draw this flowchart on paper WITH them, don't just show the slide. Ninety seconds of drawing beats five minutes of pointing.",
          "Diamond → if block is the mapping that makes flowcharts useful rather than decorative. State it explicitly.",
          "They'll draw their own flowchart for the homework, so keep their paper version — they'll copy the shapes from it.",
        ],
        transition: "Plan drawn. Blocks understood. Now paint a maze.",
      },
      bgVariant: "green",
    },
    {
      id: 6,
      title: "Quick Quiz!",
      emoji: "❓",
      type: "quiz",
      content: [],
      quiz: {
        question: "Which block goes INSIDE the hexagon hole of an 'if' block?",
        options: [
          "move 10 steps",
          "touching color black ?",
          "wait 1 seconds",
          "when green flag clicked",
        ],
        correctIndex: 1,
      },
      mascotMessage: "Hexagon hole takes a hexagon block. Shapes don't lie. 🔷",
      teacherNotes: {
        questions: ["Why can't 'move 10 steps' go in the hole?"],
        expectedAnswers: [
          "Because it's not a question — it's an action, and the wrong shape!",
        ],
        tips: [
          "Both students answer on fingers together, on three.",
        ],
        transition: "Build time. This is the rest of the session — let's go.",
      },
      bgVariant: "purple",
    },
    {
      id: 7,
      title: "Step 1: Paint the Maze",
      emoji: "🎨",
      type: "activity",
      content: [
        "The maze is a BACKDROP you draw yourself. Walls in one colour, goal in another.",
      ],
      activitySteps: [
        "New project, name it 'Maze Game'. Keep the cat but make it small: set size to 30.",
        "Bottom-right: hover 'Choose a Backdrop' and click the BRUSH to paint a new one.",
        "Pick the Rectangle tool. Set Fill to solid BLACK. Turn the outline off.",
        "Draw thick black bars to make a simple maze. Leave WIDE corridors — much wider than the cat!",
        "Only 5 or 6 walls. A simple maze that works beats a hard maze that doesn't.",
        "Now switch Fill to bright GREEN and draw one filled square in the top-right corner. That's the goal.",
        "Click the Code tab. Look at the stage — your maze is the background now.",
      ],
      image: "/images/scratch/s10-maze.png",
      mascotMessage: "Wide corridors. WIDE. I'm a cat, not a piece of paper. 🐈",
      teacherNotes: {
        questions: [
          "Why must the walls be one single solid colour?",
          "Why do the corridors need to be much wider than the cat?",
        ],
        expectedAnswers: [
          "Because 'touching color' only checks ONE colour!",
          "Because if the cat fills the corridor it touches a wall constantly and can never move.",
        ],
        tips: [
          "Thin corridors are the #1 reason mazes fail. Walk around and check corridor width BEFORE they write any code — it saves a rebuild later.",
          "Insist on solid fill with the outline turned off. An outlined shape has two colours and 'touching color' will pick the wrong one.",
          "Cap this at 10 minutes. Some children will happily paint for the whole session. Set a timer out loud.",
        ],
        transition: "Maze painted. Now make the cat move.",
      },
      bgVariant: "blue",
    },
    {
      id: 8,
      title: "Step 2: Arrow-Key Movement",
      emoji: "🎮",
      type: "activity",
      content: [
        "Four arrow keys, four events. You already know how to do this!",
      ],
      activitySteps: [
        "First, a reset script: when flag clicked → go to x: -200 y: -140 (your maze start) → point in direction 90.",
        "Now: when right arrow key pressed → point in direction 90 → move 5 steps.",
        "Then: when left arrow key pressed → point in direction -90 → move 5 steps.",
        "Then: when up arrow key pressed → point in direction 0 → move 5 steps.",
        "Then: when down arrow key pressed → point in direction 180 → move 5 steps.",
        "Sprite pane: set 'Direction' rotation style to 'left-right' so the cat never goes upside-down.",
        "Test it. Drive the cat around with the arrows. It walks straight through the walls — that's the next step!",
      ],
      mascotMessage: "Five scripts already. Count the yellow hats. Told you I was busy. 🤹",
      teacherNotes: {
        questions: [
          "How many separate scripts does the cat have now?",
          "Why 'move 5 steps' instead of 'move 10 steps'?",
        ],
        expectedAnswers: [
          "Five — one reset plus four arrows!",
          "Small steps are more accurate — with big steps you jump right over a thin wall.",
        ],
        tips: [
          "Build the right-arrow script together, then let them do the other three alone. Copy-and-adapt is the skill; doing all four for them wastes the lesson.",
          "Duplicate is faster: right-click the script → Duplicate, then change the key and the direction. Show them, it's a real habit.",
          "Walking through walls right now is deliberate and it should feel WRONG to them. That frustration is what makes the next step satisfying.",
        ],
        transition: "The cat cheats. Time for the rule that stops it.",
      },
      bgVariant: "green",
    },
    {
      id: 9,
      title: "Step 3: Walls That Stop You",
      emoji: "🧱",
      type: "activity",
      content: [
        "One forever loop with one IF inside it. This is the heart of the game.",
      ],
      activitySteps: [
        "New script: when flag clicked → forever.",
        "Inside the forever, add: if <touching color ⬛ ?> then.",
        "Set the colour properly: click the swatch, choose the EYEDROPPER, then click a black wall on the stage.",
        "Inside the if, add: move -5 steps. (Backwards! Negative means the other way.)",
        "Also inside the if, add: start sound Boing — add it in the Sounds tab first.",
        "Run it. Drive into a wall. The cat bounces back and can't get through!",
        "Now break it on purpose: change 'move -5' to 'move -50'. Drive into a wall. Where did the cat go?!",
        "Put it back to -5. It must match your arrow-key step size.",
      ],
      mascotMessage: "Boing. Boing. Boing. I have learned my lesson about walls. 🤕",
      teacherNotes: {
        questions: [
          "Why does the wall check need a 'forever' loop around it?",
          "With 'move -50', why did the cat fly across the maze?",
        ],
        expectedAnswers: [
          "So it keeps checking all the time — not just once at the start!",
          "Because it jumped back 50 steps instead of undoing the 5 it just moved.",
        ],
        tips: [
          "The 'if inside forever' pattern is the most important structure in all of game programming. Name it: 'check forever, act when it's true'.",
          "Step 7 is the best step on this slide. The bug is visible, funny, and teaches that -5 must undo exactly the +5 the arrow key did.",
          "If the cat gets STUCK in a wall, it's touching black on both sides. Drag it out by hand and widen that corridor — don't debug the code, the code is fine.",
        ],
        transition: "The walls work. Now give them a reason to reach the corner.",
      },
      bgVariant: "orange",
    },
    {
      id: 10,
      title: "Step 4: Winning",
      emoji: "🏆",
      type: "activity",
      content: [
        "A second IF, in the same forever loop. Touch green, and you win.",
      ],
      activitySteps: [
        "In the SAME forever loop, underneath the first if, add a second: if <touching color 🟩 ?> then.",
        "Eyedropper again — click your green goal square this time.",
        "Inside this if: say 'YOU WIN!' for 2 seconds.",
        "Also inside it: start sound Cheer, then stop all.",
        "Run it. Drive to the corner. You just finished a GAME.",
        "Test it three times in a row. Does it work every single time?",
        "Give it to someone else to play WITHOUT explaining anything. Watch where they get confused.",
      ],
      image: "/images/scratch/s10-flowchart.png",
      mascotMessage: "I reached the green square. I am the greatest cat who ever lived. 🥇",
      teacherNotes: {
        questions: [
          "Both ifs are in the same forever loop. Do they both get checked?",
          "Why does 'stop all' come last, after the say and the sound?",
        ],
        expectedAnswers: [
          "Yes — every time round the loop, it checks both questions in order.",
          "Because 'stop all' stops everything instantly — anything after it never runs.",
        ],
        tips: [
          "Two ifs in one loop is the moment the flowchart from slide 5 becomes real code. Hold the drawing next to the screen and point at both diamonds.",
          "Handing the game to another person to play cold is the most valuable 60 seconds of the session. Watching a real player get stuck teaches design better than any advice you can give.",
          "If 'stop all' feels too final, 'stop this script' is a gentler option. Either is fine.",
        ],
        transition: "Game finished? Then here's a challenge to make it mean something.",
      },
      bgVariant: "green",
    },
    {
      id: 11,
      title: "Mini Game: The Shrinking Trap",
      emoji: "🔴",
      type: "activity",
      content: [
        "A third colour that PUNISHES you — and makes the maze suddenly tense.",
      ],
      activitySteps: [
        "Costumes... no — go back to the Backdrops tab and edit your maze.",
        "With solid RED fill, draw 3 or 4 small squares scattered in the corridors. Traps!",
        "Back in Code, in the same forever loop, add a third if: if <touching color 🔴 ?> then.",
        "Inside it: change size by -5, start sound Squawk, then go to x: -200 y: -140 (back to the start!).",
        "Run it. Touch a trap. You shrink AND you're sent home.",
        "Add to your reset script: set size to 30 — so every new game starts at full size.",
        "CHALLENGE: after 'change size by -5', add: if <size < 15> then say 'GAME OVER' → stop all.",
      ],
      mascotMessage: "Red squares make me smaller. At this rate I'll be a kitten by lunchtime. 🐾",
      teacherNotes: {
        questions: [
          "Why did we have to add 'set size to 30' to the reset script?",
          "Three ifs in one forever loop now. What order are they checked in?",
        ],
        expectedAnswers: [
          "Because otherwise the cat stays tiny from the last game!",
          "Top to bottom, over and over, forever.",
        ],
        tips: [
          "The reset-at-the-start habit is now four sessions old. This time THEY should spot the bug — let them play twice and notice the cat starts small.",
          "The challenge step quietly introduces a comparison ('size < 15'), which is Session 12's operators. Don't teach it, just let them use it. Planting beats explaining.",
          "If time is short, drop this whole slide. A finished maze matters far more than a trap. Send it home as an extra instead.",
        ],
        transition: "Real game, real rules, real difficulty. Let's lock in the words.",
      },
      bgVariant: "blue",
    },
    {
      id: 12,
      title: "Today's Words",
      emoji: "📚",
      type: "review",
      content: ["Say the answer BEFORE you flip. No peeking!"],
      flipCards: [
        {
          frontEmoji: "👀",
          frontText: "Sensing",
          backEmoji: "🔍",
          backText: "Blocks that check what's happening around the sprite",
        },
        {
          frontEmoji: "🔷",
          frontText: "What shape is a question block?",
          backEmoji: "❓",
          backText: "A pointed hexagon — it only fits hexagon holes",
        },
        {
          frontEmoji: "🔀",
          frontText: "if vs repeat until?",
          backEmoji: "1️⃣",
          backText: "'if' asks once. 'repeat until' keeps asking and looping",
        },
        {
          frontEmoji: "💎",
          frontText: "A diamond in a flowchart is...",
          backEmoji: "❓",
          backText: "A question — with a YES arrow and a NO arrow",
        },
        {
          frontEmoji: "🧱",
          frontText: "Why does the wall check need 'forever'?",
          backEmoji: "🔁",
          backText: "So it keeps checking, not just once at the start",
        },
      ],
      mascotMessage: "You built a game somebody can actually play. That's a real programmer. 🎓",
      teacherNotes: {
        questions: [
          "Which three colours did your maze use, and what did each one do?",
          "What are the three things every game needs?",
        ],
        expectedAnswers: [
          "Black = walls stop you, green = you win, red = trap shrinks you.",
          "Something you control, a rule that stops you, a way to win!",
        ],
        tips: [
          "Colour-as-a-rule is the big transferable idea from today. It comes straight back in Session 17's platformer, where the ground is a colour.",
          "Alternate cards between students as usual.",
        ],
        transition: "One last thing: this week's mission.",
      },
      bgVariant: "purple",
    },
    {
      id: 13,
      title: "Homework Mission",
      emoji: "🏠",
      type: "homework",
      content: [
        "Design a SECOND maze — harder than the first — and draw its flowchart first.",
        "Paper before blocks. That's the rule.",
      ],
      activitySteps: [
        "On paper, draw your new maze layout. Mark the start, the goal and the traps.",
        "On the same paper, draw the flowchart: boxes for actions, DIAMONDS for questions.",
        "Open your Maze Game. Backdrops tab → duplicate your maze backdrop.",
        "Edit the copy into your new, harder maze. Keep the same three colours!",
        "In the Code, add: when flag clicked → switch backdrop to (your new maze) to test it.",
        "Play it five times. If YOU can't finish it, it's too hard — fix it.",
        "Bring the paper AND the game next session.",
      ],
      mascotMessage: "Same colours in level 2, or none of your code will work. Same colours! 🎨",
      teacherNotes: {
        questions: [
          "Why must level 2 use exactly the same colours as level 1?",
          "Why draw the flowchart before opening Scratch?",
        ],
        expectedAnswers: [
          "Because the code checks those exact colours — different colours mean the walls stop working!",
          "So I know my plan works before I waste time building the wrong thing.",
        ],
        tips: [
          "Duplicating the backdrop instead of painting from scratch is the whole trick. Show them the right-click → duplicate before they leave.",
          "'If you can't finish it, it's too hard' is a real design principle, and it makes them playtest their own work.",
          "Next session (11) is Variables & Score — their maze finally gets a SCORE and LIVES on the screen. Tell them; after building a game, a scoreboard is the thing they want most.",
        ],
        transition: "Next time: a real score on screen, lives that run out, and asking the player their name!",
      },
      bgVariant: "green",
    },
  ],
};
