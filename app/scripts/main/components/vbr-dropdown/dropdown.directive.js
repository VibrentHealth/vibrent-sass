/**
 * Created by moustafabaiou on 3/16/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrDropdown',

            function (TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: DropdownCtrl,
                    controllerAs: 'vm',
                    link: link,
                    restrict: 'E',
                    scope: {},
                    templateUrl: TEMPLATES+'/vbr-dropdown/dropdown.html'
                };
                return directive;

                function link(scope, element, attrs) {

                }
            });

    DropdownCtrl.$inject = [];

    /* @ngInject */
    function DropdownCtrl() {

    }

})();

