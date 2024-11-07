// Event listener for "Melody's Section" (Tremblement de Terre section)
document.addEventListener('DOMContentLoaded', () => {
    // Array to hold questions, options, and associated images for each option
    const questions = [
        {
            text: "Tu es en classe en train de travailler tranquillement avec tes camarades quand, soudain, tout se met à trembler. Que fais-tu?",
            options: [
                { text: "Se protéger sous un bureau.", nextQuestion: 1, image: "images/Q1-OP1.png" },
                { text: "Courir près des fenêtres", nextQuestion: 2, image: "images/Q1-OP2.png" }
            ]
        },
        {
            text: "Bonne réponse! Le tremblement de terre continue. Que fais-tu ensuite?",
            options: [
                { text: "Reste sous le bureau", nextQuestion: null, image: "images/Q2-OP1.png" },
                { text: "Essaye de sortir de la salle", nextQuestion: null, image: "images/Q2-OP2.png" }
            ]
        },
        {
            text: "Mauvaise réponse! Que fais-tu maintenant?",
            options: [
                { text: "Se protéger sous un bureau", nextQuestion: 1, image: "images/Q3-OP1.png" },
                { text: "Essaye de sortir de la salle", nextQuestion: null, image: "images/Q3-OP2.png" }
            ]
        }
    ];

    let currentQuestionIndex = 0;

    // Function to display a question and update options with an image above each card's text
    function renderQuestion(index) {
        const questionContainer = document.querySelector('.question');
        const cardsContainer = document.getElementById('cardsContainer');

        // Load the current question
        const question = questions[index];
        questionContainer.innerHTML = question.text;

        // Clear existing options and add new ones
        cardsContainer.innerHTML = '';

        // Loop through each option and create a card for each
        question.options.forEach((option, i) => {
            const card = document.createElement('div');
            card.className = `card ${i % 2 === 0 ? 'card-blue' : 'card-green'}`;

            // Add the option-specific image above the option text
            const img = document.createElement('img');
            img.src = option.image; // Use the option's image, not the question's image
            img.alt = "Option Image";
            img.className = "option-image";
            card.appendChild(img);

            // Add the option text to the card
            const optionText = document.createElement('p');
            optionText.textContent = option.text;
            card.appendChild(optionText);

            // Add click event to move to the next question for any card clicked
            card.addEventListener('click', () => {
                if (option.nextQuestion !== null) {
                    renderQuestion(option.nextQuestion);
                } else {
                    alert("Quiz terminé!");
                }
            });

            cardsContainer.appendChild(card);
        });
    }

    // Initial render of the first question
    renderQuestion(currentQuestionIndex);
});
