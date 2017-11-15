function thankYou() {
	if (document.getElementById('email').value != '' || document.getElementById('email2').value != '') {
		$('#thankyoumodal').modal('show');
		document.getElementById('email').value = '';
		document.getElementById('email2').value = '';
	}
}

function activation() {
	// var activationcode = document.getElementById('invite');
	// if (activationcode == '3b23c9') {
	window.location = 'https://www.sidshekhar.com/iceberg/welcome.html';
	// }
}
