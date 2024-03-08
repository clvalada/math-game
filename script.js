const questions = [
    {
        question: "Hockey games consist of three 20-minute periods. If a player has played 2 full periods, how many minutes has he or she played?",
        choices: ["2","20","30","40"],
        correctAnswer: 1,
    },
    {
        question: "A professional basedball game has 9 innings. Each point is called a 'run' If a team scored 2 runs in the first inning, 4 runs in the second inning, and 1 run in each remaining inning, how many total runs did they score?",
        choices: ["6","9","10","12"],
        correctAnswer: 2,
    },
    {
        question: "If the home team scored 3 points and the visiting team scored 5, how many total points have been scored?",
        choices: ["8","9","13","33"],
        correctAnswer: 0,
    },
    {
        question: "In football, Field Goals are worth 3 points. If a team has 9 points and has only scored Field Goals, how many field goals did they kick?",
        choices: ["9","2","3","6"],
        correctAnswer: 2,
    },
    {
        question: "In golf, the lowest score wins. If Michelle has scored a 90, Matthew scored 110, and Michael has scored a 100, who won the game?",
        choices: ["Michael","Michelle","Matthew","Its a tie"],
        correctAnswer: 1,
    },
    {
        question: "In football, a Touchdown is worth 6 points and an extra point (or PAT) is worth 1 point. How many points did a team score with 3 touchdowns and 2 extra points?",
        choices: ["13", "24","12","20"],
        correctAnswer: 3,
    }
]

const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const resultsContainer = document.getElementById("results");

let currentQuestion = 0;
let score = 0;
let quizEnded = false;
let timerInterval; 
let timeLeft = 60; 
let wrongAnswers = 0;

// Start of quiz. Replaces the Start button with the timer and first question
function startQuiz() {
    const startButton = document.getElementById("start-button");
    startButton.style.display = "none";
    startTimer();
    displayQuestion();
}

// Starts the timer and shows the timer
function startTimer() {
    const timerContainer = document.getElementById("timer-container");
    timerContainer.style.display = "block";
    timerInterval = setInterval(() => {
        if (currentQuestion < questions.length) {
            timeLeft--;
            if (timeLeft < 0) {
                timeLeft = 0;
            }
            const timerDisplay = document.getElementById("timer");
            timerDisplay.textContent = `Time Remaining: ${timeLeft} seconds`;
            if (timeLeft === 0) {
                clearInterval(timerInterval); 
                handleQuizEnd();
            }
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}
    

// Event listener that starts the quiz when the "Start" button is clicked
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);

//Functions for displaying questions
function displayQuestion() {
    const currentQuestionObj = questions[currentQuestion];
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

//Checks the answers as long as time is remaining
function checkAnswer(answerIndex) {
    if (timeLeft <= 0) {
        return;
    }
    const currentQuestionObj = questions[currentQuestion];
    if (answerIndex === currentQuestionObj.correctAnswer) {
        score++; 
    } else {
        wrongAnswers++;
        timeLeft -= 10;
    }

    // Move to the next question or finish the quiz
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResults();
    }
}

// End of Quiz. Stop timer. Alert if time expired. Display results. Ask for intials
function handleQuizEnd() {
    quizEnded = true;
    clearInterval(timerInterval);
    if (timeLeft <= 0) {
        alert("Time's up! Your quiz has ended.");
    } else {
        const initialsContainer = document.getElementById("initials-container");
        initialsContainer.style.display = "block";
        const resultsContainer = document.getElementById("results-container");
        resultsContainer.style.display = "block";
    }
}

function displayResults() {
    // Hide the question and choices containers
    questionContainer.style.display = "none";
    choicesContainer.style.display = "none";

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
