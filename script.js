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
displayQuestion(currentQuestion);


responsesContainer.addEventListener("click", function (event) {
  const selectedButton = event.target;
  const selectedResponse = myQuestions[currentQuestion].responses[selectedButton.dataset.index];

  if (selectedResponse.isCorrect) {
    selectedButton.style.backgroundColor = "green";
    scores += 10;
    scor.textContent = scores;
  } else {
    selectedButton.style.backgroundColor = "red";
  }
});

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < myQuestions.length) {
    displayQuestion(currentQuestion);
  } else {
    endQuiz();
  }
};

function endQuiz() {
  questionContainer.textContent = "Bravo, vous avez terminé le quiz !";
  responsesContainer.innerHTML = "";
  submit_btn.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  displayQuestion(currentQuestion);
});

submit_btn.addEventListener("click", () => {
  nextQuestion();
})

