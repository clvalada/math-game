import React from "react";
import './Fieldgoal.css';

    let xp = 0;
    let strength = 100;
    let stamina = 50;
    let accuracy = 50;
    

    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector("#button2");
    const button3 = document.querySelector("#button3");
    const text = document.querySelector("#text");
    const xpText = document.querySelector("#xpText");
    const strengthText = document.querySelector("#strengthText");
    const staminaText = document.querySelector("staminaText");
    const accuracyText = document.querySelector("#accuracyText");
    const image = document.querySelector('#imagePlaceholder');
    const photoCredit = document.querySelector('#photoCredit');

    const gameScenarios = [
        {
          name: "Point After Touchdown (PAT)",
          level: 2,
          health: 15
        },
        {
          name: "25-Yard FG",
          level: 8,
          health: 60
        },
        {
          name: "55-Yard FG",
          level: 20,
          health: 300
        }
    ]

    const locations = [
        {
          name: "Locker Room ",
          "button text": ["Go Workout", "Go Practice", "Game Day"],
          "button functions": [goLift, goPractice, goPlay],
          text: "You are in the locker room. Where would you like to go?",
          image: [],
          photoCredit: [],
        },
          {
          name: "Weight Room",
          "button text": ["Lift Weights", "Cardio", "Return to the Locker Room"],
          "button functions": [liftWeights, doCardio, goLockerRoom],
          text: "Lifting weights increases your strength and Cardio increases your stamina.",
          image: [],
          photoCredit: []
        },
        {
          name: "Practice Field",
          "button text": ["Practice PATs ", "Practice Field Goals", "Return to the Locker Room"],
          "button functions": [practicePAT, practiceFG, goLockerRoom],
          text: "You are on the Practice Field. Practicing improves your accuracy.",
          image: [],
          photoCredit: [],
        },
        {
          name: "Game Day",
          "button text": ["Kick PAT", "Kick FG", "Go to Locker Room"],
          "button functions": [kickPAT, KickFG, goLockerRoom],
          text: "It is Game Day",
          image: [],
          photoCredit: [],
        }
    ];

//initialize buttons
button1.onclick = goPractice;
button2.onclick = goClassroom;
button3.onclick = goPlay;

function update(location){
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
    image.src = location.image;
    photoCredit.innerHTML = location.photoCredit;
}

function goLift() {
    update(locations[0]);
}

function goPractice() {
    update(locations[1]);
}

function goPlay() {
    update(locations[2]);
}

const Fieldgoal = () => {
            return (  
                <div id="game">
                <div id="stats">
                  <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
                  <span class="stat">Strength: <strong><span id="strengthText">100</span></strong></span>
                  <span class="stat">Stamina: <strong><span id="staminaText">50</span></strong></span>
                  <span class="stat">Accuracy: <strong><span id="accuracyText">50</span></strong></span>
                </div>
                <div id="controls">
                  <button id="button1">Go Workout</button>
                  <button id="button2">Go Practice</button>
                  <button id="button3">Game Day!</button>
                </div>
                <div id="gamedayStats">
                  <span class="stat">Distance: <strong><span id="distance"></span></strong></span>
                  <span class="stat">Wind: <strong><span id="windspeed"></span></strong></span>
                </div>
                <div id="image">
                  <img id="imagePlaceholder" src="" alt="Image placeholder"></img>
                </div>
                <div id="text">
                    <p>You are a rookie kicker in the Professional Football League. Gain experience, practice hard, and kick game winning field goals to advance from Rookie to All-Pro.</p>
                </div>
                  <p id="photoCredit">Image by <a href="https://pixabay.com/users/chiemseherin-1425977/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7253426">🌼Christel🌼</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7253426">Pixabay</a></p>
              </div>
    );
}
 
export default Fieldgoal;



