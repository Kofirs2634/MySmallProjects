// Main button
function ButtonClick() {
	s = s + spc;
	document.getElementById('score').innerHTML = s;
	Update();
}
// Update (maybe will erased)
function Update() {
	if (s >= upg1c) {
		document.getElementById("upg1bt").disabled = false;
	}
	else {
		document.getElementById("upg1bt").disabled = true;
	}
	if (s >= upg2c) {
		document.getElementById("upg2bt").disabled = false;
	}
	else {
		document.getElementById("upg2bt").disabled = true;
	}
	if (s >= upg3c) {
		document.getElementById("upg3bt").disabled = false;
	}
	else {
		document.getElementById("upg3bt").disabled = true;
	}
	if (s >= upg4c) {
		document.getElementById("upg4bt").disabled = false;
	}
	else {
		document.getElementById("upg4bt").disabled = true;
	}
	document.getElementById('score').innerHTML = s;
	document.getElementById('scoreperclick').innerHTML = spc;
	document.getElementById('scorepersecond').innerHTML = sps;
	document.getElementById('upg1ct').innerHTML = upg1c;
	document.getElementById('upg1pr').innerHTML = upg1pr;
	document.getElementById('upg2ct').innerHTML = upg2c;
	document.getElementById('upg2pr').innerHTML = upg2pr;
	document.getElementById('upg3ct').innerHTML = upg3c;
	document.getElementById('upg3pr').innerHTML = upg3pr;
	document.getElementById('upg4ct').innerHTML = upg4c;
	document.getElementById('upg4pr').innerHTML = upg4pr;
}
// Upgrades
function Upg1() {
	s = s - upg1c;
	spc = spc + upg1pr;
	upg1c = Math.round(upg1c + upg1c * 1.1);
	upg1pr = Math.round(upg1pr * 1.8);
	Update();	
}
function Upg2() {
	s = s - upg2c;
	spc = spc * upg2pr;
	upg2c = Math.round(upg2c + upg2c * 1.6);
	upg2pr = upg2pr + 0.5;
	Update()
}
function Upg3() {
	s = s - upg3c;
	sps = sps + upg3pr;
	upg3c = Math.round(Math.sqrt(upg3c * (upg3c * 3)));
	upg3pr = Math.round(upg3pr + (Math.random() * 10));
	Update()
}
function Upg4() {
	s = s - upg4c;
	sps = sps * upg4pr;
	upg4c = Math.round(Math.sqrt(upg4c * (upg4c * 5)));
	upg4pr = Math.round(upg4pr + (Math.random() * 4));
	Update()
}
// Theme changing
function testou(checkbox) {
	if (checkbox.checked) {
		document.body.style.background = "#000";
	}
	else {
		document.body.style.background = "#FFF";
	}
}
function themech(swit) {
	if (swit.checked) {
		// Main. body class
		document.body.style.background = "#FFE7B2";
		document.body.style.color = "#000";
		// Change Theme Name text
		document.getElementById('themet').innerHTML = "Day Theme";
	}
	else {
		document.body.style.background = "#00020F";
		document.body.style.color = "#FFF";
		document.getElementById('themet').innerHTML = "Night Theme";
	}
}