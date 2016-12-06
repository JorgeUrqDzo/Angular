(function () {
    'use strict';

    angular.module('Controles')
        .controller('CrearformularioCtrl', CrearformularioCtrl);

    CrearformularioCtrl.$inject = ['$scope', '$http', 'nzConfig', '$location', 'toaster', '$timeout'];
    function CrearformularioCtrl($scope, $http, nzConfig, $location, toaster, $timeout) {

        $scope.FormularioNew = {};
        $scope.FormularioNew.Activo = false;
        $scope.FormularioNew.Descripcion = '';
        $scope.FormularioNew.FormatoFecha = 'dd/MM/yyyy';
        $scope.FormularioNew.IdFormulario = 0;
        $scope.FormularioNew.IdTipoFormulario = '1';
        $scope.FormularioNew.Nombre = '';
        $scope.FormularioNew.UUID = null;

        var modal;
        $scope.ok = function (val) {
            modal = val;
            $http.post(nzConfig.GuardarFormularioNuevo, JSON.stringify($scope.FormularioNew)).then(successCallback, errorCallback);
        };

        function successCallback(res) {
            if (!res.data.ObjMensajeModel.Error) {
                toaster.pop("success", "Formulario Creado");
                $location.url('/crearFormulario/' + res.data.ObjMensajeModel.Id);

            }else{
                toaster.pop("error", "Ha ocurrido un error en la cración del formulario");
            }

            modal.$dismiss();
        }

        function errorCallback(err) {
            toaster.pop("error", "Ha ocurrido un error en la cración del formulario");
            modal.$dismiss();
        }
    }

})();
