describe('updateCarController', function () {
    var httpBackend, rootScope, controller, scope;
    beforeEach(module('AutoApp'));

    beforeEach(inject(function ($httpBackend, $rootScope, $controller, $routeParams) {

        httpBackend = $httpBackend

        rootScope = $rootScope
        controller = $controller
        scope = rootScope.$new();

    }));


    afterEach(function () {
       httpBackend.verifyNoOutstandingExpectation();
       httpBackend.verifyNoOutstandingRequest();
    });


    it("get chosen car id", inject(function ($http) {
        httpBackend.expectGET("/api/car/1").respond("id: 1, naam: auto");
        httpBackend.expectGET("App/Partials/Home.html").respond("nvt");
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