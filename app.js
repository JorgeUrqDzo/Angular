angular.module('Controles', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ngSanitize', 'dx', 'toaster']);

angular.module('Controles').config(function ($routeProvider, $locationProvider) {

    // $routeProvider.when('bandejaFormularios',{templateUrl: 'src/views/BandejaFormularios/BandejaFormularios.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo: '/bandejaFormularios'});

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });

});


//Configuracion de rutas API
var host = 'http://localhost:48603/';
angular.module('Controles')
    .constant('nzConfig', {
        GetFormularios: host + 'Formularios/GetFormularios',
        GetFormData: host + 'Arbol/Inicializar'
    });


angular.module('Controles')
    .filter('SiNo', function () {
        return function (input) {
            return input ? 'Si' : 'No';
        }
    });


angular.module('Controles').run(function ($rootScope) {

    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
