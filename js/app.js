console.log('app.js was loaded.');
var app = angular.module("Calculator",[])
app.controller('CalcCtrl', ['$scope', function($scope) {
  $scope.display = 0;
  $scope.number1 = 0;
  $scope.newDisplay = false;
  $scope.operator = '';

  $scope.clear = function() {
    if ($scope.display === 0 || $scope.display == '0' || $scope.newDisplay) {
      $scope.number1 = 0;
      $scope.operator = '';
    } else {
      $scope.display = 0;
    }
  }

  $scope.newDigit = function(value) {
    if ($scope.display === 0 || $scope.display == '0' || $scope.newDisplay) {
      $scope.display = value;
      $scope.newDisplay = false;
    } else {
      $scope.display = $scope.display + value;
    }
  }

  $scope.operate = function(operator) {
    if ($scope.operator === '') {
      $scope.number1 = parseInt($scope.display);
    } else {
      $scope.equals();
    }
    $scope.newDisplay = true;
    $scope.operator = operator;
    $scope.number1 = $scope.display;
  }

  $scope.equals = function() {
    if ($scope.operator === 'add') {
      $scope.display = parseInt($scope.number1) + parseInt($scope.display);
    } else if ($scope.operator === 'subtract') {
      $scope.display = $scope.number1 - parseInt($scope.display);
    } else if ($scope.operator === 'multiply') {
      $scope.display = $scope.number1 * parseInt($scope.display);
    } else if ($scope.operator === 'divide') {
      $scope.display = $scope.number1 / parseInt($scope.display);
    }
    $scope.newDisplay = true;
    $scope.operator = '';
  }

}])
