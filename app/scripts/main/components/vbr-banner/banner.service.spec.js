/**
 * Created by kylemills on 9/18/17.
 */

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Banner Directive', function () {
    var $compile,
        $rootScope,
        BannerService,
        $timeout,
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
    beforeEach(inject(function(_$rootScope_,_$templateCache_,_BannerService_,_$timeout_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
        BannerService = _BannerService_;
        scope = $rootScope.$new();
        $templateCache = _$templateCache_;
    }));


   it('Should Init Without Crashing',function () {
       expect(true).to.equal(true);
   });

   it('Should allow the user to set a value',function () {
      BannerService.set('testKey',1);
      expect(BannerService.get('testKey')).to.equal(1);
   });

   it('Should allow the value to be set multiple times',function () {
       BannerService.set('testKey',1);
       expect(BannerService.get('testKey')).to.equal(1);
       BannerService.set('testKey',2);
       expect(BannerService.get('testKey')).to.equal(2);
       BannerService.set('testKey',"cool");
       expect(BannerService.get('testKey')).to.equal("cool");
   });

    it('Should store the value of multiple keys',function () {
        BannerService.set('testKey1',1);
        BannerService.set('testKey2',2);
        expect(BannerService.get('testKey1')).to.equal(1);
        expect(BannerService.get('testKey2')).to.equal(2);
    });

    it('Should emit a function when the value is set and a listener is provided',function (done) {
        BannerService.set('testKey',1);
        expect(BannerService.get('testKey')).to.equal(1);
        BannerService.listen('testKey',function () {
           expect(true).to.equal(true);
           done();
        });
        BannerService.set('testKey',2);
    });

    it('Should return the value of the stored key in the callback function',function (done) {
        BannerService.listen('testKey',function (value) {
            expect(value).to.equal(200);
            done();
        });
        BannerService.set('testKey',200);
    });
});
