// console.log('app.js was loaded.');
angular.module('app', [])
    .controller("CalcController", ["$scope", function($scope) {
        // console.log('in control'); // good way to check to see if app is using the controller which is in the body tag.
        $scope.display = 0;
        $scope.numTracker = '';
        $scope.num1 = null;
        $scope.num2 = null;
        $scope.operator = null;


        $scope.numPress = function(num) {
            // console.log("numPress called with", num); //num is the value being passed through ex: (4) (5) view in the console
            $scope.numTracker += num.toString();
            console.log("numTracker ==", $scope.numTracker); //tells what we currently have / allows us to make double digits //numTracker allows us to keep track of as many variables as we want. Turns them into a string so its not just single digits. can be written as append.
            $scope.display = $scope.numTracker;
        }

        $scope.operatorPress = function(op) {
            console.log("operatorPress was called with", op); //operator press expects an argument
            if ($scope.numTracker) {
                $scope.num1 = parseFloat($scope.numTracker); //allows you to get floats as well instead parseInt just does integers
            } else {
                $scope.num1 = 0;
            }
            $scope.operator = op;
            $scope.numTracker = '';
            console.log("num1 is ", $scope.num1); // shows num1 which is numbers selected then an operator and declares num 1 as the number clicked before the operator
        }

        $scope.evaluate = function() {
            console.log("evaluate was called");

            if ($scope.numTracker) {
                $scope.num2 = parseFloat($scope.numTracker);
            } else {
                $scope.num2 = 0;
            }
            // console.log("num2 is", $scope.num2);
            console.log("Current State:", $scope.num1, $scope.operator, $scope.num2);

            switch ($scope.operator) {
                case '+':
                    $scope.display = $scope.num1 + $scope.num2;
                    break;
                case '-':
                    $scope.display = $scope.num1 - $scope.num2;
                    break;
                case '*':
                    $scope.display = $scope.num1 * $scope.num2;
                    break;
                case '/':
                    $scope.display = ($scope.num1 / $scope.num2).toFixed(2); //we want this (whats in here) to evaluate first then we want to apply the two place decimal point.
                    break;
                default:
                    console.log("default should never be reached usually"); //default is basically your catch all final else statement. Good practice to always have a default
                    break;
            }

            //Clear the memory after pressing equals
            $scope.numTracker = '';
            $scope.num1 = null;
            $scope.num2 = null;
            $scope.operator = null;
        }

        // Clear Function :: the baseline is always 0. the display will display 0.
        $scope.clear = function() {
            $scope.display = 0;
            $scope.numTracker = '';
            $scope.num1 = null; // the 3 here and below are added b/c we want the calculator to clear or all 3 when the clear button is pressed
            $scope.num2 = null;
            $scope.operator = null;
            console.log('clear was called');

        }
    }]);

// to add in more numbers could use an array - every time we add an operator we combine to num1
