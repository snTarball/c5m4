(function () {
		'use strict';

		angular.module('MenuApp')
				.config(RoutesConfig);

		RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
		function RoutesConfig($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/');
				$stateProvider

						.state('home', {
								url: '/',
								templateUrl: 'src/templates/home.template.html'
						})

						.state('categories', {
								url: '/categories',
								templateUrl: 'src/templates/categories.template.html',
								controller: 'CategoriesController',
								controllerAs: 'ctrl',
								resolve: {
										categoriesList: [
											'MenuDataService',
											function(MenuDataService) {
												return MenuDataService.getAllCategories();
										}]
								}
						})

						.state('items', {
								url: '/items/{shortname}',
								templateUrl: 'src/templates/items.template.html',
								controller: 'ItemsController',
								controllerAs: 'ctrl',
								resolve: {
										itemsList: [
											'$stateParams',
											'MenuDataService',
											function($stateParams, MenuDataService) {
												console.log($stateParams);
												return MenuDataService.getItemsForCategory($stateParams.shortname);
										}],
								}
						});
		}
})()
