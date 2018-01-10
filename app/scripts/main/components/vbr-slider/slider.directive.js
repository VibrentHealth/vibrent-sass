/**
 * Created by kylemills on 11/3/17.
 */
import app from '../../styleguide.module';
import template from './slider.html';
import Hammer from 'hammerjs';

const vbrSlider = app.directive('vbrSlider',
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
            /* set up mutation observer config */
            const config = { childList: true };
            // Callback function to execute when mutations are observed
            const callback = function(mutationsList) {
                for(var mutation of mutationsList) {
                    if (mutation.type == 'childList') {
                        DOMSlides = [].slice.call(element[0].querySelector('slides').children,1);
                        scope.$broadcast('CHANGE_MAX_PAGE', findMaxPage());
                    }
                }
            };

// Create an observer instance linked to the callback function
            var observer = new MutationObserver(callback);

            let parentElement = element[0].querySelector('slides');
            observer.observe(parentElement, config);
            let localPage = 0;
            let localMaxPage = Infinity;
            let DOMSlides = null;
            if (element[0].querySelector('slides').childElementCount > 0) {
                DOMSlides = [].slice.call(element[0].querySelector('slides').children,1);
            }
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
                let wasSuccessful = false;
                /* INC PAGE */
                if(direction === 2) {
                    if(localPage + 1 < localMaxPage) {
                        scope.$broadcast('INCREMENT_PAGE', localPage + 1);
                        wasSuccessful = true;
                    }
                }
                /* DEC PAGE */
                if(direction === 4) {
                    if(localPage !== 0){
                        scope.$broadcast('DECREMENT_PAGE', localPage - 1);
                        wasSuccessful = true;
                    }
                }
                /* remove user's selection, which can occur during a swipe action */
                if (wasSuccessful) {
                    window.getSelection().removeAllRanges();
                }
            }

            manager.on('swipe', handleSwipe);

            /* always keep local state the same */
            function setPage(page) {
                localPage = page;
                scope.$broadcast('SET_PAGE', page);
            }

            function findMaxPage() {
                if (DOMSlides !== null) {
                    let parentWidth = parentElement.clientWidth;
                    let numCards = DOMSlides.length + 1;
                    /* get width of the new item */
                    let itemWidth = DOMSlides[0].clientWidth;
                    /* get the length of all the items */
                    let itemsPerPage = Math.max(1, Math.floor(parentWidth / itemWidth));

                    let numPages = Math.ceil(numCards / itemsPerPage);

                    localMaxPage = numPages;
                    return numPages;
                }
                return 1;
            }

            function getResizedPages() {
                let numCards = DOMSlides.length + 1;
                let parentWidth = parentElement.clientWidth;
                /* get width of the new item */
                let itemWidth = DOMSlides[0].clientWidth;
                /* get the length of all the items */
                let itemsPerPage = Math.max(1, Math.floor(parentWidth / itemWidth));

                let numPages = Math.ceil(numCards / itemsPerPage);
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
            scope.$broadcast('CHANGE_MAX_PAGE', findMaxPage());
            window.addEventListener("resize", function() {
                let newMaxPage = findMaxPage();
                handlePageChange(null, Math.min(newMaxPage - 1, localPage));
                scope.$broadcast('CHANGE_MAX_PAGE', newMaxPage);
            });
        }
    });

/* @ngInject */
function SliderCtrl($scope) {

    let vm = this;
}

export default vbrSlider;
