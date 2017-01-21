/**
 * http://usejsdoc.org/
 */


$(document).ready(function() {
	
	var $box=$('#postBox');
	var posts=null;
	
	function loadPosts(){
		
		$box.children().remove();
		 
		//		$.getJSON('http://0.0.0.0:3000/api/posts', function(data, textStatus, req) {
		//			posts=data;
		//			
		//			posts.forEach(function(post, i) {
		//				showPost(post)
		//			});
		//			
		//		});
		
		posts.forEach(function(post, i) {
				showPost(post)
		});
		
	}
	
	loadPosts();

	// Required validation
	function validateField($field) {
		var $div = $field.closest('div');
		if ($field.val() === "") {
			$div.addClass('has-error');
			$('.help-block', $div).remove();
			$div.append($('<div class="help-block">' + $field.attr('name')+' is required</div>'));
			return false;
		} else {
			$div.removeClass('has-error');
			$('.help-block', $div).remove();
			return true;
		}
	}


	function showPost(post){
		// posts.forEach(function(post, i) {
			var template=`
				<div class="list-group-item alert alert-info">
					<small>-- ${post.email}</small>
					<p>${post.message}</p>
				</div>
			`;
			$box.append(template);
		// });
	}
	
	
	$('#myForm').on('submit', function(e) {
		
		e.preventDefault();
		
		var $email = $("#email", $(this));
		var $message = $("#message", $(this));
		
		isValidForm = true;
		if (!validateField($email)) {
			isValidForm = false;
		}
		if (!validateField($message)) {
			isValidForm = false;
		}
		if (!isValidForm) {
			return;
		}
		
		var formData = {
			email : $email.val(),
			message : $message.val()
		};
		
		$.ajax('http://0.0.0.0:3000/api/posts', {
			method:'POST',
			data:formData,
			type:'json',
			success:function(){
				loadPosts();
			}
		})
		
		posts.push(post);
		
		$email.val('');
		$message.val('');
		
		
	});
	

});
