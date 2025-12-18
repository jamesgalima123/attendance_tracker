angular.module('myApp')
  .controller('MainController',['$interval','$timeout','TimeLog', function($interval,$timeout,TimeLog) {
    const vm = this;
    vm.currentTime = new Date();
    vm.timeLogs = TimeLog.getTimeLogs();
    vm.title = 'test';
    // Initialize flatpickr after DOM renders
    $timeout(() => {
      flatpickr("#dateRange", {
        mode: "range",
        dateFormat: "M d, Y",
        // defaultDate: ["2025-12-01", "2025-12-31"]
      });
    }, 0);
    // Update time every second
    $interval(() => {
      vm.currentTime = new Date();
    }, 1000);

    vm.timeIn = function() {
      let timeLog = new TimeLog(vm.currentTime,'in');
      TimeLog.push(timeLog);
      console.log(vm.timeLogs);
    };

    vm.timeOut = function() {
      let timeLog = new TimeLog(vm.currentTime,'out');
      TimeLog.push(timeLog);
    };
    
  }]);
  