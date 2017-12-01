/**
 * Created by moustafabaiou on 4/3/17.
 */

import app from '../../styleguide.module';
import template from './dropdownOptions.html';

const vbrDropdownOptions = app.directive('vbrDropdownOptions',

    function (TEMPLATES) {
        const directive = {
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
                disabled: '=',
                changeWrapper: '&'
            },
            template: template
        };
        return directive;

        function link(scope, element, attrs) {

        }
    });

/* @ngInject */
function DropdownOptionsCtrl($document, $timeout) {

    var vm = this;

    vm.setModelValue = function (option) {
        if(!vm.disabled) {
            vm.modelValue = option;
            vm.changeWrapper()();
        }
    };

}

export default vbrDropdownOptions;
