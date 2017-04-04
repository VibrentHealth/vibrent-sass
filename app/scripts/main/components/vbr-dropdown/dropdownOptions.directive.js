/**
 * Created by moustafabaiou on 4/3/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrDropdownOptions',

            function (TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: DropdownOptionsCtrl,
                    controllerAs: 'vm',
                    link: link,
                    restrict: 'E',
                    /**
                     * acceptable values for
                     * options: an array of options objects of the type: { display: string, value: any }
                     */
                    scope: {
                        options: '=',
                        modelValue: '=',
                        changeWrapper: '&'
                    },
                    templateUrl: TEMPLATES + '/vbr-dropdown/dropdownOptions.html'
                };
                return directive;

                function link(scope, element, attrs) {

                }
            });

    DropdownOptionsCtrl.$inject = ['$document', '$timeout'];

    /* @ngInject */
    function DropdownOptionsCtrl($document, $timeout) {

        var vm = this;

        vm.setModelValue = function (option) {
            vm.modelValue = option;
            vm.changeWrapper()();
        };

    }

})();
