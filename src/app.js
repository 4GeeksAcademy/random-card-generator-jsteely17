/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ["♥", "♦", "♠", "♣"];
  const values = [
    "A",
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
    "K"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const cardElement = document.getElementById("card");
  cardElement.classList.add(randomSuit);

  if (randomSuit === "♥" || randomSuit === "♦") {
    cardElement.classList.add("red");
  }

  cardElement.innerHTML = `
    <div class="corner top">${randomSuit}</div>
    <div>${randomValue}</div>
    <div class="corner bottom">${randomSuit}</div>
  `;
};
