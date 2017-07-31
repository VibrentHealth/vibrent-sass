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

    BannerCtrl.$inject = ['$sce', '$timeout','BannerService','$compile'];

    function BannerCtrl ($sce, $timeout, BannerService,$compile) {
        var vm = this;

        /* A List of classes that is piped to ng-class directive */
        vm.cssClassList = "";
        vm.type = "success";
        vm.visibilityDuration = 2000;
        vm.observers = BannerService;
        vm.canClose = false;

        /* default callbacks */
        vm.shownCallback = function () {
            return true;
        };
        vm.hiddenCallback = function () {
            return true;
        };

        /* name must be unique - enforce this */
        isNameUnique(vm.name);

        /* expose close function to x icon on DOM */
        vm.close = function () {
            vm.visible = false;
            vm.hiddenCallback();
        };

        init();

        /* listen for changes and react to them */

        vm.observers.listen(vm.name,function (data) {

            /* Check for updates to all properties */

            MessageUpdate(data);

            IconUpdate(data);

            /* checks both hidden and visible */
            Callbacks(data);

            TypeUpdate(data);

            VisibilityDurationUpdates(data);

            VisibilityUpdates(data);

            CSSUpdates(data);

            canClose(data);

        });

        function canClose(data){
            if(data.hasOwnProperty('canClose')){
                vm.canClose = data.canClose;
            }
        }

        function MessageUpdate(data){
            if(data.hasOwnProperty('message')){
                vm.message = $sce.trustAsHtml(data.message);
            }
        }

        function IconUpdate(data){
            if(data.hasOwnProperty('icon')){
                vm.icon = data.icon;
            }
        }

        function Callbacks(data){
            if(data.hasOwnProperty('hiddenCallback')){
                vm.hiddenCallback = data.hiddenCallback.bind(vm);
            }

            if(data.hasOwnProperty('shownCallback')){
                vm.shownCallback = data.shownCallback.bind(vm);
            }
        }

        function TypeUpdate(data){
            if(data.hasOwnProperty('type')){
                vm.type = data.type;
            }else{
                vm.type = "error";
            }
        }

        function VisibilityDurationUpdates(data){
            if(data.hasOwnProperty('visibilityDuration')){
                vm.visibilityDuration = data.visibilityDuration;
            }
        }

        function VisibilityUpdates(data){
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
        }

        function CSSUpdates(data){
            if(data.hasOwnProperty('cssClassList')){
                vm.cssClassList = data.cssClassList;
            }
        }

        function isNameUnique(name){
            var names = vm.observers.getKeys();
            if(names.indexOf(name) !== -1){
                throw new Error("Name provided is not unique:" + name + " " + "Matches another vibrent-banner in the DOM");
                return false;
            }else{
                return true;
            }
        }

        function init(){
            var isStored = false;
            isStored = vm.observers.get(vm.name);
            if(!isStored){
                /* initilize an empty object */
                vm.observers.set(vm.name,{});
            }
        }

    }
}());
