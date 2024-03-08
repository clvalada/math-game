const questions = [
    {
        image: 'assets/images/hockey.jpg',
        imageCredit: 'Image by <a href="https://pixabay.com/users/spannach-6568438/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4381206">Sissi Pannach</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4381206">Pixabay</a>',
        question: "Hockey games consist of three 20-minute periods. If a player has played 2 full periods, how many minutes has he or she played?",
        choices: ["2","20","30","40"],
        correctAnswer: 3,
    },
    {
        image: 'assets/images/baseball.jpg',
        imageCredit: 'Image by <a href="https://pixabay.com/users/lcarissimi-683438/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=647423">lcarissimi</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=647423">Pixabay</a>',
        question: "A professional basedball game has 9 innings. Each point is called a 'run' If a team scored 2 runs in the first inning, 4 runs in the second inning, and 1 run in each remaining inning, how many total runs did they score?",
        choices: ["6","9","10","12"],
        correctAnswer: 2,
    },
    {
        image: 'assets/images/runner.jpg',
        imageCredit: 'Image by <a href="https://pixabay.com/users/roxanawilliams1920-20506016/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6252827">roxanawilliams1920</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6252827">Pixabay</a>',
        question: "If Sara can run 1 mile in 10 minutes. How long would it take her to run 3 miles?",
        choices: ["13 minutes", "33 minutes", "30 minutes", "300 minutes"],
        correctAnswer: 2,
    },
    {
        image: 'assets/images/fieldgoal.jpg',
        imageCredit: 'Image by <a href="https://pixabay.com/users/simonar-29780/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=336918">Simona Robová</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=336918">Pixabay</a>',
        question: "In football, Field Goals are worth 3 points. If a team has 9 points and has only scored Field Goals, how many field goals did they kick?",
        choices: ["9","2","3","6"],
        correctAnswer: 2,
    },
    {
        image: 'assets/images/golf.jpg',
        imageCredit: 'Image by <a href="https://pixabay.com/users/22563-22563/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=83869">22563</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=83869">Pixabay</a>',
        question: "In golf, the lowest score wins. If Michelle has scored a 90, Matthew scored 110, and Michael has scored a 100, who won the game?",
        choices: ["Michael","Michelle","Matthew","Its a tie"],
        correctAnswer: 1,
    },
    {
        image: 'assets/images/touchdown.jpg',
        imageCredit: 'Image by <a href="https://pixabay.com/users/keithjj-2328014/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1393110">Keith Johnston</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1393110">Pixabay</a>',
        question: "In football, a Touchdown is worth 6 points and an extra point (or PAT) is worth 1 point. How many points did a team score with 3 touchdowns and 2 extra points?",
        choices: ["13", "24","12","20"],
        correctAnswer: 3,
    }
]

const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question");
const questionImage = document.getElementById("question-image");
const questionImageCredit = document.getElementById("question-image-credit");
const choicesContainer = document.getElementById("choices");
const resultsContainer = document.getElementById("results");

let currentQuestion = 0;
let score = 0;
let quizEnded = false;
let wrongAnswers = 0;

// Start of quiz. Replaces the Start button with the timer and first question
function startQuiz() {
    const startButton = document.getElementById("start-button");
    startButton.style.display = "none";

    const mainContainer = document.querySelector(".main");
    mainContainer.style.display = "none"; // Hide the initial content

    const quizContainer = document.getElementById("quiz");
    quizContainer.style.display = "block"; // Display the quiz content

    displayQuestion();
}
    

// Event listener that starts the quiz when the "Start" button is clicked
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);

function displayQuestion() {
    const currentQuestionObj = questions[currentQuestion];
    const currentQuestionImage = currentQuestionObj.image;
    const currentQuestionImageCredit = currentQuestionObj.imageCredit;

    // Display the image
    const imageElement = document.getElementById("question-image");
    imageElement.innerHTML = `<img src="${currentQuestionImage}" alt="Question Image">`;

    // Display the image credit
    const creditElement = document.getElementById("question-image-credit");
    creditElement.innerHTML = currentQuestionImageCredit;

    // Display the question
    questionContainer.textContent = currentQuestionObj.question;
    choicesContainer.innerHTML = '';

    // Creates buttons for each choice
    currentQuestionObj.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => {
            checkAnswer(index); 
        });
        choicesContainer.appendChild(choiceButton);
    });
}

//Checks the answers
function checkAnswer(answerIndex) {
    const currentQuestionObj = questions[currentQuestion];
    if (answerIndex === currentQuestionObj.correctAnswer) {
        score++; 
    } else {
        wrongAnswers++;
    }

    // Move to the next question or finish the quiz
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResults();
    }
}

// End of Quiz. Display results. Ask for initials
function handleQuizEnd() {
    quizEnded = true;

    const initialsContainer = document.getElementById("initials-container");
    initialsContainer.style.display = "block";
    const resultsContainer = document.getElementById("results");
    resultsContainer.style.display = "block";
}

function displayResults() {
    // Hide the question and choices containers
    questionContainer.style.display = "none";
    choicesContainer.style.display = "none";
    quizContainer.style.display = "none";

    // Show the initials input field and save button
    const initialsContainer = document.getElementById("initials-container");
    initialsContainer.style.display = "block";

    // Display the user's score
    resultsContainer.textContent = `You scored ${score} out of ${questions.length} questions.`;
    resultsContainer.style.display = "block";
}

//Save user initials and score
const saveButton = document.getElementById("save-initials");
saveButton.addEventListener("click", () => {
    const initialsInput = document.getElementById("initials");
    const initials = initialsInput.value;

    if (initials.trim() !== "") {
        const userScore = {
            initials: initials,
            score: score
        };

        // Check for existing scores
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

        // Add the user's score to the high scores array
        highScores.push(userScore);

        // Sort the high scores array in descending order (highest to lowest)
        highScores.sort((a, b) => b.score - a.score);

        // Keep only the top 5 high scores
        const topScores = highScores.slice(0, 5);

        // Save the updated high scores back to local storage
        localStorage.setItem("highScores", JSON.stringify(topScores));

        // Displays a confirmation message
        alert(`Score saved successfully!`);
    } else {
        // Handle empty input or validation as needed
        alert("Please enter your initials.");
    }
});
