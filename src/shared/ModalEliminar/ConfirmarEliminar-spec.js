describe('ConfirmareliminarCtrl', function () {

    beforeEach(module('Controles'));

    var scope, ctrl;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('ConfirmareliminarCtrl', {$scope: scope});
    }));

    it('should ...', inject(function () {

        expect(1).toEqual(1);

    }));

});
