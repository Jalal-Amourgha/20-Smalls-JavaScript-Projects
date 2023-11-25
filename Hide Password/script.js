const hideBtn = document.getElementById("hide-btn");
const input = document.getElementById("password");

function hide() {
    if (hideBtn.className === "fa-solid fa-eye-slash") {
        hideBtn.classList.add("fa-eye");
        hideBtn.classList.remove("fa-eye-slash");
        input.type = "text";
        hideBtn.style.color = "#C70039";
    } else {
        hideBtn.classList.add("fa-eye-slash");
        hideBtn.classList.remove("fa-eye");
        input.type = "password";
        hideBtn.style.color = "gray";
    }
}
