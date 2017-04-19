describe('updateCarController', function () {
    var httpBackend, rootScope, controller, scope;
    beforeEach(module('AutoApp'));

    beforeEach(inject(function ($httpBackend, $rootScope, $controller, $routeParams) {

        httpBackend = $httpBackend

        // Get hold of a scope (i.e. the root scope)
        rootScope = $rootScope
        // The $controller service is used to create instances of controllers
        controller = $controller
        // $location = $injector.get('$location');
        //$http = $injector.get('$http');
        scope = rootScope.$new();

        //$httpBackend
        // .when("GET")
        // .respond(200, { id: 1, naam: "S model", merk: "Tesla",bouwjaar: 2014, aantal_deuren:5, originele_waarde: 81100, prijs:90000});
        //$httpBackend
        // .expect("GET", "http://localhost/api/car/1");

    }));


    afterEach(function () {
       httpBackend.verifyNoOutstandingExpectation();
       httpBackend.verifyNoOutstandingRequest();
    });


    it("get chosen car id", inject(function ($http) {
        httpBackend.expectGET("/api/car/1").respond("id: 1, naam: auto");
        httpBackend.expectGET("App/Partials/Home.html").respond("shizzle");
        var scope = rootScope.$new();
        ctrl = controller('updateCarController', { $scope: scope, $routeParams: {id: 1} });

        httpBackend.flush();
        expect(scope.auto).toBe("id: 1, naam: auto");
    }));

    it("test path of update controller", inject(function ($location) {
        var location = $location;
        ctrl = controller('updateCarController', { $scope: scope, $routeParams: { id: 1 } });

        location.path("wijzig/1");
        expect(scope.isActive('/wijzig/1')).toBe(true);
    }));
});