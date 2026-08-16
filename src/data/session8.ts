import { SessionData } from "./types";

export const session8: SessionData = {
  id: 8,
  title: "Events + Loops",
  subtitle: "Code That Starts By Itself — And Repeats By Itself",
  emoji: "⚡",
  description:
    "Two big ideas in one session: yellow hat blocks make code start on its own, and the three loop types make it repeat. Ends with a Traffic Light mini game.",
  color: "#FFBF00", // Scratch Events yellow
  slides: [
    {
      id: 1,
      title: "Do You Remember?",
      emoji: "🧠",
      type: "review",
      content: ["Show me your animated sprite from last week! Walking, flying or swimming?"],
      flipCards: [
        {
          frontEmoji: "👕",
          frontText: "What is a costume?",
          backEmoji: "🖼️",
          backText: "ONE picture of a sprite — a sprite can have many",
        },
        {
          frontEmoji: "🎬",
          frontText: "How does animation work?",
          backEmoji: "⚡",
          backText: "Swap the pictures FAST and your brain sees movement",
        },
        {
          frontEmoji: "⏱️",
          frontText: "Why does the walking loop need a wait?",
          backEmoji: "🐢",
          backText: "So humans can see it — computers are far too fast!",
        },
        {
          frontEmoji: "🌈",
          frontText: "Which block makes an orange cat green?",
          backEmoji: "🎨",
          backText: "'change color effect by 25'",
        },
      ],
      mascotMessage: "I can walk, talk and glow. But I still can't start MYSELF. 😤",
      teacherNotes: {
        questions: [
          "Run your animation homework. Which sprite did you pick and how many costumes did it have?",
          "What number did you use in your 'wait' block?",
        ],
        expectedAnswers: [
          "Parrot / Dinosaur / Shark — 2 or more costumes.",
          "0.2 — or whatever looked right for their sprite.",
        ],
        tips: [
          "Homework first, always. Let each student run theirs on the big screen for 30 seconds.",
          "This is a DOUBLE session: events in the first half, loops in the second. Say that out loud now so they know a second big idea is coming — and keep the first half moving.",
        ],
        transition: "Here's a question nobody has asked yet: HOW does your code start?",
      },
      bgVariant: "purple",
    },
    {
      id: 2,
      title: "How Does Code Start?",
      emoji: "🤔",
      type: "content",
      content: [
        "Until today, you started your code by CLICKING on the blocks. With your finger.",
        "But a real game doesn't work like that. Nobody clicks your blocks to play it.",
        "The player clicks a green flag, or presses a key, or taps a character.",
        "So how does the code know when to start? That's the first secret of today.",
      ],
      image: "/images/scratch/flag-stop.png",
      mascotMessage: "Stop poking my blocks. Give me a proper START button! 🚩",
      teacherNotes: {
        questions: [
          "How did you make your walking cat run last week?",
          "Is that how you start a game on a phone or a console?",
        ],
        expectedAnswers: [
          "I clicked on the blocks!",
          "No! You press play, or tap the screen.",
        ],
        tips: [
          "Do the demo: click the green flag on a script that has NO hat block. Nothing happens. Let the silence sit for a second — that confusion is the hook for the whole session.",
          "Then drag a hat block on top and click the flag again. Instant magic.",
        ],
        transition: "The answer has a name, and it's a word real programmers use every day.",
      },
      bgVariant: "default",
    },
    {
      id: 3,
      title: "Meet the EVENT",
      emoji: "⚡",
      type: "content",
      content: [
        "An EVENT means: 'WHEN this happens, DO that.'",
        "When the flag is clicked → dance. When space is pressed → jump.",
        "Remember Session 3's IF? An event is an IF that never stops asking.",
        "It sits there patiently, waiting and watching, all day long.",
      ],
      newWord: {
        word: "Event",
        pronunciation: "ee-VENT",
        meaning: "Something that happens which makes code start running",
        example: "Clicking the green flag is an event — it starts the program.",
      },
      mascotMessage: "An event is me waiting by the door until someone knocks. 🚪",
      teacherNotes: {
        questions: [
          "'IF it rains, take an umbrella.' Who checks whether it's raining?",
          "So who is watching for the green flag click?",
        ],
        expectedAnswers: [
          "You do — you look outside!",
          "Scratch is! It watches all the time, forever.",
        ],
        tips: [
          "Link it hard to Session 3. An event is not a new idea, it is the IF they already know, wired into the computer permanently.",
          "Real-life events to fire at them fast: doorbell rings, alarm goes off, teacher claps. All 'when X, do Y'.",
        ],
        transition: "In Scratch, events wear a special hat. Literally.",
      },
      bgVariant: "orange",
    },
    {
      id: 4,
      title: "The Yellow Hat Blocks",
      emoji: "🎩",
      type: "content",
      content: [
        "Look at the top of an event block — it's CURVED, like a hat.",
        "That curve means one thing: nothing can ever go above it.",
        "A hat block is the START of your script. The first block, always.",
        "The whole yellow family lives in the Events category.",
      ],
      image: "/images/scratch/events-palette.webp",
      newWord: {
        word: "Trigger",
        pronunciation: "TRIG-er",
        meaning: "The thing that makes an event fire and the code start",
        example: "Pressing the space key is the trigger for the jump script.",
      },
      mascotMessage: "Try putting a block on top of my hat. Go on. It won't stick! 🧢",
      teacherNotes: {
        questions: [
          "Why is the top of the block round instead of having a bump?",
          "So how many hat blocks can one script have?",
        ],
        expectedAnswers: [
          "So nothing can click on top of it!",
          "Exactly ONE — at the very top.",
        ],
        tips: [
          "Let them TRY to attach a block above a hat block. Physically impossible. Scratch teaches this rule better than you can.",
          "Two hats stacked on one script is a classic bug. Show it now so they recognise it later.",
        ],
        transition: "Let's meet the hats you'll use most — starting with the most important block in Scratch.",
      },
      bgVariant: "green",
    },
    {
      id: 5,
      title: "Hat 1: The Green Flag",
      emoji: "🚩",
      type: "content",
      content: [
        "'when green flag clicked' — the most important block in all of Scratch.",
        "This is the PLAY button of your project.",
        "Every single project you ever share needs one of these.",
        "The red STOP sign next to it stops everything instantly.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when 🚩 clicked",
          children: [
            { type: "action", color: "purple", label: "say Let's dance!" },
            { type: "action", color: "blue", label: "move 10 steps" },
          ],
        },
      ],
      mascotMessage: "Green flag = GO. Red sign = FREEZE. Simple as traffic lights! 🚦",
      teacherNotes: {
        questions: [
          "Where have we seen green means go and red means stop before?",
          "What happens if your project has no green flag block at all?",
        ],
        expectedAnswers: [
          "Traffic lights — Session 3!",
          "Nothing starts! You'd have to click the blocks yourself.",
        ],
        tips: [
          "Say the rule out loud and make them repeat it: every project starts with a green flag hat.",
          "The traffic-light callback is worth the 20 seconds — and today's mini game IS a traffic light, so plant it now.",
        ],
        transition: "Three more hats, quickly — then we move on to loops.",
      },
      bgVariant: "default",
    },
    {
      id: 6,
      title: "Hats 2, 3 and 4",
      emoji: "⌨️",
      type: "content",
      content: [
        "'when space key pressed' — the code runs when you tap that key. The dropdown gives you ANY key.",
        "'when this sprite clicked' — the player clicks the CHARACTER, not the flag. That's how you make a button.",
        "'when backdrop switches to ...' — starts code when the scene changes. Perfect for stories.",
        "Four hats. Four different ways for your program to wake up.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when space key pressed",
          children: [{ type: "action", color: "purple", label: "change size by 20" }],
        },
        {
          type: "wrapper",
          color: "orange",
          label: "when this sprite clicked",
          children: [{ type: "action", color: "purple", label: "say Ouch! for 1 seconds" }],
        },
      ],
      mascotMessage: "Press space, I grow. Click me, I yelp. Please be gentle. 🐱",
      teacherNotes: {
        questions: [
          "Which hat would you use to make a 'START GAME' button?",
          "How do you move a character in a game you play at home?",
        ],
        expectedAnswers: [
          "when this sprite clicked!",
          "Arrow keys! WASD! A controller!",
        ],
        tips: [
          "Demo 'when this sprite clicked' on the cat right now — the instant feedback is a crowd-pleaser and costs 15 seconds.",
          "Two sprites reacting to the SAME key is a big idea — it's the seed of Session 13's broadcast lesson. Plant it, don't dig it up.",
          "Backdrop switching is mostly Session 13 material. One sentence is enough; don't build with it today.",
        ],
        transition: "Now the most important slide of the first half. This one visual IS the lesson.",
      },
      bgVariant: "blue",
    },
    {
      id: 7,
      title: "One Sprite, Many Scripts",
      emoji: "🧩",
      type: "content",
      content: [
        "A sprite is NOT limited to one script. It can have many, side by side.",
        "One starts on the flag. One starts on space. One starts on a click.",
        "They all sit in the code area at once, each waiting for its own trigger.",
        "Separate scripts = separate hats. Never stack two hats together!",
      ],
      image: "/images/scratch/s8-many-scripts.png",
      newWord: {
        word: "Script",
        pronunciation: "SKRIPT",
        meaning: "One stack of blocks joined together, starting with a hat block",
        example: "This cat has 3 scripts: one for the flag, one for space, one for clicks.",
      },
      mascotMessage: "Three scripts, three triggers, one very busy cat. 🤹",
      teacherNotes: {
        questions: [
          "How many scripts are on this sprite? How can you tell?",
          "Do they all run at the same moment?",
        ],
        expectedAnswers: [
          "Three — count the yellow hats!",
          "No! Each one waits for its own trigger.",
        ],
        tips: [
          "Counting hats to count scripts is the takeaway. Make them count out loud.",
          "This is the moment to warn about the #1 Scratch bug: building code on the WRONG SPRITE. Say it now, and say it again during every activity: 'look at the sprite pane — is the right one highlighted?'",
        ],
        transition: "Quiz on events. Then we switch to the second half: loops.",
      },
      bgVariant: "green",
    },
    {
      id: 8,
      title: "Quick Quiz!",
      emoji: "❓",
      type: "quiz",
      content: [],
      quiz: {
        question: "Your script has no hat block on top. You click the green flag. What happens?",
        options: [
          "It runs perfectly",
          "Nothing — the code has no trigger",
          "Scratch shows an error message",
          "It runs, but very slowly",
        ],
        correctIndex: 1,
      },
      mascotMessage: "No hat, no start. Remember the silence? 🤫",
      teacherNotes: {
        questions: ["So what's the ONE block every project must have?"],
        expectedAnswers: ["when green flag clicked!"],
        tips: [
          "Both students answer on fingers at the same time, on three. No copying.",
          "Notice Scratch never shows an error — the code just sits there. Silence is Scratch's way of saying 'you forgot the hat'.",
        ],
        transition: "Half time! Events are done. Now: the loop family.",
      },
      bgVariant: "orange",
    },
    {
      id: 9,
      title: "Part 2: You Already Use Loops",
      emoji: "♻️",
      type: "content",
      content: [
        "Back in Session 4 we learned loops with no computer at all.",
        "Then every animation you built used 'forever'.",
        "But 'forever' is only ONE of three loops in Scratch.",
        "You get all three now — and then we put one INSIDE another.",
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
          "Take a two-minute break before this slide. It's a genuine gear change and they need it.",
          "Open the Control palette live and scroll it slowly. The loops all have the same C-shape — say that out loud, it's a real pattern.",
          "Orange C-shaped blocks = Control. They'll meet 'if' from this same palette in Session 10.",
        ],
        transition: "Loop one: the counter.",
      },
      bgVariant: "default",
    },
    {
      id: 10,
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
          "Point at the bump under 'repeat'. That bump is the difference from 'forever' — it's coming up next.",
        ],
        transition: "Loop two: the one you already know.",
      },
      bgVariant: "orange",
    },
    {
      id: 11,
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
      id: 12,
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
          "The hexagon shape only accepts hexagon blocks. Show them the shape rule now — Session 10's maze depends on it completely.",
          "Watch for a condition that's ALREADY true (sprite starts on the edge) — then the loop runs zero times. Confusing and worth demoing.",
        ],
        transition: "Three loops. So which one do you pick?",
      },
      bgVariant: "green",
    },
    {
      id: 13,
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
      id: 14,
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
        transition: "One quiz to prove it, then we draw.",
      },
      bgVariant: "orange",
    },
    {
      id: 15,
      title: "Nesting Quiz!",
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
      id: 16,
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
          "If the Pen feels like too much, do the same flower with 'stamp' — the nesting lesson still lands.",
        ],
        transition: "Last thing you build today puts BOTH halves of the session together.",
      },
      bgVariant: "green",
    },
    {
      id: 17,
      title: "Mini Game: Traffic Light",
      emoji: "🚦",
      type: "activity",
      content: [
        "Events + loops in one tiny game. A light that changes colour forever —",
        "and a key that stops it. Both halves of today, working together.",
      ],
      activitySteps: [
        "New project. Add the 'Ball' sprite — it already has colour costumes. Make it big: set size to 150.",
        "Script 1: when flag clicked → forever → switch costume to green → say 'GO!' → wait 2 seconds.",
        "Inside the same forever, add: switch costume to yellow → say 'Slow down...' → wait 1 seconds.",
        "Still inside it: switch costume to red → say 'STOP!' → wait 2 seconds. Run it. A working traffic light!",
        "Script 2 — a SECOND hat on the same sprite: when space key pressed → stop all.",
        "Test it: click the flag, watch two full cycles, then press space. It freezes.",
        "CHALLENGE: swap the 'forever' for 'repeat until <key space pressed?>' and put 'say Bye!' AFTER the loop. Now it stops itself politely.",
      ],
      mascotMessage: "Green, yellow, red, repeat. I'm a traffic light and I've never felt more useful. 🚥",
      teacherNotes: {
        questions: [
          "How many scripts does your ball have? How do you know?",
          "In the challenge, why does 'say Bye!' only work AFTER a repeat until, and never after a forever?",
        ],
        expectedAnswers: [
          "Two — two yellow hats!",
          "Because forever never finishes, so the code after it is never reached. repeat until DOES finish.",
        ],
        tips: [
          "This is the session's real assessment. If they can build it without help, both halves landed.",
          "The Ball sprite's costumes are named by colour, which makes 'switch costume to' obvious. If they pick a different sprite, they'll need to paint costumes — steer them to Ball.",
          "The challenge step is the payoff of the whole session: it needs an event AND a loop AND the flat-bottom rule, all at once. Don't skip it, even if you have to do it together on the board.",
        ],
        transition: "Two big ideas, one tiny game. Let's lock in the words.",
      },
      bgVariant: "orange",
    },
    {
      id: 18,
      title: "Video: The Loops Song",
      emoji: "🎬",
      type: "video",
      content: ["A fun song about loops — see how many loop types you can spot!"],
      videoUrl: "https://www.youtube.com/embed/oWjiJIoG3nQ",
      mascotMessage: "Sing along — loops are everywhere! 📺",
      teacherNotes: {
        questions: ["Which loops from the song did we learn today?"],
        expectedAnswers: ["Repeat, forever, and repeat until!"],
        tips: [
          "This is a light brain-break after a heavy session — let them enjoy it.",
          "Challenge: raise a hand every time the video shows something repeating.",
        ],
        transition: "Rested? Good. One sneaky bug is waiting for you.",
      },
      bgVariant: "purple",
    },
    {
      id: 19,
      title: "Bug Hunt: The Silent Script!",
      emoji: "🔍",
      type: "debug",
      content: [],
      debug: {
        scenario:
          "A student wrote a script to make the cat spin when the flag is clicked. They press the flag... and NOTHING happens. The blocks are all correct!",
        steps: [
          "(no hat block on top!) ⬅️",
          "repeat 10 🔁",
          "turn 36 degrees ↻",
          "wait 0.1 seconds ⏱️",
        ],
        buggyIndex: 0,
        whyItsWrong:
          "There's no EVENT hat block! Without 'when green flag clicked' on top, the script never knows when to start. Every script needs a hat!",
        fixHint: "Look at the TOP of the script. What kind of block must every script start with?",
      },
      mascotMessage: "I pressed the flag a hundred times and nothing happened! What's missing? 🐰",
      teacherNotes: {
        questions: [
          "Why doesn't the script run when the flag is clicked?",
          "What block family do hat blocks come from?",
        ],
        expectedAnswers: [
          "It has no hat block — nothing tells it to start!",
          "Events — the yellow blocks!",
        ],
        tips: [
          "This mirrors the 'My code does nothing' flip card — the number one real-world beginner bug.",
          "Show a hatless script in Scratch live: clicking the flag truly does nothing.",
        ],
        transition: "Bug found! Now let's lock in today's words.",
      },
      bgVariant: "orange",
    },
    {
      id: 20,
      title: "Today's Words",
      emoji: "📚",
      type: "review",
      content: ["Say the answer BEFORE you flip. No peeking!"],
      flipCards: [
        {
          frontEmoji: "⚡",
          frontText: "Event",
          backEmoji: "🔔",
          backText: "When something happens, code starts running",
        },
        {
          frontEmoji: "🧩",
          frontText: "Script",
          backEmoji: "🔗",
          backText: "One stack of blocks starting with a hat block",
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
        {
          frontEmoji: "🐛",
          frontText: "My code does nothing. First check?",
          backEmoji: "👀",
          backText: "Is it on the right SPRITE? And does it have a hat?",
        },
      ],
      mascotMessage: "Events AND loops in one day. That was a big one. You survived! 🎓",
      teacherNotes: {
        questions: [
          "How is an event like the IF from Session 3?",
          "repeat 6 [ repeat 2 [ move ] ] — how many moves?",
        ],
        expectedAnswers: [
          "It's an IF that keeps asking forever — 'has the flag been clicked yet?'",
          "12!",
        ],
        tips: [
          "Six cards today, not four — alternate between students.",
          "The IF-to-event connection is the deepest idea of the session. Give it a full minute.",
        ],
        transition: "One last thing: this week's mission.",
      },
      bgVariant: "purple",
    },
    {
      id: 21,
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
          "Give them the turn numbers if they ask: triangle 120, square 90, pentagon 72. Discovering 360 ÷ sides is a Session 16 idea, not tonight's.",
          "Asking for the total move count keeps the multiplication idea alive all week.",
          "Next session (9) is Sound & Music AND their first full project — a Dance Party with real music. Tell them; it's the most exciting session in the whole course for most kids.",
        ],
        transition: "Next time: your sprites finally make NOISE — and we finish a whole project!",
      },
      bgVariant: "blue",
    },
  ],
};
