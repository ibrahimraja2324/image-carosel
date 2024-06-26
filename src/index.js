import "./styles/main.css";

import right from "./right.js";
import left from "./left.js";
import loadPage from "./load-page.js";

document.addEventListener("DOMContentLoaded", () => {
  loadPage();
  setInterval(left, 3000);
});

document.getElementById("left").addEventListener("click", () => {
  left();
});

document.getElementById("right").addEventListener("click", () => {
  right();
});
