/**
 * http://usejsdoc.org/
 */

// using DOM API
document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM ready..');
	var box = document.querySelector('.jumbotron');
	var hideBtn = document.querySelector('.btn-danger');
	var showBtn = document.querySelector('.btn-primary');

	hideBtn.addEventListener('click', function(e) {
		box.style.display = 'none';
	});
	showBtn.addEventListener('click', function(e) {
		box.style.display = '';
	});

	// --------------------------------------------
	// Model
	var tnr = {
		name : 'Ria'
	};
	// Service
	var tnrService = {
		doTeach : function(sub) {
			console.log(this.name + " teaching "+sub);
		}
	};
	// View
	var teachBtn = document.getElementById("teachBtn");

	// teachBtn.addEventListener('click',function(){
	// tnrService.doTeach.call(tnr,".js");
	// tnrService.doTeach.apply(tnr,[".js"]);
	// });
	// or
	teachBtn.addEventListener('click', tnrService.doTeach.bind(tnr,'.js'));

});




