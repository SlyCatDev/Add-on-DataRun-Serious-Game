const cube = document.querySelector('.cube');
const rollBtn = document.querySelector('.rollBtn');
let currentClass = '';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
  const randNum = getRandomInt(1, 6);
  const showClass = 'show-' + randNum;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}

// écouteur d'événements pour le clic sur le dé
cube.addEventListener("click", rollDice);

rollBtn.addEventListener("click", rollDice);

// Lancer le dé une première fois pour initialiser
rollDice();


