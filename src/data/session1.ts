import { SessionData } from "./types";

export const session1: SessionData = {
  id: 1,
  title: "What is an Algorithm?",
  subtitle: "How Computers Think",
  emoji: "🧠",
  description: "Discover how computers work and learn what algorithms are!",
  color: "#3B82F6",
  slides: [
    {
      id: 1,
      title: "Welcome Back!",
      emoji: "🎉",
      type: "content",
      content: [
        "Hello everyone! 👋",
        "Today we're going to discover something amazing.",
        "We'll learn how games and apps are made!",
        "Are you ready for an adventure? 🚀",
      ],
      image: "/images/s1-welcome.webp",
      imagePrompt:
        "A happy diverse group of children aged 7-8 sitting in a bright modern classroom, looking excited at a large screen, realistic photography, natural lighting, warm and inviting atmosphere, ultra detailed",
      newWord: {
        word: "Computer",
        pronunciation: "com-PEW-ter",
        meaning: "An electronic machine that follows instructions",
        example: "I use a computer to play games and learn new things.",
      },
      mascotMessage: "Hi friends! I'm Cody! Let's learn together! 🐰",
      teacherNotes: {
        questions: [
          "Who has used a computer before?",
          "What do you use computers for?",
          "Do you think computers are smart?",
        ],
        expectedAnswers: [
          "Most students will raise hands",
          "Games, videos, homework",
          "Most will say yes — we'll challenge this!",
        ],
        tips: [
          "Start with energy and excitement",
          "Let kids share their experiences",
          "Build curiosity for what's coming",
        ],
        transition:
          "Great! Now let me ask you something interesting about computers...",
      },
      bgVariant: "default",
    },
    {
      id: 2,
      title: "Can Computers Think?",
      emoji: "🤔",
      type: "content",
      content: [
        "Here's a big question: Can computers think? 🧠",
        "Can a computer decide what to eat for lunch?",
        "Can it make a sandwich by itself?",
        "The answer is... NO! Computers cannot think!",
        "They can only follow instructions that WE give them.",
      ],
      image: "/images/s1-computer-think.webp",
      imagePrompt:
        "A friendly modern robot with question marks floating around its head, standing in a bright kitchen looking confused at sandwich ingredients, realistic 3D render, bright lighting, playful atmosphere",
      newWord: {
        word: "Think",
        pronunciation: "THINK",
        meaning: "To use your brain to understand something",
        example: "I think about what game to play after school.",
      },
      mascotMessage: "Hmm, can I think? Let me try... 🤔 Nope! I can't!",
      teacherNotes: {
        questions: [
          "Can a computer make a sandwich?",
          "Can a computer decide what to eat?",
          "Can a computer feel happy or sad?",
        ],
        expectedAnswers: [
          "No! It doesn't have hands or a brain",
          "No! It doesn't know what food is",
          "No! It doesn't have feelings",
        ],
        tips: [
          "Make it fun — act confused like a robot",
          "Let students debate before revealing the answer",
          "Use funny examples they can relate to",
        ],
        transition: "So if computers can't think... how do we talk to them?",
      },
      bgVariant: "default",
    },
    {
      id: 3,
      title: "Quick Quiz!",
      emoji: "📝",
      type: "quiz",
      content: ["Let's test what we just learned!"],
      quiz: {
        question: "Which of these can a computer do by itself?",
        options: [
          "🍕 Decide what to eat",
          "😊 Feel happy",
          "🖥️ Show pictures on screen",
          "🤔 Think of a new idea",
        ],
        correctIndex: 2,
      },
      newWord: {
        word: "Quiz",
        pronunciation: "KWIZ",
        meaning: "A short test with questions",
        example: "Let's take a quiz to see what we learned!",
      },
      mascotMessage: "Pick the right answer! You got this! 💪",
      teacherNotes: {
        questions: ["Why can't computers feel happy?", "Why can they show pictures?"],
        expectedAnswers: [
          "Because they don't have feelings",
          "Because someone programmed them to do it",
        ],
        tips: [
          "Let students discuss before clicking",
          "Celebrate the correct answer with excitement",
        ],
        transition: "Amazing! Now let's talk about languages...",
      },
      bgVariant: "blue",
    },
    {
      id: 4,
      title: "Humans Have Languages",
      emoji: "🗣️",
      type: "content",
      content: [
        "People around the world speak different languages.",
        "🇸🇦 Arabic — مرحباً",
        "🇬🇧 English — Hello",
        "🇫🇷 French — Bonjour",
        "We use languages to talk to each other!",
      ],
      image: "/images/s1-languages.webp",
      imagePrompt:
        "Diverse group of happy children from different cultures waving and greeting each other in a colorful school hallway, speech bubbles showing Hello in different languages, realistic photography, bright lighting",
      newWord: {
        word: "Language",
        pronunciation: "LANG-gwij",
        meaning: "A way to communicate with others using words",
        example: "I speak Arabic and English — two languages!",
      },
      mascotMessage: "I speak Code! That's my language! 💻",
      teacherNotes: {
        questions: [
          "How many languages do you know?",
          "Can an Arabic speaker understand French?",
          "What if computers had their own language?",
        ],
        expectedAnswers: [
          "Usually 1-2 languages",
          "Not unless they learned it",
          "Great lead-in to next slide!",
        ],
        tips: [
          "Ask students to say hello in different languages",
          "Make the connection: just like people need languages, so do computers",
        ],
        transition:
          "Just like we have languages... computers have their own languages too!",
      },
      bgVariant: "default",
    },
    {
      id: 5,
      title: "Computers Have Languages Too!",
      emoji: "💻",
      type: "content",
      content: [
        "Computers have their own special languages!",
        "🐱 Scratch — uses colorful blocks",
        "🐍 Python — used by real programmers",
        "🌐 JavaScript — makes websites work",
        "We'll learn Scratch soon! 🎮",
      ],
      image: "/images/s1-programming.webp",
      imagePrompt:
        "A modern computer screen showing colorful Scratch programming blocks in a bright classroom, surrounded by fun tech decorations, realistic photography, vibrant colors, clean and modern",
      newWord: {
        word: "Program",
        pronunciation: "PRO-gram",
        meaning: "A set of instructions that tells a computer what to do",
        example: "A game is a program that runs on your computer.",
      },
      mascotMessage: "These are my languages! Soon you'll learn Scratch! 🐱",
      teacherNotes: {
        questions: [
          "Have you heard of Scratch before?",
          "What do you think programming looks like?",
        ],
        expectedAnswers: [
          "Some may have tried it",
          "Most think it's just text — surprise them with Scratch blocks!",
        ],
        tips: [
          "Don't explain each language in detail — just mention them",
          "Build excitement for Scratch — 'We'll learn this soon!'",
          "Keep it brief — the goal is awareness, not depth",
        ],
        transition:
          "But before we can program, we need to learn something very important first...",
      },
      bgVariant: "default",
    },
    {
      id: 6,
      title: "What is an Algorithm?",
      emoji: "📋",
      type: "content",
      content: [
        "Before programming, everything starts with a PLAN.",
        "This plan is called an Algorithm!",
        "An Algorithm is a list of steps to solve a problem.",
        "Like a recipe for cooking! 👨‍🍳",
        "Step 1, Step 2, Step 3... in the right order!",
      ],
      image: "/images/s1-algorithm.webp",
      imagePrompt:
        "A beautifully organized checklist on a whiteboard with numbered colorful steps, in a bright modern classroom, with a child pointing at it excitedly, realistic photography, clean and vibrant",
      newWord: {
        word: "Algorithm",
        pronunciation: "AL-guh-rith-um",
        meaning: "A list of ordered steps to solve a problem",
        example: "Following a recipe is an algorithm for cooking!",
      },
      mascotMessage: "This is SUPER important! Remember this word! 🌟",
      teacherNotes: {
        questions: [
          "What's an algorithm?",
          "Can you think of steps you follow every day?",
        ],
        expectedAnswers: [
          "A list of steps",
          "Brushing teeth, getting dressed, etc.",
        ],
        tips: [
          "Repeat the word 'Algorithm' multiple times",
          "Make students say it together",
          "Connect it to everyday life immediately",
        ],
        transition: "Let me show you an algorithm you already know...",
      },
      bgVariant: "purple",
    },
    {
      id: 7,
      title: "Making a Sandwich 🥪",
      emoji: "🥪",
      type: "content",
      content: [
        "Here's an algorithm for making a sandwich:",
        "Step 1: Get two slices of bread 🍞",
        "Step 2: Put cheese on one slice 🧀",
        "Step 3: Add tomato 🍅",
        "Step 4: Put the other bread on top",
        "Step 5: Eat! 😋",
      ],
      image: "/images/s1-sandwich.webp",
      imagePrompt:
        "Overhead flat-lay photo of sandwich ingredients neatly arranged in numbered steps on a clean white table: bread, cheese, lettuce, tomato, with small number labels, bright natural lighting, food photography style",
      newWord: {
        word: "Step",
        pronunciation: "STEP",
        meaning: "One part of a plan or process",
        example: "The first step is to open the book.",
      },
      mascotMessage: "Yummy! Can I have a sandwich too? 🥪",
      teacherNotes: {
        questions: [
          "Can we eat the sandwich first and then make it?",
          "What happens if we forget the bread?",
          "Can we change the order?",
        ],
        expectedAnswers: [
          "No! We must follow the steps in order!",
          "We won't have a sandwich — just cheese on the table!",
          "Some steps can change, but some must stay in order",
        ],
        tips: [
          "Ask students what happens if you do steps in the wrong order",
          "Make it funny — 'Can we eat it before we make it?'",
          "Emphasize that ORDER matters",
        ],
        transition: "Now let's see if you can put steps in the right order...",
      },
      bgVariant: "default",
    },
    {
      id: 8,
      title: "Put the Steps in Order!",
      emoji: "📝",
      type: "quiz",
      content: ["What is the FIRST step to make a sandwich?"],
      quiz: {
        question: "What should you do FIRST when making a sandwich?",
        options: [
          "🧀 Put cheese on the bread",
          "😋 Eat the sandwich",
          "🍞 Get two slices of bread",
          "🍅 Add tomato",
        ],
        correctIndex: 2,
      },
      newWord: {
        word: "Order",
        pronunciation: "OR-der",
        meaning: "The way things are arranged, first to last",
        example: "The steps must be in the right order!",
      },
      mascotMessage: "What comes first? Think carefully! 🤔",
      teacherNotes: {
        questions: ["Why is this the first step?"],
        expectedAnswers: ["Because we need bread before we can put anything on it!"],
        tips: [
          "If students get it wrong, act it out: 'Let's try putting cheese on... nothing!'",
          "Celebrate when they get it right",
        ],
        transition:
          "Great job! Now let's learn one more thing about computers...",
      },
      bgVariant: "blue",
    },
    {
      id: 9,
      title: "Computers Follow Exactly!",
      emoji: "🤖",
      type: "content",
      content: [
        "Computers NEVER guess.",
        "Computers NEVER think on their own.",
        "They follow instructions EXACTLY as we write them.",
        "If we write a wrong instruction...",
        "The computer does the WRONG thing! 😱",
      ],
      image: "/images/s1-robot.webp",
      imagePrompt:
        "A friendly cute robot with big expressive eyes following arrows on the floor in a bright modern room, the robot looks determined and focused, realistic 3D render, warm lighting, playful atmosphere",
      newWord: {
        word: "Instruction",
        pronunciation: "in-STRUC-tion",
        meaning: "A command that tells someone what to do",
        example: "The robot follows my instruction to move forward.",
      },
      mascotMessage: "I follow every step — even the wrong ones! 😅",
      teacherNotes: {
        questions: [
          "What happens if we give a wrong instruction?",
          "Does the computer say 'that's wrong, let me fix it'?",
        ],
        expectedAnswers: [
          "The computer does the wrong thing!",
          "No! It just does what we told it to do!",
        ],
        tips: [
          "Emphasize: computers are OBEDIENT, not SMART",
          "This is the key lesson: responsibility is on the programmer",
        ],
        transition:
          "Now let's try being programmers ourselves with a fun game!",
      },
      bgVariant: "default",
    },
    {
      id: 10,
      title: "Let's Play a Game!",
      emoji: "🐰",
      type: "content",
      content: [
        "Now it's YOUR turn to be a programmer! 🎮",
        "We're going to control a rabbit.",
        "The rabbit can NOT think by itself.",
        "It only follows YOUR instructions!",
        "Give it the right steps to reach the goal! 🥕",
      ],
      image: "/images/s1-rabbit-intro.webp",
      imagePrompt:
        "A cute cartoon white rabbit standing at the start of a simple maze, looking at the player expectantly, colorful blocks and arrows around it, bright playful style, game-like environment, 3D cartoon render",
      newWord: {
        word: "Control",
        pronunciation: "con-TROL",
        meaning: "To make something do what you want",
        example: "I control the rabbit by giving it instructions.",
      },
      mascotMessage: "Time to play! Give me instructions! 🎮🐰",
      teacherNotes: {
        questions: [
          "What do you think the rabbit will do?",
          "Will it find its way alone?",
        ],
        expectedAnswers: [
          "Follow our instructions!",
          "No! We need to tell it every step!",
        ],
        tips: [
          "Build excitement before opening the game",
          "Remind them: the rabbit is like a computer — it only follows instructions",
          "Let students try one at a time or as a group",
        ],
        transition: "Ready? Let's open the game!",
      },
      bgVariant: "orange",
    },
    {
      id: 11,
      title: "Rabbit Run! 🎮",
      emoji: "🎮",
      type: "game",
      content: [
        "Help the rabbit reach the carrot! 🥕",
        "Use the arrows to give instructions.",
        "Remember: the rabbit follows your steps EXACTLY!",
      ],
      gameUrl: "https://www.kidlocoding.com/basic-coding/rabbitrun",
      newWord: {
        word: "Game",
        pronunciation: "GAYM",
        meaning: "A fun activity with rules",
        example: "This coding game teaches us how to give instructions!",
      },
      mascotMessage: "Guide me to the carrot! I'm hungry! 🥕",
      teacherNotes: {
        questions: [
          "What direction should the rabbit go?",
          "How many steps does it need?",
        ],
        expectedAnswers: [
          "Let students figure it out",
          "Count the squares together",
        ],
        tips: [
          "Let multiple students try",
          "When they fail, ask: what went wrong?",
          "Connect failures to: wrong algorithm = wrong result",
          "Celebrate successes enthusiastically",
        ],
        transition:
          "Amazing! Let's talk about what we learned from this game...",
      },
      bgVariant: "green",
    },
    {
      id: 12,
      title: "What Did We Learn?",
      emoji: "💬",
      type: "review",
      content: [
        "Let's think about what happened in the game!",
      ],
      reviewPoints: [
        "✅ Computers do NOT think — they follow instructions",
        "✅ Humans and computers use different languages",
        "✅ An Algorithm is a list of ordered steps",
        "✅ The ORDER of steps matters!",
        "✅ Wrong instructions = Wrong result!",
        "✅ We are learning to THINK like programmers!",
      ],
      image: "/images/s1-review.webp",
      imagePrompt:
        "A happy child giving a thumbs up in front of a computer screen showing a completed puzzle, bright modern classroom, celebration confetti, realistic photography, warm lighting",
      newWord: {
        word: "Review",
        pronunciation: "re-VIEW",
        meaning: "To look back at what you learned",
        example: "Let's do a review of today's lesson!",
      },
      mascotMessage: "You're all AMAZING! I'm so proud! 🌟🐰",
      teacherNotes: {
        questions: [
          "Did the rabbit think by itself?",
          "What happened when we forgot a step?",
          "What happened when the order was wrong?",
          "What is an algorithm?",
        ],
        expectedAnswers: [
          "No! We had to tell it everything!",
          "The rabbit went to the wrong place!",
          "It didn't work correctly!",
          "A list of steps in order!",
        ],
        tips: [
          "Go through each review point with energy",
          "Ask students to repeat key concepts",
          "End with encouragement: 'You're becoming programmers!'",
        ],
        transition:
          "Great work today! Before we go, here's a fun homework challenge...",
      },
      bgVariant: "purple",
    },
    {
      id: 13,
      title: "Homework Challenge! 📝",
      emoji: "📝",
      type: "homework",
      content: [
        "Write the steps (algorithm) for ONE of these:",
        "🏫 Going to school in the morning",
        "OR",
        "🥪 Making your favorite sandwich",
        "Write each step on a new line!",
        "Remember: the order matters! 📋",
      ],
      image: "/images/s1-homework.webp",
      imagePrompt:
        "A child sitting at a desk writing in a colorful notebook with a big smile, pencils and crayons around, bright bedroom, realistic photography, warm natural lighting, cozy atmosphere",
      newWord: {
        word: "Homework",
        pronunciation: "HOME-work",
        meaning: "Work you do at home to practice what you learned",
        example: "My homework is to write an algorithm!",
      },
      mascotMessage: "See you next time! Practice your algorithms! 👋🐰",
      teacherNotes: {
        questions: [
          "Which one would you like to write about?",
          "How many steps do you think you'll need?",
        ],
        expectedAnswers: [
          "Let them choose freely",
          "Usually 5-10 steps is good for their age",
        ],
        tips: [
          "Encourage parents to help",
          "Remind them there's no wrong answer — just try!",
          "We'll review their algorithms next session",
        ],
        transition: "See you next session! You did amazing today! 🌟",
      },
      bgVariant: "default",
    },
  ],
};
