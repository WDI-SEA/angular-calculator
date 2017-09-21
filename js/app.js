console.log('app.js was loaded.');
var calcApp = angular.module("AngularCalcApp", []);
calcApp.controller('HomeCtrl', ['$scope', function($scope){
	$scope.value = '0';
	$scope.value1 = '0';
    $scope.newValue = false;
    $scope.operator = ' ';

	$scope.toggleValue = function(n){
	if ($scope.value == '0' || $scope.newValue) {
			$scope.value = n;
			$scope.newValue = true; 
		} else {
			$scope.value = $scope.value + n;
		}
	};

	$scope.clear = function(n){
	if ($scope.newValue = true) {
			$scope.value = 0;
 			$scope.operator = '';
		} else {
			$scope.value = 0;
		}
	};

	$scope.operate = function(n){
	if ($scope.value && !$scope.newValue) {
			$scope.value1 = $scope.value;
			$scope.value += n;
			$scope.newValue = true; 
		} else if ($scope.value.length > $scope.value1.length+1) {
			$scope.value = eval($scope.value);
			$scope.value += n; 
		}
	};

	$scope.equals = function(n){
	if ($scope.value.length > $scopevalue1.length+1){
			$scope.value = eval($scope.output);
			$scope.value1 = $scope.value; 
		} else {
			$scope.value = $scope.value1;
		}
	};

}]);



