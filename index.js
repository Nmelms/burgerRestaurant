import { nav } from "./components/navBar.js";

const navBar = document.querySelector(".navBar");
navBar.innerHTML = nav;

const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", () => {
  console.log("hello");
});
console.log("hello");
