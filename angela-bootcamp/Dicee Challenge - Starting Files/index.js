let num = Math.floor(Math.random() * 6);
let num2 = Math.floor(Math.random() * 6);
const pics = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
let left = document.querySelectorAll("img")[0].setAttribute("src", pics[num]);
let right = document.querySelectorAll("img")[1].setAttribute("src", pics[num2]);

if (num > num2) {
  document.querySelector("h1").innerText = "🌟Player 1 Wins";
}
else if (num < num2) {
  document.querySelector("h1").innerText = "🌟Player 2 Wins";
} else {
  document.querySelector("h1").innerText = "Draw"
}
//console.log(num);
