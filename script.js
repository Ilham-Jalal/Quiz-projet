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
      question: "Quel est le rôle de la balise <div> en HTML ?",
      responses: [
        { text: "Pour créer des listes", isCorrect: false },
        { text: "Pour diviser le contenu en sections génériques", isCorrect: true },
        { text: "Pour créer des liens hypertextes", isCorrect: false }
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
  
  // Fonction pour afficher une question spécifique
  function displayQuestion(id) {
      const question = myQuestions[id];
      const questionContainer = document.getElementById("question");
      const responsesContainer = document.getElementById("reponses");
    
      questionContainer.textContent = question.question;
      responsesContainer.innerHTML = "";
    
      question.responses.forEach((response, index) => {
          const button = document.createElement("button");
          button.textContent = response.text;
          button.classList.add("btn");
          button.dataset.index = index;
          responsesContainer.appendChild(button);
      });
  }
  
  // Initialisation avec la première question
  let currentQuestion = 0;
  displayQuestion(currentQuestion);
  
  // Gestionnaire d'événement pour les réponses
  document.getElementById("reponses").addEventListener("click", function(event) {
      const selectedButton = event.target;
      const selectedResponse = myQuestions[currentQuestion].responses[selectedButton.dataset.index];
    
      if (selectedResponse.isCorrect) {
          selectedButton.style.backgroundColor = "green";
      } else {
          selectedButton.style.backgroundColor = "red";
      }
  
      // Délai avant de passer à la question suivante
      setTimeout(function() {
          currentQuestion++;
          if (currentQuestion < myQuestions.length) {
              displayQuestion(currentQuestion);
          } else {
              // Afficher les résultats ou effectuer une action appropriée
              displayScore();
          }
      }, 1000);
    });
  function displayScore() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `<h2>Votre score : ${score} sur ${myQuestions.length}</h2>`;
}
document.addEventListener("DOMContentLoaded", () => {
    displayQuestion(currentQuestion);
});

  