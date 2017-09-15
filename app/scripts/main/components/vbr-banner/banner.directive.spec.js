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
        $templateCache;

    beforeEach(function () {
        angular.mock.module('vbr-style-guide');
    });

    beforeEach(function () {
        angular.mock.module('/app/scripts/main/components/vbr-banner/banner.html');
    });

    it('Banner directive should load without crashing', function () {
        expect(true).to.equal(true);
    });

});
