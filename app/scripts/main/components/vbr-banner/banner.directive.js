/**
 * Created by jpierce on 5/15/17.
 */
(function () {
    "use strict";

    angular
        .module('vbr-style-guide')
        .directive('vbrBanner',

            function (TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: BannerCtrl,
                    controllerAs: 'vm',
                    restrict: 'E',
                    link: link,
                    scope: {
                        type: '@',
                        message: '@?',
                        closeable: '=?',
                        animated: '=?',
                        animationDuration: '@?',
                        icon: '@?customIcon'
                    },
                    templateUrl: TEMPLATES + 'vbr-banner/banner.html'
                };
                return directive;

                function link (scope, element, attrs, ngModel) {


                }
        });

    function BannerCtrl ($scope) {
        var vm = this;




    }

}());
