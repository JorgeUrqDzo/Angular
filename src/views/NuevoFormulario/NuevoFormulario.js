(function () {
    'use strict';

    angular.module('Controles')
        .config(config)
        .controller('NuevoformularioCtrl', NuevoformularioCtrl);


    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider.when('/crearFormulario', {
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
        var url = 'http://localhost:48603/Arbol/Inicializar/' + $routeParams.id;
        $http.get(url).then(function (res) {
            var obj = angular.fromJson(res.data)[0];
            vm.formulario = obj;
            vm.secciones = obj.nodes;
            vm.controles = vm.secciones.nodes;
        });
    }


})();
