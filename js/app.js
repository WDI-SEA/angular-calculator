// console.log('app.js was loaded.');
angular.module('app', [])
    .controller("CalcController", ['$scope', function($scope) {
        // console.log('in control');
        $scope.display = 0;
        $scope.numTracker = " ";
        $scope.num1 = null;
        $scope.num2 = null;
        $scope.operator = null;



        $scope.numPress = function(num) {
            // console.log("NumPress called with", num);
            $scope.numTracker += num.toString();
            // console.log("numTracker ==", $scope.numTracker);
            $scope.display = $scope.numTracker;

        }
        $scope.operatorPress = function(op) {
            // console.log("operatorPress was called with", op);
            if ($scope.numTracker) {
                $scope.num1 = parseFloat($scope.numTracker);
            } else {
                $scope.num1 = 0;
            }
            $scope.operator = op;
            $scope.numTracker = '';
            // console.log("num1 is", $scope.num1);
        }

        $scope.evaluate = function() {
            // console.log('evaluate was called');
            if ($scope.numTracker) {
                $scope.num2 = parseFloat($scope.numTracker);
            } else {
                $scope.num2 = 0;
            }
            // console.log("Current state:", $scope.num1, $scope.operator, $scope.num2);
            switch ($scope.operator) {
                case '+':
                    $scope.display = $scope.num1 + $scope.num2;
                    break;
                case '-':
                    $scope.display = $scope.num1 - $scope.num2;
                    break;
                case '*':
                    $scope.display = ($scope.num1 * $scope.num2).toFixed(2);
                    break;
                case '/':
                    $scope.display = $scope.num1 / $scope.num2;
                    break;
                default:
                    // console.log('default should never be reached usually');
            }
            $scope.numTracker = '';
            $scope.num1 = null;
            $scope.num2 = null;
            $scope.operator = null;

        }


        $scope.clear = function() {
            $scope.display = 0;
            $scope.numTracker = '';


        }


    }]);
