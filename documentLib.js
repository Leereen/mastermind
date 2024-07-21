
function appendToCheck(id, div) {
  document
    .querySelector("#checkEssai" + id)
    .appendChild(div);
}

module.exports = { appendToCheck };
