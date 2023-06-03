const music = [
  {
    id: 1,
    question: "Which of the following is not a type of music notation?",
    options: [
      "Standard notation",
      "Tab notation",
      "Morse code notation",
      "Graphics notation",
    ],
    answer: "Morse code notation",
    category: "music",
  },
  {
    id: 2,
    question: "What is the most common time signature in classical music?",
    options: ["3/4", "4/4", "5/4", "6/8"],
    answer: "4/4",
    category: "music",
  },
  {
    id: 3,
    question:
      "Which of the following is not a type of instrument in a symphony orchestra?",
    options: ["Violin", "Piano", "Harp", "Theremin"],
    answer: "Theremin",
    category: "music",
  },
  {
    id: 4,
    question: "What is the most common key in pop music?",
    options: ["C Major", "G Major", "D Major", "A Major"],
    answer: "C Major",
    category: "music",
  },
  {
    id: 5,
    question: "Which of the following is not a type of chord?",
    options: ["Major", "Minor", "Diminished", "Flat"],
    answer: "Flat",
    category: "music",
  },
  {
    id: 6,
    question: "Which of the following is not a type of music genre?",
    options: ["Jazz", "Blues", "Rock", "Applesauce"],
    answer: "Applesauce",
    category: "music",
  },
  {
    id: 7,
    question: "Which of the following is not a type of music theory?",
    options: ["Harmony", "Counterpoint", "Form", "Cooking"],
    answer: "Cooking",
    category: "music",
  },
  {
    id: 8,
    question: "What is the most common tempo marking in classical music?",
    options: ["Allegro", "Andante", "Adagio", "Moderato"],
    answer: "Allegro",
    category: "music",
  },
  {
    id: 9,
    question: "Which of the following is not a type of musical form?",
    options: ["Sonata", "Symphony", "Concerto", "Spaghetti"],
    answer: "Spaghetti",
    category: "music",
  },
  {
    id: 10,
    question:
      "Which of the following is not a type of music notation software?",
    options: ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
    answer: "Microsoft Word",
    category: "music",
  },
];

const modernArt = [
  {
    id: 11,
    question: "Which artist is known for coining the term 'Surrealism'?",
    options: [
      "Pablo Picasso",
      "Salvador Dali",
      "Vincent van Gogh",
      "Henri Matisse",
    ],
    answer: "Salvador Dali",
    category: "modern-art",
  },
  {
    id: 12,
    question:
      "Which movement is associated with the use of abstract forms and shapes in art?",
    options: ["Impressionism", "Expressionism", "Futurism", "Cubism"],
    answer: "Cubism",
    category: "modern-art",
  },
  {
    id: 13,
    question:
      "Which artist is known for painting the work 'The Persistence of Memory'?",
    options: [
      "Pablo Picasso",
      "Salvador Dali",
      "Vincent van Gogh",
      "Henri Matisse",
    ],
    answer: "Salvador Dali",
    category: "modern-art",
  },
  {
    id: 14,
    question: "Which artist is known for creating the painting 'The Scream'?",
    options: [
      "Vincent van Gogh",
      "Salvador Dali",
      "Edvard Munch",
      "Claude Monet",
    ],
    answer: "Edvard Munch",
    category: "modern-art",
  },
  {
    id: 15,
    question:
      "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
    options: ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
    answer: "Fauvism",
    category: "modern-art",
  },
  {
    id: 16,
    question:
      "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
    options: [
      "Impressionism",
      "Futurism",
      "Surrealism",
      "Abstract Expressionism",
    ],
    answer: "Futurism",
    category: "modern-art",
  },
  {
    id: 17,
    question: "Which artist is known for creating the painting 'Water Lilies'?",
    options: ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
    answer: "Claude Monet",
    category: "modern-art",
  },
  {
    id: 18,
    question:
      "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
    options: [
      "Henri Matisse",
      "Vincent van Gogh",
      "Salvador Dali",
      "Pablo Picasso",
    ],
    answer: "Pablo Picasso",
    category: "modern-art",
  },
  {
    id: 19,
    question: "Which artist is known for creating the painting 'Guernica'?",
    options: [
      "Claude Mone",
      "Paul Cezanne",
      "Pablo Picasso",
      "Vincent van Gogh",
    ],
    answer: "Pablo Picasso",
    category: "modern-art",
  },
  {
    id: 20,
    question: "Which artist is known for creating the sculpture 'The Thinker'?",
    options: ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
    answer: "Auguste Rodin",
    category: "modern-art",
  },
];

