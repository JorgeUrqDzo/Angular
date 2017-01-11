(function () {
    'use strict';

    angular.module('Controles')
        .component('seccionControlesConfig', {

            templateUrl: 'src/components/SeccionControlesConfig/seccionControlesConfig.html',
            controller: seccionControlesConfig,
            controllerAs: "self",
            bindings: {
                tabla: '@',
                controles: '=',
            }
        });

    seccionControlesConfig.$inject = ['$http', 'nzConfig', '$scope', 'Variables'];
    function seccionControlesConfig($http, nzConfig, $scope, Variables) {
        var self = this;

        self.listControles = [];
        self.configControles = {};
        self.configControles.Requerido = false;
        self.configControles.IdSeccionControlPadre = "0";

        $http.get(nzConfig.GetTipoControl).then(function (data) {
            self.listControles = data.data;

            // self.configControles.TipoControl = { Llave: 1, Titulo: 'Texto' };
            self.configControles.IdTipoControl = "1";

            console.log('tipo control ',self.listControles);
        });

        var arr = [4, 6, 7, 5];
        self.controlEnEdicion = {};
        self.IndexEdicion = -1;

        $scope.needDataConfig = function (id) {

            var index = arr.indexOf(parseInt(id));

            return index > -1;
        };

        $scope.$watch(function () {
            // return Variables.getTableSelected();
            return self.tabla;
        }, function (newValue, oldValue) {
            // if (newValue !== oldValue) {
                if (newValue !== "" && newValue !== "Sin Asignar") {
                    // var objGetTableColumnsNamesModel = { columnName: Variables.getTableSelected() };
                    var objGetTableColumnsNamesModel = { columnName: self.tabla };
                    $http.post(nzConfig.GetTableColumnName, JSON.stringify(objGetTableColumnsNamesModel)).then(function (data) {
                        self.ColumnName = data.data;
                        // console.info('ColumnName ', self.ColumnName);
                    });
                } else {
                    self.ColumnName = [];
                }
            // }
        });

        self.requerido = function () {
            self.configControles.requerido = !self.configControles.requerido;
        };

        self.reset = function(){

            self.configControles = {
                requerido: false,
                // TipoControl: { Llave: 1, Titulo: 'Texto' }
                IdTipoControl: "1",
                IdSeccionControlPadre : "0"
            };

            $scope.controles[self.IndexEdicion] = self.controlEnEdicion;
            resetEdicion();
        };

        function resetEdicion(){
            self.IndexEdicion = -1;
            self.controlEnEdicion = {};
        }

        self.agregarControl = function(){
            var datos = self.configControles;

            if(self.IndexEdicion > -1){
               // $scope.controles.splice(self.IndexEdicion,1);
               $scope.controles[self.IndexEdicion] = datos;
               console.log("edicion");
               resetEdicion();
            }else{
            // if($scope.controles.indexOf(datos) < 0){
                $scope.controles.push(datos);
                self.controles = $scope.controles;
                console.log("nuevo");
            }
            self.reset();
        };

        // Controles list
        $scope.controles = [];

        function controlesTipoList(control){
            return control.IdTipoControl === 6 || control.IdTipoControl === 5;
        }

        $scope.$watch(function () {
            return Variables.getVariable()
        }, function (newValue, oldValue) {
            // if (newValue !== oldValue) {
                if (newValue !== undefined) {
                    $http.get(nzConfig.GetControlesConfig + newValue).then(function (data) {
                        $scope.controles = data.data;
                        self.controles = data.data;
                        self.controlesPadres = $scope.controles.filter(controlesTipoList);
                        console.log("ControlesList ", self.controles);
                    });
                } else {
                    $scope.controles = [];
                }
            // }
        });



        //Editar Control agregado
        $scope.editarControl = function (index) {
            self.IndexEdicion = index;
            angular.copy($scope.controles[index], self.controlEnEdicion);

            angular.copy(self.controlEnEdicion, self.configControles );
            // self.configControles = $scope.controles[index];
            self.configControles.IdTipoControl = self.configControles.IdTipoControl + "";
            self.configControles.IdSeccionControlPadre = self.configControles.IdSeccionControlPadre + "";
        };

        //Eliminar Control agregado
        $scope.eliminarControl = function (index) {
            $scope.controles.splice(index, 1);
        };
    }

})();
