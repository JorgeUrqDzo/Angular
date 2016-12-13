(function () {
    'use strict';

    angular.module('Controles')
        .component('controlesList', {

            templateUrl: 'src/components/ControlesList/ControlesList.html',
            controller: ControlesList,
            bindings: {
                idForm: '@'
            }
        });

    ControlesList.$inject = ['$http', 'nzConfig'];
    function ControlesList($http, nzConfig) {
        console.log("IdForm: " + $ctrl.idForm);
    }

})();
