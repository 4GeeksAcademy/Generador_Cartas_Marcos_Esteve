function randomCard() {
  let cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let numberRandom = Math.floor(Math.random() * cardNumbers.length);
  document.getElementById("number").innerHTML = cardNumbers[numberRandom];
  let icons = ["♦", "♥", "♠", "♣"];
  let iconsDivs = document.querySelectorAll(".iconosCartas");
  let randomIcon = Math.floor(Math.random() * 4);
  iconsDivs[0].innerHTML = icons[randomIcon];
  iconsDivs[1].innerHTML = icons[randomIcon];
  //
}
