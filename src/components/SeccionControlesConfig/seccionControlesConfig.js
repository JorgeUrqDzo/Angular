(function () {
    'use strict';

    angular.module('Controles')
        .component('seccionControlesConfig', {

            templateUrl: 'src/components/SeccionControlesConfig/seccionControlesConfig.html',
            controller: seccionControlesConfig,
            controllerAs: "self",
            bindings: {}
        });

    seccionControlesConfig.$inject = ['$http', 'nzConfig', '$scope','Variables']
    function seccionControlesConfig($http, nzConfig, $scope, Variables) {
    	var self = this;

    	self.listControles = [];
    	self.configControles = {};
    	self.configControles.requerido = true;

    	$http.get(nzConfig.GetTipoControl).then(function(data){
    		self.listControles = data.data;

    		self.configControles.tipoControl = {Llave: 1, Titulo: 'Texto'}
    	});

    	


		$scope.$watch(function(){
            return Variables.getTableSelected()
        },function(newValue, oldValue){
            if(newValue !== oldValue){
                if(newValue !== "" && newValue !== "Sin Asignar"){
                    var objGetTableColumnsNamesModel = {columnName : Variables.getTableSelected()};
			    	$http.post(nzConfig.GetTableColumnName, JSON.stringify(objGetTableColumnsNamesModel)).then(function(data){
			    		self.ColumnName = data.data;
			    	});
                }else{
                    self.ColumnName = [];
                }
            }
        });

    	self.requerido = function(){
    		self.configControles.requerido = !self.configControles.requerido;
    	}
    }

})();
