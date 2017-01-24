var shopMod = angular.module('shop', ['jcs-autoValidate']);


//---------------------------------------------------

shopMod.factory('productService', function ($q, $http) {
    var url = 'http://localhost:3000/api/products';
    var service = {
        loadAll: function () {
            var defer = $q.defer();
            var promise = $http.get(url);
            promise.then(function (resp) {
                defer.resolve(resp.data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        }
    };
    return service;
});


//----------------------------------------------------

// Controller class
shopMod.controller('ShopController', function ($scope, $filter, productService) {
    var promise = productService.loadAll();
    promise.then(function (items) {
        $scope.products = items;
    }, function (error) {
        $scope.message = error;
    }, function (progress) {
        $scope.message = progress;
    });
});

shopMod.controller('TabsController', function ($scope, $filter) {
    $scope.tab = 1; // ng-init="tab=1"
    $scope.changeTab = function (index) {
        $scope.tab = index;
    }
    $scope.isTabSelected = function (index) {
        return $scope.tab === index;
    }
});

shopMod.controller('ReviewFormController', function ($scope, $filter) {
    $scope.review = {
        author: 'nag@gmail.com'
    };
    $scope.submitReview = function (product) {
        // send this rview data to server-side with product-id ( later )
        product.reviews.push($scope.review);
        $scope.review = {
            author: 'nag@gmail.com'
        };
        $scope.reviewForm.$setPristine(true);
    }
});

//----------------------------------------------------

// Filter
shopMod.filter('priceDiscount', function () {
    return function (originalPrice, discount) {
        if (discount) {
            return originalPrice - discount;
        } else {
            return originalPrice - 1;
        }
    }
});

//----------------------------------------------------


// Directives
shopMod.directive('productTitle', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-title.html'
    };
});
shopMod.directive('productTabs', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-tabs.html'
    };
});
shopMod.directive('productReviewForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/product-review-form.html'
    };
});


//----------------------------------------------------