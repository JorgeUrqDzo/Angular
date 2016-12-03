(function () {

    'use strict';


    //Los Nombres de componentes deben ser en formato camelCase
    angular.module('Controles')
        .component('formulariosList', {
            templateUrl: 'src/components/FormulariosList/FormulariosList.html',
            controller: formulariosList,
            controllerAs: "vm",
            bindings: {}
        });


    formulariosList.$inject = ['Formularios', '$uibModal', '$location'];

    function formulariosList(Formularios, $uibModal, $location) {
        var vm = this;
        vm.datos = [];

        vm.getUUID = function (uuid) {
            alert("UUID: " + uuid);
        };

        vm.editar = function (id) {
            // alert("Editar id " + id);
            $location.url('/editarFormulario/' + id);
        };

        vm.eliminar = function (id) {
            // alert("Eliminar id " + id);
            $uibModal.open({
                templateUrl: 'src/shared/ModalEliminar/ConfirmarEliminar.html',
                controller: 'ConfirmareliminarCtrl'
            }).result.then(function (result) {
                //do something with the result
                console.log(result);
            });
        };

        Formularios.getFormularios().then(function (res) {
            vm.datos = res.data.lstFormularioModel;
            // console.log(vm.datos);
        }, function (err) {
            console.error(err);
        });


    }


})();
