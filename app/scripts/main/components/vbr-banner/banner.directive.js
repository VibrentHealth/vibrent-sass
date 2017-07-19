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
                        name: '@'
                    },
                    templateUrl: TEMPLATES + '/vbr-banner/banner.html'
                };

                function link (scope, element, attrs) {

                }
        });

    BannerCtrl.$inject = ['$sce', '$timeout', '$q', '$log'];

    function BannerCtrl ($sce, $timeout, BannerService) {
        var vm = this;

        /* A List of classes that is piped to ng-class directive */
        vm.cssClassList = "";
        vm.type = "success";
        vm.visibilityDuration = 2000;
        vm.observers = BannerService;
        vm.shownCallback = function () {
            return true;
        };
        vm.hiddenCallback = function () {
            return true;
        };

        /* generate a GUID */

        vm.guid = vm.name || Math.random().toString();

        vm.close = function () {
            vm.visible = false;
            vm.hiddenCallback();
        };

        init();

        /* listen for changes and react to them */

        vm.observers.listen(vm.name,function (data) {

            if(data.hasOwnProperty('message')){
                vm.message = $sce.trustAsHtml(data.message);
            }

            if(data.hasOwnProperty('icon')){
                vm.icon = data.icon;
            }

            if(data.hasOwnProperty('hiddenCallback')){
                 vm.hiddenCallback = data.hiddenCallback.bind(vm);
            }

            if(data.hasOwnProperty('shownCallback')){
                vm.shownCallback = data.shownCallback.bind(vm);
            }

            if(data.hasOwnProperty('type')){
                vm.type = data.type;
            }else{
                vm.type = "error";
            }

            if(data.hasOwnProperty('visibilityDuration')){
                vm.animationDuration = data.visibilityDuration;
            }

            if(data.hasOwnProperty('cssClassList')){
                vm.cssClassList = data.cssClassList;
            }

            if(data.visible === false){
                vm.visible = false;
                if(data.hasOwnProperty('hiddenCallback')){
                    vm.hiddenCallback();
                }
            }else{
                if(data.visible === true){
                    vm.visible = true;
                    if(data.hasOwnProperty('shownCallback')){
                        vm.shownCallback();
                    }
                    if(vm.visibilityDuration !== Infinity) {
                        $timeout(function () {
                            vm.visible = false;
                            vm.hiddenCallback();
                        }, vm.visibilityDuration);
                    }
                }
            }

        });

        function init(){
            var isStored = false;
            isStored = vm.observers.get(vm.guid);
            if(!isStored){
                /* initilize an empty object */
                vm.observers.set(vm.guid,{});
            }
        }

    }
}());
