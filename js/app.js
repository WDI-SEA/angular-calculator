console.log('app.js was loaded.');

var calcApp = angular.module("calcApp", []);

calcApp.controller("CalcCtrl", ["$scope", function($scope){
  $scope.value = '0';
  $scope.numbers = [];
  $scope.operator = '';

  $scope.buttonPush = function(event){
    if($scope.value == '0' || $scope.value == ''){
      $scope.value = event.target.textContent;
    } else if($scope.operator !== ''){
      $scope.value = event.target.textContent;
    } else {
      $scope.value += event.target.textContent;
    }
  };

  $scope.operatorPush = function(event){
    console.log("operator pushed");
    //store the value in the calculator
    $scope.numbers.push($scope.value);

    //check if we need to evaluate it it
    if($scope.numbers.length === 2){
      $scope.getIntermediateAnswer();
    } else {
      //clear the value
      $scope.value = '';
    }

    if(escape(event.target.textContent) == '%F7'){
      $scope.operator = '/';
    }
    else if(escape(event.target.textContent) == '%D7'){
      $scope.operator = '*';
    }
    else if(escape(event.target.textContent) == '%u2212'){
      $scope.operator = '-';
    } else {
      $scope.operator = '+';
    }
  };

  $scope.getIntermediateAnswer = function(){
    //evaluate the expression
    var result = eval($scope.numbers[0] + $scope.operator + $scope.numbers[1]);
    //display it on the calculator
    $scope.value = result;
    //clear the numbers array and add the new value to the array
    $scope.numbers = [result];
  };

  $scope.getFinalAnswer = function(){
    var result = eval($scope.numbers[0] + $scope.operator + $scope.value);
    $scope.value = result;
    $scope.numbers = [];
    $scope.operator = '';
  }

  $scope.clear = function(){
    $scope.numbers = [];
    $scope.operator = '';
    $scope.value = '0';
  };
}]);
