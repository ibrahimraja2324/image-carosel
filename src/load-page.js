import babar from "./assets/images.jpeg";
import virat from "./assets/images1.jpeg";
import warner from "./assets/images2.jpg";

export default function loadPage() {
  const between = document.getElementById("between");
  if (container) {
    const babarImg = document.createElement("img");
    const viratImg = document.createElement("img");
    const warnerImg = document.createElement("img");

    babarImg.id = "babarImg";
    viratImg.id = "viratImg";
    warnerImg.id = "warnerImg";

    babarImg.src = babar;
    viratImg.src = virat;
    warnerImg.src = warner;

    between.appendChild(babarImg);
    between.appendChild(viratImg);
    between.appendChild(warnerImg);

    viratImg.style.display = "none";
    warnerImg.style.display = "none";
  }
}
