/*
 * @Date         : 2024-03-05 18:42:12
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2024-03-27 01:41:46
 * @LastEditors  : <BDFD>
 * @Description  :
 * @FilePath     : \static\javascript\windwave\form_function.js
 * Copyright (c) 2024 by BDFD, All Rights Reserved.
 */
console.log("WWS Form Check Function Page Test Msg");
var theform = document.getElementById("WWSForm");
// console.log(theform.o1.value);
theform.o1.addEventListener("change", function (event) {
	let selectedOption = event.target.value;
	console.log(selectedOption);
	if (selectedOption == 1 && theform.o2.value == 1) {
		theform.beta.disabled = false;
		theform.slc.disabled = false;
		theform.o5[0].disabled = false;
		theform.o5[1].disabled = false;
	} else {
		theform.beta.value = "";
		theform.beta.disabled = true;
		theform.slc.value = "";
		theform.slc.disabled = true;
		theform.o5[0].checked = "";
		theform.o5[1].checked = "";
		theform.o5[0].disabled = true;
		theform.o5[1].disabled = true;
		theform.o4[0].checked = "";
		theform.o4[1].checked = "";
		theform.o4[0].disabled = true;
		theform.o4[1].disabled = true;
		theform.xs.value = "";
		theform.xs.disabled = true;
		theform.d0.value = "";
		theform.d0.disabled = true;
		theform.Ksb.value = "";
		theform.Ksb.disabled = true;
		theform.xlook.value = "";
		theform.xlook.disabled = true;
	}
});
theform.o2[0].addEventListener("click", function () {
	if (this.checked && theform.o1.value == "1") {
		theform.beta.disabled = false;
		theform.slc.disabled = false;
		theform.o5[0].disabled = false;
		theform.o5[1].disabled = false;
	} else {
		theform.beta.disabled = false;
		theform.slc.disabled = false;
	}
});
theform.o2[1].addEventListener("click", function () {
	if (this.checked) {
		theform.beta.value = "";
		theform.beta.disabled = true;
		theform.slc.value = "";
		theform.slc.disabled = true;
		theform.o5[0].checked = "";
		theform.o5[1].checked = "";
		theform.o5[0].disabled = true;
		theform.o5[1].disabled = true;
		theform.o4[0].checked = "";
		theform.o4[1].checked = "";
		theform.o4[0].disabled = true;
		theform.o4[1].disabled = true;
		theform.xs.value = "";
		theform.xs.disabled = true;
		theform.d0.value = "";
		theform.d0.disabled = true;
		theform.Ksb.value = "";
		theform.Ksb.disabled = true;
		theform.xlook.value = "";
		theform.xlook.disabled = true;
	}
});
theform.o5[0].addEventListener("click", function () {
	if (this.checked && theform.o2[0].checked) {
		theform.o4[0].disabled = false;
		theform.o4[1].disabled = false;
		theform.xs.disabled = false;
		theform.d0.disabled = false;
		theform.Ksb.disabled = false;
		theform.xlook.disabled = false;
	}
});

theform.o5[1].addEventListener("click", function () {
	if (this.checked) {
		theform.o4[0].checked = "";
		theform.o4[1].checked = "";
		theform.o4[0].disabled = true;
		theform.o4[1].disabled = true;
		theform.xs.value = "";
		theform.xs.disabled = true;
		theform.d0.value = "";
		theform.d0.disabled = true;
		theform.Ksb.value = "";
		theform.Ksb.disabled = true;
		theform.xlook.value = "";
		theform.xlook.disabled = true;
	}
});
