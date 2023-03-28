//KEY UQwag36gTSXa8sFu7rwfjOgGl7ASg5tJ
//Test keys | Base URL: test.api.amadeus.com
var Amadeus = require('https://test.api.amadeus.com/v1/');

var amadeus = new Amadeus({
  clientId: 'UQwag36gTSXa8sFu7rwfjOgGl7ASg5tJ',
  clientSecret: 'ChVhAqAf93dwVXu3'
});

amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2022-06-01',
    adults: '2'
}).then(function(response){
  console.log(response.data);
}).catch(function(responseError){
  console.log(responseError.code);
});
