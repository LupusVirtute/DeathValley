var AFooterCont = document.getElementById("afooter");
var FooterCont = document.getElementById("footer");
var FuckingIdiot = 0;
function ViewSources() {
	if(FuckingIdiot == 1)
	{}else {
		fademeoutdaddy(FooterCont);
		fademeindaddy(AFooterCont);
		FuckingIdiot = 1;
	}
}
function ViewAuthors() {
	if(FuckingIdiot == 0)
	{}
	else {
		fademeoutdaddy(AFooterCont);
		fademeindaddy(FooterCont);
		FuckingIdiot = 0;
	}
}
function fademeindaddy(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function fademeoutdaddy(element) {
	var opa = 1.0;
	element.style.display = 'none';
	var timera = setInterval(function () {
		if(opa <= 0.1)
		{
			clearInterval(timera);
		}
		element.style.opacity = opa;
		element.style.filter = 'alpha(opacity=' + opa * 100 + ")";
		opa -= opa * 0.1;
	});
}
var scrolling = 0;
function scrollmeto(x,y,speed){
	if(scrolling == 1)
	{}
else {
	var xD = window.pageXOffset;
	var xDk = window.pageYOffset;
	scrolling = 1;
	var timerb = setInterval(function () {
		if(xD < x && xD != x)
		{
			xD += speed;
			window.scroll(xD,xDk);
		}
		if(xDk < y && xDk != y)
		{
			xDk += speed;
			window.scroll(xD,xDk);
		}
		if(xD >= x && y <= xDk)
		{
			scrolling = 0;
			clearInterval(timerb);
		}
	});
}
}