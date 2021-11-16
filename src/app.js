/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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
  let randomnumber1 = Math.floor(Math.random() * who.length);
  console.log(who[randomnumber1]);
  let randomnumber2 = Math.floor(Math.random() * action.length);
  console.log(action[randomnumber2]);
  let randomnumber3 = Math.floor(Math.random() * what.length);
  console.log(what[randomnumber3]);
  let randomnumber4 = Math.floor(Math.random() * when.length);
  console.log(when[randomnumber4]);
  document.getElementById("excuse").innerHTML =
    who[randomnumber1] +
    " " +
    action[randomnumber2] +
    " " +
    what[randomnumber3] +
    " " +
    when[randomnumber4];
};
