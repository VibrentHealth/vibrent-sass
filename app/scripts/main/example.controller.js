/**
 * Created by moustafabaiou on 3/16/17.
 */
(function () {
    'use strict';

    angular
        .module('vbr-style-guide')
        .controller('ExampleController',

            function ExampleController(BannerService) {
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

                ex.alert = function () {
                  console.log("BLUR");
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
                            value:'apple',
                            checked: false
                        },
                        {
                            value: 'banana',
                            checked: false
                        },
                        {
                            value: 'pear',
                            checked: true
                        }
                    ];

                ex.vegetables = [
                    {
                        displayValue: 'apple',
                        value: 'ACS12345',
                        checked: false
                    },
                    {
                        displayValue: 'banana',
                        value: 'a;lskdf;',
                        checked: true
                    },
                    {
                        displayValue: 'pear',
                        value: 'sjvjs',
                        checked: false
                    }
                ];

                ex.radioOptions = [
                    'option 1',
                    'option 2',
                    'option 3'
                ];

                ex.radioDisabled = false;

                ex.disableRadio = function () {
                    ex.radioDisabled = !ex.radioDisabled;
                };

                ex.radioModel = null;

                ex.hideBanner = function (name) {
                    BannerService.set(name,{hidden:true});
                };

                ex.clickNum = 0;

                ex.alertfn = function () {
                    alert("This is a recompiled alert");
                };

                ex.showBanner = function (name) {

                    var configurationObj = {
                        visible: true,
                        message: "<a ng-click='ex.alertfn()'>ALERT ME!</a>" + " " + name + " " + "clicked:",
                        icon: "icon_vibrent_check",
                        type: "success",
                        hiddenCallback: function () {
                            alert("Im hidden");
                        },
                        shownCallback: function () {
                            alert("Im Shown");
                        },
                        visibilityDuration: Infinity,
                        canClose: false,
                        cssClassList: ""
                    };
                    ex.clickNum++;
                    BannerService.set(name,configurationObj);
                };

                ex.radioChange = function(option){
                    console.log('the radio callback is being called for option:', option);
                };

            });
})();

