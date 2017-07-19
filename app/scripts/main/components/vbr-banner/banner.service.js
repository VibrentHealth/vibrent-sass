/**
 * Created by kylemills on 7/18/17.
 */



(function () {
    'use strict';

    angular
        .module('vbr-style-guide')
        .service('BannerService',
            function(){
                var vm = this;

                vm.data = {};
                vm.callbacks = {};

                vm.set = function (key, value) {
                    vm.data[key] = value;
                    notify(key);
                };

                vm.get = function (key) {
                    return vm.data[key];
                };

                var notify = function (key) {
                    if (vm.callbacks[key] !== undefined) {
                        for (var i = 0; i < vm.callbacks[key].length; i++) {
                            vm.callbacks[key][i](vm.get(key));
                        }
                    }
                };

                vm.listen = function (key, func) {
                    if (vm.callbacks[key] === undefined) {
                        vm.callbacks[key] = [];
                    }
                    vm.callbacks[key].push(func);
                };

                vm.getKeys = function () {
                    return Object.keys(vm.data);
                };
            });



}());
