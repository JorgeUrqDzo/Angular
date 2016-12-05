angular.module('Controles')
    .filter('SiNo', function () {
        return function (input) {
            return input ? 'Si' : 'No';
        }
    });
