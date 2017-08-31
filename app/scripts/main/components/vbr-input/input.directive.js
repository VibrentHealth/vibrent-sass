/**
 * Created by moustafabaiou on 3/16/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrInput',

            function (TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: InputCtrl,
                    controllerAs: 'vm',
                    link: link,
                    restrict: 'E',
                    scope: {
                        ngModel: '=',
                        type: '@',
                        form: '=',
                        ngRequired: '=?',
                        change: '&?',
                        ngBlur: '&?',
                        ngMinlength: '=?',
                        ngMaxlength: '=?',
                        ngPattern: '=?',
                        match: '@?',
                        ngTrim: '=?',
                        ngDisabled: '=?',
                        inputId: '@?id',
                        label: '@?',
                        placeholder: '@?',
                        validations: '=?',
                        tooltip: '=?'
                    },
                    templateUrl: TEMPLATES + '/vbr-input/input.html'
                };
                return directive;

                function link(scope, element, attrs) {

                }
            });

    InputCtrl.$inject = [];

    /* @ngInject */
    function InputCtrl() {
        var vm = this;

        vm.errorClass = function () {
            if (!vm.ngDisabled && vm.validations) {
                return vm.form[vm.inputId].$invalid && (vm.form[vm.inputId].$dirty || vm.form.$submitted)
            } else {
                return vm.form[vm.inputId].$invalid;
            }
        };

        vm.errorsVisible = false;

        vm.focused = function () {
            if(vm.errorsVisible){
                vm.errorsVisible = false;
            }
        };

        vm.blurred = function () {
            if(!vm.errorsVisible){
                vm.errorsVisible = true;
            }
            if(typeof vm.ngBlur === 'function') {
                vm.ngBlur();
            }
        };


        vm.shouldShowErrors = function () {
            return vm.errorsVisible  && vm.form.$invalid && vm.form[vm.inputId].$invalid && (vm.form[vm.inputId].$dirty ||vm.form.$submitted);
        };

    }

})();

