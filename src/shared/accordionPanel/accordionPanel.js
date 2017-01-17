(function () {
    'use strict';

    angular.module('Controles').component('accordionPanel', {
        transclude: true,
        require: {
            'parent': '^accordion'
        },

        bindings: {
            heading: '@',
            idseccion: '@',
            padre: '@'
        },
        templateUrl: 'src/shared/accordionPanel/accordionPanel.html',
        controller: AccordionPanelController
    });

    AccordionPanelController.$inject = ['Variables', '$http', 'nzConfig'];
    function AccordionPanelController(Variables, $http, nzConfig) {
        var self = this;
        // register the panel in init
        self.$onInit = function () {
            self.parent.addPanel(self);
        };
        // Turns on the panel by changing selected to true
        self.turnOn = function () {
            self.selected = true;
        };
        // Turns off the panel by changing selected to false
        self.turnOff = function () {
            self.selected = false;
        };
        // Selects a the current selected panel
        self.select = function (id) {
            Variables.setVariable(id);
            self.parent.selectPanel(self);

            //obtener valores de la configuracion de seccion
            if (id !== undefined) {
                $http.post(nzConfig.GetSeccionConfig, JSON.stringify({ Id: id })).then(function (res) {
                    // console.log("accordionPanel seccionConfgiModel ",res.data.ObjSeccionesModel);
                }, function (err) {
                    console.log("Error: " + err);
                });
            }
        };
    }


})();
