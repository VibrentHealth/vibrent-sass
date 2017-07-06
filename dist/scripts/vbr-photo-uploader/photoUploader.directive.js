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

        vm.default = vm.default ? vm.default : '../../../images/default_profile_icon.png';

        vm.name = vm.name || vm.inputId;

        vm.maxFileSize = vm.maxFileSize || '5MB';

        console.log(vm);

        vm.ngChangeWrapper = function () {
            //do other things
            return vm.ngChange();
        };

        vm.shouldShowErrors = function () {
            return vm.form.$invalid && vm.form[vm.inputId].$invalid && (vm.form[vm.inputId].$dirty || vm.form.$submitted);
        };

        if(vm.validations){
            angular.forEach(vm.validations, function (error, key) {
                if(typeof (error.message) == 'string' && error.message.length > 0){
                    vm.validations[key].key = key;
                }
            })
        }
    }

})();

