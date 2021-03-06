

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
                        ngChecked:'=?',
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

    }
})();








