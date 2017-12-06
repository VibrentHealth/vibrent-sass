(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrRadio',
            function(TEMPLATES) {
                var directive = {
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
        vm.options = vm.options.map(function (option) {
            if (typeof option === 'string') {
                option = {
                    value: option,
                    label: option
                };
            };
            return option;
        });

        vm.selectedWrapper = function (option) {
            if(option){
                return (vm.change || angular.noop)({option: option.value});
            }
        };

        if(!angular.isDefined(vm.ngModel)){
            vm.ngModel = {};
        }

    }
})();


