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
                     * multiple: boolean true or false
                     * size: number of visible options
                     */
                    scope: {
                        ngModel: '=',
                        ngRequired: '=?',
                        ngChange: '&?',
                        ngDisabled: '=?',
                        form: '=',
                        inputId: '@?id',
                        label: '@?',
                        placeholder: '@?',
                        options: '=',
                        multiple: '@?',
                        size: '@?'

                    },
                    templateUrl: TEMPLATES + '/vbr-dropdown/dropdown.html'
                };
                return directive;

                function link(scope, element, attrs) {

                }
            });

    DropdownCtrl.$inject = ['$document'];

    /* @ngInject */
    function DropdownCtrl($document) {

        var vm = this;

        vm.selectPlaceholder = function () {
            return vm.ngModel == '';
        };

        vm.flipDownArrow = function () {
            vm.active = !vm.active;
        };

        vm.resetDownArrow = function () {
            vm.active = false;
        };

        vm.ngChangeWrapper = function () {
            vm.resetDownArrow();
            return vm.ngChange();
        }
    }

})();

