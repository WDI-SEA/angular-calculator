console.log('app.js was loaded.');

var calcApp = angular.module("calcApp", []);

calcApp.controller("CalcCtrl", ["$scope", function($scope){
  $scope.display = '0';
  $scope.total = 0;
  $scope.operator = '';
  $scope.append = false;

  $scope.initialize = function(){
    $scope.display = '0';
    $scope.total = 0;
    $scope.operator = '';
    $scope.append = false;
  };

  $scope.buttonPush = function(event){
    console.log($scope.operator);
    if(!$scope.operator){
        //TODO: If a number is entered without an operator being pressed first it should
        //  clear the screen / memory and that new number should become the running total
      if($scope.display === '0'){
        $scope.display = event.target.textContent;
      } else {
        $scope.display += event.target.textContent;
      }
    } else if ($scope.operator === '='){
      $scope.display = event.target.textContent;
      $scope.operator = '';
    } else {
      if($scope.append){
        $scope.display += event.target.textContent;
      } else {
        $scope.append = true;
        $scope.display = event.target.textContent;
      }
    }
  };

  $scope.operatorPush = function(event){
    //store the value in the calculator
    console.log(escape(event.target.textContent));
    if($scope.operator !== '='){
        $scope.getTotal();
    }

    if(escape(event.target.textContent) ==='%F7'){
      $scope.operator = '/';
    }
    else if(escape(event.target.textContent) === '%D7'){
      $scope.operator = '*';
    }
    else if(escape(event.target.textContent) === '%u2212'){
      $scope.operator = '-';
    } else if (escape(event.target.textContent) === '%3D'){
      $scope.operator = '=';
    } else {
      $scope.operator = '+';
    }
  };

  $scope.getTotal = function(){
    if($scope.operator){
      $scope.total = eval($scope.total + $scope.operator + $scope.display);
      $scope.display = $scope.total;
      $scope.append = false;
    } else {
      $scope.total = $scope.display;
    }
  };

}]);
