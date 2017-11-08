import module from '../../styleguide.module';
import template from './toggle.html';

const vbrToggle = module.directive('vbrToggle',
    function(TEMPLATES) {
        const directive = {
            bindToController: true,
            controller: ToggleCtrl,
            controllerAs: 'tc',
            link: link,
            restrict: 'E',
            scope:{
                class: '=',
                name:'@',
                ngModel: '=',
                ngChecked:'=?',
                ngDisabled: '=?',
                type: '@',
                value: '=',
                form: '=',
                inputId: '@?id',
                label: '@?'
            },
            template: template
        };
        return directive;
        function link(scope, element, attrs) {

        }
    });

ToggleCtrl.$inject = [];

/* @ngInject */
function ToggleCtrl() {
    var tc = this;

}

export default vbrToggle;
