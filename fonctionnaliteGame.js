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
  console.log("je suis rentrée dans statutValue");

  for (let i = 0; i < 13; i++) {
    let compteur = i;
    if (essai === i) {
      console.log("good ds checkcolor" + goodValue);
      console.log("bad ds checkcolor" + badValue);
      for (let i = 0; i < goodValue; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "bouleBlanche";
        document
          .querySelector("#checkEssai" + (compteur + 1))
          .appendChild(newDiv);
      }

      for (let i = 0; i < badValue; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "bouleNoire";
        document
          .querySelector("#checkEssai" + (compteur + 1))
          .appendChild(newDiv);
        console.log(compteur);
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
    Swal.fire({
      title: "Vous avez gagné!🥳",
      width: 300,
      confirmButtonText: "Rejouer",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
    return true;
  } else {
    statutValue(essai, goodValue, badValue);
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
  let guess = proposition;
  win = checkColor(guess, codeSecret);
}
