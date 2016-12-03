(function () {
    'use strict';


    angular.module('Controles')
        .component('secciones', {
            templateUrl: 'src/components/Secciones/Secciones.html',
            controller: seccionesComponent,
            controllerAs: 'vm',
            bindings: {}
        });

    seccionesComponent.$inject = ['FormConfig'];
    function seccionesComponent(FormConfig) {
        var vm = this;
        var obj = FormConfig.getSeccionesData.data;
        vm.NombreForm = "Nombre Formulario";
        console.log(obj);
        if (obj.text !== "")
            vm.NombreForm = obj.text;
        else
            vm.NombreForm = 'Sin Asignar';

        vm.nodos = obj.nodes;

    }

})();
