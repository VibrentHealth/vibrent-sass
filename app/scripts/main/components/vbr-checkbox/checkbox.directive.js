/**
 * Created by moustafabaiou on 3/16/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrCheckbox',
            function(TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: CheckboxCtrl,
                    controllerAs: 'cb',
                    link: link,
                    restrict: 'E',
                    scope:{
                        form: '=',
                        options: '=',//array of possible options (for checkboxes)
                        inputId: '@?id',
                        ngDisabled: '=?',
                        vertical: '=?', //horizontal is default, pass in true for vertical
                        change: '&?'
                    },
                    templateUrl:TEMPLATES+'/vbr-checkbox/checkbox.html'
                };
                return directive;
                function link(scope, element, attrs) {

                }
            });

    CheckboxCtrl.$inject = [];

    /* @ngInject */
    function CheckboxCtrl() {

        var vm =  this;


        vm.checkedWrapper = function(option){
            if(option){
                return vm.change({option: option});
            }
        };

        //standardize the options
        angular.forEach(vm.options, function (option) {
            if(option.checked === undefined){
                option.checked = false;
            }
            if(option.displayValue === undefined && option.value !== undefined){
                option.displayValue = option.value;
            }
            if(option.value === undefined && option.displayValue !== undefined){
                option.value = option.displayValue;
            }
        });
    }

})();

