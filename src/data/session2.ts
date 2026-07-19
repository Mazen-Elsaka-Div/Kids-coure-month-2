import { SessionData } from "./types";

export const session2: SessionData = {
  id: 2,
  title: "Think Like a Programmer",
  subtitle: "Writing Good Algorithms",
  emoji: "🧠",
  description: "Learn how to write your own algorithms and find mistakes!",
  color: "#8B5CF6",
  slides: [
    {
      id: 1,
      title: "Quick Review!",
      emoji: "🔄",
      type: "content",
      content: [
        "Welcome back, programmers! 👋",
        "Last time we learned about Algorithms.",
        "An Algorithm is a list of ordered steps.",
        "We also played the Rabbit game! 🐰",
        "Did the rabbit think by itself? NO!",
      ],
      image: "/images/s2-review.webp",
      imagePrompt:
        "A cute confident child sitting at a desk raising their hand eagerly, bright modern classroom, thinking bubbles with gears, realistic photography, warm lighting, educational atmosphere",
      newWord: {
        word: "Remember",
        pronunciation: "re-MEM-ber",
        meaning: "To keep something in your mind",
        example: "I remember what an algorithm is!",
      },
      mascotMessage: "Do you remember me? I'm Cody! 🐰",
      teacherNotes: {
        questions: [
          "Who remembers what an algorithm is?",
          "Can computers think?",
        ],
        expectedAnswers: [
          "A list of steps",
          "No, they only follow instructions",
        ],
        tips: [
          "Praise students who remember",
          "Remind them of the rabbit game",
        ],
        transition: "Today we are going to write our own algorithms!",
      },
      bgVariant: "default",
    },
    {
      id: 2,
      title: "Good vs Bad Algorithm",
      emoji: "✅",
      type: "content",
      content: [
        "What makes a GOOD algorithm?",
        "✅ It has clear steps.",
        "✅ It is in the RIGHT order.",
        "What makes a BAD algorithm?",
        "❌ Steps are missing or confusing.",
        "❌ Steps are in the WRONG order.",
      ],
      image: "/images/s2-good-bad.webp",
      imagePrompt:
        "Two whiteboards side by side, one with a neat green checkmark and organized colorful steps, the other with a red X and messy crossed-out steps, realistic photography, bright classroom setting",
      newWord: {
        word: "Compare",
        pronunciation: "com-PAIR",
        meaning: "To look at how things are the same or different",
        example: "Let's compare the good and bad algorithms.",
      },
      mascotMessage: "Which one is better? The clear one! ✨",
      teacherNotes: {
        questions: [
          "What happens if an algorithm is bad?",
        ],
        expectedAnswers: [
          "The computer makes a mistake or crashes!",
        ],
        tips: [
          "Emphasize clarity and order",
          "Remind them: the computer won't fix it for you!",
        ],
        transition: "Let's look at an algorithm and see if it's good or bad...",
      },
      bgVariant: "purple",
    },
    {
      id: 3,
      title: "Is this correct?",
      emoji: "📝",
      type: "quiz",
      content: ["Look at this algorithm for brushing teeth:"],
      quiz: {
        question: "Is this algorithm correct? 1) Put toothpaste on brush 2) Brush teeth 3) Wash mouth 4) Get toothbrush",
        options: [
          "✅ Yes, it's perfect!",
          "❌ No, it's in the wrong order!",
        ],
        correctIndex: 1,
      },
      newWord: {
        word: "Correct",
        pronunciation: "co-RECT",
        meaning: "Right, with no mistakes",
        example: "Is the order of these steps correct?",
      },
      mascotMessage: "Think carefully! Read every step! 🤔",
      teacherNotes: {
        questions: ["Why is it wrong?"],
        expectedAnswers: ["You have to get the toothbrush FIRST!"],
        tips: [
          "Act it out — try to put toothpaste on your hand because you don't have a brush yet",
        ],
        transition: "Exactly! The order is wrong. Let's play a game...",
      },
      bgVariant: "blue",
    },
    {
      id: 4,
      title: "Find The Mistake! 🔍",
      emoji: "🔍",
      type: "activity",
      content: [
        "We have an algorithm for Waking Up.",
        "But there's a BIG mistake!",
        "Can you find it?",
        "1. Wake up 😴",
        "2. Put on shoes 👟",
        "3. Put on socks 🧦",
        "4. Eat breakfast 🥞",
      ],
      image: "/images/s2-mistake.webp",
      imagePrompt:
        "A funny photo of a child wearing shoes on their feet and trying to put socks over the shoes, looking confused, bright bedroom, realistic photography, humorous tone",
      newWord: {
        word: "Mistake",
        pronunciation: "mis-TAKE",
        meaning: "Something done wrong",
        example: "Programmers look for mistakes to fix them.",
      },
      mascotMessage: "Can you find the mistake? 🕵️",
      teacherNotes: {
        questions: ["What is the mistake here?"],
        expectedAnswers: ["Socks go BEFORE shoes!"],
        tips: [
          "Let the kids laugh at the funny image",
          "Explain that in programming, finding mistakes is called 'Debugging'",
        ],
        transition: "Great job debugging! Now let's learn a programmer trick.",
      },
      bgVariant: "orange",
    },
    {
      id: 5,
      title: "Break It Down! 🧩",
      emoji: "🧩",
      type: "content",
      content: [
        "Big problems are hard.",
        "Programmers break big problems into small steps!",
        "This is called Decomposition.",
        "Big: Clean your room 🧹",
        "Small: 1. Make bed 2. Pick up toys 3. Put books away",
      ],
      image: "/images/s2-break-down.webp",
      imagePrompt:
        "A child happily putting together a colorful jigsaw puzzle on a table, the puzzle pieces are large and chunky, bright sunny room, realistic photography, top-down view",
      newWord: {
        word: "Break",
        pronunciation: "BRAYK",
        meaning: "To separate into smaller pieces",
        example: "We break the big problem into small steps.",
      },
      mascotMessage: "Big problems, small steps! 🧩",
      teacherNotes: {
        questions: [
          "If I say 'build a house', is that one step?",
        ],
        expectedAnswers: [
          "No! It's a big problem. We need small steps.",
        ],
        tips: [
          "Don't worry if they forget 'Decomposition', just focus on 'break it down'",
        ],
        transition: "Let's practice breaking down a problem!",
      },
      bgVariant: "default",
    },
    {
      id: 6,
      title: "Break Down the Party!",
      emoji: "📝",
      type: "quiz",
      content: ["We want to have a Birthday Party! 🎂"],
      quiz: {
        question: "Which of these are good SMALL steps for a birthday party?",
        options: [
          "A) Have a party!",
          "B) 1. Buy cake 2. Invite friends 3. Decorate",
        ],
        correctIndex: 1,
      },
      newWord: {
        word: "Plan",
        pronunciation: "PLAN",
        meaning: "To decide how to do something before you do it",
        example: "We need to plan the party steps.",
      },
      mascotMessage: "Party time! Let's plan it! 🎈",
      teacherNotes: {
        questions: ["Can you think of any other steps for a party?"],
        expectedAnswers: ["Play games, open presents, sing happy birthday"],
        tips: [
          "Acknowledge their ideas and add them to the 'algorithm'",
        ],
        transition: "Awesome! Now let's learn another trick.",
      },
      bgVariant: "blue",
    },
    {
      id: 7,
      title: "Some Steps Repeat 🔁",
      emoji: "🔁",
      type: "content",
      content: [
        "Sometimes we do the same thing many times.",
        "Instead of writing: Walk, Walk, Walk...",
        "We can write: REPEAT Walk 3 times!",
        "This is called a Loop. 🔄",
        "It makes our algorithms shorter and better!",
      ],
      image: "/images/s2-repeat.webp",
      imagePrompt:
        "A child skipping happily on a path of colorful stepping stones, showing repetitive motion, bright park setting, realistic photography, dynamic angle",
      newWord: {
        word: "Repeat",
        pronunciation: "re-PEET",
        meaning: "To do something again",
        example: "I repeat the steps until I am finished.",
      },
      mascotMessage: "Again and again! That's a loop! 🔄",
      teacherNotes: {
        questions: [
          "If I want to eat 10 fries, do I write 'eat fry' 10 times?",
        ],
        expectedAnswers: [
          "No! Just 'Repeat eat fry 10 times!'",
        ],
        tips: [
          "Demonstrate physically: jump 3 times",
          "Connect this to Scratch: they will use 'Repeat' blocks later",
        ],
        transition: "There's one more cool trick!",
      },
      bgVariant: "default",
    },
    {
      id: 8,
      title: "What If...? ❓",
      emoji: "❓",
      type: "content",
      content: [
        "Computers can make choices IF we tell them how.",
        "IF the door is closed ➡️ Open it.",
        "IF the door is open ➡️ Walk in.",
        "This is called a Condition.",
        "It helps the computer know what to do!",
      ],
      image: "/images/s2-what-if.webp",
      imagePrompt:
        "A child standing in front of two colorful doors (one open, one closed) looking thoughtful, holding a key, bright lighting, realistic photography, playful atmosphere",
      newWord: {
        word: "If",
        pronunciation: "IF",
        meaning: "On the condition that",
        example: "If it rains, I will take an umbrella.",
      },
      mascotMessage: "What would you do? 🤔",
      teacherNotes: {
        questions: [
          "If it is raining outside, what do you do?",
          "If you are hungry, what do you do?",
        ],
        expectedAnswers: [
          "Use an umbrella / Stay inside",
          "Eat food",
        ],
        tips: [
          "Make it a game: 'If I clap my hands, you clap yours!'",
          "This prepares them for 'If/Then' blocks in Scratch",
        ],
        transition: "Now let's write a real algorithm together!",
      },
      bgVariant: "green",
    },
    {
      id: 9,
      title: "Let's Write Together ✍️",
      emoji: "✍️",
      type: "activity",
      content: [
        "Let's write an algorithm for: Making Tea 🫖",
        "What is step 1?",
        "What is step 2?",
        "Does any step repeat? (like stirring?)",
        "Let's write it down!",
      ],
      image: "/images/s2-tea.webp",
      imagePrompt:
        "A cozy setting with a teapot, a teacup, a tea bag, and a spoon neatly arranged on a table, warm sunlight streaming through a window, realistic photography, inviting atmosphere",
      newWord: {
        word: "Write",
        pronunciation: "RITE",
        meaning: "To put words on paper or a screen",
        example: "We write instructions for the computer.",
      },
      mascotMessage: "Let's do it together! You tell me the steps! 🫖",
      teacherNotes: {
        questions: ["What do we need first?", "What next?"],
        expectedAnswers: [
          "Get a cup, get a tea bag, pour hot water, wait, take out bag, drink",
        ],
        tips: [
          "Use a whiteboard or chat to write the steps as they say them",
          "Ask: 'Should we add sugar? If we add sugar, we need to REPEAT stirring!'",
        ],
        transition: "Amazing algorithm! Now for the ultimate test...",
      },
      bgVariant: "default",
    },
    {
      id: 10,
      title: "Be The Robot! 🤖",
      emoji: "🤖",
      type: "activity",
      content: [
        "Time for a fun activity!",
        "The Teacher is the Robot.",
        "You are the Programmers.",
        "Give me instructions to walk to the door.",
        "Warning: I will do EXACTLY what you say! 😂",
      ],
      image: "/images/s2-be-robot.webp",
      imagePrompt:
        "A fun silly classroom scene where a teacher is walking rigidly like a robot while laughing children point and give instructions, realistic photography, bright and energetic",
      newWord: {
        word: "Robot",
        pronunciation: "RO-bot",
        meaning: "A machine controlled by a computer",
        example: "The robot follows my algorithm.",
      },
      mascotMessage: "Beep boop! Give instructions carefully! 🤖",
      teacherNotes: {
        questions: ["What's the first step?"],
        expectedAnswers: ["Stand up, turn right, walk forward..."],
        tips: [
          "Be overly literal. If they say 'walk', keep walking until you hit a wall unless they say 'Stop'.",
          "If they say 'turn', spin around in circles until they say 'Stop'.",
          "This is usually the most memorable part of the lesson!",
        ],
        transition: "That was hilarious! Being a programmer is fun but requires care.",
      },
      bgVariant: "purple",
    },
    {
      id: 11,
      title: "Build Your Own 🏗️",
      emoji: "🏗️",
      type: "content",
      content: [
        "Now you know the secrets!",
        "1. Write clear steps.",
        "2. Put them in order.",
        "3. Break big problems into small ones.",
        "4. Use 'Repeat' and 'If' to be smart.",
        "You are ready to code!",
      ],
      image: "/images/s2-build.webp",
      imagePrompt:
        "A proud young child sitting at a desk with a notebook full of drawings and notes, holding up a pencil like a wand, bright room, realistic photography, inspiring mood",
      newWord: {
        word: "Create",
        pronunciation: "cree-ATE",
        meaning: "To make something new",
        example: "I can create my own algorithms!",
      },
      mascotMessage: "You can do it! You're a creator now! ✨",
      teacherNotes: {
        questions: ["Who feels ready to write their own programs?"],
        expectedAnswers: ["Me! Me!"],
        tips: [
          "Empower the students",
          "Remind them that every great game started as a simple algorithm",
        ],
        transition: "Why are we learning all this?",
      },
      bgVariant: "default",
    },
    {
      id: 12,
      title: "Why This Matters 🎯",
      emoji: "🎯",
      type: "content",
      content: [
        "Every game you play...",
        "Every app on your tablet...",
        "Even the robots on Mars! 🚀",
        "They all run on ALGORITHMS written by people like YOU.",
        "You are learning to think like a programmer!",
      ],
      image: "/images/s2-why.webp",
      imagePrompt:
        "A split screen image showing a child holding a tablet with a game on the left, and a cool Mars rover on the right, connected by glowing lines of code, realistic photography mixed with cool graphics",
      newWord: {
        word: "Programmer",
        pronunciation: "PRO-gram-er",
        meaning: "A person who writes instructions for computers",
        example: "I am learning to be a programmer!",
      },
      mascotMessage: "You are a programmer now! Be proud! 💻",
      teacherNotes: {
        questions: ["What do you want to program one day?"],
        expectedAnswers: ["A game, a robot, a website..."],
        tips: [
          "Inspire them with real-world examples",
          "Show them that coding is a superpower",
        ],
        transition: "Let's review everything we learned today!",
      },
      bgVariant: "blue",
    },
    {
      id: 13,
      title: "Today's Review 🏆",
      emoji: "🏆",
      type: "review",
      content: [
        "We learned so many programmer secrets today!",
      ],
      reviewPoints: [
        "✅ Good algorithms are clear and in order.",
        "✅ Debugging means finding mistakes 🔍",
        "✅ Break big problems into small steps 🧩",
        "✅ We can use REPEAT for loops 🔁",
        "✅ We can use IF for choices ❓",
        "✅ You are ready for Scratch! 🐱",
      ],
      image: "/images/s2-trophy.webp",
      imagePrompt:
        "A shiny golden trophy sitting on a desk next to a computer keyboard, glowing with magical light, realistic photography, celebratory atmosphere",
      newWord: {
        word: "Practice",
        pronunciation: "PRAC-tis",
        meaning: "To do something again and again to get better",
        example: "I will practice writing algorithms.",
      },
      mascotMessage: "See you in Scratch! You're going to be awesome! 🐱🐰",
      teacherNotes: {
        questions: [
          "What does 'Break it down' mean?",
          "What is it called when we do something again and again?",
        ],
        expectedAnswers: [
          "Make big problems small",
          "A loop / Repeat",
        ],
        tips: [
          "Congratulate them on finishing the 'Unplugged' section",
          "Next session will be on the computer with Scratch!",
        ],
        transition: "Here is your final homework challenge!",
      },
      bgVariant: "purple",
    },
    {
      id: 14,
      title: "Homework Challenge! 📝",
      emoji: "📝",
      type: "homework",
      content: [
        "Write an algorithm for a NEW activity.",
        "Examples: Playing a game, making breakfast, or drawing a cat.",
        "Challenge: Try to use the word 'REPEAT' or 'IF' in your steps!",
      ],
      image: "/images/s2-homework.webp",
      imagePrompt:
        "A child enthusiastically writing on a large colorful piece of paper on the floor, surrounded by markers, bright room, realistic photography, creative mood",
      newWord: {
        word: "Challenge",
        pronunciation: "CHAL-enj",
        meaning: "Something difficult but fun to try",
        example: "I am ready for the homework challenge!",
      },
      mascotMessage: "Show me what you got! You can do it! 🌟",
      teacherNotes: {
        questions: ["What are you going to write your algorithm about?"],
        expectedAnswers: ["Various creative answers"],
        tips: [
          "Remind them to use Repeat or If",
          "Tell them they are officially ready to start programming next time",
        ],
        transition: "Great job today! See you next time!",
      },
      bgVariant: "default",
    },
  ],
};
