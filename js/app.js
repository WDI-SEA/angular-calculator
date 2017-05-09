angular.module("app", [])
    .controller("MyController", ["$scope", function($scope) {
        $scope.display = 0;
        $scope.numTracker = "";
        $scope.num1 = null;
        $scope.num2 = null;
        $scope.operator = null;

        $scope.numPress = function(num) {
            console.log("NumPress called with", num);
            $scope.numTracker += num.toString();
            console.log("numTracker ==", $scope.numTracker);
            $scope.display = $scope.numTracker;
        };

        $scope.operatorPress = function(op) {
            console.log("operatorPress was called with", op);
            if ($scope.numTracker) {
                $scope.num1 = parseFloat($scope.numTracker);
            } else {
                $scope.num1 = 0;
            }
            $scope.operator = op;
            console.log("num1 is", $scope.num1);
            $scope.numTracker = "";
        };

        $scope.evaluate = function() {
            if ($scope.numTracker) {
                $scope.num2 = parseFloat($scope.numTracker);
            } else {
                $scope.num2 = 0;
            }

            switch ($scope.operator) {
                case "+":
                    $scope.display = $scope.num1 + $scope.num2;
                    break;
                case "-":
                    $scope.display = $scope.num1 - $scope.num2;
                    break;
                case "*":
                    $scope.display = $scope.num1 * $scope.num2;
                    break;
                case "/":
                    $scope.display = ($scope.num1 / $scope.num2).toFixed(2);
                    break;
                default:
                    console.log("default should never be reached");
                    break;
            }
            //clear the memeory of the calc

            $scope.numTracker = "";
            $scope.num1 = null;
            $scope.num2 = null;
            $scope.operator = null;
        };
        $scope.clear = function() {
            $scope.display = 0;
            $scope.numTracker = "";
            $scope.num1 = null;
            $scope.num2 = null;
            $scope.operator = null;
        };

    }]);
