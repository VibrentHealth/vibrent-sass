/**
 * Created by kylemills on 11/6/17.
 */
import app from '../../styleguide.module';
import template from './pagination.html';

const vbrPagination = app.directive('vbrPagination',
    function() {
        let directive = {
            bindToController: true,
            controller: PaginationCtrl,
            controllerAs: 'pc',
            link: link,
            restrict: 'E',
            scope:{
                minPage: '@'
            },
            template: template
        };
        return directive;
        function link(scope, element, attrs) {

        }
    });

/* @ngInject */
function PaginationCtrl($scope, $timeout) {

    let vm = this;

    vm.page = 0;
    vm.inc = function(){
        if(vm.page+2 <= vm.maxPage) {
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
        $scope.pc.page = page;
        $scope.$evalAsync();
    });

    $scope.$on("CHANGE_MAX_PAGE", function(event, page) {
        $scope.pc.maxPage = page;
        $scope.$evalAsync();
    });

    $scope.$on("MAX_PAGE_REACHED", function (event, page) {
        page = page + 1;
        vm.maxPage = page;
    });

}



export default vbrPagination;
