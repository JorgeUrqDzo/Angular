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

    formulariosList.$inject = ['Formularios', '$uibModal', '$location', 'loading', 'toaster', 'NgTableParams'];

    function formulariosList(Formularios, $uibModal, $location, loading, toaster, NgTableParams) {
        var vm = this;
        vm.datos = [];
        // $rootScope.setLoading(loading.loadingConfig);
        var loading = pleaseWait(loading.loadingConfig);

        // _____________________________________________________________________________________
        //PAGINACION

        vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
        };

        vm.pageChanged = function () {
            console.log('Page changed to: ' + vm.currentPage);
        };

        vm.maxSize = 10;
        vm.bigTotalItems = vm.datos.length;
        vm.bigCurrentPage = 1;

        // _____________________________________________________________________________________
        vm.valor = true;

        vm.success = function () {
            toaster.pop("info", "UUID Copiado");
        };

        vm.fail = function (err) {
            console.error('Error!', err);
            toaster.pop("error", "Error al Copiar UUID");
        };

        vm.getUUID = function (uuid) {
            vm.FormUUID = uuid;
            angular.element('#modalUUID').modal();
        };

        vm.editar = function (id) {
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
            vm.bigTotalItems = vm.datos.length;
            console.log("length form arr", vm.datos.length);
            loading.finish();
        }, function (err) {
            console.error(err);
            loading.updateLoadingHtml('<h3 class="loading-message"> Oops. Ha ocurrido un Error. :( </h3> <p>Intente más tarde</p>')
        });

        vm.crearForm = function () {
            $uibModal.open({
                templateUrl: 'src/views/CrearFormulario/CrearFormulario.html',
                controller: 'CrearformularioCtrl'
            }).result.then(function (result) {
                //do something with the result
            });
        };
    }
})();
