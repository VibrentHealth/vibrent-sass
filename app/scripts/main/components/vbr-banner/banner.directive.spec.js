/**
 * Created by jamienola on 9/15/17.
 */

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Banner Directive', function () {
    var $compile,
        $rootScope,
        element,
        scope,
        $templateCache;

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
        scope = $rootScope.$new();
        $templateCache = _$templateCache_;
    }));


    it('Banner directive should load without crashing', function () {
        element = $compile("<vbr-banner name='test-banner'></vbr-banner>")(scope);
        scope.$digest();
        expect(true).to.equal(true);
    });

    it('The class should init with success',function () {
        element = $compile("<vbr-banner name='test-banner'></vbr-banner>")(scope);
        scope.$digest();
        var div = element.find('div')[0];
        expect(div.classList.contains('success')).to.equal(true);
    });


});
