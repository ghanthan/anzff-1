
function teach() {
	console.log('teaching..');
	var name = "Nag"; // moved to heap
	try {
		// event..
		setTimeout(function() {
			console.log('callback run , after timeout..');
			// throw new Error('i hate .js');
			console.log(name);
		}, 5000);

	} catch (e) {
		console.log('i caught ' + e.message);
	}

	console.log('teaching end...');
}
teach();