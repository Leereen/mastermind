function activateBoule(essai) {
  const numEssai = document.getElementById("try" + (parseInt(essai) + 1));
  console.log(numEssai);
  for (let i = 0; i < 4; i++) {
    console.log(numEssai.children[0]);
    if (numEssai.children[i].classList.contains("inactive")) {
      numEssai.children[i].classList.remove("inactive");
    }
  }
}

function deactivateBoule(essai) {
  const numEssai = document.getElementById("try" + (parseInt(essai) + 1));
  for (let i = 0; i < 4; i++) {
    numEssai.children[i].classList.add("inactive");
  }
}
