/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function onLoad() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let primeraleatorio = who[randomWho];

  let randomAction = Math.floor(Math.random() * action.length);
  let segundoleatorio = action[randomAction];

  let randomWhat = Math.floor(Math.random() * what.length);
  let terceraleatorio = what[randomWhat];

  let randomWhen = Math.floor(Math.random() * when.length);
  let cuartoaleatorio = when[randomWhen];

  let concatenacionarray =
    primeraleatorio +
    " " +
    segundoleatorio +
    " " +
    terceraleatorio +
    " " +
    cuartoaleatorio;
  document.getElementById("excuse").innerHTML = concatenacionarray;
};
