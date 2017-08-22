(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/menuapp/categories.template.html',
            binding: {
                categoriesList: '<'
            }
        });
})()
