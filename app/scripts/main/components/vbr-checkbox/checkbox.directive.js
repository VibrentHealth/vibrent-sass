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
                        class: '=',
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
                    templateUrl:TEMPLATES+'/vbr-checkbox/checkbox.html'
                };
                return directive;
                function link(scope, element, attrs) {
                }
            });

    CheckboxCtrl.$inject = [];

    /* @ngInject */
    function CheckboxCtrl() {
        var cb =  this;

        cb.isChecked = true;

        cb.toggleMe = function(){
            cb.isChecked = !(cb.isChecked);
        };

        if(cb.validations){
            angular.forEach(cb.validations, function (error, key) {
                if(typeof (error.message) == 'string' && error.message.length > 0){
                    cb.validations[key].key = key;
                }
            });
        }

        cb.errorClass = function () {
            if (!cb.ngDisabled && cb.validations) {
                return cb.form[cb.inputId].$invalid && (cb.form[cb.inputId].$dirty || cb.form.$submitted)
            } else {
                return cb.form[cb.inputId].$invalid;
            }
        };
    }

})();

