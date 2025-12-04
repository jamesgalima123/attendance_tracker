angular.module('myApp')
  .service('ItemService', function() {
    var items = ['Learn MVVM', 'Practice AngularJS', 'Refactor Code'];

    this.getItems = function() {
      return items;
    };

    this.addItem = function(item) {
      items.push(item);
    };
  });