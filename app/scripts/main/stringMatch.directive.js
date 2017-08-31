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
                        var origin = scope.$eval(attrs["string-match"]);
                        if (origin === null || origin === undefined || origin === viewValue) {
                            ctrl.$setValidity("match", true);
                            return viewValue;
                        } else {
                            ctrl.$setValidity("match", false);
                            return undefined;
                        }
                    });

                }
            };
        });
})();
