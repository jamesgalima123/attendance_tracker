angular.module('myApp')
  .controller('MainController',['$interval', function($interval) {
    var vm = this;
    console.log(vm);
    vm.currentTime = new Date();
    vm.logs = [];
    vm.title = 'test';
    // Update time every second
    $interval(function() {
      vm.currentTime = new Date();
    }, 1000);

    vm.timeIn = function() {
      vm.logs.push("Time In at " + vm.currentTime.toLocaleTimeString());
    };

    vm.timeOut = function() {
      vm.logs.push("Time Out at " + vm.currentTime.toLocaleTimeString());
    };
  }]);