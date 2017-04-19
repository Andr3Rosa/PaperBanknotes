describe('pagina1controller', function () {
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


    it("get all cars", inject(function ($http) {
        httpBackend.expectGET("App/Partials/Home.html").respond("shizzle");
        httpBackend.expectGET("/api/car").respond("auto");
        

        var scope = rootScope.$new();
        ctrl = controller('Pagina1Controller', { $scope: scope });

        httpBackend.flush();
        expect(scope.cars).toBe("auto");
    }));
});