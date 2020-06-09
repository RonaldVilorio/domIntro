let body = document.querySelector("body");
body.setAttribute("style", "color: teal");

let newButton = document.createElement("button");
body.appendChild(newButton);
newButton.textContent = "ADD";
let id = 0;
function handleButtonClick() {
  let newHeader = document.createElement("h2");
  newHeader.textContent = "Baloon";
  newHeader.setAttribute("id", id);
  console.log(newHeader);
  id++;
  body.appendChild(newHeader);
}
newButton.addEventListener("click", handleButtonClick);

let newButton2 = document.createElement("button");
body.appendChild(newButton2);
newButton2.textContent = "REMOVE";

function removeButtonClick() {
  let header = document.getElementById(`${id - 1}`);
  document.body.removeChild(header);
  console.log(header);
  id--;
}
newButton2.addEventListener("click", removeButtonClick);
