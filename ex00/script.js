var css_file = document.querySelector(".h3");
var color1 = document.querySelector(".color1");
console.log(color1);
var color2 = document.querySelector(".color2");

function colorz() {
	document.body.style.background = "linear-gradient(to right, " 
		+ color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", colorz);
color2.addEventListener("input", colorz);
