function randomCard() {
  let numberRandom = Math.floor(Math.random() * 10 + 2);
  document.getElementById("number").innerHTML = numberRandom;
  let icons = ["♦", "♥", "♠", "♣"];
  let iconsDivs = document.querySelectorAll("iconos");
  let randomIcon = [Math.floor(Math.random() * 4)];
  iconsDivs[0].innerHTML = icons[randomIcon];
  iconsDivs[1].innerHTML = icons[randomIcon];
  //
}
