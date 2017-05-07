var popupToCardOpen = document.querySelectorAll(".buy");
var popupToCard = document.querySelector(".pop-up-to-cart");
var popupToCardClose = popupToCard.querySelector(".pop-up-close");
var popupOverlay = document.querySelector(".pop-up-overlay");

for (var i = 0; i < popupToCardOpen.length; i++) {
  popupToCardOpen[i].addEventListener("click", function(event) {
  event.preventDefault();
  popupOverlay.classList.add("popup-overlay-show");
  popupToCard.classList.add("popup-content-show");
});
}
popupToCardClose.addEventListener("click", function(event) {
  event.preventDefault();
  popupToCard.classList.remove("popup-content-show");
  popupOverlay.classList.remove("popup-overlay-show");
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popupToCard.classList.contains("popup-content-show")) {
            popupToCard.classList.remove("popup-content-show");
            popupOverlay.classList.remove("popup-overlay-show");
          }
        }
      });

var popupOpen = document.querySelector(".pop-up-open");
var popup = document.querySelector(".pop-up");
var popupClose = popup.querySelector(".pop-up-close");
var popupForm = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
var storage = localStorage.getItem("login");


popupOpen.addEventListener("click", function(event) {
  event.preventDefault();
  popupOverlay.classList.add("popup-overlay-show");
  popup.classList.add("popup-content-show");
   if (storage) {
          userName.value = storage;
          userEmail.focus();
        } else {
          userName.focus();
        }
});

popupClose.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-content-show");
  popup.classList.remove("popup-error");
  popupOverlay.classList.remove("popup-overlay-show");
});

popupForm.addEventListener("submit", function(event) {
  if (!userName.value || !userEmail.value) {
   	event.preventDefault();
   	popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    } else {
        localStorage.setItem("login", userName.value);
        }
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("popup-content-show")) {
            popup.classList.remove("popup-content-show");
            popup.classList.remove("popup-error");
            popupOverlay.classList.remove("popup-overlay-show");
    }
  }
});


var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".pop-up-map");
var mapClose = mapPopup.querySelector(".pop-up-close");

mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("popup-map-show");
        popupOverlay.classList.add("popup-overlay-show");
      });

mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("popup-map-show");
        popupOverlay.classList.remove("popup-overlay-show");
      });

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("popup-map-show")) {
            mapPopup.classList.remove("popup-map-show");
            popupOverlay.classList.remove("popup-overlay-show");
          }
        }
      });


var slideLeft = document.querySelector(".promo-prev");
var slideRight = document.querySelector(".promo-next");
var slideOne = document.querySelector(".slide-one");
var slideTwo = document.querySelector(".slide-two");
var slideDotOne = document.querySelector(".slider-dot-one");
var slideDotTwo = document.querySelector(".slider-dot-two");

slideLeft.addEventListener("click", function(event) {
  slideTwo.classList.toggle("hide-slide");
  slideOne.classList.toggle("hide-slide");
  slideDotOne.classList.toggle("dot-active");
  slideDotTwo.classList.toggle("dot-active");
});

slideRight.addEventListener("click", function(event) {
  slideTwo.classList.toggle("hide-slide");
  slideOne.classList.toggle("hide-slide");
  slideDotOne.classList.toggle("dot-active");
  slideDotTwo.classList.toggle("dot-active");
});


