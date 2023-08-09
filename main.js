

let offset = 0;
const sliderLine = document.querySelector('.service-slider-line');

document.querySelector('.slider-btn').addEventListener('click', function(){
    if (window.innerWidth > 1100) {
        offset += 1457;
        if (offset > 1457){
            offset = 0;
        }
    }
    if (window.innerWidth <= 1100) {
        offset += 1217;
        if (offset > 1217){
            offset = 0;
        }
    }
    sliderLine.style.left = -offset + 'px';
});



let offset2 = 0;
const sliderFeedbackLine = document.querySelector('.feedback-slider');

document.querySelector('.slider-feedback-btn').addEventListener('click', function(){
    if (window.innerWidth > 1100) {
        offset2 += 399;
        if (offset2 > 1197){
            offset2 = 0;
        }
    }
    if (window.innerWidth <= 1100) {
        offset2 += 400;
        if (offset2 > 1600){
            offset2 = 0;
        }
    }
    sliderFeedbackLine.style.left = -offset2 + 'px';
});




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




