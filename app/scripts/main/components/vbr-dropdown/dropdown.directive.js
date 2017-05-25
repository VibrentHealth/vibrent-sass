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
                    /**
                     * acceptable values for
                     * options: an array of options objects of the type: { display: string, value: any }
                     */
                    scope: {
                        form: '=',
                        options: '=',
                        ngModel: '=',
                        customSelect: '=?',
                        ngRequired: '=?',
                        ngChange: '&?',
                        ngDisabled: '=?',
                        inputId: '@?id',
                        label: '@?',
                        placeholder: '@?'
                    },
                    templateUrl: TEMPLATES + '/vbr-dropdown/dropdown.html'
                };
                return directive;

                function link(scope, element, attrs) {

                }
            });

    DropdownCtrl.$inject = ['$document', '$timeout'];

    /* @ngInject */
    function DropdownCtrl($document, $timeout) {

        var vm = this;

        vm.selectPlaceholder = function () {
            return vm.ngModel == '';
        };

        vm.flipDownArrow = function () {
            vm.active = !vm.active;
        };

        vm.resetDownArrow = function () {
            //give this a timeout so that blur events
            // don't occur before click events select options
            $timeout(function () {
                vm.active = false;
            }, 100);
        };

        vm.ngChangeWrapper = function () {
            vm.resetDownArrow();
            return vm.ngChange();
        };
    }

})();

