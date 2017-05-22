

(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrToggle',
            function(TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: ToggleCtrl,
                    controllerAs: 'tc',
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
                    templateUrl:TEMPLATES+'/vbr-toggle/toggle.html'
                };
                return directive;
                function link(scope, element, attrs) {

                }
            });

    ToggleCtrl.$inject = [];

    /* @ngInject */
    function ToggleCtrl() {
        var tc = this;

        if(tc.validations){
            angular.forEach(tc.validations, function (error, key) {
                if(typeof (error.message) === 'string' && error.message.length > 0){
                    tc.validations[key].key = key;
                }
            });
        }
    }
})();
