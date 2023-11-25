const input = document.getElementById("input");
const QrImage = document.getElementById("QrImage");


input.addEventListener('keyup', function (e) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        QrCodeGenerator();
    }
})
function QrCodeGenerator() {
    if (input.value == '') {
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 1000);
    } else {
        QrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        QrImage.classList.add("edit-image");
    }
}