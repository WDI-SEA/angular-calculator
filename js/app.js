console.log('app.js was loaded.');
var calcApp = angular.module("calcApp", []);
calcApp.controller("calcCtrl", ["$scope", function($scope){
    $scope.value = 0;
    $scope.numbers = [];
    $scope.operator = "";

    $scope.clear = function() {
        $scope.value = 0;
        $scope.numbers = [];
    }

    $scope.button = function($event) {
        if ($scope.value == 0) {
            $scope.value = event.target.textContent
        } else if ($scope.value != 0) {
            $scope.value = $scope.value + event.target.textContent
        }
    }

    $scope.operatorPush = function($event) {
        $scope.operatorKey = escape(event.target.textContent);
        $scope.numbers.push($scope.value);

        $scope.value = '';

        if ($scope.numbers.length === 2) {
            $scope.getAnswer();
        } else {
            $scope.value = '';
        }

        if ($scope.operatorKey == "%F7") {
            $scope.operator = "/"
        } else if ($scope.operatorKey == "%D7"){
            $scope.operator = "*"
        } else if ($scope.operatorKey == "%u2212") {
            $scope.operator = "-"
        } else {
            $scope.operator = "+";
        }

    }

    $scope.getAnswer = function() {
            if($scope.numbers.length === 2) {
            var answer = eval($scope.numbers[0] + $scope.operator + $scope.numbers[1])
            $scope.numbers = [];
            $scope.numbers.push(answer);
            $scope.value = "";
            console.log($scope.numbers)
        } 
    }

    $scope.getEquals = function() {
            var answer = eval($scope.numbers[0] + $scope.operator + $scope.value)
            $scope.value = answer;
            $scope.operator = "";
            $scope.numbers = [];
    }

    $scope.equals = function($event) {
        $scope.getEquals();
    }




}]);