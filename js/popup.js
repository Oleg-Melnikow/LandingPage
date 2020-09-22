const popupImage = [
    "image/popup_img_1.png",
    "image/works/5.png",
    "image/works/6.png",
    "image/works/work4.png",
    "image/works/9.png",
    "image/popup_img_2.png"];

const nextBtn = document.querySelector(".popup__next");
const prevBtn = document.querySelector(".popup__prev");
const currentPopup = document.getElementById("popup");
const popupImg = currentPopup.querySelector("img");

const popupLinks = document.querySelectorAll(".popup-link");
let unlock = true;

let viewSlide = 0;
function next() {
    if(viewSlide < popupLinks.length){
        ++viewSlide;
        if(viewSlide >= popupLinks.length) {
            viewSlide = 0;
        }
    } else {
        viewSlide = 0;
    }
    popupImg.src = popupImage[viewSlide];
}
function prev() {
    if(viewSlide > 0){
        --viewSlide;
        if(viewSlide === 0) {
            viewSlide = popupLinks.length - 1;
        }
    } else {
        viewSlide = popupLinks.length - 1;
    }
    popupImg.src = popupImage[viewSlide];
}

nextBtn.addEventListener("click", function (e){
    e.preventDefault();
    next();
})

prevBtn.addEventListener("click", function (e){
    e.preventDefault();
    prev();
    console.log("prevBtn");
})



if(popupLinks.length > 0){
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function (e) {
            popupImg.src = popupImage[i];
            popupOpen(currentPopup);
            e.preventDefault();
            viewSlide = i;
            console.log(i);
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

function popupClose(popupActive, doUnlock = false) {
    if(unlock){
        popupActive.classList.remove("open");
    }
    viewSlide = 0;
}

document.addEventListener("keydown", function (e) {
    if(e.keyCode === 27){
        const popupActive = document.querySelector(".popup.open");
        popupClose(popupActive)
    }
})

const keyDown = function (keyNumber, action){
    document.addEventListener("keydown", function (e) {
        if(e.keyCode === keyNumber){
            action();
        }
    })
}
keyDown(39, next);
keyDown(37, prev);
