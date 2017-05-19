/**
 * Created by moham on 5/15/2017.
 */
/**
 * Created by moustafabaiou on 3/16/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbr-radiobutton',
            function(TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: RadioButtonCtrl,
                    controllerAs: 'rb',
                    link: link,
                    restrict: 'E',
                    scope:{
                        class: '=',
                        ngModel: '=',
                        ngRequired: '=?',
                        ngChange: '&?',
                        ngTrim: '=?',
                        ngDisabled: '=?',
                        type: '@',
                        value: '=',
                        form: '=',
                        inputId: '@?id',
                        label: '@?'
                    },
                    templateUrl:TEMPLATES+'/vbr-checkbox/checkbox.html'
                };
                return directive;
                function link(scope, element, attrs) {
                }
            });

    RadioButtonCtrl.$inject = [];

    /* @ngInject */
    function RadioButtonCtrl() {
        var rb =  this;

        rb.isChecked = true;

        rb.toggleMe = function(){
            rb.isChecked = !(rb.isChecked);
        };

        if(rb.validations){
            angular.forEach(rb.validations, function (error, key) {
                if(typeof (error.message) == 'string' && error.message.length > 0){
                    rb.validations[key].key = key;
                }
            });
        }

        rb.errorClass = function () {
            if (!rb.ngDisabled && rb.validations) {
                return rb.form[rb.inputId].$invalid && (rb.form[rb.inputId].$dirty || rb.form.$submitted)
            } else {
                return rb.form[rb.inputId].$invalid;
            }
        };
    }

})();
