/*
 * @Date         : 2022-12-12 12:31:04
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2024-03-24 22:30:18
 * @LastEditors  : <BDFD>
 * @Description  :
 * @FilePath     : \static\javascript\windwave\form_validation.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
console.log("Test for Wind Wave Validation Form");
console.log("o2 value is", theform.o2.value);

function validateForm() {
	var theform = document.getElementById("WWSForm");
	let pos_real_number =
		/([0-9]+\.?|^([0-9]*[.][0-9]*[1-9]+[0-9]*)$)|(^([0-9]*[1-9]+[0-9]*[.][0-9]+)$)|(^([1-9]+[0-9]*)$)/;
	let pos_int_number = /^[1-9]+[0-9]*$/;

	let o1 = theform.o1.value;
	switch (true) {
		case o1 != 1 && o1 != 2 && o1 != 3:
			alert("请选择一类水域。");
			document.WWSForm.o1.focus();
			return false;
	}

	let ad = theform.ad.value;
	switch (true) {
		case ad == "":
			// alert("Ad 无任何输入,作为None输出");
			break;
		case ad.trim() == "":
			// alert("Ad 输入为多个空格,作为None输出");
			break;
		case !ad.match(pos_real_number) || parseFloat(ad) <= 1.5:
			alert("水深太浅 (<1.5 m)，不建议采用本单元的方法。");
			document.WWSForm.ad.focus();
			return false;
	}

	let X = theform.X.value;
	switch (true) {
		case X == "" || X.trim() == "":
			alert("请在此输入数值。");
			document.WWSForm.X.focus();
			return false;
		case !X.match(pos_real_number) || parseFloat(X) <= 0:
			alert("该数值必须大于0");
			document.WWSForm.X.focus();
			return false;
	}

	let U10k = theform.U10k.value;
	switch (true) {
		case U10k == "" || U10k.trim() == "":
			alert("请在此输入数值。");
			document.WWSForm.U10k.focus();
			return false;
		case !U10k.match(pos_real_number) || parseFloat(U10k) <= 0:
			alert("该数值必须大于0");
			document.WWSForm.U10k.focus();
			return false;
	}

	let atm = theform.atm.value;
	switch (true) {
		case atm == "" || atm.trim() == "":
			alert("请在此输入数值。");
			document.WWSForm.atm.focus();
			return false;
		case !atm.match(pos_real_number) || parseFloat(atm) <= 0:
			alert("该数值必须大于0");
			document.WWSForm.atm.focus();
			return false;
	}

	let atr = theform.atr.value;
	switch (true) {
		case atr == "" || atr.trim() == "":
			alert("请在此输入数值。");
			document.WWSForm.atr.focus();
			return false;
		case !atr.match(pos_real_number) || parseFloat(atr) <= 0:
			alert("该数值必须大于0");
			document.WWSForm.atr.focus();
			return false;
	}

	let wdu = theform.wdu.value;
	switch (true) {
		case wdu == "" || wdu.trim() == "":
			alert("请在此输入数值。");
			document.WWSForm.wdu.focus();
			return false;
		case !wdu.match(pos_real_number) || parseFloat(wdu) <= 0:
			alert("该数值必须大于0");
			document.WWSForm.wdu.focus();
			return false;
	}
}
