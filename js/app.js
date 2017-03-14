console.log('app.js was loaded.');
var introApp = angular.module('Calculator', []);



introApp.controller('homeCtrl', ['$scope', function($scope){
	
	$scope.output = '0';

	$scope.newNumber = true;

    $scope.pendingValue = null;




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



}])