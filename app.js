// angular code
var app = angular.module('app', []);

// postCtrl
app.controller('postCtrl', function ($scope) {
	// function to run when "Add New Post" button is clicked
	$scope.addPost = function () {
	//	only add a post if there's a username & a body
		if ($scope.postUser && $scope.postBody) {
			$scope.posts.unshift({
				username: $scope.postUser,
				body: $scope.postBody
			});
		//	clear both input fields after a new post
			$scope.postUser = null;
			$scope.postBody = null;
		}
	};
	
	// predefined mock data to display
	$scope.posts = [
		{
			username: 'npm',
			body: 'I enhance NodeJS.'
		},
		{
			username: 'angularJS',
			body: 'I enhance HTML syntax.'
		}
	]
});		// end postCtrl
