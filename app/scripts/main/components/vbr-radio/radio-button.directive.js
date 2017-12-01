import angular from 'angular';
import app from '../../styleguide.module';
import template from './radio-button.html';

const vbrRadio = app.directive('vbrRadio',
    function() {
        const directive = {
            bindToController: true,
            controller: RadioCtrl,
            controllerAs: 'rb',
            link: link,
            restrict: 'E',
            scope:{
                ngModel: '=?',
                options: '=',
                inputId: '@?id',
                ngDisabled: '=?',
                vertical: '=?', //horizontal is default, pass in true for vertical
                change: '&?'
            },
            template: template
        };
        return directive;
        function link(scope, element, attrs) {

        }
    });

RadioCtrl.$inject = [];

/* @ngInject */
function RadioCtrl() {

    var vm = this;

    vm.selectedWrapper = function(option){
        if(option){
            return (vm.change || angular.noop)({option: option});
        }
    };

    if(!angular.isDefined(vm.ngModel)){
        vm.ngModel = {};
    }

}

export default vbrRadio;
