(function () {
    'use strict';

    angular.module('Controles')
        .component('seccionesConfig', {

            templateUrl: 'src/components/SeccionesConfig/SeccionesConfig.html',
            controller: seccionConfig,
            controllerAs: 'vm',
            bindings: {}
        });

    seccionConfig.$inject = ['$http', 'nzConfig', '$uibModal', '$routeParams', 'toaster', 'FormConfig'];
    function seccionConfig($http, nzConfig, $uibModal, $routeParams, toaster, FormConfig) {
        var vm = this;
        var idFormulario = $routeParams.id;
        vm.iconos = [];
        vm.Seccion = {
            Columnas: "",
            Grupo: null,
            IdFormulario: idFormulario,
            IdGrupo: 0,
            IdSeccion: 0,
            IdSeccionIcono: 0,
            IdTipoSeccion: 1,
            Nombre: "",
            Tabla: "Sin Asignar",
            PrimaryKeyName: null,
            IdTipoFormulario: 0
        };
        vm.Grupos = [];

        getGrupos();

        $http.get(nzConfig.GetIconos).then(function (res) {
            vm.iconos = res.data;
        });

        $http.get(nzConfig.GetDBTablesName).then(function (res) {
            vm.tablas = res.data;
        });

        vm.CrearGrupo = function () {

            $uibModal.open({
                templateUrl: 'src/views/CrearGrupo/CrearGrupo.html',
                controller: 'CreargrupoCtrl',
            }).result.then(function (result) {
                //do something with the result
                result.IdFormulario = idFormulario;
                $http.post(nzConfig.GuardarGrupo, JSON.stringify(result)).then(successCallback, errorCallback);
            });
        };

        vm.GuardarSeccion = GuardarSeccion;

        function successCallback(res) {
            if (!res.data.MsgError) {
                toaster.pop("success", "Grupo Creado");
                getGrupos();
            } else {
                toaster.pop("error", "Ha ocurrido un error en la cración del grupo");
            }
        }

        function errorCallback(err) {
            toaster.pop("error", "Ha ocurrido un error en la cración del grupo");
        }

        function getGrupos() {
            $http.get(nzConfig.GetGrupos + '?IdFormulario=' + idFormulario).then(function (res) {
                vm.Grupos = res.data;
            });
        }

        function GuardarSeccion() {
            FormConfig.Guardar(vm.Seccion);
        }
    }

})();
