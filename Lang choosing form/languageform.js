function onclick(e) {
	var choose = document.getElementById("choose");
	var lang = e.target.value;
	if (lang == "NA") {
		choose.textContent = "You've decided not to answer."
	}
	else {
		choose.textContent = "You've chosen the " + lang + " language.";
	}
}
for (var i = 0; i < langForm.lang.length; i++) {
	langForm.lang[i].addEventListener("click", onclick);
}