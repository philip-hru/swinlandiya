var pig = 0;
var pigs_number = 0;
var dialog = document.querySelector("dialog");
var circle_on_card = document.querySelector(".circle_on_card");

function add_pig() {
  pigs_number = pigs_number + 1;
  circle_on_card.innerHTML = pigs_number;
  localStorage.setItem("pigs_number", pigs_number);
}
function show_dialog() {
  dialog.showModal();
}
function close_dialog() {
  dialog.close();
}
function add_pig_to_card() {
  pig = pig + 1;
  console.log(pig);
  localStorage.setItem("pig_1", pig);
}
function card_pig() {
  if (localStorage.getItem("pig_1") > 0) {
    document.getElementById("card_pig_1").style.display = "flex";
  }
  document.getElementById("price").innerHTML =
    localStorage.getItem("pigs_number") * 1000 + " грн";
}
function tytyty() {
  document.getElementById("circle_on_card").innerHTML =
    localStorage.getItem("pigs_number");
}
function scroll_right() {
  getElementById("container").style.marginRight = "300px";
}

function scroll_left() {
  getElementById("container").style.marginLeft = "300px";
}
