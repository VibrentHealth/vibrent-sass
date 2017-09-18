/**
 * Created by kylemills on 9/18/17.
 */


var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Dropdown Directive', function () {
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
        element = $compile("<form name='someForm'><vbr-dropdown id='test-dropdown' form='someForm'></vbr-dropdown></form>")(scope);
        scope.$digest();
        expect(true).to.equal(true);
    });


    it('Should allow the user to provide options via a parent controller', function () {
        scope.options = [{},{},{},{}];
        element = $compile("<form name='someForm'><vbr-dropdown id='test-dropdown' form='someForm' options='options'></vbr-dropdown></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-dropdown').isolateScope().vm;
        expect(isolatedScope.options.length).to.equal(4);
    });

    it('Should render provided options', function () {
        scope.options = [{},{},{},{},{},{}];
        element = $compile("<form name='someForm'><vbr-dropdown id='test-dropdown' form='someForm' options='options'></vbr-dropdown></form>")(scope);
        scope.$digest();
        var optionsElementList = element.find('option');
        /* Plus one placeholder option */
        expect(optionsElementList.length).to.equal(7);
    });

    it('Should allow users to provide label via the DOM', function () {
        scope.options = [{},{},{},{},{},{}];
        element = $compile("<form name='someForm'><vbr-dropdown id='test-dropdown' form='someForm' options='options' label='Some Test Label'></vbr-dropdown></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-dropdown').isolateScope().vm;
        expect(isolatedScope.label).to.equal('Some Test Label');
    });

    it('Should allow users to provide ng-required via the scope', function () {
        scope.options = [{},{},{},{},{},{}];
        element = $compile("<form name='someForm'><vbr-dropdown id='test-dropdown' form='someForm' options='options' ng-required='true'></vbr-dropdown></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-dropdown').isolateScope().vm;
        expect(isolatedScope.ngRequired).to.equal(true);
    });

    it('Should allow users to provide placeholder via the DOM', function () {
        scope.options = [{},{},{},{},{},{}];
        element = $compile("<form name='someForm'><vbr-dropdown id='test-dropdown' form='someForm' options='options' placeholder='some placeholder'></vbr-dropdown></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-dropdown').isolateScope().vm;
        expect(isolatedScope.placeholder).to.equal('some placeholder');
    });

});
