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
