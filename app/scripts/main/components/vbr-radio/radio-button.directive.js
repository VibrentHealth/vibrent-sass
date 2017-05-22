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
                        class: '=',
                        name:'@',
                        ngModel: '=',
                        ngRequired: '=?',
                        ngChecked:'=?',
                        ngChange: '&?',
                        ngTrim: '=?',
                        ngDisabled: '=?',
                        type: '@',
                        value: '=',
                        form: '=',
                        inputId: '@?id',
                        label: '@?'
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
        var rb = this;

        if(rb.validations){
            angular.forEach(rb.validations, function (error, key) {
                if(typeof (error.message) === 'string' && error.message.length > 0){
                    rb.validations[key].key = key;
                }
            });
        }
    }
})();


