const selectBoules = document.querySelectorAll(".selectBoule[data-color]");
console.log(selectBoules);
let selectedColor;
const dropBoules = document.querySelectorAll(".bouleVierge");

console.log(dropBoules);

selectBoules.forEach((boule) => {
  boule.addEventListener("dragstart", () => {
    selectedColor = boule.getAttribute("data-color");
  });
});

dropBoules.forEach((dropBoule) => {
  dropBoule.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  dropBoule.addEventListener("dragenter", () => {
    dropBoule.dataset.color = selectedColor;
  });
  dropBoule.addEventListener("dragleave", () => {
    dropBoule.dataset.color = "gris";
  });
  dropBoule.addEventListener("drop", () => {
    dropBoule.dataset.color = selectedColor;
    dropBoule.classList.add("boule" + selectedColor);
    console.log(dropBoule.classList.add);
    console.log(dropBoule.dataset.color);
  });
});
console.log(dropBoules);
