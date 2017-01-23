var shopMod = angular.module('shop', ['jcs-autoValidate']);


// Model ( data ) , loaded from server-side
var items = [{
        name: 'Laptop',
        price: 198000,
        description: 'New Mac Model',
        canBuy: true,
        notAvaialble: false,
        make: Date.now(),
        reviews: [
            { stars: 5, author: 'nag@gmail.com', comment: 'good one' },
            { stars: 2, author: 'indu@gmail.com', comment: 'costly one' }
        ]
    },
    {
        name: 'Mobile',
        price: 98000,
        description: 'New iphone ',
        canBuy: true,
        notAvaialble: false,
        make: Date.now(),
        discount: 50000,
        reviews: [
            { stars: 5, author: 'nag@gmail.com', comment: 'good one' },
            { stars: 2, author: 'indu@gmail.com', comment: 'costly one' }
        ]
    }
];

// Controller class
shopMod.controller('ShopController', function ($filter) {
    // load item(s) from server-side thru XHR API
    // this.product = item;
    this.products = items;
    console.log($filter('uppercase')("nag"));
    console.log($filter('priceDiscount')(1000,100));
});

shopMod.controller('TabsController', function ($scope,$filter) {
    $scope.tab = 1; // ng-init="tab=1"
    $scope.changeTab = function (index) {
        $scope.tab = index;
    }
    $scope.isTabSelected=function(index){
        return $scope.tab === index;
    }
});

shopMod.controller('ReviewFormController', function ($scope,$filter) {
    $scope.review = {author:'nag@gmail.com'};
    $scope.submitReview = function (product) {
        // send this rview data to server-side with product-id ( later )
        product.reviews.push($scope.review);
        $scope.review = {author: 'nag@gmail.com' };
        $scope.reviewForm.$setPristine(true);
    }
});

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


// Directives
shopMod.directive('productTitle', function () { 
    return {
        restrict: 'E',
        templateUrl:'templates/product-title.html'
    };
});
shopMod.directive('productTabs', function () { 
    return {
        restrict: 'E',
        templateUrl:'templates/product-tabs.html'
    };
});
shopMod.directive('productReviewForm', function () { 
    return {
        restrict: 'E',
        templateUrl:'templates/product-review-form.html'
    };
});






// plain-js:

// document.querySelector('h3').innerHTML = item.name;

// if (!item.canBuy) {
//     document.querySelector('button').style.display = 'none';
// }    


// jquery:
// $('h3').text(item.name);

// if (!item.canBuy) {
//     $('button').hide();
// }