import { SessionData } from "./types";

export const session3: SessionData = {
  id: 3,
  title: "IF (Condition)",
  subtitle: "Computers Can Make Decisions",
  emoji: "🤔",
  description: "Learn how computers make decisions using conditions!",
  color: "#F59E0B", // Amber
  slides: [
    {
      id: 1,
      title: "Introduction Video",
      emoji: "🎬",
      type: "video",
      content: ["Let's watch this video to understand what we will learn today!"],
      videoUrl: "https://www.youtube.com/embed/ePXoxLbt0JM",
      mascotMessage: "Watch carefully! 📺",
      teacherNotes: {
        questions: ["What did you notice in the video?"],
        expectedAnswers: ["(Students share their thoughts)"],
        tips: ["Use the video to hook their attention."],
        transition: "Now let's continue with our lesson.",
      },
      bgVariant: "purple",
    },
    {
      id: 2,
      title: "Quick Review!",
      emoji: "🔄",
      type: "quiz",
      content: [
        "Welcome back! Let's remember what we learned.",
        "What is an Algorithm? Can computers think?",
      ],
      quiz: {
        question: "Why do computers need instructions?",
        options: [
          "Because they are hungry",
          "Because they can't think for themselves",
          "Because they are smart",
          "Because they like to read",
        ],
        correctIndex: 1,
      },
      newWord: {
        word: "Condition",
        pronunciation: "con-DISH-un",
        meaning: "A rule that must be true for something to happen",
        example: "The condition to play outside is that it must not be raining.",
      },
      mascotMessage: "You remember everything! Great job! 🌟",
      teacherNotes: {
        questions: [
          "What is an Algorithm?",
          "Can computers think?",
          "Why do computers need instructions?",
        ],
        expectedAnswers: [
          "An ordered list of steps",
          "No, they just follow rules",
          "Because they don't have brains to decide",
        ],
        tips: [
          "Praise students for remembering",
          "Remind them that computers are just fast machines",
        ],
        transition: "Today we will learn how computers make choices without thinking!",
      },
      bgVariant: "blue",
    },
    {
      id: 3,
      title: "Real Life Decision",
      emoji: "☔",
      type: "content",
      content: [
        "It's raining outside. Should we take an umbrella?",
        "Yes! Because IF it is raining, we take the umbrella.",
        "This is a condition!",
      ],
      image: "/images/s3-umbrella.png",
      imagePrompt:
        "A happy child holding a colorful umbrella in the rain, ultra-realistic photography, professional lighting, bright colors, cinematic, highly detailed",
      visualBlocks: [
        {
          type: "if-else",
          color: "orange",
          label: "IF it is raining (TRUE):",
          children: [
            {
              type: "action",
              color: "blue",
              label: "Take Umbrella ☂️"
            }
          ],
          elseLabel: "ELSE (FALSE):",
          falseChildren: [
            {
              type: "action",
              color: "pink",
              label: "Wear Sunglasses 🕶️"
            }
          ]
        }
      ],
      newWord: {
        word: "Decision",
        pronunciation: "de-SIZH-un",
        meaning: "Making a choice about what to do",
        example: "I made a decision to eat an apple instead of candy.",
      },
      mascotMessage: "IF it's raining, I need my umbrella! ☂️",
      teacherNotes: {
        questions: [
          "What happens if it's sunny?",
          "Do we take an umbrella if it's sunny?",
        ],
        expectedAnswers: [
          "We wear sunglasses or hats",
          "No!",
        ],
        tips: [
          "Emphasize the word 'IF'",
          "Act out checking the weather",
        ],
        transition: "Let's see some more examples from our daily lives.",
      },
      bgVariant: "default",
    },
    {
      id: 4,
      title: "More Daily Examples",
      emoji: "🚦",
      type: "content",
      content: [
        "IF you are hungry ➔ Eat.",
        "IF you are thirsty ➔ Drink water.",
        "IF the traffic light is red ➔ Stop.",
        "IF homework is finished ➔ Play.",
      ],
      image: "/images/s3-traffic-light.png",
      imagePrompt:
        "A bright red traffic light on a city street, children waiting safely on the sidewalk, ultra-realistic photography, bright day, high quality",
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "IF traffic light is red:",
          children: [
            {
              type: "action",
              color: "pink",
              label: "Stop 🛑"
            }
          ]
        },
        {
          type: "wrapper",
          color: "orange",
          label: "IF traffic light is green:",
          children: [
            {
              type: "action",
              color: "green",
              label: "Go 🟢"
            }
          ]
        }
      ],
      mascotMessage: "IF I see a carrot, I eat it! 🥕",
      teacherNotes: {
        questions: [
          "What do you do IF you are tired?",
          "What do you do IF the light is green?",
        ],
        expectedAnswers: [
          "Go to sleep",
          "Go / Cross the street",
        ],
        tips: [
          "Have the students finish your sentences",
          "Say 'IF you are hungry...' and wait for them to shout 'EAT!'",
        ],
        transition: "We humans make these decisions. But what about computers?",
      },
      bgVariant: "orange",
    },
    {
      id: 5,
      title: "Computers Never Guess",
      emoji: "🤖",
      type: "content",
      content: [
        "Humans guess. Humans think.",
        "Computers DO NOT.",
        "Computers only check the condition.",
        "If it is true, they do it. If not, they don't!",
      ],
      image: "/images/s3-robot-thinking.png",
      imagePrompt:
        "A modern friendly robot looking at a checklist, high quality educational photography, bright classroom setting, realistic robot, no cartoons",
      visualBlocks: [
        {
          type: "if-else",
          color: "purple",
          label: "IF rule is TRUE:",
          children: [
            {
              type: "action",
              color: "blue",
              label: "Execute Action ✅"
            }
          ],
          elseLabel: "ELSE (FALSE):",
          falseChildren: [
            {
              type: "action",
              color: "pink",
              label: "Do Nothing ❌"
            }
          ]
        }
      ],
      mascotMessage: "Computers follow the rules exactly as written! 📏",
      teacherNotes: {
        questions: [
          "Can a computer guess what you want?",
          "Does a computer think before it acts?",
        ],
        expectedAnswers: [
          "No, you have to tell it",
          "No, it just checks the condition",
        ],
        tips: [
          "Make it clear that computers are obedient but not smart",
        ],
        transition: "Let's play a game to see how this works!",
      },
      bgVariant: "default",
    },
    {
      id: 6,
      title: "Simon Says",
      emoji: "🎮",
      type: "activity",
      content: [
        "Let's play Simon Says!",
        "Only follow the command IF I say 'Simon Says'.",
        "This is exactly how IF works in a computer!",
      ],
      activitySteps: [
        "Teacher says: 'Simon says touch your nose'. Students touch nose.",
        "Teacher says: 'Jump'. Students DO NOT jump.",
        "Teacher says: 'Simon says clap'. Students clap.",
      ],
      mascotMessage: "Listen carefully to the condition! 👂",
      teacherNotes: {
        questions: [
          "Why didn't you jump?",
          "What was the condition?",
        ],
        expectedAnswers: [
          "Because you didn't say Simon Says",
          "The teacher saying 'Simon Says'",
        ],
        tips: [
          "Play this for 2-3 minutes to get their energy up",
          "Relate every move back to the 'Condition'",
        ],
        transition: "Great listening! Let's try another condition game.",
      },
      bgVariant: "purple",
    },
    {
      id: 7,
      title: "Weather Cards",
      emoji: "🌦️",
      type: "activity",
      content: [
        "Look at the card the teacher holds up.",
        "Do the action for that weather!",
      ],
      activitySteps: [
        "IF Rain ➔ Open umbrella",
        "IF Sun ➔ Put on sunglasses",
        "IF Snow ➔ Shiver (brrr)",
        "IF Night ➔ Go to sleep",
      ],
      flipCards: [
        { frontEmoji: "🌧️", frontText: "Rain", backEmoji: "☂️", backText: "Open Umbrella!" },
        { frontEmoji: "☀️", frontText: "Sun", backEmoji: "😎", backText: "Sunglasses!" },
        { frontEmoji: "❄️", frontText: "Snow", backEmoji: "🥶", backText: "Shiver!" },
        { frontEmoji: "🌙", frontText: "Night", backEmoji: "😴", backText: "Go to sleep!" },
      ],
      mascotMessage: "IF it's snowing, I need my coat! 🧥",
      teacherNotes: {
        questions: [
          "What do we do IF the card is sun?",
        ],
        expectedAnswers: [
          "Put on sunglasses!",
        ],
        tips: [
          "Draw or use printed weather cards",
          "Speed up showing the cards to make it fun",
        ],
        transition: "Now, let's act like a real robot.",
      },
      bgVariant: "blue",
    },
    {
      id: 8,
      title: "Robot Teacher",
      emoji: "🦾",
      type: "activity",
      content: [
        "One student becomes the programmer.",
        "One student becomes the robot.",
        "The robot must obey exactly. No guessing allowed!",
      ],
      activitySteps: [
        "Programmer says: IF I clap, take one step.",
        "Programmer claps.",
        "Robot takes a step.",
        "Programmer jumps (no clap).",
        "Robot must stand still!",
      ],
      mascotMessage: "Be a good robot! Only move when the condition is met! 🤖",
      teacherNotes: {
        questions: [
          "Did the robot move when you jumped?",
          "Why not?",
        ],
        expectedAnswers: [
          "No!",
          "Because the condition was clapping, not jumping",
        ],
        tips: [
          "Pick students who can follow instructions well to demonstrate",
          "Let multiple pairs try it",
        ],
        transition: "Now let's program a character on the screen!",
      },
      bgVariant: "green",
    },
    {
      id: 9,
      title: "Blockly Maze",
      emoji: "🧩",
      type: "game",
      content: [
        "Today we will give commands to a character.",
        "The character never thinks.",
        "It only follows instructions.",
      ],
      gameUrl: "https://blockly.games/maze",
      mascotMessage: "Let's solve the maze! Remember, the character only follows your rules! 🗺️",
      teacherNotes: {
        questions: [
          "What happens if you give the wrong command?",
        ],
        expectedAnswers: [
          "The character hits a wall or goes the wrong way",
        ],
        tips: [
          "Help students use the Blocks",
          "Point out that the character doesn't 'know' where to go, it just follows the blocks",
        ],
        transition: "Great job programming the maze!",
      },
      bgVariant: "default",
    },
    {
      id: 10,
      title: "Mini Game: Red Light, Green Light 🚦",
      emoji: "🚦",
      type: "activity",
      content: [
        "A real game, played standing up, that is nothing but one big IF.",
        "IF the light is green → walk. IF the light is red → freeze.",
        "The first person to touch the wall wins. But a wrong move sends you back.",
      ],
      activitySteps: [
        "Students stand at one end of the room. The teacher holds a green card and a red card.",
        "Green card up → students walk forward. Red card up → students FREEZE instantly.",
        "Anyone who moves on red goes back to the start line.",
        "Play until someone touches the far wall.",
        "Now say the rule out loud together as code: IF green THEN walk, ELSE freeze.",
        "Round 2 with a new rule the students invent — one green rule, one red rule.",
      ],
      mascotMessage: "One card, two answers. That is an IF with an ELSE! 🚦",
      teacherNotes: {
        questions: [
          "How many answers did the game have?",
          "What is the condition in this game?",
          "What would happen if there was no red card at all?",
        ],
        expectedAnswers: [
          "Two! Walk or freeze!",
          "Whether the card is green!",
          "Everyone just walks — there is no game!",
        ],
        tips: [
          "Play it fast and switch cards unpredictably. The fun IS the learning here.",
          "The key sentence to draw out: two answers means IF-ELSE. Write it on the board in their own words.",
          "The 'no red card' question is important — no condition means no decision. Let them reach it.",
          "Round 2 with their own rule proves they understood the shape, not just the game.",
        ],
        transition: "You just played a condition. Now let's put words to it.",
      },
      bgVariant: "green",
    },
    {
      id: 11,
      title: "Reflection",
      emoji: "💡",
      type: "review",
      content: [
        "Let's think about what we learned today.",
      ],
      reviewPoints: [
        "Did the robot think?",
        "What happened when the condition was wrong?",
        "What happens if we forget the condition?",
      ],
      mascotMessage: "We learned so much today! You are all super smart! 🧠",
      teacherNotes: {
        questions: [
          "Who can tell me what IF means for a computer?",
        ],
        expectedAnswers: [
          "It means checking a rule before doing something",
        ],
        tips: [
          "Ensure every student understands that computers don't think",
        ],
        transition: "Before we go, here is a small task for you to do at home.",
      },
      bgVariant: "orange",
    },
    {
      id: 12,
      title: "Homework",
      emoji: "🏠",
      type: "homework",
      content: [
        "Write five IF sentences from your daily life.",
        "Example:",
        "IF I am thirsty, I drink water.",
      ],
      image: "/images/s3-homework.png",
      imagePrompt:
        "A young student happily writing in a notebook at home, ultra-realistic photography, bright room, natural lighting, modern desk",
      mascotMessage: "See you next time! Don't forget your homework! 👋",
      teacherNotes: {
        questions: [
          "Can anyone give me one example for their homework right now?",
        ],
        expectedAnswers: [
          "IF it is cold, I wear a jacket",
        ],
        tips: [
          "Make sure they understand the format",
        ],
        transition: "Class dismissed! Great job today!",
      },
      bgVariant: "purple",
    },
  ],
};
