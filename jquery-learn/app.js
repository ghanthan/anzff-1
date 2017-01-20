/**
 * http://usejsdoc.org/
 */

// using DOM API - with plain -js

// document.addEventListener('DOMContentLoaded', function() {
// console.log('DOM ready..');
// var box = document.querySelector('.jumbotron');
// var hideBtn = document.querySelector('.btn-danger');
// var showBtn = document.querySelector('.btn-primary');
//
// hideBtn.addEventListener('click', function(e) {
// box.style.display = 'none';
// });
// showBtn.addEventListener('click', function(e) {
// box.style.display = '';
// });
// });






// ------------------------------------------------
// using DOM API - with jQuery
/*
 * 
 * formula/syntax to with jQuery 
 * -----------------------------
 * 
 * var jqCollnObj=jQuery(selector,context)
 * 
 * jqCollnObj.action1().action1()
 * 
 * 
 */


$(document).ready(function() {

	var $box = $('.jumbotron');
	$('.btn-danger').click(function(event) {
		$box.slideUp(2000);
	});
	$('.btn-primary').click(function(event) {
		$box.slideDown(2000);
	});

	// $('.my-text',$('#myBox')).css({border:'1px solid
	// red','background-color':'yellow'});

	// $('#box2 p').css({
	// border : '1px solid red',
	// 'background-color' : 'yellow'
	// });

	// $('#menu').append("<ol><li>biryani</li></ol>");
	// $('<ol><li>panjabi thali</li></ol>').appendTo($('#menu'));
	// $('#menu').after($('<span class="badge">by Nag-Hotel</span>'));

	$('#reports a[href$=pdf]').after($(' <i>').attr({
		'class' : 'fa fa-file-pdf-o',
		height : '20',
		width : '20',
		color : 'red'
	}));
	
	
})
