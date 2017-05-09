angular.module('app', [])
    .controller("MyController", ['$scope', function($scope) {
        // Clearing the working variables after defining the functions...

        $scope.numClick = function(digit) {
            if ($scope.clearDisplay) {
                $scope.display = digit;
                $scope.clearDisplay = false;
            } else {
                $scope.display += digit.toString();
            }
        };

        $scope.opClick = function(operator) {
            // If there is a pending operation, evaluate it before proceeding
            if ($scope.operator) {
                $scope.evaluate();
            }
            $scope.num1 = parseFloat($scope.display, 10);
            $scope.operator = operator;
            $scope.clearDisplay = true;
        };

        $scope.evaluate = function() {
            $scope.num2 = parseFloat($scope.display, 10);
            if ($scope.operator == '+') {
                $scope.display = $scope.num1 + $scope.num2;
            } else if ($scope.operator == '-') {
                $scope.display = $scope.num1 - $scope.num2;
            } else if ($scope.operator == '*') {
                $scope.display = $scope.num1 * $scope.num2;
            } else if ($scope.operator == '/') {
                $scope.display = $scope.num1 / $scope.num2;
            }
            // After performing the pending operation, clear it from the system
            $scope.operator = '';
            $scope.clearDisplay = true;
        };

        $scope.clearAll = function() {
            $scope.display = '0';
            $scope.num1 = 0;
            $scope.operator = '';
            $scope.clearDisplay = true;
        };

        // Clear the working variables after defining the functions to DRY it up
        $scope.clearAll();
    }]);
