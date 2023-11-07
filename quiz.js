const quesJSON = [
  {
    correctAnswer: 'Droupadi Murmu',
    options: ['Droupadi Murmu', 'APJ Abdul Kalam ', 'Manmohan Singh', 'Narendra Modi'],
    question:
      "Who is the current president of India?",
  },
  {
    correctAnswer: 'Lotus',
    options: [
      'Rose',
      'Sunflower',
      'Lily',
      'Lotus',
    ],
    question:
      "What is the national flower of India?",
  },
  {
    correctAnswer: 'Mango',
    options: [
      'Apple',
      'Melon',
      'Mango',
      'Orange',
    ],
    question:
      'Which is the national fruit of India?',
  },
  {
    correctAnswer: 'Tiger',
    options: [
      'Lion',
      'Tiger',
      'Peacock',
      'Elephant',
    ],
    question: 'Which is the national animal of India?',
  },
  {
    correctAnswer: 'Vande Mataram',
    options: [
      'Vande Mataram',
      'Jana Gana Mana',
      'O Desh Mere',
      'Chak De India',
    ],
    question:
      "What is national song of India?",
  },
];

let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;

//Accessing all the elements:
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl = document.getElementById('next');
const correctEl = document.getElementById('corrAns');
showQuestion();

nextEl.addEventListener('click', () => {
  scoreEl.textContent = `Score: ${score} / ${totalScore}`;
  correctEl.textContent = '';
  nextQuestion();
});

function showQuestion() {
  // Destructuring the object
  const { correctAnswer, options, question } = quesJSON[currentQuestion];

  //Setting question text content
  questionEl.textContent = question;

  const shuffledOptions = shuffleOptions(options);

  //Populating the Options div with the buttons.
  shuffledOptions.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    optionEl.appendChild(btn);

    // Event handling on the button:
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      }
      else {
        score = score - 0.25;
      }
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      correctEl.textContent = `CorrectAns: ${correctAnswer}`;
      // nextQuestion();
    });
  });
}

function nextQuestion() {
  currentQuestion++;
  optionEl.textContent = '';
  if (currentQuestion >= quesJSON.length) {
    questionEl.textContent = 'Quiz Completed!!';
    nextEl.remove();
  }
  else {
    showQuestion();
  }

}

//Shuffling the Options
function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [
      options[j],
      options[i],
    ];
  }
  return options;
}

//   shuffleOptions([1, 2, 3, 4, 5]);