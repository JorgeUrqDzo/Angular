(function () {
    'use strict';

    angular.module('Controles')
        .component('controlesList', {


            bindings: {
                idseccion: '@'
            },
            templateUrl: 'src/components/ControlesList/ControlesList.html',

            controller: ControlesList
        });

    ControlesList.$inject = ['$http', 'nzConfig', 'Variables', '$scope'];
    function ControlesList($http, nzConfig, Variables, $scope) {

        $scope.controles = [];

        $scope.$watch(function () {
            return Variables.getVariable()
        }, function (newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue !== undefined) {
                    $http.get(nzConfig.GetControlesConfig + newValue).then(function (data) {
                        $scope.controles = data.data;
                        console.log($scope.controles);
                    });
                } else {
                    $scope.controles = [];
                }
            }
        });

        //Editar Control agregado
        $scope.editarControl = function (id) {
            console.log(id);
        }

        //Eliminar Control agregado
        $scope.eliminarControl = function (id) {
            console.log(id);
        }
    }

})();
