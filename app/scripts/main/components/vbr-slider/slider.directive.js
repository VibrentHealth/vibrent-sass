/**
 * Created by kylemills on 11/3/17.
 */
import module from '../../styleguide.module';
import template from './slider.html';


const vbrSlider = module.directive('vbrSlider',
    function() {
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


            let parentElement = element[0].querySelector('slides');

            let DOMSlides = [].slice.call(element[0].querySelector('slides').children,1);

            scope.$on('INCREMENT_PAGE', handlePageChange);
            scope.$on('DECREMENT_PAGE', handlePageChange);

            function handlePageChange(event, page){
                /* Get the parent width */
                if(page === 0) {
                    scope.$broadcast('MIN_PAGE_REACHED');
                }
                let parentWidth = parentElement.clientWidth;
                let numCards = DOMSlides.length + 1;
                /* get width of the new item */
                let itemWidth = DOMSlides[0].clientWidth;
                /* get the length of all the items */
                let listItemsWidth = itemWidth * numCards;

                let itemsPerPage = Math.max(1, Math.floor(parentWidth / itemWidth));

                let numPages = Math.ceil(numCards / itemsPerPage);

                if(page >= numPages){
                    scope.$broadcast('MAX_PAGE_REACHED');
                    return;
                }
                /* Calculate number of cards for parent width DEFAULT: 3*/
                let visibleElements = Math.max(1, Math.floor(parentWidth / itemWidth));
                /* calculate offset of entire slide */
                let minValue = parentWidth - listItemsWidth;

                let value = ((-itemWidth * page) * visibleElements) + 1;

                let offset = value + 'px';

                /* Apply new offset */
                offset = 'transform:translateX('+offset+')';
                parentElement.setAttribute('style', offset);
            }
        }
    });

/* @ngInject */
function SliderCtrl($scope) {

    let vm = this;

    $scope.$on('INCREMENT_PAGE', handlePageChange);
    $scope.$on('DECREMENT_PAGE', handlePageChange);

    function handlePageChange(event, page){

    }
}

export default vbrSlider;
