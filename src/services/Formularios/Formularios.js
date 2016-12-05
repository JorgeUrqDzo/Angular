(function () {
    'use strict';

    angular
        .module('Controles')
        .service('Formularios', Formularios);

    Formularios.$inject = ['$http', 'nzConfig'];
    /* @ngInject */
    function Formularios($http, nzConfig) {

        this.getFormularios = get;
        this.getFormulariosData = getFormData;

        ////////////////
        function get() {
            var url = nzConfig.GetFormularios;
            return $http.get(url);
        }

        function getFormData(id) {
            var url = nzConfig.GetFormData + id;
            return $http.get(url);
        }
    }

})();
