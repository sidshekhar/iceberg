function thankYou() {
	if (document.getElementById('email').value != '' || document.getElementById('email2').value != '') {
		$('#thankyoumodal').modal('show');
		document.getElementById('email').value = '';
		document.getElementById('email2').value = '';
	}
}

function Activation() {
	var activationcode = document.getElementById('invite').value;
	if (activationcode == '3b23c9') {
		window.location = 'welcome.html';
	}
}
