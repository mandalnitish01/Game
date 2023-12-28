let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let input = document.getElementById("input");
let scoreoutput = document.getElementById("score");
let score = 0;
let answer;

function renderRandomNumebr() {
  input.value = null;
  let rand1 = Math.floor(Math.random() * 1000);
  let rand2 = Math.floor(Math.random() * 1000);
  answer = rand1 + rand2;
  number1.textContent = rand1;
  number2.textContent = rand2;
}

function checkAnswer() {
  if (answer == input.value) {
    score++;
    showScore(score);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    renderRandomNumebr();
  } else {
    score--;
    renderRandomNumebr();
    if (score < 0) {
      score = 0;
    }
    showScore(score);
  }
}

function showScore(score) {
  scoreoutput.textContent = score;
}

renderRandomNumebr();
