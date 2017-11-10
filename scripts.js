const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://api.blockchain.info/stats';
fetch(proxyurl + url)
	.then(function(response) {
		// Convert to JSON
		return response.json();
	})
	.then(function(j) {
		// Yay, `j` is a JavaScript object
		console.log(j);
		var tv = j['trade_volume_btc'];
		var etv = j['estimated_btc_sent'];
		var speculation_ratio = etv / (etv - tv);
		$('#spec-ratio').html(speculation_ratio);
	});
