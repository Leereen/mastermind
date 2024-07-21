const { appendToCheck } = require("./documentLib");

const resultatGame = document.getElementById("resultatGame");
let resultat = "";

const arrayColorPossible = [
  "Bleu",
  "Verte",
  "Rouge",
  "Jaune",
  "Violet",
  "Orange",
  "Rose",
  "Marron",
];

function statutValue(essai, goodValue, badValue) {
  for (let i = 0; i < 13; i++) {
    let compteur = i;
    if (essai === i) {
      for (let i = 0; i < goodValue; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "bouleBlanche";
        appendToCheck(compteur + 1, newDiv);
      }

      for (let i = 0; i < badValue; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "bouleNoire";
        appendToCheck(compteur + 1, newDiv);
      }
    }
  }
}

function checkColor(guess, codeSecret) {
  let goodValue = 0;
  let badValue = 0;
  for (let i = 0; i < 4; i++) {
    if (guess[i] === codeSecret[i]) {
      goodValue += 1;
    } else if (
      guess[i] === codeSecret[(i + 1) % 4] ||
      guess[i] === codeSecret[(i + 2) % 4] ||
      guess[i] === codeSecret[(i + 3) % 4]
    ) {
      badValue += 1;
    }
  }
  if (goodValue === 4) {
      return true;
  }
  else {
    statutValue(essai, goodValue, badValue);
    return false;
  }
}

function triggerWin() {
  let audio = new Audio(
    "musique/CRWDCheer_Cris et applaudissements d ados 1 (ID 0236)_LS.ogg"
  );
  audio.play();

  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);

  Swal.fire({
    title: "Vous avez gagné!🥳",
    width: 300,
    confirmButtonText: "Rejouer",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
}


function secretCode() {
  let index0 = arrayColorPossible[Math.floor(Math.random() * 8)];
  let index1 = arrayColorPossible[Math.floor(Math.random() * 8)];
  let index2 = arrayColorPossible[Math.floor(Math.random() * 8)];
  let index3 = arrayColorPossible[Math.floor(Math.random() * 8)];
  let codeSecret = [index0, index1, index2, index3];
  return codeSecret;
}


function gamePlay(proposition, codeSecret) {
  let guess = proposition;
  if (checkColor(guess, codeSecret)) {
    triggerWin();
  }
}


module.exports = { statutValue, checkColor };
