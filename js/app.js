console.log('app.js was loaded.');
var calcApp = angular.module('calcApp', []);
calcApp.controller('calculator', ['$scope', function($scope){
  var entries = '';

  $scope.show = '0';

  $scope.addNumbers = function(values){
    var lastEntry = entries[entries.length-1];

    if($scope.show === '0'){
      $scope.show = values.toString();
      entries += values.toString();
    }else if(/[+-/*]/.test(values)){
      $scope.show = eval(entries);
      entries += values;
    }else{
      if(/[+-/*]/.test(lastEntry)){
        $scope.show = values.toString();
      }else{
        $scope.show += values.toString();
      }
      entries += values.toString();
    }
  }

  $scope.clear = function(){
    $scope.show = '0';
    entries = '';
  }

  $scope.calculate = function(){
    $scope.show = eval(entries);
  }

}]);

