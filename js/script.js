var popupOpen = document.querySelector(".pop-up-open");
var popup = document.querySelector(".pop-up");
var storage = localStorage.getItem("login");


if (popup) {
  var popupClose = popup.querySelector(".pop-up-close");
  var userName = popup.querySelector("[name=user-name]");
  var userEmail = popup.querySelector("[name=user-email]");
  var popupForm = popup.querySelector("form");
  popupForm.addEventListener("submit", function (event) {
  if (!userName.value || !userEmail.value) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    } else {
        localStorage.setItem("login", userName.value);
        }
  });
}

if (popupOpen) {
  popupOpen.addEventListener("click", function (event) {
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
}

if (popupClose) {
  popupClose.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("popup-content-show");
    popup.classList.remove("popup-error");
    popupOverlay.classList.remove("popup-overlay-show");
  });
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup){
      if (popup.classList.contains("popup-content-show")) {
        popup.classList.remove("popup-content-show");
        popup.classList.remove("popup-error");
        popupOverlay.classList.remove("popup-overlay-show");
      }
    }
  }
});

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".pop-up-map");

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".pop-up-close");
}

if (mapOpen){
  mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("popup-map-show");
    popupOverlay.classList.add("popup-overlay-show");
  });
}

if (mapClose){
  mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("popup-map-show");
     popupOverlay.classList.remove("popup-overlay-show");
  });
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup) {
      if (mapPopup.classList.contains("popup-map-show")) {
        mapPopup.classList.remove("popup-map-show");
        popupOverlay.classList.remove("popup-overlay-show");
      }
    }
  }
});

var popupToCardOpen = document.querySelector(".item-card-block");
var popupToCard = document.querySelector(".pop-up-to-cart");
var popupOverlay = document.querySelector(".pop-up-overlay");
var close = popupToCard.querySelector(".close");

if (popupToCardOpen) {
  popupToCardOpen.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("buy")) {
      event.preventDefault();
      popupOverlay.classList.add("popup-overlay-show");
      popupToCard.classList.add("popup-content-show");
    }
  });
}

if (popupToCard) {
  popupToCard.addEventListener("click", function (event) {
  var target = event.target;
  if (target.classList.contains("pop-up-close") || target.classList.contains("close")) {
    event.preventDefault();
    popupToCard.classList.remove("popup-content-show");
    popupOverlay.classList.remove("popup-overlay-show");
    } 
  });
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popupToCard) {
      if (popupToCard.classList.contains("popup-content-show")) {
        popupToCard.classList.remove("popup-content-show");
        popupOverlay.classList.remove("popup-overlay-show");
      }
    }
  }
});

var slideLeft = document.querySelector(".promo-prev");
var slideRight = document.querySelector(".promo-next");
var slideOne = document.querySelector(".slide-one");
var slideTwo = document.querySelector(".slide-two");
var slideDotOne = document.querySelector(".slider-dot-one");
var slideDotTwo = document.querySelector(".slider-dot-two");

if (slideLeft) {
  slideLeft.addEventListener("click", function (event) {
    slideTwo.classList.toggle("hide-slide");
    slideOne.classList.toggle("hide-slide");
    slideDotOne.classList.toggle("dot-active");
    slideDotTwo.classList.toggle("dot-active");
  });
}

if (slideRight) {
  slideRight.addEventListener("click", function (event) {
    slideTwo.classList.toggle("hide-slide");
    slideOne.classList.toggle("hide-slide");
    slideDotOne.classList.toggle("dot-active");
    slideDotTwo.classList.toggle("dot-active");
  });
}

var slideDeliveryBtn = document.querySelector(".service-slider-delivery");
var slideGuaranteeBtn = document.querySelector(".service-slider-guarantee");
var slideCreditBtn = document.querySelector(".service-slider-credit");
var slideDelivery = document.querySelector(".slide-delivery");
var slideGuarantee = document.querySelector(".slide-guarantee");
var slideCredit = document.querySelector(".slide-credit");

if (slideDeliveryBtn) {
  slideDeliveryBtn.addEventListener("click", function (event) {
    slideDelivery.classList.toggle("hide-slide");
    slideGuarantee.classList.add("hide-slide");
    slideCredit.classList.add("hide-slide");
    slideGuaranteeBtn.classList.remove("active-btn");
    slideCreditBtn.classList.remove("active-btn");
    slideDeliveryBtn.classList.add("active-btn");
  });
}

if (slideGuaranteeBtn) {
  slideGuaranteeBtn.addEventListener("click", function (event) {
    slideGuarantee.classList.toggle("hide-slide");
    slideDelivery.classList.add("hide-slide");
    slideCredit.classList.add("hide-slide");
    slideDeliveryBtn.classList.remove("active-btn");
    slideCreditBtn.classList.remove("active-btn");
    slideGuaranteeBtn.classList.add("active-btn");
  });
}

if (slideCreditBtn) {
  slideCreditBtn.addEventListener("click", function (event) {
    slideCredit.classList.toggle("hide-slide");
    slideDelivery.classList.add("hide-slide");
    slideGuarantee.classList.add("hide-slide");
    slideDeliveryBtn.classList.remove("active-btn");
    slideGuaranteeBtn.classList.remove("active-btn");
    slideCreditBtn.classList.add("active-btn");
  });
}