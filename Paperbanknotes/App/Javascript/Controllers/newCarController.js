var autoApp = angular.module('AutoApp')

autoApp.controller('newCarController', ['$scope', '$location', '$http', function ($scope, $location, $http) {

    $scope.save = function (auto) {
        var temp = auto;
        $http.post("/api/car", auto).then(function (response) {
            $location.path('/pagina1');
        }, function (response) {
            $location.path('/pagina1');
        });
    };
}]);
        