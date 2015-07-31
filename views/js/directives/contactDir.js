var app = angular.module('apndr');

app.directive('contact', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/contact.html'   
  };

})
.directive('request', function(){
	return{
		restrict: 'E',
		templateUrl: 'requests.html',
		controller: 'homeCtrl'
	}
})
.directive('response', function(){
	return{
		restrict: 'E',
		templateUrl: 'responses.html',
		controller: 'responsesCtrl'
	}
});