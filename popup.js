const buttonInstruction = document.getElementById("instructionButton");

console.log(buttonInstruction);

buttonInstruction.addEventListener("click", () => {
  Swal.fire({
    title: "Règle du jeu",
    html: `
    Trouve la combinaison secrète de 4 couleurs (<strong> Attention! </strong> tu peux avoir plusieurs fois la même couleur).
    Pour t'aider, des indices te seront donnés à chaque proposition: <br>
    <ul>
      <li>boule noire = 1 bonne couleur mais mal placée</li>
      <li>boule blanche =1 bonne couleur et bien placée</li>
    </ul>

    Exemple: la combinaison secrète est "rouge,bleu,vert,jaune" et tu proposes "bleu, bleu, marron, rose": tu auras 1 boule noire car le 1er bleu existe dans la solution mais il est mal placé et 1 boule blanche pour le 2e bleu
  `,
    text: "Trouve la combinaison secrète de 4 couleurs (attention, tu peux avoir plusieurs fois la même couleur).",
    icon: "info",
    iconHtml: "",
    width: 700,
    confirmButtonText: "OK",
  });
});
