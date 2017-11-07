/**
 * Created by kylemills on 11/6/17.
 */
import module from '../../styleguide.module';
import template from './pagination.html';

module.directive('vbrPagination',
    function(TEMPLATES) {
        let directive = {
            bindToController: true,
            controller: PaginationCtrl,
            controllerAs: 'pc',
            link: link,
            restrict: 'E',
            scope:{
                ngModel: '=?'
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

    vm.page = 0;

    vm.inc = function(){
        vm.page++;
        $scope.$emit("INCREMENT_PAGE",vm.page);
    };

    vm.dec = function(){
        vm.page--;
        $scope.$emit("DECREMENT_PAGE",vm.page);
    };
}



