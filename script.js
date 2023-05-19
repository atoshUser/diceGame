const btnRoll = document.querySelector(".btn--roll");
const diceImg = document.querySelector(".dice");

//
let currentScore = 0;
let activePlayer = 0;
btnRoll.addEventListener("click", () => {
    let random = Math.trunc(Math.random() * 6 + 1);
    diceImg.src = `dice-${random}.png`;

    if (random !== 1) {
        currentScore += random;
        document.querySelector(`#current--${activePlayer}`).textContent =
            currentScore;
    } else {
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).textContent =
            currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector(`.player--0`).classList.toggle("player--active");
        document.querySelector(`.player--1`).classList.toggle("player--active");
    }
});
