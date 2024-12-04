const cube = document.querySelector('.cube');
const rollBtn = document.querySelector('.rollBtn');
let currentClass = '';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
  const randNum = getRandomInt(1, 6);
  const showClass = 'show-' + randNum;

  // Toujours jouer une animation de rotation, même si le résultat est identique
  cube.classList.add('rolling');

  // Attendre un court instant pour simuler la rotation
  setTimeout(() => {
    // Supprimer l'ancienne classe
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    // Ajouter la nouvelle classe pour afficher le numéro
    cube.classList.add(showClass);
    currentClass = showClass;

    // Supprimer l'animation de rotation
    cube.classList.remove('rolling');
  }, 1000); // La durée correspondre à l'animation CSS (1.0s)
}

// écouteur d'événements pour le clic sur le dé
cube.addEventListener("click", rollDice);

rollBtn.addEventListener("click", rollDice);

// Lancer le dé une première fois pour initialiser
rollDice();