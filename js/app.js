console.log('app.js was loaded.');
var calculator = angular.module("calculator", []);

calculator.controller("HomeCtrl", ["$scope", function($scope){
    var times = false;
    var plus = false;
    var equals = false;
    var minus = false;
    var divide = false;
    $scope.firstVal; 
    $scope.val = 0;
    $scope.buttonPress = function(num) {
        if($scope.val == 0){
            $scope.val = num;
        }else if(times == true){
            $scope.val = num;
        }else if(plus == true){
            $scope.val = num;
        }else if(equals == true){
            $scope.val = num;
            equals = false;
        }else if(minus == true){
            $scope.val = num;
        }else if(divide == true){
            $scope.val = num;
        }else{
            $scope.val = $scope.val * 10 + num;
        }
    }
    $scope.actionPress = function(action) {
        console.log(action)
        if(action == 'clear'){
            $scope.val = 0;
        }
        if(action == 'plus'){
            plus = true;
            $scope.firstVal = $scope.val;
        }
        if(action == 'minus'){
            minus = true;
            $scope.firstVal = $scope.val;
        }
        if(action == 'times'){
            times = true;
            $scope.firstVal = $scope.val;
        }
        if(action == 'divide'){
            divide = true;
            $scope.firstVal = $scope.val;
        }
        if(action == 'equals'){
            equals = true;
            if(times == true){
                $scope.val = ($scope.val *  $scope.firstVal);
                times = false;
            }
            if(plus == true){
                $scope.val = ($scope.val + $scope.firstVal);
                plus = false;
            }
            if(minus == true){
                $scope.val = $scope.firstVal - $scope.val;
                minus = false;
            }
            if(divide == true){
                $scope.val = $scope.firstVal / $scope.val;
                divide = false;
            }
        }
    }
}]);