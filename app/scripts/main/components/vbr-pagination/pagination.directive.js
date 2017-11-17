/**
 * Created by kylemills on 11/6/17.
 */
import module from '../../styleguide.module';
import template from './pagination.html';

const vbrPagination = module.directive('vbrPagination',
    function() {
        let directive = {
            bindToController: true,
            controller: PaginationCtrl,
            controllerAs: 'pc',
            link: link,
            restrict: 'E',
            scope:{
                maxPage: '@',
                minPage: '@'
            },
            template: template
        };
        return directive;
        function link(scope, element, attrs) {

        }
    });

/* @ngInject */
function PaginationCtrl($scope) {

    let vm = this;

    console.log(vm);

    vm.page = 0;

    vm.inc = function(){
        if(vm.page+1 <= vm.maxPage) {
            vm.page++;
            $scope.$emit("INCREMENT_PAGE", vm.page);
        }
    };

    vm.dec = function(){
        if(vm.page-1 >= vm.minPage) {
            vm.page--;
            $scope.$emit("DECREMENT_PAGE", vm.page);
        }
    };

    $scope.$on("SET_PAGE", function (event, page) {
        vm.page = page;
    });

}



export default vbrPagination;
