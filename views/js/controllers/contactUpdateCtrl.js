var app = angular.module('apndr');

app.controller('contactUpdateCtrl', function($scope, $routeParams, $location, contactsService){
	
	var requestId = {_id: $routeParams.contactId}
	$scope.name = $routeParams.contactName;
	console.log('REQUEST ID', requestId)
	contactsService.getRequestInfo(requestId).then(function(data){
		console.log('data from update form request', data)
		// $scope.contactName = data.data.fullName;
		// console.log('data.data', data.data)
		// $scope.data = data.data;
	})
  // $scope.contactName = $routeParams.contactName;
  // var id = $routeParams.contactId;
  // console.log('routeParams contactId', id);
  var theId = $routeParams.contactId
  $scope.submitUpdate = function(address){
  	contactsService.updateaddress(address, $routeParams.contactId, $routeParams.requestId);
		var contactId = $routeParams.contactId;
		var requestId = $routeParams.requestId;
  	$location.path('/thanks/' + $scope.name);
  }
})