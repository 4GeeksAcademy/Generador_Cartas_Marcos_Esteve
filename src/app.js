function randomCard() {
  let cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let numberRandom = Math.floor(Math.random() * cardNumbers.length);
  document.getElementById("number").innerHTML = cardNumbers[numberRandom];

  //Bucle para los iconos. De esta forma cambio el tipo de icono y su color.
  let icons = ["♦", "♥", "♠", "♣"];
  let iconsDivs = document.querySelectorAll(".iconosCartas");
  let randomIcon = Math.floor(Math.random() * 4);
  iconsDivs[0].innerHTML = icons[randomIcon];
  iconsDivs[1].innerHTML = icons[randomIcon];
  if (randomIcon === 1) {
    iconsDivs[0].style.color = "red";
    iconsDivs[1].style.color = "red";
  } else {
    iconsDivs[0].style.color = "black";
    iconsDivs[1].style.color = "black";
  }
  //
}
/**for (let i = 0; i < iconsDivs.length; i++) {}**/
