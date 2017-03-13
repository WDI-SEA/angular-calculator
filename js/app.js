console.log('app.js was loaded.');
var calcApp = angular.module("AngularCalcApp", []);
calcApp.controller('HomeCtrl', ['$scope', function($scope){
	$scope.value = '0';

	// Get buttons to update display
	// Get clear button to clear display

	$scope.toggleValue = function(n){
	if ($scope.value == '0') {
			$scope.value = n;
		} else {
			$scope.value = '0';
		}
	};






}]);



