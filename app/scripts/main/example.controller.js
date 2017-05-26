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


                ex.somePhotoModel = null;
                ex.photoValidations = {
                    'required': {
                        message: 'please add a photo'
                    },
                    'pattern': {
                        message: 'This file must be an image'
                    },
                    'maxSize': {
                        message: 'The file is too big'
                    }
                };

                ex.errorBanner = {
                    type: 'error',
                    message: 'Some error occured <a href="">here</a>!',
                    autoClose: false,
                    onCloseFn: function (args) {
                        console.log('banner close callback fn fired: ' + args.firstThing);
                    },
                    animated: true,
                    animationDuration: 3000,
                    animationName: 'squeeze-up'
                };

                ex.successBanner = {
                    type: 'success',
                    message: 'Congratulations, your request is a yuuuuge <a href="">success</a>',
                    autoClose: false,
                    onCloseFn: function (args) {
                        console.log('banner close callback fn fired: ' + args.firstThing);
                    },
                    animated: true,
                    animationDuration: 3000,
                    animationName: 'squeeze-up'
                };

                ex.checkboxDisabled = false;

                ex.disableCheckbox = function () {
                    ex.checkboxDisabled = !ex.checkboxDisabled;
                };

                ex.checkedCallback = function (option) {
                    console.log('the checkbox callback is being called for option:', option);
                };

                ex.fruits =
                    [
                        {
                            value:'Apple',
                            checked: false
                        },
                        {
                            value:'Orange',
                            checked: false
                        },
                        {
                            value:'Pear',
                            checked: true
                        },
                        {
                            value:'Grapes',
                            checked: true
                        }
                    ];

                ex.vegetables = [
                    {
                        displayValue: 'carrot',
                        value: 'ACS12345',
                        checked: false
                    },
                    {
                        displayValue: 'brussel sprouts',
                        value: 'a;lskdf;',
                        checked: true
                    },
                    {
                        displayValue: 'potato',
                        value: 'sjvjs',
                        checked: false
                    }
                ];

                ex.toggleOptions = [
                    {display:"don't know"},
                    {display:"prefer not to answer"}
                ];
            });
})();

