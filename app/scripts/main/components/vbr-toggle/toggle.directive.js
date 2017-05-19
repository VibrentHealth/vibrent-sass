/**
 * Created by moham on 5/15/2017.
 */
/**
 * Created by moustafabaiou on 3/16/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbr-toggle',

            function (TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: ToggleCtrl,
                    controllerAs: 'tc',
                    link: link,
                    restrict: 'E',
                    scope: {
                        ngModel: '=',
                        ngRequired: '=?',
                        ngChange: '&?',
                        ngMinlength: '=?',
                        ngMaxlength: '=?',
                        ngPattern: '@?',
                        ngTrim: '=?',
                        ngDisabled: '=?',
                        type: '@',
                        form: '=',
                        inputId: '@?id',
                        label: '@?',
                        placeholder: '@?',
                        validations: '=?'
                    },
                    templateUrl: TEMPLATES + '/vbr-toggle/toggle.html'
                };
                return directive;

                function link(scope, element, attrs) {

                }
            });

    ToggleCtrl.$inject = [];

    /* @ngInject */
    function ToggleCtrl() {
        var tc = this;
        console.log(tc);

        if(tc.validations){
            angular.forEach(tc.validations, function (error, key) {
                if(typeof (error.message) == 'string' && error.message.length > 0){
                    tc.validations[key].key = key;
                }
            })
        }

        tc.errorClass = function () {
            if (!tc.ngDisabled && tc.validations) {
                return tc.form[tc.inputId].$invalid && (tc.form[tc.inputId].$dirty || tc.form.$submitted)
            } else {
                return tc.form[tc.inputId].$invalid;
            }
        };


    }

})();
