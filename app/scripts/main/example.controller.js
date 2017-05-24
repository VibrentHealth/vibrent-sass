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

                //input example
                ex.someModel = ' ';
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
                ex.disableInput = function (value) {
                    console.log('Fired');
                    return value === true;
                };

                ex.isActive = false;
                ex.activeButton = function() {
                    ex.isActive = !ex.isActive;
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

                ex.toggleMe = function(){
                    ex.isDisabled = !ex.isDisabled;
                };

                ex.fruits =
                    [
                        {name:'Apple',selected:true},
                        {name:'Orange',selected:true},
                        {name:'Pear',selected:true},
                        {name:'Grapes',selected:true}
                    ];

                ex.toggleOptions = [
                    {display:"don't know"},
                    {display:"prefer not to answer"}
                ];
            });
})();

