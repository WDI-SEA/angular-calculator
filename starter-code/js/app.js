var app = angular.module("MyApp", []);

app.controller("HomeCtrl", ['$scope', function($scope) {
	$scope.initVal = "0";
	$scope.memory = null;
	$scope.negaPosi = true;
	
	$scope.one = function() {
		$scope.initVal = $scope.initVal + "1";
	}
	$scope.two = function() {
		$scope.initVal = $scope.initVal + "2";
	}
	$scope.three = function() {
		$scope.initVal = $scope.initVal + "3";
	}
	$scope.four = function() {
		$scope.initVal = $scope.initVal + "4";
	}
	$scope.five = function() {
		$scope.initVal = $scope.initVal + "5";
	}
	$scope.six = function() {
		$scope.initVal = $scope.initVal + "6";
	}
	$scope.seven = function() {
		$scope.initVal = $scope.initVal + "7";
	}
	$scope.eight = function() {
		$scope.initVal = $scope.initVal + "8";
	}
	$scope.nine = function() {
		$scope.initVal = $scope.initVal + "9";
	}
	$scope.zero = function() {
		$scope.initVal = $scope.initVal + "0";
	}
	$scope.point = function() {
		$scope.initVal = $scope.initVal + ".";
	}

	$scope.toggleNegativePositive = function() {
		console.log("toggle");
		//$scope.negaPosiStr = $scope.negaPosiStr === '' ? '-' : '';
		$scope.negaPosi = !$scope.negaPosi;
		console.log($scope.negaPosi);
		if ($scope.negaPosi == false) {
			$scope.initVal = "-" + $scope.initVal;
		} else {
			$scope.initVal = Math.abs($scope.initVal);
		}
	}

	$scope.saveInMemory = function() {
		$scope.memory = $scope.initVal;
	};

	//--OPERATIONS-->
	$scope.add = function() {
		console.log("adding...");
		$scope.saveInMemory();
		$scope.operation = "+";
		$scope.initVal = "0";
	}

	$scope.subtract = function() {
		console.log("subtracting...");
		$scope.saveInMemory();
		$scope.operation = "-";
		$scope.initVal = "0";
	}
	$scope.multiply = function() {
		console.log("multiplying...");
		$scope.saveInMemory();
		$scope.operation = "*";
		$scope.initVal = "0";
	}
	$scope.divide = function() {
		console.log("dividing...");
		$scope.saveInMemory();
		$scope.operation = "/";
		$scope.initVal = "0";
	}

	//--RESULT-->
	$scope.calculate = function() {
		if ($scope.operation == "+"){
			$scope.initVal = parseFloat($scope.memory) + parseFloat($scope.initVal);
			$scope.negaPosi = !$scope.negaPosi;
		}
		else if ($scope.operation == "-"){
			$scope.initVal = parseFloat($scope.memory) - parseFloat($scope.initVal);
			$scope.negaPosi = !$scope.negaPosi;
		}
		else if ($scope.operation == "*"){
			$scope.initVal = parseFloat($scope.memory) * parseFloat($scope.initVal);
			$scope.negaPosi = !$scope.negaPosi;
		}
		else if ($scope.operation == "/"){
			$scope.initVal = parseFloat($scope.memory) / parseFloat($scope.initVal);
			$scope.negaPosi = !$scope.negaPosi;
		}
	}

	$scope.reset = function() {
		$scope.initVal = null;
		$scope.initVal = "0";
	}
}]);