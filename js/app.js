console.log('app.js was loaded.');
var angularCalc = angular.module("angularCalc", []);

angularCalc.controller("calcCtrl", ["$scope", function($scope){
  var btnsClicked = '';

  $scope.value = '0';

  $scope.btnPressed = function(numberSymbol){
    var lastNum = btnsClicked[btnsClicked.length - 1];

    if($scope.value === '0') {
      $scope.value = numberSymbol.toString();
      btnsClicked += numberSymbol.toString();
    } else if (numberSymbol === "+" || numberSymbol === "-" || numberSymbol === "/" || numberSymbol === "*"){
      $scope.value = eval(btnsClicked);
      btnsClicked += numberSymbol;
    } else {
      if (lastNum === "+" || lastNum === "-" || lastNum === "/" || lastNum === "*"){
        $scope.value = numberSymbol.toString();
      } else {
        $scope.value += numberSymbol.toString();
      }
      btnsClicked += numberSymbol.toString();
    }
  };

  $scope.clearBtn = function(){
    $scope.value = '0';
    var btnsClicked = '';
  }

  $scope.getTotal = function() {
    $scope.value = eval(btnsClicked);
  }

}])
