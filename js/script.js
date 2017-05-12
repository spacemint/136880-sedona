var open_form_button = document.querySelector(".findhotel-open-form");
var popup_form = document.querySelector(".findhotel-form");

open_form_button.addEventListener("click", function(evt){
  evt.preventDefault();
  popup_form.classList.toggle("findhotel-form-opened");
});
