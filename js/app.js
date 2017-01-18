angular.module('App', [])
.controller('appController', ['$scope', function($scope){

  // DECLARE VARIABLES
  $scope.test = "hello world";
  $scope.firstArg = '';
  $scope.secondArg = '';
  $scope.onFirstArg = true;
  $scope.onSecondArg = false;
  $scope.operator = '';
  $scope.calcString = 0;

  //DECLARE FUNCTIONS
  $scope.numberClick = function(num){
    console.log(num + " clicked");
    if($scope.onFirstArg){
      console.log("on first arg");
      $scope.firstArg = $scope.firstArg + num;
      $scope.calcString = $scope.firstArg;
    } else if($scope.onSecondArg){
      console.log("on second arg");
      $scope.secondArg = $scope.secondArg + num;
      $scope.calcString = $scope.secondArg;
    }
  };

  $scope.operatorClicked = function(operator){
    console.log(operator);
    $scope.onFirstArg = false;
    $scope.onSecondArg = true;
    $scope.operator = operator;
  };

  $scope.calculate = function(){
    console.log("calculate");
    if($scope.operator === ''){
      //do nothing
    } else if($scope.operator == '/'){
      $scope.calcString = $scope.toNumber($scope.firstArg) / $scope.toNumber($scope.secondArg);
    } else if($scope.operator == '*'){
      $scope.calcString = $scope.toNumber($scope.firstArg) * $scope.toNumber($scope.secondArg);
    } else if($scope.operator == '+'){
      $scope.calcString = $scope.toNumber($scope.firstArg) + $scope.toNumber($scope.secondArg);
    } else if($scope.operator == '-'){
      $scope.calcString = $scope.toNumber($scope.firstArg) - $scope.toNumber($scope.secondArg);
    }

    $scope.resetAfterCalc();
  };

  $scope.resetAfterCalc = function(){
    console.log("clear");
    $scope.test = "hello world";
    $scope.firstArg = $scope.calcString;
    $scope.secondArg = '';
    $scope.onFirstArg = true;
    $scope.onSecondArg = false;
    $scope.operator = '';
  };

  $scope.clear = function(){
    console.log("clear");
    $scope.test = "hello world";
    $scope.firstArg = '';
    $scope.secondArg = '';
    $scope.onFirstArg = true;
    $scope.onSecondArg = false;
    $scope.operator = '';
    $scope.calcString = 0;
  };

  $scope.toNumber = function(num){
    return parseFloat(num, 10);
  };

}]);
