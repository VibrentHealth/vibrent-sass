/**
 * Created by kylemills on 11/3/17.
 */
import module from '../../styleguide.module';
import template from './slider.html';


module.directive('vbrSlider',
    function(TEMPLATES) {
        let directive = {
            bindToController: true,
            controller: SliderCtrl,
            controllerAs: 'sc',
            link: link,
            restrict: 'E',
            transclude: {
                slides: 'slides',
                paginationslot: 'paginationslot'
            },
            scope:{
                ngModel: '=?'
            },
            template: template
        };
        return directive;
        function link(scope, element, attrs) {

            var parentElement = element[0].querySelector("slides");
            var DOMSlides = [].slice.call(element[0].querySelector("slides").children,1);

            scope.$on("INCREMENT_PAGE", handlePageChange);
            scope.$on("DECREMENT_PAGE", handlePageChange);

            /*DOMSlides.reverse().map(function(slide){
             parentElement.appendChild(slide);
             }); */

            function handlePageChange(event, page){
                /* get width of the new item */
                var itemWidth = DOMSlides[0].clientWidth;
                /* calculate offset of entire slide */
                var offset = (-itemWidth * page) + 1 + "px";
                /* Apply new offset */
                offset = "transform:translateX("+offset+")";
                parentElement.setAttribute("style", offset);
            }
        }
    });

/* @ngInject */
function SliderCtrl($scope) {

    var vm = this;

    $scope.$on("INCREMENT_PAGE", handlePageChange);
    $scope.$on("DECREMENT_PAGE", handlePageChange);

    function handlePageChange(event, page){

    }
}

