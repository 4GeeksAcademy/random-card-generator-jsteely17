/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ["heart", "diamond", "spade", "club"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suitSymbols = { heart: "♥", diamond: "♦", spade: "♠", club: "♣" };

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const suitSymbol = suitSymbols[randomSuit];

  const cardElement = document.getElementById("card");
  cardElement.classList.add(randomSuit);

  cardElement.innerHTML = `
    <div class="corner top-left">${suitSymbol}</div>
    <div>${randomValue}</div>
    <div class="corner bottom-right">${suitSymbol}</div>
  `;
};
