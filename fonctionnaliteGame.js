// function isCorrect(couleurs) {
//   let userColors = couleurs.split(" ");
//   if (userColors.length !== 4) {
//     console.log("mon nombre d'entrée est différent de 4");
//     return false;
//   }
//   else {
//     for (let i = 0; i < userColors.length; i++) {
//       let result = arrayColorPossible.includes(userColors[i]);
//       console.log(result);
//       if (result === false) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
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

// function playerGuess(proposition) {
//   let userInput = prompt(
//     "donne moi 4 couleurs parmi:bleu,vert,rouge,jaune, violet,orange,rose,marron séparées par un espace pour deviner la combinaison stp? par ex: bleu vert jaune rouge'"
//   );
//   let userInput = proposition;
//   while (isCorrect(userInput) === false) {
//     userInput = prompt(
//       "donne moi 4 couleurs parmi:bleu,vert,rouge,jaune, violet,orange,rose,marron séparées par un espace pour deviner la combinaison stp? par ex: bleu vert jaune rouge'"
//     );
//   }
//   return userInput.split(" ");
// }

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
    resultat = "Vous avez gagné";
    resultatGame.innerHTML = resultat;
    return true;
  } else {
    alert(
      "tu n'as pas trouvé la bonne solution, tu as " +
        goodValue +
        " bien placés et bonne couleurs," +
        "tu as " +
        badValue +
        " mal placés mais bonne couleur"
    );
    return false;
  }
}

function secretCode() {
  let index0 = arrayColorPossible[Math.floor(Math.random() * 8)];
  let index1 = arrayColorPossible[Math.floor(Math.random() * 8)];
  let index2 = arrayColorPossible[Math.floor(Math.random() * 8)];
  let index3 = arrayColorPossible[Math.floor(Math.random() * 8)];
  let codeSecret = [index0, index1, index2, index3];
  console.log(codeSecret);
  return codeSecret;
}

function gamePlay(proposition, codeSecret) {
  //let win = false;
  //let essai = 0;
  //do {
  //let guess = playerGuess();
  let guess = proposition;
  win = checkColor(guess, codeSecret);
  // if (win === false) {
  //   //essai += 1;
  //   alert(
  //     "il te reste " +
  //       (12 - parseInt(essai)) +
  //       " essais pour trouver la combinaison"
  //   );
  // } else {
  //   alert("tu as gagné avec " + essai + " essais");
  // }
  //} while (win === false && essai <= 12);
}
