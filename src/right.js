let currentIndex = 0;
export default function right() {
  var images = [
    document.getElementById("babarImg"),
    document.getElementById("warnerImg"),
    document.getElementById("viratImg"),
  ];

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  images[currentIndex].style.display = "block";
}
