var app = angular.module('apndr');

app.service('userService', function($q, $http){
	// this.googleAuth = function(){
	// 	// var dfd = $defer();
	// 	return $http({
	// 		method: 'GET',
	// 		url: 'http://localhost:9999/auth/google'
	// 	})
	// }

  this.getUser = function(){
  	return $http({
  		method: 'GET',
  		url: '/api/getuser'
  	})
  }

})

