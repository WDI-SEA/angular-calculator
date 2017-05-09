/*globals angular*/

console.log('app.js was loaded.');

var calculator = angular.module('Calculon', []);
calculator.controller('Calculator', ['$scope', function($scope) {
    $scope.screen = '0';
    $scope.bank = undefined;
    $scope.operator = undefined;
    $scope.positive = true;
    var calcDone = false;

    $scope.pressNumber = function(n) {
        if ($scope.screen === '0' || (calcDone && $scope.operator)) {
            $scope.screen = n.toString();
            calcDone = false;
        } else if (!calcDone) {
            $scope.screen += n;
        } else {
            clearInputs();
            $scope.screen = n.toString();
        }
    };

    $scope.clear = function() {
        $scope.screen = '0';
        clearInputs();

    };

    $scope.pressOperation = function(op) {

        $scope.bank = parseInt($scope.screen);
        if (!calcDone) {
            $scope.screen = '';
        }
        if ($scope.operator) {
            $scope.equal();
        }
        $scope.operator = op;
    };

    $scope.equal = function() {
        switch ($scope.operator) {
            case '+':
                $scope.bank += parseInt($scope.screen);
                break;
            case '-':
                $scope.bank -= parseInt($scope.screen);
                break;
            case '*':
                $scope.bank *= parseInt($scope.screen);
                break;
            case '/':
                $scope.bank /= parseInt($scope.screen);
                break;
            case '^':
                $scope.bank = Math.pow(parseInt($scope.screen), $scope.bank);
        }
        $scope.screen = $scope.bank.toString();
    };

    $scope.pressEqual = function() {
        $scope.equal();
        calcDone = true;
    };


    var clearInputs = function() {
        $scope.bank = undefined;
        $scope.operator = undefined;
        $scope.postive = true;
        calcDone = false;
    };

    $scope.plusOrMinus = function() {
        if ($scope.positive) {
            if ($scope.screen[0] !== '-') {
                $scope.screen = "-" + $scope.screen;
            }
        } else {
            $scope.screen = Math.abs($scope.screen).toString();
        }

    };
}]);
