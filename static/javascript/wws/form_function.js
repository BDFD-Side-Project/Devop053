/*
 * @Date         : 2024-03-05 18:42:12
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2024-03-06 15:11:22
 * @LastEditors  : <BDFD>
 * @Description  :
 * @FilePath     : \static\javascript\wws\form_function.js
 * Copyright (c) 2024 by BDFD, All Rights Reserved.
 */
console.log("WWS Form Check Function Page Test Msg");
var theform = document.getElementById("WWSForm");
theform.o2[0].addEventListener("click", function () {
	if (this.checked) {
		theform.beta.disabled = false;
		theform.slc.disabled = false;
		theform.o5[0].disabled = false;
		theform.o5[1].disabled = false;
	}
});
theform.o2[1].addEventListener("click", function () {
	if (this.checked) {
		// theform.beta.value = "";
		theform.beta.disabled = true;
		// theform.slc.value = "";
		theform.slc.disabled = true;
		theform.o5[0].disabled = true;
		theform.o5[1].disabled = true;
		theform.o4[0].disabled = true;
		theform.o4[1].disabled = true;
		theform.ssd.disabled = true;
		theform.ss.disabled = true;
		theform.Ksb.disabled = true;
		theform.sy.disabled = true;
	}
});
theform.o5[0].addEventListener("click", function () {
	if (this.checked && theform.o2[0].checked) {
		theform.o4[0].disabled = false;
		theform.o4[1].disabled = false;
		theform.ssd.disabled = false;
		theform.ss.disabled = false;
		theform.Ksb.disabled = false;
		theform.sy.disabled = false;
	} else {
		theform.o4[0].disabled = true;
		theform.o4[1].disabled = true;
		theform.ssd.disabled = true;
		theform.ss.disabled = true;
		theform.Ksb.disabled = true;
		theform.sy.disabled = true;
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
