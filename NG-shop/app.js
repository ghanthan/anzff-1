/**
 * http://usejsdoc.org/
 */

var shopMod = angular.module('shop', []);

// Model ( data ) ( usually loaded from server-side )
var items = [ {
	name : 'Laptop',
	price : 198000,
	description : 'New Mac Pro',
	canBuy : true,
	notAvailable : false,
	make : Date.now(),
	images:[{thumb:'images/Laptop.png',full:''}]
}, {
	name : 'Mobile',
	price : 60000,
	description : 'New Iphone ',
	canBuy : true,
	notAvailable : false,
	make : Date.now(),
	discount : 10000,
	images:[{thumb:'images/Mobile.png',full:''}]
} ];

// Controller - class
shopMod.controller('ShopController', function() {
	// load/create model data
	// this.product = item;
	this.products = items;
});


shopMod.controller('TabsController',function(){
	this.tab=1;  //  ng-init="tab=1"
	this.changeTab=function(index){
		this.tab=index;
	};
	this.isTabSelected=function(index){
		return this.tab===index;
	};
});

// Filters

shopMod.filter('priceDiscount', function() {
	return function(originalPrice, discount) {
		if (discount) {
			return originalPrice - discount;
		} else {
			return originalPrice - 1;
		}
	};
});
