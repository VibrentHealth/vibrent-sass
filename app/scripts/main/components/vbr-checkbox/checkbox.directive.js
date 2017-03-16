/**
 * Created by moustafabaiou on 3/16/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrCheckbox',

            function (TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: CheckboxCtrl,
                    controllerAs: 'vm',
                    link: link,
                    restrict: 'E',
                    scope: {},
                    templateUrl: TEMPLATES+'/vbr-checkbox/checkbox.html'
                };
                return directive;

                function link(scope, element, attrs) {

                }
            });

    CheckboxCtrl.$inject = [];

    /* @ngInject */
    function CheckboxCtrl() {

    }

})();

