/**
 * Created by moustafabaiou on 3/16/17.
 */

import module from '../../styleguide.module';
import template from './input.html';

const vbrInput =  module
    .directive('vbrInput',

        function () {
            const directive = {
                bindToController: true,
                controller: ["$scope", InputCtrl],
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
                    match: '=?',
                    ngTrim: '=?',
                    ngDisabled: '=?',
                    inputId: '@?id',
                    label: '@?',
                    placeholder: '@?',
                    validations: '=?',
                    tooltip: '=?'
                },
                template: template
            };
            return directive;
            function link(scope, element, attrs) {
            }
        });



function InputCtrl($scope) {

    let vm = this;

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

    $scope.$watch('vm.match', matchInput);
    $scope.$watch('vm.ngModel', matchInput);

    function matchInput() {
        vm.form[vm.inputId].$setValidity('match', vm.match === undefined || vm.match === vm.ngModel);
    }

}

export default vbrInput;
