(function() {
    'use strict';


    angular.module('Controles').component('accordionPanel', {
        transclude: true,
        require: {
            'parent': '^accordion'
        },

        bindings: {
            heading: '@',
            idseccion: '@'
        },
        templateUrl: 'src/shared/accordionPanel/accordionPanel.html',
        // template: '<div class="panel panel-default">' +
        // '<div class="panel-heading" ng-click="$ctrl.select()">' +
        // '<h3 class="panel-title">{{$ctrl.heading}}</h3>' +
        // '</div>' +
        // '<div class="panel-body" ng-transclude ng-if="$ctrl.selected"></div>' +
        // '</div>',
        controller: AccordionPanelController
    });

    AccordionPanelController.$inject = ['Variables'];
    function AccordionPanelController(Variables) {
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
        };
    }


})();
