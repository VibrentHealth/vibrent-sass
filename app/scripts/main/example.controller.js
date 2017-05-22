/**
 * Created by moustafabaiou on 3/16/17.
 */
(function () {
    'use strict';

    angular
        .module('vbr-style-guide')
        .controller('ExampleController',

            function ExampleController() {
                var ex = this;

                ex.someValue = {
                    firstThing: 'thing to be passed'
                };


                //input example
                ex.someModel = '';
                ex.someValidations = {
                    'email': {
                        message: 'Email is invalid'
                    },
                    'minlength': {
                        message: 'This is an example minlength error'
                    },
                    'maxlength': {
                        message: 'This is an example maxlength error'
                    },
                    'pattern': {
                        message: 'This is an example pattern error'
                    }
                };
                ex.disabled = false;
                ex.disableInput = function () {
                    ex.disabled = !ex.disabled;
                };

                ex.dropdownOptions = [
                    {display: 'option 1', value: 1},
                    {display: 'option 2', value: 2},
                    {display: 'option 3', value: 3},
                    {display: 'option 4', value: 4}
                ];

                ex.disableDropdown = function () {
                    ex.disabledDropdown = !ex.disabledDropdown;
                };

                ex.someFunction = function () {
                    console.log('change function called');
                };

                ex.tooltipTesting = 'Some instructions for the input';

                ex.banner = {
                    type: 'success',
                    message: 'Your request is a yuuuuge success and you may have dessert ads;lfj asdfjadklsf;lak sdfjka sdf;lk adsl;f ',
                    autoClose: false,
                    onCloseFn: function (args) {
                        console.log('banner close callback fn fired: ' + args.firstThing);
                    }

                };
            });

})();

