(function () {
    'use strict';

    angular.module('Controles')
        .service('ControlesService', ControlesService);

    ControlesService.$inject = ['$http'];

    function ControlesService($http) {

        this.getAll = function (url) {
            return $http.get(url);
        };

        this.save = function (action,url, arr) {
            $http.post(action + url, JSON.stringify(arr)).then(function (data) {
            });
        };

        this.get = function () {

        };

        this.getDataSource = function (action, actionDataSource, uuid, key) {
            var url = action + actionDataSource + uuid + "?key=" + key;
            // console.log(url);
            return $http.get(url);
        };
    }

})();
