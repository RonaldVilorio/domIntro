let body = document.querySelector("body");
let newButton = document.createElement("button");
let newButton2 = document.createElement("button");
let id = 0;

body.setAttribute("style", "color: teal");
body.appendChild(newButton);
body.appendChild(newButton2);
newButton.textContent = "ADD";
newButton2.textContent = "REMOVE";

newButton.addEventListener("click", handleButtonClick);
newButton2.addEventListener("click", removeButtonClick);

function handleButtonClick() {
  let newHeader = document.createElement("h2");
  newHeader.textContent = "Baloon";
  newHeader.setAttribute("id", id);
  console.log(newHeader);
  id++;
  body.appendChild(newHeader);
}
function removeButtonClick() {
  let header = document.getElementById(id - 1);
  document.body.removeChild(header);
  console.log(header);
  id--;
}
