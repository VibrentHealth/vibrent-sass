/**
 * Created by jamienola on 4/4/17.
 */


import module from './styleguide.module';



module.controller('ColorController',
['$http',

    function ColorController($http) {
        var col = this;
        $http.get('/variables.json').success(function (data) {
            col.colors = {};
            for (let name in data.colors) {
                let cleanName = name.replace(/\/\/[^\n]+(\n)|\n| |"/g, '');
                let cleanColor = data.colors[name].replace(/\n.*/g, '');
                col.colors[cleanName] = cleanColor;
            }
        });
    }]);


