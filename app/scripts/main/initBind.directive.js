/**
 * Created by kylemills on 7/27/17.
 */
import app from './styleguide.module';


app.directive('initBind', function($compile) {
    return {
        restrict: 'A',
        link : function (scope, element, attr) {

            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    var mutated_values = [].slice.call(element[0].children)
                        .map( function(node) { return node; });
                    $compile(mutated_values[0])(scope.$parent);
                });
            });

            observer.observe(element[0], {
                attributes: true,
                childList: true,
                characterData: true
            });

        }
    };
});

