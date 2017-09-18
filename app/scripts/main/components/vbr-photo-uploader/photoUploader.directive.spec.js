/**
 * Created by kylemills on 9/18/17.
 */

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Photo Uploader', function () {
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
        element = $compile("<form name='someForm'><vbr-photo-uploader id='test-photo' form='someForm'></vbr-photo-uploader></form>")(scope);
        scope.$digest();
        expect(true).to.equal(true);
    });

    it('Should Render a single Image',function () {
        element = $compile("<form name='someForm'><vbr-photo-uploader id='test-photo' form='someForm'></vbr-photo-uploader></form>")(scope);
        scope.$digest();
        expect(element.find('img').length).to.equal(1);
    });

    it('Should Render a label for the image',function () {
        element = $compile("<form name='someForm'><vbr-photo-uploader id='test-photo' form='someForm' label='Some Label'></vbr-photo-uploader></form>")(scope);
        scope.$digest();
        expect(element.find('label').html().toString()).to.have.string('Some Label');
    });

    it('Should Allow user to provide model via the scope',function () {
        scope.myModel = "";
        element = $compile("<form name='someForm'><vbr-photo-uploader id='test-photo' form='someForm' label='Some Label' ng-model='myModel'></vbr-photo-uploader></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-photo-uploader').isolateScope().vm;
        expect(isolatedScope.ngModel).to.equal("");
    });

    it('Should Allow user to provide max file size via the scope',function () {
        scope.max = 1200;
        element = $compile("<form name='someForm'><vbr-photo-uploader id='test-photo' form='someForm' label='Some Label' max-file-size='max'></vbr-photo-uploader></form>")(scope);
        scope.$digest();
        var isolatedScope = element.find('vbr-photo-uploader').isolateScope().vm;
        expect(isolatedScope.maxFileSize).to.equal(1200);
    });

});
