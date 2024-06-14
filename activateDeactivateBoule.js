function activateBoule(essai) {
  //console.log("try" + (parseInt(essai) + 1));
  const numEssai = document.getElementById("try" + (parseInt(essai) + 1));
  console.log(numEssai);
  for (let i = 0; i < 4; i++) {
    console.log(numEssai.children[0]);
    if (numEssai.children[i].classList.contains("inactive")) {
      numEssai.children[i].classList.remove("inactive");
      console.log(numEssai.children[i].className);
    }
  }
}

function deactivateBoule(essai) {
  const numEssai = document.getElementById("try" + (parseInt(essai) + 1));
  for (let i = 0; i < 4; i++) {
    numEssai.children[i].classList.add("inactive");
    console.log(numEssai.children[i].className);
  }
}
