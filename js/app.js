console.log('app.js was loaded.');

var CalcApp = angular.module('app', []);
CalcApp.controller('calcController', ['$scope', function($scope) {
    $scope.display = 0;
    $scope.num1 = null;
    $scope.num2 = null;
    $scope.operator = null;
    // $scope.equalClicked = false;

    $scope.numPress = function(num) {
        console.log("numPress called with", num);
        $scope.numTracker += num.toString();
        console.log("numTracker ==", $scope.numTracker)
        $scope.display = $scope.numTracker;
    }

    $scope.operatorPress = function(op) {
        console.log("operatorPress was called with", op);
        if ($scope.numTracker) {
            $scope.num1 = parseFloat($scope.numTracker);
        } else {
            $scope.num1 = 0
        }
        $scope.operator = op;
        $scope.numTracker = '';
        console.log("num1 is", $scope.num1)
    }

    $scope.evaluate = function() {
        console.log('evaluate was called');
        if ($scope.numTracker) {
            $scope.num2 = parseFloat($scope.numTracker);
        } else {
            $scope.num2 = 0
        }
        console.log("Current state:"
            $scope.num1, $scope.operator, $scope.num2);

        //the switch statement is an if statement at heart - the case (if - else if else if else ... default)

        switch ($scope.operator) {
            case '+':
                $scope.display = $scope.num1 - $scope.num2;
                break;
            case '-':
                $scope.display = $scope.num1 - $scope.num2;
                break;
            case '*':
                $scope.display = $scope.num1 * $scope.num2;
                break;
            case '/':
                $scope.display = ($scope.num1 / $scope.num2).tofixed(2);
                break;
            default:
                console.log('default should never be reached usually');
                break;

        }
        //clear the calculator
        $scope.numTracker = '';
        $scope.num1 = null;
        $scope.num2 = null;
        $scope.operator = null;

    }


    $scope.clear = function() {
        $scope.display = 0;
        $scope.numTrakcer = '';
        $scope.num1 = null;
        $scope.num2 = null;
        $scope.operator = null;
    }
}]);


//     $scope.numFunct = function(key) {
//         if ($scope.equalClicked) {
//             clearInputs();
//             clearChecks();
//             $scope.display = key;
//         } else if ($scope.operator && $scope.num1) {
//             $scope.display += '' + key;
//         } else if ($scope.display == 0) {
//             $scope.display = key;
//         } else if (!$scope.num1) {var CalcApp = angular.module('app', []);
// CalcApp.controller('calcController', ['$scope', function($scope) {
//             $scope.display += '' + key;
//         }
//     }

//     $scope.opFunct = function(operation) {
//         if ($scope.num1 || $scope.operator) {
//             return;
//         } else {
//             console.log('here');
//             $scope.num1 = parseInt($scope.display);
//             $scope.display += ' ' + operation + ' ';
//             $scope.operator = operation;
//         }

//         if ($scope.equalClicked) $scope.equalClicked = false;
//     }

//     $scope.equalFunct = function() {
//         if ($scope.num1 && $scope.operator && $scope.display) {
//             $scope.equalClicked = true;
//             $scope.display = parseInt($scope.display.split(' ')[2]);
//             switch ($scope.operator) {
//                 case '+':
//                     $scope.display += $scope.num1;
//                     break;
//                 case '-':
//                     $scope.display = $scope.num1 - $scope.display;
//                     break;
//                 case '/':
//                     $scope.display = $scope.num1 / $scope.display;
//                     break;
//                 case '*':
//                     $scope.display *= $scope.num1;
//             }
//             clearInputs();
//         }
//     };

//     $scope.clearAll = function() {
//         clearInputs();
//         clearChecks();
//     };

//     function clearInputs() {
//         $scope.num1 = undefined;
//         $scope.num2 = undefined;
//         $scope.operator = undefined;
//     }

//     function clearChecks() {
//         $scope.equalClicked = false;
//         $scope.display = 0;
//     }
