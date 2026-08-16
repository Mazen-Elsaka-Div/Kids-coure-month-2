import { SessionData } from "./types";

export const session8: SessionData = {
  id: 8,
  title: "Events + Project 1",
  subtitle: "Code That Starts All By Itself — Dance Party!",
  emoji: "🎉",
  description:
    "Yellow hat blocks make code start on its own. Then we build our FIRST real project: a Dance Party.",
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
          "If someone's sprite had only one costume, that IS the lesson: no second picture, no animation. Fix it live by picking a new sprite.",
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
        "So how does the code know when to start? That's today's whole secret.",
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
        transition: "Let's meet the four hats you'll use most.",
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
          "The traffic-light callback is worth the 20 seconds — it ties Session 3 to real code.",
        ],
        transition: "Hat two: the keyboard.",
      },
      bgVariant: "default",
    },
    {
      id: 6,
      title: "Hat 2: Key Pressed",
      emoji: "⌨️",
      type: "content",
      content: [
        "'when space key pressed' — the code runs when you tap that key.",
        "Click the little dropdown and you can choose ANY key: space, arrows, a, b, c...",
        "One sprite can have a different script for every key.",
        "This is how every game you've ever played is controlled!",
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
          label: "when right arrow key pressed",
          children: [{ type: "action", color: "blue", label: "move 10 steps" }],
        },
      ],
      mascotMessage: "Press space, I grow. Press the arrow, I run. I'm a keyboard cat! 🎹",
      teacherNotes: {
        questions: [
          "How do you move a character in a game you play at home?",
          "Could space make the cat jump AND the dog bark at the same time?",
        ],
        expectedAnswers: [
          "Arrow keys! WASD! A controller!",
          "Yes! Both sprites can have a 'when space pressed' hat.",
        ],
        tips: [
          "Two sprites reacting to the SAME key is a big idea — it's the seed of Session 15's broadcast lesson. Plant it, don't dig it up.",
          "Careful: keyboard hats don't fire while you're typing in a text box. Rare, but it confuses kids when it happens.",
        ],
        transition: "Hat three: clicking on the sprite itself.",
      },
      bgVariant: "blue",
    },
    {
      id: 7,
      title: "Hat 3 & 4: Clicks and Backdrops",
      emoji: "🖱️",
      type: "content",
      content: [
        "'when this sprite clicked' — the player clicks the CHARACTER, not the flag.",
        "That's how you make a button, or a character who talks when you poke it.",
        "'when backdrop switches to ...' — starts code when the scene changes.",
        "Perfect for stories: new scene, new actions.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when this sprite clicked",
          children: [
            { type: "action", color: "purple", label: "say Ouch! for 1 seconds" },
            { type: "action", color: "purple", label: "change color effect by 25" },
          ],
        },
      ],
      mascotMessage: "Click me directly and I'll yelp. Please be gentle. 🐱",
      teacherNotes: {
        questions: [
          "Which hat would you use to make a 'START GAME' button?",
          "Which one is useful for telling a story with 3 scenes?",
        ],
        expectedAnswers: [
          "when this sprite clicked!",
          "when backdrop switches to!",
        ],
        tips: [
          "Demo 'when this sprite clicked' on the cat right now — the instant feedback is a crowd-pleaser.",
          "Backdrop switching is mostly Session 15 material. One sentence here is enough; don't build with it today.",
        ],
        transition: "Now the most important slide of the day. This one visual IS the lesson.",
      },
      bgVariant: "purple",
    },
    {
      id: 8,
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
          "This is the moment to warn about the #1 Scratch bug: building code on the WRONG SPRITE. Say it now, and say it again during the project: 'look at the sprite pane — is the right one highlighted?'",
        ],
        transition: "Quiz time. Then we throw a party.",
      },
      bgVariant: "green",
    },
    {
      id: 9,
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
        transition: "Right. Everybody up. We are building a DANCE PARTY.",
      },
      bgVariant: "orange",
    },
    {
      id: 10,
      title: "Activity: Three Dancers",
      emoji: "💃",
      type: "activity",
      content: ["Let's build three sprites that all dance the moment the flag is clicked."],
      activitySteps: [
        "Add 3 sprites from the library. Try Cassy, Champ99 or Anina — they have great dance costumes!",
        "Click sprite 1 in the sprite pane. CHECK it's highlighted before you build!",
        "Sprite 1: when flag clicked → forever → next costume → wait 0.3.",
        "Click sprite 2. Build: when flag clicked → forever → turn 15 degrees → wait 0.2.",
        "Click sprite 3. Build: when flag clicked → forever → change size by 10 → wait 0.2 → change size by -10 → wait 0.2.",
        "Click the green flag ONCE. All three dance together!",
        "Now add to sprite 1: a second script — when this sprite clicked → say 'You found me!' for 2 seconds.",
      ],
      mascotMessage: "One flag click, three dancers moving. Best party in Scratch! 🕺💃🎉",
      teacherNotes: {
        questions: [
          "Why did all three start at exactly the same time?",
          "Sprite 3 grows then shrinks. What would happen without the waits?",
        ],
        expectedAnswers: [
          "They all have the same 'when flag clicked' hat!",
          "It would flicker so fast you couldn't see it.",
        ],
        tips: [
          "Repeat the sprite-pane check before EVERY sprite. If code lands on the wrong sprite, don't just fix it — show them the symptom first: 'the wrong character is dancing'.",
          "Different waits per dancer (0.3 / 0.2) stop the party looking robotic. Let them tune their own numbers.",
          "Sprite 3's grow-shrink pair is a great preview of Session 9's counted loops.",
        ],
        transition: "You've built it together. Now build your OWN — this is your first real project.",
      },
      bgVariant: "blue",
    },
    {
      id: 11,
      title: "Block Quiz!",
      emoji: "🧩",
      type: "quiz",
      content: [],
      quiz: {
        question: "You want the cat to talk when the player clicks ON THE CAT. Which hat?",
        options: [
          "when green flag clicked",
          "when space key pressed",
          "when this sprite clicked",
          "when backdrop switches to",
        ],
        correctIndex: 2,
      },
      mascotMessage: "Clicking me is different from clicking the flag! 👆",
      teacherNotes: {
        questions: ["And which hat would a 'press space to jump' game need?"],
        expectedAnswers: ["when space key pressed!"],
        tips: [
          "Quick-fire round: call out a situation, they shout the hat. Ten seconds each, five situations.",
        ],
        transition: "Project time. This one goes on your list of finished projects.",
      },
      bgVariant: "purple",
    },
    {
      id: 12,
      title: "PROJECT 1: Dance Party",
      emoji: "🎊",
      type: "activity",
      content: [
        "Your first COMPLETE project. Everything you know, in one place.",
        "Backdrop + 3 dancers + one surprise sprite that reacts to a click.",
      ],
      activitySteps: [
        "New project. Name it 'Dance Party' at the top.",
        "Pick a fun backdrop — try Party, Spotlight or Concert.",
        "Delete the default cat if you don't want it. Add 3 dancer sprites of your choice.",
        "Give EACH dancer its own 'when flag clicked' script — and a DIFFERENT move for each one.",
        "Every dancer's forever loop needs a wait, or it will blur. Use different waits!",
        "Add one more sprite with 'when this sprite clicked' → say something funny.",
        "Bonus: add 'start sound pop' inside one dancer's loop (copy it exactly — sound is Session 10!).",
        "Click the flag. Watch your party. Fix anything that looks wrong.",
      ],
      image: "/images/scratch/s8-dance-party.png",
      mascotMessage: "Your FIRST finished project. Screenshot it. Show your family! 🏆",
      teacherNotes: {
        questions: [
          "One dancer isn't moving. What are the first two things you check?",
          "Which sprite was highlighted when you built that script?",
        ],
        expectedAnswers: [
          "Does it have a hat block? Is the code on the right sprite?",
          "(This question fixes about 80% of all their bugs.)",
        ],
        tips: [
          "30 minutes minimum. Do NOT rush this — a finished project is worth more than three new blocks.",
          "Insist on three DIFFERENT moves. 'Everyone spins' means they copied instead of thinking.",
          "Debug by asking questions, never by grabbing the mouse. Hands behind your back if you must.",
          "Make them save. Then have each student present their party for 60 seconds — presenting is a skill they'll need in Session 20.",
        ],
        transition: "Both parties running? Let's lock in today's words.",
      },
      bgVariant: "green",
    },
    {
      id: 13,
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
          frontEmoji: "🎩",
          frontText: "Why is a hat block curved on top?",
          backEmoji: "🚫",
          backText: "So nothing can go above it — it's always first",
        },
        {
          frontEmoji: "🧩",
          frontText: "Script",
          backEmoji: "🔗",
          backText: "One stack of blocks starting with a hat block",
        },
        {
          frontEmoji: "🐛",
          frontText: "My code does nothing. First check?",
          backEmoji: "👀",
          backText: "Is it on the right SPRITE? And does it have a hat?",
        },
      ],
      mascotMessage: "Event, trigger, script. Three real programmer words. You own them now! 🎓",
      teacherNotes: {
        questions: [
          "How is an event like the IF from Session 3?",
          "How many scripts can one sprite have?",
        ],
        expectedAnswers: [
          "It's an IF that keeps asking forever — 'has the flag been clicked yet?'",
          "As many as you want — one per hat block!",
        ],
        tips: [
          "Alternate cards between students, same as previous sessions.",
          "The IF-to-event connection is the deepest idea of the session. Give it a full minute.",
        ],
        transition: "One last thing: this week's mission.",
      },
      bgVariant: "purple",
    },
    {
      id: 14,
      title: "Homework Mission",
      emoji: "🏠",
      type: "homework",
      content: [
        "Add a FOURTH dancer to your party — with a move nobody else has!",
        "It must start on the green flag, just like the others.",
      ],
      activitySteps: [
        "Open your saved Dance Party project.",
        "Add a new sprite from the library.",
        "Give it 'when flag clicked' → forever → its own move → wait.",
        "The move must be NEW: nobody else's. Try combining two blocks!",
        "Bonus: give your new dancer a second script with 'when space key pressed'.",
        "Show me the whole party next session — all four dancers!",
      ],
      mascotMessage: "Combine 'move' and 'change color effect' for a glowing runner. You're welcome. ✨",
      teacherNotes: {
        questions: [
          "What move will your 4th dancer have?",
          "What will you check first if it doesn't move?",
        ],
        expectedAnswers: [
          "A flip! Sliding! Glowing! (any original idea is great)",
          "The hat block, and whether I'm on the right sprite!",
        ],
        tips: [
          "Combining two Looks/Motion blocks into one 'move' is the creative stretch here. Suggest it, don't prescribe it.",
          "Next session (9) is Loops for Real: repeat until and nested loops. Tell them we'll be DRAWING with loops — flowers made of squares. It builds anticipation.",
        ],
        transition: "Next time: loops that count, loops that wait for an answer, and loops inside loops!",
      },
      bgVariant: "blue",
    },
  ],
};
