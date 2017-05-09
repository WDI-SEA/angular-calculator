/* globals angular */
console.log('app.js was loaded.');
var calcApp = angular.module('Calculon', []);
calcApp.controller('Calculator', ['$scope', function($scope) {
    $scope.screen = '0';
    $scope.screenDisplay = '0';
    $scope.bankA = undefined;
    $scope.operator = undefined;
    var hasBeenEquated = false;
    var operatorPressed = false;
    $scope.pressNumber = function(num) {
        if ($scope.screen === '0') {
            console.log('zero screen')
            $scope.screen = '';
            $scope.screenDisplay = '';
        }
        if (hasBeenEquated === true && operatorPressed === false) {
            $scope.screen = '';
            $scope.screenDisplay = '';
            hasBeenEquated = false;
        }
        $scope.screen += num;
        $scope.screenDisplay += num;
    };

    $scope.operation = function(operator) {
        operatorPressed = true;
        if ($scope.bankA === undefined) {
            $scope.bankA = parseFloat($scope.screen);
            $scope.screen = '';
        } else {
            equate();
            $scope.bankA = parseFloat($scope.screen);
            $scope.screen = '';
        }
        $scope.operator = operator;
        $scope.screenDisplay += $scope.operator;

    };

    $scope.pressEqual = function() {
        console.log("pressed equal");
        equate();
        $scope.screenDisplay = $scope.screen;
        hasBeenEquated = true;
        clearInputs();
    };

    function equate() {
        var output;
        var screenVal = parseFloat($scope.screen);
        switch ($scope.operator) {
            case "+":
                output = $scope.bankA + screenVal;
                break;
            case "-":
                output = $scope.bankA - screenVal;
                break;
            case "/":
                output = $scope.bankA / screenVal;
                break;
            case "*":
                output = $scope.bankA * screenVal;
                break;
        }
        $scope.screen = output;
        console.log(output);
    };

    $scope.clear = function() {
        clearInputs();
        $scope.screen = '0';
        $scope.screenDisplay = '0';
    };

    function clearInputs() {
        $scope.bankA = undefined;
        $scope.operator = undefined;
        operatorPressed = false;
    }

}]);
