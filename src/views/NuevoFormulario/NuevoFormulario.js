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


    NuevoformularioCtrl.$inject = ['$http', '$routeParams', 'nzConfig', 'loading'];
    function NuevoformularioCtrl($http, $routeParams, nzConfig, loading) {
        var vm = this;
        vm.formulario = [];
        // vm.IdForm =
        vm.idSeccion = 0;

        var loading = pleaseWait(loading.loadingConfig);

        var url = nzConfig.GetFormData + $routeParams.id;
        $http.get(url).then(function (res) {
            if (res.data !== "") {
                var obj = angular.fromJson(res.data)[0];
                vm.formulario = obj;
                if (obj.nodes) {
                    vm.secciones = obj.nodes;
                    // console.log(vm.secciones);
                    vm.controles = vm.secciones.nodes;
                }
                loading.finish();
            } else {
                vm.formulario.text = "Titulo Form";
                loading.finish();
            }

        });

        vm.setIdSeccion = function (id) {
            vm.idSeccion = vm.idSeccion++;
        }

        vm.editarControl = function(id){
            console.info('id ', id);
        }

        vm.eliminarControl = function(id){
            console.info('id ', id);
        }
    }


})();
