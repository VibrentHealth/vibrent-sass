import angular from 'angular';
import module from '../../styleguide.module';

module.directive('vbrRadio',
    function(TEMPLATES) {
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
            templateUrl:TEMPLATES+'/vbr-radio/radio-button.html'
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

