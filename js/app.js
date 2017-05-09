/* globals angular */
console.log('app.js was loaded.');

var calcApp = angular.module('Calculon', []);
calcApp.controller('Calculator', ['$scope', function($scope) {
    $scope.bankA = undefined;
    $scope.operator = undefined;
    $scope.screen = '0';
    $scope.cleared = true;

    $scope.pressNumber = function(num) {
        if ($scope.cleared === true) {
            $scope.cleared = false;
            $scope.screen = '';
            $scope.screen += num;
        } else {
            $scope.screen += num;
        }
    };

    $scope.pressOperator = function(op) {
        if ($scope.bankA === undefined) {
            $scope.bankA = parseInt($scope.screen);
            $scope.screen = '';
        }
        equalFunct();
        $scope.screen = $scope.bankA.toString();
        $scope.cleared = true;
        $scope.operator = op;
    };

    $scope.pressEqual = function() {
        equalFunct();
        clearInputs();
    };

    $scope.clear = function() {
        clearInputs();
        $scope.cleared = true;
        $scope.screen = '0';
    };

    function equalFunct() {
        switch ($scope.operator) {
            case '+':
                $scope.bankA = parseInt($scope.screen) + $scope.bankA;
                break;
            case '-':
                $scope.bankA = ($scope.bankA - parseInt($scope.screen)).toString();
                break;
            case '/':
                $scope.bankA = ($scope.bankA / parseInt($scope.screen)).toString();
                break;
            case '*':
                $scope.bankA = (parseInt($scope.screen) * $scope.bankA).toString();
                break;
        }
    }

    function clearInputs() {
        $scope.bankA = undefined;
        $scope.operator = undefined;
    }
}]);
