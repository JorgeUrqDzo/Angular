(function () {
    'use strict';

    angular.module('Controles')
        .config(config)
        .controller('NuevoformularioCtrl', NuevoformularioCtrl);


    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider.when('/crearFormulario/:id', {
            templateUrl: 'src/views/NuevoFormulario/NuevoFormulario.html',
            controller: 'NuevoformularioCtrl',
            controllerAs: 'vm'
        });
        $routeProvider.when('/editarFormulario/:id', {
            templateUrl: 'src/views/NuevoFormulario/NuevoFormulario.html',
            controller: 'NuevoformularioCtrl',
            controllerAs: 'vm'
        });
    }


    NuevoformularioCtrl.$inject = ['$http', '$routeParams', 'FormConfig'];
    function NuevoformularioCtrl($http, $routeParams, FormConfig) {
        var vm = this;
        vm.formulario = [];
        var url = 'http://localhost:48603/Arbol/Inicializar/' + $routeParams.id;
        $http.get(url).then(function (res) {
            if (res.data !== "") {
                var obj = angular.fromJson(res.data)[0];
                vm.formulario = obj;
                if (obj.nodes) {
                    vm.secciones = obj.nodes;
                    vm.controles = vm.secciones.nodes;
                }
            } else {
                vm.formulario.text = "Titulo Form";
            }
        });
    }


})();
