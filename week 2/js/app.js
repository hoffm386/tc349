function hello() {
	var app = navigator.userAgent;

	if(app.indexOf("Chrome") > -1) {
	    alert("Google Chrome");
	} else if (app.indexOf("Safari") > -1) {
	    alert("Apple Safari");
	} else if (app.indexOf("Opera") > -1) {
	    alert("Opera");
	} else if (app.indexOf("Firefox") > -1) {
	    alert("Mozilla Firefox");
	} else if (app.indexOf("MSIE") > -1) {
	    alert("Microsoft Internet Explorer");
	}


}