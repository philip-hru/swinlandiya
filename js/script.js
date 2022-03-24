var pigs_number = 0;
var dialog = document.querySelector('dialog')
var circle_on_card = document.querySelector('.circle_on_card')

function add_pig() {
    pigs_number = pigs_number + 1
    circle_on_card.innerHTML = pigs_number
}
function show_dialog() {
    dialog.showModal();
}
function close_dialog() {
    dialog.close();
}
