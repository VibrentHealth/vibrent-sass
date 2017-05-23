/**
 * Created by jpierce on 5/15/17.
 */
(function () {
    'use strict';

    angular
        .module('vbr-style-guide')
        .directive('vbrBanner',

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
                        closeDelay: "=?",
                        animated: '=?',
                        animationDuration: '=?',
                        animationName: '=?',
                        icon: '@?'
                    },
                    templateUrl: TEMPLATES + '/vbr-banner/banner.html'
                };

                function link (scope, element, attrs) {

                }
        });

    BannerCtrl.$inject = ['$sce', '$timeout', '$q', '$log'];

    function BannerCtrl ($sce, $timeout, $q, $log) {
        var vm = this;

        vm.type = vm.type === 'success' ? vm.type : 'error';
        vm.message = vm.message || 'Error';
        vm.visible = true;
        vm.animated = vm.animated || false;
        vm.closeDelay = vm.closeDelay || 3000;
        vm.animationDuration = vm.animated && vm.animationDuration ? vm.animationDuration : 0;
        vm.animationName = vm.animationName || 'none';
        vm.icon = vm.type === 'success' ? vm.icon || 'icon_vibrent_check' : null;
        vm.autoClose = !vm.autoClose ? vm.autoClose : true;
        vm.onClose = vm.onClose || angular.noop;
        vm.messageAsHTML = $sce.trustAsHtml(vm.message);

        vm.containerEl = angular.element(document.querySelector('#vbr-banner-container'));

        vm.close = function () {
            vm.hideContainer(vm.containerEl, vm.animationName).then(function (resp) {
                if (resp.isHidden) {
                    $log.info('container hidden?: ' + resp.isHidden);
                    vm.visible = false;
                    vm.onClose();
                }
            }, function (errResp) {
                $log.info('container hidden?: ' + errResp.isHidden);
                if (!errResp.isHidden) {
                    vm.close();
                }
            });
        };

        vm.hideContainer = function (container, transitionName) {
            // var deferred = $q.defer();

            // container.toggleClass(transitionName);
            // $timeout(function () {
            //     //
            // }, vm.animationDuration);
            return $q(function (resolve, reject) {
                container.toggleClass(transitionName);
                $log.info('hiding container in - ' + vm.animationDuration);
                $timeout(function () {
                    if (container.hasClass(transitionName)) {
                        resolve({isHidden: true});
                    } else {
                        reject({isHidden: false});
                    }
                }, vm.animationDuration);
            });

            // return deferred.promise;
        };

        if (vm.autoClose) {
            $timeout(function () {
                vm.close();
            }, vm.closeDelay);
        }

    }
}());
