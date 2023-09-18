let modal = document.getElementById("my-modal");
let span = document.getElementsByClassName("close-modal-window")[0];

let allBtn = document.querySelectorAll('.btn-modal-window');
allBtn.forEach(function (element) {
    element.onclick = showModal;
})

function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Получите данные из формы
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const counter = document.getElementById("counter").value;
    const date = document.getElementById("date").value;

    // Замените 'YOUR_BOT_TOKEN' и 'YOUR_CHAT_ID' на ваш токен бота и Chat ID
    const bot_token = '6426805962:AAFJqdgZ1DHHxvULjd2dBVSHU6Gn8dXBobs';
    const chat_id = '1490116368';

    // Формируем сообщение для отправки в Telegram
    const message_text = `
Заявка на игру:
Имя: ${name}
Телефон: ${phone}
Количество человек: ${counter}
Дата: ${date}
`;
    // Отправляем сообщение в Telegram
    const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message_text)}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    // Очистите форму или отобразите сообщение об успешной отправке
    document.getElementById("myForm").reset();
    hideModal()
});

