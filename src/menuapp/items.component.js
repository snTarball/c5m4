(function () {
    'use restrict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/menuapp/items.template.html',
            binding: {
                itemsList: '<'
            }
        });;
})()
