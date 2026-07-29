import { SessionData } from "./types";

export const session4: SessionData = {
  id: 4,
  title: "LOOP (Repeat)",
  subtitle: "Computers Love Repeating",
  emoji: "🔁",
  description: "Understand why repeating instructions is easier than writing them many times!",
  color: "#EC4899", // Pink
  slides: [
    {
      id: 1,
      title: "Introduction Video",
      emoji: "🎬",
      type: "video",
      content: ["Let's watch this video to understand what we will learn today!"],
      videoUrl: "https://www.youtube.com/embed/oWjiJIoG3nQ",
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
        "Welcome back!",
        "Let's review what we learned about making decisions.",
      ],
      quiz: {
        question: "What does IF mean to a computer?",
        options: [
          "Check a condition before doing something",
          "Go to sleep",
          "Print a picture",
          "Play a sound",
        ],
        correctIndex: 0,
      },
      newWord: {
        word: "Repeat",
        pronunciation: "re-PEET",
        meaning: "To do the same thing again and again",
        example: "I repeat the alphabet until I know it.",
      },
      mascotMessage: "IF you got that right, you are awesome! 🌟",
      teacherNotes: {
        questions: [
          "Who can remind me what a condition is?",
        ],
        expectedAnswers: [
          "A rule that tells the computer whether to do something or not",
        ],
        tips: [
          "Praise the students for remembering Lesson 1",
        ],
        transition: "Today, we're going to talk about doing things over and over again!",
      },
      bgVariant: "blue",
    },
    {
      id: 3,
      title: "Clapping Activity",
      emoji: "👏",
      type: "activity",
      content: [
        "Clap once.",
        "Now clap five times.",
      ],
      activitySteps: [
        "Should we write:",
        "Clap, Clap, Clap, Clap, Clap?",
        "OR",
        "Repeat 5 Times: Clap?",
      ],
      mascotMessage: "Repeat 5 Times is much easier! 😌",
      teacherNotes: {
        questions: [
          "Which one is faster to write?",
        ],
        expectedAnswers: [
          "Repeat 5 Times!",
        ],
        tips: [
          "Have them physically clap out the commands",
          "Show how tiring it is to write 'clap' a hundred times",
        ],
        transition: "We repeat things all the time in our daily lives.",
      },
      bgVariant: "orange",
    },
    {
      id: 4,
      title: "Daily Life Loops",
      emoji: "🚶",
      type: "content",
      content: [
        "Walking (Step, Step, Step...)",
        "Brushing teeth (Brush, Brush, Brush...)",
        "Heartbeat (Beat, Beat, Beat...)",
        "Many things in life Repeat!",
      ],
      image: "/images/s4-daily-loops.png",
      imagePrompt:
        "A child brushing their teeth in a modern clean bathroom, looking in the mirror, ultra-realistic photography, bright morning light",
      visualBlocks: [
        {
          type: "wrapper",
          color: "blue",
          label: "Repeat every morning:",
          children: [
            {
              type: "action",
              color: "orange",
              label: "Wake up ☀️"
            },
            {
              type: "action",
              color: "pink",
              label: "Brush teeth 🪥"
            }
          ]
        }
      ],
      newWord: {
        word: "Loop",
        pronunciation: "LOOP",
        meaning: "A circle of instructions that repeats",
        example: "The washing machine goes in a loop to clean clothes.",
      },
      mascotMessage: "My heartbeat is a loop! Thump, thump! ❤️",
      teacherNotes: {
        questions: [
          "What else do you repeat every day?",
        ],
        expectedAnswers: [
          "Breathing, eating, running",
        ],
        tips: [
          "Have them feel their heartbeat",
        ],
        transition: "Let's do some more repeating with our bodies!",
      },
      bgVariant: "green",
    },
    {
      id: 5,
      title: "Dance Loop",
      emoji: "💃",
      type: "activity",
      content: [
        "Let's create a Dance Loop!",
        "Teacher says:",
        "Repeat: Jump, Spin, Clap",
      ],
      activitySteps: [
        "Students Jump",
        "Students Spin",
        "Students Clap",
        "Students repeat again until teacher says stop!",
      ],
      mascotMessage: "Keep the loop going! Jump, Spin, Clap! 🕺",
      teacherNotes: {
        questions: [
          "Did you have fun in the loop?",
          "What happens if the loop never stops?",
        ],
        expectedAnswers: [
          "Yes!",
          "We get very tired!",
        ],
        tips: [
          "Play some upbeat music",
          "Let a student lead the loop",
        ],
        transition: "Now let's program a human robot.",
      },
      bgVariant: "purple",
    },
    {
      id: 6, // Will be fixed by script
      title: "The Infinite Loop",
      emoji: "♾️",
      type: "content",
      content: [
        "What happens if a computer doesn't know when to stop?",
        "It keeps going FOREVER!",
        "This is called an INFINITE LOOP.",
        "The computer will get very tired and crash!"
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "pink",
          label: "Repeat FOREVER:",
          children: [
            {
              type: "action",
              color: "blue",
              label: "Run in circles 🏃"
            }
          ]
        }
      ],
      mascotMessage: "Oh no! Make sure to always tell the computer when to stop! 🛑",
      teacherNotes: {
        questions: [
          "Can a human run forever?",
          "What will the robot do if we say repeat forever?"
        ],
        expectedAnswers: [
          "No, we get tired!",
          "It will run until it breaks or runs out of battery!"
        ],
        tips: [
          "Act out being a robot that is stuck in a loop"
        ],
        transition: "Let's program a human robot again.",
      },
      bgVariant: "orange",
    },
    {
      id: 7,
      title: "Human Robot",
      emoji: "🤖",
      type: "activity",
      content: [
        "One student becomes the robot.",
        "Teacher gives the command:",
        "Repeat 4 times: Take one step."
      ],
      activitySteps: [
        "Robot takes step 1",
        "Robot takes step 2",
        "Robot takes step 3",
        "Robot takes step 4",
        "Robot STOPS.",
      ],
      mascotMessage: "Count your steps carefully! 1, 2, 3, 4! 🔢",
      teacherNotes: {
        questions: [
          "Did the robot take 5 steps?",
          "Why not?",
        ],
        expectedAnswers: [
          "No",
          "Because the loop was only for 4 times",
        ],
        tips: [
          "Make sure they count out loud",
        ],
        transition: "Let's test our eyes to find loops in pictures.",
      },
      bgVariant: "blue",
    },
    {
      id: 8,
      title: "Find the Loop",
      emoji: "🔍",
      type: "quiz",
      content: [
        "Look at the picture.",
        "Choose which one contains repetition.",
      ],
      quiz: {
        question: "Which of these is a Loop?",
        options: [
          "Eating an apple, then throwing the core away",
          "Taking one photo",
          "Running on a running track round and round",
          "Opening a door once",
        ],
        correctIndex: 2,
      },
      mascotMessage: "Round and round it goes! That's a loop! 🔄",
      teacherNotes: {
        questions: [
          "Why is running on a track a loop?",
        ],
        expectedAnswers: [
          "Because you go around multiple times doing the same thing",
        ],
        tips: [
          "Use hand gestures in a circular motion when explaining loops",
        ],
        transition: "Now let's use a loop on the computer!",
      },
      bgVariant: "orange",
    },
    {
      id: 9,
      title: "Blockly Maze",
      emoji: "🧩",
      type: "game",
      content: [
        "Let's go back to our maze.",
        "Reach the first Repeat block.",
        "Pause and think: Why is Repeat useful?"
      ],
      gameUrl: "https://blockly.games/maze",
      mascotMessage: "Use the Repeat block to save time! ⏳",
      teacherNotes: {
        questions: [
          "Why is Repeat useful?",
        ],
        expectedAnswers: [
          "It saves time",
          "We don't have to drag as many blocks",
        ],
        tips: [
          "Help them navigate to the level that introduces loops",
          "Compare the long way vs the loop way",
        ],
        transition: "Let's try a mini challenge.",
      },
      bgVariant: "default",
    },
    {
      id: 10,
      title: "Mini Challenge",
      emoji: "🏆",
      type: "activity",
      content: [
        "Replace this code:",
        "Forward",
        "Forward",
        "Forward",
        "Forward"
      ],
      activitySteps: [
        "How can we write this with a Repeat block?",
        "Answer: Repeat 4 Times: Forward",
      ],
      image: "/images/s4-challenge.png",
      imagePrompt:
        "A smart child pointing at a computer screen looking proud, ultra-realistic photography, bright classroom, modern",
      visualBlocks: [
        {
          type: "wrapper",
          color: "purple",
          label: "Repeat 4 Times:",
          children: [
            {
              type: "action",
              color: "blue",
              label: "Move Forward 🚶"
            }
          ]
        }
      ],
      mascotMessage: "You can do it! Think like a programmer! 🧠",
      teacherNotes: {
        questions: [
          "How many blocks did we use before?",
          "How many blocks do we use with Repeat?",
        ],
        expectedAnswers: [
          "4 blocks",
          "2 blocks (Repeat block + Forward block)",
        ],
        tips: [
          "Draw it on the board if needed",
        ],
        transition: "You guys are amazing programmers!",
      },
      bgVariant: "green",
    },
    {
      id: 11,
      title: "IF vs LOOP",
      emoji: "⚖️",
      type: "content",
      content: [
        "What is the difference between IF and LOOP?",
        "IF makes a decision ONCE.",
        "LOOP repeats an action MANY TIMES."
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "IF it is raining:",
          children: [
            {
              type: "action",
              color: "blue",
              label: "Open Umbrella ☂️"
            }
          ]
        },
        {
          type: "wrapper",
          color: "purple",
          label: "Repeat 5 Times:",
          children: [
            {
              type: "action",
              color: "pink",
              label: "Clap Hands 👏"
            }
          ]
        }
      ],
      mascotMessage: "IF is for deciding, LOOP is for repeating! 🧠",
      teacherNotes: {
        questions: [
          "If I check the weather, is it IF or LOOP?",
          "If I run around the track 3 times, is it IF or LOOP?"
        ],
        expectedAnswers: [
          "IF!",
          "LOOP!"
        ],
        tips: [
          "Help students understand the difference clearly"
        ],
        transition: "Let's reflect on everything we learned!",
      },
      bgVariant: "orange",
    },
    {
      id: 12,
      title: "Reflection",
      emoji: "💡",
      type: "review",
      content: [
        "Let's think about what we learned today.",
      ],
      reviewPoints: [
        "When do programmers use Repeat?",
        "Why is it easier?",
        "What happens if we forget to stop the loop?",
      ],
      mascotMessage: "I love learning with you! 🐰",
      teacherNotes: {
        questions: [
          "Who can tell me what a loop is?",
        ],
        expectedAnswers: [
          "Repeating an instruction",
        ],
        tips: [
          "Summarize both IF and LOOP briefly",
        ],
        transition: "Time for homework!",
      },
      bgVariant: "purple",
    },
    {
      id: 13,
      title: "Homework",
      emoji: "🏠",
      type: "homework",
      content: [
        "Write five things that you repeat every day.",
      ],
      image: "/images/s4-homework.png",
      imagePrompt:
        "A child at home writing a list in a notebook, smiling, realistic photography, cozy home environment, bright lighting",
      mascotMessage: "See you in the next level! 👋",
      teacherNotes: {
        questions: [
          "Any quick examples?",
        ],
        expectedAnswers: [
          "Brushing hair, taking steps, chewing food",
        ],
        tips: [
          "Congratulate them on finishing Week 2!",
        ],
        transition: "Great job, class dismissed!",
      },
      bgVariant: "blue",
    },
  ],
};
