angular.module('myApp')
  .factory('TimeLog', function() {
    return class TimeLog {
      static timeLogs = [];
      constructor(log, type) {
        this.log = log;
        this.type = type;
      }
      static push(timeLog){
        
        this.timeLogs.push(timeLog);
      }
      static getTimeLogs(){
        return this.timeLogs;
      }
      static isSameDate(d1,d2){
        return (
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate()
        );
      }
    };
  });