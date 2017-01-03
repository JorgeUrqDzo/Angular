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


    formulariosList.$inject = ['Formularios', '$uibModal', '$location','loading'];


    function formulariosList(Formularios, $uibModal, $location, loading) {
        var vm = this;
        vm.datos = [];
        // $rootScope.setLoading(loading.loadingConfig);
        var loading = pleaseWait(loading.loadingConfig);

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
            });
        };

        Formularios.getFormularios().then(function (res) {
            vm.datos = res.data.lstFormularioModel;
            loading.finish();
        }, function (err) {
            console.error(err);
            loading.updateLoadingHtml('<h3 class="loading-message"> Oops. Ha ocurrido un Error. :( </h3> <p>Intente más tarde</p>')
        });

        vm.crearForm = function(){
            $uibModal.open({
                templateUrl: 'src/views/CrearFormulario/CrearFormulario.html',
                controller: 'CrearformularioCtrl'
            }).result.then(function(result){
                //do something with the result
            });
        };





    }


})();
