var header = document.getElementById("Header");

window.onscroll = function() {HeaderMovement()};

var sticky = header.offsetTop+40;

function HeaderMovement() {
	if (window.pageYOffset >= sticky) {
		header.classList.add("sticky");
		document.getElementById("container").classList.add("ineedspace");
	} else {
		header.classList.remove("sticky");
		document.getElementById("container").classList.remove("ineedspace");
	}
}