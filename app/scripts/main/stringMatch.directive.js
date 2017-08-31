/**
 * Created by jamienola on 8/31/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive("stringMatch", function () {
            return {
                require: "ngModel",
                link: function (scope, element, attrs, ctrl) {
                    ctrl.$parsers.unshift(function (viewValue) {
                        var origin = scope.$eval(attrs["match"]);
                        if (origin !== viewValue) {
                            ctrl.$setValidity("match", false);
                            return undefined;
                        } else {
                            ctrl.$setValidity("match", true);
                            return viewValue;
                        }
                    });

                }
            };
        });
})();
