/**
 * Created by kylemills on 11/3/17.
 */
import module from '../../styleguide.module';
import template from './slider.html';
import Hammer from 'hammerjs';

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
            let localPage = 0;
            let localMaxPage = Infinity;
            let DOMSlides = [].slice.call(element[0].querySelector('slides').children,1);

            scope.$on('INCREMENT_PAGE', handlePageChange);
            scope.$on('DECREMENT_PAGE', handlePageChange);

            /* Set up hammer to handle swipe events */
            let manager = new Hammer.Manager(parentElement);
            let swipe = new Hammer.Swipe();
            manager.add(swipe);

            let deltaX = 0;
            let deltaY = 0;

            function handleSwipe(e) {
                deltaX = deltaX + e.deltaX;
                let direction = e.offsetDirection;
                /* INC PAGE */
                if(direction === 2) {
                    if(localPage + 1 <= localMaxPage) {
                        scope.$broadcast('INCREMENT_PAGE', localPage + 1);
                    }
                }
                /* DEC PAGE */
                if(direction === 4) {
                    if(localPage !== 0){
                        scope.$broadcast('DECREMENT_PAGE', localPage - 1);
                    }
                }
            }

            manager.on('swipe', handleSwipe);
            /* always keep local state the same */
            function setPage(page) {
                localPage = page;
                scope.$broadcast('SET_PAGE', page);
            }

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
                    scope.$broadcast('MAX_PAGE_REACHED', page);
                    localMaxPage = page;
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
                setPage(page);
            }
        }
    });

/* @ngInject */
function SliderCtrl($scope) {

    let vm = this;
}

export default vbrSlider;
