/*
 * @Date         : 2022-12-12 12:31:04
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2024-03-26 18:00:36
 * @LastEditors  : <BDFD>
 * @Description  :
 * @FilePath     : \static\javascript\windwave\form_validation.js
 * Copyright (c) 2022 by BDFD, All Rights Reserved.
 */
console.log("Test for Wind Wave Validation Form");

function validateForm() {
	var theform = document.getElementById("WWSForm");
	let pos_real_number =
		/([0-9]+\.?|^([0-9]*[.][0-9]*[1-9]+[0-9]*)$)|(^([0-9]*[1-9]+[0-9]*[.][0-9]+)$)|(^([1-9]+[0-9]*)$)/;
	let pos_int_number = /^[1-9]+[0-9]*$/;
	let input_list = /^(\d+(\.\d+)?)(,\d+(\.\d+)?)*$/;

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
		case ad.trim() == "None":
			// alert("Ad 输入为多个空格,作为None输出");
			break;
		case ad.trim() == "默认为深水":
			// alert("Ad 输入为多个空格,作为None输出");
			break;
		case !ad.match(pos_real_number) || parseFloat(ad) < 1.5:
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

	let o2 = theform.o2.value;
	switch (true) {
		case o2 != 1 && o2 != 2:
			alert("请选择是否计算风壅增水。");
			document.WWSForm.o2[0].focus();
			return false;
	}

	if (o2 == 1) {
		// let beta = theform.beta.value;
		// switch (true) {
		// 	case beta == "" || beta.trim() == "":
		// 		alert("请在此输入数值。");
		// 		document.WWSForm.beta.focus();
		// 		return false;
		// 	case !beta.match(pos_real_number):
		// 		alert("请在此输入数值。");
		// 		document.WWSForm.beta.focus();
		// 		return false;
		// }

		// let slc = theform.slc.value;
		// switch (true) {
		// 	case slc == "" || slc.trim() == "":
		// 		alert("请在此输入数值。");
		// 		document.WWSForm.slc.focus();
		// 		return false;
		// 	case !slc.match(pos_real_number):
		// 		alert("请在此输入数值。");
		// 		document.WWSForm.slc.focus();
		// 		return false;
		// }

		if (o1 == 1) {
			let o5 = theform.o5.value;
			switch (true) {
				case o5 != 1 && o5 != 2:
					alert("请选择是否有水深剖面数据。");
					document.WWSForm.o5[0].focus();
					return false;
			}
			if (o5 == 1) {
				let o4 = theform.o4.value;
				switch (true) {
					case o4 != 1 && o4 != 2:
						alert("请选择水域底坡特点。");
						document.WWSForm.o4[0].focus();
						return false;
				}
				let xs = theform.xs.value;
				switch (true) {
					case xs == "" || xs.trim() == "":
						alert("请在此输入数值。");
						document.WWSForm.xs.focus();
						return false;
					case !xs.match(input_list):
						alert("不得输入基点的值，且所有点的水深必须大于0。");
						document.WWSForm.xs.focus();
						return false;
				}

				let d0 = theform.d0.value;
				switch (true) {
					case d0 == "" || d0.trim() == "":
						alert("请在此输入数值。");
						document.WWSForm.d0.focus();
						return false;
					case !d0.match(input_list):
						alert("不得输入基点的值，且所有点的水深必须大于0。");
						document.WWSForm.d0.focus();
						return false;
				}

				let Ksb = theform.Ksb.value;
				switch (true) {
					case Ksb == "":
						// alert("Ksb 无任何输入,作为None输出");
						break;
					case Ksb.trim() == "":
						// alert("Ksb 输入为多个空格,作为None输出");
						break;
					case !Ksb.match(pos_real_number) &&  parseFloat(Ksb) <= 0:
						alert("该数值必须大于0");
						document.WWSForm.Ksb.focus();
						return false;
				}
				let xlook = theform.xlook.value;
				switch (true) {
					case xlook == "":
						// alert("xlook 无任何输入,作为None输出");
						break;
					case xlook.trim() == "":
						// alert("xlook 输入为多个空格,作为None输出");
						break;
					case !xlook.match(pos_real_number) && parseFloat(xlook) <= 0:
						alert("无法在基点的岸侧查看风壅增水。");
						document.WWSForm.xlook.focus();
						return false;
				}
			}
		}
	}
}
