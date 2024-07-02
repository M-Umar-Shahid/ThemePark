document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const winMessage = document.getElementById("winMessage");
  const cardValues = [
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "E",
    "E",
    "F",
    "F",
    "G",
    "G",
    "H",
    "H",
  ];
  let flippedCards = [];
  let matchedPairs = 0;

  // Shuffle the card values
  cardValues.sort(() => 0.5 - Math.random());

  // Create the cards
  cardValues.forEach((value) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value;
    card.addEventListener("click", () => flipCard(card));
    gameBoard.appendChild(card);
  });

  function flipCard(card) {
    if (
      card.classList.contains("flipped") ||
      card.classList.contains("matched")
    ) {
      return;
    }

    card.classList.add("flipped");
    card.textContent = card.dataset.value;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      checkForMatch();
    }
  }

  function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedPairs++;
      if (matchedPairs === cardValues.length / 2) {
        setTimeout(() => {
          winMessage.textContent = "Congratulations! You found all matches!";
        }, 500);
      }
    } else {
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.textContent = "";
        card2.textContent = "";
      }, 500);
    }

    flippedCards = [];
  }
});
