'use strict';

var app = angular.module('shopularApp', ['ui.router', 'LocalStorageModule']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('shopularHome', {
        url: '/',
        abstract: true,
        template: '<ui-view></ui-view>',
        controller: "LoginController as login"
    }).state('shopularHome.login', {
        url: 'login',
        templateUrl: './templates/login.html',
        controller: "LoginController as login"
    }).state('shopularHome.view', {
        url: 'view-products',
        templateUrl: './templates/viewProducts.html',
        controller: "ProductsController as products"
    }).state('shopularHome.add', {
        url: 'add-products',
        templateUrl: './templates/addProducts.html',
        controller: "ProductsController as products"
    });
});

// (function() {
//     'use strict';
//
//     const app = angular.module('shopular', []);
//
//     app.controller('ShopularController', function(allInventories, $q) {
//         this.allInventory = {};
//         this.tax = 0.0575; // 5.75 to sales tax percentage
//         console.log('in');
//         this.allItemsArray = [];
//         this.minLength = 2;
//         this.orderByField = 'totalPrice';
//         this.reverseSort = false;
//
//         this.newItem = {
//             "id": '',
//             "name": '',
//             "price": '',
//             "quantity": '',
//             "color": '',
//             "discount": ''
//         };
//
//
//
//
//         $q.when(allInventories.get('./src/js/data/inventory.json')).then((response) => {
//             console.log(response.data);
//             this.allInventory = response.data;
//         }).catch((error) => {
//             console.log(error);
//         });
//
//         this.getPrice = function(price, discount) {
//             let totalPrice = (price - discount); // two decimal places
//             let adjustedPrice = totalPrice * this.tax;
//             totalPrice += adjustedPrice;
//             return totalPrice.toFixed(2);
//         };
//
//         this.getDiscount = function(discount) {
//             if (discount > 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         };
//
//         this.addItems = function() {
//             this.allItemsArray.push(this.newItem);
//         };
//     });
//
//
// })();
