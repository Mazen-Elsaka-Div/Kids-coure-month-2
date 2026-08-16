import { SessionData } from "./types";

export const session7: SessionData = {
  id: 7,
  title: "Looks & Animation",
  subtitle: "Costumes, Colours and Talking Cats",
  emoji: "🎭",
  description:
    "We make a sprite look ALIVE: it changes costume, grows, shrinks, changes colour and even talks.",
  color: "#9966FF", // Scratch Looks purple
  slides: [
    {
      id: 1,
      title: "Do You Remember?",
      emoji: "🧠",
      type: "review",
      content: ["Last time we made the cat MOVE. Show me your bouncing homework!"],
      flipCards: [
        {
          frontEmoji: "📍",
          frontText: "Where is the point 0, 0?",
          backEmoji: "🎯",
          backText: "The exact centre of the stage",
        },
        {
          frontEmoji: "↔️",
          frontText: "What does X measure?",
          backEmoji: "🚶",
          backText: "Left and right — minus is left, plus is right",
        },
        {
          frontEmoji: "🪄",
          frontText: "Teleport or smooth: which is 'go to'?",
          backEmoji: "⚡",
          backText: "Instant teleport! 'glide' is the smooth one",
        },
        {
          frontEmoji: "🏓",
          frontText: "What block stops me escaping the stage?",
          backEmoji: "🧱",
          backText: "'if on edge, bounce'",
        },
      ],
      mascotMessage: "I bounced around ALL week. Today I get a makeover! 💅",
      teacherNotes: {
        questions: [
          "Run your bounce homework for me. What three blocks did it need?",
          "What was the square task's sneaky bug?",
        ],
        expectedAnswers: [
          "forever + move + if on edge, bounce!",
          "The turn block says 15 — you have to change it to 90.",
        ],
        tips: [
          "Homework check first, every session, no exceptions — it tells them homework matters.",
          "If the bounce homework failed, debug it together in 3 minutes: it's the same forever loop they need today.",
        ],
        transition: "Your cat can move. But it slides around like a statue on wheels. Let's fix that.",
      },
      bgVariant: "purple",
    },
    {
      id: 2,
      title: "Statue or Alive?",
      emoji: "🗿",
      type: "content",
      content: [
        "Yesterday's cat SLID across the stage. Frozen. Like a statue on wheels.",
        "Today's cat WALKS — legs moving, really walking.",
        "Same stage, same cat. The difference is today's secret: animation.",
      ],
      image: "/images/scratch/walk-script.png",
      mascotMessage: "This little script makes me actually WALK. Wait till you see it run! 🚶",
      teacherNotes: {
        questions: [
          "What's the difference between sliding and walking?",
          "Can you spot a block in this script you already know?",
        ],
        expectedAnswers: [
          "Walking has moving legs! Sliding is frozen.",
          "forever! move 10 steps! wait!",
        ],
        tips: [
          "Run this script live in the editor before explaining anything. The 'whoa' comes first, the how comes after.",
          "Point out they already know 3 of the 4 blocks. Only 'next costume' is new. Confidence booster.",
        ],
        transition: "The secret is one question: how do cartoons work?",
      },
      bgVariant: "default",
    },
    {
      id: 3,
      title: "Today's Mission",
      emoji: "🎯",
      type: "content",
      content: [
        "Make a sprite look ALIVE:",
        "Change its costume. Change its size. Change its colour. Make it TALK.",
        "By the end: your cat walks for real and introduces itself.",
      ],
      mascotMessage: "Costume, size, colour, speech. My four superpowers today! 🦸",
      teacherNotes: {
        questions: ["Which of the four sounds the most fun to you?"],
        expectedAnswers: ["Talking! / Changing colour! (any answer is fine)"],
        tips: [
          "Let each student pick a favourite — you'll use it to keep them hooked during the slow parts.",
          "Under a minute on this slide.",
        ],
        transition: "First superpower: costumes. What IS a costume?",
      },
      bgVariant: "green",
    },
    {
      id: 4,
      title: "What Is a Costume?",
      emoji: "👕",
      type: "content",
      content: [
        "A costume is ONE picture of a sprite.",
        "One sprite can hold MANY costumes — like outfits in a wardrobe.",
        "Look: the cat has TWO costumes. Legs in different positions!",
        "Find them in the Costumes tab, top-left of the editor.",
      ],
      image: "/images/scratch/costumes.webp",
      newWord: {
        word: "Costume",
        pronunciation: "KOS-toom",
        meaning: "One picture of a sprite. A sprite can have many and swap between them",
        example: "The cat has 2 costumes — that's why it can look like it's walking.",
      },
      mascotMessage: "Two costumes: legs together, legs apart. That's all I need! 👟",
      teacherNotes: {
        questions: [
          "How many costumes does the cat have?",
          "What's different between costume 1 and costume 2?",
        ],
        expectedAnswers: ["Two!", "The legs and arms are in different positions!"],
        tips: [
          "Open the Costumes tab live and click between costume 1 and 2 quickly — the cat 'walks' right there in the editor.",
          "Vocabulary check: sprite = the whole character, costume = one picture of it. They WILL mix these up.",
        ],
        transition: "Now the magic: what happens if we swap costumes FAST?",
      },
      bgVariant: "purple",
    },
    {
      id: 5,
      title: "Swapping Fast = Animation",
      emoji: "🎬",
      type: "content",
      content: [
        "Cartoons are just pictures shown fast, one after another.",
        "Every cartoon ever made works like this — Tom & Jerry, everything!",
        "Swap costume 1, costume 2, costume 1, costume 2... FAST...",
        "...and your brain sees WALKING. That is animation.",
      ],
      newWord: {
        word: "Animation",
        pronunciation: "an-i-MAY-shun",
        meaning: "Showing pictures quickly one after another so they look like they're moving",
        example: "Swapping the cat's 2 costumes fast makes a walking animation.",
      },
      mascotMessage: "Your brain gets tricked and I get to WALK. Everybody wins! 🧠",
      teacherNotes: {
        questions: [
          "Have you ever made a flip-book in the corner of a notebook?",
          "What happens if we swap the pictures too slowly?",
        ],
        expectedAnswers: [
          "Yes! Little drawings that move when you flip!",
          "It looks like separate pictures, not movement.",
        ],
        tips: [
          "If you have a sticky-note pad, draw a 5-page flip-book live. Best 2 minutes you'll spend today.",
          "The 'too slow' question plants the seed for the wait 0.2 timing lesson coming in the activity.",
        ],
        transition: "So we need a block that swaps costumes. Meet the purple family!",
      },
      bgVariant: "orange",
    },
    {
      id: 6,
      title: "The Purple Family: Looks",
      emoji: "💜",
      type: "content",
      content: [
        "All of today's blocks are PURPLE — the Looks category.",
        "Motion blocks change WHERE the sprite is.",
        "Looks blocks change HOW IT LOOKS. That's the whole difference.",
      ],
      image: "/images/scratch/looks-palette.webp",
      mascotMessage: "Blue moves my body. Purple changes my style! 💜",
      teacherNotes: {
        questions: [
          "What did the BLUE blocks change about the sprite?",
          "So what do you think PURPLE blocks change?",
        ],
        expectedAnswers: ["Where it is — moving!", "What it looks like!"],
        tips: [
          "Scroll slowly through the whole Looks palette in the editor. Let them shout out what they think each block does.",
          "They only need 6 of these blocks today. The palette is long — tell them it's fine to ignore the rest.",
        ],
        transition: "Block number one: the costume swapper.",
      },
      bgVariant: "purple",
    },
    {
      id: 7,
      title: "Block 1: Next Costume",
      emoji: "🔄",
      type: "content",
      content: [
        "'next costume' swaps to the sprite's next picture.",
        "At the last costume? It loops back to the first.",
        "'switch costume to ...' jumps to ONE exact costume you choose.",
        "next = step forward. switch = jump exactly there.",
      ],
      visualBlocks: [
        { type: "action", color: "purple", label: "next costume" },
        { type: "action", color: "purple", label: "switch costume to costume1" },
      ],
      mascotMessage: "Click 'next costume' a few times, fast. Watch me dance! 🕺",
      teacherNotes: {
        questions: [
          "The cat has 2 costumes and is wearing costume 2. What does 'next costume' do?",
          "Does this remind you of two blocks from last session?",
        ],
        expectedAnswers: [
          "Goes back to costume 1 — it loops around!",
          "Yes! glide (journey) vs go to (jump) — same idea!",
        ],
        tips: [
          "Have them click 'next costume' in the palette rapidly ~10 times. That IS the animation, hand-powered. Then ask: 'what block could do the clicking for us?' — forever!",
          "The next/switch pair mirrors Session 6's glide/go-to pair. Naming these patterns out loud is real computer-science teaching.",
        ],
        transition: "Superpower two: talking!",
      },
      bgVariant: "default",
    },
    {
      id: 8,
      title: "Block 2: Say & Think",
      emoji: "💬",
      type: "content",
      content: [
        "'say Hello! for 2 seconds' — speech bubble that disappears by itself.",
        "Plain 'say Hello!' — bubble stays up FOREVER until you change it.",
        "'think Hmm...' — a thought cloud instead of a speech bubble.",
        "The 'for 2 seconds' version WAITS. The plain one doesn't. Big difference!",
      ],
      image: "/images/scratch/stage-bubble.webp",
      visualBlocks: [
        { type: "action", color: "purple", label: "say Hello! for 2 seconds" },
        { type: "action", color: "purple", label: "say Hello!" },
        { type: "action", color: "purple", label: "think Hmm..." },
      ],
      mascotMessage: "Finally, a way to TALK! I have so much to say... 🗣️",
      teacherNotes: {
        questions: [
          "What's the difference between the two 'say' blocks?",
          "When would you use 'think' instead of 'say'?",
        ],
        expectedAnswers: [
          "One disappears after 2 seconds, the other stays forever!",
          "When the sprite is thinking secretly, not talking out loud.",
        ],
        tips: [
          "Demo the plain 'say' trap now: the bubble that never leaves. To clear it, use 'say' with EMPTY text. That trick will save them later.",
          "Type something silly for the demo bubble. Laughing students remember blocks.",
        ],
        transition: "Superpower three: growing and shrinking!",
      },
      bgVariant: "blue",
    },
    {
      id: 9,
      title: "Block 3: Size",
      emoji: "📏",
      type: "content",
      content: [
        "'change size by 10' — grows a LITTLE from where it is now.",
        "'change size by -10' — shrinks a little. Minus again!",
        "'set size to 100%' — jumps straight back to normal size.",
        "change = little steps. set = jump exactly there. Sound familiar?",
      ],
      visualBlocks: [
        { type: "action", color: "purple", label: "change size by 10" },
        { type: "action", color: "purple", label: "set size to 100 %" },
      ],
      mascotMessage: "Grow me too much and I won't fit on the stage. I've seen things. 🐘",
      teacherNotes: {
        questions: [
          "I click 'change size by 10' five times. Bigger or smaller? By how much?",
          "The cat is HUGE. One block to fix it instantly?",
        ],
        expectedAnswers: ["Bigger! 50 bigger in total!", "set size to 100%!"],
        tips: [
          "This is the third change-vs-set pair (move/go-to, next/switch, change/set size). Ask THEM to spot the pattern this time.",
          "Let them blow the cat up to fill the whole stage. Fun, and it sets up the 'lost giant sprite' homework bug fix.",
        ],
        transition: "Last superpower: COLOUR!",
      },
      bgVariant: "green",
    },
    {
      id: 10,
      title: "Block 4: Colour & Hide",
      emoji: "🌈",
      type: "content",
      content: [
        "'change color effect by 25' — shifts the sprite's colours. Orange cat → green cat → blue cat!",
        "Click it again and again — the colours keep cycling.",
        "'hide' makes the sprite invisible. 'show' brings it back.",
        "Careful: a hidden sprite STAYS hidden until someone says 'show'!",
      ],
      visualBlocks: [
        { type: "action", color: "purple", label: "change color effect by 25" },
        { type: "action", color: "purple", label: "hide" },
        { type: "action", color: "purple", label: "show" },
      ],
      newWord: {
        word: "Effect",
        pronunciation: "ih-FEKT",
        meaning: "A special change to how a sprite looks — like shifting its colours",
        example: "The colour effect turned the orange cat green!",
      },
      mascotMessage: "Green cat, blue cat, purple cat... I contain rainbows! 🌈",
      teacherNotes: {
        questions: [
          "I click 'change color effect by 25' four times. What happens?",
          "My sprite vanished and won't come back. What happened?",
        ],
        expectedAnswers: [
          "The colours shift 4 times — a different-coloured cat each click!",
          "Someone ran 'hide' — you need 'show' to bring it back!",
        ],
        tips: [
          "The vanished-sprite panic WILL happen this week. Teach the rescue now: click 'show' in the palette.",
          "There's a dropdown with more effects (ghost, fisheye...). Mention it exists, but stay on colour today.",
        ],
        transition: "That's all four superpowers. Quiz before we build!",
      },
      bgVariant: "orange",
    },
    {
      id: 11,
      title: "Quick Quiz!",
      emoji: "❓",
      type: "quiz",
      content: [],
      quiz: {
        question: "How does animation work in cartoons AND in Scratch?",
        options: [
          "The computer draws the sprite moving in real time",
          "Pictures are swapped quickly one after another",
          "The sprite is secretly a video",
          "Magic",
        ],
        correctIndex: 1,
      },
      mascotMessage: "Think about the flip-book... 📖",
      teacherNotes: {
        questions: ["What are the pictures called in Scratch?"],
        expectedAnswers: ["Costumes!"],
        tips: [
          "Both students answer on fingers (1-2-3-4) at the same time, on the count of three. No copying.",
        ],
        transition: "Now we build the famous walking cat. Together, step by step.",
      },
      bgVariant: "purple",
    },
    {
      id: 12,
      title: "Activity: The Walking Cat",
      emoji: "🚶",
      type: "activity",
      content: ["Let's build the script from slide 2 — the one that makes the cat REALLY walk."],
      activitySteps: [
        "Start with 'when flag clicked' and drag in a 'forever' loop (yellow, from Control).",
        "Inside the forever: put 'next costume' (purple).",
        "Under it, still inside: 'move 10 steps' (blue).",
        "Under that, still inside: 'wait 1 seconds' — then change the 1 to 0.2.",
        "Run it! Your cat should walk across the stage. Legs and all!",
        "Now BREAK it: pull the 'wait' block out and run again. What happens?!",
        "Put the wait back. Then add 'if on edge, bounce' inside the loop so it never escapes.",
      ],
      image: "/images/scratch/walk-script.png",
      mascotMessage: "Without the wait I turn into a blurry lightning cat. Please keep the wait. 😵‍💫",
      teacherNotes: {
        questions: [
          "Why did the cat go crazy-fast without the wait?",
          "Why 0.2 seconds and not 1 second?",
        ],
        expectedAnswers: [
          "The computer swaps costumes as fast as it can — too fast to see!",
          "1 second is too slow for walking — it looks like slow motion.",
        ],
        tips: [
          "Breaking it on purpose (step 6) is the most important step of the day. Computers do EXACTLY what you say, at computer speed — the wait is how humans keep up.",
          "0.2 might be their first decimal. Frame it simply: 'a fifth of a second — a very short blink'.",
          "The order inside the loop doesn't really matter (costume/move/wait) — if a student built it differently and it works, celebrate it.",
        ],
        transition: "Walking is nice. Now let's get WEIRD with it.",
      },
      bgVariant: "green",
    },
    {
      id: 13,
      title: "Twist: The Growing Rainbow Cat",
      emoji: "🌀",
      type: "content",
      content: [
        "Add TWO more blocks inside your forever loop:",
        "'change color effect by 25' — a new colour every step!",
        "'change size by 2' — it slowly GROWS as it walks!",
        "Run it... and when the cat gets too huge, who remembers the rescue block?",
      ],
      codeSnippet: [
        "when flag clicked",
        "forever",
        "  next costume",
        "  move 10 steps",
        "  change color effect by 25",
        "  change size by 2",
        "  wait 0.2 seconds",
      ],
      mascotMessage: "A giant rainbow walking cat. This is the greatest day of my life. 🌈🐱",
      teacherNotes: {
        questions: [
          "The cat is now gigantic. Which block resets it?",
          "Where would you PUT that block so every run starts normal?",
        ],
        expectedAnswers: [
          "set size to 100%!",
          "At the top, right after the flag — before the forever!",
        ],
        tips: [
          "The answer to question 2 is Session 6's reset lesson wearing a new hat: reset your state at the start. Connect them out loud.",
          "Let them tune the numbers (colour 50? size 5?). Ownership of the numbers = engagement.",
        ],
        transition: "One more quiz, then you build alone.",
      },
      bgVariant: "blue",
    },
    {
      id: 14,
      title: "Block Quiz!",
      emoji: "🧩",
      type: "quiz",
      content: [],
      quiz: {
        question: "You want the speech bubble to disappear on its own after a moment. Which block?",
        options: [
          "say Hello!",
          "think Hmm...",
          "say Hello! for 2 seconds",
          "hide",
        ],
        correctIndex: 2,
      },
      mascotMessage: "One of these bubbles never leaves. Choose wisely! 💬",
      teacherNotes: {
        questions: ["And what does the plain 'say Hello!' do instead?"],
        expectedAnswers: ["The bubble stays up forever until you change it."],
        tips: [
          "Bonus: 'what does hide do to the bubble?' — hides the whole sprite, bubble and all. Sneaky but they can reason it.",
        ],
        transition: "Final task: your cat is going to introduce itself. In style.",
      },
      bgVariant: "orange",
    },
    {
      id: 15,
      title: "Your Task: The Introduction",
      emoji: "🎤",
      type: "activity",
      content: [
        "Make your sprite introduce itself in THREE speech bubbles —",
        "and change colour between every one!",
      ],
      activitySteps: [
        "Start: when flag clicked → set size to 100% (reset first — you know why!).",
        "Add: say 'Hi! I am Cat!' for 2 seconds.",
        "Add: change color effect by 25.",
        "Add: say 'I live in Scratch!' for 2 seconds.",
        "Add: change color effect by 25.",
        "Add: say 'Watch me walk!' for 2 seconds — then make up your OWN third line!",
        "Run it twice. Does it work the same both times?",
      ],
      mascotMessage: "Three lines, three colours. My big theatre debut! 🎭",
      teacherNotes: {
        questions: [
          "Why do we use 'say ... for 2 seconds' and not plain 'say'?",
          "Run it twice — is the colour the same on run 2? Why not?",
        ],
        expectedAnswers: [
          "So each bubble waits its turn and disappears!",
          "No! The colour keeps shifting — nothing resets it. We'd need to clear the effect at the start.",
        ],
        tips: [
          "The run-twice question exposes that colour effect is NOT reset by 'set size to 100%'. If a student is bothered by it, show 'clear graphic effects' as a bonus block. If not, leave it for later.",
          "Let them write their own three lines — funny ones allowed, always. Their words, their program.",
          "If someone uses plain 'say', all bubbles flash past instantly. Don't fix it — ask 'did you SEE all three lines?' and let them find it.",
        ],
        transition: "Both cats introduced? Let's lock in the new words.",
      },
      bgVariant: "green",
    },
    {
      id: 16,
      title: "Mini Game: Costume Chase 🎭",
      emoji: "🎭",
      type: "activity",
      content: [
        "Build a tiny chase game with one sprite and two costumes.",
        "The player clicks the sprite to make it change costume and jump to a new spot.",
        "The goal is not speed — it is making the sprite look alive and react every time.",
      ],
      activitySteps: [
        "Choose a sprite with at least two costumes and delete any extra costumes you do not need.",
        "Add: when this sprite clicked → next costume.",
        "Under it, add: go to random position. Test the chase.",
        "Create a second script: when green flag clicked → switch costume to costume 1.",
        "Add a score-free win rule: catch the sprite five times, then say 'You caught me!'.",
        "Bonus: add a short wait after the costume change so you can see the animation.",
      ],
      mascotMessage: "Every click is a new costume and a new escape route!",
      teacherNotes: {
        questions: [
          "Why does the green flag script switch to costume 1?",
          "What is the difference between next costume and switch costume to?",
        ],
        expectedAnswers: [
          "So every new game starts in the same place.",
          "next moves forward; switch chooses a specific costume.",
        ],
        tips: [
          "Let students test with the flag after catching the sprite; a reset is a core game habit.",
          "If random position is too hard, use glide to a fixed position first and keep the focus on costumes.",
        ],
        transition: "You made a sprite react. Next time, your code will start itself.",
      },
      bgVariant: "orange",
    },
    {
      id: 17,
      title: "Video: Costumes in Action",
      emoji: "🎬",
      type: "video",
      content: ["Let's watch how costumes bring a sprite to life!"],
      videoUrl: "https://www.youtube.com/embed/4ogkMy59aBI",
      mascotMessage: "Watch how fast picture-swapping tricks your eyes! 📺",
      teacherNotes: {
        questions: ["How did the video make the sprite look alive?"],
        expectedAnswers: ["By switching costumes quickly — like a flipbook!"],
        tips: [
          "2-3 minutes of the video is enough — stop once the costume-switch idea lands.",
          "Ask students to blink fast while looking at a walking classmate — same flipbook idea!",
        ],
        transition: "One last bug is hiding in an animation script. Let's catch it.",
      },
      bgVariant: "purple",
    },
    {
      id: 18,
      title: "Bug Hunt: The Frozen Dancer!",
      emoji: "🔍",
      type: "debug",
      content: [],
      debug: {
        scenario:
          "A student made a dancing animation. But the sprite switches costumes SO fast that it looks frozen! One step is missing something important.",
        steps: [
          "when green flag clicked 🏁",
          "forever 🔁",
          "next costume 👕",
          "(nothing else in the loop!) ⬅️",
        ],
        buggyIndex: 3,
        whyItsWrong:
          "There's no WAIT block! The computer swaps costumes millions of times a second — way too fast for human eyes. Add 'wait 0.2 seconds' inside the loop so we can SEE the dance.",
        fixHint: "Computers are fast. Human eyes are slow. What block slows the loop down?",
      },
      mascotMessage: "My dance looks like I'm standing still! What's missing from the loop? 🐰",
      teacherNotes: {
        questions: [
          "Why does the animation look frozen?",
          "Which block fixes it, and where does it go?",
        ],
        expectedAnswers: [
          "The loop runs too fast — our eyes can't see the switches!",
          "'Wait 0.2 seconds' — INSIDE the forever loop!",
        ],
        tips: [
          "This is the exact bug from the wait-block slide earlier — let them discover the connection.",
          "Demo live if possible: remove the wait, watch it 'freeze', add it back.",
        ],
        transition: "Bug caught! Time to collect today's words.",
      },
      bgVariant: "orange",
    },
    {
      id: 19,
      title: "Today's Words",
      emoji: "📚",
      type: "review",
      content: ["Say the answer BEFORE you flip. No peeking!"],
      flipCards: [
        {
          frontEmoji: "👕",
          frontText: "Costume",
          backEmoji: "🖼️",
          backText: "ONE picture of a sprite — a sprite can have many",
        },
        {
          frontEmoji: "🎬",
          frontText: "Animation",
          backEmoji: "⚡",
          backText: "Pictures swapped fast so they look like movement",
        },
        {
          frontEmoji: "🌈",
          frontText: "Effect",
          backEmoji: "🎨",
          backText: "A special look-change, like shifting the colours",
        },
        {
          frontEmoji: "⏱️",
          frontText: "Why does the loop need a wait?",
          backEmoji: "🐢",
          backText: "So humans can SEE it — computers are too fast!",
        },
      ],
      mascotMessage: "Costume, animation, effect. Say them at dinner tonight! 🍽️",
      teacherNotes: {
        questions: [
          "Which change-vs-set pairs do we know now?",
          "What's the difference between a sprite and a costume?",
        ],
        expectedAnswers: [
          "move/go-to, next/switch costume, change/set size!",
          "The sprite is the whole character; a costume is one picture of it.",
        ],
        tips: [
          "Alternate the cards between students, like Session 6.",
          "The change-vs-set pattern question is the deepest one — give it time.",
        ],
        transition: "One last thing before you go: this week's mission.",
      },
      bgVariant: "purple",
    },
    {
      id: 20,
      title: "Homework Mission",
      emoji: "🏠",
      type: "homework",
      content: [
        "Animate ANY sprite so it really looks like it is walking (or flying, or swimming!).",
        "Pick a NEW sprite from the library — many have more than 2 costumes!",
      ],
      activitySteps: [
        "Open scratch.mit.edu and start a new project.",
        "Add a new sprite from the library — check its Costumes tab. More costumes = smoother animation!",
        "Build the walking loop: forever → next costume → move 10 steps → wait 0.2.",
        "Add 'if on edge, bounce' so it never escapes.",
        "Bonus: give it a speech bubble when the flag is clicked, BEFORE the walk starts.",
        "Show me your animated sprite at the start of next session!",
      ],
      mascotMessage: "Try the parrot — 2 costumes, flapping wings, it FLIES! 🦜",
      teacherNotes: {
        questions: [
          "Which sprite are you thinking of animating?",
          "What will you do if it moves too fast?",
        ],
        expectedAnswers: [
          "The parrot! The dinosaur! (any is fine)",
          "Make the wait bigger!",
        ],
        tips: [
          "Suggest sprites with good costume sets: Parrot (flies), Dinosaur4 (walks), Butterfly, Shark. Avoid single-costume sprites — no animation possible!",
          "Next session (8) is Events + PROJECT 1: Dance Party. Their animated sprite can join the party — tell them that, it doubles homework motivation.",
        ],
        transition: "Next time: your code starts ITSELF — and we build our first real PROJECT!",
      },
      bgVariant: "blue",
    },
  ],
};
