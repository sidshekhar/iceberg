$(document).ready(function() {
	$('#details').on('click', function(event) {
		$('html,body').animate(
			{
				scrollTop: $('#emailform2').offset().top
			},
			2000
		);
	});

	$('#typeit').typeIt({
		strings: ['BTC?', 'ETH?', 'LTC?', 'BTC?'],
		speed: 100,
		breakLines: false,
		autoStart: false
	});
});

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyB8D7-PWtBjp8GwdxUCZEIJftbLuMSzv8E',
	authDomain: 'iceberg-1cf01.firebaseapp.com',
	databaseURL: 'https://iceberg-1cf01.firebaseio.com',
	projectId: 'iceberg-1cf01',
	storageBucket: 'iceberg-1cf01.appspot.com',
	messagingSenderId: '640659832522'
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

//Create a new reference for each user under "users"
var userlist = firebase.database().ref('users').push();

//Function to user store demographic information.
function storedemographics() {
	var inputEmail1 = document.getElementById('email').value;
	var inputEmail2 = document.getElementById('email2').value;

	if (inputEmail1 != '') {
		firebase.database().ref('users/' + userlist.key).set({
			email: inputEmail1
		});
	} else if (inputEmail2 != '') {
		firebase.database().ref('users/' + userlist.key).set({
			email: inputEmail2
		});
	}
}

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
