var app = angular.module('apndr');

app.controller('thanksCtrl', function($scope, $routeParams){
	
  $scope.contactName = $routeParams.contactName;
});
