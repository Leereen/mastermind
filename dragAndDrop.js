const selectBoules = document.querySelectorAll(".selectBoule[data-color]");
console.log(selectBoules);
let selectedColor;
const dropBoule = document.querySelector(".bouleVierge");

console.log(dropBoule);

selectBoules.forEach((boule) => {
  boule.addEventListener("dragstart", (event) => {
    selectedColor = boule.getAttribute("data-color");
    event.dataTransfer.setData("textplain", selectedColor);
  });
});

// dropBoules.forEach((dropBoule) => {
//   dropBoule.addEventListener("dragover", (event) => {
//     e.preventDefault();
//   });
// });

dropBoule.ondragover = (e) => {
  e.preventDefault();
};

// quand on survole la zone de drop

// dropBoules.forEach((dropBoule) => {
//   dropBoule.addEventListener("dragenter", () => {
//     dropBoule.classList.add("dropHover");
//     dropBoule.dataset.color = selectedColor;
//     console.log(dropBoule.dataset.color);
//   });
// });

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
selectBoules.ondragend = () => {
  //selectBoule.classList.remove("dragged");
};

// permet de changer la valeur de la boule drop avec la nouvelle
selectBoules.ondrop = (e) => {
  dropBoule.innerHTML = e.dataTransfer.getData("text/plain");
  dropBoule.dataset.color = selectedColor;
  console.log(dropBoule.dataset.color);

  //dropBoule.classList.remove("dropHover");
};
//}
