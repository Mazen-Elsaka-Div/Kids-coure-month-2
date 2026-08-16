import { SessionData } from "./types";

export const session9: SessionData = {
  id: 9,
  title: "Loops for Real",
  subtitle: "Counting, Waiting and Loops Inside Loops",
  emoji: "🔁",
  description:
    "All three loop types in real code — repeat, forever and repeat until — then we nest one inside another and draw a flower.",
  color: "#FFAB19", // Scratch Control orange
  slides: [
    {
      id: 1,
      title: "Do You Remember?",
      emoji: "🧠",
      type: "review",
      content: ["Show me your Dance Party — all FOUR dancers this time!"],
      flipCards: [
        {
          frontEmoji: "⚡",
          frontText: "What is an event?",
          backEmoji: "🔔",
          backText: "When something happens, code starts running",
        },
        {
          frontEmoji: "🎩",
          frontText: "Where does a hat block always go?",
          backEmoji: "⬆️",
          backText: "At the very top — nothing fits above it",
        },
        {
          frontEmoji: "🧩",
          frontText: "How many scripts can one sprite have?",
          backEmoji: "♾️",
          backText: "As many as you like — one per hat block",
        },
        {
          frontEmoji: "🐛",
          frontText: "Code does nothing. First check?",
          backEmoji: "👀",
          backText: "Right sprite? Hat block on top?",
        },
      ],
      mascotMessage: "The party was amazing. Today we get SERIOUS about loops. 🔁",
      teacherNotes: {
        questions: [
          "Run your 4th dancer for me. What's its special move?",
          "Which hat block did you use, and why that one?",
        ],
        expectedAnswers: [
          "Any original move — celebrate creativity here.",
          "when flag clicked — so it starts with everyone else!",
        ],
        tips: [
          "Homework check first. Five minutes, both students, on the big screen.",
          "Point at the 'forever' block in their own dance code — you'll use it in 2 slides. Their code is the best teaching material you have.",
        ],
        transition: "Every dancer you built used a loop. Today we meet the whole loop family.",
      },
      bgVariant: "purple",
    },
    {
      id: 2,
      title: "You Already Use Loops",
      emoji: "♻️",
      type: "content",
      content: [
        "Back in Session 4 we learned loops with no computer at all.",
        "Then every animation and every dancer you built used 'forever'.",
        "But 'forever' is only ONE of three loops in Scratch.",
        "Today you get all three — and then we put one INSIDE another.",
      ],
      image: "/images/scratch/s9-control-palette.png",
      mascotMessage: "Three loops. One of them is brand new and slightly scary. 😼",
      teacherNotes: {
        questions: [
          "What did a loop save us from in Session 4?",
          "Which loop have you used most so far?",
        ],
        expectedAnswers: [
          "Writing the same step over and over — 20 times!",
          "forever!",
        ],
        tips: [
          "Open the Control palette live and scroll it slowly. The loops all have the same C-shape — say that out loud, it's a real pattern.",
          "Orange C-shaped blocks = Control. They'll meet 'if' from this same palette in Session 11.",
        ],
        transition: "Loop one: the counter.",
      },
      bgVariant: "default",
    },
    {
      id: 3,
      title: "Loop 1: repeat 10",
      emoji: "🔢",
      type: "content",
      content: [
        "'repeat 10' does the blocks inside it exactly 10 times, then STOPS.",
        "You change the 10 to any number you want.",
        "Use it when you KNOW the count: 4 sides of a square, 3 jumps, 8 petals.",
        "It has a bump at the bottom — so more blocks can follow it.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "repeat 4",
          children: [
            { type: "action", color: "blue", label: "move 100 steps" },
            { type: "action", color: "blue", label: "turn right 90 degrees" },
          ],
        },
        { type: "action", color: "purple", label: "say Done! for 2 seconds" },
      ],
      mascotMessage: "Four moves, four turns, and I'm back where I started. A square! ⬜",
      teacherNotes: {
        questions: [
          "How many blocks run in total inside this loop? Count with me.",
          "When does 'say Done!' happen — during the loop or after it?",
        ],
        expectedAnswers: [
          "8 — 4 moves and 4 turns!",
          "After! The loop finishes first, then it says Done.",
        ],
        tips: [
          "Counting 4 × 2 = 8 out loud is the warm-up for nesting later. Do it properly.",
          "Point at the bump under 'repeat'. That bump is the difference from 'forever' — it's coming up in two slides.",
        ],
        transition: "Loop two: the one you already know.",
      },
      bgVariant: "orange",
    },
    {
      id: 4,
      title: "Loop 2: forever",
      emoji: "♾️",
      type: "content",
      content: [
        "'forever' repeats until you click the red stop sign. It NEVER ends by itself.",
        "Look closely at the bottom of the block: it's FLAT. No bump.",
        "That means nothing can ever go after a forever loop.",
        "Why? Because the code would never reach it. It would wait forever!",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "forever",
          children: [
            { type: "action", color: "purple", label: "next costume" },
            { type: "action", color: "orange", label: "wait 0.2 seconds" },
          ],
        },
      ],
      newWord: {
        word: "Infinite",
        pronunciation: "IN-fin-it",
        meaning: "Never ending, with no stopping point",
        example: "'forever' is an infinite loop — only the stop sign ends it.",
      },
      mascotMessage: "Nothing goes after forever. Because forever never finishes! 🕳️",
      teacherNotes: {
        questions: [
          "Why does the forever block have a flat bottom?",
          "So what's the ONLY way to stop it?",
        ],
        expectedAnswers: [
          "Because nothing can go after it — the code would never get there!",
          "Click the red stop sign!",
        ],
        tips: [
          "Try to attach a block under a 'forever' in the editor. Scratch physically refuses. That refusal is the lesson.",
          "Expecting code after a forever to run is a real bug they will hit. Naming it now saves 10 minutes later.",
        ],
        transition: "Loop three is new. And it's the powerful one.",
      },
      bgVariant: "blue",
    },
    {
      id: 5,
      title: "Loop 3: repeat until",
      emoji: "🎯",
      type: "content",
      content: [
        "'repeat until <>' keeps looping UNTIL a question becomes true.",
        "You don't say how many times. You say WHEN TO STOP.",
        "'Keep walking until you touch the edge.' You don't count the steps!",
        "That pointed hexagon hole is where the question goes.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "repeat until <touching edge ?>",
          children: [
            { type: "action", color: "blue", label: "move 10 steps" },
            { type: "action", color: "orange", label: "wait 0.05 seconds" },
          ],
        },
        { type: "action", color: "purple", label: "say I made it! for 2 seconds" },
      ],
      newWord: {
        word: "Condition",
        pronunciation: "kon-DISH-un",
        meaning: "A yes/no question the computer checks",
        example: "'touching edge?' is the condition that stops the loop.",
      },
      mascotMessage: "I don't count my steps. I just walk until I hit the wall. 🧱",
      teacherNotes: {
        questions: [
          "'Keep eating until the plate is empty.' How many bites is that?",
          "Which Session 3 word is 'touching edge?' an example of?",
        ],
        expectedAnswers: [
          "You don't know! It depends — you just stop when it's empty.",
          "A condition — a yes/no question!",
        ],
        tips: [
          "Real-life 'until' examples first, blocks second: fill the glass until full, walk until the traffic light turns red.",
          "The hexagon shape only accepts hexagon blocks. Show them the shape rule now — Session 11 depends on it.",
          "Watch for a condition that's ALREADY true (sprite starts on the edge) — then the loop runs zero times. Confusing and worth demoing.",
        ],
        transition: "Three loops. So which one do you pick?",
      },
      bgVariant: "green",
    },
    {
      id: 6,
      title: "Which Loop Do I Pick?",
      emoji: "🤷",
      type: "content",
      content: [
        "Do you KNOW the number of times? → repeat 10",
        "Should it NEVER stop? → forever",
        "Should it stop when something HAPPENS? → repeat until",
        "That's the whole decision. Three questions, three loops.",
      ],
      flipCards: [
        {
          frontEmoji: "⬜",
          frontText: "Draw a square: which loop?",
          backEmoji: "🔢",
          backText: "repeat 4 — you know the count!",
        },
        {
          frontEmoji: "🐱",
          frontText: "Animate a walking cat: which loop?",
          backEmoji: "♾️",
          backText: "forever — it should never stop walking",
        },
        {
          frontEmoji: "🚶",
          frontText: "Walk to the edge: which loop?",
          backEmoji: "🎯",
          backText: "repeat until touching edge",
        },
        {
          frontEmoji: "🎂",
          frontText: "Blow out 9 candles: which loop?",
          backEmoji: "🔢",
          backText: "repeat 9 — the number is right there!",
        },
      ],
      mascotMessage: "Pick the wrong loop and I either stop too soon or never stop. 😵",
      teacherNotes: {
        questions: [
          "Climb stairs until you reach the top — which loop?",
          "Could you draw a square with 'repeat until' instead?",
        ],
        expectedAnswers: [
          "repeat until!",
          "You could, but it's much harder — repeat 4 is the right tool.",
        ],
        tips: [
          "Do the cards as a fast game — they answer, THEN you flip.",
          "'Right tool for the job' is the real lesson. Both answers can work; one is clearly better.",
        ],
        transition: "Now the big idea of today: a loop inside a loop.",
      },
      bgVariant: "purple",
    },
    {
      id: 7,
      title: "Loops Inside Loops: Nesting",
      emoji: "🪆",
      type: "content",
      content: [
        "You can put a whole loop INSIDE another loop. That's called nesting.",
        "The INNER loop finishes completely on every single turn of the outer loop.",
        "repeat 3 [ repeat 4 [ move ] ] → the move happens 3 × 4 = 12 times!",
        "Like a wardrobe: 3 drawers, 4 socks in each. 12 socks.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "repeat 8",
          children: [
            {
              type: "wrapper",
              color: "orange",
              label: "repeat 4",
              children: [
                { type: "action", color: "blue", label: "move 50 steps" },
                { type: "action", color: "blue", label: "turn right 90 degrees" },
              ],
            },
            { type: "action", color: "blue", label: "turn right 45 degrees" },
          ],
        },
      ],
      newWord: {
        word: "Nested",
        pronunciation: "NES-ted",
        meaning: "One thing placed completely inside another",
        example: "A repeat loop inside another repeat loop is a nested loop.",
      },
      mascotMessage: "8 squares, each turned a little. That's a FLOWER. Watch. 🌸",
      teacherNotes: {
        questions: [
          "How many 'move' blocks run in total here? Work it out.",
          "The inner loop draws a square. So what does the outer loop do?",
        ],
        expectedAnswers: [
          "8 × 4 = 32!",
          "It draws that square 8 times, turning 45 degrees between each one.",
        ],
        tips: [
          "Count 8 × 4 = 32 out loud together. Nesting clicks through arithmetic, not explanation.",
          "The 'turn 45' is OUTSIDE the inner loop but INSIDE the outer one. Point at it. That single position is the whole lesson — and the bug they're about to make.",
        ],
        transition: "Enough talking. Let's draw a flower.",
      },
      bgVariant: "orange",
    },
    {
      id: 8,
      title: "Quick Quiz!",
      emoji: "❓",
      type: "quiz",
      content: [],
      quiz: {
        question: "repeat 5 [ repeat 3 [ move 10 ] ]. How many times does the sprite move?",
        options: ["5 times", "8 times", "15 times", "3 times"],
        correctIndex: 2,
      },
      mascotMessage: "It's a times sum, not a plus sum! ✖️",
      teacherNotes: {
        questions: ["Why is it 5 × 3 and not 5 + 3?"],
        expectedAnswers: [
          "Because the inner loop runs 3 times on EVERY one of the 5 outer turns!",
        ],
        tips: [
          "If someone answers 8, they added. Don't correct — draw 5 boxes with 3 dots each on the board and let them count.",
        ],
        transition: "Now build it. Squares first, then the flower.",
      },
      bgVariant: "blue",
    },
    {
      id: 9,
      title: "Activity: Square → Flower",
      emoji: "🌸",
      type: "activity",
      content: [
        "We'll draw with the Pen. Add the Pen extension: bottom-left button, choose Pen.",
      ],
      activitySteps: [
        "Click the 'Add Extension' button (bottom-left corner) and pick Pen.",
        "Build: when flag clicked → erase all → pen down.",
        "Add: repeat 4 → inside it: move 50 steps, turn 90 degrees. Run it. A SQUARE!",
        "Change the 90 to 80 and run again. Broken square! Change it back.",
        "Now wrap it: drag a 'repeat 8' around your whole repeat 4 block.",
        "Inside repeat 8, BELOW the repeat 4, add: turn 45 degrees.",
        "Run it. That's a FLOWER made of 8 squares. 🌸",
        "Now break it on purpose: move the 'turn 45' INSIDE the repeat 4. Run. What happened?!",
      ],
      image: "/images/scratch/s9-nested-flower.png",
      mascotMessage: "I drew 32 lines and made a flower. I'm basically an artist now. 🎨",
      teacherNotes: {
        questions: [
          "Why does turn 90 make a square but turn 80 doesn't?",
          "When you moved 'turn 45' inside the small loop, what happened to the drawing?",
        ],
        expectedAnswers: [
          "A square's corners are all 90 degrees — 4 × 90 = 360, a full circle!",
          "It went wrong — a messy shape instead of a flower.",
        ],
        tips: [
          "Dragging a loop AROUND existing blocks is a mouse skill. Demo it slowly — grab the C-block and drop it so the mouth swallows the stack.",
          "Step 8 (breaking it) is the most valuable step of the session. Inside vs outside the inner loop is exactly what nesting means, and the drawing SHOWS the difference.",
          "If the Pen feels like too much, do the same flower with 'stamp' or just let the sprite trace it — the nesting lesson still lands.",
        ],
        transition: "Last challenge, and you're on your own for this one.",
      },
      bgVariant: "green",
    },
    {
      id: 10,
      title: "Block Quiz!",
      emoji: "🧩",
      type: "quiz",
      content: [],
      quiz: {
        question: "You want the sprite to walk to the edge, but you don't know how many steps. Which loop?",
        options: [
          "repeat 10",
          "forever",
          "repeat until <touching edge ?>",
          "wait 1 seconds",
        ],
        correctIndex: 2,
      },
      mascotMessage: "Nobody counts their steps to the wall. 🚶‍♂️",
      teacherNotes: {
        questions: ["Why won't 'repeat 10' work here?"],
        expectedAnswers: [
          "Because 10 steps might be too few or too many — it depends where I start!",
        ],
        tips: [
          "The 'it depends where I start' answer is the point of repeat until. If they say it themselves, they've got it.",
        ],
        transition: "Your task: use repeat until, and prove it works from anywhere.",
      },
      bgVariant: "orange",
    },
    {
      id: 11,
      title: "Your Task: Walk to the Edge",
      emoji: "🚶",
      type: "activity",
      content: [
        "Make your sprite walk to the RIGHT edge using 'repeat until' —",
        "and NOT 'repeat 10'. It must work from anywhere on the stage!",
      ],
      activitySteps: [
        "Start: when flag clicked → go to x: -200 y: 0 (reset — you know why!).",
        "Add: point in direction 90 (so it faces right).",
        "Add: repeat until <touching edge ?>",
        "Inside the loop: move 10 steps, then wait 0.05 seconds.",
        "After the loop (outside it!): say 'I made it!' for 2 seconds.",
        "Run it. Then drag the sprite to the middle and run again. Still works!",
        "Challenge: make it walk back to the left edge afterwards, using a SECOND repeat until.",
      ],
      mascotMessage: "Put the 'say' outside the loop, or I'll shout the whole way there. 📣",
      teacherNotes: {
        questions: [
          "Why does the 'say' block go AFTER the loop, not inside it?",
          "Why did we add a 'go to x y' at the very start?",
        ],
        expectedAnswers: [
          "So it only speaks once — when it arrives!",
          "To reset the position so every run starts the same way.",
        ],
        tips: [
          "The reset-at-the-start habit is now three sessions old (position, size, and here again). Name it as a habit, not a trick.",
          "'touching edge?' is in the blue Sensing palette, not Control. They'll hunt for it — let them, then point.",
          "If the sprite starts ON the edge, the loop runs zero times. Try it deliberately if there's time.",
        ],
        transition: "Both sprites made it across? Let's lock in the words.",
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
          frontEmoji: "🔢",
          frontText: "repeat 10",
          backEmoji: "✋",
          backText: "Runs exactly 10 times, then stops",
        },
        {
          frontEmoji: "♾️",
          frontText: "Infinite",
          backEmoji: "🛑",
          backText: "Never ending — only the stop sign ends 'forever'",
        },
        {
          frontEmoji: "🎯",
          frontText: "repeat until",
          backEmoji: "❓",
          backText: "Loops until a yes/no question becomes true",
        },
        {
          frontEmoji: "🪆",
          frontText: "Nested",
          backEmoji: "✖️",
          backText: "A loop inside a loop — multiply the numbers!",
        },
      ],
      mascotMessage: "Three loops and nesting. You can build almost any pattern now! 🔁",
      teacherNotes: {
        questions: [
          "Which loop has a flat bottom, and why does that matter?",
          "repeat 6 [ repeat 2 [ move ] ] — how many moves?",
        ],
        expectedAnswers: [
          "forever — nothing can go after it because it never finishes.",
          "12!",
        ],
        tips: [
          "Alternate cards between students as usual.",
          "End with one more multiplication question. Nesting needs the repetition.",
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
        "Make ANY repeating pattern you like — using a NESTED loop.",
        "Flowers, stars, staircases, spirals. Your choice!",
      ],
      activitySteps: [
        "Open Scratch, new project, add the Pen extension.",
        "Start with: when flag clicked → erase all → pen down.",
        "Build a shape with an inner 'repeat' (try triangle: repeat 3, move 60, turn 120).",
        "Wrap it in an outer 'repeat' with a turn inside the outer loop only.",
        "Play with the numbers until you love the pattern. Write down the two numbers you used!",
        "Bonus: add 'change pen color by 10' inside the outer loop for a rainbow pattern.",
        "Bring your pattern next session — and tell me the total number of moves.",
      ],
      mascotMessage: "Triangles nested 12 times look INSANE. Try it. 🔺🔺🔺",
      teacherNotes: {
        questions: [
          "What shape will your inner loop draw?",
          "How will you work out the total number of moves?",
        ],
        expectedAnswers: [
          "A triangle / square / line — anything they choose.",
          "Multiply the outer number by the inner number!",
        ],
        tips: [
          "Give them the turn numbers if they ask: triangle 120, square 90, pentagon 72. Discovering 360 ÷ sides is a Session 18 idea, not tonight's.",
          "Asking for the total move count keeps the multiplication idea alive all week.",
          "Next session (10) is Sound & Music — a 4-key piano and a real song. Tell them; it's the most exciting session in the whole course for most kids.",
        ],
        transition: "Next time: your sprites finally make NOISE. Piano, notes and songs!",
      },
      bgVariant: "green",
    },
  ],
};
