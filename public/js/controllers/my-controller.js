angular.module("cadastroclientes")
.controller("MyController", function($interval, $scope) {
  this.SECOND; // PUBLIC if you're using the controller function syntax
  $scope.count = 0; // PUBLIC if you're using the $scope syntax
  
  // $interval wraps setInterval
//   setInterval(function() {
      // do something here.
  }, 1000);
  var SECOND = 1000; // PRIVATE
  var MINUTE = SECOND * 60;
  var HOUR = MINUTE * 60;
  var DAY = HOUR * 24;
  var oneTimer = $interval(function() {
    if ($scope.count >= 5) {
      $interval.cancel(oneTimer);
    } else {
      $scope.count++;
    }
  }, 1 * SECOND);
  
  $scope.cancelInterval = function() {
    $interval.cancel(oneTimer);
  }
});