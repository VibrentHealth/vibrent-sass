/**
 * Created by moustafabaiou on 3/16/17.
 */

import angular from 'angular';
import module from '../../styleguide.module';
import template from './dropdown.html';

module.directive('vbrDropdown',

    function (TEMPLATES) {
        const directive = {
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
                change: '&?',
                ngDisabled: '=?',
                inputId: '@?id',
                label: '@?',
                placeholder: '@?'
            },
            template: template
        };
        return directive;

        function link(scope, element, attrs) {

        }
    });

/* @ngInject */
function DropdownCtrl($document, $timeout) {

    let vm = this;

    vm.selectPlaceholder = function () {
        return vm.ngModel === '';
    };

    vm.flipDownArrow = function () {
        if(!vm.ngDisabled) {
            vm.active = !vm.active;
        }
    };

    vm.resetDownArrow = function () {
        //give this a timeout so that blur events
        // don't occur before click events select options
        if(!vm.ngDisabled) {
            $timeout(function () {
                vm.active = false;
            }, 100);
        }
    };

    vm.ngChangeWrapper = function () {
        vm.resetDownArrow();
        return  (vm.change || angular.noop)();
    };
}
