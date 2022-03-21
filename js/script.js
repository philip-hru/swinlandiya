var pigs_number = 0;


function add_pig() {
    pigs_number = pigs_number + 1
    var circle_on_card = document.querySelector('.circle_on_card')
    circle_on_card.innerHTML = pigs_number
}

