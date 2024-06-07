const selectBoules = document.querySelectorAll(".selectBoule[data-color]");
console.log(selectBoules);
let selectedColor;
const dropBoules = document.querySelectorAll(".bouleVierge");

console.log(dropBoules);

selectBoules.forEach((boule) => {
  boule.addEventListener("dragstart", (event) => {
    selectedColor = boule.getAttribute("data-color");
    //event.dataTransfer.setData("textplain", selectedColor);
  });
});

dropBoules.forEach((dropBoule) => {
  dropBoule.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  dropBoule.addEventListener("dragenter", () => {
    dropBoule.dataset.color = selectedColor;
    console.log(dropBoule.dataset.color);
  });
  dropBoule.addEventListener("dragleave", () => {
    dropBoule.dataset.color = "gris";
  });
});

// permet de changer la valeur de la boule drop avec la nouvelle
selectBoules.ondrop = (e) => {
  dropBoules.innerHTML = e.dataTransfer.getData("text/plain");
  dropBoules.dataset.color = selectedColor;
  console.log(dropBoule.dataset.color);
};
