const validateButton = document.getElementById("validateButton");
console.log(validateButton);
let essai = 0;

function findBouleCouleur(boule) {
  let choixCouleur = [
    "Bleu",
    "Verte",
    "Rouge",
    "Jaune",
    "Violet",
    "Orange",
    "Rose",
    "Marron",
  ];
  for (let i = 0; i < choixCouleur.length; i++) {
    if (boule.classList.contains("boule" + choixCouleur[i]) === true) {
      return choixCouleur[i];
    }
  }
}

const codeSecret = secretCode();

validateButton.addEventListener("click", () => {
  if (essai >= 11) {
    resultat = "Vous avez perdu, la bonne combinaison est " + codeSecret;
    resultatGame.innerHTML = resultat;
  } else {
    let proposition = [];
    let boule1 = bouleVierge[bouleVierge.length - 1 - 0 - essai * 4];
    let boule2 = bouleVierge[bouleVierge.length - 1 - 1 - essai * 4];
    let boule3 = bouleVierge[bouleVierge.length - 1 - 2 - essai * 4];
    let boule4 = bouleVierge[bouleVierge.length - 1 - 3 - essai * 4];

    proposition.push(
      findBouleCouleur(boule4),
      findBouleCouleur(boule3),
      findBouleCouleur(boule2),
      findBouleCouleur(boule1)
    );

    console.log(proposition);
    console.log(proposition[0]);
    if (
      proposition[0] != null &&
      proposition[1] != null &&
      proposition[2] != null &&
      proposition[3] != null
    ) {
      gamePlay(proposition, codeSecret);
      essai += 1;
    }
  }
});
