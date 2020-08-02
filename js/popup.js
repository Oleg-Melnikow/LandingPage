const popupLinks = document.querySelectorAll(".popup-link");
let unlock = true;

if(popupLinks.length > 0){
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll(".close-popup")

if(popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener("click", function (e) {
            popupClose(el.closest(".popup"));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if(curentPopup && unlock) {
        const popupActive = document.querySelector(".popup.open");
        if(popupActive){
            popupClose(popupActive, false);
        }
        curentPopup.classList.add("open");
        curentPopup.addEventListener("click", function (e){
            if(!e.target.closest(".popup__content")){
                popupClose(e.target.closest(".popup"));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = false) {
    if(unlock){
        popupActive.classList.remove("open");
    }
}

document.addEventListener("keydown", function (e) {
    if(e.keyCode === 27){
        const popupActive = document.querySelector(".popup.open");
        popupClose(popupActive)
    }
})