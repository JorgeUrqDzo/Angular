(function () {
    'use strict';

    angular.module('Controles').component('accordion', {
        transclude: true,
        template: '<div class="panel-group" ng-transclude></div>',
        controller: AccordionController
    });


    function AccordionController() {
        var self = this;
        var panels = [];

        self.addPanel = function (panel) {
            panels.push(panel);
            if (panels.length > 0) {
                panels[0].turnOff();
            }
        };

        self.selectPanel = function (panel) {
            for (var i in panels) {
                if (panel === panels[i]) {

                    // panels[i].turnOn();
                    if(panels[i].selected){
                        panels[i].turnOff();
                    }else{
                        panels[i].turnOn();
                    }
                }
                else {
                    panels[i].turnOff();
                }
            }
        };
    }

})();
