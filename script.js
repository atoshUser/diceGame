const btnRoll = document.querySelector(".btn--roll");
const diceImg = document.querySelector(".dice");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
const modal = document.querySelector("#modal");
const startBtn = document.querySelector("#startBtn");
const formUser = document.querySelector("#formUser");
let openModalSet = setTimeout(() => {
    modal.style.visibility = "visible";
}, 2000);

formUser.addEventListener("submit", (e) => {
    e.preventDefault();
    let names = document.querySelectorAll(".input");
    names.forEach((item, index) => {
        document.querySelector(`#name--${index}`).textContent = item.value;
    });
    modal.style.visibility = "hidden";
});

//
let currentScore = 0;
let activePlayer = 0;
let total = [0, 0];
let gameOver = true;

// ikkita o'inchilarning malumotlarini o'zgartiruvchi funksiya
const switchPlayer = () => {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--0`).classList.toggle("player--active");
    document.querySelector(`.player--1`).classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
    if (gameOver) {
        let random = Math.trunc(Math.random() * 6 + 1);
        diceImg.src = `dice-${random}.png`;

        if (random !== 1) {
            currentScore += random;
            document.querySelector(`#current--${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
        }
    }
});

const addTotal = () => {
    if (gameOver) {
        total[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent =
            total[activePlayer];
        if (total[activePlayer] > 20) {
            gameOver = false;
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
            document.querySelector(`#winner-${activePlayer}`).style.visibility =
                "visible";
        } else {
            switchPlayer();
        }
    }
};

// hold button

btnHold.addEventListener("click", addTotal);

btnNewGame.addEventListener("click", resetGame);
const textWinner = document.querySelectorAll(".winner");
const currentScores = document.querySelectorAll(".current-score");
function resetGame() {
    currentScore = 0;
    activePlayer = 0;
    total = [0, 0];
    gameOver = true;
    let playerScore = document.querySelectorAll(".score");
    playerScore.forEach((element, index) => {
        element.textContent = currentScore;
        currentScores[index].textContent = currentScore;
    });
    players = document.querySelectorAll(".player");
    players.forEach((element, index) => {
        element.classList.remove("player--winner", "player--active");
        textWinner[index].style.visibility = "hidden";
    });
    players[0].classList.add("player--active");
}
