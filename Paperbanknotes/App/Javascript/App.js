
angular
    .module('AutoApp', [        
        'ngRoute',
        
    ]);

angular.
  module('AutoApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.
          when('/', {
              templateUrl: 'App/Partials/Home.html'
          }).
          when('/pagina1', {
              templateUrl: 'App/Partials/Pagina1.html'
          }).
          when('/pagina2', {
              templateUrl: 'App/Partials/Pagina2.html'
          }).
          when('/pagina3', {
              templateUrl: 'App/Partials/Pagina3.html'
          }).
          otherwise('/');
    }
  ]);

