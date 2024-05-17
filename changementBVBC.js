const bleu = document.getElementById("bleu");
const jaune = document.getElementById("jaune");
const rouge = document.getElementById("rouge");
const vert = document.getElementById("vert");
const rose = document.getElementById("rose");
const marron = document.getElementById("marron");
const orange = document.getElementById("orange");
const violet = document.getElementById("violet");
const bouleVierge = document.querySelectorAll(".bouleVierge");
const essai1 = document.getElementById("try1");

let couleurJaune = false;
let couleurBleu = false;
let couleurRouge = false;
let couleurVert = false;
let couleurRose = false;
let couleurMarron = false;
let couleurOrange = false;
let couleurViolet = false;

bleu.addEventListener("click", () => {
  couleurBleu = true;
  console.log("bleu" + couleurBleu);
  return couleurBleu;
});
jaune.addEventListener("click", () => {
  couleurJaune = true;
  console.log("jaune" + couleurJaune);
  return couleurJaune;
});
vert.addEventListener("click", () => {
  couleurVert = true;
  console.log("vert" + couleurVert);
  return couleurVert;
});
rouge.addEventListener("click", () => {
  couleurRouge = true;
  console.log("rouge" + couleurRouge);
  return couleurRouge;
});
violet.addEventListener("click", () => {
  couleurViolet = true;
  console.log("violet" + couleurViolet);
  return couleurViolet;
});
rose.addEventListener("click", () => {
  couleurRose = true;
  console.log("rose" + couleurRose);
  return couleurRose;
});
orange.addEventListener("click", () => {
  couleurOrange = true;
  console.log("orange" + couleurOrange);
  return couleurOrange;
});
marron.addEventListener("click", () => {
  couleurMarron = true;
  console.log("marron" + couleurMarron);
  return couleurMarron;
});

let bouleViergeArray = Array.prototype.slice.call(bouleVierge);
console.log("bouleViergeArray" + bouleViergeArray);

bouleViergeArray.forEach(function (elem) {
  elem.addEventListener("click", function () {
    if (
      couleurBleu === true ||
      couleurJaune === true ||
      couleurVert === true ||
      couleurRouge === true ||
      couleurMarron === true ||
      couleurViolet === true ||
      couleurRose === true ||
      couleurOrange === true
    ) {
      if (couleurBleu === true) {
        elem.className = "bouleBleu";
      } else if (couleurJaune === true) {
        elem.className = "bouleJaune";
      } else if (couleurVert === true) {
        elem.className = "bouleVerte";
      } else if (couleurRouge === true) {
        elem.className = "bouleRouge";
      } else if (couleurViolet === true) {
        elem.className = "bouleViolet";
      } else if (couleurOrange === true) {
        elem.className = "bouleOrange";
      } else if (couleurRose === true) {
        elem.className = "bouleRose";
      } else if (couleurMarron === true) {
        elem.className = "bouleMarron";
      }

      couleurBleu = false;
      couleurJaune = false;
      couleurRouge = false;
      couleurVert = false;
      couleurRose = false;
      couleurMarron = false;
      couleurOrange = false;
      couleurViolet = false;
    }
  });
});
