const formValidate = document.getElementById("wrap-form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const passwordInput1 = document.getElementById("password");
const passwordInput2 = document.getElementById("confirm_password");
const emailInput = document.getElementById("email_input");
const phoneInput = document.getElementById("phone_input");
const formRegistrationBtn = document.getElementById("btn_register");
const addressArea = document.getElementById("addressarea");
const errorMessage = document.getElementById("error_msg");
const errorMessage1 = document.getElementById("error_msg1");
const errorMessage2 = document.getElementById("error_msg2");
const errorMessage3 = document.getElementById("error_msg3");
const errorMessage4 = document.getElementById("error_msg4");
const errorMessage5 = document.getElementById("error_msg5");
const errorMessage6 = document.getElementById("error_msg6");
const errorMessage7 = document.getElementById("error_msg7");
const errorMessage8 = document.getElementById("error_msg8");
const iconCloseReg = document.getElementById("icon-close-reg");

let passmark1 = document.getElementById("passmark1");
let passmark2 = document.getElementById("passmark2");
let passMark3 = document.getElementById("passmark3");
let passmark4 = document.getElementById("passmark4");
let passMark5 = document.getElementById("passmark5");
let passmark6 = document.getElementById("passmark6");
let passmark7 = document.getElementById("passmark7");
let passmark8 = document.getElementById("passmark8");
let icon_level1 = document.getElementById("icon_level");

let span = document.getElementById("none1");
let span2 = document.getElementById("none2");
let span3 = document.getElementById("none3");
let span4 = document.getElementById("none5");
let span5 = document.getElementById("none6");
let span6 = document.getElementById("none7");

formValidate.addEventListener("submit", (e) => {
	e.preventDefault();

	// if (firstname.value === "" || firstname.value === null) {

	// 	errorMessage1.innerHTML = "Please fill in your firstname";
	// 	errorMessage1.style.color = "red";
	// 	firstname.style.border = "1px solid red";
	// 	let iconLevelUp = '<ion-icon name="alert-circle"></ion-icon>';
	// 	icon_level1.innerHTML = iconLevelUp;

	// } else {

	//     let wrongFirstname = "";
	//     const capitalLettreFirstname = firstname.value[0];
	//     const isFirstnameLetterCapital = (capitalLettreFirstname === capitalLettreFirstname.toUpperCase());

	//     if (!isFirstnameLetterCapital || firstname.value === null) {
	//         errorMessage1.innerHTML =  'the first letter must contain a capital letter.';

	//     } else {

	//         firstname.style.border = "1px solid green";
	//         errorMessage1.style.display = "none";
	//         passmark1.style.display = "block";
	//         errorMessage1.style.display = "none";
	//         icon_level1.style.display = "none";
	//     }

	// }

	/**
	 * first name
	 */

	if (firstname.value === "" || firstname.value === null) {
		errorMessage1.innerHTML = "Please fill in your firstname";
		errorMessage1.style.color = "red";
		firstname.style.border = "1px solid red";
		let iconLevelUp = '<ion-icon name="alert-circle"></ion-icon>';
		icon_level1.innerHTML = iconLevelUp;
		passmark1.style.display = "none";
	} else {
		const capitalLetterFirstname = firstname.value[0];
		const isCapitalLetter =
			capitalLetterFirstname === capitalLetterFirstname.toUpperCase();

		if (!isCapitalLetter) {
			errorMessage1.innerHTML =
				"The first letter must contain a capital letter";
			errorMessage1.style.color = "red";
			firstname.style.border = "1px solid red";
			let iconLevelUp = '<ion-icon name="alert-circle"></ion-icon>';
			icon_level1.innerHTML = iconLevelUp;
			passmark1.style.display = "none";
		} else {
			errorMessage1.style.display = "none";
			firstname.style.border = "1px solid green";
			passmark1.style.display = "block";
			icon_level1.style.display = "none";
		}
	}

	/**
	 * last name
	 */

	if (lastname.value === "" || lastname.value === null) {
		errorMessage2.innerHTML = "please fill your lastname";
		errorMessage2.style.color = "red";
		lastname.style.border = "1px solid red";
		span.style.display = "block";
		passmark2.style.display = "none";
	} else {
		const capitalLetterLastname = firstname.value[0];
		const isCapitalLetterLastname =
			capitalLetterLastname === capitalLetterLastname.toUpperCase();

		if (!isCapitalLetterLastname) {
			errorMessage2.innerHTML =
				"The first letter must contain a capital letter";
			errorMessage2.style.color = "red";
			lastname.style.border = "1px solid red";
			span.style.display = "block";
			passmark2.style.display = "none";
		} else {
			lastname.style.border = "1px solid green";
			passmark2.style.display = "block";
			errorMessage2.style.display = "none";
			span.style.display = "none";
		}
	}
	console.log("PAAWORD LENGTH", passwordInput1.value.length);

	if (passwordInput1.value === "" || passwordInput1.value === null) {
		errorMessage3.innerHTML = "please input a password";
		errorMessage3.style.color = "blue";
		passwordInput1.style.border = "1px solid red";
		span2.style.display = "block";
	} else if (passwordInput1.value !== passwordInput2.value) {
		errorMessage3.innerHTML = "Password not Match!!";
		errorMessage4.innerHTML = "Password not Match!!";
	} else if (passwordInput1.value === passwordInput2.value) {
		// errorMessage3.innerHTML = "Correct!!";
		passMark3.style.display = "block";
		// errorMessage4.innerHTML = "Correct!!";
		passmark4.style.display = "block";
	} else if (passwordInput1.value.length < 8) {
		errorMessage3.innerHTML = "Password Must be 8 Characters";
	} else {
		passwordInput1.style.border = "1px solid green";
		passMark3.style.display = "block";
		errorMessage3.style.display = "none";
		span2.style.display = "none";
	}

	if (passwordInput2.value === "" || passwordInput2.value === null) {
		errorMessage4.innerHTML = "Re-confirm Password";
		errorMessage4.style.color = "blue";
		passwordInput2.style.border = "1px solid red";
		span3.style.display = "block";
	} else {
		passwordInput2.style.border = "1px solid green";
		passmark4.style.display = "block";
		errorMessage4.style.display = "none";
		span3.style.display = "none";
	}

	if (emailInput.value === "" || emailInput.value === null) {
		errorMessage6.innerHTML = "Enter a Email";
		errorMessage6.style.color = "orange";
		emailInput.style.border = "1px solid red";
		span4.style.display = "block";
	} else {
		emailInput.style.border = "1px solid green";
		passMark5.style.display = "block";
		errorMessage6.style.display = "none";
		span4.style.display = "none";
	}

	// if (phoneInput.value === "" || phoneInput.value === null) {
	// 	errorMessage7.innerHTML = "Type a Phone Number";
	// 	errorMessage7.style.color = "brown";
	// 	phoneInput.style.border = "1px solid red";
	// 	span5.style.display = "block";
	// } else {
	// 	phoneInput.style.border = "1px solid green";
	// 	passmark7.style.display = "block";
	// 	errorMessage7.style.display = "none";
	// 	span5.style.display = "none";
	// }

	// if (addressArea.value === "" || addressArea.value === null) {
	// 	errorMessage8.innerHTML = "Please Write About You";
	// 	errorMessage8.style.color = "red";
	// 	addressArea.style.border = "1px solid red";
	// 	span6.style.display = "block";
	// } else {
	// 	addressArea.style.border = "1px solid green";
	// 	passmark8.style.display = "block";
	// 	errorMessage8.style.display = "none";
	// 	span6.style.display = "none";
	// }

	// merging both password
	console.log(passwordInput1.value == passwordInput2.value);
	console.log(passwordInput2.value);

	// if (passwordInput1.value !== passwordInput2.value) {
	// 	errorMessage3.innerHTML = "Password not Match!!";
	// 	errorMessage4.innerHTML = "Password not Match!!";
	// } else {
	// 	errorMessage3.innerHTML = "Correct!!";
	// 	errorMessage4.innerHTML = "Correct!!";
	// }

	formRegistrationBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (
			firstname !== "" &&
			lastname !== "" &&
			passwordInput1 !== "" &&
			passwordInput2 !== "" &&
			emailInput !== "" &&
			phoneInput !== "" &&
			addressArea !== "" &&
			formRegistrationBtn !== ""
		) {
			// window.location.href = "congratulations.html";
			window.location.replace("/congratulations.html");
		} else {
			alert("Please Fill the Form Correctly.");
		}
	});

	// return error;
});

iconCloseReg.addEventListener("click", romoveButtonForm);

function romoveButtonForm(e) {
	e.preventDefault();
	// formValidate.remove(iconCloseReg);

	if (iconCloseReg === iconCloseReg) {
		formValidate.remove(iconCloseReg);
		history.back();
	}
}
