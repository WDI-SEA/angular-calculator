angular.module('app', [])
    .controller('CalcController', ['$scope', function($scope) {

        $scope.display = 0;
        $scope.numTracker = ' ';
        $scope.num1 = null;
        $scope.num2 = null;
        $scope.operator = null;

        $scope.numClick = function(num) {
            $scope.numTracker += num.toString();
            $scope.display = $scope.numTracker;
        }


        $scope.opClick = function(op) {
            if ($scope.numTracker) {
                $scope.num1 = parseFloat($scope.numTracker);
            } else {
                $scope.num1 = 0;
            }
            $scope.operator = op;
            $scope.numTracker = ' ';
        }

        $scope.evaluate = function() {
            if ($scope.numTracker) {
                $scope.num2 = parseFloat($scope.numTracker);
            } else {
                $scope.num2 = 0;
            }

            switch ($scope.operator) {
                case '+':
                    $scope.display = $scope.num1 + $scope.num2;
                    break;
                case '-':
                    $scope.display = $scope.num1 - $scope.num2;
                    break;
                case '/':
                    $scope.display = $scope.num1 / $scope.num2.toFixed(2);
                    break;
                case '*':
                    $scope.display = $scope.num1 * $scope.num2;
                    break;
                default:
                    console.log('dunno what happened here son');
                    break;
            }
            $scope.numTracker = ' ';
            $scope.num1 = null;
            $scope.num2 = null;
            $scope.operator = null;
        }

        $scope.clear = function() {
            $scope.display = 0;
            $scope.numTracker = ' ';
            $scope.num1 = null;
            $scope.num2 = null;
            $scope.operator = null;
        }

    }]);
