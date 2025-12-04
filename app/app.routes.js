angular.module('myApp')
.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/views/pages/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .when('/login', {
    templateUrl: 'app/views/pages/login.html',
    controller: 'LoginController',
    controllerAs: 'vm',
    css: 'app/assets/css/login.css'
  })
    .otherwise({ redirectTo: '/login' });

}).run(function($rootScope,$http) {
  //fetch the global configs
    $http.get('config.json').then(function(res) {
            let configData = res.data;
            $rootScope.apiUrl = configData.apiUrl;
        });
    $rootScope.$on('$routeChangeSuccess', function(event, current) {
        // Remove the old page-specific stylesheet
        var oldLink = document.getElementById('page-style');
        if (oldLink) oldLink.remove();

        // Add the new one if specified
        if (current.$$route && current.$$route.css) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
           link.href = current.$$route.css + '?v=' + new Date().getTime();
            link.id = 'page-style';
            document.head.appendChild(link);
        }
    });
});
