(function () {
    'use strict';


    angular.module('Controles')
        .component('secciones', {
            templateUrl: 'src/components/Secciones/Secciones.html',
            controller: seccionesComponent,
            controllerAs: 'vm',
            bindings: {}
        });

    seccionesComponent.$inject = ['$routeParams', '$http' ,'nzConfig'];
    function seccionesComponent($routeParams, $http, nzConfig) {
        var vm = this;
        var obj = [];


        vm.NombreForm = "Nombre Formulario";
        var url = nzConfig.GetFormData + $routeParams.id;
        // var url = 'http://localhost:48603/Arbol/Inicializar/' + $routeParams.id;
        $http.get(url).then(function (res) {

            obj = angular.fromJson(res.data)[0];

            if (obj.text !== "" || obj.text !== undefined)
                vm.NombreForm = obj.text;
            else
                vm.NombreForm = 'Sin Asignar';

            vm.nodos = obj.nodes;

        });
    }

})();
