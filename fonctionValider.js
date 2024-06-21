const validateButton = document.getElementById("validateButton");
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
    let audio = new Audio("musique/fail-jingle-stereo-mix-88784.mp3");
    audio.play();

    Swal.fire({
      title: "Vous avez perdu!😭",
      html: `<p>La bonne combinaison est ${codeSecret}</p>`,
      width: 300,
      confirmButtonText: "Rejouer",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
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

    if (
      proposition[0] != null &&
      proposition[1] != null &&
      proposition[2] != null &&
      proposition[3] != null
    ) {
      console.log(" essai avant activation boule" + essai);
      gamePlay(proposition, codeSecret);
      deactivateBoule(essai);
      essai += 1;
      activateBoule(essai);
    } else {
      Swal.fire({
        title: "⚠️ Attention",
        html: `<p>Tu as oublié de mettre 1 ou plusieurs couleurs sur ton essai</p>`,
        width: 400,
        height: 50,
        confirmButtonText: "OK",
      });
    }
  }
});
