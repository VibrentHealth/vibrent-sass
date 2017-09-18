/**
 * Created by kylemills on 9/18/17.
 */

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Input Directive', function () {
    var $compile,
        $rootScope,
        $templateCache,
        $httpBackend,
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
    beforeEach(inject(function(_$compile_, _$rootScope_,_$templateCache_,$injector){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $templateCache = _$templateCache_;
        scope = $rootScope.$new();
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET('uib/template/tooltip/tooltip-popup.html').respond(200,'');

    }));

    it('Should init without crashing',function () {
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm'></vbr-input></form>")(scope);
        scope.$digest();
        expect(true).to.equal(true);
    });

    it('Should allow users the ability to provide a model via the scope',function () {
        scope.myModel = "Some Text";
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' ng-model='myModel'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        expect(isolatedScope.ngModel).to.equal(scope.myModel);
    });


    it('Should allow users the ability to provide maxLength via the scope',function () {
        scope.maxLength = 5;
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' ng-maxlength='maxLength'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        expect(isolatedScope.ngMaxlength).to.equal(5);
    });

    /* TODO: We should provide a more accurate interface if an input has errors */
    it('Should show an error if the text exceeds a length',function () {
        scope.myModel = "S";
        scope.maxLength = 5;
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' ng-model='myModel' ng-maxlength='maxLength'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        isolatedScope.ngModel = "21331221321312";
        scope.$digest();
        expect(isolatedScope.form[isolatedScope.inputId].$invalid).to.equal(true);
    });

    it('Should allow users the ability to provide minLength via the scope',function () {
        scope.minLength = 50;
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' ng-minlength='minLength'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        expect(isolatedScope.ngMinlength).to.equal(50);
    });

    it('Should show an error if the text does not meet a specified length',function () {
        scope.minLength = 5;
        scope.myModel = "S";
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' ng-minlength='minLength' ng-model='myModel'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        expect(isolatedScope.form[isolatedScope.inputId].$invalid).to.equal(true);
    });

    it('Should allow users the ability to provide minLength and maxLength via the scope',function () {
        scope.minLength = 50;
        scope.maxLength = 100;
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' ng-minlength='minLength' ng-maxlength='maxLength'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        expect(isolatedScope.ngMinlength).to.equal(50);
        expect(isolatedScope.ngMaxlength).to.equal(100);
    });

    it('Should allow users the ability to provide ng-required via the scope',function () {
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' ng-required='false'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        expect(isolatedScope.ngRequired).to.equal(false);
    });

    it('Should allow users the ability to provide disabled via the scope',function () {
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' ng-disabled='false'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        expect(isolatedScope.ngDisabled).to.equal(false);
    });

    it('Should allow users the ability to trim the input via the scope',function () {
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' ng-trim='true'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        expect(isolatedScope.ngTrim).to.equal(true);
    });

    it('Should allow users the ability to provide a placeholder via the DOM',function () {
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' placeholder='This is a test'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        expect(isolatedScope.placeholder).to.equal('This is a test');
    });

    it('Should allow users the ability to provide a type via the DOM',function () {
        element = $compile("<form name='someForm'><vbr-input id='someInput' form='someForm' type='email'></vbr-input></form>")(scope);
        scope.$digest();
        var inputElement = element.find('vbr-input');
        var isolatedScope = inputElement.isolateScope().vm;
        expect(isolatedScope.type).to.equal('email');
    });

});
