// console.log('app.js was loaded.');
angular.module('app', [])
    .controller("MyController", ["$scope", function($scope) {
        $scope.num1 = undefined;
        $scope.num2 = undefined;
        $scope.operator = undefined;
        $scope.display = '0';

        // if 0 is present change the display to the number of numClick
        $scope.numClick = function(number) {
            if ($scope.display == '0') {
                $scope.display = num.toString();
            } else {
                $scope.display += digit.toString();


            }
        };

        $scope.operatorClick = function(operator) {
            console.log('this is the operator' + operator);
        };
    }]);
