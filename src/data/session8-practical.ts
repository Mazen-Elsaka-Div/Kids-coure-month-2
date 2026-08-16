import type { SessionData } from "./types";

/**
 * A standalone practical companion for Session 8.
 * It keeps the same visual slide contract as the course, but focuses on
 * teacher-ready execution rather than introducing a large amount of theory.
 */
export const session8Practical: SessionData = {
  id: 8,
  slug: "8-practical",
  title: "Dance Party — Practical",
  subtitle: "Session 8 Practical · Events in Scratch",
  emoji: "🕺",
  description:
    "A complete, teacher-ready build where students make a tiny dance party and add a click reaction to one dancer.",
  color: "#F59E0B",
  slides: [
    {
      id: 1,
      title: "Mission: Build a Dance Party!",
      emoji: "🎉",
      type: "content",
      content: [
        "Today we will make a real Scratch project.",
        "Three characters will dance when the green flag is clicked.",
        "One character will do something special when we click it.",
        "By the end: another person can play with your project!",
      ],
      mascotMessage: "I have my dancing shoes on. Are your sprites ready?",
      teacherNotes: {
        questions: [
          "What should happen when the party starts?",
          "What could a dancer do when somebody clicks it?",
        ],
        expectedAnswers: [
          "The characters dance / move / change costume.",
          "It can say something, change colour, spin, hide, or do a special move.",
        ],
        tips: [
          "Do not open the editor immediately. First let them imagine the finished party and choose one special reaction.",
          "Tell them that the project has one shared minimum build, but their characters and reactions can be different.",
        ],
        transition: "We already know how to make a sprite move. Today we learn how to make the computer know when to start.",
      },
      bgVariant: "orange",
    },
    {
      id: 2,
      title: "Quick Warm-up: What Can We Already Do?",
      emoji: "🧠",
      type: "review",
      content: [
        "Last session we made a sprite look alive.",
        "We used costumes, movement, speech, colour, and wait.",
        "Can you predict what this script will do?",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "forever",
          children: [
            { type: "action", color: "purple", label: "next costume" },
            { type: "action", color: "blue", label: "move 10 steps" },
            { type: "action", color: "orange", label: "wait 0.2 seconds" },
          ],
        },
      ],
      flipCards: [
        {
          frontEmoji: "👕",
          frontText: "Costume",
          backEmoji: "🖼️",
          backText: "One picture of a sprite",
        },
        {
          frontEmoji: "🔁",
          frontText: "Forever",
          backEmoji: "♾️",
          backText: "Repeat without stopping",
        },
        {
          frontEmoji: "⏱️",
          frontText: "Wait",
          backEmoji: "🐢",
          backText: "Slows the action so we can see it",
        },
      ],
      mascotMessage: "If you remove wait, I become a very blurry dancer!",
      teacherNotes: {
        questions: [
          "Why did we use wait in the walking script?",
          "What happens when next costume is repeated?",
        ],
        expectedAnswers: [
          "So the movement is visible and not too fast.",
          "The sprite changes between its pictures and looks animated.",
        ],
        tips: [
          "Keep this review under 8 minutes. Ask the children to answer before you reveal anything.",
          "If they forgot the blocks, open their Session 7 project or rebuild only the three-block middle, not the whole lesson.",
        ],
        transition: "The dancing code is ready. It only needs a starting signal.",
      },
      bgVariant: "blue",
    },
    {
      id: 3,
      title: "The New Idea: An Event",
      emoji: "🚦",
      type: "content",
      content: [
        "An event is something that happens.",
        "In Scratch: when something happens, start this code.",
        "The yellow hat block is the starting signal.",
        "Today our event is: when the green flag is clicked.",
      ],
      newWord: {
        word: "event",
        pronunciation: "ee-VENT",
        meaning: "Something that happens and starts an action",
        example: "When the flag is clicked, the dancer starts moving.",
      },
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when green flag clicked",
          children: [
            { type: "action", color: "blue", label: "move 10 steps" },
            { type: "action", color: "purple", label: "say Let's dance!" },
          ],
        },
      ],
      mascotMessage: "The flag is my START button!",
      teacherNotes: {
        questions: [
          "What event starts a race?",
          "What event could start a dance party?",
        ],
        expectedAnswers: [
          "Someone says go / a whistle / the timer starts.",
          "Clicking the green flag / pressing a key / clicking a sprite.",
        ],
        tips: [
          "Use a real classroom example: say 'When I clap, stand up.' Clap once and let them act. Then map the clap to the yellow hat block.",
          "Do not define events as a complicated computer-science term. Keep repeating the sentence: when X happens, do Y.",
        ],
        transition: "The flag can start one action, or it can start a whole dance script.",
      },
      bgVariant: "orange",
    },
    {
      id: 4,
      title: "Yellow Hats Go on Top",
      emoji: "🎩",
      type: "content",
      content: [
        "A hat block starts a script.",
        "Nothing goes above the hat.",
        "The blocks underneath belong to that event.",
        "Without a hat, Scratch waits for us to click the script by hand.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when green flag clicked",
          children: [
            {
              type: "wrapper",
              color: "orange",
              label: "forever",
              children: [
                { type: "action", color: "purple", label: "next costume" },
                { type: "action", color: "blue", label: "move 10 steps" },
                { type: "action", color: "orange", label: "wait 0.2 seconds" },
              ],
            },
          ],
        },
      ],
      mascotMessage: "No hat? No automatic start. I learned that the hard way.",
      teacherNotes: {
        questions: [
          "Can we put a move block above the yellow hat?",
          "What happens if we build blocks but do not attach a hat?",
        ],
        expectedAnswers: [
          "No. The hat must be first.",
          "We may have to click the script manually; it will not start with the flag.",
        ],
        tips: [
          "Let one student try to drag a block above the hat. Scratch will not allow it, and the shape becomes the explanation.",
          "Show the difference between clicking a script manually and clicking the green flag. The purpose is to make the flag feel necessary.",
        ],
        transition: "Now we will put the event on a real dancer and make the first party move.",
      },
      bgVariant: "purple",
    },
    {
      id: 5,
      title: "Choose the Party Cast",
      emoji: "🎭",
      type: "activity",
      content: [
        "Open Scratch and create a new project.",
        "Keep the Cat, or choose a character with at least two costumes.",
        "Add two more dancers.",
        "Choose one backdrop for the party.",
        "Click a sprite in the Sprite Pane before writing its code.",
      ],
      activitySteps: [
        "Click the green flag once and stop the project.",
        "Choose a party backdrop, or keep the default backdrop for now.",
        "Add two sprites. Pick characters that look fun when they move.",
        "Click the first dancer so its name and code area are selected.",
        "Run the project once before adding code and tell the teacher which sprite is selected.",
      ],
      mascotMessage: "Three dancers, one stage, zero boring parties!",
      teacherNotes: {
        questions: [
          "Which sprite are you coding right now?",
          "How can you check that before dragging a block?",
        ],
        expectedAnswers: [
          "The sprite highlighted in the Sprite Pane.",
          "Look for the highlighted sprite and its name before coding.",
        ],
        tips: [
          "This is the most important logistics checkpoint. Say aloud: 'Select the sprite, then write its code.'",
          "Do not let them spend 15 minutes decorating. Give them three minutes to choose the cast and promise a decoration round at the end.",
        ],
        transition: "The stage is ready. We will program Dancer One together.",
      },
      bgVariant: "green",
    },
    {
      id: 6,
      title: "Build Dancer One: Start and Dance",
      emoji: "1️⃣",
      type: "activity",
      content: [
        "Select Dancer One.",
        "Add the green-flag event first.",
        "Put a forever loop under it.",
        "Inside forever: next costume, move, wait, and bounce.",
        "Click the flag and watch. Then stop and reset.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when green flag clicked",
          children: [
            {
              type: "wrapper",
              color: "orange",
              label: "forever",
              children: [
                { type: "action", color: "purple", label: "next costume" },
                { type: "action", color: "blue", label: "move 10 steps" },
                { type: "action", color: "orange", label: "if on edge, bounce" },
                { type: "action", color: "orange", label: "wait 0.2 seconds" },
              ],
            },
          ],
        },
      ],
      codeSnippet: [
        "when green flag clicked",
        "forever",
        "  next costume",
        "  move 10 steps",
        "  if on edge, bounce",
        "  wait 0.2 seconds",
      ],
      activitySteps: [
        "Drag `when green flag clicked` into the Code Area.",
        "Attach `forever` underneath the yellow hat.",
        "Place `next costume` inside the loop.",
        "Add `move 10 steps`, then `if on edge, bounce`.",
        "Add `wait 0.2 seconds` at the bottom of the loop.",
        "Click the green flag. The dancer should move and animate.",
      ],
      mascotMessage: "I am dancing! The wait block keeps my moves visible.",
      teacherNotes: {
        questions: [
          "Which block tells Scratch when to begin?",
          "Why are the movement blocks inside forever?",
          "Why did we put wait at the bottom?",
        ],
        expectedAnswers: [
          "When green flag clicked.",
          "So the dancer keeps dancing, not just once.",
          "So we can see each move and costume change.",
        ],
        tips: [
          "Build one block at a time and make everyone click the flag after the first small milestone: flag -> forever -> move.",
          "If the sprite disappears, stop the project and add `go to x: 0 y: 0` above forever. Explain that this resets the starting position.",
          "Keep rotation style left-right if the sprite flips upside down; do not introduce a new concept unless needed to fix the visual problem.",
        ],
        transition: "One dancer is working. Now we will make the party interesting by giving the dancers different moves.",
      },
      bgVariant: "blue",
    },
    {
      id: 7,
      title: "Debug Mission: The Blurry Dancer",
      emoji: "🐞",
      type: "game",
      content: [
        "Stop the project.",
        "Remove the wait block.",
        "Run the project again.",
        "What changed? Why does the animation look strange?",
        "Put wait back and try 0.5 seconds, then 0.1 seconds.",
      ],
      activitySteps: [
        "Make a prediction before removing wait.",
        "Run the project for three seconds.",
        "Describe the bug using your own words.",
        "Put wait back and choose a speed that looks good.",
        "Tell a partner why timing matters in animation.",
      ],
      mascotMessage: "I removed wait and became a blur. Please fix my dance speed!",
      teacherNotes: {
        questions: [
          "Did the code stop working, or did it work too fast?",
          "Which wait value makes the dance look best?",
        ],
        expectedAnswers: [
          "It works too fast; we cannot see the separate actions.",
          "Answers may differ. The important idea is that wait controls timing.",
        ],
        tips: [
          "Do not fix the bug immediately. Give them 30 seconds to observe and explain it.",
          "Connect the bug to Session 2: a bug is a behavior that is not what we wanted, not necessarily a broken computer.",
        ],
        transition: "A good programmer tests, notices, and changes one thing. Now we will add Dancer Two.",
      },
      bgVariant: "orange",
    },
    {
      id: 8,
      title: "Build Dancer Two: A Different Style",
      emoji: "2️⃣",
      type: "activity",
      content: [
        "Select Dancer Two in the Sprite Pane.",
        "Add its own when-green-flag script.",
        "Give it a different move or turn.",
        "Keep the same animation pattern: costume, action, wait.",
        "Run the flag and compare the two dancers.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when green flag clicked",
          children: [
            {
              type: "wrapper",
              color: "orange",
              label: "forever",
              children: [
                { type: "action", color: "purple", label: "next costume" },
                { type: "action", color: "blue", label: "move 7 steps" },
                { type: "action", color: "blue", label: "turn 15 degrees" },
                { type: "action", color: "orange", label: "wait 0.3 seconds" },
              ],
            },
          ],
        },
      ],
      activitySteps: [
        "Click Dancer Two before dragging any block.",
        "Copy the dance pattern by building it again, not by guessing.",
        "Change one action: speed, turn, size, or direction.",
        "Click the flag and observe both scripts running at the same time.",
        "If Dancer Two is too close, drag the sprite on the Stage to a new starting spot.",
      ],
      mascotMessage: "Two scripts can run at the same time. That is a real party!",
      teacherNotes: {
        questions: [
          "Are both dancers using the same script?",
          "Why can both dancers move at once?",
        ],
        expectedAnswers: [
          "No. Each sprite has its own script.",
          "Each script starts from the same green-flag event and runs independently.",
        ],
        tips: [
          "Do not force both students to use the same second dancer. The learning goal is the event structure, not identical artwork.",
          "If a child copies code to the wrong sprite, ask them to identify the selected sprite rather than correcting the mouse yourself.",
        ],
        transition: "The party has two dancers. One more dancer will make it feel like a real scene.",
      },
      bgVariant: "purple",
    },
    {
      id: 9,
      title: "Build Dancer Three: Parallel Party",
      emoji: "3️⃣",
      type: "activity",
      content: [
        "Add a third dancer or keep the Cat as the third dancer.",
        "Give it a simple green-flag script.",
        "Use a different speed or movement.",
        "Run the flag and watch all three scripts begin together.",
      ],
      activitySteps: [
        "Select Dancer Three.",
        "Add `when green flag clicked` and `forever`.",
        "Add `next costume`, one movement block, and `wait`.",
        "Place the dancer somewhere visible on the stage.",
        "Run the party and point to which script controls each dancer.",
      ],
      mascotMessage: "Three dancers. Three scripts. One green flag.",
      teacherNotes: {
        questions: [
          "Does the green flag start only one script?",
          "What would happen if Dancer Three had no green-flag hat?",
        ],
        expectedAnswers: [
          "No. It can start many scripts at the same time.",
          "That dancer would not start automatically.",
        ],
        tips: [
          "This is the moment to use the word parallel only if they are ready: 'many scripts can be alive at the same time.' Do not require them to memorize the word.",
          "Have each child temporarily stop one dancer's script by removing its hat, then predict what will happen before running the flag.",
        ],
        transition: "The party starts automatically. Now it needs a way for the player to join in.",
      },
      bgVariant: "green",
    },
    {
      id: 10,
      title: "New Event: When This Sprite Is Clicked",
      emoji: "👆",
      type: "content",
      content: [
        "The green flag is one event.",
        "A sprite click is another event.",
        "The click event can start a separate script.",
        "One sprite can have more than one event script.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when this sprite clicked",
          children: [
            { type: "action", color: "purple", label: "say Clicked me! for 2 seconds" },
            { type: "action", color: "purple", label: "change color effect by 25" },
          ],
        },
      ],
      mascotMessage: "Click me and I will do my secret move!",
      teacherNotes: {
        questions: [
          "Can the same sprite listen to the green flag and a click?",
          "What should your special dancer do when clicked?",
        ],
        expectedAnswers: [
          "Yes. It can have separate scripts with different event hats.",
          "Any sensible action: talk, change costume, spin, grow, hide, or change colour.",
        ],
        tips: [
          "Use 'separate scripts' rather than saying the two events are stacked together. Draw them side by side in the Code Area.",
          "Give them only two minutes to invent the reaction, then choose one action they already know. Do not introduce broadcasts or variables here.",
        ],
        transition: "Let us add a special click reaction to one dancer without breaking its party dance.",
      },
      bgVariant: "blue",
    },
    {
      id: 11,
      title: "Guided Build: The Special Dancer",
      emoji: "⭐",
      type: "activity",
      content: [
        "Choose one dancer to be special.",
        "Add `when this sprite clicked` beside its green-flag script.",
        "Attach one or two looks blocks.",
        "Click the dancer during the party.",
        "The dancer should react and then continue dancing.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when this sprite clicked",
          children: [
            { type: "action", color: "purple", label: "say Watch this! for 2 seconds" },
            { type: "action", color: "purple", label: "change color effect by 25" },
            { type: "action", color: "purple", label: "next costume" },
          ],
        },
      ],
      activitySteps: [
        "Select one dancer and keep it selected.",
        "Drag `when this sprite clicked` into empty space in the Code Area.",
        "Add `say Watch this! for 2 seconds`.",
        "Add `change color effect by 25` or `next costume`.",
        "Click the green flag, then click the special dancer during the dance.",
        "Click it more than once and describe what changes each time.",
      ],
      mascotMessage: "The audience can now interact with the show!",
      teacherNotes: {
        questions: [
          "Which event started this special script?",
          "Does the click reaction replace the green-flag dance?",
        ],
        expectedAnswers: [
          "When this sprite clicked.",
          "No. They are separate scripts, so the dancer can do both.",
        ],
        tips: [
          "If the click reaction does not work, first ask whether the child clicked the correct sprite on the Stage. Then check the hat block.",
          "If the child uses plain `say` and the bubble stays, let them notice the problem and switch to `say for 2 seconds`.",
          "Some children will click during a costume change and think the code is broken. Ask them to test three times and observe the pattern.",
        ],
        transition: "The mechanics are complete. Now each child will make the party their own.",
      },
      bgVariant: "orange",
    },
    {
      id: 12,
      title: "Your Task: Make Your Own Dance Party",
      emoji: "🏆",
      type: "homework",
      content: [
        "Build a Dance Party that another person can play.",
        "Minimum build: a backdrop and three dancers.",
        "All three dancers start with the green flag.",
        "At least one dancer reacts when clicked.",
        "Use wait so the dance can be seen.",
      ],
      activitySteps: [
        "Choose a theme: concert, robot party, football celebration, space dance, or your own idea.",
        "Place three dancers on the stage and make sure their scripts are on the correct sprites.",
        "Give each dancer a different movement or timing.",
        "Add a click reaction to one dancer.",
        "Run the project from the green flag and test the click reaction.",
        "Rename the project with your name and party theme.",
      ],
      mascotMessage: "Your party must work before it gets decorations!",
      teacherNotes: {
        questions: [
          "What is the minimum thing your project must do before you decorate it?",
          "How will you prove that your click reaction works?",
        ],
        expectedAnswers: [
          "Three dancers start with the green flag and one reacts to a click.",
          "Run the flag, click the special dancer, and observe its action.",
        ],
        tips: [
          "Write the five minimum requirements on the board and point to them while circulating.",
          "During solo work, do not take the mouse. Ask: 'Which sprite did you select? Which event should start this code? What did you expect?'",
          "If a child finishes early, give the bonus challenge on the next slide instead of inventing a new concept."
        ],
        transition: "The minimum party is clear. Fast builders can now add one controlled upgrade.",
      },
      bgVariant: "green",
    },
    {
      id: 13,
      title: "Bonus Challenge: The DJ Button",
      emoji: "🎛️",
      type: "activity",
      content: [
        "Add a second event to your party.",
        "When the space key is pressed, make one dancer do a DJ move.",
        "Choose one action you already know.",
        "Test the green flag and the space key separately.",
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "when space key pressed",
          children: [
            { type: "action", color: "purple", label: "say DJ mode! for 2 seconds" },
            { type: "action", color: "purple", label: "change size by 20" },
            { type: "action", color: "purple", label: "next costume" },
          ],
        },
      ],
      activitySteps: [
        "Choose the dancer that will respond to the space key.",
        "Add `when space key pressed` in a new empty script.",
        "Add one or two Looks blocks that the child already knows.",
        "Click the green flag and check that the normal dance starts.",
        "Press the space key and check that the special move starts.",
      ],
      mascotMessage: "Press space for DJ mode!",
      teacherNotes: {
        questions: [
          "Is the space-key event the same as the green-flag event?",
          "Why should the DJ code be in a separate script?",
        ],
        expectedAnswers: [
          "No. They listen for different things.",
          "So each event has its own job and can start at the right time.",
        ],
        tips: [
          "This is a bonus only. Students who are still debugging the minimum build should not start it.",
          "Prevent feature creep: one space-key reaction is enough. Save extra ideas for homework or a later project.",
        ],
        transition: "The project is ready to be tested by someone who did not build it.",
      },
      bgVariant: "purple",
    },
    {
      id: 14,
      title: "Playtest: Be the Audience",
      emoji: "🎮",
      type: "game",
      content: [
        "Stop your own project and let your partner play it.",
        "The partner should press the green flag.",
        "The partner should click the special dancer.",
        "The partner should say one thing that worked and one thing to improve.",
        "The creator fixes one issue only.",
      ],
      activitySteps: [
        "Swap seats or swap control of the mouse for two minutes.",
        "The player tests the flag and the click reaction without asking for the code first.",
        "The player describes what happened using: 'I expected... I saw...'.",
        "The creator chooses one improvement and changes only that part.",
        "Run the test again and see whether the improvement worked.",
      ],
      mascotMessage: "A game is not finished until somebody else can play it.",
      teacherNotes: {
        questions: [
          "What did your partner expect to happen?",
          "What is one small fix you can make now?",
        ],
        expectedAnswers: [
          "Answers should mention the flag, the dance, or the click reaction.",
          "A concrete fix such as adding wait, selecting the correct sprite, or changing the reaction.",
        ],
        tips: [
          "Keep feedback kind and specific. Do not allow 'it is bad'; ask for 'I expected X, but I saw Y'.",
          "Because there are only two children, have them test each other's project twice if time allows: once as player and once as debugger.",
        ],
        transition: "We have built, tested, and improved. Let us name the new idea we used today.",
      },
      bgVariant: "blue",
    },
    {
      id: 15,
      title: "What Did We Learn?",
      emoji: "🔍",
      type: "review",
      content: [
        "An event tells Scratch when to start.",
        "A yellow hat block starts a script.",
        "The green flag can start many scripts at once.",
        "A sprite click can start a separate script.",
        "Events help the player interact with a project.",
      ],
      reviewPoints: [
        "Event = when something happens, start this code.",
        "`when green flag clicked` starts the party.",
        "`when this sprite clicked` lets the player interact.",
        "The selected sprite owns the code being edited.",
        "A working project is tested by running it from the start.",
      ],
      flipCards: [
        {
          frontEmoji: "🟨",
          frontText: "What is an event?",
          backEmoji: "▶️",
          backText: "A happening that starts code",
        },
        {
          frontEmoji: "🚩",
          frontText: "Green flag",
          backEmoji: "💃",
          backText: "Starts the party scripts",
        },
        {
          frontEmoji: "👆",
          frontText: "Sprite clicked",
          backEmoji: "⭐",
          backText: "Starts a special reaction",
        },
        {
          frontEmoji: "🐞",
          frontText: "Bug",
          backEmoji: "🛠️",
          backText: "A behavior different from what we wanted",
        },
      ],
      mascotMessage: "Events make projects wait for the player and respond!",
      teacherNotes: {
        questions: [
          "What is the difference between a green-flag event and a click event?",
          "What should you check first when code is on the wrong sprite?",
        ],
        expectedAnswers: [
          "They wait for different triggers: the flag or a sprite click.",
          "Check which sprite is highlighted in the Sprite Pane.",
        ],
        tips: [
          "Ask each child to explain one event using the sentence 'When X happens, do Y'. This is a stronger check than asking for a definition.",
          "Celebrate a real bug they fixed during the lesson and ask what evidence showed them it was fixed.",
        ],
        transition: "Your party works in class. One small variation will keep the idea alive at home.",
      },
      bgVariant: "green",
    },
    {
      id: 16,
      title: "Homework: Add a Fourth Dancer",
      emoji: "🏠",
      type: "homework",
      content: [
        "Add a fourth dancer with a move nobody else has.",
        "Start it with the green flag.",
        "Keep at least one click reaction in the project.",
        "Do not add a new type of block; change the character, movement, timing, or words.",
        "Be ready to show the new move next session.",
      ],
      activitySteps: [
        "Add one new sprite or reuse a sprite from the library.",
        "Give it a green-flag dance script using blocks from today.",
        "Make the movement different from the other three dancers.",
        "Test the whole party from the green flag.",
        "Save the project with the same name and a new version if possible.",
      ],
      mascotMessage: "Bring one brand-new dance move to the next class!",
      teacherNotes: {
        questions: [
          "What counts as a different move?",
          "What are you not required to learn for homework?",
        ],
        expectedAnswers: [
          "A different speed, turn, direction, costume pattern, or movement sequence.",
          "No new concept or difficult block; only a variation of today's build.",
        ],
        tips: [
          "Keep homework to about 20 minutes. If they cannot use Scratch at home, let them draw the fourth dancer and write its event/action plan on paper.",
          "The homework is a variation, not a second project. The next class should begin with two or three quick show-and-tells.",
        ],
        transition: "Great programmers do not only make code run; they make it their own.",
      },
      bgVariant: "orange",
    },
    {
      id: 17,
      title: "Teacher Close: Success Checklist",
      emoji: "✅",
      type: "content",
      content: [
        "Before ending, check the project together.",
        "☐ Three dancers are visible on the stage.",
        "☐ The green flag starts all dancers.",
        "☐ At least one dancer reacts to a click.",
        "☐ Wait makes the animation visible.",
        "☐ The child can explain what an event does.",
      ],
      mascotMessage: "If all five boxes are checked, the party is ready to share!",
      teacherNotes: {
        questions: [
          "Which checklist box did you complete first?",
          "Which box was hardest, and how did you solve it?",
        ],
        expectedAnswers: [
          "Any honest answer tied to the project.",
          "A specific debugging story, not just 'the teacher fixed it'.",
        ],
        tips: [
          "Take a screenshot or save the project link if the students have accounts. This gives the next session a concrete warm-up artifact.",
          "If a project is incomplete, record the exact next step rather than trying to finish it for the child after class.",
        ],
        transition: "Session 8 is complete: the students now know how a project starts and how a player can trigger an action.",
      },
      bgVariant: "blue",
    },
  ],
};
