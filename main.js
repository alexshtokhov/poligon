

let offset = 0;
const sliderLine = document.querySelector('.service-slider-line');

document.querySelector('.slider-btn').addEventListener('click', function(){
        offset += 100;
        if (offset > 100){
            offset = 0;
    }
    sliderLine.style.left = -offset + '%';
});



let offset2 = 0;
const sliderFeedbackLine = document.querySelector('.feedback-slider');

document.querySelector('.slider-feedback-btn').addEventListener('click', function(){
    offset2 += 1417;
    if (offset2 > 1417){
        offset2 = 0;
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