const coding = [
  {
    id: 21,
    question: "What is the correct syntax for an if statement in Python?",
    options: [
      "if (condition):",
      "if condition",
      "if: condition",
      "if condition:",
    ],
    answer: "if condition:",
    category: "coding",
  },
  {
    id: 22,
    question: "Which of the following is not a data type in JavaScript?",
    options: ["String", "Number", "Boolean", "ArrayList"],
    answer: "ArrayList",
    category: "coding",
  },
  {
    id: 23,
    question: "Which of the following is used to declare a variable in Java?",
    options: ["var", "let", "const", "int"],
    answer: "int",
    category: "coding",
  },
  {
    id: 24,
    question: "What is the correct syntax for a for loop in C#?",
    options: [
      "for i = 0 to 10",
      "for (i = 0; i <= 10; i++)",
      "for (int i = 0; i <= 10)",
      "for i in range(0, 10)",
    ],
    answer: "for (i = 0; i <= 10; i++)",
    category: "coding",
  },
  {
    id: 25,
    question: "Which of the following is not a looping structure in PHP?",
    options: ["while", "for", "do-while", "foreach"],
    answer: "foreach",
    category: "coding",
  },
  {
    id: 26,
    question: "Which of the following is not a valid operator in C++?",
    options: ["+", "-", "*", "$"],
    answer: "$",
    category: "coding",
  },
  {
    id: 27,
    question:
      "In which programming language is 'print' used for displaying output?",
    options: ["Python", "JavaScript", "Java", "C++"],
    answer: "Python",
    category: "coding",
  },
  {
    id: 28,
    question: "What is the correct syntax for a function in Ruby?",
    options: ["function name()", "def name", "function name", "def name()"],
    answer: "def name()",
    category: "coding",
  },
  {
    id: 29,
    question: "Which of the following is not a type of variable in Swift?",
    options: ["Int", "String", "Double", "Object"],
    answer: "Object",
    category: "coding",
  },
  {
    id: 30,
    question: "In which programming language is '#' used for commenting?",
    options: ["Python", "JavaScript", "Java", "C++"],
    answer: "C++",
    category: "coding",
  },
];

document.getElementById("musicBtn").addEventListener("click", function () {
  displayQuestions(music);
});

document.getElementById("artBtn").addEventListener("click", function () {
  displayQuestions(modernArt);
});

document.getElementById("codingBtn").addEventListener("click", function () {
  displayQuestions(coding);
});

function displayQuestions(questions) {
  let index = 0;
  let score = 0;

  function showQuestion() {
    let question = questions[index];

    let questionElement = document.createElement("div");
    questionElement.innerHTML = `<h2>Question ${index + 1}</h2><p>${
      question.question
    }</p>
    <p><input type="radio" name="option" value="${question.options[0]}"/> ${
      question.options[0]
    }</p>
    <p><input type="radio" name="option" value="${question.options[1]}"/> ${
      question.options[1]
    }</p>
    <p><input type="radio" name="option" value="${question.options[2]}"/> ${
      question.options[2]
    }</p>
    <p><input type="radio" name="option" value="${question.options[3]}"/> ${
      question.options[3]
    }</p>
    `;
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").appendChild(questionElement);

    let backButton = document.createElement("button");
    backButton.innerHTML = "Back";
    backButton.addEventListener("click", previousQuestion);
    document.getElementById("main").appendChild(backButton);

    let nextButton = document.createElement("button");
    nextButton.innerHTML = "Next";
    nextButton.addEventListener("click", nextQuestion);
    document.getElementById("main").appendChild(nextButton);
  }

  function nextQuestion() {
    let selectedOption = document.querySelector("input[name='option']:checked");

    if (selectedOption) {
      let selectedAnswer = selectedOption.value;
      let question = questions[index];

      if (selectedAnswer === question.answer) {
        score++;
      }

      index++;

      if (index < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }
  }

  function previousQuestion() {
    index--;
    if (index >= 0) {
      showQuestion();
    }
  }

  function showScore() {
    document.getElementById("main").innerHTML = `<h2>Quiz Completed!</h2>
    <p>Your score is: ${score}/${questions.length}</p>`;

    let backButton = document.createElement("button");
    backButton.innerHTML = "Go Back";
    backButton.addEventListener("click", () => {
      location.reload();
    });
    document.getElementById("main").append(backButton);
  }
  showQuestion();
}
