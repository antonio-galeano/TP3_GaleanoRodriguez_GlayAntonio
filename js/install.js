let deferredInstallPrompt = null;
const installButton = document.getElementById("butInstall");

installButton.style.display = "none";

installButton.addEventListener("click", installPWA);

window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
    evt.preventDefault();
    deferredInstallPrompt = evt;
    installButton.style.display = "";
}

function installPWA(evt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
        } else {
            console.log("User dismissed the A2HS prompt");
        }
        deferredInstallPrompt = null;
    });
    evt.srcElement.setAttribute("hidden", true);
}

window.addEventListener("appinstalled", logAppInstalled);

function logAppInstalled(evt) {
    console.log("Cuisine Facile App a été installée.", evt);
}
