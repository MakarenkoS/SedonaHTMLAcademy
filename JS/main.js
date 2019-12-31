let menu = document.querySelector(".main-navigation");
let toggle_button = document.querySelector(".main-navigation__toggle");



menu.classList.remove("main-navigation--no-js")
toggle_button.addEventListener("click", function(){
	if (menu.classList.contains("main-navigation--opened")) {
 		menu.classList.remove("main-navigation--opened");
	  menu.classList.add("main-navigation--closed");
	} else {
	  menu.classList.remove("main-navigation--closed");
		menu.classList.add("main-navigation--opened");
	
	}
})

// --------------------------------------------------

let form = document.querySelector(".question-form");
let form_button = document.querySelector(".question-form__button");
let modal_success = document.querySelector(".modal__modal-success");
let modal_failure = document.querySelector(".modal__modal-failure");
let closeSuccess_button = document.querySelector(".modal-success__button"); 
let closeFailure_button = document.querySelector(".modal-failure__button");
let feedbackName = document.querySelector(".field-about__name");
let feedbackSurname = document.querySelector(".field-about__surname");
let feedbackPhone = document.querySelector(".field-contacts__input--phone");
let feedbackEmail = document.querySelector(".field-contacts__input--email");
let overlay = document.querySelector(".modal-overlay");


form_button.addEventListener("click", function(evt){

	overlay.classList.add("modal-overlay--show");
  
	if((!feedbackName.value)||(!feedbackSurname.value)||(!feedbackPhone.value)
	  ||(!feedbackEmail.value))  {
		modal_failure.classList.add("modal__show");		
	} else {
	 modal_success.classList.add("modal__show") }

  evt.preventDefault();
  
})



feedbackName.addEventListener("keydown", function(event){
  clearError(feedbackName);
})

feedbackSurname.addEventListener("keydown", function(event){
  clearError(feedbackSurname);
})

feedbackEmail.addEventListener("keydown", function(event){
  clearError(feedbackEmail);
})

feedbackPhone.addEventListener("keydown", function(event){
  clearError(feedbackPhone);
})


closeSuccess_button.addEventListener("click", function(evt){
	overlay.classList.remove("modal-overlay--show");
	modal_success.classList.remove("modal__show");

})

closeFailure_button.addEventListener("click", function(evt){
	overlay.classList.remove("modal-overlay--show");
	modal_failure.classList.remove("modal__show");
	setErrors(feedbackEmail);
	setErrors(feedbackPhone); 
	setErrors(feedbackSurname);
	setErrors(feedbackName);
})

function setErrors(element) {
	if (!element.value) {
		element.classList.add("error");
		element.focus();
	}
}

function clearError(element) {
	element.classList.remove("error");
}

