import React from "react";
import './Gameplay.css';

    let xp = 0;
    let strength = 100;
    let accuracy = 50;

    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector("#button2");
    const button3 = document.querySelector("#button3");
    const text = document.querySelector("#text");
    const xpText = document.querySelector("#xpText");
    const strengthText = document.querySelector("#healthText");
    const accuracyText = document.querySelector("#goldText");
    const image = document.querySelector('#imagePlaceholder');
    const photoCredit = document.querySelector('#photoCredit');


const Gameplay = () => {
            return (  
        <div className='gameplay'>
            <p>Work your way from Rookie to All-Pro in this Football RPG .</p>
        </div>
    );
}
 
export default Gameplay;