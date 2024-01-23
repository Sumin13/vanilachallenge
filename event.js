const hi = document.querySelector(".hi");

function mouseOnHi() {
  hi.style.color = "blue";
  hi.innerText = "The mouse is here";
}

function mouseLeft() {
  hi.style.color = "tomato";
  hi.innerText = "The mouse just left";
}

function pageSizing() {
  document.body.style.backgroundColor = "pink";
}

function rightClicked() {
  document.body.innerText = "its been clicked";
}
hi.addEventListener("mouseenter", mouseOnHi);

hi.addEventListener("mouseleave", mouseLeft);

window.addEventListener("resize", pageSizing);

window.addEventListener("contextmenu", rightClicked);
