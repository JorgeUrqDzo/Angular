(function () {
    'use strict';

    angular.module('Controles')
        .factory('FormConfig', FormConfig);

    FormConfig.$inject = ['$http', 'nzConfig', 'toaster', '$route'];
    function FormConfig($http, nzConfig, toaster, $route) {

        var objSeccionControlViewModel = {
            LstSeccionControl: null,
            ObjSeccionControl: null,
            ObjSeccionesModel: {}
        };

        function Guardar(ObjSeccionModel) {
            objSeccionControlViewModel.ObjSeccionesModel = ObjSeccionModel.seccion;
            objSeccionControlViewModel.LstSeccionControl = ObjSeccionModel.controles;
            console.info("ObjSeccionModel ",objSeccionControlViewModel )
            $http.post(nzConfig.GuardarSeccion, JSON.stringify(objSeccionControlViewModel)).then(function (res) {
                console.log(res.data);
                $route.reload();
                toaster.pop('success', 'Enviado');
            }, function (err) {
                console.log("Error: " + err);
            });
        }

        return {
            objSeccionControlViewModel: objSeccionControlViewModel,
            Guardar: Guardar
        };


    }

})();
