/**
 * Created by moustafabaiou on 5/22/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrPhotoUploader',

            function (TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: PhotoUploaderCtrl,
                    controllerAs: 'vm',
                    link: link,
                    restrict: 'E',
                    scope: {

                    },
                    templateUrl: TEMPLATES + '/vbr-photo-uploader/photoUploader.html'
                };
                return directive;

                function link(scope, element, attrs) {

                }
            });

    PhotoUploaderCtrl.$inject = [];

    /* @ngInject */
    function PhotoUploaderCtrl() {
        var vm = this;


    }

})();

