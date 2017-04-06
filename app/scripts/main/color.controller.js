/**
 * Created by jamienola on 4/4/17.
 */
(function () {
    'use strict';

    angular
        .module('vbr-style-guide')
        .controller('ColorController',
        ['$http',

            function ColorController($http) {
                var col = this;
                $http.get('/variables.json').success(function (data) {
                    col.colors = {};
                    for (var name in data.colors) {
                        var cleanName = name.replace(/\/\/[^\n]+(\n)|\n| |"/g, '');
                        var cleanColor = data.colors[name].replace(/\n.*/g, '');
                        col.colors[cleanName] = cleanColor;
                    }
                });
            }]);
})();

