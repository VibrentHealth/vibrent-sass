(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrRadio',
            function(TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: RadioCtrl,
                    controllerAs: 'rb',
                    link: link,
                    restrict: 'E',
                    scope:{
                        class: '=',
                        name:'@',
                        ngModel: '=',
                        ngChecked:'=?',
                        ngDisabled: '=?',
                        type: '@',
                        value: '=',
                        form: '=',
                        inputId: '@?id',
                        label: '@?'
                    },
                    templateUrl:TEMPLATES+'/vbr-radio/radio-button.html'
                };
                return directive;
                function link(scope, element, attrs) {

                }
            });

    RadioCtrl.$inject = [];

    /* @ngInject */
    function RadioCtrl() {
        var rb = this;

        rb.stores={
            Locations:[
                {
                    name: 'Target', id: 1, isDefault: true
                },
                {
                    name:'Best Buy',id:2,isDefault:false
                },
                {
                    name:'WalMart',id:3,isDefault:false
                }
            ]
        };

        for(var i =0;i<rb.stores.Locations.length;i++){
            if(rb.stores.Locations[i].isDefault){
                rb.storeDefault = rb.stores.Locations[i].id;
                break;
            }
        }

    }
})();


