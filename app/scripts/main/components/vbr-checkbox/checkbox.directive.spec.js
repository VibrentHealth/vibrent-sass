/**
 * Created by kylemills on 9/18/17.
 */

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Checkbox Directive', function () {
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
        element = $compile("<form name='someForm'><vbr-checkbox options='options'></vbr-checkbox></form>")(scope);
        scope.$digest();
        expect(true).to.equal(true);
    });


    it('Should allow the user to provide options via a parent controller', function () {
        scope.options = [{},{},{}];
        element = $compile("<form name='someForm'><vbr-checkbox options='options'></vbr-checkbox></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-checkbox').isolateScope().cb;
        expect(isolatedScope.options.length).to.equal(3);
    });

    it('Should should render three checkboxes', function () {
        scope.options = [{},{},{}];
        element = $compile("<form name='someForm'><vbr-checkbox options='options'></vbr-checkbox></form>")(scope);
        scope.$digest();
        var checkboxList = element.find('vbr-checkbox');
        expect(checkboxList.find('div').length).to.equal(3);
    });

    it('Should allow user to disable the controls',function () {
        scope.options = [{},{},{}];
        element = $compile("<form name='someForm'><vbr-checkbox options='options' ng-disabled='true'></vbr-checkbox></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-checkbox').isolateScope().cb;
        expect(isolatedScope.ngDisabled).to.equal(true);
    });


});
