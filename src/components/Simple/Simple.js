import React, { useState, useEffect } from "react";
import './Simple.css';
import { questions } from './SimpleQuestions'; // Corrected import statement

const Simple = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  // Use a ref to reference DOM elements
  const questionContainerRef = React.useRef(null);
  const choicesContainerRef = React.useRef(null);
  const resultsContainerRef = React.useRef(null);

  useEffect(() => {
    const startButton = document.getElementById("start-button");
    if (startButton) {
    startButton.addEventListener("click", startQuiz);
    }
    
    return () => clearInterval(timerInterval);
  }, [timerInterval]);

  const startQuiz = () => {
    const startButton = document.getElementById("start-button");
    startButton.style.display = "none";
    startTimer();
    displayQuestion();
  };

  const startTimer = () => {
    const timerContainer = document.getElementById("timer-container");
    timerContainer.style.display = "block";
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (currentQuestion < questions.length) {
          const newTime = prevTime - 1;
          if (newTime < 0) {
            handleQuizEnd();
            return 0;
          }
          return newTime;
        }
        clearInterval(interval);
        return prevTime;
      });
    }, 1000);

    setTimerInterval(interval);
  };

  const displayQuestion = () => {
    const currentQuestionObj = questions[currentQuestion];
    // Use refs to access DOM elements
    questionContainerRef.current.textContent = currentQuestionObj.question;
    choicesContainerRef.current.innerHTML = '';

    currentQuestionObj.choices.forEach((choice, index) => {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click", () => {
        checkAnswer(index);
      });
      choicesContainerRef.current.appendChild(choiceButton);
    });
  };

  const checkAnswer = (answerIndex) => {
    if (timeLeft <= 0) {
      return;
    }
    const currentQuestionObj = questions[currentQuestion];
    if (answerIndex === currentQuestionObj.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setWrongAnswers((prevWrongAnswers) => prevWrongAnswers + 1);
      setTimeLeft((prevTime) => Math.max(prevTime - 10, 0));
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);

    if (currentQuestion + 1 < questions.length) {
      displayQuestion();
    } else {
      handleQuizEnd();
    }
  };

  const handleQuizEnd = () => {
    setQuizEnded(true);
    clearInterval(timerInterval);
    if (timeLeft <= 0) {
      alert("Time's up! Your quiz has ended.");
    } else {
      const initialsContainer = document.getElementById("initials-container");
      initialsContainer.style.display = "block";
      resultsContainerRef.current.style.display = "block"; // Use ref to access DOM element
    }
  };

  const displayResults = () => {
    questionContainerRef.current.style.display = "none";
    choicesContainerRef.current.style.display = "none";

    const initialsContainer = document.getElementById("initials-container");
    initialsContainer.style.display = "block";

    // Use ref to access DOM element
    resultsContainerRef.current.textContent = `You scored ${score} out of ${questions.length} questions.`;
    resultsContainerRef.current.style.display = "block";
  };

  const saveScore = () => {
    const initialsInput = document.getElementById("initials");
    const initials = initialsInput.value;

    if (initials.trim() !== "") {
      const userScore = {
        initials: initials,
        score: score
      };

      const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

      highScores.push(userScore);

      highScores.sort((a, b) => b.score - a.score);

      const topScores = highScores.slice(0, 5);

      localStorage.setItem("highScores", JSON.stringify(topScores));

      alert(`Score saved successfully!`);
    } else {
      alert("Please enter your initials.");
    }
  };

  return (
    <div id="main">
      {/* Use refs to reference DOM elements */}
      <div ref={questionContainerRef}></div>
      <div ref={choicesContainerRef}></div>
      <div ref={resultsContainerRef}></div>
    </div>
  );
};

export default Simple;
