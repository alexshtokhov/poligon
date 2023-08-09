
let modal = document.getElementById("my-modal");
let span = document.getElementsByClassName("close-modal-window")[0];

let allBtn = document.querySelectorAll('.btn-modal-window');
allBtn.forEach(function(element) {
    element.onclick = showModal;
})

function showModal() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
