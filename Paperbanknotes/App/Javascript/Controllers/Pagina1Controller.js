var autoApp = angular.module('AutoApp');

autoApp.controller('Pagina1Controller', ['$scope', '$http', function ($scope, $http) {
    var auto = {
        id: 1,
        naam: "S model",
        merk: "Tesla",
        bouwjaar: "2014",
        aantal_deuren: 5,
        Hybride: false,
        Elektrisch: true,
        beschrijving: "De nieuwe Tesla S is een innovatieve auto en de beste in zijn soort."
    }

    var auto2 = {
        id: 2,
        naam: "S model",
        merk: "Tesla",
        bouwjaar: "2014",
        aantal_deuren: 5,
        Hybride: false,
        Elektrisch: true,
        beschrijving: "De nieuwe Tesla S is een innovatieve auto en de beste in zijn soort."
    }

    $http.get("/api/car").then(function (response) {
        // gelukt
        $scope.autos.push(response.data);
    }, function (response) {
        // mislukt

    });

    //$http.post

    //$http.put

    //$http.delete

    $scope.auto = auto;

    $scope.autos = [auto, auto2];
}]);