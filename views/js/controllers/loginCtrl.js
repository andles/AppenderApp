var app = angular.module('apndr');

app.controller('loginCtrl', function($scope, $location, userService, $rootScope){
  $scope.googleAuth = function(){
    userService.googleAuth().then(function(data){
    	console.log(data);
    });
  }
});