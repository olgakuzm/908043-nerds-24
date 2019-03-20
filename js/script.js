  var link = document.querySelector(".button-write-us");
  var popup = document.querySelector(".feedback");
  var close = popup.querySelector(".feedback-close");
  var form = popup.querySelector("form");
   var login = popup.querySelector("[name=user-name]");
  var password = popup.querySelector("[name=email]");
  link.addEventListener("click", function (evt) {
     evt.preventDefault();
     popup.classList.add("feedback-show");
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
    popup.classList.remove("feedback-error");
  });
  form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
      evt.preventDefault();
      popup.classList.remove("feeback-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("feedback-error");
    }
  });
   window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("feedback-show")) {
        popup.classList.remove("feedback-show");
        popup.classList.remove("feedback-error");
      }
    }
  });