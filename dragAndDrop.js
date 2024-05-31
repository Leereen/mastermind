const selectBoule = document.querySelector(".selectBoule");
let selectedColor;
const dropBoule = document.querySelector(".bouleVierge");
console.log(selectBoule);
console.log(dropBoule);
//for (let selectBoule of selectBoules) {
selectBoule.ondragstart = (e) => {
  e.dataTransfer.setData("text/plain", selectBoule.innerHTML);
  selectedColor = selectBoule.dataset.color;
  console.log(selectedColor);
  //selectBoule.classList.add("dragged");
};

dropBoule.ondragover = (e) => {
  e.preventDefault();
};

// quand on survole la zone de drop
dropBoule.ondragenter = () => {
  //dropBoule.classList.add("dropHover");
  dropBoule.dataset.color = selectedColor;
  console.log(dropBoule.dataset.color);
};

// quand on quitte la zone de drop
dropBoule.ondragleave = () => {
  //dropBoule.classList.remove("dropHover");
};

//remet à 0 le css sur l'élément glisser
selectBoule.ondragend = () => {
  //selectBoule.classList.remove("dragged");
};

// permet de changer la valeur de la boule drop avec la nouvelle
selectBoule.ondrop = (e) => {
  dropBoule.innerHTML = e.dataTransfer.getData("text/plain");
  dropBoule.dataset.color = selectedColor;
  console.log(dropBoule.dataset.color);

  //dropBoule.classList.remove("dropHover");
};
//}
