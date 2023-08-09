
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

