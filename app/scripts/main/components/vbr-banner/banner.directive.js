/**
 * Created by jpierce on 5/15/17.
 */
(function () {
    'use strict';

    function BannerCtrl ($scope, $sce, $timeout) {
        var vm = this;

        vm.type = vm.type || 'error';
        vm.message = vm.message || 'Error';
        vm.animated = vm.animated || false;
        vm.closeDelay = vm.closeDelay || 15000;
        vm.animationDuration = vm.animated && vm.animationDuration ? vm.animationDuration : 1000;
        vm.customIcon = vm.type === 'success' ? vm.icon || 'icon_vibrent_check' : null;
        vm.autoClose = !vm.autoClose ? vm.autoClose : true;
        vm.messageAsHTML = $sce.trustAsHtml(vm.message);

        vm.close = function () {
            var timeUntilClose = vm.closeDelay + vm.animationDuration;
            $timeout(function () {
                $scope.$emit('banner.close', {callback: vm.onClose});
            }, timeUntilClose);
        };


    }

    function link (scope, element, attr) {
        scope.$on('banner.close', function (event, data) {
            // add functionality to physically close banner and then...
            (data.callback || angular.noop)();
        });
    }

    angular
        .module('vbr-style-guide')
        .directive('vbrBanner', ['$sce',

            function (TEMPLATES) {
                return {
                    bindToController: true,
                    controller: BannerCtrl,
                    controllerAs: 'vm',
                    restrict: 'AE',
                    link: link,
                    scope: {
                        type: '=',
                        message: '=',
                        autoClose: '=?',
                        onClose: '&?',
                        closeDelay: "@?",
                        animated: '=?',
                        animationDuration: '@?',
                        icon: '@?customIcon'
                    },
                    templateUrl: TEMPLATES + '/vbr-banner/banner.html'
                };
        }]);

}());
