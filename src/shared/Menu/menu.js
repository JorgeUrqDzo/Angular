(function () {
    'use strict';

    angular.module('Controles').component('menuBar', {
        bindings: {
            brand: '@'
        },

        templateUrl: 'src/shared/Menu/menu.html',

        controller: menuComponent

    });

    function menuComponent() {
        this.brand = 'Brand';

        this.menu = [{
            name: "Home",
            link: "#/bandejaFormularios"
        }, {
            name: "Demo",
            link: "#/FormulariosDemo"
        }];
    }

})();


