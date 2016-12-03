(function () {
    'use strict';

    angular.module('Controles')
        .component('seccionesConfig', {

            templateUrl: 'src/components/SeccionesConfig/SeccionesConfig.html',
            controller: seccionConfig,
            controllerAs: 'vm',
            bindings: {}
        });

    function seccionConfig() {
        var vm = this;
        vm.icono = "icono";
    }

})();
