import { SessionData } from "./types";

export const session9: SessionData = {
  id: 9,
  title: "Sound & Music + Project 1",
  subtitle: "Make Some Noise — Then Throw a Dance Party",
  emoji: "🎵",
  description:
    "Sounds, notes and volume, a 4-key piano, and then their first COMPLETE project: a Dance Party with real music.",
  color: "#CF63CF", // Scratch Sound purple
  slides: [
    {
      id: 1,
      title: "Do You Remember?",
      emoji: "🧠",
      type: "review",
      content: ["Show me your nested-loop pattern! And tell me the total number of moves."],
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
          frontEmoji: "🪆",
          frontText: "repeat 4 [ repeat 5 [ move ] ] = ?",
          backEmoji: "✖️",
          backText: "20 moves — multiply, don't add!",
        },
        {
          frontEmoji: "♾️",
          frontText: "Why can nothing go after 'forever'?",
          backEmoji: "🕳️",
          backText: "Because forever never finishes — the code never gets there",
        },
      ],
      mascotMessage: "Beautiful patterns. But they were SILENT. Today we fix that. 🔊",
      teacherNotes: {
        questions: [
          "What shape did your inner loop draw, and what were your two numbers?",
          "Did anyone try the rainbow pen bonus?",
        ],
        expectedAnswers: [
          "Triangle with repeat 3 and repeat 12 — any pair is fine as long as they know both numbers.",
          "Hopefully! 'change pen color by 10' inside the outer loop.",
        ],
        tips: [
          "Homework check first, five minutes. Insist they say the multiplication out loud — that's the bit that needed a week to settle.",
          "Today is another double: sound in the first half, their first finished project in the second. The project needs 30 minutes minimum, so keep the sound teaching tight.",
        ],
        transition: "Everything you've built so far has been a silent movie. Let's add the soundtrack.",
      },
      bgVariant: "purple",
    },
    {
      id: 2,
      title: "Programs Can Make Noise",
      emoji: "🔊",
      type: "content",
      content: [
        "Think of any game you love. Now imagine it with the sound turned off.",
        "Boring, right? Sound is half of what makes a game feel alive.",
        "Every sprite in Scratch can carry its own sounds — like it carries costumes.",
        "Costumes are what a sprite LOOKS like. Sounds are what it SOUNDS like.",
      ],
      image: "/images/scratch/sounds.webp",
      mascotMessage: "I've been meowing on the inside for eight whole sessions. 😿",
      teacherNotes: {
        questions: [
          "What sounds does a game you play make?",
          "The cat sprite already has one sound built in. Guess what it is.",
        ],
        expectedAnswers: [
          "Jump sounds, coin sounds, music, footsteps, explosions!",
          "Meow!",
        ],
        tips: [
          "Turn the room speakers on and check the volume BEFORE this session starts. A silent sound lesson is a disaster.",
          "The costumes-are-looks / sounds-are-audio parallel is the whole mental model. Say it once, clearly.",
        ],
        transition: "So where do the sounds live? Third tab, top-left.",
      },
      bgVariant: "default",
    },
    {
      id: 3,
      title: "The Sounds Tab",
      emoji: "🎧",
      type: "content",
      content: [
        "Top-left of the screen, third tab: Code, Costumes, SOUNDS.",
        "Bottom-left button 'Choose a Sound' opens a huge library — pop, boing, drum, birds.",
        "There's a microphone button too. You can RECORD your own voice.",
        "Whatever you add here appears in the dropdown of every sound block.",
      ],
      newWord: {
        word: "Library",
        pronunciation: "LY-bra-ree",
        meaning: "A ready-made collection you can pick from",
        example: "The sound library has hundreds of sounds — you don't have to make your own.",
      },
      mascotMessage: "Record yourself saying 'ouch' and put it on the cat. Trust me. 🎤",
      teacherNotes: {
        questions: [
          "Which tab do you click to add a new sound?",
          "If a sound isn't in your dropdown list, what did you forget?",
        ],
        expectedAnswers: [
          "The Sounds tab!",
          "To add it to THAT sprite in the Sounds tab first.",
        ],
        tips: [
          "The 'sound not in the dropdown' bug is guaranteed today. Sounds belong to ONE sprite, exactly like costumes. Say it now and you'll only have to say it twice more.",
          "Let them record one silly sound each. It costs two minutes and buys you their full attention for the rest of the session.",
        ],
        transition: "Now the two sound blocks — and the difference between them matters enormously.",
      },
      bgVariant: "blue",
    },
    {
      id: 4,
      title: "The Big Difference: until done",
      emoji: "⏳",
      type: "content",
      content: [
        "'play sound Meow until done' — STOPS and waits for the sound to finish.",
        "'start sound Meow' — starts it and immediately carries on to the next block.",
        "One waits. One doesn't. That is the entire lesson.",
        "Inside a dance loop you want 'start sound' — or your dancer freezes every beat!",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when 🚩 clicked",
          children: [
            { type: "action", color: "pink", label: "play sound Meow until done" },
            { type: "action", color: "purple", label: "say Finished meowing!" },
          ],
        },
        {
          type: "wrapper",
          color: "orange",
          label: "forever",
          children: [
            { type: "action", color: "pink", label: "start sound Drum" },
            { type: "action", color: "purple", label: "next costume" },
            { type: "action", color: "orange", label: "wait 0.3 seconds" },
          ],
        },
      ],
      newWord: {
        word: "Until done",
        pronunciation: "un-TIL dun",
        meaning: "Wait here and do nothing else until this finishes",
        example: "'play sound until done' pauses the script until the sound ends.",
      },
      mascotMessage: "'until done' = I stand still and listen. 'start sound' = I dance while it plays. 💃",
      teacherNotes: {
        questions: [
          "In the first script, when does 'Finished meowing!' appear?",
          "Why is 'start sound' the right choice inside the dancing loop?",
        ],
        expectedAnswers: [
          "Only AFTER the whole meow has played.",
          "Because the sprite needs to keep moving while the sound plays!",
        ],
        tips: [
          "DEMO BOTH. Build one script with 'until done' inside a forever loop next to one with 'start sound'. The 'until done' dancer stutters horribly. That comparison teaches it in five seconds; a paragraph of explanation never will.",
          "Warn them: 'start sound' inside a fast loop restarts the sound constantly and sounds terrible. The fix is a wait long enough for the sound to breathe — they'll need this in the project.",
        ],
        transition: "Quick quiz on that, because you'll need it in ten minutes.",
      },
      bgVariant: "green",
    },
    {
      id: 5,
      title: "Quick Quiz!",
      emoji: "❓",
      type: "quiz",
      content: [],
      quiz: {
        question: "Your dancer must MOVE while a sound plays. Which block?",
        options: [
          "play sound until done",
          "start sound",
          "wait 1 seconds",
          "change volume by 10",
        ],
        correctIndex: 1,
      },
      mascotMessage: "'until done' freezes me. Don't freeze me. 🥶",
      teacherNotes: {
        questions: ["And when WOULD you want 'until done'?"],
        expectedAnswers: [
          "When the sound must finish before the next thing happens — like a countdown, or a line of speech.",
        ],
        tips: [
          "The second question matters more than the quiz. 'until done' isn't the wrong block, it's the wrong block HERE.",
        ],
        transition: "Two more sound blocks, then you build an instrument.",
      },
      bgVariant: "orange",
    },
    {
      id: 6,
      title: "Volume, Notes and Tempo",
      emoji: "🎹",
      type: "content",
      content: [
        "'change volume by -20' makes a sprite quieter. 'set volume to 100' is full blast.",
        "For real music, add the MUSIC extension (bottom-left 'Add Extension' button).",
        "'play note 60 for 0.5 beats' — 60 is middle C. Bigger number = higher note.",
        "'set tempo to 120' decides how fast a beat is. Slow tempo = slow song.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when 🚩 clicked",
          children: [
            { type: "action", color: "green", label: "set tempo to 100" },
            {
              type: "wrapper",
              color: "orange",
              label: "repeat 4",
              children: [
                { type: "action", color: "green", label: "play note 60 for 0.5 beats" },
                { type: "action", color: "green", label: "play note 64 for 0.5 beats" },
              ],
            },
          ],
        },
      ],
      newWord: {
        word: "Tempo",
        pronunciation: "TEM-poh",
        meaning: "How fast the beats of a song go",
        example: "set tempo to 60 is slow and sleepy; 200 is a very fast song.",
      },
      mascotMessage: "Notes plus a repeat loop equals an actual song. You're a composer now. 🎼",
      teacherNotes: {
        questions: [
          "How many notes does this script play in total?",
          "How would you make the whole song slower?",
        ],
        expectedAnswers: [
          "8 — 4 repeats × 2 notes!",
          "Change the tempo to a smaller number.",
        ],
        tips: [
          "Notice the nested-loop maths from last session sneaking back in: 4 × 2 = 8. Point it out; repetition across sessions is what makes it stick.",
          "Extensions are added per-project, not per-sprite — but the blocks then appear for every sprite. They'll ask.",
          "Don't teach note numbers as theory. Let them drag the slider and hear it. Ears first, numbers second.",
        ],
        transition: "Instrument time. Four sprites, four notes.",
      },
      bgVariant: "purple",
    },
    {
      id: 7,
      title: "Activity: 4-Key Piano",
      emoji: "🎹",
      type: "activity",
      content: [
        "Four keys. Four notes. Click a key and it plays — and lights up.",
      ],
      activitySteps: [
        "New project, delete the cat. Add the Music extension (bottom-left button).",
        "Paint a sprite: click the brush in the sprite pane, draw a tall white rectangle. That's key 1.",
        "Right-click the sprite in the sprite pane → duplicate. Do it 3 times. Now you have 4 keys.",
        "Drag them into a row on the stage so they sit side by side like a real keyboard.",
        "Key 1: when this sprite clicked → play note 60 for 0.5 beats → change color effect by 25.",
        "Key 2: same, but note 62. Key 3: note 64. Key 4: note 65.",
        "Click your keys in order. That's a scale! Now play a tune.",
        "CHALLENGE: give each key a 'when [1/2/3/4] key pressed' hat too, so you can play it from the keyboard.",
      ],
      image: "/images/scratch/s9-piano.png",
      mascotMessage: "Four keys is enough for 'Twinkle Twinkle'. I checked. 🌟",
      teacherNotes: {
        questions: [
          "Why does each key need its OWN script instead of one shared script?",
          "Why does duplicating the sprite save so much time?",
        ],
        expectedAnswers: [
          "Because each one is a different sprite and plays a different note!",
          "It copies the drawing AND the code — you only change the note number.",
        ],
        tips: [
          "Duplicate-then-edit is a genuine professional habit. Name it: 'build one properly, then copy it'.",
          "Duplicating AFTER writing key 1's script saves them three quarters of the work. Sequence it that way deliberately.",
          "The colour-change on click is not decoration — it's visual feedback, so the player knows the click registered. Say that; it's a real design idea.",
        ],
        transition: "One tiny game to tie sound to everything else you know.",
      },
      bgVariant: "green",
    },
    {
      id: 8,
      title: "Mini Game: Sound Reaction",
      emoji: "🥁",
      type: "activity",
      content: [
        "A sprite that reacts to being clicked with a sound, a jump and a colour flash —",
        "and a drum beat looping behind it the whole time.",
      ],
      activitySteps: [
        "New project. Keep the cat. Sounds tab → Choose a Sound → add 'Drum Bass' and 'Boing'.",
        "Script 1: when flag clicked → forever → start sound Drum Bass → wait 0.5 seconds. A heartbeat!",
        "Script 2: when this sprite clicked → start sound Boing.",
        "In script 2, add underneath: repeat 5 → change y by 10 → wait 0.05.",
        "Then add: repeat 5 → change y by -10 → wait 0.05. It jumps and lands!",
        "Run the flag, then click the cat while the drum plays. Two sounds at once!",
        "CHALLENGE: swap 'start sound Boing' for 'play sound Boing until done' and click again. What breaks?",
      ],
      mascotMessage: "Drum in the background, boing when you poke me. I'm a whole band. 🎺",
      teacherNotes: {
        questions: [
          "Two sounds played at the same time. How is that possible?",
          "In the challenge, why does the jump start late?",
        ],
        expectedAnswers: [
          "They're in two different scripts, both running at once!",
          "Because 'until done' waits for the whole boing to finish before jumping.",
        ],
        tips: [
          "The challenge step is the assessment for the whole first half. If they can explain the delay, 'until done' has landed properly.",
          "Two scripts running simultaneously is worth naming out loud — it's the same idea as Session 8's many-scripts slide, now doing something audible.",
          "Keep this to 10 minutes. The project is the priority today.",
        ],
        transition: "Right. Everything you know, in one place. Time for your FIRST real project.",
      },
      bgVariant: "orange",
    },
    {
      id: 9,
      title: "What Makes a Project 'Finished'?",
      emoji: "🏁",
      type: "content",
      content: [
        "So far you've built little experiments. A PROJECT is different.",
        "A project is finished when somebody ELSE can press the green flag and enjoy it.",
        "That means: it starts on its own, it doesn't crash, and it has a name.",
        "Today's project uses everything: events, loops, animation and sound.",
      ],
      newWord: {
        word: "Project",
        pronunciation: "PROJ-ekt",
        meaning: "A finished program that someone else can use without your help",
        example: "Your Dance Party is a project — press the flag and it just works.",
      },
      mascotMessage: "If you have to explain it before they press play, it's not finished yet. 🎬",
      teacherNotes: {
        questions: [
          "What's the difference between an experiment and a project?",
          "What's the very first thing a stranger will do with your project?",
        ],
        expectedAnswers: [
          "A project works on its own, for anyone — an experiment is just for testing.",
          "Press the green flag!",
        ],
        tips: [
          "This slide is 90 seconds, no longer. Its only job is to raise the bar before they build.",
          "Write the three rules on the board and leave them there for the whole build: starts on the flag / doesn't crash / has a name.",
        ],
        transition: "Backdrop, three dancers, music. Go.",
      },
      bgVariant: "default",
    },
    {
      id: 10,
      title: "PROJECT 1: Dance Party",
      emoji: "🎊",
      type: "activity",
      content: [
        "Your first COMPLETE project. Backdrop + 3 dancers + music +",
        "one surprise sprite that reacts when you click it.",
      ],
      activitySteps: [
        "New project. Name it 'Dance Party' in the box at the top.",
        "Pick a fun backdrop — try Party, Spotlight or Concert.",
        "Delete the cat if you don't want it. Add 3 dancer sprites — Cassy, Champ99 and Anina have great costumes.",
        "Click a sprite in the sprite pane. CHECK it's highlighted before you build anything!",
        "Dancer 1: when flag clicked → forever → next costume → wait 0.3.",
        "Dancer 2: when flag clicked → forever → turn 15 degrees → wait 0.2.",
        "Dancer 3: when flag clicked → forever → change size by 10 → wait 0.2 → change size by -10 → wait 0.2.",
        "MUSIC (required!): pick ONE dancer. Sounds tab → add 'Dance Around'. Then: when flag clicked → forever → play sound Dance Around until done.",
        "Add a 4th sprite: when this sprite clicked → start sound Pop → say something funny for 2 seconds.",
        "Click the flag. Watch your party. Fix anything that looks or sounds wrong. Then SAVE.",
      ],
      image: "/images/scratch/s8-dance-party.png",
      mascotMessage: "Your FIRST finished project. Screenshot it. Show your family! 🏆",
      teacherNotes: {
        questions: [
          "One dancer isn't moving. What are the first two things you check?",
          "For the background music we used 'until done' inside a forever loop. Why is that the right choice HERE?",
        ],
        expectedAnswers: [
          "Does it have a hat block? Is the code on the right sprite?",
          "Because the song should finish before it starts again — otherwise it would restart every loop and stutter!",
        ],
        tips: [
          "30 minutes minimum. Do NOT rush this — a finished project is worth more than three new blocks.",
          "Step 8 is the cleverest thing in the session: 'until done' inside 'forever' is exactly how you loop a song. It's the opposite of the dance-move advice, and that contrast is the lesson. Make them explain it back to you.",
          "Insist on three DIFFERENT moves. 'Everyone spins' means they copied instead of thinking.",
          "Debug by asking questions, never by grabbing the mouse. Hands behind your back if you must.",
          "Finish with a 60-second presentation each. Presenting is a skill they'll need in Session 18.",
        ],
        transition: "Both parties running with music? Let's lock in today's words.",
      },
      bgVariant: "green",
    },
    {
      id: 11,
      title: "Video: Sounds in Scratch",
      emoji: "🎬",
      type: "video",
      content: ["The Scratch Team shows how to add, record, and use sounds!"],
      videoUrl: "https://www.youtube.com/embed/7f9_vjl9yC8",
      mascotMessage: "This one is from the people who MADE Scratch! 📺",
      teacherNotes: {
        questions: ["Did you see a sound trick in the video we didn't try today?"],
        expectedAnswers: ["Recording your own voice! Text to speech!"],
        tips: [
          "Recording their own voice is a huge motivator — mention they can try it at home.",
          "Keep it to 2-3 minutes; today already had a lot of screen time.",
        ],
        transition: "One last bug is hiding in a dance script. Find it!",
      },
      bgVariant: "purple",
    },
    {
      id: 12,
      title: "Bug Hunt: The Frozen Party!",
      emoji: "🔍",
      type: "debug",
      content: [],
      debug: {
        scenario:
          "A student's dancer plays music... but it FREEZES while the song plays, then does one dance move, then freezes again! The party looks broken.",
        steps: [
          "when green flag clicked 🏁",
          "forever 🔁",
          "play sound Dance Music until done ⏳",
          "next costume 👕",
        ],
        buggyIndex: 2,
        whyItsWrong:
          "'Until done' makes the sprite WAIT for the whole song before moving! Inside a dance loop we need 'start sound' so the dancer keeps moving WHILE the music plays.",
        fixHint: "One sound block waits, one doesn't. Which one lets the dancer keep dancing?",
      },
      mascotMessage: "My dancer stands still through the whole song, then hops ONCE! Which block froze the party? 🐰",
      teacherNotes: {
        questions: [
          "Why does the dancer freeze?",
          "When WOULD 'until done' be the right choice?",
        ],
        expectedAnswers: [
          "'Until done' makes it wait for the whole song before the next block!",
          "For background music that should loop fully — like in the Dance Party backdrop!",
        ],
        tips: [
          "This is the exact start-vs-until-done trap from today's key question — now in bug form.",
          "If time allows, demo both versions live. Seeing the freeze is unforgettable.",
        ],
        transition: "Party saved! Let's lock in today's words.",
      },
      bgVariant: "orange",
    },
    {
      id: 13,
      title: "Today's Words",
      emoji: "📚",
      type: "review",
      content: ["Say the answer BEFORE you flip. No peeking!"],
      flipCards: [
        {
          frontEmoji: "⏳",
          frontText: "play sound ... until done",
          backEmoji: "🧍",
          backText: "Waits for the sound to finish before the next block",
        },
        {
          frontEmoji: "▶️",
          frontText: "start sound",
          backEmoji: "🏃",
          backText: "Starts it and carries straight on — no waiting",
        },
        {
          frontEmoji: "🎼",
          frontText: "Tempo",
          backEmoji: "🐢",
          backText: "How fast the beats go — small number, slow song",
        },
        {
          frontEmoji: "🎧",
          frontText: "My sound isn't in the dropdown!",
          backEmoji: "🗂️",
          backText: "Add it in the Sounds tab of THAT sprite first",
        },
        {
          frontEmoji: "🏁",
          frontText: "When is a project finished?",
          backEmoji: "🎮",
          backText: "When someone else can press the flag and enjoy it",
        },
      ],
      mascotMessage: "Sound, music, AND a finished project. Today was enormous. 🎓",
      teacherNotes: {
        questions: [
          "Inside a dance loop: start sound or until done? Why?",
          "For looping background music: start sound or until done? Why?",
        ],
        expectedAnswers: [
          "start sound — the dancer must keep moving.",
          "until done — so the song plays fully before repeating.",
        ],
        tips: [
          "Those two questions back to back are the sharpest thing you can ask today. Same choice, opposite answers, because the GOAL is different.",
          "Alternate cards between students as usual.",
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
        "Add a FOURTH dancer to your party — with a move AND a sound nobody else has!",
        "It must start on the green flag, just like the others.",
      ],
      activitySteps: [
        "Open your saved Dance Party project.",
        "Add a new sprite from the library.",
        "Sounds tab: give it a sound of its own from the library.",
        "Build: when flag clicked → forever → its own move → start sound → wait.",
        "The move must be NEW: nobody else's. Try combining two blocks!",
        "Bonus: add a second script with 'when space key pressed' that makes it do something silly.",
        "Show me the whole party next session — all four dancers, with music!",
      ],
      mascotMessage: "Combine 'move' and 'change color effect' for a glowing runner. You're welcome. ✨",
      teacherNotes: {
        questions: [
          "What move and what sound will your 4th dancer have?",
          "What will you check first if it doesn't move?",
        ],
        expectedAnswers: [
          "A flip! Sliding! Glowing! Any original idea is great.",
          "The hat block, and whether I'm on the right sprite!",
        ],
        tips: [
          "Combining two Looks/Motion blocks into one 'move' is the creative stretch here. Suggest it, don't prescribe it.",
          "Next session (10) is the big one: they build a REAL GAME. A maze, with arrow keys and walls you can't walk through. Tell them — it's the session they've been waiting for since Session 1.",
        ],
        transition: "Next time: your first actual GAME. Arrow keys, walls, and a way to win!",
      },
      bgVariant: "blue",
    },
  ],
};
