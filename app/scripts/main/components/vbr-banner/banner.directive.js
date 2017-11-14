/**
 * Created by jpierce on 5/15/17.
 */
import module from '../../styleguide.module';
import template from './banner.html';
import BannerService from './banner.service';

const vbrBanner = module.directive('vbrBanner',
    function () {
        return {
            bindToController: true,
            controller: BannerCtrl,
            controllerAs: 'vm',
            restrict: 'AE',
            link: link,
            scope: {
                "bannerName": '@'
            },
            template: template
        };

        function link (scope, element, attrs) {

        }
    });

function BannerCtrl ($scope, $sce, $timeout, $compile) {

    var vm = this;

    $scope.$watch('vm',function(o,n){
        BannerService.listen(vm.bannerName, function (data) {

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

            $scope.$digest();
        });
    });

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

    /* expose close function to x icon on DOM */
    vm.close = function () {
        vm.visible = false;
        vm.hiddenCallback();
    };

    /* listen for changes and react to them */
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
        const DOMElements = document.querySelectorAll('vbr-banner[name="'+name+'"]');
        if(DOMElements.length > 1){
            console.warn("Name provided is not unique:" + name + " " + "Matches another vibrent-banner in the DOM");
            return false;
        }else{
            return true;
        }
    }

    function init(){
        let isStored = false;
        isStored = vm.observers.get(vm.name);
        if(!isStored){
            /* initilize an empty object */
            vm.observers.set(vm.name,{});
        }
    }

    init();

}

export default vbrBanner;
