/**
 * http://usejsdoc.org/
 */



(function () {


	var mod = angular.module('forum', []);
	
	// model

	let posts = [
		{email:'nag@gmail.com',message:'bla bla'}
	];

	mod.controller('ForumController', function ($scope) { 
		$scope.posts = posts;
		$scope.post = {};
		$scope.addPost = function () {
			// send post data to server
			$scope.posts.push($scope.post);
			$scope.post = {};
		}
	});


 })();