/**
 * Created by jpierce on 5/15/17.
 */
(function () {
    'use strict';

    function BannerCtrl () {
        var vm = this;

        vm.type = vm.type || 'error';
        vm.message = vm.message || 'Error';
        vm.animated = vm.animated || false;
        vm.animationDuration = vm.animationDuration || '1';
        vm.customIcon = vm.type === 'success' ? vm.icon || 'icon_vibrent_check' : null;
        vm.closeable = vm.closeable || false;
    }

    function link (scope, element, attrs) {

    }

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
                        type: '=',
                        message: '=',
                        closeable: '=?',
                        animated: '=?',
                        animationDuration: '@?',
                        icon: '@?customIcon'
                    },
                    templateUrl: TEMPLATES + '/vbr-banner/banner.html'
                };
                return directive;
        });

}());
