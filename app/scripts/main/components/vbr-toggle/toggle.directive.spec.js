/**
 * Created by kylemills on 9/18/17.
 */

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Toggle Directive', function () {
    var $compile,
        $rootScope,
        $templateCache,
        element,
        scope;

    beforeEach(function () {
        angular.mock.module('vbr-style-guide');
    });

    /* Transform HTML into loadable module via ng-html2js*/
    beforeEach(function () {
        angular.mock.module('my.templates');
    });

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_,_$templateCache_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $templateCache = _$templateCache_;
        scope = $rootScope.$new();

    }));

    it('Should init without crashing',function () {
        element = $compile("<form name='someForm'><vbr-toggle id='test-toggle' form='someForm'></vbr-toggle></form>")(scope);
        scope.$digest();
        expect(true).to.equal(true);
    });

});
