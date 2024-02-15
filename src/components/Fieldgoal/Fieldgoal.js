import React from "react";
import './Fieldgoal.css';

    let xp = 0;
    let strength = 100;
    let accuracy = 50;

    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector("#button2");
    const button3 = document.querySelector("#button3");
    const text = document.querySelector("#text");
    const xpText = document.querySelector("#xpText");
    const strengthText = document.querySelector("#strengthText");
    const accuracyText = document.querySelector("#accuracyText");
    const image = document.querySelector('#imagePlaceholder');
    const photoCredit = document.querySelector('#photoCredit');

    const locations = [
        {
          name: "Locker Room",
          "button text": ["Practice Facility", "Classroom", "Game Day"],
          "button functions": [goPractice, goClassroom, goPlay],
          text: "You are in the locker room. where would you like to go?",
          image: [],
          photoCredit: [],
        },
          {
          name: "Practice Facility",
          "button text": ["Practice Kicking (10 gold)", "Lift Weights (30 gold)", "Go to Locker Room"],
          "button functions": [practiceKicking, liftWeights, goLockerRoom],
          text: "You are in the Practice Facility",
          image: [],
          photoCredit: []
        },
        {
          name: "Classroom",
          "button text": ["Study Game Tape", "Study Playbook", "Go to Locker Room"],
          "button functions": [studyTape, studyPlaybook, goLockerRoom],
          text: "You are in the classroom.",
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

const Fieldgoal = () => {
            return (  
        <div className='gameplay'>
            <p>Work your way from Rookie to All-Pro in this Football RPG .</p>
        </div>
    );
}
 
export default Fieldgoal;