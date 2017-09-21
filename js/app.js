angular.module('App', [])
.controller('appController', ['$scope', function($scope){

  // DECLARE VARIABLES
  $scope.firstArg = '';
  $scope.secondArg = '';
  $scope.onFirstArg = true;
  $scope.onSecondArg = false;
  $scope.operator = '';
  $scope.calcString = 0;

  //DECLARE FUNCTIONS
  $scope.numberClick = function(num){
    if($scope.onFirstArg){
      if(isNaN($scope.firstArg)){
        $scope.firstArg = $scope.firstArg + num;
        $scope.calcString = $scope.firstArg;
      } else{
        $scope.firstArg = "" + num;
        $scope.calcString = $scope.firstArg;
      }

    } else if($scope.onSecondArg){
      $scope.secondArg = $scope.secondArg + num;
      $scope.calcString = $scope.secondArg;
    }
  };

  $scope.operatorClicked = function(operator){
    if($scope.operator===''){
      $scope.onFirstArg = false;
      $scope.onSecondArg = true;
      $scope.operator = operator;
    } else{
      if(!$scope.secondArg){
        $scope.onFirstArg = false;
        $scope.onSecondArg = true;
        $scope.operator = operator;
      } else{
        $scope.calculate();
        $scope.onFirstArg = false;
        $scope.onSecondArg = true;
        $scope.operator = operator;
      }
    }

  };

  $scope.calculate = function(){
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
    $scope.firstArg = $scope.calcString;
    $scope.secondArg = '';
    $scope.onFirstArg = true;
    $scope.onSecondArg = false;
    $scope.operator = '';
  };

  $scope.clear = function(){
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
