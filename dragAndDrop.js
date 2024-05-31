const selectBoules = document.querySelectorAll(".selectBoule");
let selectedColor;
const dropBoule = document.querySelector(".bouleVierge");
console.log(selectBoule);
for (let selectBoule of selectBoules) {
  selectBoule.ondragstart = (e) => {
    e.dataTransfer.setData("text/plain", selectBoule.innerHTML);
    selectBoule.classList.add("dragged");
    selectedColor = e.dataset.color;
  };

  dropBoule.ondragover = (e) => {
    e.preventDefault();
  };

  // quand on survole la zone de drop
  dropBoule.ondragenter = () => {
    dropBoule.classList.add("dropHover");
  };

  // quand on quitte la zone de drop
  dropBoule.ondragleave = () => {
    dropBoule.classList.remove("dropHover");
  };

  //remet à 0 le css sur l'élément glisser
  selectBoule.ondragend = () => {
    selectBoule.classList.remove("dragged");
  };

  // permet de changer la valeur de la boule drop avec la nouvelle
  selectBoule.ondrop = (e) => {
    dropBoule.innerHTML = e.dataTransfer.getData("text/plain");
    dropBoule.classList.remove("dropHover");
  };
}
