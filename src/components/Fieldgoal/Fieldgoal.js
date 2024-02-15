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
    const strengthText = document.querySelector("#healthText");
    const accuracyText = document.querySelector("#goldText");
    const image = document.querySelector('#imagePlaceholder');
    const photoCredit = document.querySelector('#photoCredit');

    const locations = [
        {
          name: "Locker Room",
          "button text": ["Practice Field", "Classroom", "Game Day"],
          "button functions": [goPractice, goClassroom, goPlay],
          text: "You are in the locker room. where would you like to go?",
          image: "images/town-square.jpg",
          photoCredit: 'Image by <a href="https://pixabay.com/users/chiemseherin-1425977/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7253426">Christel</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7253426">Pixabay</a>'
        },
        {
          name: "store",
          "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
          "button functions": [buyHealth, buyWeapon, goTown],
          text: "You enter the store.",
          image: "images/store.jpg",
          photoCredit: 'Image by <a href="https://pixabay.com/users/birgitkeil-6458071/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2755266">Birgit Keil</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2755266">Pixabay</a>'
        },
        {
          name: "cave",
          "button text": ["Fight Slime-O", "Fight The Beast", "Go to town square"],
          "button functions": [fightSlime, fightBeast, goTown],
          text: "You enter the cave. You see some monsters.",
          image: "images/cave.jpg",
          photoCredit: 'Image by <a href="https://pixabay.com/users/hans-2/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=95193">Hans</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=95193">Pixabay</a>'
        },
        {
          name: "fight",
          "button text": ["Attack", "Dodge", "Run"],
          "button functions": [attack, dodge, goTown],
          text: "You are fighting a monster.",
          image: "images/fight.jpg",
          photoCredit: 'Image by <a href="https://pixabay.com/users/azboomer-25561/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=790815">Bruce</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=790815">Pixabay</a>'
        },
        {
            name: "kill monster",
            "button text": ["Go to the town square", "Go to the town square", "Go to the town square"],
            "button functions": [goTown, goTown, easterEgg],
            text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
            image: "images/kill-monster.jpg",
            photoCredit: 'Image by <a href="https://www.deviantart.com/thomashauser/gallery">Thomas Hauser</a> from <a href="https://www.deviantart.com/thomashauser/art/Slayed-Dragon-865567862">Deviant Art</a>'
        },
        {
            name: "lose",
            "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
            "button functions": [restart, restart, restart],
            text: "You die. ☠️",
            image: "images/lose.jpg",
            photoCredit: 'Image by <a href="https://pixabay.com/users/jaymethunt-12275/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=321443">jaymethunt</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=321443">Pixabay</a>'
        },
        {
            name: "win",
            "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
            "button functions": [restart, restart, restart],
            text: "You defeat the dragon! YOU WIN THE GAME! 🎉",
            image: "images/victory.jpg",
            photoCredit: 'Image by <a href="https://pixabay.com/users/sarahrichterart-1546275/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3084651">Sarah Richter</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3084651">Pixabay</a>'
        },
        {
            name: "easter egg",
            "button text": ["2", "8", "Go to town square?"],
            "button functions": [pickTwo, pickEight, goTown],
            text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
            image: "images/easter-egg.jpg",
            photoCredit: 'Image by <a href="https://pixabay.com/users/thorstenf-7677369/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4178462">Thorsten Frenzel</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4178462">Pixabay</a>'
        } 
    ];

const Gameplay = () => {
            return (  
        <div className='gameplay'>
            <p>Work your way from Rookie to All-Pro in this Football RPG .</p>
        </div>
    );
}
 
export default Gameplay;