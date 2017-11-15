function thankYou() {
	if (document.getElementById('email').value != '';) && (document.getElementById('email2').value != '';){
		$('#thankyoumodal').modal('show');
	document.getElementById('email').value = '';
	document.getElementById('email2').value = '';
	}
	
}
