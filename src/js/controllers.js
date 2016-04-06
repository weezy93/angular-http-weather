app.controller('weatherController', ['$scope', '$http', '$location', function ($scope, $http, $location)  {

  var city = $location.url().substring(1);
  $scope.city = city;

  $http({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=bf1698a78938b727de493831b13e7625&units=imperial'
  })
  .then(function (result) {
    $scope.temp = result.data.main.temp;
  });

}]);
// bf1698a78938b727de493831b13e7625
