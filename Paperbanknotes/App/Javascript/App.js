
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
              templateUrl: 'App/Partials/Pagina1.html',
              controller: "Pagina1Controller",
              constrollerAs: 'Pag1'
          }).
          when('/pagina2', {
              templateUrl: 'App/Partials/Pagina2.html',
              controller: "newCarController"
          }).
          when('/pagina3', {
              templateUrl: 'App/Partials/Pagina3.html'
          }).
          when('/wijzig/:id', {
              templateUrl: 'App/Partials/Wijzig.html',
              controller: "updateCarController"
          }).

          otherwise('/');
    }
  ]);

