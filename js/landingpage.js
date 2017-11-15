function thankYou() {
	if (document.getElementById('email').value != '' || document.getElementById('email2').value != '') {
		$('#thankyoumodal').modal('show');
		document.getElementById('email').value = '';
		document.getElementById('email2').value = '';
	}
}

function Activation() {
	var activationcode = document.getElementById('invite').value;
	if (activationcode == '25acb1') {
		window.location = 'john.html';
	} else if (activationcode == '6b405e') {
		window.location = 'aaron.html';
	} else if (activationcode == 'f256b2') {
		window.location = 'brandon.html';
	} else if (activationcode == '591833') {
		window.location = 'kyle.html';
	} else if (activationcode == '50ee09') {
		window.location = 'nick.html';
	} else if (activationcode == '475f39') {
		window.location = 'nicholas.html';
	} else if (activationcode == '3b23c9') {
		window.location = 'welcome.html';
	}
}
