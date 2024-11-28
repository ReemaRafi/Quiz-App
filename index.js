const questions = [
    {
        question: "Which of the following is a valid way to define a function in JavaScript?",
        correctAnswer: "function myFunction() {}",
        options : [
            "function myFunction() {} ",
            " def myFunction() {} ",
             "function: myFunction() {} ",
            " function = myFunction() {} ",
        ]
    },
    {
        question : "What is the purpose of the this keyword in JavaScript?",
        correctAnswer : "It refers to the current object",
        options : [
        " It refers to the current function",
        " It refers to the global object",
        " It refers to the current object",
        " It refers to the parent function",
        ]
    },
    {
        question: "Which of the following data types is not primitive in JavaScript?",
        correctAnswer : "Object",
        options: [ 
        "String",
        "Number",
        "Object",
        "Boolean",
    ]
    },
    {
    question: " Which of the following is not a valid JavaScript variable declaration keyword?",
    correctAnswer: "def",
    options : [
        "let",
        " var",
        "const",
        "def",
    ]
},
];


let currentQuestionIndex = 0;
let score = 0;

// Function to load a question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;
  
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = ''; // Clear previous options
  
  currentQuestion.options.forEach(option => {
    const li = document.createElement("li");
    li.innerText = option;
    li.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(li);
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (selectedOption === correctAnswer) {
    score++;
  }
  
  // Move to next question or show results if it's the last question
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResult();
  }
}

// Function to show the result
function showResult() {
  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  document.getElementById("score").innerText = score;
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").classList.add("hidden");
  document.getElementById("question-container").classList.remove("hidden");
  document.getElementById("next-btn").classList.remove("hidden");
  loadQuestion();
}

// Initialize the quiz
loadQuestion();
