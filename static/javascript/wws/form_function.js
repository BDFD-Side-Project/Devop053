console.log("WWS Form Check Function Page Test Msg");
var theform = document.getElementById("WWSForm");
theform.o2[0].addEventListener("click", function () {
	if (this.checked) {
		theform.beta.disabled = false;
		theform.slc.disabled = false;
	}
});
theform.o2[1].addEventListener("click", function () {
	if (this.checked) {
		// theform.beta.value = "";
		theform.beta.disabled = true;
		// theform.slc.value = "";
		theform.slc.disabled = true;
	}
});

theform.o5[1].addEventListener("click", function () {
	if (this.checked) {
		theform.o4[0].disabled = true;
		theform.o4[1].disabled = true;
		// theform.ssd.value = "";
		theform.ssd.disabled = true;
		// theform.ss.value = "";
		theform.ss.disabled = true;
		// theform.Ksb.value = "";
		theform.Ksb.disabled = true;
		// theform.sy.value = "";
		theform.sy.disabled = true;
	}
});
theform.o5[0].addEventListener("click", function () {
	if (this.checked) {
		theform.o4[0].disabled = false;
		theform.o4[1].disabled = false;
		theform.ssd.disabled = false;
		theform.ss.disabled = false;
		theform.Ksb.disabled = false;
		theform.sy.disabled = false;
	}
});
