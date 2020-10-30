s = 0;
spc = 1;
sps = 0;
upg1c = 20;
upg1pr = 4;
upg2c = 150;
upg2pr = 2;
upg3c = 600;
upg3pr = 5;
upg4c = 2000;
upg4pr = 2;
spstimer = window.setInterval(AddSPS, 1000);
// Adding SPS
function AddSPS() {
	s = s + sps;
	Update();
}