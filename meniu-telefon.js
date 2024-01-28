var x = document.getElementById("menu-id");
if (x === "meniu-hide") {
  body.classList.add("when-menuActive");
} else {
  body.classList.remove("when-menuActive");
}

function classChange() {
  var meniu = document.getElementById("meniu-id");
  var body = document.getElementById("body");
  if (meniu.className === "meniu-hide") {
    body.classList.add("when-menuActive");
    meniu.classList.add("meniu-show");
    meniu.classList.remove("meniu-hide");
  }
}

function classChangeBack() {
  var meniu = document.getElementById("meniu-id");
  if (meniu.className === "meniu-show") {
    body.classList.remove("when-menuActive");
    meniu.classList.add("meniu-hide");
    meniu.classList.remove("meniu-show");
  }
}
