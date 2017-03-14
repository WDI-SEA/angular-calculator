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
    if(!$scope.operator){
      if($scope.display === '0'){
        $scope.display = event.target.textContent;
      } else {
        $scope.display += event.target.textContent;
      }
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
    $scope.getTotal();

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

  $scope.getTotal = function(){
    if($scope.operator){
      $scope.total = eval($scope.total + $scope.operator + $scope.display);
      $scope.display = $scope.total;
      $scope.append = false;
      $scope.operator = '';
    } else {
      $scope.total = $scope.display;
    }
  };

}]);
