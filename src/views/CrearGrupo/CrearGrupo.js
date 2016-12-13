(function () {
    'use strict';

    angular.module('Controles')
        .controller('CreargrupoCtrl', CreargrupoCtrl);

    CreargrupoCtrl.$inject = ['$scope'];
    function CreargrupoCtrl($scope) {
        var vm = this;
        $scope.Grupo = {};

        $scope.Grupo.IdFormulario = '';

        var modal;
        $scope.ok = function (val) {
            modal = val;
            modal.$close($scope.Grupo);
        };

    }


})();
