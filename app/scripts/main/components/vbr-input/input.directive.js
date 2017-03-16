/**
 * Created by moustafabaiou on 3/16/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrInput',

            function (TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: InputCtrl,
                    controllerAs: 'vm',
                    link: link,
                    restrict: 'E',
                    scope: {},
                    templateUrl: TEMPLATES+'/vbr-input/input.html'
                };
                return directive;

                function link(scope, element, attrs) {

                }
            });

    InputCtrl.$inject = [];

    /* @ngInject */
    function InputCtrl() {

    }

})();

