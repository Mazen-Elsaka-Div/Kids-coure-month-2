import { SessionData } from "./types";

export const session5: SessionData = {
  id: 5,
  title: "Introduction to Scratch",
  subtitle: "Let's Start Coding!",
  emoji: "🐱",
  description: "Welcome to Scratch! The easiest and most fun way to make your own games and stories.",
  color: "#F59E0B", // Orange
  slides: [
    {
      id: 1,
      title: "What is Scratch?",
      emoji: "📺",
      type: "video",
      content: ["Let's watch this video to see all the cool things we can make!"],
      videoUrl: "https://www.youtube.com/embed/S2pE8-v2n5k",
      mascotMessage: "You can make games, stories, and animations! 🎮",
      teacherNotes: {
        questions: ["What did you see in the video?", "Do you want to make your own game?"],
        expectedAnswers: ["I saw games!", "Yes!"],
        tips: ["Show excitement about what they are about to learn."],
        transition: "Let's meet our new friend in Scratch!",
      },
      bgVariant: "blue",
    },
    {
      id: 2,
      title: "Meet Scratch Cat!",
      emoji: "😺",
      type: "content",
      content: [
        "This is Scratch Cat!",
        "He is our main character, also called a SPRITE.",
        "A Sprite is a character or object we can program."
      ],
      image: "/images/s5-scratch-cat.png",
      imagePrompt: "The Scratch Cat character waving happily, 2d cartoon style, bright white background",
      newWord: {
        word: "Sprite",
        pronunciation: "SPRY-T",
        meaning: "A character or object in Scratch that you can program",
        example: "My game has a cat sprite and a dog sprite.",
      },
      mascotMessage: "Meow! I am ready to follow your code! 🐾",
      teacherNotes: {
        questions: ["What is a Sprite?", "Can a car be a Sprite?"],
        expectedAnswers: ["A character we program", "Yes!"],
        tips: ["Explain that anything they add to the screen to code is a sprite."],
        transition: "Where does the Sprite live? Let's find out!",
      },
      bgVariant: "orange",
    },
    {
      id: 3,
      title: "The Stage",
      emoji: "🎭",
      type: "content",
      content: [
        "The STAGE is where our Sprites live and play.",
        "It's like a TV screen for our game.",
        "Everything our code does happens on the Stage!"
      ],
      image: "/images/s5-scratch-stage.png",
      imagePrompt: "A simple theater stage with a curtain, bright colors, 2d vector art",
      newWord: {
        word: "Stage",
        pronunciation: "STAY-J",
        meaning: "The screen where your game or story happens",
        example: "The cat sprite is walking on the stage.",
      },
      mascotMessage: "The Stage is our playground! 🎡",
      teacherNotes: {
        questions: ["If the Sprite is an actor, what is the Stage?"],
        expectedAnswers: ["The theater where they act!"],
        tips: ["Compare the stage to a real-life theater stage or a movie screen."],
        transition: "How do we tell the Sprite what to do?",
      },
      bgVariant: "purple",
    },
    {
      id: 4,
      title: "Blocks = Instructions",
      emoji: "🧩",
      type: "content",
      content: [
        "We don't write words to program in Scratch.",
        "We use colorful BLOCKS!",
        "We snap them together like Lego."
      ],
      visualBlocks: [
        {
          type: "action",
          color: "blue",
          label: "Move 10 steps 🚶"
        },
        {
          type: "action",
          color: "purple",
          label: "Say Hello! 👋"
        }
      ],
      mascotMessage: "Code blocks snap together just like puzzle pieces! 🧩",
      teacherNotes: {
        questions: ["Do we need to type hard words to program?", "What do we use instead?"],
        expectedAnswers: ["No!", "Blocks!"],
        tips: ["Show how block colors mean different things (Blue for movement, Purple for looks)."],
        transition: "Let's see our first block!",
      },
      bgVariant: "default",
    },
    {
      id: 5,
      title: "The Move Block",
      emoji: "🏃",
      type: "activity",
      content: [
        "The blue MOVE block makes the Sprite walk.",
        "Let's pretend to be the Scratch Cat!"
      ],
      activitySteps: [
        "Teacher shows the Move 10 steps block.",
        "Students take a step forward.",
        "Change the number! Move 3 steps.",
        "Students take 3 steps."
      ],
      visualBlocks: [
        {
          type: "action",
          color: "blue",
          label: "move ( 3 ) steps"
        }
      ],
      mascotMessage: "The bigger the number, the further I walk! 👟",
      teacherNotes: {
        questions: ["What happens if we say Move 100 steps?"],
        expectedAnswers: ["We move really far!"],
        tips: ["Have the kids physically walk to understand the 'steps' concept."],
        transition: "How do we make the code actually start?",
      },
      bgVariant: "green",
    },
    {
      id: 6,
      title: "Green Flag & Stop Sign",
      emoji: "🏁",
      type: "content",
      content: [
        "The Green Flag means GO! (Start the program)",
        "The Red Stop Sign means STOP! (End the program)",
        "Every game needs a way to start!"
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "When 🟢 Flag clicked",
          children: [
            {
              type: "action",
              color: "blue",
              label: "move ( 10 ) steps"
            }
          ]
        }
      ],
      mascotMessage: "Always start your code with a Yellow Event Block! 🚦",
      teacherNotes: {
        questions: ["What button do we press to play our game?", "What if things go wrong and we need to stop?"],
        expectedAnswers: ["The Green Flag!", "Press the Red Stop Sign!"],
        tips: ["Emphasize that the Green flag is the 'Play' button for their games."],
        transition: "Let's test our knowledge!",
      },
      bgVariant: "blue",
    },
    {
      id: 7,
      title: "Quick Quiz!",
      emoji: "❓",
      type: "quiz",
      content: [
        "Let's see what you remember about Scratch!"
      ],
      quiz: {
        question: "What do we call the character we program in Scratch?",
        options: [
          "A Stage",
          "A Sprite",
          "A Block",
          "A Flag"
        ],
        correctIndex: 1,
      },
      mascotMessage: "You can do it! Think about the Cat! 🐱",
      teacherNotes: {
        questions: ["Can you name a sprite you'd want to use?"],
        expectedAnswers: ["A car, a dinosaur, a wizard!"],
        tips: ["Praise correct answers."],
        transition: "Let's try one more quiz!",
      },
      bgVariant: "orange",
    },
    {
      id: 8,
      title: "Another Quiz!",
      emoji: "🧠",
      type: "quiz",
      content: [
        "One more question to make sure you are Scratch Masters!"
      ],
      quiz: {
        question: "Which button starts our code?",
        options: [
          "The Blue Block",
          "The Red Stop Sign",
          "The Green Flag",
          "The Spacebar"
        ],
        correctIndex: 2,
      },
      mascotMessage: "Green means GO! 🟢",
      teacherNotes: {
        questions: ["What does the red button do?"],
        expectedAnswers: ["Stop the program!"],
        tips: ["Reinforce the start and stop mechanics."],
        transition: "Now, let's look at what we'll do today on the computer.",
      },
      bgVariant: "purple",
    },
    {
      id: 9,
      title: "Your First Program",
      emoji: "💻",
      type: "activity",
      content: [
        "Today, we will go on the computer and open Scratch.",
        "Your mission:",
        "1. Make the cat move.",
        "2. Make the cat say 'Hello!'"
      ],
      activitySteps: [
        "Open Scratch.",
        "Drag a 'When Green Flag Clicked' block.",
        "Drag a 'Move 10 steps' block.",
        "Drag a 'Say Hello' block.",
        "Click the Green Flag!"
      ],
      visualBlocks: [
        {
          type: "wrapper",
          color: "orange",
          label: "When 🟢 Flag clicked",
          children: [
            {
              type: "action",
              color: "blue",
              label: "move ( 10 ) steps"
            },
            {
              type: "action",
              color: "purple",
              label: "say [ Hello! ] for ( 2 ) seconds"
            }
          ]
        }
      ],
      mascotMessage: "I can't wait to walk and talk! 💬",
      teacherNotes: {
        questions: ["Are you ready to code?"],
        expectedAnswers: ["YES!"],
        tips: ["Leave this slide up while the kids move to the computers.", "Walk around and help them snap the blocks together."],
        transition: "Time to wrap up!",
      },
      bgVariant: "green",
    },
    {
      id: 10,
      title: "Reflection",
      emoji: "💡",
      type: "review",
      content: [
        "Wow, you are all real programmers now!",
      ],
      reviewPoints: [
        "What is a Sprite?",
        "What is the Stage?",
        "How do we start our program?",
        "What did your Scratch Cat do today?"
      ],
      mascotMessage: "I loved moving around today! Thank you! 💖",
      teacherNotes: {
        questions: ["Who wants to share what their cat did?"],
        expectedAnswers: ["(Students share their programs)"],
        tips: ["Celebrate their first successful program."],
        transition: "Don't forget your homework!",
      },
      bgVariant: "blue",
    },
    {
      id: 11,
      title: "Homework",
      emoji: "🏠",
      type: "homework",
      content: [
        "Think of a story you want to create in Scratch next time.",
        "Who is the main character (Sprite)?",
        "Where are they (Stage/Backdrop)?"
      ],
      image: "/images/s5-homework.png",
      imagePrompt: "A child drawing a story on a piece of paper, colorful, cozy room, realistic photography",
      mascotMessage: "Dream big! Next time we will make amazing stories! 🌠",
      teacherNotes: {
        questions: ["What is your favorite animal? Maybe they can be your sprite!"],
        expectedAnswers: ["Dog, Dragon, Bird"],
        tips: ["Encourage them to draw their character on paper at home."],
        transition: "Great job today, see you next time!",
      },
      bgVariant: "orange",
    }
  ],
};
