app.filter('cityName', function () {
  return function (input) {
    input = input.split('');
    console.log(input[0].toUpperCase());
    return input.join('');
  };
});
