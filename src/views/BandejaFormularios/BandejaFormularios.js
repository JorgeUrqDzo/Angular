(function () {
    'use strict';

    angular.module('Controles')
        .config(config)
        .controller('BandejaformulariosCtrl', BandejaformulariosCtrl);


    function config($routeProvider) {
        $routeProvider.when('/bandejaFormularios', {
            templateUrl: 'src/views/BandejaFormularios/BandejaFormularios.html',
            controller: 'BandejaformulariosCtrl',
            controllerAs: 'vm'
        });
    }

    BandejaformulariosCtrl.$inject = ['Formularios', 'loading'];

    function BandejaformulariosCtrl(Formularios, loading) {
        var vm = this;
        var loading = pleaseWait(loading.loadingConfig);

        loading.finish();
    }

})();

