app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/main.html',
    }).when('/denver', {
      templateUrl: '../templates/denver.html',
      controller: 'weatherController'
    });
});



// $routechangeStart - do something before a route hits. like authentication
