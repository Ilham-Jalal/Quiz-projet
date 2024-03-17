const myQuestions = [
  {
    id: 0,
    question: "Quel mot-clé est utilisé pour déclarer une méthode en Java ?",
    responses: [
      { text: "void", isCorrect: true },
      { text: "method", isCorrect: false },
      { text: "function", isCorrect: false }
    ]
  },
  {
    id: 1,
    question: "Quelle est la valeur par défaut de la propriété position en CSS ?",
    responses: [
      { text: "absolute", isCorrect: false },
      { text: "relative", isCorrect: false },
      { text: "static", isCorrect: true }
    ]

  },
  {
    id: 2,
    question: "Quelle propriété CSS est utilisée pour changer la couleur de texte ?",
    responses: [
      { text: "color", isCorrect: true },
      { text: "font-color", isCorrect: false },
      { text: "text-color", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
    responses: [
      { text: "<link>", isCorrect: false },
      { text: "<a>", isCorrect: true },
      { text: "<href>", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "Quel sélecteur CSS sélectionnera tous les éléments <p> dans le document ?",
    responses: [
      { text: ".p", isCorrect: false },
      { text: "#p", isCorrect: false },
      { text: "p", isCorrect: true }
    ]
  }
];

let scores = 0;

const questionContainer = document.getElementById("question");
const responsesContainer = document.getElementById("reponses");
const submit_btn = document.getElementById("submit_btn");
const scor = document.getElementById("score");

function displayQuestion(id) {
  const question = myQuestions[id];
  questionContainer.textContent = question.question;
  responsesContainer.innerHTML = "";

  question.responses.forEach((reponse, index) => {
    const button = document.createElement("button");
    button.textContent = reponse.text;
    button.classList.add("btn");
    button.dataset.index = index;
    responsesContainer.appendChild(button);
  });
}


let currentQuestion = 0;
let answered = false; 

responsesContainer.addEventListener("click", function (event) {
  if (!answered) { 
    const selectedButton = event.target;
    const selectedResponse = myQuestions[currentQuestion].responses[selectedButton.dataset.index];

    if (selectedResponse.isCorrect) {
      selectedButton.style.backgroundColor = "green";
      scores += 10;
      scor.textContent = scores;
    } else {
      selectedButton.style.backgroundColor = "red";
    }

    
    const allButtons = document.querySelectorAll(".btn");
    allButtons.forEach(button => {
      button.disabled = true;
    });

    answered = true; 

    submit_btn.style.display = "block";
  }
});

function nextQuestion() {
  if (answered) { 
    currentQuestion++;
    if (currentQuestion < myQuestions.length) {
      displayQuestion(currentQuestion);
      submit_btn.style.display = "none";
    } else {
      endQuiz();
    }
  }
};

function displayQuestion(id) {
  const question = myQuestions[id];
  questionContainer.textContent = question.question;
  responsesContainer.innerHTML = "";

  question.responses.forEach((reponse, index) => {
    const button = document.createElement("button");
    button.textContent = reponse.text;
    button.classList.add("btn");
    button.dataset.index = index;
    responsesContainer.appendChild(button);
  });

  answered = false;
}

submit_btn.addEventListener("click", () => {
  nextQuestion();
});


function endQuiz() {
  questionContainer.textContent = "Bravo, vous avez terminé le quiz !";
  responsesContainer.innerHTML = "";
  submit_btn.style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  displayQuestion(currentQuestion);
});

function resetQuiz() {
  scores = 0;
  currentQuestion = 0;
  answered = false;
  scor.textContent = scores;
  displayQuestion(currentQuestion);
  submit_btn.style.display = "none";
}
const btnRecommencer = document.getElementById('btnRecommencer');
    btnRecommencer.addEventListener('click', resetQuiz);



submit_btn.addEventListener("click", () => {
  nextQuestion();
})

