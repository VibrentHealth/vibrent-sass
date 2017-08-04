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
                        form: '=',
                        ngModel: '=',
                        ngChange: '&?',
                        ngRequired: '=?',
                        maxFileSize: '=?',
                        validations: '=?',
                        inputId: '@?id',
                        name: '=?',
                        ngDisabled: '=?',
                        label: '@?',
                        default: '=?defaultImageUrl'
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

        vm.default = vm.default ? vm.default : 'data:image/png;base64,data:image/png;base64,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';

        vm.name = vm.name || vm.inputId;

        vm.maxFileSize = vm.maxFileSize || '5MB';

        vm.ngChangeWrapper = function () {
            //do other things
            return vm.ngChange();
        };

        vm.shouldShowErrors = function () {
            return vm.form.$invalid && vm.form[vm.inputId].$invalid && (vm.form[vm.inputId].$dirty || vm.form.$submitted);
        };

    }

})();

