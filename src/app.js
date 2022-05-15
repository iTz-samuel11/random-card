/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numero = document.querySelector("#numero");
let pinta1 = document.querySelector("#pinta-1");
let pinta2 = document.querySelector("#pinta-2");
let numeros = [
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
numero.innerHTML = numeros[Math.floor(Math.random() * 13)];

let pintas = ["♦", "♥", "♣", "♠"];
let pinta = pintas[Math.floor(Math.random() * 4)];
pinta1.innerHTML = pinta;
pinta2.innerHTML = pinta;

console.log(numero);
