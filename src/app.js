function randomCard() {
  let cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let numberRandom = Math.floor(Math.random() * cardNumbers.length);
  document.getElementById("number").innerHTML = cardNumbers[numberRandom];
  let icons = ["♦", "♥", "♠", "♣"];
  let iconsDivs = document.querySelectorAll(".iconosCartas");
  let randomIcon = Math.floor(Math.random() * 4);

  for (let i = 0; i < iconsDivs.length; i++) {
    iconsDivs[i].innerHTML = icons[randomIcon];
    if (randomIcon === 1) {
      iconsDivs[i].style.color = "red";
    } else {
      iconsDivs[i].style.color = "black";
    }
  }
}
function timeGenerator() {
  setInterval(randomCard, 3000);
}

function changeHeight() {
  let valorRango = document.getElementById("customRange1");
  let valueHeight = document.querySelectorAll(".cartasHeight");
  for (let j = 0; j < valueHeight.length; j++) {
    valueHeight[j].style.height = valorRango.value + "px";
  }
}
