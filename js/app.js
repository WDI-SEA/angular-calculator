console.log('app.js was loaded.');
angular.module("app", [])
    .controller("MyController", ["$scope", function($scope) {
        $scope.display = "0";
        $scope.num1 = 0;
        $scope.operator = '';

        $scope.numClick = function(digit) {
            //if 0 is diplayed then change display to the numClick value, called digit
            if ($scope.display == "0") {
                $scope.display = digit;
            } else {
                $scope.display += digit.toString();
            }
        };

        $scope.opClick = function(operator) {
            console.log("Operator is " + operator);
            $scope.num1 = $scope.display;
            $scope.operator = operator;
        };

    }]);
