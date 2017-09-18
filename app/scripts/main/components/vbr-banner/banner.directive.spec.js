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
    beforeEach(inject(function(_$compile_, _$rootScope_,_$templateCache_,_BannerService_,_$timeout_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
        BannerService = _BannerService_;
        scope = $rootScope.$new();
        $templateCache = _$templateCache_;
    }));


    it('Banner directive should load without crashing', function () {
        element = $compile("<vbr-banner name='test-banner'></vbr-banner>")(scope);
        scope.$digest();
        expect(true).to.equal(true);
    });

    it('Should init with a success class',function () {
        element = $compile("<vbr-banner name='test-banner'></vbr-banner>")(scope);
        scope.$digest();
        var div = element.find('div')[0];
        expect(div.classList.contains('success')).to.equal(true);
    });

    it('Should update the name when the scope is updated' ,function () {
        element = $compile("<vbr-banner name='other-banner'></vbr-banner>")(scope);
        scope.$digest();
        var isolatedScope = element.isolateScope().vm;
        expect(isolatedScope.name).to.equal('other-banner');
    });

    it('Should update the scope when the bannerService is called',function () {
        element = $compile("<vbr-banner name='other-banner'></vbr-banner>")(scope);
        scope.$digest();
        BannerService.set('other-banner',{visible:true});
        scope.$digest();
        var isolatedScope = element.isolateScope().vm;
        expect(isolatedScope.visible).to.equal(true);
    });

    it('Should Become Hidden after two seconds',function () {
        element = $compile("<vbr-banner name='other-banner'></vbr-banner>")(scope);
        scope.$digest();
        BannerService.set('other-banner',{visible:true,visibilityDuration:100});
        scope.$digest();
        var isolatedScope = element.isolateScope().vm;
        $timeout.flush();
        expect(isolatedScope.visible).to.equal(false);
    });

    it('Should Allow users to close the modal',function () {
        element = $compile("<vbr-banner name='other-banner'></vbr-banner>")(scope);
        scope.$digest();
        BannerService.set('other-banner',{visible:true});
        scope.$digest();
        var isolatedScope = element.isolateScope().vm;
        isolatedScope.close();
        expect(isolatedScope.visible).to.equal(false);
    });

    it('Should not allow the user to not close the modal when canClose is set to false',function () {
        element = $compile("<vbr-banner name='other-banner'></vbr-banner>")(scope);
        scope.$digest();
        BannerService.set('other-banner',{visible:true,canClose:false});
        scope.$digest();
        var closeButton = element.find('.icon_vibrent_x').html();
        expect(closeButton).to.equal(undefined);
    });

    it('Should not allow the user to close the modal when canClose is set to true',function () {
        element = $compile("<vbr-banner name='other-banner'></vbr-banner>")(scope);
        scope.$digest();
        BannerService.set('other-banner',{visible:true,canClose:true});
        scope.$digest();
        var closeButton = element.find('span')[1];
        expect(closeButton).to.not.equal(undefined);
    });



});
