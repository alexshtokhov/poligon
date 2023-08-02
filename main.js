let offset = 0;
const sliderLine = document.querySelector('.service-slider-line');

document.querySelector('.slider-btn').addEventListener('click', function(){
    offset += 1457;
    if (offset > 1457){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
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