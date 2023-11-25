let price = document.getElementById("price");
let guests = document.getElementById("guests");
let service = document.getElementById("service");
let popup = document.getElementById("popup");
let message = document.getElementById("message");
let total = 0;

function calculate() {
    total = ((price.value / guests.value) * service.value).toFixed(2);
    message.innerHTML = ` Tip $${total} for each`;
    popup.classList.add("open-popup");

    setTimeout(function () {
        popup.classList.remove("open-popup");
    }, 3000)

    price.value = '';
    guests.value = '';
    service.value = '';
}