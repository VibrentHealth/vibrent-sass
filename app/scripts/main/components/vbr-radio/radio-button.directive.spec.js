/**
 * Created by kylemills on 9/18/17.
 */

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Radio Button Directive', function () {
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
        element = $compile("<form name='someForm'><vbr-radio id='test-radio' form='someForm'></vbr-radio></form>")(scope);
        scope.$digest();
        expect(true).to.equal(true);
    });

    it('Should allow the user to provide options via a parent controller', function () {
        scope.options = [{},{},{},{}];
        element = $compile("<form name='someForm'><vbr-radio id='test-radio' form='someForm' options='options'></vbr-radio></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-radio').isolateScope().rb;
        expect(isolatedScope.options.length).to.equal(4);
    });

    it('Should render provided options', function () {
        scope.options = [{},{},{},{},{},{}];
        element = $compile("<form name='someForm'><vbr-radio id='test-radio' form='someForm' options='options'></vbr-radio></form>")(scope);
        scope.$digest();
        var optionsElementList = element.find('label');
        expect(optionsElementList.length).to.equal(6);
    });

    it('Should allow user to provide model via the scope', function () {
        scope.options = [{},{},{},{},{},{}];
        scope.myModel = null;
        element = $compile("<form name='someForm'><vbr-radio id='test-radio' form='someForm' options='options' ng-model='myModel'></vbr-radio></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-radio').isolateScope().rb;
        expect(isolatedScope.ngModel).to.equal(scope.myModel);
    });

    it('Should allow user to provide ngDisabled via the scope', function () {
        scope.options = [{},{},{},{},{},{}];
        scope.disabled = true;
        element = $compile("<form name='someForm'><vbr-radio id='test-radio' form='someForm' options='options' ng-disabled='disabled'></vbr-radio></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-radio').isolateScope().rb;
        expect(isolatedScope.ngDisabled).to.equal(true);
    });

    it('Should allow user to provide vertical configuration via the scope', function () {
        scope.options = [{},{},{},{},{},{}];
        scope.vertical = true;
        element = $compile("<form name='someForm'><vbr-radio id='test-radio' form='someForm' options='options' vertical='vertical'></vbr-radio></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-radio').isolateScope().rb;
        expect(isolatedScope.vertical).to.equal(true);
    });

    it('Should update class based on vertical configuration', function () {
        scope.options = [{}];
        scope.vertical = true;
        element = $compile("<form name='someForm'><vbr-radio id='test-radio' form='someForm' options='options' vertical='vertical'></vbr-radio></form>")(scope);
        scope.$digest();

        expect(element.find('vbr-radio').find('div')[0].classList.contains('vertical')).to.equal(true);
    });


});
