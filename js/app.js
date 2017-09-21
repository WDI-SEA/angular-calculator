console.log('app.js was loaded.');
var introApp = angular.module('Calculator', []);



introApp.controller('homeCtrl', ['$scope', function($scope){
	// Bind to output display
	$scope.output = '0';

	$scope.newNumber = true;
	//holds number value of the string in the display output
    $scope.pendingValue = null;

    var ADD = 'adding';
    var SUBTRACT = 'subtracting';
    var ADD_TOKEN = '+';
    var SUBTRACT_TOKEN = '-';


	$scope.calc = function(btn){
		console.log(btn)
		if($scope.output == '0' || $scope.newNumber){
			$scope.output = btn;
			$scope.newNumber = false;
		} else {
			$scope.output+= String(btn);
		}
		$scope.pendingValue = toNumber($scope.output);
	};

	toNumber = function(numberString) {
    	var result = 0;
    	if(numberString) {
      		result = numberString*1;
    	}
    	return result;
  	};
  	$scope.onClickClear = function(){
  		$scope.output = '0';
  	};
  	// $scope.onClickAdd = function(){
  	// 	$scope.output +=  
  	// };






}])