var mod = angular.module('pm', ['ui.router', 'ngResource']);

mod.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/templates/pm-home.html'
        })
        .state('all', {
            url: '/view-all',
            templateUrl: '/templates/pm-grid.html',
            controller: 'ViewAllController'
        })
        .state('new', {
            url: '/add-new',
            templateUrl: '/templates/pm-product-form.html',
            controller: 'AddNewController'
        })
        .state('all.edit', {
            url: '/edit-product/:id',
            views: {
                'read': {
                    templateUrl: '/templates/pm-product-view.html',
                    controller: 'ViewAndUpdateController'
                },
                'write': {
                    templateUrl: '/templates/pm-product-form.html',
                    controller: 'ViewAndUpdateController'
                }
            }
        })
        .state('all.view', {
            url: '/view-product/:id',
            views: {
                'read': {
                    templateUrl: '/templates/pm-product-view.html',
                    controller: 'ViewAndUpdateController'
                }
            }
        });
});

mod.run(function ($rootScope) {
    $rootScope.$on('alert', function (e, data) {
        $rootScope.message = data.message;
    });
});


mod.controller('ViewAllController', function ($scope, Product, $state) {
    Product.query(function (items) {
        $scope.products = items;
    });
    $scope.delete = function (id) {
        Product.delete({
            id: id
        }, function () {
            $state.reload();
            $scope.$emit('alert', {
                message: 'Product deleted'
            });
        });
    }
});

mod.controller('AddNewController', function ($scope, Product, $location) {
    $scope.product = {};
    $scope.save = function () {
        var newProduct = new Product();
        angular.extend(newProduct, $scope.product);
        newProduct.make = Date.now();
        newProduct.$save(function () {
            $scope.$emit('alert', {
                message: 'New Product saved'
            });
            $location.path('view-all');
        });
    }
});

mod.controller('ViewAndUpdateController', function ($scope, Product, $location, $stateParams) {
    if ($stateParams.id) {
        Product.get({
            id: $stateParams.id
        }, function (item) {
            $scope.product = item;
        })
    }
    $scope.save = function () {
        Product.update($scope.product, function () {
            $scope.$emit('alert', {
                message: 'New Product updated'
            });
            $location.path('view-all');
        });
    }
});


// To consume REST API od 'product' resource
mod.factory('Product', function ($resource) {
    var url = "http://localhost:3000/api/products/:id";
    return $resource(url, {
        id: '@id'
    }, {
        'update': {
            method: 'PUT'
        }
    });
});