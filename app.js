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


angular.module('Controles').run(function ($rootScope, loading) {

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
