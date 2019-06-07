var aud = document.getElementById("vid");
var aud2 = document.getElementById("vid2");
var aud3 = document.getElementById("vid3");

aud.addEventListener('ended',myHandler,false);
aud3.addEventListener('ended',myHandler2,false);

function myHandler(e) {
	aud3.play();      
}

function myHandler2(e) {
	aud2.play();      
}