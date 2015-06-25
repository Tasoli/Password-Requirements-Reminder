// create a variable that holds the url of the tab
var url = window.location.href;
// create a div element. we will use this later if we find a password field on the page
var div = document.createElement('div');
// create a variable that identifies if there's a password field on the page
var findPass = document.querySelectorAll("input[type='password']");


function standardDiv(div) {
		//set attributes for div and paste the password reminder
		div.id = 'PasswordRequirementsReminder';
		div.style.position = 'relative';
		div.style.top = '0px';
		div.style.left = '0px';
		div.style.zIndex = '100000001';
		div.style.width = '100%';   
		div.style.height = '';
		div.style.backgroundColor = 'red';
		div.style.textAlign = 'left';
		div.style.color = 'black';
		div.style.fontSize = 'medium';
		div.style.fontFamily = 'arial';
		//append all elements
		document.body.insertBefore(div, document.body.firstChild);
}

// Chase rules
if (url.includes('.chase.com')){
	// if the password input box is found, do the following
	if (findPass.length > 0) {
		// style and append the div that will house our text
		standardDiv(div);
		// fill in our reminder text
		div.innerHTML = "Remember, Chase.com enforces the following arbitrary bullshit password rules: <br> 1) 8-32 characters long <br> 2) At least one letter and one number <br> 3) Be different than your previous five passwords <br> 4) Not match your User ID <br> 5) Not include more than 2 identical characters <br> 6) Not include more than 2 consecutive characters (123, abc) <br> 7) Not use the name of the financial institution (JPM, CHASE, MORGAN)";
	}
}

// Microsoft rules
if (url.includes('.microsoft.com')){
	// if the password input box is found, do the following
	if (findPass.length > 0) {
		// style and append the div that will house our text
		standardDiv(div);
		// fill in our reminder text
		div.innerHTML = "Remember, Microsoft.com enforces the following arbitrary bullshit password rules: <br> 1) 8-character minimum <br> 2) Case sensitive <br> 3) Contain at least two of the following: uppercase letters, lowercase letters, numbers, and symbols.";
	}
}

// T-mobile rules
if (url.includes('.t-mobile.com')){
	// if the password input box is found, do the following
	if (findPass.length > 0) {
		// create the div that will house our text
		standardDiv(div);
		// fill in our reminder text
		div.innerHTML = "Remember, T-Mobile.com enforces the following arbitrary bullshit password rules: <br> 1) Must be between 8-15 characters <br> 2) Must contain at least one number <br> 3) Must contain at least one letter <br> 4) Cannot contain spaces";
	}
}

/*
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

// create the div that will house our text
var div = document.createElement( 'div' );
//append all elements
document.body.insertBefore(div, document.body.firstChild);
//set attributes for div
div.id = 'myDivId';
div.style.position = 'relative';
div.style.top = '0px';
div.style.left = '0px';
div.style.zIndex = '100000001';
div.style.width = '100%';   
div.style.height = '50px';
div.style.backgroundColor = 'red';
*/