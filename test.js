let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

const questions = [
  {
    question: "Who is called sunfish?",
    answers: ["Kim Dokja", "Yoo Junheuk", "Klein Morreti", "Cale"],
    correctAnswer: 1
  },
  {
    question: "What novel is a pricvel to orv?",
    answers: ["The World After the End", "The Birth of a Hero", "Three Ways to Survive in Ruined World"],
    correctAnswer: 0
  },
  {
    question: "Who is called a squid?",
    answers: ["Kim Dokja", "Yoo Junheuk", "Klein Morreti", "Cale"],
    correctAnswer: 0
  },
  {
    question: "Who wrote 'Three Ways to Survive in Ruined World'?",
    answers: ["The Oldest Dream", "Han Sooyung 1864", "Han Sooyung 1863", "Dunno"],
    correctAnswer: 0
  },
  {
    question: "What happened to 49%",
    answers: ["Died", "Erased", "Welcome to 41st turn"],
    correctAnswer: 2
  }
];

function showQuestion() {
  const currentQuizItem = questions[currentQuestion];
  questionElement.textContent = currentQuizItem.question;
  
  answerContainer.innerHTML = '';

  currentQuizItem.answers.forEach((answer, index) => {
    const answerButton = document.createElement('button');
    answerButton.textContent = answer;
    answerButton.addEventListener('click', () => checkAnswer(index));
    answerContainer.appendChild(answerButton);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuizItem = questions[currentQuestion];
  if (selectedIndex === currentQuizItem.correctAnswer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  scoreElement.textContent = `You scored ${score} out of ${questions.length}.`;
}

nextButton.addEventListener('click', () => {
  if (currentQuestion < questions.length) {
    showQuestion();
  }
});

showQuestion();
