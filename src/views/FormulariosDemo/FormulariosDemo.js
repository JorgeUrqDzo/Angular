(function () {
    'use strict';

    angular.module('Controles')
        .config(config)
        .controller('FormulariosdemoCtrl', FormulariosdemoCtrl);

    function config($routeProvider) {
        $routeProvider.when('/FormulariosDemo', {
            templateUrl: 'src/views/FormulariosDemo/FormulariosDemo.html',
            controller: 'FormulariosdemoCtrl',
            controllerAs: 'vm'
        });
    }

    FormulariosdemoCtrl.$inject = ['dxControles', 'toaster', '$location'];
    function FormulariosdemoCtrl(dxControles, toaster, $location) {
        //definiendo scope
        var vm = this;

        vm.limpiar = false;
        vm.uuidSelected = "";
        vm.uuids = [
            '99db8f88-c1a1-447f-ade0-3ec56c8ba13b',
            'a65ba1f0-21cf-40c0-9040-c5deabaa844f',
            '3f4f45ff-8b27-4ab3-82c6-becf834ce6fd'
        ];

        vm.getData = getData;

        vm.resetFrom = resetForm;

        vm.save = save;


        function getData() {
            vm.dataForm = {};
            angular.element('#btnGetData').button('loading');

            dxControles.getDataSource(vm.uuidSelected)
                .then(function (response) {

                    angular.element('#nzForm').dxForm(response);
                    // $("#nzForm").dxForm(response);

                    vm.limpiar = true;
                    angular.element('#btnGetData').button('reset');

                }, function (error) {
                    toaster.pop('error', "Error", "Ha ocurrido un error");
                    // console.error(error);
                });
        }

        function resetForm() {
            // $("#nzForm").dxForm('instance').resetValues();
            angular.element('#nzForm').dxForm('instance').resetValues();
        }

        function save() {
            // angular.element('#pleaseWaitDialog').modal();
            // console.log(angular.element('#nzForm').dxForm('instance'));
            if (angular.element('#nzForm').dxForm('instance').validate().isValid) {
                toaster.pop("success", "Datos Enviados");
                vm.resetFrom();
            }
        }

    }


})();
