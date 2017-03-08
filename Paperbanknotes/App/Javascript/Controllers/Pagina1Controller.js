var autoApp = angular.module('AutoApp');

autoApp.controller('Pagina1Controller', ['$scope', function ($scope) {
    var auto = {
        naam: "S model",
        merk: "Tesla",
        aantal_deuren: 5,
        Hybride: false,
        Elektrisch: true,
        beschrijving: "De nieuwe Tesla S is een innovatieve auto en de beste in zijn soort."
    }

    $scope.auto = auto;
}]);